"use client";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-white/5">
      <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-2">
        Get in touch
      </h2>
      <p className="text-[var(--muted)] max-w-xl mb-8">
        Ready to optimize your tax residency strategy? Tell us about your
        situation and we&apos;ll schedule a confidential consultation.
      </p>
      <form
        className="max-w-xl grid gap-6"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form"
      >
        <label htmlFor="contact-fullName" className="sr-only">
          Full Name
        </label>
        <input
          id="contact-fullName"
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <label htmlFor="contact-company" className="sr-only">
          Company name
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          placeholder="Company name"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <label htmlFor="contact-phone" className="sr-only">
          Phone number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder="Phone number"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] resize-none"
        />
        <button
          type="submit"
          className="w-fit bg-[var(--accent)] text-[var(--background)] font-semibold px-8 py-3 rounded hover:opacity-90 transition"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
