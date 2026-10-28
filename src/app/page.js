import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-brand md:text-4xl">
          Catering for every occasion
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
          From intimate family meals to large weddings and corporate events, we handle the food so you can enjoy the day.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}