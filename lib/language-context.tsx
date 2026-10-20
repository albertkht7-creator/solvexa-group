"use client";
import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { alternatePath, langFromPath, type Lang } from "@/lib/routes";

export type { Lang };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "PL",
  setLang: () => {},
});

function writeLangCookie(l: Lang) {
  document.cookie = `lang=${l}; path=/; max-age=31536000; SameSite=Lax`;
}

// The language is part of the URL (English lives under /en), so it is derived
// from the pathname: the server render and the first client render always agree,
// and every page is a plain static page in exactly one language.
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const lang = langFromPath(pathname);

  const setLang = (l: Lang) => {
    // Persist the manual choice first: proxy.ts honours it on later visits.
    writeLangCookie(l);
    if (l === lang) return;
    router.push(alternatePath(pathname, l) ?? (l === "EN" ? "/en" : "/"));
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
