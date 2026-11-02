"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function GalleryGrid({ items }) {
  const categories = ["All", ...new Set(items.map((i) => i.category))];
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const close = () => setOpenIndex(null);
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % filtered.length),
    [filtered.length]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, next, prev]);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === c
                ? "bg-brand text-cream"
                : "border border-brand/30 text-brand hover:bg-blush"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-blush"
            aria-label={`View larger: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              loading="lazy"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-brand-dark/0 transition group-hover:bg-brand-dark/30" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && filtered[openIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 text-3xl text-cream"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-4xl text-cream md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[openIndex].src}
              alt={filtered[openIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-4xl text-cream md:right-6"
            aria-label="Next photo"
          >
            ›
          </button>
          <p className="absolute bottom-4 left-0 right-0 px-4 text-center text-sm text-cream/80">
            {filtered[openIndex].alt} · {openIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  );
}