import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses, type Course } from "@/lib/courses";
import { coursesEn } from "@/lib/courses-en";
import { pageMetadata } from "@/lib/seo";
import { BASE_URL, courseSlugMap, type Lang } from "@/lib/routes";

const enToPl = Object.fromEntries(Object.entries(courseSlugMap).map(([k, v]) => [v, k]));

export function courseList(lang: Lang): Course[] {
  return lang === "EN" ? coursesEn : courses;
}

export function courseStaticParams(lang: Lang) {
  return courseList(lang).map((c) => ({ slug: c.slug }));
}

export function courseMetadata(lang: Lang, slug: string) {
  const course = courseList(lang).find((c) => c.slug === slug);
  if (!course) return {};
  const plSlug = lang === "EN" ? enToPl[slug] : slug;
  return pageMetadata({
    lang,
    plPath: `/kursy/${plSlug}`,
    title: `${course.title} - SOLVEXA GROUP`,
    description: course.description,
  });
}

export default function CoursePage({ lang, slug }: { lang: Lang; slug: string }) {
  const en = lang === "EN";
  const course = courseList(lang).find((c) => c.slug === slug);
  if (!course) notFound();

  const url = `${BASE_URL}${en ? "/en/courses" : "/kursy"}/${slug}`;
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    inLanguage: en ? "en-GB" : "pl-PL",
    url,
    provider: { "@type": "Organization", name: "Solvexa Group", url: BASE_URL },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <section className="px-6 py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={en ? "/en#kursy" : "/#kursy"}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> {en ? "All courses" : "Wszystkie kursy"}
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-xl text-white/50 mb-10">{course.subtitle}</p>
          <BookCallButton
            topic={`${en ? "Waitlist - course" : "Lista oczekujących - kurs"}: ${course.title}`}
            waitlist
            className="inline-flex px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors cursor-pointer"
          >
            {en ? "Join the waitlist" : "Zapisz się na listę oczekujących"}
          </BookCallButton>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/60 leading-relaxed">{course.description}</p>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{en ? "Who is this course for?" : "Dla kogo jest ten kurs?"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.forWhom.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-[#111]">
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

      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{en ? "Course programme" : "Program kursu"}</h2>
          <Accordion className="space-y-3">
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
                      <li key={lesson} className="flex items-center gap-3 text-sm text-white/50">
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

      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{en ? "Ready for a change?" : "Gotowy na zmianę?"}</h2>
          <p className="text-white/50 mb-8">
            {en
              ? "Write to me and we will go through the details and agree a date."
              : "Napisz do mnie - omówimy szczegóły i dopasujemy termin."}
          </p>
          <BookCallButton
            topic={`${en ? "Course" : "Kurs"}: ${course.title}`}
            className="inline-flex px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors cursor-pointer"
          >
            {en ? "Book a free call" : "Umów bezpłatną rozmowę"}
          </BookCallButton>
        </div>
      </section>
    </main>
  );
}
