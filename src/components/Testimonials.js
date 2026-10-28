"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-blush/50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-brand">What our clients say</h2>
        <figure className="mt-8 min-h-[150px]">
          <blockquote className="text-xl italic">“{t.quote}”</blockquote>
          <figcaption className="mt-4 font-semibold text-brand-dark">
            {t.name} <span className="font-normal text-ink/60">· {t.event}</span>
          </figcaption>
        </figure>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition ${i === index ? "bg-brand" : "bg-brand/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}