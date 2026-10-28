# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal site of Muhammad Abbas Chaudary. The whole site is **one self-contained file, `index.html`**: inline CSS, inline SVG icons, a small inline script, no build step, no package manager, no tests or linter. Edit it directly and keep it as one file.

## Deployment

- GitHub Pages, classic (non-Actions) build, serving the **`main` branch at `/`**. Merging to `main` deploys. No workflow to watch.
- Live URL is a **subpath**: https://abbasnawaz.github.io/me/. Every asset link must be relative (`profile.jpg`, not `/profile.jpg`).
- `.nojekyll` disables Jekyll processing.
- There is intentionally **no `CNAME`**. The old custom domain cabbas.me is dead; re-adding a CNAME would redirect the github.io URL to it.
- `netlify.toml` is a leftover from an older Netlify setup and is not used by GitHub Pages.

## Running locally

Serve from a parent directory so the site is reachable under `/me/`, which mirrors production and catches absolute-path bugs:

```
mkdir -p /tmp/srv && ln -sfn "$PWD" /tmp/srv/me
cd /tmp/srv && python3 -m http.server 8000   # open http://localhost:8000/me/
```

Headless check: `google-chrome --headless=new --screenshot` fires before the chat widget paints (it waits on a network fetch), so drive Chrome over CDP with a few seconds' wait when the launcher button needs to be visible or tested.

## index.html structure

- Design tokens are CSS custom properties on `:root` (`--accent`, `--ink`, `--mono`, `--display`, ...). Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/nav), from Google Fonts.
- Icons are `<symbol>`s in a hidden SVG sprite at the top of `<body>` (`#i-gh`, `#i-in`, `#i-sc`, `#i-mail`), referenced with `<svg class="ic"><use href="#i-..."/></svg>`. Remove a symbol when its last `<use>` goes.
- Sections are anchored by id and linked from the nav: `#top`, `#about`, `#research`, `#experience`, `#projects`, `#contact`. Section labels are numbered (`01 · about`); renumber if sections change.
- The hero has an "AC" initials block with an HTML comment marking where to swap in `<img class="photo" src="profile.jpg" ...>` if a photo is added.

### Qualzo chat widget

- Loaded by `<script src="https://qualzo.app/widget.js" data-user="abbas">` before `</body>`. It fetches `https://qualzo.app/api/widget-config/abbas`, then appends `body > button[aria-label="Open chat"]` (inline styles only, no class) and, on click, an `iframe[title="Qualzo chat"]` it toggles via `style.display`.
- The inline script after it waits for that button with a `MutationObserver`, adds the `qz-fx` class (pop-in, pulse ring, periodic wiggle until first click, which adds `qz-seen`) and plays a Web Audio chime on open/close. It reads open/closed state from the iframe after the click rather than tracking it.
- The widget sets `transform` inline on hover, so the effect CSS animates the individual `scale`/`rotate` properties and a `::before` ring instead of `transform`, and the pop-in uses `animation-fill-mode: backwards` so it doesn't pin `scale` afterwards. Keep it that way or hover/press effects break.
- Sound only plays from the click (browser autoplay rules). Animations are disabled under `prefers-reduced-motion`.

## Content rules

- Canonical links: github.com/abbasnawaz, linkedin.com/in/abbas-ch, Google Scholar `citations?user=KshGWOAAAAAJ`, email abbasnawaz125@gmail.com.
- `dr-abbas-ch` (old LinkedIn slug) and `cabbas.me` are outdated and must not appear anywhere in the repo.
- No CV download and no phone number on the site; both were removed deliberately.

## Legacy files

Everything other than `index.html`, `.nojekyll` and `CLAUDE.md` belongs to the previous site and is unused by the current page: `assets/`, `img/`, `style.css`, `scss/`, `colors_and_type.css`, `preview/`, `ui_kits/`, `SKILL.md`, `README.md`. `README.md` and `SKILL.md` describe an older dark "Abbas Nawaz" design system (Geist, iridescent gradient) that does **not** apply to the current site; don't use them as style guidance. These files are slated for removal, but confirm with the user before deleting any.
