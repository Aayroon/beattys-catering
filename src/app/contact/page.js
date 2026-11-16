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
              title="Map showing Beattys Catering in Komarock, Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650.7739415867347!2d36.906374641108506!3d-1.2688528304308302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f146384bc76f5%3A0x6311ba4011e5ed39!2sKomarock%20Phase%20IIIB%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1794481635721!5m2!1sen!2ske"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-3 text-center text-sm font-semibold text-brand hover:bg-blush"
             >
              Open in Google Maps
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}