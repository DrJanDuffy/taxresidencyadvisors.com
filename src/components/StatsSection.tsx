const STATS = [
  { value: "+20", label: "YEARS EXPERIENCE" },
  { value: "500+", label: "FAMILIES SERVED" },
  { value: "CA + NV", label: "MARKETS COVERED" },
  { value: "$2B+", label: "PORTFOLIO VALUE ADVISED" },
];

const TEAM = [
  {
    name: "Kelly Lynn Boyle",
    role: "President, CA Licensed Broker",
    bio: "Family office consulting, institutional RE investment.",
  },
  {
    name: "Dr. Gene Boyle",
    role: "Managing Director, RE Investment Strategy",
    bio: "CA-based. Multi-state tax residency planning and real estate strategy.",
  },
  {
    name: "Dr. Jan Duffy",
    role: "Nevada Market Expert, BHHS Nevada Properties",
    bio: "Referral partner for NV transactions. Nevada Licensed Agent (S.0197614.LLC), 30+ years, $127M+ career sales.",
  },
];

export function StatsSection() {
  return (
    <section id="about" className="px-6 py-24 border-t border-white/5">
      <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-12">
        About Us
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
              {value}
            </div>
            <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-[var(--muted)]">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-16 max-w-3xl text-[var(--muted)] leading-relaxed">
        KLB Consultants brings together tax strategy, real estate expertise, and
        institutional advisory under one roof. Founded in 2005, we serve family
        offices, high-net-worth individuals, and institutional investors
        navigating the intersection of tax residency and real estate investment
        across California and Nevada.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {TEAM.map((member) => (
          <article
            key={member.name}
            className="border border-white/10 rounded-lg p-6 hover:border-[var(--accent)]/20 transition"
          >
            <h3 className="text-lg font-semibold font-playfair text-[var(--foreground)]">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--accent)]">{member.role}</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
