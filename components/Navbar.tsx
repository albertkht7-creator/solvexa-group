"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [albertOpen, setAlbertOpen] = useState(false);
  const { openModal } = useContactModal();
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;
  const ai = t[lang].albertAi;

  // AlbertAI isn't ready for visitors yet — its nav item opens a "coming soon"
  // modal instead of linking to the unfinished app.
  const openAlbert = () => { setIsOpen(false); setAlbertOpen(true); };

  useEffect(() => {
    if (!albertOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setAlbertOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [albertOpen]);

  const links = [
    { label: tr.about,    href: "/#o-mnie" },
    { label: "AlbertAI", href: "#", comingSoon: true },
    { label: tr.speaking, href: "/#wystapienia" },
    { label: tr.services, href: "/#uslugi" },
    { label: tr.courses,  href: "/#kursy" },
    { label: tr.blog,     href: "/blog" },
    { label: tr.contact,  href: "/#kontakt" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-6xl ${
        isOpen ? "rounded-2xl" : "rounded-full"
      } border border-gray-200 bg-white/80 backdrop-blur-md px-6 py-1.5`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
            <div className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[2] origin-bottom">
              <Image
                src="/images/solvexa-logo.png"
                width={48}
                height={48}
                alt="Solvexa Group"
                priority
              />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase text-gray-900">
              Solvexa Group
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.comingSoon ? (
              <button
                key={l.label}
                onClick={openAlbert}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                {l.label}
                <span className="text-[9px] font-semibold uppercase tracking-wide text-[#7A5C00] bg-[#7A5C00]/10 rounded-full px-1.5 py-0.5">
                  {tr.soon}
                </span>
              </button>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLang("PL")}
              className={`px-1 transition-colors cursor-pointer ${lang === "PL" ? "font-bold text-gray-900" : "text-gray-400 hover:text-gray-700"}`}
            >
              PL
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLang("EN")}
              className={`px-1 transition-colors cursor-pointer ${lang === "EN" ? "font-bold text-gray-900" : "text-gray-400 hover:text-gray-700"}`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => openModal()}
            className="text-base px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            {tr.cta}
          </button>
        </div>

        <button className="md:hidden text-gray-500 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {links.map((l) =>
                l.comingSoon ? (
                  <button
                    key={l.label}
                    onClick={openAlbert}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-center inline-flex items-center justify-center gap-1.5"
                  >
                    {l.label}
                    <span className="text-[9px] font-semibold uppercase tracking-wide text-[#7A5C00] bg-[#7A5C00]/10 rounded-full px-1.5 py-0.5">
                      {tr.soon}
                    </span>
                  </button>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-center"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <button onClick={() => { setIsOpen(false); openModal(); }} className="text-sm px-4 py-2 rounded-full bg-gray-900 text-white font-medium text-center">
                {tr.cta}
              </button>
              <div className="flex items-center justify-center gap-2 text-sm pt-1">
                <button onClick={() => { setLang("PL"); setIsOpen(false); }} className={lang === "PL" ? "font-bold text-gray-900" : "text-gray-400"}>PL</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => { setLang("EN"); setIsOpen(false); }} className={lang === "EN" ? "font-bold text-gray-900" : "text-gray-400"}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AlbertAI — coming soon */}
      <AnimatePresence>
        {albertOpen && (
          <motion.div
            key="albert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setAlbertOpen(false)}
          >
            <motion.div
              key="albert-modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setAlbertOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7A5C00] bg-[#7A5C00]/10 rounded-full px-3 py-1 mb-5">
                {ai.badge}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{ai.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{ai.desc}</p>
              <p className="text-sm text-gray-500 mb-7">{ai.desc2}</p>
              <button
                onClick={() => setAlbertOpen(false)}
                className="w-full py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                {ai.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
