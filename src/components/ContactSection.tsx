"use client";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-white/5">
      <h2 className="text-4xl md:text-6xl font-bold mb-2">Get in touch</h2>
      <p className="text-[var(--muted)] mb-2">tell us more</p>
      <p className="text-[var(--muted)] max-w-xl mb-12">
        for any enquiries, or just say hello, contact us through this form
      </p>
      <form
        className="max-w-xl grid gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <input
          type="text"
          name="company"
          placeholder="Company name"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="phone number"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
        />
        <textarea
          name="message"
          placeholder="message"
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
