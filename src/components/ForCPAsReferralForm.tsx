"use client";

import { useRef } from "react";

const TIMELINE_OPTIONS = ["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Not Sure"];
const BUDGET_OPTIONS = ["$300K-$500K", "$500K-$800K", "$800K-$1.5M", "$1.5M-$3M", "$3M+", "Not Sure"];
const HEAR_OPTIONS = ["Colleague referral", "Google search", "LinkedIn", "Conference/event", "Other"];

export function ForCPAsReferralForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      id="referral-form"
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto max-w-xl space-y-6"
      aria-label="CPA referral form"
    >
      <div>
        <label htmlFor="cpa-name" className="block text-sm font-medium text-[var(--foreground)]">
          Your Name (CPA/Advisor)
        </label>
        <input
          id="cpa-name"
          name="cpaName"
          type="text"
          required
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="firm-name" className="block text-sm font-medium text-[var(--foreground)]">
          Your Firm Name
        </label>
        <input
          id="firm-name"
          name="firmName"
          type="text"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          placeholder="Firm or practice name"
        />
      </div>
      <div>
        <label htmlFor="cpa-email" className="block text-sm font-medium text-[var(--foreground)]">
          Your Email
        </label>
        <input
          id="cpa-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          placeholder="you@firm.com"
        />
      </div>
      <div>
        <label htmlFor="cpa-phone" className="block text-sm font-medium text-[var(--foreground)]">
          Your Phone
        </label>
        <input
          id="cpa-phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          placeholder="(702) 555-0123"
        />
      </div>
      <div>
        <label htmlFor="client-name" className="block text-sm font-medium text-[var(--foreground)]">
          Client Name
        </label>
        <input
          id="client-name"
          name="clientName"
          type="text"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          placeholder="Or 'Prefer to introduce directly'"
        />
      </div>
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-[var(--foreground)]">
          Client&apos;s Relocation Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
        >
          {TIMELINE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-[var(--foreground)]">
          Client&apos;s Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="considerations" className="block text-sm font-medium text-[var(--foreground)]">
          Special Considerations
        </label>
        <textarea
          id="considerations"
          name="considerations"
          rows={4}
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none resize-none"
          placeholder="e.g. divorce situation, pre-IPO, 55+ community, new construction preference"
        />
      </div>
      <div>
        <label htmlFor="hear" className="block text-sm font-medium text-[var(--foreground)]">
          How did you hear about us?
        </label>
        <select
          id="hear"
          name="hear"
          className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
        >
          {HEAR_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="min-h-[48px] w-full rounded bg-[var(--accent)] px-6 py-3 font-semibold text-[#0F1A2E] hover:opacity-90"
      >
        Send Referral
      </button>
    </form>
  );
}
