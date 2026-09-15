# TEST REPORT — Hotel Prashanth Deluxe
> Date: 2026-09-10 | Tester: Senior Engg | Segment: Hospitality (Tier-2)

## Build
- [x] `npm run build` PASS (vite 5.4.21, 4 modules, 0 warnings)
- dist sizes: 12.92 kB HTML / 11.87 kB CSS / 1.20 kB JS (dist total ~36K) — well under perf budget

## Static checks (all PASS)
- [x] NO tel:/wa.me/phone anywhere (CSV phone empty — never invented); Directions/Maps CTAs only
- [x] data-missing flag: `<!-- data-missing: phone -->` + visible "Phone not listed" notes (hero, visit)
- [x] Google Maps URL present (nav, hero, marquee-adjacent, reviews, visit, mobile Directions button)
- [x] JSON-LD Hotel schema, no telephone, rating 4.0, hasMap
- [x] H1, semantic sections (rooms/amenities/reviews/visit/FAQ), skip link, async fonts
- [x] Deep navy + amber theme (shree-ram-lodge pattern), contrast-safe (brand-700 on light, cream on navy)
- [x] No lorem ipsum, no invented tariff/hours (in-person confirmation fallback)
- [x] aria-expanded on nav toggle; base '/sindagi-hotel-prashanth-deluxe/'; favicon in dist

## Pending (requires preview + device lab before Deployed)
- [ ] Lighthouse CI mobile+desktop (target 90/95/95/95)
- [ ] Playwright E2E + axe (0 serious) + linkinator
- [ ] Screenshots 360/768/1440
- [ ] GitHub Pages deploy verify (200 + base path assets)

## Verdict: BUILT + STATIC QA PASS → ready for full QA + separate repo deploy

## Maps embed + README (2026-09-15)
- [x] Google Maps iframe embed added to #visit panel (lazy-loaded, `output=embed`, query fused from page's own Maps URL)
- [x] Per-site README.md added (live link, owner update guide)
