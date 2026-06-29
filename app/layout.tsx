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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Solvexa Group",
              "alternateName": "Solvexa Group — Szkolenia Sprzedażowe B2B",
              "url": "https://www.solvexagroup.co",
              "logo": "https://www.solvexagroup.co/images/solvexa-logo.png",
              "description": "B2B sales training company founded by Albert Kohut. Solvexa Group provides sales training, coaching and consulting for sales teams, managers and founders. Based in Poland and UK. Not affiliated with Solvexa Green Energy.",
              "founder": {
                "@type": "Person",
                "name": "Albert Kohut",
                "jobTitle": "B2B Sales Trainer",
                "sameAs": "https://www.linkedin.com/in/albert-kohut"
              },
              "areaServed": ["Poland", "United Kingdom"],
              "knowsAbout": ["B2B sales", "cold calling", "sales training", "sales management"]
            })
          }}
        />
      </head>
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