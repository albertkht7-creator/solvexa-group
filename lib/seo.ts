import { absoluteUrl, alternatePath, languageAlternates, type Lang } from "@/lib/routes";

// Metadata with canonical + hreflang for a page that exists in both languages.
// `plPath` is always the Polish URL of the page; the English URL is derived.
export function pageMetadata(opts: {
  lang: Lang;
  plPath: string;
  title: string;
  description: string;
  type?: "website" | "article";
}) {
  const { lang, plPath, title, description, type = "website" } = opts;
  const selfPath = lang === "EN" ? (alternatePath(plPath, "EN") ?? plPath) : plPath;
  return {
    title,
    description,
    alternates: { canonical: selfPath, languages: languageAlternates(plPath) },
    openGraph: {
      title,
      description,
      type,
      url: absoluteUrl(selfPath),
      siteName: "Solvexa Group",
      locale: lang === "EN" ? "en_GB" : "pl_PL",
    },
  };
}
