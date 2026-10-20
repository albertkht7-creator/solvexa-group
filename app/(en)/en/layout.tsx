import type { Metadata } from "next";
import "../../globals.css";
import RootDocument from "@/components/RootDocument";
import { languageAlternates } from "@/lib/routes";

const title = "B2B Sales Training | Albert Kohut — Solvexa Group";
const description =
  "Practical B2B sales training built on 15 years of practice. Cold calling, demos, negotiation. For sales reps, managers and companies. Explore Solvexa Group.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solvexagroup.co"),
  title,
  description,
  alternates: { canonical: "/en", languages: languageAlternates("/") },
  verification: {
    google: "dJOAbPaOteEn381QudskCCHSooWeawhA8oqxQbtSuVM",
  },
  openGraph: {
    title,
    description: "Practical B2B sales training built on 15 years of practice. Cold calling, demos, negotiation. For sales reps, managers and companies.",
    type: "website",
    locale: "en_GB",
    url: "https://www.solvexagroup.co/en",
    siteName: "Solvexa Group",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="EN">{children}</RootDocument>;
}
