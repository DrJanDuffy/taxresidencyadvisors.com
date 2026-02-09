"use client";

import { motion } from "framer-motion";

export type StatItem = {
  value: string;
  label: string;
};

type StatBarProps = {
  stats: StatItem[];
  className?: string;
};

export function StatBar({ stats, className = "" }: StatBarProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3 }}
      className={`border-y border-white/10 py-6 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
          {stats.map(({ value, label }, i) => (
            <div key={label}>
              <span className="block font-playfair text-2xl font-bold text-[var(--accent)] sm:text-3xl">
                {value}
              </span>
              <span className="block text-xs uppercase tracking-widest text-[var(--muted)] sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
