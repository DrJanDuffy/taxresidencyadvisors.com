"use client";

import { motion } from "framer-motion";

const CASE_STUDIES = [
  {
    title: "California Executive Relocates to Nevada",
    outcomes: [
      "Saved $180K+ annually in state income tax",
      "Established proper NV domicile documentation",
      "Acquired luxury Summerlin home at 40% less than comparable CA property",
    ],
  },
  {
    title: "Family Office Portfolio Optimization",
    outcomes: [
      "Restructured multi-state RE holdings across CA and NV",
      "Reduced tax exposure by 22% through entity restructuring",
      "Ongoing advisory for $45M+ portfolio",
    ],
  },
  {
    title: "Tech Founder Early Retirement Strategy",
    outcomes: [
      "Pre-liquidity event residency planning",
      "NV trust establishment for capital gains optimization",
      "Custom new construction home in guard-gated community",
    ],
  },
  {
    title: "Multi-Generational Wealth Transition",
    outcomes: [
      "55+ community placement for retiring parents (Sun City/Del Webb)",
      "NV dynasty trust for next-generation wealth transfer",
      "Coordinated CA property disposition and NV acquisition",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-6 py-24 border-t border-white/5">
      <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
        Case Studies
      </h2>
      <p className="text-[var(--muted)] max-w-2xl mb-12">
        How we help high-net-worth families and family offices achieve
        tax-advantaged outcomes.
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-8 md:grid-cols-2"
      >
        {CASE_STUDIES.map((study, index) => (
          <motion.article
            key={study.title}
            variants={item}
            className="border border-white/10 rounded-lg p-6 hover:border-[var(--accent)]/20 transition"
          >
            <h3 className="text-xl font-semibold font-playfair text-[var(--accent)]">
              Case Study {index + 1}
            </h3>
            <h4 className="mt-2 text-lg font-medium">{study.title}</h4>
            <ul className="mt-4 space-y-2 text-[var(--muted)] text-sm leading-relaxed list-disc list-inside">
              {study.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
