"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shaderVisible, setShaderVisible] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 1500));
      setShaderVisible(true);
      await new Promise((r) => setTimeout(r, 500));
      await animate(
        "#hero-headline",
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.8, ease: "easeOut" }
      );
      await animate(
        "#hero-sub",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, ease: "easeOut", delay: 0.1 }
      );
      await animate(
        "#hero-cta",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0.1 }
      );
    };
    sequence();
  }, [animate]);

  return (
    <section ref={scope} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/videos/rocket-launch.mp4"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white" />

      {/* Shader overlay */}
      {shaderVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ShaderAnimation />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div id="hero-headline" initial={{ opacity: 0 }}>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-4">
            Sky is the limit.
          </h1>
        </motion.div>

        <motion.p
          id="hero-sub"
          initial={{ opacity: 0 }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Z nami osiągniesz cele sprzedażowe, do których dążysz.
        </motion.p>

        <motion.div
          id="hero-cta"
          initial={{ opacity: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#kursy"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors"
          >
            Sprawdź kursy
          </Link>
          <Link
            href="/#kontakt"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:border-white/60 hover:bg-white/5 transition-colors"
          >
            Umów bezpłatną konsultację
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
