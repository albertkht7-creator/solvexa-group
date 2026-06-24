"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const headerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function WhyItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const tr = t[lang].whyItWorks;

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={headerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-10 md:mb-14" style={{ willChange: "opacity, transform" }}>
          <motion.span variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3">
            {tr.tag}
          </motion.span>
          <motion.h2 variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="text-5xl md:text-6xl font-bold text-gray-900 mt-3">
            {tr.heading}
          </motion.h2>
        </motion.div>

        <div className="divide-y divide-gray-100">
          {tr.items.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="group py-6 md:py-7 border-b border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0 md:hidden">
                <span className="text-sm font-mono text-gray-400 mt-1">{p.number}</span>
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {i === 2 ? (
                    lang === "PL" ? <>Uczę tego, <span className="italic text-gray-500">co robię dziś.</span></> : <>I teach <span className="italic text-gray-500">what I do today.</span></>
                  ) : p.title}
                </h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed md:hidden pl-9">{p.body}</p>

              <div className="hidden md:grid md:grid-cols-[3rem_1fr_400px] gap-16 items-center">
                <span className="text-sm font-mono text-gray-400">{p.number}</span>
                <h3 className="text-3xl font-bold leading-snug text-gray-900">
                  {i === 2 ? (
                    lang === "PL" ? <>Uczę tego,{" "}<span className="italic text-gray-500">co robię dziś.</span></> : <>I teach{" "}<span className="italic text-gray-500">what I do today.</span></>
                  ) : p.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
