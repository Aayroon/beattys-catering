import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-gold">Beattys Catering</h3>
          <p className="mt-2 text-sm opacity-80">
            Outdoor and corporate catering for every occasion, based in Nairobi and serving all of Kenya.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-gold">Contact</h4>
          <p className="mt-2">Phone: <a href={`tel:${site.phoneTel}`} className="hover:text-gold">{site.phoneDisplay}</a></p>
          <p>Email: {site.email}</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-gold">Services</h4>
          <p className="mt-2">Weddings · Corporate · Religious · Private Dining · Social · Schools · Graduations · Birthdays · Funerals</p>
        </div>
      </div>
      <p className="border-t border-cream/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Beattys Catering. All rights reserved.
      </p>
    </footer>
  );
}