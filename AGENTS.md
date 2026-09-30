# AGENTS.md

## Commands

Package manager is pnpm; Node >= 22.12.

```bash
pnpm dev        # Astro dev server on http://localhost:4321
pnpm build      # static build to dist/
pnpm preview    # serve the build
pnpm lint       # biome check . (no writes)
pnpm check      # biome check --write . (lint + format, applies fixes)
pnpm test       # Playwright E2E (auto-starts `pnpm dev`, reuses a running server locally)

pnpm test -g "Vikoma"                          # single test by title
pnpm test --project=chromium                   # one browser project (chromium | mobile-safari)
pnpm test tests/main.spec.ts:<line>            # single test by line
```

There are no unit tests; `tests/main.spec.ts` is the only suite and runs against the dev server.

## Architecture

Static Astro 7 single-page portfolio, Tailwind CSS 4 via `@tailwindcss/vite`, Biome for lint/format (tabs, single quotes, no semicolons, trailing commas).

**i18n is URL-driven and component-local.** `astro.config.mjs` sets locales `en` (default, unprefixed) and `es` (`/es/`). `src/pages/index.astro` and `src/pages/es/index.astro` are identical shells that compose the same section components; each component resolves its own language with `getLangFromUrl(Astro.url)` and gets strings via `useTranslations(lang)` from `src/i18n/utils.ts`. All UI copy lives in `src/i18n/ui.ts` as flat keys; `t()` falls back to English when an `es` key is missing. Adding a section means adding it to both page shells and adding keys for both languages.

**Projects are a content collection**, not hardcoded markup. `src/content.config.ts` defines the `projects` schema (order, title, kind, summary, description, challenges[], solutions[], tags, image, imageAlt, liveUrl, links[]). Each project exists twice: `src/content/projects/en/<slug>.json` and `src/content/projects/es/<slug>.json`, with `image` pointing into `src/assets/images/` (WebP, processed by `astro:assets`). `Projects.astro` filters entries by the `<lang>/` id prefix and sorts by `order`; the slug is the filename.

**Global behavior lives in `src/layouts/Layout.astro`**: SEO/OG meta, an inline pre-paint script that applies the theme (`localStorage.theme`, else system preference, via `data-theme` on `<html>`), and Lenis smooth scrolling (disabled under `prefers-reduced-motion`) that also handles in-page anchor links with a 64px nav offset. Design tokens and scroll-driven animations are in `src/styles/global.css`.

The contact form in `Contact.astro` posts to Formspree asynchronously, with a plain POST fallback when JS is off.

## Design system rules (Kinetic Index)

`DESIGN.md` (written in Spanish) is the source of truth for visual changes; read it before touching UI. Key constraints that are easy to break:

- No em or en dashes (`—`, `–`) in any visible copy, in either language. An E2E test enforces this.
- Monochrome paper/ink palette with a single accent; the `--accent` color must not be used for small text on the light theme (fails contrast). No pure black or white.
- One typeface family (Archivo Variable, weight + width axes) for everything; JetBrains Mono only for `.meta` metadata, never as an eyebrow above a heading. No section eyebrows or section numbering.
- Radius 0 everywhere (only exception: the round green `.lamp` availability indicator in the hero, colored with `--live`). Each section uses a distinct layout family; collapse to one column on mobile.
- Motion uses native CSS scroll-driven animations behind `@supports (animation-timeline: scroll())`. Never add `window.addEventListener('scroll')`. Always respect `prefers-reduced-motion`.
- Copy states only verifiable facts about real projects, with one label per call to action. An element's `aria-label` must contain its visible text (WCAG 2.5.3 Label in Name).
- Keep the existing a11y contract: skip link, visible focus, `aria-current` on language/index, `aria-pressed` on the theme toggle, `aria-expanded` + Escape + focus management on the mobile menu, inline form errors with `aria-invalid`/`aria-describedby`.

## Work tracking

Multi-step features are tracked in `odd/tasks/<feature-name>.md` (objective, checklist, verification evidence).
