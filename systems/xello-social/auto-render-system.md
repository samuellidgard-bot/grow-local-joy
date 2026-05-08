# Xello Social Auto-Render System

Created: 2026-05-08

Purpose: turn the daily Xello social draft into a ready-to-open post folder.

## Daily Output

The renderer creates:

- Carousel PNGs.
- Reel MP4 draft.
- Reel storyboard frames.
- Animated web preview.
- Caption text file.
- Hashtag text file.
- LinkedIn repurpose post.
- Music direction.
- Manual posting checklist.

Output folder:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy/automation_outputs/xello-social/post-to-publish-today/YYYY-MM-DD-post-title/`

Latest pointer:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy/automation_outputs/xello-social/post-to-publish-today/current-ready-pack/`

Desktop shortcut:

`/Users/sam/Desktop/Xello Daily Post Pack`

## Command

```bash
npm run xello:social:pack
```

The command reads:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy/automation_outputs/xello-social/post-to-publish-today/current-post.md`

If `current-post.md` points to another draft file, the renderer uses that draft as the source.

## Music

The project now uses a bundled `ffmpeg-static` dependency, so it can export MP4 files.

If approved music exists here, the first compatible track is embedded:

`/Users/sam/Documents/Codex/2026-04-27/create-me-a-crm-dashboard-that/grow-local-joy/automation_outputs/xello-social/music-library/approved/`

Supported files:

- `.mp3`
- `.m4a`
- `.wav`
- `.aac`

If no approved track exists, the renderer exports a silent MP4 so Sam can add music manually inside Instagram or TikTok.

## Automation

`Xello faceless social daily drafts` runs weekdays at 8:30am.

`Xello daily ready-to-post pack renderer` runs weekdays at 8:50am and refreshes the Desktop folder.

## Manual Posting Flow

1. Open `/Users/sam/Desktop/Xello Daily Post Pack`.
2. Start with `OPEN_THIS_FIRST.md`.
3. Post carousel PNGs or `xello-reel-draft.mp4` manually.
4. Paste `caption.txt` and `hashtags.txt`.
5. Add in-app music if the MP4 is silent.
6. Log results in `posting-tracker.md`.
