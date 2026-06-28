"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang];
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.3] origin-bottom flex-shrink-0">
              <Image
                src="/images/solvexa-logo.png"
                width={48}
                height={48}
                alt="Solvexa Group"
              />
            </div>
            <span className="text-sm text-gray-600">
              Albert Kohut - Szkolenia Sprzedażowe
            </span>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
          <Link href="/#o-mnie" className="hover:text-gray-900 transition-colors">{tr.nav.about}</Link>
          <Link href="/#wystapienia" className="hover:text-gray-900 transition-colors">{tr.nav.speaking}</Link>
          <Link href="/#uslugi" className="hover:text-gray-900 transition-colors">{tr.nav.services}</Link>
          <Link href="/#kursy" className="hover:text-gray-900 transition-colors">{tr.nav.courses}</Link>
          <Link href="/#kontakt" className="hover:text-gray-900 transition-colors">{tr.nav.contact}</Link>
        </nav>

        <a
          href="https://uk.linkedin.com/in/positivemindset"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} SOLVEXA GROUP. {tr.footer.copy}</p>
      </div>
    </footer>
  );
}
