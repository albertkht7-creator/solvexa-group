"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#C4A882", "#BBA07A", "#D4BC9E", "#C8B09A", "#E0CDB8"];

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

const particles = Array.from({ length: 10 }, (_, index) => ({
  size: 80 + Math.floor(seededRandom(index + 1) * 120),
  color: COLORS[Math.floor(seededRandom(index + 11) * COLORS.length)],
  opacity: 0.35 + seededRandom(index + 21) * 0.2,
  left: 5 + seededRandom(index + 31) * 90,
  top: 20 + seededRandom(index + 41) * 60,
  duration: 4 + seededRandom(index + 51) * 3,
  delay: seededRandom(index + 61) * 3,
}));

export function SmokeTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const offset = window.scrollY * 0.15;
      containerRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes smokeDrift {
          0%   { transform: translateY(0px);   opacity: var(--op-start); }
          100% { transform: translateY(-20px); opacity: var(--op-end); }
        }
      `}</style>
      <div
        className="relative w-full pointer-events-none"
        style={{ height: 0, zIndex: 20 }}
      >
        <div
          ref={containerRef}
          className="absolute left-0 right-0"
          style={{ top: "-60px", height: "180px" }}
        >
          {particles.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: p.color,
                filter: "blur(40px)",
                opacity: p.opacity,
                animation: `smokeDrift ${p.duration}s ${p.delay}s infinite alternate ease-in-out`,
                ["--op-start" as string]: p.opacity,
                ["--op-end" as string]: p.opacity * 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
