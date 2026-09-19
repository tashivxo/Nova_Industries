# Iteration 3 — final parity pass

Iteration 2 completed the safe asset and crop work without changing the home hero, overlay chrome, or non-sticky staggered works layout.

## Completed in iteration 2

- Staged projects are first in the works order: Crosswith, Free Period, BetterBuilt.
- Free Period and BetterBuilt cards use their wide staging screenshots instead of cropping the marketing hero into a portrait sliver.
- BetterBuilt partner mark is a transparent, tightly cropped derivative: `public/images/staging/betterbuilt/bb-wordmark.png`.
- BXRDS.EYE remains the sand studio wordmark. No Birds Eye / Nomad Foods assets were introduced.
- The supplied SWAG SVG is still available, but its ultra-thin outlined rendering disappears at Framer partner-strip scale; the strip uses a readable `crosswithswag` word fallback rather than a fake or invented logo.
- `/project` remains a staggered pair grid. Do not restore sticky stacking.

## Remaining ranked gaps

1. **Asset coverage** — five legacy project slots still use the original X-axis stills (`only-the-brave`, `sunscreen`, `custom-designed`, `web-design`, `face-seram`) because the staging folder has no semantically matching replacement imagery. Do not map Crosswith, Free Period, or BetterBuilt screenshots onto unrelated client names. If no new matching assets arrive, leave these slots and record the limitation.
2. **Hero end-state** — compare the desktop expanded media against Framer at scroll progress 1; tune inset/easing only if the difference is obvious. Do not rebuild the lockup.
3. **Process/testimonial motion** — tighten chart/step reveal timing and testimonial dim/fade if Framer review shows a material difference.
4. **Secondary routes** — company, blog, pricing, contact, and case-study interiors remain lower-impact parity work.

## Final-pass guardrails

- Keep `NOVA INDUSTRIES` and `Design` / `Agency`.
- Keep the live Framer works behavior: staggered pairs, category/year above image, no sticky overlap.
- Do not invent Birds Eye food-brand material.
- Do not rewrite case-study copy into long essays.
- Stop after the measurable final-pass fixes; no endless micro-motion polish.
