import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import { whatsappLink } from "@/data/site";

export const metadata = {
  title: "Custom Catering Menus | Budget to High-End Menus in Nairobi",
  description:
    "Every Beattys Catering menu is designed around your event, guests and budget. From standard to assorted, budget-friendly to high-end. Request your custom menu and quote.",
  alternates: { canonical: "/menu/" },
};

const styles = [
  { title: "Standard", icon: "🍛", text: "Well-loved, dependable dishes prepared fresh and served in generous portions." },
  { title: "Assorted", icon: "🥗", text: "A wider variety of mains, sides and salads for guests with different tastes." },
  { title: "Budget-Friendly", icon: "💰", text: "Carefully planned menus that keep the quality high while respecting your budget." },
  { title: "High-End", icon: "✨", text: "Premium menus and presentation for weddings, corporate functions and special occasions." },
];

const steps = [
  { n: "1", title: "Tell us about your event", text: "Share the date, place, number of guests and your budget." },
  { n: "2", title: "We design the menu with you", text: "We advise on dishes and portions that suit your guests and your day." },
  { n: "3", title: "Receive your quote", text: "You get a clear quotation matched to your menu and requirements." },
  { n: "4", title: "We cook and serve", text: "Our team prepares, sets up and serves, so you can enjoy your event." },
];

const tastes = [
  { src: "/images/pilau.webp", alt: "Pilau prepared by Beattys Catering" },
  { src: "/images/vegetables.webp", alt: "Freshly cooked vegetables" },
  { src: "/images/fried-chicken-roasted-potatoes.webp", alt: "Fried chicken with roasted potatoes" },
  { src: "/images/fresh-juices.webp", alt: "Fresh juices for guests" },
];

export default function MenuPage() {
  return (
    <>
      <section className="bg-brand py-14 text-center text-cream">
        <h1 className="text-4xl font-bold md:text-5xl">Menus Made for Your Event</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 opacity-90">
          We don&apos;t believe in one-size-fits-all menus. Every menu is designed around your
          occasion, your guests and your budget.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-brand">A menu for every budget</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gold/30 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blush/40 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((st) => (
              <div key={st.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-cream">
                  {st.n}
                </div>
                <h3 className="mt-4 font-bold text-brand">{st.title}</h3>
                <p className="mt-2 text-sm text-ink/80">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-brand">A taste of what we serve</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tastes.map((t) => (
            <div key={t.src} className="relative aspect-square overflow-hidden rounded-xl bg-blush">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/gallery/" className="rounded-full border-2 border-brand px-6 py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-cream">
            See the full gallery
          </Link>
          <Link href="/contact/" className="rounded-full bg-brand px-6 py-2.5 font-semibold text-cream transition hover:bg-brand-dark">
            Request a custom menu
          </Link>
          <a href={whatsappLink("Hello Beattys Catering, I would like a custom menu and quote.")} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-gold px-6 py-2.5 font-semibold text-brand transition hover:bg-gold">
            WhatsApp us
          </a>
        </div>
      </section>

      <CTA />
    </>
  );
}