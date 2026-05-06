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
- Ready.

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
- Ready.

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
- Ready.

### 5. AI Automation

Role:
- Improves Leader agent orchestration, backend persistence, cron jobs and future automation.
- Keeps human approval gates around accounts, passwords, ad spend and client-facing actions.

Primary files:
- `grow-local-joy/api/crm.js`
- `grow-local-joy/vercel.json`
- Agent workflow docs.

Rules:
- Approval-gated autonomy only.
- No secret values committed to Git.
- No external account creation, messaging, ads or client-facing actions without human approval.

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
- Parked until client assets arrive.

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

- Wait for First Touch and M8 Google Drive folders to be filled with photo/video proof assets.
- Use Leader relay notes inside each client task to record evidence found and human approval needed.
- Keep clients in Starter foundations phase until missing useful foundations are created or deliberately skipped.

### Next Practical Tasks

- Confirm First Touch current account list: website, Instagram, TikTok, Google Business, Facebook decision.
- Confirm M8 current account list: website, TikTok, Google Business decision, Instagram/Facebook status.
- Create clear statuses for each useful platform: Found, Needs polish, Create, Skip.
- Prepare proof asset review once Drive folders have uploads.
- Create client-facing starter foundations summaries once assets are available.

## Latest Decisions

- First Touch wants bigger projects such as loft conversions, extensions and full refurbs.
- First Touch values architect relationships; an architect referral proof pack is recommended.
- M8 wants proper projects such as new builds, extensions, bathrooms, rendering and larger start-to-finish work.
- M8 does not want small handyman-style jobs.
- Brighton/Hove and nearby local coverage is assumed for both.
- Content ideas/briefs should only be produced for active starter foundation clients to save API/useful thinking.
- The Leader workflow should collect relay evidence notes under each task before task completion.

## Open Questions

- Do First Touch and M8 want Xello to create missing accounts for them, or guide owner-led setup?
- Should First Touch create/tidy a Facebook Page, or skip Facebook for now?
- Does M8 want a Google Business Profile despite initial hesitation?
- Which uploaded Drive assets are best enough to use as proof?

## Completed Changes

- CRM client pages now have offer stage trackers.
- Current stage action plan is collapsible.
- Leader Agent Command Centre delegates current tasks to specialist agents.
- Leader task tick-offs persist locally and can persist via backend/KV on live.
- Upstash Redis/KV has been connected in Vercel.
- `CRON_SECRET` has been added in Vercel.
- GitHub CLI is authenticated and Codex can now push commits.
- Leader relay evidence notes have been added and pushed.

## Next Handoff

Every new specialist chat should:

1. Read `XELLO_PROJECT_NOTES.md`.
2. Read this `XELLO_WORKBOARD.md`.
3. Read its matching prompt in `NEXT_CHAT_PROMPTS/`.
4. State which chat role it is acting as.
5. Inspect relevant files before editing.
6. Update this workboard before finishing if it changes status, decisions or next tasks.
