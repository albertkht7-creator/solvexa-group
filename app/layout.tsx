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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Dla kogo są te szkolenia i kursy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dla handlowców B2B, SDR/BDR, managerów sprzedaży oraz przedsiębiorców, którzy sami sprzedają swoje usługi i chcą robić to skuteczniej - a także dla przedsiębiorców, którzy chcą zrozumieć, w jakim momencie znajduje się ich firma i co mogą zrobić, aby zwiększyć sprzedaż i wydajność swojego zespołu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy pierwsza konsultacja jest naprawdę bezpłatna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak. 30 minut, zero kosztów, zero zobowiązań. Wspólnie oceniamy czy i jak mogę pomóc. Jeśli nie pasuję, powiem Ci wprost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak szybko zobaczę pierwsze efekty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pierwsze zmiany w podejściu i rozmowach sprzedażowych widać już po kilku tygodniach systematycznej pracy. Wyniki w pipeline - po 1–2 miesiącach."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy szkolenia są online, czy stacjonarne?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kursy online są dostępne 24/7 z każdego urządzenia. Szkolenia zamknięte dla firm mogą odbywać się stacjonarnie lub zdalnie - do ustalenia indywidualnie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy oferujesz szkolenia dla całego zespołu sprzedażowego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak - prowadzę warsztaty i programy szkoleniowe dedykowane zespołom sprzedażowym. Napisz do mnie, żebyśmy omówili zakres, format i harmonogram."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czym różni się mentoring od kursu online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kurs to nagrany materiał, który przerabiasz we własnym tempie. Mentoring to praca 1:1 - analizujemy Twoje konkretne sytuacje, pipeline i wyniki w czasie rzeczywistym."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Skąd wiem, że to działa? Masz wyniki?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Na co dzień pracuję jako Sales Leader w Revolut Biznes. To, czego uczę, stosuję sam - na żywym rynku. Wyniki moich klientów znajdziesz w sekcji opinii."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak długo mam dostęp do kursu i w jakiej jakości jest wideo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dostęp do każdego kursu masz na 3 miesiące od momentu zakupu. Wszystkie materiały wideo są w jakości 4K."
                  }
                }
              ]
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