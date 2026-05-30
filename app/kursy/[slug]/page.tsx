import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/lib/courses";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} — SOLVEXA GROUP`,
    description: course.description,
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#kursy"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Wszystkie kursy
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-xl text-white/50 mb-10">{course.subtitle}</p>
          <Link
            href="/#kontakt"
            className="inline-flex px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors"
          >
            Zapisz się na kurs
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/60 leading-relaxed">{course.description}</p>
        </div>
      </section>

      {/* For whom */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Dla kogo jest ten kurs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.forWhom.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/10 bg-[#111]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Check size={16} className="text-blue-400" />
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
                <p className="text-sm text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Program kursu</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {course.modules.map((module, i) => (
              <AccordionItem
                key={module.title}
                value={`module-${i}`}
                className="border border-white/10 rounded-xl px-6 bg-[#111]"
              >
                <AccordionTrigger className="text-white font-medium py-5 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="text-white/30 font-mono text-xs">0{i + 1}</span>
                    {module.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-center gap-3 text-sm text-white/50"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gotowy na zmianę?</h2>
          <p className="text-white/50 mb-8">
            Napisz do mnie — omówimy szczegóły i dopasujemy termin.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            Umów bezpłatną rozmowę
          </Link>
        </div>
      </section>
    </main>
  );
}
