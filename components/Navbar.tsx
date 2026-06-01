"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "Kursy", href: "/#kursy" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-4xl ${
        isOpen ? "rounded-2xl" : "rounded-full"
      } border border-gray-200 bg-white/80 backdrop-blur-md px-6 py-3`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="font-semibold text-gray-900 tracking-tight text-sm">
          SOLVEXA GROUP
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#kontakt"
            className="text-sm px-4 py-2 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Umów rozmowę
          </Link>
        </div>

        <button
          className="md:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
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
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-900 transition-colors text-center"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 rounded-full bg-gray-900 text-white font-medium text-center"
              >
                Umów rozmowę
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
