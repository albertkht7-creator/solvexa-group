"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote: "Audyt otworzył nam oczy na dziury, które kosztowały nas setki tysięcy złotych rocznie. Albert nie przychodzi z gotowymi odpowiedziami — on zadaje właściwe pytania.",
    name: "Marcin W.",
    designation: "CEO, branża SaaS",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote: "Kurs cold callingu to najlepsza inwestycja w swój rozwój jaką zrobiłem w tym roku. Konkretne skrypty, konkretne obiekcje, konkretne wyniki.",
    name: "Tomasz K.",
    designation: "Senior Account Executive",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    quote: "Albert nie uczy teorii. Każda sesja to konkretne narzędzia, które wdrożyłem już następnego dnia. Mój pipeline podwoił się w ciągu dwóch miesięcy.",
    name: "Karolina M.",
    designation: "Sales Manager, fintech",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote: "Mój pipeline wzrósł o 40% w ciągu 8 tygodni od mentoringu. Nareszcie mam strukturę, a nie chaos w głowie.",
    name: "Paweł R.",
    designation: "Founder, B2B startup",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    quote: "Nareszcie ktoś, kto tłumaczy sprzedaż tak jak działa w prawdziwym świecie, nie z książki. Polecam każdemu handlowcowi.",
    name: "Agnieszka T.",
    designation: "Key Account Manager",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Opinie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Co mówią klienci.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#ffffff",
              designation: "#9ca3af",
              testimony: "#d1d5db",
              arrowBackground: "#1a1a1a",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#3b82f6",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.875rem",
              quote: "1rem",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
