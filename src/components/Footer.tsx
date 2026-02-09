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
            href="tel:+626786909"
            className="block text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            +62 6786909
          </a>
          <a
            href="mailto:contact@b1-consulting.com"
            className="block text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            contact@b1-consulting.com
          </a>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Address
          </h4>
          <p className="text-[var(--foreground)]">
            78 Jalan hcosiah azpojpoz
            <br />
            iàdzi, Bali
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Open Hours
          </h4>
          <p className="text-[var(--foreground)]">
            Monday to friday
            <br />
            9am to 6pm
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Freelances & Applicants
          </h4>
          <p className="text-[var(--foreground)] mb-2">
            Collaborate with us
          </p>
          <a
            href="mailto:hello@b1-consulting.com"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            hello@b1-consulting.com
          </a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-[var(--muted)]">Connect</span>
        <div className="flex gap-6">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)]"
          >
            Fb
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)]"
          >
            Ig
          </Link>
        </div>
      </div>
    </footer>
  );
}
