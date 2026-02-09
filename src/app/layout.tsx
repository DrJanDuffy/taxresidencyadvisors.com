import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B-One Consulting",
  description:
    "360º Services: Audit & Consulting, Digital Solution, Data Solution, Marketing & Branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
