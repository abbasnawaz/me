# Abbas Nawaz — Portfolio Design System

A premium, modern, futuristic design system for the personal portfolio of **Abbas Nawaz** — AI Engineer, Full Stack Developer, and Researcher.

This system replaces the previous portfolio at [cabbas.me](https://cabbas.me/) (which used the longer-form "Muhammad Abbas"). The redesign rebrands to the shorter **Abbas Nawaz** with the **AN** monogram, matching the GitHub handle (`abbasnawaz`) and email (`abbasnawaz125@gmail.com`).

The aesthetic target: **Apple-grade restraint × Linear/Vercel polish × AI-research lab gravitas**. Dark, monochrome-first, with a single iridescent spectrum gradient as the only chromatic moment. Designed to feel like a 2026 frontier-lab interface, not a generic dev template.

---

## Source material

| Source | URL / path | Notes |
| --- | --- | --- |
| Current live portfolio | https://cabbas.me/ | Fetched & analysed for content (experience, skills, research, contact). Visual direction is **not** preserved — this is a full redesign. |
| GitHub | https://github.com/abbasnawaz | Handle source for the rebrand. |
| LinkedIn | https://www.linkedin.com/in/muhammad-abbas-373b721b8/ | Career history. |
| Research | https://ieeexplore.ieee.org/document/10465800 | Weapons & violence detection in CCTV (IEEE, Jan 2024). |

No codebase, Figma, or design files were provided — this is a **net-new** system informed only by content from the live site and the redesign brief.

---

## Index

```
README.md                  This file
SKILL.md                   Agent Skill entrypoint
colors_and_type.css        Canonical CSS variables (color, type, spacing, motion)
fonts/                     Webfont declarations (Geist, Instrument Serif, JetBrains Mono — all Google Fonts)
assets/                    Logo SVGs, monogram, brand marks
preview/                   Design System tab cards (one HTML per token group)
ui_kits/
  portfolio/
    index.html             Full clickable portfolio recreation
    *.jsx                  React components (Nav, Hero, About, Skills, Experience, Projects, Research, Contact, Footer)
```

---

## Brand at a glance

- **Name**: Abbas Nawaz
- **Monogram**: AN (geometric, single weight, optional iridescent fill on hero placements)
- **Titles**: AI Engineer · Full Stack Developer · Researcher
- **Location**: Islamabad, Pakistan
- **Voice**: confident, technical, calm. Never hype-y. First-person ("I build…", not "we deliver…").

---

## Content fundamentals

**Voice & tone.** Confident, technical, calm, first-person. Avoids hype words ("revolutionary", "cutting-edge synergy"). Writes like a senior engineer who has shipped real systems — short declarative sentences, occasional dry wit, precise nouns.

- **Person**: First-person singular. "I build", "I research", "I'm currently exploring…". Never "we".
- **Casing**:
  - Headings → **Sentence case**, never Title Case. ("Selected work", not "Selected Work".)
  - Nav items → lowercase. (`home`, `work`, `research`, `contact`)
  - Buttons → Sentence case. ("View case study", "Get in touch")
  - Labels (eyebrow text above headings) → UPPERCASE, tracking 0.15em, 11–12px, muted.
- **Punctuation**: oxford commas, em-dashes ( — ) for asides, en-dashes for ranges. Numbers always digits ("5 years", not "five years"). Avoid trailing periods on UI labels and one-line captions.
- **Emoji**: never. Single waving-hand 👋 used by the old site is **removed**. Replaced with an animated cursor glyph or nothing.
- **Numerals**: monospaced (Geist Mono / tabular-nums) when used as stats so digits align in scroll counters.
- **Linking**: external links carry a small ↗ glyph (Unicode U+2197, not an icon). Internal anchors get no glyph.

**Vibe examples.** (Use these as templates — same shape, same restraint.)

| ❌ Old site | ✅ New voice |
| --- | --- |
| "Crafting Digital Excellence" | "Selected work" |
| "Passionate about creating innovative solutions that make a difference" | "I design and ship AI systems — from research to production." |
| "Premium solutions tailored to your needs" | "What I work on" |
| "Let's bring your ideas to life" | "Available for select projects in Q3 2026." |
| "👋 Welcome to my digital space" | (deleted — replaced with a status pill: `● Available for new work`) |

Eyebrow labels follow a pattern: `01 — About`, `02 — Work`, `03 — Research`. Two digits, em-dash, sentence-case noun.

Project descriptions: one sentence stating *what it is*, one sentence stating *what I did*, one stating *impact or scale*. No marketing copy.

---

## Visual foundations

**Mood.** Late-night studio. Monochrome charcoal canvas, soft phosphor glow, occasional iridescent moment. Feels like a graphite rendering, not a stage-lit advertisement.

**Color.** Almost-black, near-black, soft-white, with **one** chromatic gradient reserved for accent moments only.

- Background base: `#08090B` (warm-leaning near-black, NOT pure `#000`).
- Surfaces: `#0E0F12` → `#14161A` → `#1A1D22` (3-step elevation).
- Borders: `#22252B` (default), `#2D3038` (hover), `rgba(255,255,255,0.06)` (hairline).
- Foreground: `#F5F5F7` (primary), `#A1A1A9` (secondary), `#6B6E76` (tertiary).
- Accent gradient (iridescent): `from #A78BFA via #67E8F9 to #FDE68A` — used **only** on the monogram, hero glow, active states, and progress fills. Never on cards or body text.
- Status: success `#34D399`, warning `#FBBF24`, error `#F87171`. Used as 1px dots, never as backgrounds.

The discipline: ~95% of the surface is monochrome; chromatic moments are scarce so they land.

**Type.** Three families, no more.

- **Display & body**: `Geist` (Vercel). Variable. Used 11px → 96px.
- **Accent serif** (for one-word emphasis & research quotes): `Instrument Serif` italic. Used sparingly — one slot per section max.
- **Mono** (code, stats, eyebrow labels, timestamps): `Geist Mono` (or `JetBrains Mono` fallback). `tabular-nums` always on for numeric data.

Scale (rem, 1rem = 16px):
- `display-xl` 6rem (96px) · -0.04em tracking · Geist 500
- `display-lg` 4.5rem (72px) · -0.035em tracking
- `display-md` 3rem (48px)
- `h1` 2.25rem · `h2` 1.75rem · `h3` 1.25rem · `body` 1rem · `small` 0.875rem · `xs` 0.75rem
- Eyebrow `0.6875rem` / 11px · UPPERCASE · 0.18em letter-spacing · Geist Mono 500
- Line height: display 1.0, body 1.55, small 1.4. Body text-wrap `pretty`.

**Spacing.** 4px base unit. Tokens: `2 4 8 12 16 24 32 48 64 96 128`. Section vertical rhythm = 128px desktop, 80px mobile. Content max-width: 1240px.

**Background.** Mostly flat charcoal. Three accent atmospheres, used sparingly:
1. **Phosphor glow**: a single `radial-gradient(circle at 50% 20%, rgba(167,139,250,0.12), transparent 50%)` behind the hero only.
2. **Grain**: a 1.5% opacity noise texture (SVG `feTurbulence`) on the body — kills banding on the dark gradient.
3. **Grid lines**: 1px hairline `rgba(255,255,255,0.04)` grid at 80px, only on the hero. Subtle, almost imperceptible.

No full-bleed photography. No hand-drawn illustrations. No repeating patterns beyond the grid. No purple-to-pink AI-startup gradients on cards.

**Animation.**
- **Easing**: default = `cubic-bezier(0.16, 1, 0.3, 1)` (exp-out, "natural"). For micro: `cubic-bezier(0.4, 0, 0.2, 1)`. No bouncy springs except the magnetic-cursor wobble.
- **Durations**: micro 150ms · default 280ms · entrance 600ms · marquee/orbital 8s+.
- **Entrance pattern**: opacity 0→1 + translateY(16px→0), staggered 60ms per child. Triggered once via IntersectionObserver, never on every scroll.
- **Hover** (links, nav): foreground brightens (`#A1A1A9` → `#F5F5F7`) over 150ms; cursor turns into a small filled dot with a magnetic offset of up to 8px.
- **Press**: scale `0.98`, 80ms, no color change.
- **Scroll**: native `scroll-behavior: smooth`. No Lenis-style snap unless the user is on a touch device.
- **Hero name**: characters animate in 30ms-staggered, opacity + 6px vertical offset.
- **Cursor**: 16px circle, `mix-blend-mode: difference`, lags pointer by 80ms. Hidden on touch.

**Borders & radii.**
- Hairline `1px solid rgba(255,255,255,0.06)` is the default card edge.
- Radii: `4px` (inputs, small chips) · `8px` (buttons) · `12px` (cards) · `20px` (hero panels) · `999px` (pills).
- No outer drop shadows on cards. Instead, use a **top inner highlight**: `inset 0 1px 0 rgba(255,255,255,0.06)` — this creates the "lifted from below" lighting that reads premium without literal shadows.

**Shadows (when used).**
- `shadow-glow-sm`: `0 0 24px rgba(167,139,250,0.15)` — only on active accent elements.
- `shadow-elev-md`: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)` — modal/menu only.
- Cards: zero shadow. Borders + inner highlight only.

**Transparency & blur.**
- Floating nav: `backdrop-filter: blur(20px) saturate(180%)`, background `rgba(8,9,11,0.6)`, border `rgba(255,255,255,0.08)`.
- Pills (status, tech badges): `rgba(255,255,255,0.04)` fill, `rgba(255,255,255,0.08)` border. No blur — they sit on solid surfaces.
- Glassmorphism reserved for the nav and the contact-form container. Not used on every card (that's the AI-template tell).

**Cards.** Flat `#0E0F12` surface, 12px radius, 1px hairline border, inner-highlight top edge, generous padding (24–32px). On hover: border lightens to `rgba(255,255,255,0.12)`, a 1px iridescent gradient line draws across the top edge over 400ms.

**Layout rules.**
- 12-column grid, 24px gutter, 1240px max content width.
- Navbar is fixed top, full-width, internally constrained to 1240px.
- Hero is the only section taller than viewport (110vh) — every other section is content-sized.
- Asymmetric splits ( 7/5 or 8/4 ) preferred over 6/6. The eye should know where to land first.

**Imagery vibe.** Cool monochrome with a faint warm-magenta highlight. Photography (if any) is desaturated to ~30% chroma. No warm-grain Instagram filters. No stock-photo people.

---

## Iconography

**Primary set**: [Lucide](https://lucide.dev/) (CDN). Stroke 1.5, 20px default. Lucide chosen because the line weight matches Geist's stroke and it's the de-facto modern dev-portfolio set (Vercel, Linear-adjacent).

> ⚠️ **Substitution flag.** No icon assets were provided. Lucide is loaded from CDN in `ui_kits/portfolio/index.html`. If you have a custom icon set, drop SVGs into `assets/icons/` and update the kit.

**Brand marks** (in `assets/`):
- `monogram.svg` — geometric AN mark, single-weight stroke. Used as favicon and nav-left logo.
- `monogram-iridescent.svg` — same shape filled with the accent gradient. Used at hero scale only.
- `wordmark.svg` — "Abbas Nawaz" set in Geist 500, tracking -0.02em.

**No emoji. No unicode symbols as icons.** The only allowed unicode glyphs are:
- `↗` (U+2197) for external links
- `·` (U+00B7) for inline separators ("AI Engineer · Researcher")
- `—` (U+2014) for em-dashes
- `●` (U+25CF) for status dots (rendered in semantic colors)

**Sizing**: 16px (inline), 20px (default), 24px (CTAs), 32px (section markers).

**Stroke + fill rules**: stroke `currentColor`, fill `none`. Default color `#A1A1A9`, hover `#F5F5F7`.

---

## Components manifest

See `preview/` for visual cards and `ui_kits/portfolio/` for live recreations. Components covered:

- Nav (floating, glass, magnetic underline)
- Hero (animated name, status pill, CTAs, ambient grid)
- About split layout + animated stat counters
- Skills cards (category clusters with progress orbs)
- Experience vertical timeline
- Project cards (large featured + grid, tech-badge clusters)
- Research feature card (paper preview)
- Contact form + social rail
- Footer
- Buttons (primary, secondary, ghost, icon)
- Pills / badges (tech, status, eyebrow)
- Inputs (text, textarea)
- Cursor (custom, magnetic)
