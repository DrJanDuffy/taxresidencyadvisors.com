"use client";

import { useState } from "react";
import { ForCPAsReferralForm } from "./ForCPAsReferralForm";

const TIMELINE_OPTIONS = ["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Not Sure"];
const BUDGET_OPTIONS = ["$300K-$500K", "$500K-$800K", "$800K-$1.5M", "$1.5M-$3M", "$3M+", "Not Sure"];
const PROPERTY_TYPES = ["Single family", "55+ community", "Luxury/custom", "New construction", "High-rise condo", "Investment property"];

export function ContactPageForm() {
  const [activeTab, setActiveTab] = useState<"cpa" | "client">("client");

  return (
    <div className="space-y-8">
      <div className="flex gap-2 border-b border-white/10">
        <button
          type="button"
          onClick={() => setActiveTab("cpa")}
          className={`min-h-[48px] border-b-2 px-4 font-medium transition ${
            activeTab === "cpa"
              ? "border-[var(--accent)] text-[var(--accent)]"
              : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          I&apos;m a CPA / Tax Professional
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("client")}
          className={`min-h-[48px] border-b-2 px-4 font-medium transition ${
            activeTab === "client"
              ? "border-[var(--accent)] text-[var(--accent)]"
              : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          I&apos;m Relocating to Nevada
        </button>
      </div>

      {activeTab === "cpa" && (
        <ForCPAsReferralForm />
      )}

      {activeTab === "client" && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-xl space-y-6"
          aria-label="Client consultation form"
        >
          <div>
            <label htmlFor="client-name" className="block text-sm font-medium text-[var(--foreground)]">Full Name</label>
            <input id="client-name" name="fullName" type="text" required className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="client-email" className="block text-sm font-medium text-[var(--foreground)]">Email</label>
            <input id="client-email" name="email" type="email" required className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="client-phone" className="block text-sm font-medium text-[var(--foreground)]">Phone</label>
            <input id="client-phone" name="phone" type="tel" className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" placeholder="(702) 555-0123" />
          </div>
          <div>
            <label htmlFor="client-city" className="block text-sm font-medium text-[var(--foreground)]">Current City / State</label>
            <input id="client-city" name="currentCity" type="text" className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" placeholder="e.g. San Jose, CA" />
          </div>
          <div>
            <label htmlFor="client-timeline" className="block text-sm font-medium text-[var(--foreground)]">Relocation Timeline</label>
            <select id="client-timeline" name="timeline" className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none">
              {TIMELINE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="client-budget" className="block text-sm font-medium text-[var(--foreground)]">Budget Range</label>
            <select id="client-budget" name="budget" className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none">
              {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <span className="block text-sm font-medium text-[var(--foreground)]">What type of property?</span>
            <div className="mt-2 flex flex-wrap gap-4">
              {PROPERTY_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                  <input type="checkbox" name="propertyType" value={type} className="rounded border-white/20" />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="client-referred" className="block text-sm font-medium text-[var(--foreground)]">Were you referred by a CPA or financial advisor?</label>
            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2 text-sm"><input type="radio" name="referred" value="yes" /> Yes</label>
              <label className="flex items-center gap-2 text-sm"><input type="radio" name="referred" value="no" /> No</label>
            </div>
            <input id="client-referred-name" name="referrerName" type="text" placeholder="If yes, their name" className="mt-2 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="client-message" className="block text-sm font-medium text-[var(--foreground)]">Message / Questions</label>
            <textarea id="client-message" name="message" rows={4} className="mt-1 w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none resize-none" placeholder="Tell us about your situation" />
          </div>
          <button type="submit" className="min-h-[48px] w-full rounded bg-[var(--accent)] px-6 py-3 font-semibold text-[#0F1A2E] hover:opacity-90">Request a Consultation</button>
        </form>
      )}
    </div>
  );
}
