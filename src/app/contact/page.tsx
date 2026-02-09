import type { Metadata } from "next";
import { ContactPageForm } from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact | Schedule a Consultation | Dr. Jan Duffy",
  description:
    "Schedule a consultation with Dr. Jan Duffy. CPAs and tax professionals: refer a client. Clients relocating to Nevada: request a consultation. 702-222-1964.",
  openGraph: {
    title: "Contact | KLB Consultants",
    url: "https://taxresidencyadvisors.com/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KLB Consultants | Dr. Jan Duffy",
  description: "Tax residency planning and Las Vegas real estate. Berkshire Hathaway HomeServices Nevada Properties.",
  telephone: "+1-702-222-1964",
  email: "info@taxresidencyadvisors.com",
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV" },
  areaServed: ["Las Vegas", "Henderson", "Summerlin"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-702-222-1964",
    email: "info@taxresidencyadvisors.com",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      <section className="hero-gradient-mesh px-4 pt-16 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Contact</h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Schedule a consultation or refer a client. We&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <ContactPageForm />
          </div>
          <aside className="mt-12 lg:mt-0">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-playfair text-lg font-semibold text-[var(--foreground)]">Dr. Jan Duffy</h2>
              <p className="mt-1 text-sm text-[var(--accent)]">Las Vegas Real Estate Expert</p>
              <p className="mt-4 text-sm text-[var(--foreground)]">Berkshire Hathaway HomeServices Nevada Properties</p>
              <p className="text-sm text-[var(--muted)]">NV License: S.0197614.LLC</p>
              <a href="tel:+17022221964" className="mt-4 block text-[var(--foreground)] hover:text-[var(--accent)]">📞 702-222-1964</a>
              <a href="mailto:info@taxresidencyadvisors.com" className="block text-[var(--foreground)] hover:text-[var(--accent)]">📧 info@taxresidencyadvisors.com</a>
              <p className="mt-6 text-sm text-[var(--muted)]">Office: Las Vegas, Nevada</p>
              <p className="text-sm text-[var(--muted)]">Serving: All of Las Vegas, Henderson, Summerlin, and surrounding areas</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
