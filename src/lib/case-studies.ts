export type CaseStudy = {
  id: string;
  title: string;
  situation: string;
  challenge: string;
  solution: string;
  result: string;
  cpaAngle: string;
  serviceSlug?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "california-executive",
    title: "California Executive Relocates to Nevada",
    situation: "A C-suite executive in Los Angeles decided to establish Nevada residency before a planned retirement. His CPA had advised a clear domicile change with documentation to support it.",
    challenge: "He needed to close on a Nevada primary residence within the tax year, establish a paper trail for domicile, and avoid the common mistakes that trigger FTB scrutiny.",
    solution: "We identified a luxury Summerlin home that fit his lifestyle and budget, coordinated the closing timeline with his CPA's filing strategy, and ensured every document — from voter registration to utility bills — supported the residency narrative.",
    result: "Saved $180K+ annually in state income tax. Established proper NV domicile documentation. Acquired a luxury Summerlin home at roughly 40% less than a comparable CA property.",
    cpaAngle: "The client's CPA referred them because they needed an agent who understood the tax-year deadline and domicile requirements — not just a house, but evidence.",
    serviceSlug: "tax-residency-planning",
  },
  {
    id: "family-office",
    title: "Family Office Portfolio Optimization",
    situation: "A family office held significant real estate across California and Nevada. The next generation was relocating to Nevada; the family wanted to restructure holdings for tax efficiency.",
    challenge: "Multi-state entity structuring, coordinated dispositions and acquisitions, and alignment with the family's long-term wealth transfer plan.",
    solution: "KLB Consultants (Kelly Lynn Boyle and Dr. Gene Boyle) led the advisory; I executed the Nevada acquisitions and coordinated with California agents for dispositions. We restructured entities and timing to reduce overall tax exposure.",
    result: "Restructured multi-state RE holdings across CA and NV. Reduced tax exposure by 22% through entity restructuring. Ongoing advisory for a $45M+ portfolio.",
    cpaAngle: "The family's tax and legal team referred the family office to us for integrated real estate and tax strategy — one team that could execute on both sides of the state line.",
    serviceSlug: "family-office-consulting",
  },
  {
    id: "tech-founder",
    title: "Tech Founder Early Retirement Strategy",
    situation: "A tech founder was planning an early retirement and potential liquidity event. His advisors recommended establishing Nevada residency well in advance.",
    challenge: "Pre-liquidity residency planning, NV trust establishment for capital gains optimization, and finding a home that matched his lifestyle in a guard-gated community.",
    solution: "We worked backward from his target residency date, established an NV trust structure with his estate attorney, and found a custom new construction home in a guard-gated Summerlin community. Closing was timed to support his first full tax year as a Nevada resident.",
    result: "Pre-liquidity event residency planning completed. NV trust established for capital gains optimization. Custom new construction home in guard-gated community.",
    cpaAngle: "The client's CPA and financial advisor referred him to ensure the real estate piece supported the broader tax and wealth plan — not just a house, but a residency story.",
    serviceSlug: "ca-to-nv-relocation",
  },
  {
    id: "multi-gen",
    title: "Multi-Generational Wealth Transition",
    situation: "A family was managing a multi-generational transition: retiring parents wanted to downsize into a 55+ community, while the next generation needed Nevada residency and dynasty trust planning.",
    challenge: "Placement in the right 55+ community (Sun City/Del Webb), NV dynasty trust for the next generation, and coordinated CA property disposition with NV acquisition.",
    solution: "I placed the parents in a 55+ community that matched their lifestyle and budget; we coordinated with the family's estate attorney on the NV dynasty trust. The adult children acquired Nevada properties; we partnered with a CA agent to handle the parents' California disposition.",
    result: "55+ community placement for retiring parents (Sun City/Del Webb). NV dynasty trust for next-generation wealth transfer. Coordinated CA property disposition and NV acquisition.",
    cpaAngle: "The family's CPA and estate attorney referred the family to ensure real estate decisions aligned with the trust and tax strategy — one coordinated move across two generations.",
    serviceSlug: "tax-residency-planning",
  },
];
