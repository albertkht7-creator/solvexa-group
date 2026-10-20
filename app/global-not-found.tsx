import "./globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Solvexa Group",
  description: "Nie znaleziono strony / Page not found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pl" className={GeistSans.variable}>
      <body className={GeistSans.className}>
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#0a0a0a] px-6 text-center">
          <h1 className="text-5xl font-bold text-white">404</h1>
          <p className="text-white/60">Nie znaleziono strony. / Page not found.</p>
          <div className="flex gap-6 text-sm">
            <a href="/" className="text-white underline underline-offset-4">Strona główna</a>
            <a href="/en" className="text-white underline underline-offset-4">Home (EN)</a>
          </div>
        </main>
      </body>
    </html>
  );
}
