// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ---------------------------------------------------------------------------
// GitHub Pages configuration
// ---------------------------------------------------------------------------
// This site is configured as a PROJECT site: served from
//   https://<GITHUB_USERNAME>.github.io/<REPO_NAME>/
//
// If you rename the repository, update REPO_NAME below.
// If you switch to a USER site (repo named <username>.github.io), set
//   BASE_PATH = "/" and SITE_URL = "https://<username>.github.io".
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = "leeadrian841";
const REPO_NAME = "grc-portfolio";

const SITE_URL = `https://${GITHUB_USERNAME}.github.io`;
const BASE_PATH = `/${REPO_NAME}`;

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
