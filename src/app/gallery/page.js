import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { gallery } from "@/data/gallery";

export const metadata = {
  title: "Gallery | Catering Photos from Nairobi Events",
  description:
    "Browse photos of Beattys Catering's dishes and events, from weddings and corporate functions to graduations and family gatherings in Nairobi and across Kenya.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand py-14 text-center text-cream">
        <h1 className="text-4xl font-bold md:text-5xl">Our Gallery</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 opacity-90">
          A taste of the food and events we have catered. Tap any photo to view it larger.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <GalleryGrid items={gallery} />
      </section>

      <CTA />
    </>
  );
}