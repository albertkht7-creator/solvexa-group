import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers";
import { t } from "@/lib/translations";
import { BASE_URL, type Lang } from "@/lib/routes";

// Shared <html> document for both language layouts (app/(pl) and app/(en)/en).
// The language comes from the route group, never from request headers, so every
// page is statically generated and cacheable.
export default function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const faq = t[lang].faq.items;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Solvexa Group",
      alternateName: "Solvexa Group — Szkolenia Sprzedażowe B2B",
      url: BASE_URL,
      logo: `${BASE_URL}/images/solvexa-logo.png`,
      description:
        "B2B sales training company founded by Albert Kohut. Solvexa Group provides sales training, coaching and consulting for sales teams, managers and founders, and courses for people starting or changing careers into sales. Serves clients in Poland, the UK and across Europe. Not affiliated with Solvexa Green Energy or Solvexa Solutions.",
      email: "hello@solvexagroup.co",
      sameAs: ["https://www.linkedin.com/in/positivemindset"],
      founder: {
        "@type": "Person",
        name: "Albert Kohut",
        jobTitle: "B2B Sales Trainer",
        sameAs: "https://www.linkedin.com/in/positivemindset",
      },
      areaServed: ["Poland", "United Kingdom", "Europe"],
      knowsAbout: ["B2B sales", "cold calling", "prospecting", "sales training", "sales management", "sales recruitment"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Solvexa Group",
      alternateName: "Solvexa Group — Szkolenia Sprzedażowe B2B",
      url: BASE_URL,
      inLanguage: lang === "EN" ? "en-GB" : "pl-PL",
      publisher: { "@type": "Organization", name: "Solvexa Group" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <html lang={lang === "EN" ? "en" : "pl"} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
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
