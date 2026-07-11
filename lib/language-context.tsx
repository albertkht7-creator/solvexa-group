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

// Read the lang cookie synchronously. Called as a lazy useState initializer so
// it only runs on the client (after hydration) — typeof document guard handles SSR.
// The proxy.ts sets this cookie before the page HTML is sent, so by the time
// React runs this function the correct value is already in document.cookie.
function readLangCookie(): Lang {
  if (typeof document === "undefined") return "PL"; // SSR: always render PL
  const entry = document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="));
  const value = entry?.split("=")[1];
  return value === "EN" ? "EN" : "PL";
}

function writeLangCookie(l: Lang) {
  document.cookie = `lang=${l}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer: reads the cookie on first client render.
  // On SSR this returns "PL"; on the client it returns whatever the cookie says.
  const [lang, setLangState] = useState<Lang>(() => readLangCookie());

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
