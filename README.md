# taxresidencyadvisors.com

Professional website for **Tax Residency Advisors** — tax residency planning and real estate investment consulting for family offices and high-net-worth individuals across California and Nevada.

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

Deploy to **Vercel** by connecting the repository. The repo includes a `vercel.json` that defines one cron job. Deployment is via Vercel with the repo connected to GitHub ("Connected to all projects"). Webhook events (Deployment Created/Succeeded, Domain Certificate, etc.) are managed in the Vercel dashboard at **Webhooks** (e.g. [vercel.com/webhooks/github](https://vercel.com/webhooks/github)) if you ever need to send deploy or domain events to an external service. **Drains** (Logs, Traces, Speed Insights, Analytics) can be forwarded to a third-party or custom endpoint from the Vercel project: **Settings > Observability > Drains** (or **Add Drain**). No drains are required for this site unless you integrate with an external logging/APM provider.

**What gets deployed** — Production uses **www.taxresidencyadvisors.com** (and apex redirect). One **cron** runs daily at 06:00 UTC and calls `/api/cron/ping-sitemap`. **API routes:** `/api/cron/ping-sitemap`, `/api/og`; **static/sitemap:** `/robots.txt`, `/sitemap.xml`. All page routes (/, /about, /case-studies, /contact, /for-cpas, /nevada-guide, /privacy, /services, /services/[slug], /terms) are built as static or ISR. Deployment checks are not configured; you can add them under **Framework Settings > Deployment Checks** in Vercel if needed.

Optional: configure environment variables in Vercel for future form handling (e.g. CRM or email integration).

**Vercel project security and retention** — In the Vercel project: **Settings** (or **Project Settings**). All of the following are configured in the dashboard only:

- **Build Logs and Source Protection** — who can access `/_logs` and `/_src`
- **Customer Success Code Visibility** — whether Vercel Support can inspect deployment source
- **Git Fork Protection** — who can deploy from PRs
- **Secure Backend Access with OIDC** — issuer and claims for cloud auth
- **Deployment Retention Policy** / **Recently Deleted Deployments**
- **Directory Listing** — whether to show folder contents when no index exists
- **Skew Protection** — max age and allowed domains for cross-site fetch
- **Bulk Redirects** — limit and pricing
- **Framework Settings** (same project) — **Framework Preset** (Next.js), **Root Directory**, **Ignored Build Step**, **Node.js Version**, **On-Demand Concurrent Builds**, **Build Machine** (Standard/Enhanced/Turbo), **Deployment Checks**, **Rolling Releases**, **Prioritize Production Builds**

**SEO and GEO** — The site uses **LocalBusiness** and **FAQPage** (For CPAs) schema, **Article** with datePublished/dateModified on the [Nevada Guide](/nevada-guide), and **[llms.txt](https://www.taxresidencyadvisors.com/llms.txt)** for AI agents. **robots.txt** allows crawlers (including GPTBot, Claude-Web, PerplexityBot) and references the [sitemap](https://www.taxresidencyadvisors.com/sitemap.xml).

## Cron jobs

One Vercel cron runs **daily at 06:00 UTC** and calls `/api/cron/ping-sitemap`. That route pings Google and Bing with the site sitemap URL (`https://www.taxresidencyadvisors.com/sitemap.xml`) so search engines can recrawl the sitemap. No auth is required for the endpoint; you can add an optional `CRON_SECRET` env var and check it in the route if you want to lock down the URL.

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

## Analytics

Google Analytics 4 (gtag.js) is loaded in the root layout for the web data stream:

- **Stream URL:** `https://www.taxresidencyadvisors.com`
- **Measurement ID:** `G-ET0Y55X1RC`
- **Stream ID:** `13582249380` (for reference; e.g. Measurement Protocol or connected site tags)

To verify data: GA4 **Reports > Real-time** while visiting the live site (allow 24–48 hours for the stream overview to update). Tag settings (internal traffic, consent) can be configured in GA4 for this stream.

## Project structure

- `src/app/` — App Router: layout (Navbar + Footer), home, about, for-cpas, services, services/[slug], case-studies, nevada-guide, resources, resources/[slug], contact, not-found
- `src/components/` — Navbar, Footer, CTA, StatBar, TestimonialCard, ForCPAsReferralForm, ContactPageForm
- `src/lib/` — services.ts (service data), case-studies.ts (case study data), resources.ts (resource articles)
- `public/` — Static assets: `logos/` (brand SVGs), `icons/` (favicon), `images/` (hero, UI, OG), `photos/` (team, property)

## License

Private. All rights reserved.
