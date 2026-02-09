const SERVICES = [
  { num: "01", title: "Audit & Consulting Services" },
  { num: "02", title: "Digital Solution" },
  { num: "03", title: "Data Solution" },
  { num: "04", title: "Marketing & Branding" },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 border-t border-white/5">
      <h2 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-12">
        360º Services
      </h2>
      <div className="grid gap-16 md:grid-cols-2">
        {SERVICES.map(({ num, title }) => (
          <div
            key={num}
            className="group border border-white/10 rounded-lg p-8 hover:border-[var(--accent)]/30 transition"
          >
            <span className="text-4xl md:text-5xl font-bold text-[var(--accent)]/80">
              {num}
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
