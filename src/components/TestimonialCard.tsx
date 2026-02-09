"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  attribution: string;
  className?: string;
};

export function TestimonialCard({ quote, attribution, className = "" }: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border border-white/10 bg-white/5 p-6 ${className}`}
    >
      <p className="text-[var(--foreground)] leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 text-sm text-[var(--muted)]">{attribution}</footer>
    </motion.blockquote>
  );
}
