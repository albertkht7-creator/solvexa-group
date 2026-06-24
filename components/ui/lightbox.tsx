"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  if (!src) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-black/85 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xl transition-colors"
        aria-label="Close"
      >
        ×
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto", objectFit: "contain" }}
        className="rounded-xl shadow-2xl"
      />
    </div>,
    document.body
  );
}
