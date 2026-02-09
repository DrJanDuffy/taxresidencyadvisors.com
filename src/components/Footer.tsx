import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F1A2E] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Dr. Jan Duffy */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Dr. Jan Duffy
            </h4>
            <p className="mt-3 text-sm text-[var(--foreground)]">
              Las Vegas Real Estate Expert
            </p>
            <p className="text-sm text-[var(--foreground)]">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">NV License: S.0197614.LLC</p>
            <a href="tel:+17022221964" className="mt-2 block text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
              702-222-1964
            </a>
            <a
              href="mailto:info@taxresidencyadvisors.com"
              className="block text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              info@taxresidencyadvisors.com
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  For CPAs & Advisors
                </Link>
              </li>
              <li>
                <Link href="/nevada-guide" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Nevada Relocation Guide
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Markets We Serve */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Markets We Serve
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]">
              <li>Summerlin West & The Ridges</li>
              <li>Henderson & Green Valley</li>
              <li>55+ Communities</li>
              <li>Luxury Strip High-Rises</li>
              <li>New Construction</li>
              <li>Skye Canyon & Centennial Hills</li>
            </ul>
          </div>

          {/* Column 4 — For Professionals */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              For Professionals
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  CPA Referral Program
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Tax Preparer Resources
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Financial Advisor Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Schedule a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-[var(--muted)] sm:flex-row">
          <span>
            © 2026 KLB Consultants | Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties
          </span>
          <span className="hidden sm:inline">|</span>
          <span>Equal Housing Opportunity</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--accent)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
