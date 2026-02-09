"use client";

import Script from "next/script";
import { CALENDLY_URL } from "@/lib/site";

export function CalendlyBadge() {
  return (
    <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && "Calendly" in window) {
            (window as unknown as { Calendly: { initBadgeWidget: (opts: {
              url: string;
              text: string;
              color: string;
              textColor: string;
              branding: boolean;
            }) => void } }).Calendly.initBadgeWidget({
              url: CALENDLY_URL,
              text: "Schedule Consultation",
              color: "#C9A84C",
              textColor: "#0F1A2E",
              branding: true,
            });
          }
        }}
      />
  );
}
