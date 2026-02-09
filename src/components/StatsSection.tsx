const STATS = [
  { value: "+10", label: "YEARS" },
  { value: "+1000", label: "PROJECTS" },
  { value: "4", label: "CONTENT" },
  { value: "100%", label: "SATISFIED COSTUMERS" },
];

export function StatsSection() {
  return (
    <section id="about" className="px-6 py-24 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div className="text-4xl md:text-5xl font-bold text-[var(--accent)]">
              {value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-[var(--muted)]">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-16 max-w-2xl text-[var(--muted)] leading-relaxed">
        We are a team made up of people from different backgrounds and we are
        passionate about what we do. Our strength lies in the diversity of each
        person&apos;s background. We are constantly adapting to new trends and
        the needs of our customers.
      </p>
      <p className="mt-6 max-w-2xl text-[var(--muted)] leading-relaxed">
        Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes
        eius, a quo dissentias. quid enim me prohiberet aojaoca^ Epicureum
      </p>
    </section>
  );
}
