"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shaderVisible, setShaderVisible] = useState(false);
  const [scope, animate] = useAnimate();
  const { lang } = useLang();
  const { openModal } = useContactModal();

  useEffect(() => {
    let cancelled = false;
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 1200));
      if (cancelled) return;
      setShaderVisible(true);
      await new Promise((r) => setTimeout(r, 400));
      if (cancelled) return;
      await animate(
        "#hero-headline",
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.8, ease: "easeOut", delay: 0.05 }
      );
      if (cancelled) return;
      await animate(
        "#hero-sub",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, ease: "easeOut", delay: 0.05 }
      );
      if (cancelled) return;
      await animate(
        "#hero-cta",
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0.05 }
      );
    };
    sequence();
    return () => { cancelled = true; };
  }, [animate]);

  return (
    <section ref={scope} className="relative h-screen w-full overflow-hidden flex items-center pt-20">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover scale-110 motion-reduce:hidden"
        style={{ willChange: "transform" }}
        src="/videos/rocket-launch.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

      {/* Bottom fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />

      {/* Shader overlay */}
      {shaderVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ShaderAnimation />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full pt-24">

        {/* Short H1 */}
        <motion.div id="hero-headline" initial={{ opacity: 0 }} className="mb-6" style={{ willChange: "opacity, transform" }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug tracking-tight">
            {lang === "PL"
              ? "Szkolenia sprzedażowe B2B oparte na 15 latach praktyki"
              : "B2B sales training built on 15 years of practice"}
          </h1>
        </motion.div>

        {/* Value statement + original long text demoted to subtitle */}
        <motion.div id="hero-sub" initial={{ opacity: 0 }} className="space-y-4 max-w-2xl mb-8">
          <p className="text-xl md:text-2xl font-medium text-white/90">
            {lang === "PL"
              ? "Dla zespołów i handlowców, którzy chcą sprzedawać więcej - bez teorii, tylko sprawdzone metody."
              : "For teams and sales reps who want to sell more - no theory, just proven methods."}
          </p>
          <p className="text-lg text-white/90 leading-relaxed" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {lang === "PL" ? (
              <>
                Czy wiesz, że większość trenerów sprzedażowych nigdy nie pracowała w sprzedaży?{" "}
                Jedyne, co sprzedali - to{" "}
                <span className="text-orange-400">własne szkolenia.</span>{" "}
                Ja sprzedaję każdego dnia od ponad 15 lat. Nie z podręcznika - z doświadczenia.
              </>
            ) : (
              <>
                Did you know that most sales trainers have never actually worked in sales?{" "}
                The only thing they&apos;ve ever sold -{" "}
                <span className="text-orange-400">is their own training.</span>{" "}
                I&apos;ve been selling every day for over 15 years. Not from a textbook - from experience.
              </>
            )}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div id="hero-cta" initial={{ opacity: 0 }}>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            {t[lang].nav.cta}
          </button>
          <p className="mt-3 text-sm text-white">
            {lang === "PL"
              ? "30 minut, online (Google Meet), bez zobowiązań."
              : "30 minutes, online (Google Meet), no commitment."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
