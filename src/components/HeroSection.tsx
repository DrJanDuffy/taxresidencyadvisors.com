import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          Together
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--accent)] mt-2">
          Let&apos;s Reach your goals!
        </h2>
        <p className="mt-8 text-lg md:text-xl text-[var(--muted)] max-w-xl">
          Quanta autem vis amicitiae sit, ex hoc intellegi maxime
        </p>
        <Link
          href="#services"
          className="inline-flex items-center gap-2 mt-12 text-[var(--muted)] hover:text-[var(--foreground)] transition"
        >
          <span>Scroll for more</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
