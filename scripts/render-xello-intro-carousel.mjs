import { chromium } from "playwright";
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
    body: "A marketing system for home improvement businesses that want better enquiries, not just more clicks.",
    marker: "01",
    accent: "system",
  },
  {
    kicker: "WHO WE HELP",
    title: "We help great work get seen.",
    body: "Builders, landscapers, installers and home improvement brands already have proof. We help turn it into trust, content and enquiries.",
    marker: "02",
    accent: "proof",
  },
  {
    kicker: "STEP ONE",
    title: "First, we fix the foundations.",
    body: "Clear offer. Real proof. Easy enquiry route. Fast follow-up. Simple tracking.",
    marker: "03",
    accent: "foundation",
  },
  {
    kicker: "CONTENT",
    title: "Then we turn proof into content.",
    body: "Real projects, process clips, reviews and client trust signals become posts, Reels and ad assets.",
    marker: "04",
    accent: "content",
  },
  {
    kicker: "ADS",
    title: "Then we use ads properly.",
    body: "Not random boosts. Campaigns built around proof, clear offers and an enquiry route people can actually use.",
    marker: "05",
    accent: "ads",
  },
  {
    kicker: "OUTCOME",
    title: "The goal is simple.",
    body: "More qualified conversations, less wasted ad spend, and a marketing system you can understand.",
    marker: "06",
    accent: "outcome",
  },
  {
    kicker: "XELLO MEDIA",
    title: "Built for better enquiries.",
    body: "Follow @xello_media to watch us build social, content and ad systems for home improvement businesses.",
    marker: "07",
    accent: "finish",
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
    system: `<path ${stroke} ${fill} d="M24 80h132M24 122h92M24 164h132"/><path ${stroke} ${fill} d="M192 68l34 34-70 70-34-34z"/><path ${stroke} ${fill} d="M202 58l34 34"/>`,
    proof: `<path ${stroke} ${fill} d="M32 146l38 38 98-108"/><path ${stroke} ${fill} d="M34 52h148l40 40v112H34z"/><path ${stroke} ${fill} d="M182 52v40h40"/>`,
    foundation: `<path ${stroke} ${fill} d="M36 184h184M52 184v-58h40v58M108 184V92h40v92M164 184V52h40v132"/>`,
    content: `<rect ${stroke} ${fill} x="34" y="50" width="188" height="136" rx="24"/><path ${stroke} ${fill} d="M104 94l58 24-58 24z"/><path ${stroke} ${fill} d="M58 214h140"/>`,
    ads: `<path ${stroke} ${fill} d="M42 148l120-62v96z"/><path ${stroke} ${fill} d="M162 108h28a34 34 0 010 68h-28"/><path ${stroke} ${fill} d="M62 154l24 60"/>`,
    outcome: `<path ${stroke} ${fill} d="M38 170l54-54 42 42 86-94"/><path ${stroke} ${fill} d="M168 64h52v52"/><path ${stroke} ${fill} d="M38 212h184"/>`,
    finish: `<path ${stroke} ${fill} d="M44 58l168 168M212 58L44 226"/><path ${stroke} ${fill} d="M156 68h60v60"/>`,
  };

  return `<svg viewBox="0 0 256 256" aria-hidden="true">${icons[accent] || icons.system}</svg>`;
}

function slideHtml(slide, index) {
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
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
      padding: 72px 68px 60px;
      overflow: hidden;
      background:
        radial-gradient(circle at 82% 18%, rgba(145, 219, 87, ${isFirst || isLast ? "0.34" : "0.18"}), transparent 28%),
        radial-gradient(circle at 12% 88%, rgba(145, 219, 87, 0.14), transparent 26%),
        linear-gradient(145deg, #070908 0%, #121711 52%, #080a09 100%);
    }
    .slide::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.18;
      background-image:
        linear-gradient(rgba(246, 248, 242, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(246, 248, 242, 0.06) 1px, transparent 1px);
      background-size: 54px 54px;
      mask-image: linear-gradient(180deg, transparent 0%, black 16%, black 76%, transparent 100%);
    }
    .slide::after {
      content: "";
      position: absolute;
      width: 520px;
      height: 520px;
      right: -110px;
      top: 122px;
      border: 2px solid ${brand.line};
      border-radius: 40px;
      transform: rotate(12deg);
      background: linear-gradient(145deg, rgba(145, 219, 87, 0.14), rgba(246, 248, 242, 0.02));
      box-shadow: 0 0 120px rgba(145, 219, 87, 0.14);
    }
    .topbar {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${brand.muted};
      font-size: 25px;
      font-weight: 900;
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
      right: 84px;
      top: 210px;
      width: 250px;
      height: 250px;
      display: grid;
      place-items: center;
      border-radius: 42px;
      background: rgba(8, 10, 9, 0.52);
      border: 1px solid ${brand.line};
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.36);
    }
    .mark svg {
      width: 132px;
      height: 132px;
      filter: drop-shadow(0 0 28px rgba(145, 219, 87, 0.28));
    }
    .copy {
      position: relative;
      z-index: 3;
      margin-top: ${isFirst ? "290px" : "250px"};
      max-width: ${isFirst || isLast ? "870px" : "810px"};
    }
    h1 {
      margin: 0;
      color: ${brand.ink};
      font-size: ${isFirst ? "104px" : isLast ? "98px" : "88px"};
      line-height: 0.95;
      font-weight: 950;
      text-wrap: balance;
    }
    h1 .green {
      color: ${brand.green};
    }
    p {
      max-width: 790px;
      margin: 42px 0 0;
      color: ${brand.muted};
      font-size: 42px;
      line-height: 1.16;
      font-weight: 750;
      text-wrap: balance;
    }
    .bottom {
      position: absolute;
      z-index: 4;
      left: 68px;
      right: 68px;
      bottom: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${brand.ink};
      font-size: 27px;
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
      width: 226px;
      height: auto;
      display: block;
      filter: drop-shadow(0 5px 18px rgba(0, 0, 0, 0.7));
    }
    .progress {
      color: ${brand.muted};
    }
    .pill {
      display: inline-flex;
      align-items: center;
      margin-top: 58px;
      padding: 18px 24px;
      border-radius: 999px;
      background: rgba(145, 219, 87, 0.12);
      border: 1px solid ${brand.line};
      color: ${brand.green};
      font-size: 27px;
      font-weight: 900;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <main class="slide">
    <div class="topbar">
      <span class="kicker">${escapeHtml(slide.kicker)}</span>
      <span>${escapeHtml(slide.marker)}/07</span>
    </div>
    <div class="mark">${iconFor(slide.accent)}</div>
    <section class="copy">
      <h1>${escapeHtml(slide.title).replace("Xello Media", '<span class="green">Xello Media</span>').replace("better enquiries", '<span class="green">better enquiries</span>')}</h1>
      <p>${escapeHtml(slide.body)}</p>
      ${isFirst ? '<div class="pill">Home improvement marketing</div>' : ""}
    </section>
    <div class="bottom">
      <div class="brand">${logoMarkup}</div>
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

async function main() {
  const imagesPath = path.join(outputRoot, "POST_THESE_IMAGES");
  await fs.rm(outputRoot, { recursive: true, force: true });
  await fs.mkdir(imagesPath, { recursive: true });
  await fs.rm(desktopRoot, { recursive: true, force: true });
  await fs.mkdir(path.join(desktopRoot, "POST_THESE_IMAGES"), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  for (const [index, slide] of slides.entries()) {
    const fileName = `${String(index + 1).padStart(2, "0")}.png`;
    const filePath = path.join(imagesPath, fileName);
    await renderPng(page, slideHtml(slide, index), filePath);
    await fs.copyFile(filePath, path.join(desktopRoot, "POST_THESE_IMAGES", fileName));
  }

  await browser.close();

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
