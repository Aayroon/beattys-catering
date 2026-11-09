import Image from "next/image";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About Us | Over 15 Years of Catering Experience in Nairobi",
  description:
    "Meet Beatrice, the Utalii College-trained chef behind Beattys Catering. Over 15 years and 500+ events across Kenya, from intimate gatherings to 5,000 guests.",
  alternates: { canonical: "/about/" },
};

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "500+", label: "Events catered" },
  { value: "5,000", label: "Guests served in a single day" },
  { value: "100%", label: "Customer satisfaction" },
  //{ value: "11", label: "Permanent team members" },
];

const reasons = [
  { icon: "👩‍🍳", title: "Qualified, experienced chef", text: "Led by a trained private chef and caterer with more than 15 years in the kitchen." },
  { icon: "📋", title: "Menu planning support", text: "We help you plan, prepare and choose a menu that suits your guests, your day and your budget." },
  { icon: "👥", title: "Events of any size", text: "From small gatherings to events of thousands, quality stays the same." },
  { icon: "🧼", title: "Food safety first", text: "Our staff hold food handlers' certificates and medical certificates, renewed every six months." },
  { icon: "🧾", title: "Registered and tax-compliant", text: "A registered company with eTIMS integrated, so your invoices are fully compliant." },
  { icon: "💰", title: "Menus for every budget", text: "Standard to assorted, budget-friendly to high-end, all prepared with the same care." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand py-14 text-center text-cream">
        <h1 className="text-4xl font-bold md:text-5xl">About Beattys Catering</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 opacity-90">
          Over 15 years of fresh food, dependable service and successful events across Kenya.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-brand">Our story</h2>
          <p className="mt-4 text-ink/80">
            Beattys Catering has been serving clients for more than 15 years and has successfully
            catered over 500 events. We are a registered company based in Nairobi, and we travel
            wherever your event takes us.
          </p>
          <p className="mt-4 text-ink/80">
            Our approach is simple: we take pride in every plate we serve and every occasion we cater for. Whether it's an intimate family gathering or a large celebration, we
            treat your event as our own.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-gold/50 shadow-xl">
          <Image
            src="/images/staff-display1.webp"
            alt="The Beattys Catering team at a food display"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-brand-dark py-12 text-cream">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-gold md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

            <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-gold/50 shadow-xl">
              <Image
                src="/images/chef-beatrice.webp"
                alt="Chef Beatrice, head chef and director of Beattys Catering, in her chef whites"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-brand">Meet Chef Beatrice</h2>
            <p className="mt-1 font-semibold text-gold">Head Chef</p>
            <div className="mt-6 space-y-4 text-ink/80">
              <p>
                Beatrice is a qualified private chef and caterer. She trained for three years at
                Utalii College, specialising in Hot Kitchen and Pastry, after completing her
                secondary school education.
              </p>
              <p>
                Her love of cooking began at home. As the first-born daughter, she was coached by
                her mother in the kitchen from an early age, and she saw this as both a challenge
                and a responsibility. That sense of responsibility still shapes how she runs every
                event.
              </p>
              <p>
                Beatrice works closely with every client during meal planning and preparation, 
                helping them choose menus that best suit their occasion and guests. 
                She has years of experience catering for both small gatherings and large events, 
                including occasions with up to 5,000 guests in a single day. Through it all, 
                she remains focused on preparing good food, maintaining quality and ensuring that every event 
                is well catered for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-brand">A skilled, dependable team</h2>
          <p className="mt-4 text-ink/80">
            Beatrice leads a team of 11 permanent staff who are highly qualified, motivated and
            self-driven, able to work with minimal supervision. For larger events we bring in
            additional casual staff to suit the menu, the nature of the work and the needs of the
            day.
          </p>
          <p className="mt-4 text-ink/80">
            Every member of our team holds a food handler&apos;s certificate and a medical
            certificate, both renewed every six months, so you can be confident in both the food
            and the service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-brand">Why choose Beattys Catering</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-gold/30 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-2xl">{r.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-brand">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}