# Xello Media Project Notes

Use this file as the handoff/source-of-truth when starting a fresh Codex chat.

## Main Goal

Xello Media is a Brighton/Hove marketing agency for local home renovation and home improvement companies.

The business offer ladder is now:

1. Starter foundations
   - Set up or improve social profiles.
   - Improve Google Business Profile.
   - Fix basic website/enquiry journey issues.
   - Add tracking foundations.
   - Create starter content ideas and proof assets.

2. 14-day local visibility / lead test
   - Only offer this after the foundations are good enough.
   - Includes one focused campaign angle, filming, edited vertical adverts, Meta lead campaign setup, lead tracking and review.
   - Client pays Meta ad spend.

3. Monthly growth retainer
   - Ongoing content, Meta ads, website conversion improvements, lead tracking, reporting and testing roadmap.

## Important Folders

Local CRM/dashboard being edited and previewed:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/xello-crm-dashboard`

Live website/Vercel/GitHub repo:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy`

Live CRM files inside website repo:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy/crm`

## Current Live Site

Website:

`https://www.xellomedia.co.uk/`

Private CRM:

`https://www.xellomedia.co.uk/crm/`

## Current CRM Direction

The CRM should act as the full Xello Operating Hub:

- Lead/prospect tracking.
- Company research.
- Outreach drafts.
- Replies and approvals.
- AI agents and agent outputs.
- Content creation plans.
- Xello social growth planning.
- Business strategy.
- Ideal client profile.
- Customer journey map.
- Offer doc.
- Delivery tracker.
- Finance/spend tracking.
- Google Sheets connection.

Latest operating improvement:

- Client Overview now has a Client Tick-Along Board so trial clients do not feel stuck when one task is waiting on the owner. It separates AI-prep work, Sam actions, waiting-on-client items and offer-process learning.
- Today's Actions should prioritise active trial-client movement first: First Touch shoot proof capture, M8 missing-foundation decisions and turning each trial-client friction point into the repeatable Foundations offer.
- Current-stage task rows now show responsibility labels such as AI can prep, Sam/client action, approval gate, shoot-day workflow and decision needed.

## Design Direction

Keep the dashboard simple, clean and easy to understand.

Use the Xello logo colour scheme:

- Dark graphite/black carefully, but avoid heavy black pills where text becomes hard to read.
- Light green badges with dark green text are preferred for counters/pills.
- Keep pages uncluttered by using expandable sections/buttons for detailed playbooks.

## Current Offer Doc State

The Business section has separate pages:

- Business Strategy
- Ideal Client
- Customer Journey
- Offer Doc

The Offer Doc includes:

- Starter Offer
- Middle Offer
- High-Value Offer
- Delivery Action Plan for each
- AI Automation Layer behind an expandable button
- Playbook behind an expandable button

The CRM language has been updated to follow:

`Starter foundations -> 14-day lead test -> monthly retainer`

The old idea of leading with the 14-day test should not be reintroduced as the first offer.

## Git / Vercel Workflow

Local CRM edits are usually made in:

`xello-crm-dashboard`

When ready to publish live, sync these files into:

`grow-local-joy/crm`

Then push the `grow-local-joy` repo to GitHub. Vercel redeploys automatically.

The project is connected to:

`https://github.com/samuellidgard-bot/grow-local-joy.git`

## How To Start Next Chat

Open a new Codex chat and paste the contents of `NEXT_CHAT_PROMPT.md`.

The next Codex should inspect files before editing.

## Multi-Chat Workflow

This project now uses a shared coordination file:

`XELLO_WORKBOARD.md`

Use this chat as the Master Control chat. Specialist chats should read:

1. `XELLO_PROJECT_NOTES.md`
2. `XELLO_WORKBOARD.md`
3. Their role prompt in `NEXT_CHAT_PROMPTS/`

Current recommended specialist chats:

- Factory Build: CRM dashboard development.
- Client Delivery: First Touch / M8 starter foundations delivery.
- QA / Launch: testing, build checks and deployment readiness.
- AI Automation: Leader/backend automation work.
- Content Engine: active client content briefs and proof-led angles.

Only one chat should edit the same file area at a time.
