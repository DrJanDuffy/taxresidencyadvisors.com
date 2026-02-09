import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KLB Consultants | Tax Residency Advisors",
  description:
    "Expert tax residency planning and real estate investment consulting for family offices. CA-to-NV relocation strategy, multi-state advisory, institutional RE consulting.",
  keywords:
    "tax residency planning, Nevada tax residency, California to Nevada relocation, family office real estate, multi-state tax advisory, Las Vegas real estate consulting",
  openGraph: {
    title: "KLB Consultants | Tax Residency Advisors",
    description:
      "Strategic tax residency planning for high-net-worth families since 2005.",
    url: SITE_URL,
    siteName: "KLB Consultants",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KLB Consultants",
  description:
    "Tax residency planning and real estate investment consulting",
  url: SITE_URL,
  telephone: "+1-702-222-1964",
  areaServed: ["California", "Nevada"],
  foundingDate: "2005-01",
  serviceType: [
    "Tax Residency Planning",
    "Real Estate Investment Consulting",
    "Family Office Advisory",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ET0Y55X1RC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ET0Y55X1RC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
