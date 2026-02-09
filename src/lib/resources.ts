export type ResourceSection = {
  heading: string;
  body: string;
};

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  sections: ResourceSection[];
};

export const RESOURCES: ResourceArticle[] = [
  {
    slug: "nevada-domicile-checklist-for-cpas",
    title: "Nevada Domicile Checklist for CPAs",
    description:
      "What CPAs should verify when a client establishes Nevada residency: documentation, timeline, and how the real estate purchase supports a defensible domicile claim.",
    datePublished: "2026-02-01",
    dateModified: "2026-02-09",
    sections: [
      {
        heading: "What should CPAs verify when a client establishes Nevada residency?",
        body: "Verify intent and documentation: the client should treat Nevada as their true home (primary residence), not a second home. Key items include Nevada driver's license or ID, Nevada voter registration, a Nevada primary residence (deed, mortgage, or lease), utility bills and bank statements showing a Nevada address, and a consistent timeline that aligns with the tax filing strategy. The California Franchise Tax Board looks for a clear, documented break from California and a genuine shift of life to Nevada.",
      },
      {
        heading: "What documentation supports a Nevada domicile claim?",
        body: "Strong evidence includes: Nevada driver's license (or state ID), Nevada voter registration, deed or lease showing Nevada as primary residence, utility bills (electric, gas, water) at the Nevada address, bank and financial statements with Nevada address, medical and professional services in Nevada, and a timeline that shows the client physically moved and cut California ties. The real estate purchase is often the centerpiece — a family-sized primary residence is easier to defend than a small condo that looks like a vacation property.",
      },
      {
        heading: "How does the real estate purchase fit into the domicile timeline?",
        body: "The Nevada home purchase is usually the first major step. Closing date should align with when the client intends to establish residency (e.g. before December 31 for that tax year). I work with CPAs and clients to ensure the search, contract, and closing support the timeline — and that the property type and use (primary residence) are consistent with the domicile story. Coordinating with a real estate expert who understands tax-year deadlines and FTB scrutiny makes the whole process defensible.",
      },
    ],
  },
  {
    slug: "year-end-relocation-timeline",
    title: "Year-End Relocation Timeline: When to Start for a December 31 Close",
    description:
      "Timeline and key milestones for closing a Nevada relocation by December 31: when to start, search-to-close steps, and what to do if the deadline is at risk.",
    datePublished: "2026-02-01",
    dateModified: "2026-02-09",
    sections: [
      {
        heading: "When should my client start looking to close by December 31?",
        body: "Ideally 60–90 days before the target close date. That allows time for property search, negotiation, inspection, lender and title work, and any contingencies. Starting in October gives a comfortable buffer; starting in November is workable but tighter. Last-minute rushes happen, but they're riskier and can limit options. I recommend CPA-referred clients begin the conversation by early fall if year-end is the goal.",
      },
      {
        heading: "What are the key milestones (search, contract, inspection, closing)?",
        body: "Typical sequence: (1) Initial call and needs assessment — 1–2 days. (2) Property search and showings — 1–3 weeks depending on market and criteria. (3) Offer, negotiation, and executed contract — a few days to a week. (4) Inspection and any repairs or credits — about 1–2 weeks. (5) Lender underwriting and appraisal — 2–4 weeks. (6) Title and closing — final 1–2 weeks. Total from contract to closing is often 30–45 days; the search phase is the variable. I build in backup options so if one deal falls through, we have a path to still close on time.",
      },
      {
        heading: "What if we miss the deadline?",
        body: "If closing slips past December 31, the client's residency timeline shifts to the new tax year. That may still be acceptable depending on the overall strategy — the CPA can advise on filing and estimated payments. To minimize the risk of missing the deadline, we lock in a clear timeline at the start, stay in close contact with the lender and title company, and have backup properties in mind. For CPA-referred clients I've never missed a year-end close when we had a realistic start date; communication and preparation are the keys.",
      },
    ],
  },
];

export function getAllResourceSlugs(): string[] {
  return RESOURCES.map((r) => r.slug);
}

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
