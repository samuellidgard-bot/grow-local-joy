# Xello Workboard

This is the shared coordination board for running multiple Codex chats on the Xello Media CRM/dashboard project.

## Master Rule

This chat is the Master Control chat.

All specialist chats must read this file and `XELLO_PROJECT_NOTES.md` before doing work. Specialist chats should update their own section below when they start, finish, hit a blocker, or hand work back.

## Current Master Priority

Build Xello Media into a clean operating hub for starter foundations delivery before any 14-day lead test is offered.

Immediate live workflow:

1. Finish First Touch Innovations and M8 Designs starter foundations setup.
2. Keep the client progress tracker and Leader relay workflow useful.
3. Collect proof assets from Google Drive.
4. Use content ideas only for clients who have agreed to starter foundations.
5. Keep paid ads gated until foundations are genuinely ready.

## Non-Negotiable Offer Ladder

1. Starter foundations:
   Social setup, Google Business improvements, website/enquiry basics, tracking, starter proof/content foundations.

2. 14-day local visibility / lead test:
   Only after foundations are ready. Includes filming, edited vertical ads, Meta lead campaign setup, tracking and review. Client pays ad spend.

3. Monthly growth retainer:
   Ongoing content, Meta ads, website conversion improvements, lead tracking, reporting and monthly testing.

Do not make the 14-day test the first offer again.

## Active Chats

### 1. Master Control

Role:
- Owns business direction, priority decisions, final approvals and deployments.
- Keeps `XELLO_WORKBOARD.md` and `XELLO_PROJECT_NOTES.md` current.
- Resolves conflicts between specialist chats.

Allowed edits:
- Project notes and workboard.
- Any file when intentionally integrating final work.

Current owner:
- This chat.

Status:
- Active.

### 2. Factory Build

Role:
- Continues developing the CRM dashboard and client pages.
- Improves UI/UX, stage trackers, Leader panel, expandable sections and CRM workflows.

Primary files:
- `xello-crm-dashboard/`
- `grow-local-joy/crm/`
- `grow-local-joy/api/crm.js` only when CRM backend behavior is needed.
- `grow-local-joy/vercel.json` only when deployment behavior is needed.

Rules:
- Inspect files before editing.
- Make local CRM changes first when practical, then sync to live repo only when approved by Master Control.
- Keep design simple, readable, green/graphite and professional.

Status:
- Ready - Factory Build improvements have been synced into `grow-local-joy/crm` by Master Control for deployment.

### 3. Client Delivery

Role:
- Handles First Touch Innovations and M8 Designs delivery strategy.
- Turns owner replies, public research, Google Drive assets and audits into starter foundations plans.
- Produces concise client summaries, proof pack outlines, missing info lists and next actions.

Primary files:
- `XELLO_WORKBOARD.md`
- Client-specific docs created under `client-delivery/` if needed.
- CRM data only via handoff notes unless Master Control asks for code edits.

Rules:
- Do not edit CRM code by default.
- Do not recommend the 14-day lead test until starter foundations are ready.
- Prefer practical delivery tasks over theory.

Status:
- Latest starter foundations delivery plan prepared in `client-delivery/STARTER_FOUNDATIONS_DELIVERY_PLAN_2026-05-06.md`; awaiting proof asset uploads and account/platform confirmations.

### 4. QA / Launch

Role:
- Tests the CRM before deployment.
- Checks browser UI, mobile/desktop layout, console errors, text overflow, build/test output and Git state.

Primary files:
- Usually read-only.
- May edit small obvious bugs only with clear scope.

Required checks when relevant:
- `npm test`
- `npm run build`
- `node --check api/crm.js`
- `node --check crm/app.js`
- Browser check on local/live CRM.

Status:
- Completed launch QA on 2026-05-06.

Latest QA / Launch notes:
- Master Control resolved the source-of-truth sync on 2026-05-06: local CRM platform status board and Leader relay UI changes are now copied into `grow-local-joy/crm/app.js` and `grow-local-joy/crm/styles.css`.
- Vercel `CRON_SECRET` was rotated on 2026-05-06 to remove the whitespace blocker; production redeploy succeeded at commit `285a001`, and live CRM verification showed the Platform Status Board on `https://www.xellomedia.co.uk/crm/`.
- Live unauthenticated `/crm/login` has a broken Xello logo because `/crm/assets/xello-media-logo-transparent.png` redirects to `/crm/login` before authentication.
- Automated checks passed in `grow-local-joy` after sync: `node --check api/crm.js`, `node --check crm/app.js`, `npm test`, and `npm run build`.
- Local and live dashboard smoke checks loaded without console errors; live authenticated dashboard was checked from the existing browser session, while clean headless live access correctly redirected to `/crm/login`.
- Mobile viewport checks found no horizontal overflow or clipped text, but the local CRM mobile layout shows the full sidebar before the dashboard content, so mobile usability needs a small follow-up before treating mobile as polished.

### 5. AI Automation

Role:
- Improves Leader agent orchestration, backend persistence, cron jobs and future automation.
- Keeps human approval gates around accounts, passwords, ad spend and client-facing actions.

Primary files:
- `grow-local-joy/api/crm.js`
- `grow-local-joy/vercel.json`
- Agent workflow docs.

Rules:
- Approval-gated autonomy only, but avoid repeat approvals after Master Control has made a clear decision.
- No secret values committed to Git.
- No external account creation, messaging, ads or client-facing actions without human approval; once approved, Leader can auto-prepare details and only pause at access, public publish, password or spend boundaries.

Status:
- Parked until Master Control asks.

### 6. Content Engine

Role:
- Creates content ideas, briefs, shot lists, hooks and proof-led campaign angles.
- Works only on clients who have agreed to begin starter foundations.

Primary outputs:
- Content briefs.
- Filming lists.
- Website proof sections.
- Future Meta ad angle prep once foundations are ready.

Rules:
- Do not generate broad content plans for cold/non-active prospects.
- Do not jump into paid ad campaign build before readiness.

Status:
- Active for planning - starter foundations content framework created in `content-engine/STARTER_FOUNDATIONS_CONTENT_FRAMEWORK_2026-05-06.md`; waiting for First Touch and M8 Drive assets before asset-specific briefs.

## File Ownership Rules

- Master Control can edit any file when integrating final work.
- Factory Build owns CRM code and UI.
- Client Delivery owns strategy/output docs and client delivery planning.
- QA / Launch should mainly review and test.
- AI Automation owns backend/automation work.
- Content Engine owns content plans and briefs.

Avoid two chats editing the same file at the same time. If unsure, add a note under Open Questions before editing.

## Current Sprint

### In Progress

- Use the new Client Tick-Along Board to keep First Touch, M8 and CRM system work moving one practical step per day.
- First Touch is moving into a shoot-day proof capture workflow; use the shoot strategy before waiting on Drive uploads.
- Wait for M8 Google Drive folders to be filled with photo/video proof assets.
- Use Leader relay notes inside each client task to record evidence found, auto-complete decisions and only true approval gates.
- Keep clients in Starter foundations phase until missing useful foundations are created or deliberately skipped.

### Next Practical Tasks

- Today priority: First Touch shoot-day proof capture prep, M8 missing-foundation decisions, and converting trial-client friction into the repeatable Foundations offer.
- Use `first-touch-advert-launch-pack/first-touch-shoot-day-content-strategy-2026-05-06.md` for the First Touch shoot with Sonny.
- Confirm M8 current account list: website, TikTok, Google Business decision, Instagram/Facebook status.
- Use the CRM Platform Status Board to confirm each useful platform status: Found, Needs polish, Create, or Skip.
- Prepare proof asset review once Drive folders have uploads.
- Use `content-engine/STARTER_FOUNDATIONS_CONTENT_FRAMEWORK_2026-05-06.md` to score assets and create starter-only briefs once uploads are available.
- Create client-facing starter foundations summaries once assets are available.
- Use `client-delivery/STARTER_FOUNDATIONS_DELIVERY_PLAN_2026-05-06.md` as the next Client Delivery handoff for First Touch and M8.
- Continue First Touch AI editor training from the conversion-led reference library and V3 training cycle before making the next reel.
- Use the new First Touch elite editor training standard to make one stronger V3 reel, score it, and only then create variants.
- Run the First Touch exponential editor flywheel: daily reference mining, pattern extraction, agent competition, scorecard review, Sam taste feedback and outcome tracking.
- Review the rendered `first-touch-v3-active-site-proof.mp4` draft, then decide whether to create one controlled hook/music/end-card variant.
- Continue AI editor training through tutorial study: SFX restraint, colour grading, transitions, caption motion and end-card polish before forcing more drafts from limited footage.

## Latest Decisions

- First Touch wants bigger projects such as loft conversions, extensions and full refurbs.
- First Touch values architect relationships; an architect referral proof pack is recommended.
- M8 wants proper projects such as new builds, extensions, bathrooms, rendering and larger start-to-finish work.
- M8 does not want small handyman-style jobs.
- Brighton/Hove and nearby local coverage is assumed for both.
- Content ideas/briefs should only be produced for active starter foundation clients to save API/useful thinking.
- The Leader workflow should auto-complete research/status/setup-prep tasks where possible and collect relay evidence notes before task completion.
- First Touch Facebook Page creation is approved by Sam; Leader should prepare setup details and only pause for admin invite/final public publish.
- First Touch public proof has been found on the Work page, TikTok and Google Business; the next blocker is collecting original/high-res assets, review screenshots and project notes on shoot day.

## Open Questions

- For M8, should Xello create missing accounts directly, or guide owner-led setup?
- Does M8 want a Google Business Profile despite initial hesitation?
- After the First Touch shoot, which captured/uploaded assets are best enough to use as proof?
- Which licensed music source should become Xello's default for paid-ad-safe client edits?

## Completed Changes

- CRM Overview has been restructured into an operating hub: client progress bars first, most important next actions, system health across delivery/content/agents/outreach/lead tests, and outreach moved into a lower snapshot instead of dominating the page.
- CRM Client Overview now includes a Client Tick-Along Board showing each trial client's current stage, next action, AI-can-do work, waiting-on-client items and the lesson being folded back into the Foundations offer.
- Today's Actions now prioritise First Touch shoot prep, M8 foundations decisions and offer/process learning before generic outreach work.
- Current-stage tasks now show ownership chips such as completed, next, AI can prep, Sam/client action, approval gate, shoot-day workflow and decision needed.
- CRM client pages now include a Platform Status Board for First Touch and M8 with Found / Needs polish / Create / Skip account decisions, synced into the deployable live repo copy.
- Leader relay notes now prompt for platform status, evidence, auto-complete decisions and only true approval gates.
- First Touch Facebook Page creation has been approved and reflected in the CRM task language.
- Client Delivery prepared the next First Touch and M8 starter foundations delivery plan.
- CRM client pages now have offer stage trackers.
- Current stage action plan is collapsible.
- Leader Agent Command Centre delegates current tasks to specialist agents.
- Leader task tick-offs persist locally and can persist via backend/KV on live.
- Upstash Redis/KV has been connected in Vercel.
- `CRON_SECRET` has been added in Vercel.
- GitHub CLI is authenticated and Codex can now push commits.
- Leader relay evidence notes have been added and pushed.
- Content Engine prepared the active-client-only starter foundations content framework.
- First Touch shoot-day content strategy has been created and the live CRM Content Ideas section now uses it as the shoot operating checklist.
- First Touch AI editor system now has a conversion-led reference example library, V3 training cycle, Sam feedback memory, upgraded caption/story rules and a CRM Learning examples box focused on leads, CPL, CPA and ROAS rather than likes alone.
- First Touch AI editor training has been upgraded with a 24-example elite conversion reference bank, 10-point taste overlay, V-next feedback loop and Elite Reference Teacher Agent prompt.
- First Touch AI editor training now has an exponential compounding system: daily mining routine, agent competition workflow, winning-pattern library, Sam taste profile, outcome tracker and first daily training log.
- First Touch Active Site Proof V3 has been rendered from the current footage, scored 81/100 and logged back into the AI editor training feedback/outcome system.
- First Touch AI editor training has been expanded with tutorial-based SFX, colour grading, transition/effects and audio training modules plus dedicated SFX and Colour Grading agent prompts.

## Next Handoff

Every new specialist chat should:

1. Read `XELLO_PROJECT_NOTES.md`.
2. Read this `XELLO_WORKBOARD.md`.
3. Read its matching prompt in `NEXT_CHAT_PROMPTS/`.
4. State which chat role it is acting as.
5. Inspect relevant files before editing.
6. Update this workboard before finishing if it changes status, decisions or next tasks.
