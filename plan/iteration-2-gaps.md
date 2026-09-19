# Iteration 2 — remaining Framer parity gaps

Source of truth: https://x-axis.framer.website/  
Iteration 1 PR: home + works + shared chrome. **Stop after this list; do not reopen hero lockup / stagger grid / overlay nav unless they regress.**

Live Framer `/project` is a **staggered 2-up pair grid** (left pair, then right-offset pair), not a sticky full-bleed stack. Do not restore sticky overlap.

## Measured Framer tokens (1440 / 390)

| Token | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Page bg | `rgb(13,13,13)` | same |
| Display (hero) | Oswald 500, 180px, ls -9px, lh 170 | 88px, ls -4.4px, lh 80 |
| Display (sections) | 140px, ls -7px, lh 127 | 64px, ls -3.2px, lh 62 |
| Nav | Geist 14px/500, uppercase, ls 0, `#808080` / `#fff` active | logo left, 3-line menu |
| Partnering h2 | Geist 48px/500, ls -1.92px, lh 56, max ~530px | 30px / lh 38 |
| Skill pairs | Geist 40px/500, ls -1.6px, title case | 25px |
| Content inset | ~60px | ~20px |
| Hero media rest | ~264×171, between titles | similar, in flow |
| Hero media expanded | ~1239×797 at x≈109 y≈92 | no expand |
| Featured cards | ~400×494 portrait, cat/year **above** image | stacked, nearly square |

Nova already matches these on home/works chrome. Iteration 2 is leftovers + interiors, not a second type-system rewrite.

## Ranked gaps (visual impact)

1. **Leftover X-axis case stills in the grid**  
   Still template photos: Only The Brave, sunscreen, custom-designed (Matcha), web-design (TV), face-seram.  
   Prefer `public/images/staging/` — Crosswith `crosswith-02…08`, Free Period `freeperiod-02/03`, BetterBuilt `site/bb-site-01…05`.  
   **Do not** invent Birds Eye / Nomad Foods frozen-food assets. BXRDS.EYE = studio marks only (`logo-*-sand.png`).

2. **Partner strip polish**  
   BetterBuilt box logo is a padded square (crop to the wordmark). `swag-logo.svg` viewBox is ~1540×1080 so it disappears at 25px — crop viewBox or use a tight export. BXRDS.EYE sand wordmark is faint; prefer `logo-word-sand.png` at ~1.35rem height. Optional: Framer-style metric count-up.

3. **Free Period / BetterBuilt card crops**  
   Portrait `400/494` + `object-fit: cover` clips the marketing screenshots. Prefer `object-position: top` (already on those slugs) or dedicated card crops like `freeperiod-01-card.png`.

4. **Hero expand end-state**  
   Framer full media has ~50–100px inset and smoother easing. Ours is structurally right; tune only if still obviously off at 1440 after item 1.

5. **Process + testimonial motion**  
   Process chart overlay positions; testimonial is a rectangular still + quote (Framer has a dimmer/scroll fade). Secondary to case images.

6. **Out of scope unless time remains**  
   Company, blog index, pricing, contact, case-study interiors. Shared FAQ display size already moved. Do **not** rewrite case study copy into essays.

## Do / don’t for iteration 2

- DO: swap leftover template images to staging; crop partner marks; keep NOVA INDUSTRIES + Design/Agency.
- DON’T: reintroduce sticky works stack; don’t restyle the hero lockup from scratch; don’t commit store passwords; don’t chase micro-motion if images/crops still wrong.

## Suggested files

- `src/data/projects.ts` + `public/images/staging/**`
- `src/data/home.ts` partner logos + `src/pages/index.astro` `.logo-bb` / `.logo-swag` crops
- `src/components/ProjectCard.astro` object-position / aspect only if crops fail
