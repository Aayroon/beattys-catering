import Link from "next/link";
import { whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            Nairobi · All of Kenya
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Delicious food for every <span className="text-gold">celebration</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg opacity-90">
            Beattys Catering brings freshly prepared outdoor and corporate catering to weddings, ceremonies, school events, private dining and celebrations of every kind, wherever you are.”
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-cream"
            >
              Get a Free Quote
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream px-7 py-3 font-semibold transition hover:bg-cream hover:text-brand"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Replace this block with a real food photo later */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-gold/50 bg-brand-dark text-center">
          <span className="px-6 text-gold">Hero food photo goes here</span>
        </div>
      </div>
    </section>
  );
}