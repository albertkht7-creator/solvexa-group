import Link from "next/link";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServicePageData } from "@/lib/services";

const BASE = "https://www.solvexagroup.co";

export function serviceMetadata(d: ServicePageData) {
  const title = `${d.metaTitle} - SOLVEXA GROUP`;
  return {
    title,
    description: d.metaDescription,
    alternates: { canonical: d.path },
    openGraph: {
      title,
      description: d.metaDescription,
      type: "website",
      url: `${BASE}${d.path}`,
      siteName: "Solvexa Group",
    },
  };
}

export default function ServicePage({ data: d }: { data: ServicePageData }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: d.h1,
      serviceType: d.serviceType,
      description: d.schemaDescription,
      url: `${BASE}${d.path}`,
      inLanguage: "pl-PL",
      areaServed: ["Poland", "United Kingdom", "Europe"],
      provider: {
        "@type": "Organization",
        name: "Solvexa Group",
        url: BASE,
        founder: { "@type": "Person", name: "Albert Kohut" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Solvexa Group", item: BASE },
        ...(d.parent
          ? [
              { "@type": "ListItem", position: 2, name: d.parent.name, item: `${BASE}${d.parent.path}` },
              { "@type": "ListItem", position: 3, name: d.h1, item: `${BASE}${d.path}` },
            ]
          : [{ "@type": "ListItem", position: 2, name: d.h1, item: `${BASE}${d.path}` }]),
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <section className="px-6 py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          {d.parent && (
            <Link
              href={d.parent.path}
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> {d.parent.name}
            </Link>
          )}
          <span className="block w-fit text-xs px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10 mb-6">
            {d.kicker}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">{d.h1}</h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-3xl">{d.lead}</p>
          <BookCallButton
            topic={d.ctaTopic}
            className="inline-flex px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors cursor-pointer"
          >
            {d.ctaLabel}
          </BookCallButton>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{d.forWhomHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.forWhom.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-[#111]">
                <div className="flex items-start gap-2 mb-3">
                  <Check size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{d.scopeHeading}</h2>
          <ul className="space-y-3">
            {d.scope.map((s) => (
              <li key={s} className="flex items-start gap-3 text-white/70">
                <span className="text-white/30 mt-1">›</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {d.topics && d.topicsHeading && (
        <section className="px-6 py-16 border-b border-white/8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">{d.topicsHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {d.topics.map((t) => (
                <div key={t.title} className="p-6 rounded-2xl border border-white/10 bg-[#111] flex flex-col">
                  <h3 className="font-semibold text-white mb-3">{t.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{t.text}</p>
                  {t.href && (
                    <Link
                      href={t.href}
                      className="mt-auto inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Zobacz szczegóły <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.why && d.whyHeading && (
        <section className="px-6 py-16 border-b border-white/8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">{d.whyHeading}</h2>
            <div className="space-y-6">
              {d.why.map((w) => (
                <div key={w.title}>
                  <h3 className="font-semibold text-white mb-1">{w.title}</h3>
                  <p className="text-white/50 leading-relaxed max-w-3xl">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{d.postsHeading}</h2>
          <ul className="space-y-3">
            {d.posts.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ArrowRight size={14} className="text-white/30" />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Najczęstsze pytania</h2>
          <Accordion className="space-y-3">
            {d.faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border border-white/10 rounded-xl px-6 bg-[#111]"
              >
                <AccordionTrigger className="text-white font-medium py-5 hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-white/60 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Porozmawiajmy o Twojej sytuacji</h2>
          <p className="text-white/50 mb-8">
            30 minut online, bez zobowiązań. Wspólnie ocenimy, czy i jak mogę pomóc.
          </p>
          <BookCallButton
            topic={d.ctaTopic}
            className="inline-flex px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors cursor-pointer"
          >
            {d.ctaLabel}
          </BookCallButton>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40">
            {d.related.map((r) => (
              <Link key={r.href} href={r.href} className="hover:text-white transition-colors">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
