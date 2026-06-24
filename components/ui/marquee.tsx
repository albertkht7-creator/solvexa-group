"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export function Marquee({ children, duration = 30, className = "" }: MarqueeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`overflow-hidden ${className}`}
    >
      {/* CSS animation runs on compositor thread — no JS per frame */}
      <div
        className="flex w-max marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex items-center gap-12 pr-12">{children}</div>
        <div className="flex items-center gap-12 pr-12" aria-hidden>{children}</div>
      </div>
    </motion.div>
  );
}
