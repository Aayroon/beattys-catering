"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/menu/", label: "Menu" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-gold/30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-2xl font-bold text-brand">
          Beattys <span className="text-gold">Catering</span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="font-medium hover:text-brand transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact/"
          className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-cream hover:bg-brand-dark transition-colors md:block"
        >
          Get a Quote
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-gold/30 bg-cream px-4 pb-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-brand px-5 py-3 text-center font-semibold text-cream"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}