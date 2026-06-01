"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { label: "Sales Manager", sub: "Revolut Business" },
  { label: "Speaker", sub: "Google for Startups" },
  { label: "Warsaw Startup Club", sub: "#7 Optimizing Sales" },
  { label: "15+", sub: "lat w sprzedaży B2B" },
  { label: "500+", sub: "przeszkolonych handlowców" },
];

export default function CredibilityStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-y border-gray-200 py-10 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-nowrap items-center justify-between gap-6 overflow-x-auto"
      >
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-gray-900 font-bold text-xl md:text-2xl tracking-tight">{b.label}</span>
            <span className="text-gray-400 text-sm mt-1">{b.sub}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
