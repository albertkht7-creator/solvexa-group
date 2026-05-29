import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLVEXA GROUP | Szkolenia Sprzedażowe — Albert Kohut",
  description:
    "Praktyczne szkolenia sprzedażowe, consulting i kursy online. 15+ lat B2B, Sales Manager @Revolut Business.",
  openGraph: {
    title: "SOLVEXA GROUP | Szkolenia Sprzedażowe",
    description: "Osiągnij swoje cele sprzedażowe z Albert Kohut.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
