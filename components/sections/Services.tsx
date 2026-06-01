"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Target,
    title: "Szkolenia sprzedażowe",
    description:
      "Praktyczne szkolenia dla handlowców i zespołów sprzedaży. Skupione na tym, co realnie wpływa na wynik — od pierwszego kontaktu po zamknięcie deala.",
    tags: ["Onsite", "Online", "Team", "Cold calling", "Closing"],
  },
  {
    number: "02",
    icon: Users,
    title: "Consulting & Mentoring",
    description:
      "Regularne wsparcie dla CEO, sales managerów i dyrektorów sprzedaży. Diagnoza, plan działania, poprawa procesu, rozwój zespołu — z jasną odpowiedzialnością za wynik.",
    tags: ["1:1", "CEO", "Sales Director", "Playbook", "Skalowanie"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="uslugi" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Usługi</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Jak mogę pomóc.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-400 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-gray-300 font-mono text-sm">{s.number}</span>
                <s.icon className="text-gray-400 mt-0.5" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/#kontakt"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4"
              >
                Dowiedz się więcej →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
