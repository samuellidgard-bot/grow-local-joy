# Xello Social Automation Outputs

Daily faceless social drafts should be saved here.

Each run should create one dated markdown file with:

- One core lesson.
- Instagram Reel script.
- TikTok version.
- LinkedIn post.
- Carousel outline.
- Visual production notes.
- Safety notes.
- Manual publish checklist.

Publishing is approval-first. The automation drafts content but does not post, schedule, comment, DM or connect accounts.

Current strategy:

- `systems/xello-social/faceless-content-machine.md`
- `systems/xello-social/30-day-faceless-instagram-growth-sprint.md`
- `systems/xello-social/instagram-growth-scout-agent.md`
- `systems/xello-social/instagram-growth-lessons-bank.md`
- `systems/xello-social/post-qa-scorecard.md`
- `systems/xello-social/performance-capture-system.md`
- `systems/xello-social/weekly-growth-review-agent.md`
- `systems/xello-social/hook-testing-system.md`
- `systems/xello-social/profile/profile-conversion-system.md`
- `systems/xello-social/ai-news-scout-agent.md`
- `systems/xello-social/newsletter/weekly-ai-newsletter-post-format.md`
- `systems/xello-social/canva-template-specs/`

Posting tracker:

- `automation_outputs/xello-social/posting-tracker.md`

Profile tracker:

- `automation_outputs/xello-social/profile-conversion-tracker.md`

AI news scout:

- `automation_outputs/xello-social/ai-news/`

Pinned starter posts:

- `automation_outputs/xello-social/pinned-posts/`

Post to publish today:

- `automation_outputs/xello-social/post-to-publish-today/current-post.md`
- `automation_outputs/xello-social/post-to-publish-today/current-ready-pack/`
- Desktop shortcut: `/Users/sam/Desktop/Xello Daily Post Pack`

Daily ready-to-post pack renderer:

- Command: `npm run xello:social:pack`
- Script: `scripts/render-xello-social-pack.mjs`
- Output: carousel PNGs, Reel MP4 draft, Reel frames, caption, hashtags, LinkedIn copy, music direction and manual checklist.
- Music: drop approved royalty-free audio files into `automation_outputs/xello-social/music-library/approved/` and the renderer will embed the first compatible track it finds.

Daily routine:

1. Automation creates the draft at 8:30am on weekdays.
2. Growth Scout lessons should be checked before the draft is created.
3. The draft agent creates 3 hook options and chooses a winner.
4. The draft agent scores the post and writes the daily handoff into `post-to-publish-today/current-post.md`.
5. Ready-pack renderer runs at 8:50am and creates/refreshes `current-ready-pack`.
6. Sam opens `/Users/sam/Desktop/Xello Daily Post Pack`.
7. Sam reviews the assets, caption and hashtags.
8. Only post drafts scoring `45/60` or higher on the QA scorecard.
9. Post manually.
10. Add the live link and results into `posting-tracker.md`.
11. Add weekly profile results into `profile-conversion-tracker.md`.
12. Weekly review turns results into better lessons.
13. AI News Scout creates one weekly newsletter-style post angle from current AI/social updates.
