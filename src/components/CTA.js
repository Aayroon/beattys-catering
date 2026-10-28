import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

export default function CTA() {
  return (
    <section className="bg-brand-dark py-16 text-center text-cream">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold md:text-4xl">Planning an event? Let&apos;s cook for you.</h2>
        <p className="mt-3 opacity-90">Tell us the date, place and number of guests and we&apos;ll send a tailored quote.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact/" className="rounded-full bg-gold px-7 py-3 font-semibold text-ink hover:bg-cream transition">
            Request a Quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="rounded-full border-2 border-cream px-7 py-3 font-semibold hover:bg-cream hover:text-brand transition">
            Call {site.phoneDisplay}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-gold px-7 py-3 font-semibold text-gold hover:bg-gold hover:text-ink transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}