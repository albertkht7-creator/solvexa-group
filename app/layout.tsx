import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "SOLVEXA GROUP | Szkolenia Sprzedażowe - Albert Kohut",
  description: "Szkolenia sprzedażowe B2B - Albert Kohut, Menedżer sprzedaży w Revolut Biznes. Kursy online, consulting i mentoring dla handlowców, managerów i założycieli.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "SOLVEXA GROUP | Sales Training — Albert Kohut",
    description: "B2B sales training with Albert Kohut, Sales Leader at Revolut Business. Online courses, consulting and mentoring for sales reps, managers and founders.",
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
