
---
name: portfolio-editor
description: Rewrite and condense portfolio copy (Hero, About, Projects, case studies) into short, specific, metric-driven text. Use when the user asks to edit, shorten, sharpen, or improve landing page or portfolio text, especially project descriptions.
---
# Portfolio Editor

## Context

Recruiters and hiring managers scan a portfolio in seconds. Copy must be short, specific, and backed by evidence. The site currently has too much text. Cut it, and replace vague claims with real problems, actions, and measurable results.

## Featured Project: Vikoma

Vikoma is the user's strongest proof of work: a real product with real users. Treat it as the flagship.

- Give it more space and a deeper write-up than any other project.
- Lead with real-world signals: number of users, usage, uptime, time saved, errors reduced.
- Show 2-3 concrete problems and how each was solved (see "Problem → Fix → Result").
- Place it first in the Projects section. Other projects stay brief.

## Never Invent Metrics

- Only use numbers the user provides or that exist in the repo, docs, analytics, or live site.
- If a metric is missing, do NOT guess. Insert `[METRIC NEEDED: what to measure]` and list the missing items in a short question block at the end.
- Prefer verifiable numbers: users, requests, load time, bugs fixed, hours saved, cost, uptime, test coverage.
- If no number exists, use a concrete before/after statement instead of an adjective.
  - Bad: "Improved performance significantly."
  - Good: "Replaced manual spreadsheet tracking with an automated flow."

## Section Guidelines

### 1. Hero

- Goal: say what the user does, the main stack, and the value in 2 lines max.
- Pattern: `[Role] building [type of product] with [core stack].` + one proof line (e.g. "Shipping Vikoma, used daily by [N] users.").
- Remove generic phrases ("passionate developer", "looking for opportunities").

### 2. About

- Goal: a short professional story, 3-4 sentences max.
- Cover: what they build, how they work, what they are best at.
- Remove buzzwords ("innovative", "synergy", "cutting-edge") and personal details with no professional value.
- Do not repeat facts already shown in Hero or Projects.

### 3. Projects

Use this structure per project:

- **One-line pitch:** what it is and who uses it.
- **Problem:** the real pain, in one sentence.
- **Solution:** what was built and the key decision made.
- **Impact:** a measurable result.

Rules:

- Do not repeat tech names already shown in tags or metadata.
- Keep secondary projects to 2-3 lines.
- Keep the flagship case study (Vikoma) to a short list of problem/fix/result items, not paragraphs.

#### Problem → Fix → Result (for Vikoma and any case study)

```
Problem: [What was broken or slow, with a number if possible]
Fix:     [What the user did, one sentence]
Result:  [Measurable outcome]
```

Example shape (placeholders only, replace with real data):

```
Problem: Bookings were tracked by hand, causing [N] missed appointments per week.
Fix:     Built an automated scheduling flow with reminders.
Result:  Missed appointments dropped from [X] to [Y].
```

## Core Writing Rules

1. **Plain language.** Active verbs, simple words. "Built", not "Successfully spearheaded the development of".
2. **Short sentences.** Under 12 words. Split long ones.
3. **Numbers over adjectives.** Replace "fast", "scalable", "robust" with a figure or a concrete fact.
4. **Zero redundancy.** Never repeat a concept, tool, or claim across sections.
5. **Cut by default.** If a sentence does not add proof, a decision, or a result, remove it.
6. **Keep the site's language.** Rewrite in the language the page already uses (Spanish or English). Do not translate unless asked.
7. **Protect the code.** Change only the copy. Keep markup, components, class names, i18n keys, and data structure intact.

## Workflow

1. Read the target file or section. If given a URL, read the live page text too.
2. Identify the core message of each block and what proof exists for it.
3. List claims that lack a number or concrete fact.
4. Rewrite following the section guidelines. Apply the Vikoma rules to that project.
5. Save changes directly to the file. If no file exists, output the clean text.
6. End with a short "Metrics needed" list only if placeholders were inserted. Otherwise add no commentary.

## Quality Checklist (run before saving)

- [ ] Hero fits in 2 lines.
- [ ] Vikoma is first and has problem/fix/result with real numbers or marked placeholders.
- [ ] No sentence over 12 words.
- [ ] No invented numbers.
- [ ] No tech name repeated where tags already show it.
- [ ] No fact repeated across sections.
- [ ] Total word count is lower than before.
