"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// SVG grid tile as a data URL — rendered via CSS, zero JS per frame
const GRID_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23a0aec0' stroke-width='1'/%3E%3C/svg%3E")`;

interface InfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const InfiniteGrid = ({ className, children }: InfiniteGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative w-full overflow-hidden bg-white", className)}
    >
      {/* Static faint grid — CSS transform animation on compositor thread */}
      <div className="absolute inset-0 z-0 opacity-[0.05] overflow-hidden pointer-events-none">
        <div
          className="grid-scroll-inner"
          style={{ backgroundImage: GRID_BG, backgroundSize: "40px 40px" }}
        />
      </div>

      {/* Mouse-reveal grid */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div
          className="grid-scroll-inner"
          style={{ backgroundImage: GRID_BG, backgroundSize: "40px 40px" }}
        />
      </motion.div>

      {/* Color blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-10%] top-[5%] w-[35%] h-[35%] rounded-full bg-orange-400/20 blur-[120px]" />
        <div className="absolute right-[15%] top-[-5%] w-[20%] h-[20%] rounded-full bg-blue-400/20 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute left-[30%] top-[40%] w-[25%] h-[25%] rounded-full bg-violet-400/15 blur-[100px]" />
      </div>

      {/* Fade-in from top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
