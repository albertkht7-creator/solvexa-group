"use client";
import { Marquee } from "@/components/ui/marquee";
import { useLang } from "@/lib/language-context";

export default function CredibilityStrip() {
  const { lang } = useLang();

  const badges = [
    {
      label: lang === "PL" ? "Menedżer sprzedaży" : "Sales Leader",
      sub: lang === "PL" ? "Revolut Biznes" : "Revolut Business",
    },
    { label: "Speaker", sub: "Google for Startups" },
    { label: "Warsaw Startup Club", sub: "#7 Optimizing Sales" },
    { label: "15+", sub: lang === "PL" ? "lat w sprzedaży B2B" : "yrs in B2B sales" },
    { label: "500+", sub: lang === "PL" ? "przeszkolonych handlowców" : "sales reps trained" },
    { label: "10+", sub: lang === "PL" ? "lat szkoleń B2B" : "years of B2B training" },
    { label: "500+", sub: lang === "PL" ? "rozmów rekrutacyjnych" : "recruitment interviews" },
    { label: "5", sub: lang === "PL" ? "kursów online" : "online courses" },
  ];

  const items: React.ReactNode[] = [];
  badges.forEach((b, i) => {
    items.push(
      <div key={`${b.label}-${b.sub}`} className="flex items-center gap-2.5 flex-shrink-0">
        <span className="text-white font-bold text-lg tracking-tight leading-none">{b.label}</span>
        <span className="text-white/60 text-sm whitespace-nowrap leading-none">{b.sub}</span>
      </div>
    );
    if (i < badges.length - 1) {
      items.push(<span key={`sep-${i}`} className="text-white/20 text-xl select-none mx-2">·</span>);
    }
  });

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto overflow-hidden bg-gray-900 rounded-2xl py-5">
        <Marquee duration={40}>{items}</Marquee>
      </div>
    </section>
  );
}
