# Copy rewrite + Vikoma case study

## Objective
Rewrite all visible copy (EN/ES) to be professional, specific to real projects and accessible; add Vikoma (https://vikoma.app) as a case study.

## Problem / why
Current copy is generic ("precise interfaces", "Leveraging…", "Zero-latency"), some claims are overstated, one WCAG 2.5.3 Label-in-Name failure (hero CTA aria-label differs from visible "View work"), and the strongest real project (Vikoma, live SaaS) is missing.

## Scope
- `src/i18n/ui.ts`, `src/content/projects/{en,es}/*.json` (+ new `vikoma.json`), `src/components/{Hero,Skills,Principles}.astro` (copy only), `tests/main.spec.ts`, `DESIGN.md` (copy notes).
- Asset: `src/assets/images/project-vikoma.webp` (composed from real Vikoma screenshots).

## Constraints
- Only verifiable facts (Vikoma facts from its repo docs). Vikoma repo is private: live link only.
- No em/en dashes; one CTA label per intent; aria-label must contain visible text (WCAG 2.5.3).
- Design unchanged. TDD: off (no configured mode); functional checks: build, biome, Playwright (chromium).

## Tasks
- [x] T1 Audit baseline: a11y scanner 0 findings; contrast AA pass; manual: 2.5.3 failure on hero CTA. (route: inline)
- [x] T2 Vikoma facts brief from `~/Desktop/vivio` docs. (route: delegated explorer, 4+ files)
- [x] T3 Vikoma mockup image. (route: inline, mechanical asset)
- [x] T4 Rewrite copy EN/ES + add Vikoma entry + fix a11y labels + update tests. (route: delegated writer, 2+ non-trivial files)
- [x] T5 Verify: build, biome, Playwright, a11y scanner, visual check; commit.

## Acceptance
Build/lint/tests green; scanner 0 findings; no dashes; every project copy traceable to repo/docs.

## Progress
- Delivery: single feature branch `redesign/kinetic-index`, strategy ask-on-risk.
- T4 evidence: writer report; build pass, biome pass, Playwright chromium 9/9, a11y scanner 0 findings, no dashes. Parent fix: ES Vikoma challenge 1 "clientes" -> "negocios" (tenant ambiguity).
- T5 evidence: parent spot check re-ran all checks (same results). WebKit not run locally.
- Next: PR review.
