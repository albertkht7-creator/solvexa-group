"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "PL" | "EN";

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

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  // Resolved by proxy.ts and handed down from the root layout, so the server
  // and the first client render agree — no hydration mismatch, no flash of the
  // wrong language.
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    // Persist the manual choice so it survives page reloads and beats
    // auto-detection on future visits (proxy skips cookie-set visitors).
    writeLangCookie(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
