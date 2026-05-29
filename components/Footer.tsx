import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-white tracking-tight">SOLVEXA GROUP</p>
          <p className="text-sm text-white/40 mt-1">Albert Kohut — Szkolenia Sprzedażowe</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-white/40">
          <Link href="/#uslugi" className="hover:text-white transition-colors">Usługi</Link>
          <Link href="/#kursy" className="hover:text-white transition-colors">Kursy</Link>
          <Link href="/#o-mnie" className="hover:text-white transition-colors">O mnie</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/#kontakt" className="hover:text-white transition-colors">Kontakt</Link>
        </nav>
        <p className="text-xs text-white/30">© {new Date().getFullYear()} SOLVEXA GROUP</p>
      </div>
    </footer>
  );
}
