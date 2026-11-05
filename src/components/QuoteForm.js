"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/site";

const field =
  "mt-1 w-full rounded-lg border border-brand/30 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    data.append("subject", "New quote request from the Beattys Catering website");
    data.append("from_name", "Beattys Catering Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-white p-8 text-center shadow-sm">
        <div className="text-4xl">✅</div>
        <h3 className="mt-3 text-2xl font-bold text-brand">Thank you!</h3>
        <p className="mt-2 text-ink/80">
          We have received your request and will get back to you shortly.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-cream transition hover:bg-brand-dark"
        >
          Need a faster reply? WhatsApp us
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 block w-full text-sm text-brand underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gold/30 bg-white p-6 shadow-sm md:p-8">
      {/* Spam trap: hidden from people, bots tick it */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          Full name *
          <input name="name" required className={field} autoComplete="name" />
        </label>
        <label className="block text-sm font-semibold">
          Phone number *
          <input name="phone" type="tel" required className={field} autoComplete="tel" />
        </label>
        <label className="block text-sm font-semibold">
          Email (optional)
          <input name="email" type="email" className={field} autoComplete="email" />
        </label>
        <label className="block text-sm font-semibold">
          Type of event *
          <select name="event_type" required defaultValue="" className={field}>
            <option value="" disabled>Select an event</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Event date
          <input name="event_date" type="date" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Number of guests
          <input name="guests" type="number" min="1" className={field} />
        </label>
        <label className="block text-sm font-semibold md:col-span-2">
          Event location (town / venue)
          <input name="location" className={field} />
        </label>
        <label className="block text-sm font-semibold md:col-span-2">
          Anything else we should know?
          <textarea name="message" rows={4} className={field} placeholder="Preferred dishes, dietary needs, budget..." />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          Something went wrong sending your request. Please try again, or call or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-brand px-7 py-3 font-semibold text-cream transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request a Quote"}
      </button>
    </form>
  );
}