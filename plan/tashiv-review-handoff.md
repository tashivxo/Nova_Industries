# Tashiv review handoff — Framer parity (stop here)

Automated passes are done. This is the stop point for human review. Do not start an iteration 4 from this document.

- **PR:** https://github.com/tashivxo/Nova_Industries/pull/6
- **Branch:** `cursor/framer-parity-home-works-89ef`
- **Source of truth:** https://x-axis.framer.website/
- **Nova keeps:** `NOVA INDUSTRIES` wordmark and home lockup `Design` / `Agency` (not X-axis / Creative)

## What changed across iterations 1–3

### Iteration 1 — chrome, type, layout, motion

Matched live Framer tokens and structure on home + works + shared chrome:

- Overlay header, stacked Geist 14px nav, 3-line mobile menu
- Oswald display scale (hero ~180 / 88, sections ~140 / 64)
- Home hero pin + scroll-expand media
- `/project` restored to Framer’s **staggered 2-up pair grid** (not sticky full-bleed stacking)
- Partner strip, skills hover thumbs, journal drop, Let’s / still / collaborate footer
- FAQ display size

### Iteration 2 — real work first, safe crops

- Works order leads with staged Nova clients: Crosswith, Free Period, BetterBuilt
- Tight BetterBuilt partner crop (`bb-wordmark.png`); BXRDS.EYE sand wordmark; SWAG strip uses a `crosswithswag` word fallback (outlined SVG disappears at strip scale)
- Did **not** invent Birds Eye / Nomad Foods assets
- Did **not** restore sticky works

### Iteration 3 — final automated 1:1 pass (this run)

Compared live Framer vs local at ~1440 and ~390, then shipped the remaining high-impact gaps:

- Hero expand: longer pin, framed end-state (~85% × 80% with inset), delayed stats/copy fade, overlay chrome fades during cover then returns
- Skills + Journal headings centered on desktop (Framer pattern); skills copy sits above a centered pair list
- Works / featured cards restored to Framer’s uniform **400 / 494** portraits; Free Period and BetterBuilt keep `object-position: top` so marketing screenshots are not a random sliver
- Mobile hero: WE ARE aligns with Design; media is content-width; two-tone hero copy
- Testimonial still is slightly dimmed; process steps get a short staggered fade
- Creative Direction hover thumb uses a Crosswith still instead of the leftover Matcha tee
- Five unmatched X-axis stills **left in place** (see below)

`npm run build` passes (21 pages).

## What is now close to Framer

| Surface | Status |
| --- | --- |
| Home rest lockup, crosshair, stats, copy | Close. Word is Design not Creative by design. |
| Desktop hero expand | Close: framed media, stats beside it mid-scroll, chrome recedes. |
| Overlay nav / contact / wordmark | Close on rest and after the pin. |
| Partnering heading + 3 metric columns | Close. Logos are Nova clients, not Walter / monoson / Overcut. |
| Featured + `/project` stagger | Close: pairs in cols 1–2 then 2–3, cat/year above image, portrait rhythm. |
| Works hero “Our featured work” + orbs | Close. |
| Skills list + hover thumbs | Close structurally. |
| Journal 3-up with middle drop | Close. |
| FAQ display + plus accordion | Close. |
| Footer Let’s / still / Contact / collaborate | Close (still is a Crosswith crop). |
| Mobile home + works | Close enough for review; Design is a shorter word than Creative so the lockup is less full-bleed. |

## Remaining gaps for human decision

These were **not** forced. Please decide:

### 1. Five leftover X-axis stills (do not auto-replace)

No semantic match exists in `public/images/staging/` for:

| Slug | Current still | Why it stayed |
| --- | --- | --- |
| `only-the-brave` | Denim cologne | No fragrance / Lereve assets |
| `sunscreen` | SYAGI SPF bottle | No sun-care assets |
| `custom-designed` | Matcha Club tee | Crosswith is a different brand |
| `web-design` | Vintage TV / hill | No Orfolio still |
| `face-seram` | Serum dropper | No Novili / skincare assets |

**Do not** map Crosswith, Free Period, BetterBuilt, or BXRDS.EYE marks onto those names. Replace only when Tashiv supplies true client photography, or retire/rename those case studies.

### 2. SWAG partner mark

`swag-logo.svg` is too thin at ~25px. Strip uses a lowercase word. Needs a tight solid wordmark export if you want a logo there.

### 3. Hero expand fine-tuning

Structurally right. Optional human nits: exact inset vs Framer’s last 50px, whether stats should vanish a hair earlier, pin length vs “hold” feel.

### 4. Process + testimonial

Framer testimonial is a dimmed still **with carousel arrows**. Ours is a single dimmed still + quote (same Be-tech copy as the template). Process is a rising line + three steps, not a pixel copy of Framer’s chart overlay. Rebuild only if you want that motion, not leftover template feel.

### 5. Secondary routes (out of scope for these three passes)

Company, blog index, pricing, contact, and case-study interiors were not 1:1’d. Shared chrome/FAQ already moved. Case-study **copy was not rewritten into essays**.

### 6. Template copy that is still X-axis

Home testimonial (Neatian Meyal / Be-tech), journal post titles, pricing blurbs, and the five leftover case names/copy still read as the template. Branding swap is a content decision.

### 7. Partner metric count-up

Framer animates 100+ → 130+ etc. Ours are static. Nice-to-have, not a layout gap.

## Guardrails that held

- No sticky works stack
- No Birds Eye frozen-food assets
- No invented SWAG bitmap
- Nova name + Design/Agency kept
- No iteration 4
