"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/site";

type CalendlyInlineWidgetProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function CalendlyInlineWidget({ className, style }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      if (!containerRef.current || !window.Calendly) return;
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
        prefill: {},
        utm: {},
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    const interval = setInterval(() => {
      if (window.Calendly) {
        clearInterval(interval);
        init();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: 320, height: 700, ...style }}
    />
  );
}
