"use client";
import { useEffect } from "react";
import { ContactModalProvider } from "@/lib/contact-modal-context";
import { LanguageProvider, type Lang } from "@/lib/language-context";
import { ContactModal } from "@/components/ui/contact-modal";
import { QuotePopup } from "@/components/ui/quote-popup";

export function Providers({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider initialLang={initialLang}>
      <ContactModalProvider>
        {children}
        <ContactModal />
        <QuotePopup />
      </ContactModalProvider>
    </LanguageProvider>
  );
}
