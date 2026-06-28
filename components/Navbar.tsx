"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;

  const links = [
    { label: tr.about,    href: "/#o-mnie" },
    { label: tr.speaking, href: "/#wystapienia" },
    { label: tr.services, href: "/#uslugi" },
    { label: tr.courses,  href: "/#kursy" },
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
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </Link>
          ))}
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
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors text-center">
                  {l.label}
                </Link>
              ))}
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
    </header>
  );
}
