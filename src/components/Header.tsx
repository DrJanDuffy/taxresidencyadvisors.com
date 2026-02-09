"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#introduction", label: "Introduction" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#clients", label: "Trusted By" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--background)]/90 backdrop-blur border-b border-white/5">
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/logo-light.svg"
          alt="KLB Consultants"
          className="h-8 w-auto"
          width={200}
          height={32}
        />
      </Link>
      <button
        type="button"
        aria-label="Toggle menu"
        className="md:hidden p-2"
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <nav
        className={`absolute md:static top-full left-0 right-0 bg-[var(--background)] md:bg-transparent border-b md:border-0 border-white/5 ${
          open ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 p-6 md:p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 md:py-0 text-[var(--muted)] hover:text-[var(--foreground)] transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="#contact"
        className="hidden md:inline-flex text-sm font-medium border border-[var(--accent)] px-4 py-2 rounded hover:bg-white/5 transition"
      >
        Schedule a Consultation
      </Link>
    </header>
  );
}
