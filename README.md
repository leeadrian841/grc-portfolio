# GRC Portfolio — PayWave Solutions

A governance, risk and compliance portfolio website, built around a single
fictional Singapore fintech (**PayWave Solutions Pte. Ltd.**) so the artefacts
read as one integrated information security management system rather than three
disconnected templates.

The site presents three projects, each anchored to specific regulatory clauses,
with the underlying Excel and Word artefacts available to download:

| # | Project | Status | Primary anchors |
|---|---------|--------|-----------------|
| 01 | ISO 27001:2022 Gap Analysis | ✅ Complete | ISO 27001 §4.3, §6.1.2, §6.1.3(d); MAS TRM §3; PDPA §26B |
| 02 | Cyber Risk Register & Treatment Plan | ✅ Complete | ISO 27005 §6; NIST SP 800-30; NIST CSF 2.0; ISO 31000 |
| 03 | Third-Party Risk Management Framework | ✅ Complete | MAS TRM §9; MAS Outsourcing; ISO 27001 A.5.19–A.5.22 |
| 04 | Information Security Policy Library | ✅ Complete | ISO 27001 A.5–A.8; MAS TRM §3,7,9; PDPA §26A–D; PCI DSS 3,4,6,8 |
| 05 | Incident Response Plan & Tabletop | 🚧 In progress | NIST SP 800-61; ISO 27001 A.5.24–A.5.30; MAS TRM §7.5 |
| 06 | GRC Metrics Dashboard | 🚧 In progress | ISO 27001 §9.1; NIST IR 8286; MAS TRM §3.6 |

> **Disclaimer:** PayWave Solutions, DataPulse Analytics and SwiftDesk Solutions
> are fictional entities created for this portfolio. All findings, costs and
> assessments are illustrative. The referenced frameworks (ISO 27001, NIST CSF,
> MAS TRM, PDPA, PCI DSS) are real and publicly accessible.

---

## Tech stack

- **[Astro](https://astro.build)** — static site generator (zero client JS except a small scroll-reveal observer)
- **Self-hosted fonts** via `@fontsource` — Fraunces (display), IBM Plex Sans (body), IBM Plex Mono (citations)
- **`@astrojs/sitemap`** — auto-generated sitemap
- **GitHub Actions** — auto-deploy to GitHub Pages on every push
- **Dependabot** — weekly dependency update PRs (npm + GitHub Actions)
