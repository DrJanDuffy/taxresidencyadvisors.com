import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="introduction"
      className="hero-gradient-mesh min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative"
    >
      <div className="max-w-4xl relative z-10">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-[var(--foreground)]">
          Strategic Tax Residency Planning for High-Net-Worth Families
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
          Navigate multi-state tax optimization and real estate investment
          strategy with institutional-grade advisory since 2005.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--accent)] text-[var(--background)] font-semibold px-6 py-3 rounded hover:opacity-90 transition"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center border border-[var(--accent)] text-[var(--foreground)] font-medium px-6 py-3 rounded hover:bg-white/5 transition"
          >
            Our Services
          </Link>
        </div>
        <p className="mt-16 text-sm text-[var(--muted)] uppercase tracking-widest">
          California | Nevada | Family Offices | Since 2005
        </p>
      </div>
    </section>
  );
}
