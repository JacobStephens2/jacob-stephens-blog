# Changelog

## 2026-03-24 — Complete site overhaul

Migrated the site from a hybrid Gatsby/PHP architecture to pure static HTML.

### What changed

- **Replaced Gatsby with clean HTML** — Rewrote the homepage (4,191 lines → 31), posts index (4,217 lines → 61), and all 6 post pages. Stripped React hydration scripts, inline Gatsby CSS, MSO/Word markup, and PHP includes.
- **Self-hosted Google Fonts** — Downloaded Merriweather and Playfair Display as local woff2 files, eliminating the Google Fonts CDN dependency.
- **Added meta tags** — Every page now has unique `<title>`, `<meta description>`, Open Graph, and Twitter Card tags.
- **Removed ~6MB of dead Gatsby artifacts** — Deleted archived JS bundles, page-data JSON, service worker, PWA manifest, webpack stats, compiled CSS, and PHP components (158 files total).
- **Fixed centering** — Changed `body { width: fit-content }` to `max-width: 70ch` so text centers properly on wide screens.
- **Standardized post URLs** — Renamed `bending_fire` to `bending-fire` with a 301 redirect from the old URL.
- **Cleaned up .htaccess** — Removed commented-out `Deny from all`, added redirect rules for the new domain.
- **Updated domain** — All links changed from jacobstephens.net to blog.stephens.page.
- **Updated email** — Contact email changed to jacob@stephens.page.
- **Updated copyright** — Footer year updated from 2022 to 2025.
- **Posts index expanded** — Added 3 previously unlisted posts (sexuality, chromatography, heart).
- **Added README** — Site structure overview and instructions for adding new posts.

### Net result

247 files changed, 1,110 insertions, 392,259 deletions. The site is now pure HTML/CSS with zero JavaScript and zero build tooling.
