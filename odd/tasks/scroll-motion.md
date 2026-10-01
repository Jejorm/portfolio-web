# Feature: scroll-motion

The hero name no longer reacts to the cursor. Motion is now tied only to scroll and uses one soft easing curve, in four places: the hero name, the hero portrait, the project images and the contact title.

## Quick path

1. Scroll the home page from the top: the name condenses and the portrait drifts inside its frame.
2. Keep scrolling to the projects: each image opens from an inset as it enters.
3. Reach Contact (768px or wider): the title gains weight as it enters.
4. Hover the name: nothing moves, and selecting it is stable.

## Details

| Topic | Decision |
|-------|----------|
| Why | Per-letter hover made selection jitter; the user asked for scroll-only, smooth motion. |
| Easing | One token, `--ease-scroll: cubic-bezier(0.37, 0, 0.63, 1)`, for every scroll-driven animation. |
| Portrait | `scale: 1.08` plus `translate` -3% to 3% on `scroll(root)`. Uses the individual properties because `data-reveal` owns `transform`. |
| Contact title | Weight 400 to 600 on `view()`, only at 768px or wider. On phones near 375px any weight change re-wraps the title mid-scroll (measured). |
| Bug found | Project figures used `overflow-hidden`, which made each one a scroll container, so `.clip-reveal` sat at progress 1 and never animated. Fixed with `overflow-clip`. |
| Out of scope | `data-reveal` entry fades, About read-along, nav surface. |
| Constraints | DESIGN.md motion rules: native scroll-driven CSS behind `@supports`, no scroll listeners, `prefers-reduced-motion` respected. |
| TDD | Off (no project TDD config). Checks: `pnpm lint`, `pnpm test` (Playwright), browser readback. |
| Route | Direct inline: CSS plus three one-line markup edits. The code-simplifier agent reviewed the result at the user's request. |

## Checklist

- [x] T1 Remove per-letter spans and hover; scroll-only wordmark with eased curve
- [x] T2 `--ease-scroll` token applied to wordmark, mobile expand, project unclip
- [x] T3 Hero portrait drift
- [x] T4 Contact title settle without line-break changes
- [x] T5 code-simplifier review: stale Hero comment fixed, `overflow-clip` reason documented, constant `scale` moved out of keyframes; DESIGN.md row already merged
- [x] T6 `pnpm lint` and `pnpm test` pass; browser readback

## Verification evidence

| Check | Observed |
|-------|----------|
| Hover on name (1440px) | 118% / 800, unchanged |
| Name on scroll 225/450/675/900px | 110 / 90.75 / 71.75 / 64% stretch |
| Name on mobile (390px) entering view | 75% to 118% |
| Portrait at scroll 0/300/600/900px | translate -3% to 3%; image always covers frame (no gaps) |
| Project image entering | inset 10% 6% to 0, scale 1.06 to 1 (was stuck at 1 before the fix) |
| Contact title entering (1440px) | weight 402 / 508 / 600 / 600 |
| Contact title line count, weight only, 768 to 1920px, en and es | Stable at every 10px step |
| Contact title on 390px | No animation; no horizontal overflow |
| `pnpm lint` | No issues |
| `pnpm test` | 50 passed |

## Next step

Commit on `style/hero-wordmark-hover`. Push and PR are the user's call.
