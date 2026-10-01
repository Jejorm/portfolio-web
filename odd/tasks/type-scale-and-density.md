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
- [x] T2 distill: in each project show the strongest problem/solution pair, fold the rest in `<details>`/`<summary>` (works without JS, keyboard accessible, new i18n keys in en and es). Route: delegated writer (Projects.astro + ui.ts + global.css).
- [x] T3 clarify: remove summary/description redundancy in the 8 project JSONs, keep facts, no new claims, no dashes. Route: delegated writer (8 JSON files).
- [x] T4 layout: separate section `h2` from project `h3` visually, make About and Stack `h3` match their role (sizes and semantics). Route: delegated writer (About, Skills, Projects, global.css).
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

### T2 distill (done)
- Route: delegated writer (trigger: Projects.astro + ui.ts + tests). Parent spot check: `pnpm lint` clean, no new dashes, screenshots of the first card (closed and open, EN and mobile) reviewed.
- Structure: pair 01 always visible; pairs 02..N in a native `<details class="more">` with a 44px `<summary>` (CSS plus/minus, `aria-hidden`, no JS, no animation), sr-only `h4` inside so the folded lists keep their labels. Rendered only if a project has more than one pair. i18n keys `work.more.one`, `work.more.other`, `work.less` in en and es (the "Hide" label was an addition by the writer).
- Tests: the case-study test was rewritten (all items stay in the DOM, first pair visible and numbered 01); two new tests cover keyboard open/close (Enter, Space) in EN and the ES label.
- Checks: `pnpm check`, `pnpm lint`, `pnpm build`, `pnpm test` = 50 passed (chromium + mobile-safari).
- Measured (EN, details closed): visible words Vikoma 278 to 179, Tickets about 166 to 149, Luxe about 166 to 104, Assembly about 166 to 110. Page height 10790 to 10711px at 1440px and 12506 to 12223px at 390px: the saving is in words, not pixels, because description and stack stay visible. Height will come from T3/T4.
- Commit: dc045df (feat(projects): fold secondary problems and solutions behind a disclosure).

### T3 clarify (done)
- Route: delegated writer (8 project JSON files). Parent review of the before/after text of every `description` and the first challenge/solution pairs, with three corrections applied inline: restored "Ecuador's data protection law" in Vikoma (EN and ES), restored "screen reader" in Assembly (EN and ES), reverted the redundant Luxe first-challenge rewording (EN and ES).
- Result: `summary` untouched everywhere; each `description` no longer restates audience, product type or status from the summary; no fact added. Visible words (EN, details closed): approximate figures from the writer, taken from a stale dev server (see Findings), re-measured in T5. Page height unchanged (10711px at 1440px), as predicted: the saving is words, not pixels.
- Dropped facts that the summary or `kind` already state: "word-guessing game", "real estate platform", "barbershops and beauty salons", "from a solo barber to a multi-chair shop", "double bookings" sentence in Vikoma.
- Checks: `pnpm check`, `pnpm lint`, `pnpm build`, `pnpm test` (50 passed, chromium and mobile-safari); no dashes in added lines.
- Commit: fbfa048 (refactor(content): remove summary and description overlap in case studies).

### T4 layout (done)
- Route: delegated writer (Projects, About, Skills, global.css comment). Parent review of the heading sizes report and the screenshots (Projects card at 1440px, About and Stack at 390px).
- Project `h3` `display-m` to `display-s` (68 to 48px at 1440px, 40 to 28px at 390px); section h2/h3 ratio 1.27 to 1.80 (desktop), 1.20 to 1.71 (mobile). About `h3` 20 to 25px (`heading` token, weight 600). Stack group names are now `<dl>`/`<dt class="meta">` plus `<dd><ul>` (labels, not headings; the tool list stays a real list). Heading outline has no skipped levels. No horizontal overflow at 1440 or 390.
- Checks: `pnpm check`, `pnpm lint`, `pnpm build`, `pnpm test` (50 passed).
- Note: the Stack tool names (`display-m`, 68px) are larger than project titles by design (a tool list, not headings); a smaller step is an optional follow-up.
- Commit: f5c8dd8 (refactor(layout): match heading sizes and Stack markup to their roles).

## Findings
- The long-running dev server on :4321 (started the day before) serves stale content-collection data: it still renders the pre-T3 project descriptions, while `pnpm build` output has the new copy. Everything about the copy (word counts, screenshots) must be measured against a fresh build (`pnpm preview`), not the dev server. Tests reuse that dev server and none assert project copy, so the passing runs are valid for markup and style only.

## Next step
T5 polish.
