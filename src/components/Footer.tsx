import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-5xl">
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Contact
          </h4>
          <a
            href="mailto:info@taxresidencyadvisors.com"
            className="block text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            info@taxresidencyadvisors.com
          </a>
          <a
            href="tel:+17022221964"
            className="block text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            702-222-1964
          </a>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Offices
          </h4>
          <p className="text-[var(--foreground)]">
            Las Vegas, Nevada
            <br />
            Southern California
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Hours
          </h4>
          <p className="text-[var(--foreground)]">
            Monday to Friday
            <br />
            9am to 6pm PST
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Connect
          </h4>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
