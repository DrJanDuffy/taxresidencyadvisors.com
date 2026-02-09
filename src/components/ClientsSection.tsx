const AFFILIATIONS = [
  "Berkshire Hathaway HomeServices",
  "Nevada Association of Realtors",
  "California Association of Realtors",
  "Family Office Networks",
  "National Association of Realtors",
];

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-24 border-t border-white/5">
      <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
        Trusted By
      </h2>
      <p className="text-[var(--muted)] max-w-xl mb-16">
        Our affiliations and partnerships reflect our commitment to
        professional standards and client success in tax residency and real
        estate advisory.
      </p>
      <div className="flex flex-wrap gap-6 md:gap-10 items-center">
        {AFFILIATIONS.map((name) => (
          <div
            key={name}
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-[var(--muted)] min-w-[180px]"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
