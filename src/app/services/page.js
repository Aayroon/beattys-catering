import Link from "next/link";
import CTA from "@/components/CTA";
import { services } from "@/data/services";

export const metadata = {
  title: "Catering Services | Weddings, Corporate & Event Catering in Nairobi",
  description:
    "Beattys Catering offers wedding, corporate, religious, school, graduation, birthday, funeral and private dining catering in Nairobi and across Kenya.",
  alternates: { canonical: "/services/" },
};

const details = {
  weddings:
    "Your wedding deserves food that guests talk about long after the day. We plan the menu with you, from the cocktail hour to the main buffet or plated service, and handle the cooking and serving so you can enjoy every moment.",
  "corporate-events":
    "From staff lunches and training days to conferences and product launches, we deliver punctual, professional catering at any scale. Our menus range from simple working meals to full premium service.",
  "religious-ceremonies":
    "We cater church services, feast days, baptisms, first communions, dedications and other faith gatherings. We have served as many as 5,000 guests in a single day, and we keep the quality steady however big the crowd.",
  "private-dining":
    "Enjoy a restaurant-quality meal at home or at a venue of your choice. We prepare and serve an intimate menu for dinner parties, anniversaries and special occasions.",
  "social-gatherings":
    "Reunions, house parties, get-togethers and celebrations with friends and family. We prepare relaxed, flavourful spreads suited to the mood and the size of your gathering.",
  "school-events":
    "We cater school functions, open days, sports days, graduations and parent events. We plan around your budget, timing and the number of guests.",
  graduations:
    "Celebrate the achievement with a spread that matches the occasion. We cater graduation parties of every size, from family lunches to large gatherings.",
  birthdays:
    "From children's parties to milestone birthdays, we prepare food everyone enjoys and serve it with a smile.",
  funerals:
    "We understand the care these days require. Our team provides dignified, reliable catering so the family can focus on being together.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand py-14 text-center text-cream">
        <h1 className="text-4xl font-bold md:text-5xl">Our Catering Services</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 opacity-90">
          Whatever the occasion, we bring the food, the team and the experience. Based in Nairobi,
          serving all of Kenya.
        </p>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-20 py-14 ${i % 2 === 0 ? "bg-cream" : "bg-blush/40"}`}
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:flex-row md:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blush text-5xl">
              {s.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand">{s.title}</h2>
              <p className="mt-3 text-ink/80">{details[s.slug] ?? s.text}</p>
              <Link
                href="/contact/"
                className="mt-5 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-dark"
              >
                Get a quote for {s.title.toLowerCase()}
              </Link>
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}