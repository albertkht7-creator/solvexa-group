import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-gray-900 tracking-tight">SOLVEXA GROUP</p>
          <p className="text-sm text-gray-400 mt-1">Albert Kohut — Szkolenia Sprzedażowe</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-gray-400">
          <Link href="/#uslugi" className="hover:text-gray-900 transition-colors">Usługi</Link>
          <Link href="/#kursy" className="hover:text-gray-900 transition-colors">Kursy</Link>
          <Link href="/#o-mnie" className="hover:text-gray-900 transition-colors">O mnie</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/#kontakt" className="hover:text-gray-900 transition-colors">Kontakt</Link>
        </nav>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} SOLVEXA GROUP</p>
      </div>
    </footer>
  );
}
