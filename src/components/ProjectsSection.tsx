export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-white/5">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">Projects</h2>
      <p className="text-[var(--muted)] max-w-3xl text-lg leading-relaxed">
        Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes
        eius, a quo dissentias. quid enim me prohiberet aojaoca^ Epicureumon
        probes eius, a quo dissentias. quid enim me prohiberet aojaoca^
        Epicureumon probes eius, a quo dissentias. quid enim me prohiberet
        aojaoca^ Epicureum
      </p>
      <div className="mt-12 overflow-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap text-[var(--muted)] text-xl w-max">
          {[1, 2].map((copy) => (
            <span key={copy} className="flex gap-8">
              {["dubaï", "paris", "bali"].flatMap((city) =>
                Array(6)
                  .fill(city)
                  .map((c, i) => (
                    <span key={`${copy}-${c}-${i}`}>{c}</span>
                  ))
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
