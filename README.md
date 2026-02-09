# taxresidencyadvisors.com

Professional website for **KLB Consultants** — tax residency planning and real estate investment consulting for family offices and high-net-worth individuals across California and Nevada.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle section/card animations)

## Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

## Deployment

Deploy to **Vercel** by connecting the repository. No custom `vercel.json` is required for standard deployment.

Optional: configure environment variables in Vercel for future form handling (e.g. CRM or email integration).

## Google Search Console

The site is ready for [Google Search Console](https://search.google.com/search-console):

1. **robots.txt** — Served at `/robots.txt` (generated from `src/app/robots.ts`). Allows all crawlers and references the sitemap.
2. **Sitemap** — Submit `https://www.taxresidencyadvisors.com/sitemap.xml` in GSC (Sitemaps). The primary domain is **www** (Vercel).
3. **Verification** — In GSC, add a property for `https://www.taxresidencyadvisors.com`. To use the **HTML tag** method:
   - Copy the `content` value from the meta tag GSC gives you (e.g. `content="abc123..."`).
   - In Vercel, add an environment variable: `GOOGLE_SITE_VERIFICATION` = that value (no quotes).
   - Redeploy. The layout injects `<meta name="google-site-verification" content="..." />` when the variable is set.
   - In GSC, click Verify.

Apex domain `taxresidencyadvisors.com` redirects to `www.taxresidencyadvisors.com` (see `next.config.ts`). Alternatively use DNS or HTML file upload verification in GSC; the meta tag is optional.

## Project structure

- `src/app/` — App Router: layout (Navbar + Footer), home, about, for-cpas, services, services/[slug], case-studies, nevada-guide, contact, not-found
- `src/components/` — Navbar, Footer, CTA, StatBar, TestimonialCard, ForCPAsReferralForm, ContactPageForm
- `src/lib/` — services.ts (service data), case-studies.ts (case study data)
- `public/` — Logo, favicon, static assets

## License

Private. All rights reserved.
