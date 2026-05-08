import { chromium } from "playwright";
import ffmpegPath from "ffmpeg-static";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outputRoot = path.join(repoRoot, "automation_outputs", "xello-social");
const todayRoot = path.join(outputRoot, "post-to-publish-today");
const currentPostPath = path.join(todayRoot, "current-post.md");
const publicLogoSvgPath = path.join(repoRoot, "public", "xello-favicon-x-only.svg");
const musicLibraryPath = path.join(outputRoot, "music-library");
const xelloLogoMarkup = existsSync(publicLogoSvgPath)
  ? readFileSync(publicLogoSvgPath, "utf8").replace("<svg", '<svg aria-hidden="true"')
  : "";

const brand = {
  black: "#111315",
  charcoal: "#1b1f1c",
  ink: "#f7faf4",
  muted: "#bfc8ba",
  green: "#8fcf5c",
  greenDark: "#3f7f27",
  line: "rgba(143, 207, 92, 0.34)",
};

const now = new Date();
const dateStamp = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/London",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(now);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value = "") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function readCurrentDraft() {
  const current = await fs.readFile(currentPostPath, "utf8");
  const referencedPath = current.match(/`(\/Users\/[^`]+\.md)`/)?.[1];

  if (referencedPath && existsSync(referencedPath)) {
    return {
      sourcePath: referencedPath,
      markdown: await fs.readFile(referencedPath, "utf8"),
    };
  }

  return {
    sourcePath: currentPostPath,
    markdown: current,
  };
}

function firstHeading(markdown) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || `${dateStamp} Xello Social Post`;
}

function codeAfter(label, markdown) {
  const pattern = new RegExp(`${label}:\\s*\\n\\s*\`\`\`(?:text)?\\n([\\s\\S]*?)\\n\`\`\``, "i");
  return markdown.match(pattern)?.[1]?.trim() || "";
}

function sectionCode(sectionTitle, markdown) {
  const pattern = new RegExp(`##\\s+${sectionTitle}\\s*\\n\\s*\`\`\`(?:text)?\\n([\\s\\S]*?)\\n\`\`\``, "i");
  return markdown.match(pattern)?.[1]?.trim() || "";
}

function parseCarouselSlides(markdown) {
  const slides = [];
  const slidePattern = /(?:^|\n)(Slide\s+\d+|Final slide):\s*\n\s*```(?:text)?\n([\s\S]*?)\n```/gi;
  let match;

  while ((match = slidePattern.exec(markdown)) !== null) {
    slides.push({
      label: match[1].trim(),
      text: match[2].trim(),
    });
  }

  if (slides.length) return slides;

  const hook = codeAfter("Hook", markdown) || "Useful marketing lesson";
  const screenText = codeAfter("On-screen text", markdown);
  const lines = screenText.split("\n").filter(Boolean).slice(0, 6);
  return [hook, ...lines].map((line, index) => ({
    label: index === 0 ? "Slide 1" : `Slide ${index + 1}`,
    text: line,
  }));
}

function parseReelFrames(markdown) {
  const hook = codeAfter("Hook", markdown) || "Useful marketing lesson";
  const screenText = codeAfter("On-screen text", markdown);
  const lines = screenText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^Before ads, check:?$/i.test(line));

  const frames = [hook, ...lines].slice(0, 8);
  return frames.length ? frames : [hook];
}

function splitLeadAndBody(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  return {
    lead: lines[0] || text,
    body: lines.slice(1).join("\n"),
  };
}

function baseHtml({ width, height, body, extraCss = "" }) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    html, body {
      width: ${width}px;
      height: ${height}px;
      margin: 0;
      background: ${brand.black};
      color: ${brand.ink};
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: 0;
    }
    .canvas {
      position: relative;
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 12%, rgba(143, 207, 92, 0.18), transparent 26%),
        linear-gradient(145deg, #0e1012 0%, #181b19 54%, #101210 100%);
      padding: 72px;
    }
    .canvas::before {
      content: "";
      position: absolute;
      inset: 34px;
      border: 2px solid ${brand.line};
      border-radius: 36px;
      pointer-events: none;
    }
    .brand {
      position: absolute;
      left: 72px;
      right: 72px;
      bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${brand.muted};
      font-size: 28px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    .brand-mark {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand svg {
      width: 44px;
      height: 44px;
      display: block;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${brand.line};
      border-radius: 999px;
      color: ${brand.green};
      padding: 14px 24px;
      font-size: 24px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .green { color: ${brand.green}; }
    ${extraCss}
  </style>
</head>
<body>
  <main class="canvas">
    ${body}
    <div class="brand">
      <div class="brand-mark">${xelloLogoMarkup}<span>Xello Media</span></div>
      <span>@xello_media</span>
    </div>
  </main>
</body>
</html>`;
}

function carouselHtml(slide, index, total) {
  const { lead, body } = splitLeadAndBody(slide.text);
  const isCover = index === 0;
  const hasNumber = lead.match(/^(\d+)\.\s*(.+)$/);
  const leadText = hasNumber ? hasNumber[2] : lead;
  const number = hasNumber ? hasNumber[1] : String(index + 1).padStart(2, "0");

  return baseHtml({
    width: 1080,
    height: 1350,
    body: `
      <section class="slide">
        <div class="top-row">
          <span class="chip">${isCover ? "Checklist" : `Step ${number}`}</span>
          <span class="counter">${index + 1}/${total}</span>
        </div>
        <div class="${isCover ? "cover-copy" : "copy"}">
          ${!isCover ? `<div class="number">${escapeHtml(number)}</div>` : ""}
          <h1>${escapeHtml(leadText)}</h1>
          ${body ? `<p>${escapeHtml(body).replaceAll("\n", "<br>")}</p>` : ""}
        </div>
      </section>
    `,
    extraCss: `
      .top-row {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .counter {
        color: ${brand.muted};
        font-size: 30px;
        font-weight: 900;
      }
      .slide {
        position: relative;
        z-index: 2;
        height: 100%;
      }
      .cover-copy, .copy {
        position: absolute;
        left: 0;
        right: 0;
        top: 260px;
      }
      .cover-copy h1 {
        max-width: 860px;
        margin: 0;
        font-size: 106px;
        line-height: 0.98;
        font-weight: 950;
      }
      .cover-copy h1::first-line {
        color: ${brand.green};
      }
      .copy {
        top: 235px;
      }
      .number {
        width: 112px;
        height: 112px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 46px;
        border-radius: 50%;
        background: ${brand.green};
        color: #10200c;
        font-size: 52px;
        font-weight: 950;
      }
      .copy h1 {
        max-width: 840px;
        margin: 0 0 34px;
        color: ${brand.ink};
        font-size: 86px;
        line-height: 1;
        font-weight: 950;
      }
      .copy p {
        max-width: 805px;
        margin: 0;
        color: ${brand.muted};
        font-size: 45px;
        line-height: 1.18;
        font-weight: 760;
      }
    `,
  });
}

function reelHtml(text, index, total) {
  const { lead, body } = splitLeadAndBody(text);
  const isHook = index === 0;

  return baseHtml({
    width: 1080,
    height: 1920,
    body: `
      <section class="reel">
        <div class="top-row">
          <span class="chip">${isHook ? "Marketing Fix" : `Point ${index}`}</span>
          <span class="counter">${index + 1}/${total}</span>
        </div>
        <div class="reel-copy">
          ${!isHook ? `<div class="tick">✓</div>` : ""}
          <h1>${escapeHtml(lead)}</h1>
          ${body ? `<p>${escapeHtml(body).replaceAll("\n", "<br>")}</p>` : ""}
        </div>
        <div class="footer-line">Better enquiries, not just more clicks.</div>
      </section>
    `,
    extraCss: `
      .canvas {
        padding: 86px;
        background:
          linear-gradient(180deg, rgba(143, 207, 92, 0.18), transparent 22%),
          linear-gradient(145deg, #0b0d0f 0%, #181d18 55%, #101210 100%);
      }
      .top-row {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .counter {
        color: ${brand.muted};
        font-size: 28px;
        font-weight: 900;
      }
      .reel-copy {
        position: absolute;
        z-index: 2;
        left: 86px;
        right: 86px;
        top: 465px;
      }
      .tick {
        width: 118px;
        height: 118px;
        margin-bottom: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: ${brand.green};
        color: #10200c;
        font-size: 72px;
        font-weight: 950;
      }
      h1 {
        margin: 0;
        max-width: 860px;
        color: ${brand.ink};
        font-size: ${isHook ? "98px" : "88px"};
        line-height: 1;
        font-weight: 950;
      }
      h1::first-line {
        color: ${brand.green};
      }
      p {
        margin: 34px 0 0;
        max-width: 780px;
        color: ${brand.muted};
        font-size: 44px;
        line-height: 1.18;
        font-weight: 760;
      }
      .footer-line {
        position: absolute;
        left: 86px;
        right: 86px;
        bottom: 178px;
        color: ${brand.green};
        font-size: 44px;
        line-height: 1.12;
        font-weight: 950;
      }
    `,
  });
}

async function renderPng(page, html, filePath, viewport) {
  await page.setViewportSize(viewport);
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.screenshot({ path: filePath, fullPage: true });
}

async function writeText(filePath, content) {
  await fs.writeFile(filePath, `${content.trim()}\n`, "utf8");
}

async function createMp4(framePaths, outputPath, packPath) {
  if (!ffmpegPath || !existsSync(ffmpegPath)) {
    return { created: false, reason: "ffmpeg-static is not available." };
  }

  const concatPath = path.join(packPath, "reel-frames", "frames.txt");
  const lines = [];
  for (const framePath of framePaths) {
    lines.push(`file '${framePath.replaceAll("'", "'\\''")}'`);
    lines.push("duration 1.85");
  }
  lines.push(`file '${framePaths.at(-1).replaceAll("'", "'\\''")}'`);
  await fs.writeFile(concatPath, `${lines.join("\n")}\n`, "utf8");

  const musicTrack = await firstApprovedMusicTrack();
  const args = [
    "-y",
    "-f",
    "concat",
    "-safe",
    "0",
    "-i",
    concatPath,
  ];

  if (musicTrack) {
    args.push("-stream_loop", "-1", "-i", musicTrack);
  } else {
    args.push("-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100");
  }

  args.push(
    "-vf",
    "scale=1080:1920,format=yuv420p",
    "-r",
    "30",
    "-shortest",
    "-c:v",
    "libx264",
    "-c:a",
    "aac",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    outputPath,
  );

  const result = spawnSync(ffmpegPath, args, { encoding: "utf8" });
  if (result.status !== 0) {
    return {
      created: false,
      reason: result.stderr || result.stdout || "Unknown ffmpeg error.",
    };
  }

  return {
    created: true,
    musicTrack,
  };
}

async function firstApprovedMusicTrack() {
  const approvedDir = path.join(musicLibraryPath, "approved");
  if (!existsSync(approvedDir)) return null;

  const files = await fs.readdir(approvedDir);
  const track = files.find((file) => /\.(mp3|m4a|wav|aac)$/i.test(file));
  return track ? path.join(approvedDir, track) : null;
}

function previewHtml(frameCount) {
  const frameItems = Array.from({ length: frameCount }, (_, index) => {
    const frame = String(index + 1).padStart(2, "0");
    return `<img src="./reel-frames/frame-${frame}.png" alt="Frame ${index + 1}" />`;
  }).join("\n");

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Xello Reel Preview</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #101210;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #f7faf4;
    }
    .phone {
      width: min(420px, 92vw);
      aspect-ratio: 9 / 16;
      position: relative;
      overflow: hidden;
      border-radius: 28px;
      box-shadow: 0 24px 90px rgba(0, 0, 0, 0.52);
      background: #111315;
    }
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      animation: show ${frameCount * 1.85}s infinite;
    }
    ${Array.from({ length: frameCount }, (_, index) => {
      const delay = (index * 1.85).toFixed(2);
      return `img:nth-child(${index + 1}) { animation-delay: ${delay}s; }`;
    }).join("\n")}
    @keyframes show {
      0%, ${Math.max(3, 95 / frameCount).toFixed(2)}% { opacity: 1; }
      ${Math.max(5, 100 / frameCount).toFixed(2)}%, 100% { opacity: 0; }
    }
  </style>
</head>
<body>
  <div class="phone">
    ${frameItems}
  </div>
</body>
</html>`;
}

async function main() {
  const { sourcePath, markdown } = await readCurrentDraft();
  const title = firstHeading(markdown);
  const packSlug = `${dateStamp}-${slugify(title.replace(/^\d{4}-\d{2}-\d{2}\s*/, "")) || "xello-social-pack"}`;
  const datedPackPath = path.join(todayRoot, packSlug);
  const currentPackPath = path.join(todayRoot, "current-ready-pack");
  const carouselPath = path.join(datedPackPath, "carousel");
  const reelFramesPath = path.join(datedPackPath, "reel-frames");

  const slides = parseCarouselSlides(markdown);
  const reelFrames = parseReelFrames(markdown);
  const caption = codeAfter("Caption", markdown);
  const cta = codeAfter("CTA", markdown);
  const hashtags = codeAfter("Hashtags", markdown);
  const linkedInPost = sectionCode("LinkedIn Post", markdown);

  await fs.rm(datedPackPath, { recursive: true, force: true });
  await fs.mkdir(carouselPath, { recursive: true });
  await fs.mkdir(reelFramesPath, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  const carouselFiles = [];
  for (const [index, slide] of slides.entries()) {
    const filePath = path.join(carouselPath, `slide-${String(index + 1).padStart(2, "0")}.png`);
    await renderPng(page, carouselHtml(slide, index, slides.length), filePath, {
      width: 1080,
      height: 1350,
    });
    carouselFiles.push(filePath);
  }

  const reelFiles = [];
  for (const [index, frame] of reelFrames.entries()) {
    const filePath = path.join(reelFramesPath, `frame-${String(index + 1).padStart(2, "0")}.png`);
    await renderPng(page, reelHtml(frame, index, reelFrames.length), filePath, {
      width: 1080,
      height: 1920,
    });
    reelFiles.push(filePath);
  }

  await browser.close();

  const reelMp4Path = path.join(datedPackPath, "xello-reel-draft.mp4");
  const videoResult = await createMp4(reelFiles, reelMp4Path, datedPackPath);

  await writeText(path.join(datedPackPath, "caption.txt"), [caption, cta].filter(Boolean).join("\n\n"));
  await writeText(path.join(datedPackPath, "hashtags.txt"), hashtags);
  await writeText(path.join(datedPackPath, "linkedin-post.txt"), linkedInPost);
  await writeText(path.join(datedPackPath, "music-direction.txt"), `
Use a clean, modern, non-distracting business/tech audio bed.

Recommended Instagram/TikTok search terms:
- minimal tech
- clean corporate
- startup motivation
- modern business

Automation note:
Drop approved royalty-free .mp3, .m4a, .wav or .aac files into:
${path.join(musicLibraryPath, "approved")}

The daily renderer will embed the first approved track it finds.
Current video audio: ${videoResult.musicTrack ? path.basename(videoResult.musicTrack) : "silent placeholder audio"}
  `);
  await fs.writeFile(path.join(datedPackPath, "reel-preview.html"), previewHtml(reelFrames.length), "utf8");
  await writeText(path.join(datedPackPath, "manual-post-checklist.md"), `
# Manual Post Checklist

1. Open the carousel folder and check the PNGs.
2. Open xello-reel-draft.mp4 and check the text timing.
3. Copy caption.txt into Instagram/TikTok/LinkedIn as needed.
4. Copy hashtags.txt after the caption.
5. Add a trending/suitable in-app music track if the MP4 is silent.
6. Publish manually from @xello_media.
  `);
  await writeText(path.join(datedPackPath, "OPEN_THIS_FIRST.md"), `
# Xello Post Pack - ${dateStamp}

Source draft:
${sourcePath}

## What To Post Today

- Carousel slides: ${carouselPath}
- Reel MP4 draft: ${reelMp4Path}
- Reel preview: ${path.join(datedPackPath, "reel-preview.html")}
- Caption: ${path.join(datedPackPath, "caption.txt")}
- Hashtags: ${path.join(datedPackPath, "hashtags.txt")}

## Quick Posting Order

1. Post the carousel if you want the lowest-friction first post.
2. Post the Reel MP4 if the motion preview feels good enough.
3. Add music inside Instagram/TikTok if the MP4 is silent.
4. Use the caption and hashtags files exactly as the starting point.

## Video Export

MP4 created: ${videoResult.created ? "Yes" : "No"}
${videoResult.created ? "" : `Reason: ${videoResult.reason}`}
  `);

  await fs.rm(currentPackPath, { recursive: true, force: true });
  await fs.cp(datedPackPath, currentPackPath, { recursive: true });

  await writeText(path.join(todayRoot, "OPEN_THIS_TODAY.md"), `
# Open This Today

Your current ready-to-post folder is:
${currentPackPath}

Start with:
${path.join(currentPackPath, "OPEN_THIS_FIRST.md")}
  `);

  console.log(`Created Xello social pack: ${datedPackPath}`);
  console.log(`Updated current pack: ${currentPackPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
