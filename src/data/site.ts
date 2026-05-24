// ---------------------------------------------------------------------------
// Personal details — EDIT THESE.
// This is the single place to change your name and contact links for the
// whole site. Swap the placeholders below for your real details.
// ---------------------------------------------------------------------------
export const site = {
  // Shown as the by-line / author across the site.
  name: "Adrian Lee",

  // Short descriptor under your name in the header and footer.
  role: "GRC Analyst — Governance, Risk & Compliance",
  location: "Singapore",

  // Contact links. Set any value to an empty string ("") to hide that link.
  github: "https://github.com/leeadrian841",
  linkedin: "https://www.linkedin.com/in/leeadrian841",
  email: "leeadrian841@gmail.com",

  // Used for the browser tab title and SEO.
  title: "GRC Portfolio",
  description:
    "A governance, risk and compliance portfolio built around a single fictional Singapore fintech — ISO 27001 gap analysis, cyber risk register, and a third-party risk management framework.",
} as const;

// Prefix an internal path with the configured base path so links work both
// locally and on a GitHub Pages project site.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
