"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const items = t[lang].stats.items;

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-5 py-3"
            style={{ willChange: "opacity, transform" }}
          >
            <span className="text-xl font-bold tracking-tight leading-none">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="text-sm text-white/70 font-medium leading-none">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
