import Link from "next/link";

type CTAVariant = "primary" | "secondary" | "ghost";

type CTAProps = {
  variant: CTAVariant;
  href: string;
  children: React.ReactNode;
  className?: string;
  /** When true, opens in new tab with noopener noreferrer (e.g. Calendly). */
  external?: boolean;
};

const baseClasses =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const variantClasses: Record<CTAVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[#0F1A2E] hover:opacity-90 px-5 py-2.5",
  secondary:
    "border-2 border-white/30 text-[var(--foreground)] hover:bg-white/5 px-5 py-2.5",
  ghost:
    "text-[var(--accent)] hover:text-[var(--foreground)] px-0 py-2",
};

export function CTA({ variant, href, children, className = "", external }: CTAProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {variant === "ghost" && <span aria-hidden>→</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {variant === "ghost" && (
        <span aria-hidden>→</span>
      )}
    </Link>
  );
}
