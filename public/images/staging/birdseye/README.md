# Birds Eye — logo still needed

No logo/lockup was copied. Nothing was invented, and `projects.ts` was not wired.

Could **not list** png/svg/webp/jpg assets in [odwamanitshana/bxrds-eye-website](https://github.com/odwamanitshana/bxrds-eye-website). This Cloud Agent’s GitHub token is an installation grant for `tashivxo/Nova_Industries` only. Cursor “connected GitHub” on Tashiv’s machine can see that private repo; this agent cannot.

## Checks (this PR)

| Source | Result |
| --- | --- |
| `GET /installation/repositories` | Only `tashivxo/Nova_Industries` |
| Environment `repos` | Only `github.com/tashivxo/Nova_Industries` |
| `odwamanitshana/bxrds-eye-website` | `gh repo view`, REST, `git ls-remote`, `git clone`, and unauthenticated `https://github.com/odwamanitshana/bxrds-eye-website` → **404** (private / out of grant, not a public empty repo) |
| Name variants (`bxrds-eye`, `birdseye`, `birds-eye`, under `odwamanitshana` and `tashivxo`) | Not found |
| `tashivxo/Tashiv_Portfolio`, `tashivxo/OnlinePortfolio` | No birdseye / bxrds files or references |
| **Nova Industries** (`public/images/`) | Folders: `blog/`, `hero/`, `projects/` (template case-study stills only), `ui/`, `staging/`. **No** `birdseye/` or `bxrds/` media besides this staging placeholder (`README.md` only) |
| Tashiv Vercel team | Only `free-period`; no Birds Eye deployment to pull a mark from |

## To finish

Install the Cloud Agent GitHub App on `odwamanitshana/bxrds-eye-website` (or add it to this environment’s repository list) and re-run, **or** drop 1–3 real high-res dark-friendly SVG/PNG marks into this folder.
