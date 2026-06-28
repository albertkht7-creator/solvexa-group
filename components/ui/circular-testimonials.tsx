"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Record<string, string>;
  fontSizes?: Record<string, string>;
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
}: CircularTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const length = testimonials.length;
  const active = testimonials[activeIndex];

  const clearAuto = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % length);
      }, 5000);
    }
    return clearAuto;
  }, [autoplay, length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
    clearAuto();
  }, [length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
    clearAuto();
  }, [length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  const card = (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col min-h-[260px] shadow-sm"
      >
        <span className="text-6xl text-[#B8960C] leading-none mb-4 font-serif select-none">&ldquo;</span>
        <p className="text-gray-700 leading-relaxed flex-1 mb-6 text-[15px] md:text-base">
          {active.quote}
        </p>
        <div>
          <p className="font-bold text-gray-900 text-[15px] md:text-base">{active.name}</p>
          <p className="text-[13px] md:text-sm text-gray-400">{active.role} · {active.company}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const prevBtn = (
    <button
      onClick={handlePrev}
      aria-label="Previous testimonial"
      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-colors group flex-shrink-0"
    >
      <FaArrowLeft size={15} className="text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );

  const nextBtn = (
    <button
      onClick={handleNext}
      aria-label="Next testimonial"
      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-colors group flex-shrink-0"
    >
      <FaArrowRight size={15} className="text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );

  return (
    <div className="w-full">
      {/* Desktop: arrows on sides */}
      <div className="hidden md:flex items-center gap-6 max-w-3xl mx-auto">
        {prevBtn}
        <div className="flex-1">{card}</div>
        {nextBtn}
      </div>

      {/* Mobile: arrows below */}
      <div className="md:hidden flex flex-col gap-4">
        {card}
        <div className="flex justify-center gap-4">
          {prevBtn}
          {nextBtn}
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
