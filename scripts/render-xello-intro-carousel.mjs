import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outputRoot = path.join(repoRoot, "automation_outputs", "xello-social", "launch-posts", "what-is-xello-media");
const desktopRoot = path.join(process.env.HOME || "", "Desktop", "Xello Launch Carousel - What Is Xello Media");
const logoPath = path.join(repoRoot, "public", "xello-media-logo.png");

const logoMarkup = existsSync(logoPath)
  ? `<img src="data:image/png;base64,${readFileSync(logoPath).toString("base64")}" alt="Xello Media" />`
  : "<strong>XELLO MEDIA</strong>";

const brand = {
  black: "#080a09",
  panel: "#111611",
  ink: "#f6f8f2",
  muted: "#c9d1c3",
  green: "#91db57",
  deepGreen: "#244519",
  line: "rgba(145, 219, 87, 0.26)",
};

const slides = [
  {
    kicker: "START HERE",
    title: "What is Xello Media?",
    body: "",
    marker: "01",
    accent: "logo",
    highlight: "Xello Media",
    logoHero: true,
  },
  {
    kicker: "WHAT WE ARE",
    title: "A marketing agency for home improvement companies.",
    body: "Xello Media helps builders, landscapers, installers and renovation businesses turn their work into trust, content and better enquiries.",
    marker: "02",
    accent: "home",
    highlight: "home improvement",
  },
  {
    kicker: "FOUNDATION OFFER",
    title: "First, we fix the foundations.",
    body: "Clear offer. Real proof. Easy enquiry route. Fast follow-up. Simple tracking.",
    marker: "03",
    accent: "foundation",
    highlight: "foundations",
  },
  {
    kicker: "WHY IT MATTERS",
    title: "Ads only work when the basics are ready.",
    body: "Before spending more on traffic, we make sure people understand, trust and know how to enquire.",
    marker: "04",
    accent: "checklist",
    highlight: "basics",
  },
  {
    kicker: "CONTENT ENGINE",
    title: "Then proof becomes content.",
    body: "Projects, process clips, reviews and trust signals become posts, Reels and ad assets.",
    marker: "05",
    accent: "content",
    highlight: "proof",
  },
  {
    kicker: "META ADS SYSTEM",
    title: "Then we build the Meta ads system.",
    body: "Campaigns are built around proof, clear offers and a simple way for people to enquire.",
    marker: "06",
    accent: "ads",
    highlight: "Meta ads",
  },
  {
    kicker: "XELLO MEDIA",
    title: "Built for better enquiries.",
    body: "Follow @xello_media to watch us build content, tracking and ad systems for home improvement businesses.",
    marker: "07",
    accent: "finish",
    highlight: "better enquiries",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function iconFor(accent) {
  const stroke = `stroke="${brand.green}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"`;
  const fill = `fill="none"`;

  const icons = {
    logo: "",
    home: `<path ${stroke} ${fill} d="M34 118L128 42l94 76"/><path ${stroke} ${fill} d="M54 112v96h148v-96"/><path ${stroke} ${fill} d="M100 208v-58h56v58"/>`,
    system: `<path ${stroke} ${fill} d="M24 80h132M24 122h92M24 164h132"/><path ${stroke} ${fill} d="M192 68l34 34-70 70-34-34z"/><path ${stroke} ${fill} d="M202 58l34 34"/>`,
    proof: `<path ${stroke} ${fill} d="M32 146l38 38 98-108"/><path ${stroke} ${fill} d="M34 52h148l40 40v112H34z"/><path ${stroke} ${fill} d="M182 52v40h40"/>`,
    foundation: `<path ${stroke} ${fill} d="M36 184h184M52 184v-58h40v58M108 184V92h40v92M164 184V52h40v132"/>`,
    checklist: `<path ${stroke} ${fill} d="M54 76h148M54 128h148M54 180h148"/><path ${stroke} ${fill} d="M22 74l14 14 26-34M22 126l14 14 26-34M22 178l14 14 26-34"/>`,
    content: `<rect ${stroke} ${fill} x="34" y="50" width="188" height="136" rx="24"/><path ${stroke} ${fill} d="M104 94l58 24-58 24z"/><path ${stroke} ${fill} d="M58 214h140"/>`,
    ads: `<path ${stroke} ${fill} d="M42 148l120-62v96z"/><path ${stroke} ${fill} d="M162 108h28a34 34 0 010 68h-28"/><path ${stroke} ${fill} d="M62 154l24 60"/>`,
    outcome: `<path ${stroke} ${fill} d="M38 170l54-54 42 42 86-94"/><path ${stroke} ${fill} d="M168 64h52v52"/><path ${stroke} ${fill} d="M38 212h184"/>`,
    finish: `<path ${stroke} ${fill} d="M44 58l168 168M212 58L44 226"/><path ${stroke} ${fill} d="M156 68h60v60"/>`,
  };

  if (!icons[accent]) return "";
  return `<svg viewBox="0 0 256 256" aria-hidden="true">${icons[accent]}</svg>`;
}

function renderTitle(slide) {
  const escapedTitle = escapeHtml(slide.title);
  if (!slide.highlight) return escapedTitle;

  const escapedHighlight = escapeHtml(slide.highlight);
  return escapedTitle.replace(escapedHighlight, `<span class="green">${escapedHighlight}</span>`);
}

function slideHtml(slide, index) {
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    @page {
      size: 1080px 1350px;
      margin: 0;
    }
    * { box-sizing: border-box; }
    html, body {
      width: 1080px;
      height: 1350px;
      margin: 0;
      overflow: hidden;
      background: ${brand.black};
      color: ${brand.ink};
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: 0;
    }
    .slide {
      position: relative;
      width: 1080px;
      height: 1350px;
      padding: 66px 64px 56px;
      overflow: hidden;
      background:
        radial-gradient(circle at 86% 18%, rgba(145, 219, 87, ${isFirst || isLast ? "0.38" : "0.24"}), transparent 26%),
        linear-gradient(135deg, rgba(145, 219, 87, 0.12), transparent 31%),
        linear-gradient(145deg, #070807 0%, #111610 50%, #060806 100%);
    }
    .slide::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.13;
      background-image:
        linear-gradient(rgba(246, 248, 242, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(246, 248, 242, 0.06) 1px, transparent 1px);
      background-size: 64px 64px;
      mask-image: linear-gradient(180deg, transparent 0%, black 16%, black 76%, transparent 100%);
    }
    .slide::after {
      content: "";
      position: absolute;
      width: 760px;
      height: 760px;
      right: -270px;
      top: 70px;
      border: 3px solid rgba(145, 219, 87, 0.16);
      transform: rotate(45deg) skew(-7deg);
      background: linear-gradient(145deg, rgba(145, 219, 87, 0.08), rgba(246, 248, 242, 0.01));
      box-shadow: 0 0 140px rgba(145, 219, 87, 0.1);
    }
    .topbar {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${brand.muted};
      font-size: 24px;
      font-weight: 950;
      text-transform: uppercase;
    }
    .kicker {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      color: ${brand.green};
    }
    .kicker::before {
      content: "";
      display: block;
      width: 42px;
      height: 5px;
      border-radius: 999px;
      background: ${brand.green};
    }
    .mark {
      position: absolute;
      z-index: 2;
      right: 56px;
      top: 210px;
      width: 330px;
      height: 330px;
      display: grid;
      place-items: center;
      opacity: 0.92;
    }
    .mark svg {
      width: 238px;
      height: 238px;
      filter: drop-shadow(0 0 34px rgba(145, 219, 87, 0.24));
    }
    .copy {
      position: relative;
      z-index: 3;
      margin-top: ${isFirst ? "190px" : "230px"};
      max-width: ${isFirst || isLast ? "900px" : "865px"};
    }
    h1 {
      margin: 0;
      color: ${brand.ink};
      font-size: ${isFirst ? "114px" : isLast ? "108px" : "100px"};
      line-height: 0.9;
      font-weight: 950;
      text-wrap: balance;
      text-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
    }
    h1 .green {
      color: ${brand.green};
      text-shadow: 0 0 34px rgba(145, 219, 87, 0.14);
    }
    p {
      max-width: 820px;
      margin: 38px 0 0;
      color: ${brand.ink};
      font-size: 48px;
      line-height: 1.08;
      font-weight: 900;
      text-wrap: balance;
    }
    .bottom {
      position: absolute;
      z-index: 4;
      left: 64px;
      right: 64px;
      bottom: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${brand.ink};
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2.5px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand img {
      width: 350px;
      max-height: 84px;
      height: auto;
      object-fit: contain;
      object-position: left center;
      display: block;
      filter: drop-shadow(0 5px 18px rgba(0, 0, 0, 0.7));
    }
    .progress {
      color: ${brand.muted};
    }
    .pill {
      display: inline-flex;
      align-items: center;
      margin-top: 50px;
      padding: 18px 26px;
      border-radius: 999px;
      background: rgba(145, 219, 87, 0.12);
      border: 1px solid ${brand.line};
      color: ${brand.green};
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .hero-logo {
      position: relative;
      z-index: 3;
      margin-top: 80px;
      width: 850px;
      max-width: 100%;
      filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.58));
    }
    .hero-logo img {
      width: 100%;
      height: auto;
      display: block;
    }
    .logo-cover .copy {
      margin-top: 170px;
    }
    .logo-cover h1 {
      max-width: 900px;
      font-size: 112px;
    }
    .logo-cover .mark {
      display: none;
    }
  </style>
</head>
<body>
  <main class="slide ${slide.logoHero ? "logo-cover" : ""}">
    <div class="topbar">
      <span class="kicker">${escapeHtml(slide.kicker)}</span>
      <span>${escapeHtml(slide.marker)}/07</span>
    </div>
    <div class="mark">${iconFor(slide.accent)}</div>
    <section class="copy">
      <h1>${renderTitle(slide)}</h1>
      ${slide.body ? `<p>${escapeHtml(slide.body)}</p>` : ""}
      ${isFirst && !slide.logoHero ? '<div class="pill">Home improvement marketing</div>' : ""}
    </section>
    ${slide.logoHero ? `<div class="hero-logo">${logoMarkup}</div>` : ""}
    <div class="bottom">
      <div class="brand">${slide.logoHero ? "" : logoMarkup}</div>
      <span class="progress">@xello_media</span>
    </div>
  </main>
</body>
</html>`;
}

async function renderPng(page, html, filePath) {
  await page.setViewportSize({ width: 1080, height: 1350 });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.screenshot({ path: filePath, type: "png" });
}

async function renderPdf(page, html, filePath) {
  await page.setViewportSize({ width: 1080, height: 1350 });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: filePath,
    width: "1080px",
    height: "1350px",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
}

function mergePdfPages(pagePaths, outputPath) {
  const bundledPython = path.join(
    process.env.HOME || "",
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "python",
    "bin",
    "python3",
  );
  const python = existsSync(bundledPython) ? bundledPython : "python3";
  const script = `
import sys
from pypdf import PdfWriter

writer = PdfWriter()
for pdf_path in sys.argv[2:]:
    writer.append(pdf_path)
with open(sys.argv[1], "wb") as output:
    writer.write(output)
`;

  execFileSync(python, ["-c", script, outputPath, ...pagePaths], { stdio: "inherit" });
}

async function main() {
  const imagesPath = path.join(outputRoot, "POST_THESE_IMAGES");
  const pdfPagesPath = path.join(outputRoot, "PDF_PAGES");
  const mergedPdfPath = path.join(outputRoot, "CANVA_IMPORT_THIS.pdf");
  await fs.rm(outputRoot, { recursive: true, force: true });
  await fs.mkdir(imagesPath, { recursive: true });
  await fs.mkdir(pdfPagesPath, { recursive: true });
  await fs.rm(desktopRoot, { recursive: true, force: true });
  await fs.mkdir(path.join(desktopRoot, "POST_THESE_IMAGES"), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const pdfPagePaths = [];

  for (const [index, slide] of slides.entries()) {
    const fileName = `${String(index + 1).padStart(2, "0")}.png`;
    const filePath = path.join(imagesPath, fileName);
    const html = slideHtml(slide, index);
    await renderPng(page, html, filePath);
    await fs.copyFile(filePath, path.join(desktopRoot, "POST_THESE_IMAGES", fileName));

    const pdfPagePath = path.join(pdfPagesPath, `${String(index + 1).padStart(2, "0")}.pdf`);
    await renderPdf(page, html, pdfPagePath);
    pdfPagePaths.push(pdfPagePath);
  }

  await browser.close();
  mergePdfPages(pdfPagePaths, mergedPdfPath);
  await fs.copyFile(mergedPdfPath, path.join(desktopRoot, "CANVA_IMPORT_THIS.pdf"));

  const caption = `What is Xello Media?

We help home improvement businesses turn real work into content, trust and better enquiries.

Before ads, we look at the foundations:
- Is the offer clear?
- Is there real proof?
- Can people enquire easily?
- Is follow-up fast?
- Can leads be tracked?

Then we build content and ad systems around what actually helps people trust you.

Better enquiries, not just more clicks.

#xellomedia #homeimprovementmarketing #socialmediaads #leadgeneration #ukbusiness #marketingstrategy`;

  const notes = `# What Is Xello Media? Carousel

Use this as one of the first pinned posts on @xello_media.

Recommended caption:

${caption}
`;

  await fs.writeFile(path.join(outputRoot, "POST_THIS_CAPTION.txt"), caption, "utf8");
  await fs.writeFile(path.join(outputRoot, "OPEN_THIS_FIRST.md"), notes, "utf8");
  await fs.writeFile(path.join(desktopRoot, "POST_THIS_CAPTION.txt"), caption, "utf8");
  await fs.writeFile(path.join(desktopRoot, "OPEN_THIS_FIRST.md"), notes, "utf8");

  console.log(`Created intro carousel: ${outputRoot}`);
  console.log(`Copied post pack to: ${desktopRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
