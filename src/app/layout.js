import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "Beattys Catering | Outdoor & Event Catering in Nairobi, Kenya",
    template: "%s | Beattys Catering",
  },
  description:
    "Beattys Catering provides outdoor and corporate catering for weddings, religious ceremonies, private dining, social gatherings, school events, graduations, birthdays and funerals in Nairobi and across Kenya.",
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