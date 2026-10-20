import type { Metadata } from "next";
import "../globals.css";
import RootDocument from "@/components/RootDocument";
import { languageAlternates } from "@/lib/routes";

const title = "Szkolenia Sprzedażowe B2B | Albert Kohut — Solvexa Group";
const description =
  "Praktyczne szkolenia B2B — 15 lat w sprzedaży. Cold calling, demo, negocjacje. Dla handlowców, managerów i firm. Sprawdź ofertę Solvexa Group.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solvexagroup.co"),
  title,
  description,
  alternates: { canonical: "/", languages: languageAlternates("/") },
  verification: {
    google: "dJOAbPaOteEn381QudskCCHSooWeawhA8oqxQbtSuVM",
  },
  openGraph: {
    title,
    description: "Praktyczne szkolenia B2B — 15 lat w sprzedaży. Cold calling, demo, negocjacje. Dla handlowców, managerów i firm.",
    type: "website",
    locale: "pl_PL",
    url: "https://www.solvexagroup.co",
    siteName: "Solvexa Group",
  },
};

export default function PlLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="PL">{children}</RootDocument>;
}
