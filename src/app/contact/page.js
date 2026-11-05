import QuoteForm from "@/components/QuoteForm";
import { site, whatsappLink } from "@/data/site";

export const metadata = {
  title: "Contact & Get a Quote | Catering in Nairobi",
  description:
    "Request a catering quote from Beattys Catering. Call, WhatsApp or send an enquiry for weddings, corporate events, graduations and more in Nairobi and across Kenya.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand py-14 text-center text-cream">
        <h1 className="text-4xl font-bold md:text-5xl">Get a Free Quote</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 opacity-90">
          Tell us about your event and we will send you a tailored quote.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>

        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-blush/50 p-6">
            <h2 className="text-2xl font-bold text-brand">Prefer to talk?</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${site.phoneTel}`} className="font-semibold hover:text-brand">
                  📞 {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-brand">
                  💬 Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="font-semibold hover:text-brand">
                  ✉️ {site.email}
                </a>
              </li>
              <li>📍 Based in {site.base}, serving all of Kenya</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gold/30">
            <iframe
              title="Map showing Nairobi, Kenya"
              src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}