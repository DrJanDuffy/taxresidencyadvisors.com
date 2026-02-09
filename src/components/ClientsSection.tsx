export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-24 border-t border-white/5">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Clients & Partners
      </h2>
      <p className="text-[var(--muted)] max-w-xl mb-16">
        The customer remains at the center of our concerns, becoming an actor of
        his success is our goal.
      </p>
      <div className="mb-12">
        <h3 className="text-sm uppercase tracking-widest text-[var(--accent)] mb-6">
          ● Clients
        </h3>
        <div className="flex flex-wrap gap-8 items-center">
          {[
            "Air France",
            "Total Energies",
            "AS24",
            "LCL",
            "Mastercard",
            "Kesato",
            "Imani",
            "Aldiwan",
            "Cafe Organic",
          ].map((name) => (
            <div
              key={name}
              className="w-24 h-12 rounded bg-white/5 flex items-center justify-center text-xs text-[var(--muted)]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-widest text-[var(--accent)] mb-6">
          ● Partners
        </h3>
        <div className="flex flex-wrap gap-8 items-center">
          {[
            "Facebook",
            "Figma",
            "G Suite",
            "Google",
            "Miro",
            "Roadmunk",
          ].map((name) => (
            <div
              key={name}
              className="w-24 h-12 rounded bg-white/5 flex items-center justify-center text-xs text-[var(--muted)]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
