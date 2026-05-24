# GRC Portfolio — PayWave Solutions

A governance, risk and compliance portfolio website, built around a single
fictional Singapore fintech (**PayWave Solutions Pte. Ltd.**) so the artefacts
read as one integrated information security management system rather than three
disconnected templates.

The site presents three projects, each anchored to specific regulatory clauses,
with the underlying Excel and Word artefacts available to download:

| # | Project | Primary anchors |
|---|---------|-----------------|
| 01 | ISO 27001:2022 Gap Analysis | ISO 27001 §4.3, §6.1.2, §6.1.3(d); MAS TRM §3; PDPA §26B |
| 02 | Cyber Risk Register & Treatment Plan | ISO 27005 §6; NIST SP 800-30; NIST CSF 2.0; ISO 31000 |
| 03 | Third-Party Risk Management Framework | MAS TRM §9; MAS Outsourcing; ISO 27001 A.5.19–A.5.22 |

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

---

## Before you publish — two edits

Everything you need to personalise lives in two files:

1. **`src/data/site.ts`** — your name, role, and contact links (GitHub, LinkedIn,
   email). Set any link to an empty string `""` to hide it.
2. **`astro.config.mjs`** — set `GITHUB_USERNAME` to your GitHub handle. If you
   rename the repository, also update `REPO_NAME`.

> The site is configured as a **project site**, served at
> `https://<username>.github.io/grc-portfolio/`. To host it as a **user site**
> instead (repo named `<username>.github.io`, served at the root), set
> `BASE_PATH = "/"` in `astro.config.mjs`.

---

## Local development

Requires Node 20+.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321/grc-portfolio/
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

---

## Deployment (GitHub Pages)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
One-time setup:

1. Push this repository to GitHub (default branch **`main`**).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Make sure `GITHUB_USERNAME` in `astro.config.mjs` matches your account.

After that, **every push to `main` rebuilds and redeploys the site automatically.**
You can also trigger a deploy manually from the **Actions** tab
(workflow: *Deploy to GitHub Pages*).

---

## Dependency updates

[`.github/dependabot.yml`](.github/dependabot.yml) opens weekly pull requests for:

- **npm** packages — minor and patch updates are grouped into a single PR to
  reduce review noise; major updates come as individual PRs.
- **GitHub Actions** — keeps the workflow action versions current.

---

## Project structure

```
.
├── .github/
│   ├── workflows/deploy.yml     # GitHub Pages auto-deploy
│   └── dependabot.yml           # dependency update schedule
├── public/
│   ├── downloads/               # the 7 downloadable artefacts (.xlsx / .docx)
│   └── favicon.svg
├── src/
│   ├── components/              # Nav, Footer, ProjectCard, HeatMap
│   ├── data/                    # site.ts (your details) + projects.ts
│   ├── layouts/                 # Base.astro, Project.astro
│   ├── pages/
│   │   ├── index.astro          # homepage
│   │   ├── frameworks.astro     # framework reference
│   │   └── projects/            # one page per project narrative
│   └── styles/global.css        # design system
└── astro.config.mjs
```

The original source artefacts and supporting documents
(`*_PayWave.xlsx`, `*_PayWave.docx`, `GRC_Framework_Reference.md`,
`PayWave_Portfolio_Narrative.md`) remain in the repository root as the canonical
copies; the website serves duplicates from `public/downloads/`.
