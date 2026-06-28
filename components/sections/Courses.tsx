"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { courses, bundles } from "@/lib/courses";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const { openModal } = useContactModal();
  const { lang } = useLang();
  useEffect(() => { setOpenSlug(null); }, [lang]);
  const tr = t[lang].courses;
  const courseList = lang === "EN" && "items" in t.EN.courses && t.EN.courses.items
    ? t.EN.courses.items
    : courses;
  const bundleList = lang === "EN" && "bundle" in t.EN.courses
    ? [t.EN.courses.bundle]
    : bundles;

  const badgeClass = "inline-flex items-center h-7 px-3 text-xs leading-none rounded-full bg-gray-100 text-gray-600 whitespace-nowrap";

  const forWhomBadge: Record<string, string> = {
    "cold-calling": lang === "PL" ? "handlowca lub całego zespołu" : "individual reps or full teams",
    "prospecting": lang === "PL" ? "handlowca lub całego zespołu" : "individual reps or full teams",
    "pierwsze-spotkanie": lang === "PL" ? "handlowca lub całego zespołu" : "individual reps or full teams",
    "praca-w-sprzedazy": lang === "PL" ? "handlowca lub całego zespołu" : "individual reps or full teams",
    "zmien-swoje-zycie-zawodowe": lang === "PL" ? "osób zmieniających karierę" : "career changers",
  };

  return (
    <section id="kursy" ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-14"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.span
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3"
          >
            {tr.tag}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight"
          >
            {tr.heading}
          </motion.h2>
        </motion.div>

        {/* Bundle */}
        {bundleList.map((bundle) => (
          <motion.div
            key={bundle.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 relative rounded-2xl border-2 border-gray-900 bg-gray-900 text-white p-6 md:p-8 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <span className="inline-block text-xs font-semibold tracking-widest bg-orange-500 text-white uppercase px-3 py-1 rounded-full mb-3">
                  {bundle.tag}- {lang === "EN" ? "Sale" : "Promocja"}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{bundle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{bundle.description}</p>
                <div className="flex flex-wrap gap-2">
                  {bundle.includes.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                      ✓ {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/80">
                    {lang === "PL" ? "Format: wideo" : "Format: video"}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/80">
                    {lang === "PL" ? "Dla: zespołów sprzedażowych" : "For: sales teams"}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/80">
                    {lang === "PL" ? "Dostęp: 3 miesiące" : "Access: 3 months"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-gray-500 text-xs line-through">{bundle.listPrice}</span>
                  <span className="text-3xl md:text-4xl font-bold text-white">{bundle.salePrice}</span>
                </div>
                <button
                  onClick={() => openModal(`${lang === "EN" ? "Bundle order" : "Zamówienie pakietu"}: ${bundle.title}`)}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {lang === "EN" ? "Order bundle →" : "Zamów pakiet →"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {courseList.map((course, i) => {
            const isOpen = openSlug === course.slug;
            return (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={[
                  "flex flex-col p-6 rounded-2xl border bg-white transition-all duration-300 ease-out",
                  isOpen
                    ? "border-gray-400 shadow-md"
                    : "min-h-[475px] border-gray-200 hover:border-gray-400 hover:-translate-y-1 hover:shadow-md",
                ].join(" ")}
              >
                <div>
                  <span className="text-gray-600 font-mono text-xs">0{i + 1}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {course.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5 mb-4 items-start">
                    <span className={badgeClass}>
                      {lang === "PL" ? "Format: wideo" : "Format: video"}
                    </span>
                    <span className={badgeClass}>
                      {lang === "PL" ? "Dla:" : "For:"} {forWhomBadge[course.slug] ?? (lang === "PL" ? "handlowca lub całego zespołu" : "individual reps or full teams")}
                    </span>
                    <span className={badgeClass}>
                      {lang === "PL" ? "Dostęp: 3 miesiące" : "Access: 3 months"}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  {"price" in course && course.price && (
                    <div className="flex items-end gap-2 mb-3">
                      {"originalPrice" in course && course.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mb-0.5">{course.originalPrice}</span>
                      )}
                      <span className="text-xl font-bold text-gray-900">{course.price}</span>
                      {"originalPrice" in course && course.originalPrice && (
                        <span className="text-xs font-semibold text-[#B8960C] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full mb-0.5">
                          {lang === "EN" ? "Sale" : "Promocja"}
                        </span>
                      )}
                    </div>
                  )}
                  <button
                    onClick={() => setOpenSlug(isOpen ? null : course.slug)}
                    className="w-full flex items-center justify-between gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                  >
                    <span>{isOpen ? tr.collapse : tr.expand}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="pt-5 mt-5 border-t border-gray-100 space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{course.subtitle}</p>
                    <div className="space-y-2">
                      {course.modules.map((mod) => (
                        <div key={mod.title}>
                          <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide">{mod.title}</p>
                          <ul className="mt-1 space-y-0.5">
                            {mod.lessons.map((lesson) => (
                              <li key={lesson} className="text-xs text-gray-600 flex gap-1.5">
                                <span className="text-gray-400 mt-0.5">›</span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => openModal(`Zamówienie kursu: ${course.title}`)}
                        className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
                      >
                        {tr.cta} →
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
