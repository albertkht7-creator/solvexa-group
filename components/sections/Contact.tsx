"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useContactModal();
  const { lang } = useLang();
  const tr = t[lang].contact;

  return (
    <section id="kontakt" ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ willChange: "opacity, transform" }}
        >
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3"
            >
              {tr.tag}
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6"
            >
              {tr.heading}
            </motion.h2>
          </motion.div>
          <p className="text-gray-700 text-base leading-relaxed mb-10">{tr.body}</p>
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/albert-quote-bg.jpg"
                alt="Albert Kohut"
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-base">Albert Kohut</p>
              <p className="text-base text-gray-700">{tr.role}</p>
              <a href="tel:+00000000000" className="text-sm text-gray-500 hover:text-gray-900 transition-colors mt-0.5 inline-block">
                +00 000 000 000
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right- CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="space-y-5 text-gray-900">
            <div className="flex items-start gap-4">
              <span className="text-sm font-mono text-gray-700 mt-0.5 w-6 flex-shrink-0">01</span>
              <p className="text-base leading-relaxed">{tr.step1}</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sm font-mono text-gray-700 mt-0.5 w-6 flex-shrink-0">02</span>
              <p className="text-base leading-relaxed">{tr.step2}</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sm font-mono text-gray-700 mt-0.5 w-6 flex-shrink-0">03</span>
              <p className="text-base leading-relaxed">{tr.step3}</p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="mt-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-base hover:bg-gray-700 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 ease-out"
          >
            {tr.cta}
          </button>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              {lang === "PL"
                ? "30 minut, online (Google Meet), bez zobowiązań."
                : "30 minutes, online (Google Meet), no commitment."}
            </p>
            <p className="text-sm text-gray-700">{tr.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
