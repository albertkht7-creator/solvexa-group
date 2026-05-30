"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-mnie" ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Canvas reveal background */}
      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={[[255, 255, 255]]}
            dotSize={2}
            showGradient={true}
            reverse={false}
          />
        </motion.div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">O mnie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            15 lat w okopach<br />sprzedaży B2B.
          </h2>
          <div className="space-y-4 text-white/60 text-base leading-relaxed">
            <p>
              Nazywam się <span className="text-white font-medium">Albert Kohut</span> i od ponad 15 lat pracuję
              w sprzedaży B2B, budując wyniki, zespoły i procesy, które realnie dowożą przychód.
            </p>
            <p>
              Przez lata pracowałem z klientami od SMB i mid-market po Enterprise, a dziś jako{" "}
              <span className="text-white font-medium">Sales Manager w Revolut Business</span> zarządzam
              zespołem sprzedażowym i wspieram rozwój handlowców w środowisku wysokich oczekiwań
              i szybkiego tempa wzrostu.
            </p>
            <p>
              Równolegle rozwijam własną praktykę consultingowo-szkoleniową, pomagając firmom sprzedawać
              skuteczniej, budować lepsze playbooki i rozwijać ludzi w praktyczny, wdrożeniowy sposób.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Sales Manager @ Revolut", "15+ lat B2B", "500+ przeszkolonych", "Google for Startups Speaker"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-speaking.jpg"
              alt="Albert Kohut podczas szkolenia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-headshot.jpg"
              alt="Albert Kohut"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-revolut-office.jpg"
              alt="Albert Kohut przy Revolut"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-google-startups.jpg"
              alt="Albert Kohut — Google for Startups"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-revolut-event.jpg"
              alt="Albert Kohut — Revolut event"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
