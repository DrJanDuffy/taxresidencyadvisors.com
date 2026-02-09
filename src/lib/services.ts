export type Service = {
  slug: string;
  num: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  whoIsFor: string[];
  relatedCaseStudy?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "tax-residency-planning",
    num: "01",
    title: "Tax Residency Planning",
    shortDescription: "Establish tax-advantaged residency in Nevada. Domicile strategy, documentation, and compliance for individuals and trusts relocating from high-tax states.",
    longDescription: [
      "Establishing proper Nevada domicile is the foundation of a defensible tax-residency change. I work with your CPA and your client to ensure the home purchase supports their residency claim — from neighborhood selection to closing timelines aligned to the tax year.",
      "Nevada has no state income tax, no inheritance tax, and no estate tax. The California Franchise Tax Board actively audits residency changes. Your home purchase is evidence item number one. I make sure the transaction is documentation-ready and timeline-ready.",
      "Whether you're a high-net-worth individual leaving California, a pre-IPO founder planning ahead, a retiring executive, or a trust beneficiary — the domicile strategy has to be bulletproof. I've closed 500+ families through this process.",
    ],
    whoIsFor: [
      "High-net-worth individuals leaving California or other high-tax states",
      "Pre-IPO founders planning residency before liquidity events",
      "Retiring executives establishing a lower-tax base",
      "Trust beneficiaries relocating for tax efficiency",
    ],
    relatedCaseStudy: "California Executive Relocates to Nevada",
  },
  {
    slug: "multi-state-advisory",
    num: "02",
    title: "Multi-State Advisory",
    shortDescription: "Navigate CA/NV tax implications for real estate holdings, entities, and portfolios across state lines. Minimize exposure, maximize strategy.",
    longDescription: [
      "Managing real estate holdings across California and Nevada isn't just about buying a house — it's about entity structuring, coordinated buy/sell timing, and making sure every move supports the overall tax and wealth strategy.",
      "I work with investors who hold property in both states, family offices with Western US portfolios, and business owners with multi-state operations. The goal is to minimize tax exposure and maximize flexibility without leaving value on the table.",
      "KLB Consultants brings institutional-grade advisory to the table. Kelly Lynn Boyle (CA Licensed Broker) and Dr. Gene Boyle (Managing Director) support complex multi-state transactions so your client gets one coordinated team.",
    ],
    whoIsFor: [
      "Investors with properties in both California and Nevada",
      "Family offices with Western US real estate portfolios",
      "Business owners with multi-state operations",
    ],
    relatedCaseStudy: "Family Office Portfolio Optimization",
  },
  {
    slug: "family-office-consulting",
    num: "03",
    title: "Family Office RE Consulting",
    shortDescription: "Institutional-grade real estate investment strategy for family offices. Multifamily, P3 partnerships, portfolio optimization across Western US markets.",
    longDescription: [
      "Family offices need a different playbook than individual buyers. Multifamily acquisition, P3 partnerships, portfolio-level strategy — that's where KLB Consultants steps in with institutional-grade advisory.",
      "Kelly Lynn Boyle (President, CA Licensed Broker) and Dr. Gene Boyle (Managing Director) lead this work. I'm the Nevada on-the-ground expert for execution: market access, builder relationships, and deal flow that supports the overall portfolio strategy.",
      "We serve single-family offices, multi-family offices, institutional investors, and PE-backed real estate funds. If the mandate includes Western US markets and tax-efficient structures, we've got the team.",
    ],
    whoIsFor: [
      "Single-family offices",
      "Multi-family offices",
      "Institutional investors",
      "PE-backed real estate funds",
    ],
    relatedCaseStudy: "Family Office Portfolio Optimization",
  },
  {
    slug: "ca-to-nv-relocation",
    num: "04",
    title: "CA-to-NV Relocation",
    shortDescription: "The nuts and bolts of moving from California to Nevada. Neighborhood matching, builder incentives, new construction, 55+ communities, luxury options.",
    longDescription: [
      "Moving from California to Nevada is a lifestyle decision as much as a tax one. I match your client to the right community: Summerlin West luxury from $800K, new construction from $300K, 55+ communities from $350K. Every neighborhood has different tradeoffs — schools, commute, amenities, resale.",
      "I have builder relationships with Century Communities, KB Home, Lennar, Pulte, and Toll Brothers. That means access to new construction inventory, incentive programs, and priority lists. Average California equity converts to significantly more home in Nevada — I show the numbers.",
      "Whether it's a family with kids, retirees eyeing Sun City or Del Webb, remote workers wanting space, or a luxury buyer looking at The Ridges — I've done it 500+ times. Let me help you.",
    ],
    whoIsFor: [
      "Families relocating for tax and lifestyle",
      "Retirees (55+ communities)",
      "Remote workers",
      "Anyone making the physical move from CA to NV",
    ],
    relatedCaseStudy: "Tech Founder Early Retirement Strategy",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
