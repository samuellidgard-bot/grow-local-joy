import { chromium } from "playwright";
import bundledFfmpegPath from "ffmpeg-static";
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
const aiBackgroundRoot = path.join(repoRoot, "public", "xello-social", "ai-backgrounds");
const musicLibraryPath = path.join(outputRoot, "music-library");
const xelloLogoMarkup = existsSync(publicLogoSvgPath)
  ? readFileSync(publicLogoSvgPath, "utf8").replace("<svg", '<svg aria-hidden="true"')
  : "";
const ffmpegPath = resolveFfmpegPath();
const carouselBackgrounds = [
  "wasted-ad-spend.png",
  "clear-offer.png",
  "real-proof.png",
  "enquiry-route.png",
  "fast-follow-up.png",
  "tracking.png",
].map((file) => path.join(aiBackgroundRoot, file));
const imageDataUriCache = new Map();

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

function resolveFfmpegPath() {
  const systemFfmpeg = spawnSync("which", ["ffmpeg"], { encoding: "utf8" });
  const systemPath = systemFfmpeg.status === 0 ? systemFfmpeg.stdout.trim() : "";

  if (systemPath && existsSync(systemPath)) {
    return systemPath;
  }

  return bundledFfmpegPath;
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

function iconSvg(name) {
  const common = 'viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"';
  const stroke = `stroke="${brand.green}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
  const fill = `fill="${brand.green}"`;
  const icons = {
    warning: `<svg ${common}><path ${stroke} d="M32 8 58 54H6L32 8Z"/><path ${stroke} d="M32 24v14"/><path ${stroke} d="M32 47h.01"/></svg>`,
    target: `<svg ${common}><circle ${stroke} cx="32" cy="32" r="23"/><circle ${stroke} cx="32" cy="32" r="12"/><circle ${fill} cx="32" cy="32" r="4"/></svg>`,
    star: `<svg ${common}><path ${stroke} d="m32 7 7 16 17 2-13 11 4 17-15-9-15 9 4-17L8 25l17-2 7-16Z"/></svg>`,
    phone: `<svg ${common}><path ${stroke} d="M19 10h26a5 5 0 0 1 5 5v34a5 5 0 0 1-5 5H19a5 5 0 0 1-5-5V15a5 5 0 0 1 5-5Z"/><path ${stroke} d="M27 46h10"/><path ${stroke} d="M22 18h20"/></svg>`,
    clock: `<svg ${common}><circle ${stroke} cx="32" cy="32" r="24"/><path ${stroke} d="M32 18v16l11 7"/></svg>`,
    chart: `<svg ${common}><path ${stroke} d="M10 52h44"/><path ${stroke} d="M18 44V29"/><path ${stroke} d="M32 44V18"/><path ${stroke} d="M46 44V24"/></svg>`,
    save: `<svg ${common}><path ${stroke} d="M18 10h28a4 4 0 0 1 4 4v40L32 43 14 54V14a4 4 0 0 1 4-4Z"/></svg>`,
  };

  return icons[name] || icons.target;
}

function carouselIcon(index, isFinal) {
  if (isFinal) return "save";
  return ["warning", "target", "star", "phone", "clock", "chart"][index] || "target";
}

function slideBadge(index, isCover, isFinal) {
  if (isCover) return "Fix before ads";
  if (isFinal) return "Save this";
  return ["Offer", "Proof", "Enquiry", "Speed", "Tracking"][index - 1] || "Checklist";
}

function backgroundForSlide(index, isFinal) {
  const backgroundPath = isFinal ? carouselBackgrounds[0] : carouselBackgrounds[index] || carouselBackgrounds.at(-1);
  return imageDataUri(backgroundPath);
}

function imageDataUri(filePath) {
  if (!existsSync(filePath)) return "";
  if (!imageDataUriCache.has(filePath)) {
    const encoded = readFileSync(filePath).toString("base64");
    imageDataUriCache.set(filePath, `data:image/png;base64,${encoded}`);
  }

  return imageDataUriCache.get(filePath);
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
  const isFinal = /^final slide$/i.test(slide.label) || index === total - 1;
  const hasNumber = lead.match(/^(\d+)\.\s*(.+)$/);
  const leadText = hasNumber ? hasNumber[2] : lead;
  const number = hasNumber ? hasNumber[1] : String(index).padStart(2, "0");
  const layout = isCover ? "cover" : isFinal ? "final" : index % 2 === 0 ? "panel-right" : "panel-left";
  const visualSrc = backgroundForSlide(index, isFinal);

  return baseHtml({
    width: 1080,
    height: 1350,
    body: `
      <section class="slide ${layout}">
        ${visualSrc ? `<div class="bg-visual"><img src="${visualSrc}" alt="" /></div>` : ""}
        <div class="top-row">
          <span class="chip">${escapeHtml(slideBadge(index, isCover, isFinal))}</span>
          <span class="counter">${index + 1}/${total}</span>
        </div>
        ${isCover ? '<div class="warning-strip">Before you boost a post</div>' : ""}
        <div class="${isCover ? "cover-copy" : isFinal ? "final-copy" : "copy"}">
          ${!isCover && !isFinal ? `<div class="number">${escapeHtml(number)}</div>` : ""}
          ${isFinal ? `<div class="save-icon">${iconSvg("save")}</div>` : ""}
          <h1>${escapeHtml(leadText)}</h1>
          ${body ? `<p>${escapeHtml(body).replaceAll("\n", "<br>")}</p>` : ""}
          ${!isCover && !isFinal ? '<div class="micro-label">Before you send more traffic</div>' : ""}
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
      .bg-visual {
        position: absolute;
        inset: 34px;
        z-index: 0;
        overflow: hidden;
        border-radius: 36px;
      }
      .bg-visual img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        opacity: 0.84;
        filter: saturate(1.06) contrast(1.08);
      }
      .bg-visual::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(17, 19, 21, 0.94) 0%, rgba(17, 19, 21, 0.76) 45%, rgba(17, 19, 21, 0.42) 100%),
          linear-gradient(180deg, rgba(17, 19, 21, 0.34), rgba(17, 19, 21, 0.78));
      }
      .panel-left .bg-visual::after {
        background:
          linear-gradient(270deg, rgba(17, 19, 21, 0.94) 0%, rgba(17, 19, 21, 0.74) 46%, rgba(17, 19, 21, 0.36) 100%),
          linear-gradient(180deg, rgba(17, 19, 21, 0.34), rgba(17, 19, 21, 0.78));
      }
      .final .bg-visual::after {
        background:
          linear-gradient(90deg, rgba(17, 19, 21, 0.95) 0%, rgba(17, 19, 21, 0.76) 50%, rgba(17, 19, 21, 0.42) 100%),
          linear-gradient(180deg, rgba(17, 19, 21, 0.3), rgba(17, 19, 21, 0.75));
      }
      .warning-strip {
        position: absolute;
        left: 0;
        top: 230px;
        display: inline-flex;
        align-items: center;
        padding: 14px 24px;
        border-radius: 999px;
        background: rgba(143, 207, 92, 0.12);
        border: 2px solid ${brand.line};
        color: ${brand.muted};
        font-size: 28px;
        line-height: 1;
        font-weight: 900;
        text-transform: uppercase;
      }
      .cover-copy, .copy {
        position: absolute;
        z-index: 2;
        left: 72px;
        right: 72px;
        top: 310px;
      }
      .copy {
        width: 548px;
        min-height: 660px;
        padding: 40px 42px;
        border: 2px solid rgba(143, 207, 92, 0.26);
        border-radius: 34px;
        background: rgba(17, 19, 21, 0.74);
        box-shadow: 0 28px 90px rgba(0, 0, 0, 0.42);
        backdrop-filter: blur(8px);
      }
      .panel-right .copy {
        left: auto;
        right: 72px;
      }
      .panel-left .copy {
        left: 72px;
        right: auto;
      }
      .cover-copy h1 {
        max-width: 820px;
        margin: 0;
        font-size: 104px;
        line-height: 0.98;
        font-weight: 950;
      }
      .cover-copy h1::first-line {
        color: ${brand.green};
      }
      .number {
        width: 96px;
        height: 96px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        border-radius: 50%;
        background: ${brand.green};
        color: #10200c;
        font-size: 44px;
        font-weight: 950;
      }
      .copy h1 {
        max-width: 460px;
        margin: 0 0 34px;
        color: ${brand.ink};
        font-size: 70px;
        line-height: 1;
        font-weight: 950;
      }
      .copy p {
        max-width: 450px;
        margin: 0;
        color: ${brand.muted};
        font-size: 35px;
        line-height: 1.18;
        font-weight: 760;
      }
      .micro-label {
        display: inline-flex;
        margin-top: 44px;
        padding: 16px 22px;
        border-radius: 16px;
        background: rgba(247, 250, 244, 0.1);
        border-left: 8px solid ${brand.green};
        color: ${brand.ink};
        font-size: 24px;
        line-height: 1.1;
        font-weight: 900;
      }
      .final-copy {
        position: absolute;
        left: 72px;
        right: 72px;
        top: 270px;
      }
      .save-icon {
        width: 110px;
        height: 110px;
        margin-bottom: 44px;
      }
      .save-icon svg {
        width: 100%;
        height: 100%;
      }
      .final-copy h1 {
        max-width: 680px;
        margin: 0 0 34px;
        color: ${brand.green};
        font-size: 82px;
        line-height: 0.98;
        font-weight: 950;
      }
      .final-copy p {
        max-width: 620px;
        margin: 0;
        color: ${brand.ink};
        font-size: 38px;
        line-height: 1.16;
        font-weight: 850;
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
  const postImagesPath = path.join(datedPackPath, "POST_THESE_IMAGES");

  const slides = parseCarouselSlides(markdown);
  const reelFrames = parseReelFrames(markdown);
  const caption = codeAfter("Caption", markdown);
  const cta = codeAfter("CTA", markdown);
  const hashtags = codeAfter("Hashtags", markdown);
  const linkedInPost = sectionCode("LinkedIn Post", markdown);

  await fs.rm(datedPackPath, { recursive: true, force: true });
  await fs.mkdir(carouselPath, { recursive: true });
  await fs.mkdir(reelFramesPath, { recursive: true });
  await fs.mkdir(postImagesPath, { recursive: true });

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
    await fs.copyFile(filePath, path.join(postImagesPath, `${String(index + 1).padStart(2, "0")}.png`));
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
  const simpleReelPath = path.join(datedPackPath, "POST_THIS_REEL.mp4");
  if (videoResult.created) {
    await fs.copyFile(reelMp4Path, simpleReelPath);
  }

  await writeText(path.join(datedPackPath, "caption.txt"), [caption, cta].filter(Boolean).join("\n\n"));
  await writeText(path.join(datedPackPath, "POST_THIS_CAPTION.txt"), [caption, cta, hashtags].filter(Boolean).join("\n\n"));
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
- Postable image folder: ${postImagesPath}
- Simple Reel file: ${simpleReelPath}
- Simple caption file: ${path.join(datedPackPath, "POST_THIS_CAPTION.txt")}
- Reel MP4 draft: ${reelMp4Path}
- Reel preview: ${path.join(datedPackPath, "reel-preview.html")}
- Caption: ${path.join(datedPackPath, "caption.txt")}
- Hashtags: ${path.join(datedPackPath, "hashtags.txt")}

## Quick Posting Order

1. For an Instagram carousel, upload the PNGs inside POST_THESE_IMAGES in number order.
2. For a Reel, upload POST_THIS_REEL.mp4.
3. Copy POST_THIS_CAPTION.txt into the post caption.
4. Add music inside Instagram/TikTok if the MP4 is silent.

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
