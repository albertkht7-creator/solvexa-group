"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tr = t[lang].testimonials;
  const tag = lang === "PL" ? "Opinie" : "Testimonials";
  const heading = lang === "PL" ? "Co mówią klienci?" : "What clients say";

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalGroups = Math.ceil(tr.items.length / slidesPerView);

  useEffect(() => {
    setCurrentGroup((prev) => Math.min(prev, totalGroups - 1));
  }, [slidesPerView, totalGroups]);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev >= totalGroups - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate, totalGroups]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleManualNav = useCallback((fn: () => void) => {
    setAutoRotate(false);
    fn();
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setAutoRotate(true), 8000);
  }, []);

  const goNext = useCallback(() => {
    handleManualNav(() =>
      setCurrentGroup((prev) => (prev >= totalGroups - 1 ? 0 : prev + 1))
    );
  }, [handleManualNav, totalGroups]);

  const goPrev = useCallback(() => {
    handleManualNav(() =>
      setCurrentGroup((prev) => (prev <= 0 ? totalGroups - 1 : prev - 1))
    );
  }, [handleManualNav, totalGroups]);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-14"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3"
          >{tag}</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-3"
          >{heading}</motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentGroup * 100}%)`,
                transition: "transform 0.4s ease",
              }}
            >
              {tr.items.map((item) => (
                <div
                  key={item.name}
                  style={{ width: `${100 / slidesPerView}%`, flexShrink: 0 }}
                  className="px-2"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm h-full">
                    <span className="text-6xl text-orange-500 leading-none mb-4 font-serif select-none">&ldquo;</span>
                    <p className="text-gray-700 leading-relaxed flex-1 mb-6 text-[15px]">{item.quote}</p>
                    <div>
                      <p className="font-bold text-gray-900 text-[15px]">{item.name}</p>
                      <p className="text-[13px] text-gray-400">{item.role} · {item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalGroups }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManualNav(() => setCurrentGroup(i))}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentGroup ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  aria-label={`Group ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
