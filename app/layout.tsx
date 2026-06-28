import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers";
export const metadata: Metadata = {
  metadataBase: new URL('https://www.solvexagroup.co'),
  title: "Szkolenia Sprzedażowe B2B | Albert Kohut — Solvexa Group",
  description: "Praktyczne szkolenia B2B — 15 lat w sprzedaży. Cold calling, demo, negocjacje. Dla handlowców, managerów i firm. Sprawdź ofertę Solvexa Group.",
  openGraph: {
    title: "Szkolenia Sprzedażowe B2B | Albert Kohut — Solvexa Group",
    description: "Praktyczne szkolenia B2B — 15 lat w sprzedaży. Cold calling, demo, negocjacje. Dla handlowców, managerów i firm.",
    type: "website",
    locale: "pl_PL",
    url: "https://www.solvexagroup.co",
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
