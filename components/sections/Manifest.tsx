"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Manifest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const tr = t[lang].manifest;

  return (
    <section ref={ref} id="manifest" className="relative bg-white py-24 overflow-hidden">
      {/* Warm top that bridges from Hero seam */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-orange-50/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="manifest-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#manifest-grid)" />
        </svg>
      </div>
      <div className="absolute right-[-10%] top-[5%] w-[35%] h-[35%] rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-8"
          >
            {tr.heading}
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">{tr.bold}</p>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">{tr.body1}</p>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">{tr.body3}</p>
          <p className="text-gray-700 text-xl leading-relaxed mb-8">{tr.body2}</p>
          <div className="grid grid-cols-2 border border-gray-200 rounded-xl overflow-hidden">
            {tr.stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "p-5",
                  i % 2 === 0 && !(i === tr.stats.length - 1 && tr.stats.length % 2 === 1) ? "border-r border-gray-200" : "",
                  i < tr.stats.length - (tr.stats.length % 2 === 1 ? 1 : 2) ? "border-b border-gray-200" : "",
                  i === tr.stats.length - 1 && tr.stats.length % 2 === 1 ? "col-span-2" : "",
                ].join(" ").trim()}
              >
                <div className="text-2xl font-bold text-gray-900 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-600 tracking-widest mt-1 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
