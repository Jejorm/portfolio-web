# Hero mobile: contact first, full-width portrait, kinetic name

## Objective
On mobile the hero must put "contact me" first (projects second), show the portrait full width, and treat the name as a responsive kinetic element (scroll on touch, per-letter hover on pointer devices).

## Problem / why
- Hero CTA is "View work"; the goal of the site is being contacted (roles + freelance).
- Portrait is 3/5 width, left aligned, leaving dead space.
- Name wordmark condenses over `scroll(root)` 0-100vh, but on mobile it sits below the fold, so the animation runs while it is off screen.

## Research evidence (delegated read-only worker, 2026-09-29)
- WCAG 2.5.8 min 24px (AA); 2.5.5 / Vercel Web Interface Guidelines / Apple HIG: 44px on mobile; Material 48dp; 8px spacing between targets.
- One primary CTA per view; specific labels; mailto alone can dead-end, so pair with a copy button (Adam Silver); "Copied" needs `aria-live` (GOV.UK).
- Full-bleed 4:5 portrait is ~65% of a mobile viewport and pushes the CTA under the fold, so keep the portrait after the CTAs.
- Only one huge-name example verified (dennissnellenberg.com): its name is cropped on mobile. Lesson: fit the name at 390px.
- `scroll()/view()` timelines: Safari 26 supports them, MDN still not Baseline, keep `@supports`. `@media (hover: hover)` is Baseline.

## Decisions
- Primary CTA: solid ink, links to `#contact`. Labels EN "Get in touch", ES "Escríbeme".
- Secondary: visible email as mailto link + outlined "Copy email"/"Copiar correo" button (reuse `contact.copy`/`contact.copied`, `aria-live` status).
- Tertiary: text link to `#projects`, label "See projects"/"Ver proyectos".
- All targets min 44px high, 8px+ gap, primary 48px and full width on mobile.
- Portrait: full width on mobile (square crop, `object-top`), after the CTAs; keeps 4:5 on md+ in the existing grid position.
- Name: per-letter spans (`aria-hidden`) inside an `h1` with `aria-label`; hover response only under `(hover: hover) and (pointer: fine)` and `prefers-reduced-motion: no-preference`; on mobile a `view()` timeline expands the name as it enters; desktop keeps the existing `gather` on `scroll(root)`.

## Constraints
- DESIGN.md rules: no em/en dashes, radius 0 (lamp is the only exception), Archivo only, no `window` scroll listeners, motion behind `@supports (animation-timeline: scroll())` + reduced motion, `aria-label` must contain visible text.
- TDD: off (no configured mode). Checks: `pnpm lint`, `pnpm test`, visual check at 390px and 1280px, `a11y-audit`.
- ~400 changed lines is only a planning heuristic.

## Tasks
- [x] T1 CTA hierarchy + copy button + i18n keys EN/ES + tests. (route: delegated writer, 2+ non-trivial files)
- [x] T2 Portrait full width on mobile. (route: same writer)
- [x] T3 Name per-letter hover + mobile view() expansion. (route: same writer)
- [x] T4 Verify (lint, tests, screenshots 390/1280, a11y), update DESIGN.md, commits. (route: inline)

## Acceptance
- At 390x664 the primary "Get in touch" CTA is fully visible without scrolling.
- Every CTA/target is >= 44px high on mobile.
- Portrait spans the content width on mobile; unchanged layout on md+.
- Name never overflows at 390px or 1280px; hover effect only on fine pointers; reduced motion shows the static name.
- Lint and Playwright pass; no em/en dashes.

## Progress / evidence
- Writer report: `pnpm check`, `pnpm lint` clean; `pnpm test` 26 passed (chromium + mobile-safari). At 390x664 primary CTA 48px, bottom edge inside viewport; secondary row 44-46.5px; no horizontal overflow at 360/390/1280/1440.
- Parent: fixed `sm` portrait height (`sm:aspect-[4/3]`), viewed screenshots at 390 and 1280 (face intact, name fits, hover on letter works).
- Deviations accepted: hero `overflow-hidden` -> `overflow-clip` (so `view()` attaches to the h1); mobile words `display:block`; hover neighbors 105%; hover overrides `gather` mid-scroll on md+.
- Not verified: real Safari/iOS, clipboard on a real device.
