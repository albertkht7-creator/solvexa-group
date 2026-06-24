"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, UserCheck, Bot, Rocket, ChevronDown } from "lucide-react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const icons = [Target, Users, UserCheck, Bot, Rocket];

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { openModal } = useContactModal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLang();
  useEffect(() => { setOpenIndex(null); }, [lang]);
  const tr = t[lang].services;
  const services = tr.items.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <section id="uslugi" ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-14"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.span variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3">{tr.tag}</motion.span>
          <motion.h2 variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">{tr.heading}</motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          {services.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col p-5 md:p-8 rounded-2xl border bg-white transition-all duration-300 ease-out ${
                  isOpen
                    ? "h-auto border-gray-400 shadow-md"
                    : "h-[460px] border-gray-200 hover:border-gray-400 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4 mb-4 md:mb-6">
                  <span className="text-gray-600 font-mono text-sm">{s.number}</span>
                  <s.icon className="text-gray-600 mt-0.5" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm md:text-base">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-5 md:mb-8">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors mt-auto py-2 border-t border-gray-100 cursor-pointer"
                >
                  <span>{isOpen ? tr.collapse : tr.expand}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="pt-4 mt-2">
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      {tr.sectionLabel}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {s.bullets.map((b) => (
                        <li key={b} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-gray-400 mt-0.5 flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openModal(s.modalTopic)}
                      className="w-full py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors text-center cursor-pointer"
                    >
                      {tr.cta} →
                    </button>
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
