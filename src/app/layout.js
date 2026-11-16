import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Beattys Catering | Outdoor & Event Catering in Nairobi, Kenya",
    template: "%s | Beattys Catering",
  },
  description:
    "Beattys Catering provides outdoor and corporate catering for weddings, religious ceremonies, private dining, social gatherings, school events, graduations, birthdays and funerals in Nairobi and across Kenya.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Beattys Catering",
    title: "Beattys Catering | Outdoor & Event Catering in Nairobi",
    description: "Fresh, professional catering for every occasion across Kenya. Request a free quote today.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Beattys Catering" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}