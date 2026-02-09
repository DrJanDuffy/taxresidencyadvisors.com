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

## Project structure

- `src/app/` — App Router: layout (Navbar + Footer), home, about, for-cpas, services, services/[slug], case-studies, nevada-guide, contact, not-found
- `src/components/` — Navbar, Footer, CTA, StatBar, TestimonialCard, ForCPAsReferralForm, ContactPageForm
- `src/lib/` — services.ts (service data), case-studies.ts (case study data)
- `public/` — Logo, favicon, static assets

## License

Private. All rights reserved.
