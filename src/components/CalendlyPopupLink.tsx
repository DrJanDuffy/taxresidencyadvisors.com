"use client";

import { CALENDLY_URL } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

type CalendlyPopupLinkProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as "a" (default) or "button". */
  as?: "a" | "button";
};

export function CalendlyPopupLink({
  children,
  className = "",
  as = "a",
}: CalendlyPopupLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  const commonProps = { className, onClick: handleClick };

  if (as === "button") {
    return (
      <button type="button" {...commonProps}>
        {children}
      </button>
    );
  }

  return (
    <a href={CALENDLY_URL} {...commonProps}>
      {children}
    </a>
  );
}
