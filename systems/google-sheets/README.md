# Xello Outbound Agent

This is the simple Google Sheets operating system for Xello Media.

It finds renovation-company prospects, audits them with AI, drafts outreach, waits for approval, logs API spend, and tracks replies/calls.

## Setup

1. Create a blank Google Sheet named `Xello Outbound Agent`.
2. Open `Extensions > Apps Script`.
3. Paste the contents of `XelloOutboundAgent.gs`.
4. In Apps Script, open `Project Settings > Script properties`.
5. Add these keys:

| Property | Required | Notes |
| --- | --- | --- |
| `OPENAI_API_KEY` | Yes | Used for audits and outreach drafts. |
| `SERPAPI_KEY` | Yes for scanning | Used to find local businesses. Can be skipped for manual imports. |
| `OPENAI_MODEL` | No | Defaults to `gpt-5-mini`. |
| `DAILY_SPEND_LIMIT_GBP` | No | Defaults to `2.00`. |
| `SENDER_NAME` | No | Defaults to `Sam at Xello Media`. |
| `CALENDLY_URL` | No | Add your booking link when ready. |

6. Save the project and reload the Google Sheet.
7. Use the `Xello Agent` menu to initialise tabs and run small batches.

## Approval Flow

The system will not send outreach just because AI wrote it.

1. Run `Setup / repair tabs`.
2. Run `Scan next prospects`.
3. Run `Audit + draft next batch`.
4. Review rows in `Outreach Drafts`.
5. Set `approval_status` to `Approved`.
6. Run `Send approved emails`.

Instagram outreach should stay manual-assisted:

1. Review the `Instagram DM` rows.
2. Send manually from the Xello Instagram account.
3. Change `send_status` to `Sent manually`.

## Important

- Keep a `Do Not Contact` tab and respect opt-outs.
- Start with 25-50 prospects, not hundreds.
- Review every message before sending.
- The first objective is booked audits, not maximum sending volume.
