---
name: abbas-nawaz-design
description: Use this skill to generate well-branded interfaces and assets for Abbas Nawaz's personal portfolio brand — AI Engineer, Full Stack Developer, and Researcher. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a premium, modern, dark, monochrome portfolio aesthetic with a single iridescent accent gradient.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

The system covers:
- `colors_and_type.css` — the canonical token sheet (colors, type, spacing, motion, radii, elevation, blur)
- `assets/` — AN monogram (default + iridescent), wordmark
- `preview/` — visual reference cards for every token group
- `ui_kits/portfolio/` — full React/Babel recreation with components for Nav, Hero, About, Skills, Experience, Projects, Research, Contact, Footer

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Inherit tokens by linking `colors_and_type.css` and pulling component code from `ui_kits/portfolio/components.jsx`.

If working on production code (Next.js / Tailwind), translate the CSS variables in `colors_and_type.css` to a Tailwind config and import Geist + Instrument Serif + Geist Mono from Google Fonts.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

**Core rules to enforce:**
- Dark monochrome by default. The iridescent gradient (violet → cyan → amber) appears only on the monogram, accent words, focus rings, and a single hero glow — never on body cards.
- Sentence case for headings, lowercase for nav, UPPERCASE only for eyebrow labels.
- First-person voice. No emoji. No marketing hype words. Em-dashes for asides, ↗ for external links, · for inline separators.
- Cards use 1px hairline borders + inner top highlight, no drop shadows.
- Geist for everything except: Instrument Serif italic (sparingly, for emphasis) and Geist Mono (code, stats, eyebrow labels).
