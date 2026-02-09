"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Tax Residency Planning",
    description:
      "Establish tax-advantaged residency in Nevada. Comprehensive domicile strategy, documentation, and compliance guidance for individuals and trusts relocating from high-tax states.",
  },
  {
    num: "02",
    title: "Multi-State Advisory",
    description:
      "Navigate complex CA/NV tax implications for real estate holdings, business entities, and investment portfolios across state lines. Minimize exposure, maximize strategy.",
  },
  {
    num: "03",
    title: "Family Office RE Consulting",
    description:
      "Institutional-grade real estate investment strategy for family offices. Multifamily, P3 partnerships, and portfolio optimization across Western US markets.",
  },
  {
    num: "04",
    title: "CA-to-NV Relocation",
    description:
      "Leverage California equity for strategic Nevada acquisitions. Builder relationships, new construction access, luxury market expertise from $300K to $10M+.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 border-t border-white/5">
      <h2 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-12">
        Our Services
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-16 md:grid-cols-2"
      >
        {SERVICES.map(({ num, title, description }) => (
          <motion.div
            key={num}
            variants={item}
            className="group border border-white/10 rounded-lg p-8 hover:border-[var(--accent)]/30 transition"
          >
            <span className="text-4xl md:text-5xl font-bold text-[var(--accent)]/80">
              {num}
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold font-playfair">
              {title}
            </h3>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
