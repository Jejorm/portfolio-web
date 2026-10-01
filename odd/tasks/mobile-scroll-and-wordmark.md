# Feature: mobile-scroll-and-wordmark

On phones the hero name now condenses slowly on a 3 second clock instead of being tied to scroll, and a mobile audit fixed touch details that made scrolling and tapping feel rough.

## Quick path

1. Open the home page at 390px wide and scroll down to the name.
2. It arrives full width (118% / 800) and condenses to 64% / 500 over about 3 seconds, once.
3. Tap a project "Source code" link, the contact GitHub/LinkedIn links or the footer links: the tap lands even slightly off the text, with no grey flash.
4. Open the menu and try to scroll: the page behind stays put.

## Mobile audit (against DESIGN.md)

| # | Finding | Severity | Action |
|---|---------|----------|--------|
| 1 | Name change was scroll-linked over ~140px of scroll (75% to 118% between 200px and 400px): a normal flick played it in a fraction of a second | High (user request) | 3s time-based `gather` on entry, mobile only |
| 2 | Text links 26px tall (project source links, contact GitHub/LinkedIn, nav name), footer links 18px, copy button 34px; DESIGN.md asks for 44px | Medium | `.hit` invisible hit area; copy button `min-h-11` |
| 3 | Default tap highlight draws a rounded grey box, breaking radius 0 | Low | `-webkit-tap-highlight-color: transparent` |
| 4 | Menu scroll lock only on `body`; iOS Safari can still scroll the page behind the sheet | Medium | Lock `html` too, `overscroll-contain` on the sheet |
| 5 | No horizontal overflow at 390px; hero CTA above the fold; Lenis leaves touch scrolling native | OK | None |

## Details

| Topic | Decision |
|-------|----------|
| End state | Same as desktop gather (64% / 500): compared 118, 84 and 64 at 390px; 64 reads as deliberate and keeps one story across breakpoints |
| Trigger | `IntersectionObserver`, threshold 0.6, disconnects after the first run; class `.is-gathered` |
| Easing | `--ease-scroll` (sine in-out), 3s |
| Desktop | Unchanged: scroll-linked `gather` now scoped to `min-width: 768px` |
| Reduced motion | Animation lives inside `prefers-reduced-motion: no-preference`; the name stays at 118% |
| No scroll-timeline support | Mobile animation is time-based, so it also runs where `animation-timeline` is missing |

## Checklist

- [x] T1 Mobile wordmark: 3s condense on entry
- [x] T2 Touch targets for text links and copy button
- [x] T3 Tap highlight off
- [x] T4 Menu scroll lock on iOS
- [x] T5 E2E tests for the wordmark timing and reduced motion
- [x] T6 DESIGN.md motion table and mobile notes updated

## Verification evidence

| Check | Observed |
|-------|----------|
| Name at 390px, t = 0.1 / 0.75 / 1.5 / 2.25 / 3.2s after entering | 117.75 / 110.75 / 91.75 / 72.25 / 64% |
| Name before entering view | 118% / 800 |
| Desktop 1440px, scroll 0 / 450 / 900 | 118 / 91 / 64% (unchanged) |
| Reduced motion, 3.3s after entering | 118% / 800 |
| Hit areas | Text links 46px, footer links 44px, copy button 44px; tap 8px below a footer link hits it |
| Horizontal overflow at 390px | None |
| `pnpm lint` | No issues |
| `pnpm test --project=chromium` | 27 passed |
| `mobile-safari` project | Not run: WebKit is not installed in this environment |
