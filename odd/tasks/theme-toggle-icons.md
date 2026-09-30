# Feature: theme-toggle-icons

## Objective
Fix the Dark/Light theme toggle so it switches reliably in both languages (/ and /es/), showing a moon icon in dark mode and a sun icon in light mode.

## Problem
Toggle label is hard-coded to "Dark"/"Oscuro", has no icons, aria-label lacks visible text (WCAG 2.5.3), initial aria-pressed is wrong when page loads in dark mode.

## Decisions
- Keep toggle semantics (aria-pressed, fixed accessible name containing visible text), per CLAUDE.md/DESIGN.md a11y contract.
- Icons: inline SVG, currentColor, aria-hidden, switched by CSS using same selectors as tokens (no flash).
- TDD: off (no explicit config). Runner: pnpm test (Playwright).

## Tasks
- [x] T1 Create AGENTS.md from CLAUDE.md and save to Engram (obs 719)
- [x] T2 Fix theme toggle (Navigation.astro, ui.ts, tests) with moon/sun icons, en + es
- [x] T3 Verify: pnpm lint, pnpm test, pnpm build

## Evidence
- T1: AGENTS.md written and read back; Engram id 719.

## Next step
Report to user; push/PR are user decisions.

- T2/T3: worker lint ok, chromium 21 passed, mobile-safari 21 passed, build ok; parent spot check lint ok + 8 theme tests passed (chromium). Original bug not reproducible; root cause likely the fixed "Dark" label.

- T4 icon-only toggle + inline theme script: worker chromium 23, mobile-safari 23, build ok; parent spot check ok.
