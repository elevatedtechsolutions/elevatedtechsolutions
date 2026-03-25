# Elevated Tech Solutions

Production-ready starter for the official Elevated Tech Solutions website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static marketing-site architecture

## Getting Started

```bash
npm install
npm run dev
```

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://elevatedtechsolutionsllc.com
```

## Project Structure

```text
src/
  app/
  components/
  config/
  lib/
public/
  images/
    branding/
    general/
    projects/
    services/
```

## Notes

- The site ships with a premium dark base theme and reusable layout/components.
- Metadata defaults, `sitemap`, `robots`, `manifest`, and an Open Graph image route are already wired up.
- Static brand and content images belong in `public/images/...`.
- The scaffold is intentionally lightweight: no auth, database, CMS, Stripe, or admin portal.
- Netlify can deploy this as a standard Next.js site with the existing setup.
