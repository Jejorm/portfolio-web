# Feature: type-scale-and-density

## Objective
Apply the typography and information-density audit (2026-09-30): a coherent type scale with a 16px reading floor, informative metadata no smaller than 13px, case studies that show less text at once, no redundant copy, and a heading hierarchy whose visual size matches its role.

## Problem (measured in Chromium, 1440px and 390px)
- 38% of all text (problems/solutions in `Projects.astro`) is 15px and `ink-muted`, smaller than the summary (18px) and description (16px) above it.
- 79 elements are below 14px (mono 12px): availability line, "Built with", stack labels, indexes, language toggle, Stack `h3`.
- 17 distinct font sizes; reading sizes 15/16/18 are indistinguishable; gaps 21.6 to 36px and 20 to 64px.
- Projects hold 813 of 1158 words (70%) and 54% of page height; Vikoma has 278 words, others about 166.
- Project summary and description restate the same thing.
- Heading levels do not match visual size: section `h2` 86px vs project `h3` 68px; About `h3` 18px; Stack `h3` 12px mono.

## Scope
In: type scale tokens and usage, project card information design, project copy dedupe (EN and ES), heading hierarchy, final lint/test/build pass.
Out: new sections, new claims, palette, motion, new pages (`/work/[slug]`).

## Constraints
- DESIGN.md rules: no em/en dashes in visible copy, one typeface family (JetBrains Mono only for `.meta`), radius 0, no `window` scroll listeners, `prefers-reduced-motion` respected, only verifiable facts, `aria-label` contains visible text.
- Every project exists twice (`en` and `es`); every UI string in `src/i18n/ui.ts` for both languages.
- Copy changes may only remove or merge existing facts, never add new claims.
- ~400 authored changed lines per task is a planning heuristic only, not a cap.

## Process
- Branch: `refactor/type-scale-and-density` (from `fix/theme-toggle-icons`).
- TDD: disabled (source: no project TDD config; tests are Playwright E2E only). Runner for functional checks: `pnpm lint`, `pnpm test`, `pnpm build`.
- RDD: off (global), so no native review; review assessment not applicable.
- Delivery strategy: `ask-on-risk`. Forecast about 400 authored changed lines in total across tasks; push and PR stay the user's decision.
- Route: every task is a delegated writer (each touches 2+ non-trivial files); parent verifies by spot check.

## Tasks
- [x] T1 typeset: define a scale of about 8 steps (tokens in `global.css`), problems/solutions to 16px, metadata and availability to 13-14px, remove one-off sizes. Route: delegated writer (global.css + several components).
- [ ] T2 distill: in each project show the strongest problem/solution pair, fold the rest in `<details>`/`<summary>` (works without JS, keyboard accessible, new i18n keys in en and es). Route: delegated writer (Projects.astro + ui.ts + global.css).
- [ ] T3 clarify: remove summary/description redundancy in the 8 project JSONs, keep facts, no new claims, no dashes. Route: delegated writer (8 JSON files).
- [ ] T4 layout: separate section `h2` from project `h3` visually, make About and Stack `h3` match their role (sizes and semantics). Route: delegated writer (About, Skills, Projects, global.css).
- [ ] T5 polish: run lint/test/build, fix leftovers, re-measure type sizes and word counts, close out evidence.

## Acceptance criteria
- Smallest informative text is 13px or more; 12px only for purely decorative marks.
- Distinct font sizes reduced to a documented scale (about 8 steps).
- Problems/solutions are 16px at desktop and mobile.
- Each project initially shows summary plus one problem/solution pair; remaining pairs reachable by keyboard.
- Summary and description no longer restate each other; ES and EN stay in sync.
- `pnpm lint`, `pnpm test` (chromium + mobile-safari where available) and `pnpm build` pass; the no-dashes test passes.

## Progress and evidence
### T1 typeset (done)
- Route: delegated writer (trigger: 9 files across global.css and components). Parent spot check: `pnpm lint` clean, no new dashes in the diff.
- Writer checks: `pnpm check`, `pnpm lint`, `pnpm build`, `pnpm test --project=chromium` (23 passed incl. no-dashes). `mobile-safari` not run.
- Scale tokens in `global.css` (`@theme static`): meta 13, ui 14, body 16, lead 20, heading 25 (reserved for T4), title 28-40, display-s 28-48, display-m 40-68, display-l 48-88, poster 56-176. Ten tokens, not eight, because 13/14 and the reserved 25 sit next to the fluid display steps.
- Before/after at 1440px: 18 distinct sizes to 10; 15px text (41%) gone; 16px now 68%; text under 13px: 83 nodes to 0. At 390px: 14 to 9 sizes, 70 nodes under 13px to 0.
- Notes for later tasks: `display-m` is shared by project h3 and the Stack list (override locally in T4); 404 h1 keeps its own clamp on purpose; `f(x)` mark is now 56px on mobile (decorative); h4 labels are 14px semibold (T2 may replace them).
- Commit: 9ee0439 (style(type): introduce type scale tokens and raise reading floor to 16px).

## Next step
T2 distill.
