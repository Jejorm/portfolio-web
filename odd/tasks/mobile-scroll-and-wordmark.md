# Feature: mobile-scroll-and-wordmark

On phones the hero name now goes from light to bold as it scrolls up the screen, always filling the width, and warms from ink to the accent. A mobile audit also fixed touch details that made scrolling and tapping feel rough.

Round 1 (3s time-based condense to 64%) was rejected by the user: they want it scroll-linked, light to bold, full width at every moment, plus a subtle extra effect or a soft shift to orange.

## Quick path

1. Open the home page at 390px wide and scroll down to the name.
2. As it rises, each word goes from 300 to 800 weight while the line keeps its length; Jeremy runs a line ahead of Orellana; the colour stays ink to the midpoint, then warms to the accent.
3. Tap a project "Source code" link, the contact GitHub/LinkedIn links or the footer links: the tap lands even slightly off the text, with no grey flash.
4. Open the menu and try to scroll: the page behind stays put.

## Mobile audit (against DESIGN.md)

| # | Finding | Severity | Action |
|---|---------|----------|--------|
| 1 | Name change was scroll-linked over ~140px of scroll (75% to 118% between 200px and 400px): a normal flick played it in a fraction of a second, and its width changed | High (user request) | Per-word `view()` embolden over `entry 0% contain 60%` (~430px), constant width |
| 2 | Text links 26px tall (project source links, contact GitHub/LinkedIn, nav name), footer links 18px, copy button 34px; DESIGN.md asks for 44px | Medium | `.hit` invisible hit area; copy button `min-h-11` |
| 3 | Default tap highlight draws a rounded grey box, breaking radius 0 | Low | `-webkit-tap-highlight-color: transparent` |
| 4 | Menu scroll lock only on `body`; iOS Safari can still scroll the page behind the sheet | Medium | Lock `html` too, `overscroll-contain` on the sheet |
| 5 | No horizontal overflow at 390px; hero CTA above the fold; Lenis leaves touch scrolling native | OK | None |

## Details

| Topic | Decision |
|-------|----------|
| Constant width | Measured "Orellana" width (em) over wght 200 to 900 and wdth 62 to 125. Width axis per weight for 4.27em: 300/125, 400/122.4, 500/120.1, 600/117.6, 700/114.8, 800/109.9. Six keyframes, linear between them |
| Size | `font-size: calc((100vw - 1.5rem) / 4.3)` so 4.27em fills the space between the 12px gutters at any phone width |
| Stagger | `view()` on each `.word`: Orellana enters a line later, so it trails Jeremy with no extra code |
| Colour | Ink to `--accent`. Ink holds to 50%: the straight blend went through a muddy brown. Accent is fine here: huge text, 3.4:1 against the 3:1 large-text minimum |
| Bug fixed on the way | `.line-mask` used `overflow: hidden`, which made the h1 a scroll container and froze `view()` on the words. Now `overflow: clip` |
| Fallback | Reduced motion or no `view()` support: static 800 / 110%, ink, full width |
| Desktop | Unchanged: scroll-linked `gather` scoped to `min-width: 768px` |

## Round 3: Safari showed no scroll animation

| Topic | Finding |
|-------|---------|
| Symptom | User report: on iOS Safari nothing animates on scroll; Chromium and the E2E suite (dev server, unminified CSS) were fine |
| Root cause | In the production build Lightning CSS folded the timeline into the shorthand for every rule written with a bare `linear`: `animation:linear both embolden view()`, `ink-in --read`, `nav-in scroll(root)`. Safari rejects a timeline inside `animation`, drops the declaration, and the element stays static. Rules using `var(--ease-scroll)` were not folded |
| Fix | `--ease-linear: linear` token; embolden, ink-in and nav-in use `var(--ease-linear)`, so the minifier leaves `animation-timeline` as a longhand |
| Evidence | Built CSS: no `animation:` shorthand contains `view(`, `scroll(` or `--read`; six separate `animation-timeline` longhands. `pnpm preview` at 390px: name 300 to 638 to 800 weight with the scroll, nav background transparent at 0, 85% paper at 200px |
| Not verified | Real iOS Safari (no WebKit here). Safari before 26 has no scroll-driven animations at all and shows the static bold name by design. iOS "Reduce Motion" also keeps everything still |

## Checklist

- [x] T1 Mobile wordmark: scroll-linked light to bold, constant width, ink to accent, per-word stagger
- [x] T2 Touch targets for text links and copy button
- [x] T3 Tap highlight off
- [x] T4 Menu scroll lock on iOS
- [x] T5 E2E tests: weight ramp, stagger, colour, width at every step, reduced motion
- [x] T6 DESIGN.md motion table and mobile notes updated
- [x] T7 Safari: keep animation-timeline out of the minified shorthand (`--ease-linear`)

## Verification evidence

| Check | Observed |
|-------|----------|
| Right edge of "Orellana" over the whole ramp | 320px: 305 to 306; 390px: 374 to 376; 430px: 414 to 415 (gutter at w - 12) |
| Weight at 390px, Orellana, every 70px of scroll | 300 / 300 / 388 / 479 / 569 / 659 / 749 / 800 |
| Jeremy vs Orellana mid-ramp | 570 vs 479 (one line ahead) |
| Colour, light and dark | Ink, then accent from the midpoint; screenshots checked in both themes |
| Desktop 1440px | Unchanged gather |
| Hit areas | Text links 46px, footer links 44px, copy button 44px; tap 8px below a footer link hits it |
| Horizontal overflow at 390px | None |
| `pnpm lint` | No issues |
| `pnpm test --project=chromium` | 27 passed |
| `mobile-safari` project | Not run: WebKit is not installed in this environment |
