"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
  images?: string[];
  index?: number;
  onNavigate?: (index: number) => void;
}

export function Lightbox({ src, alt = "", onClose, images, index = 0, onNavigate }: LightboxProps) {
  const hasNav = !!(images && images.length > 1 && onNavigate);

  const goPrev = () => {
    if (!hasNav || !images) return;
    onNavigate!((index - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasNav || !images) return;
    onNavigate!((index + 1) % images.length);
  };

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (!hasNav || !images) return;
      if (e.key === "ArrowLeft") onNavigate!((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate!((index + 1) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [src, onClose, index, images, onNavigate, hasNav]);

  if (!src) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image container — all buttons are inside this so they never overflow the viewport */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close — inside image container, top-right */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xl transition-colors z-10"
          aria-label="Close"
        >
          ×
        </button>

        {/* Left arrow — inside image container */}
        {hasNav && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center transition-colors shadow-lg z-10 cursor-pointer select-none"
          >
            ‹
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto", objectFit: "contain", display: "block" }}
          className="rounded-xl shadow-2xl"
        />

        {/* Right arrow — inside image container */}
        {hasNav && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center transition-colors shadow-lg z-10 cursor-pointer select-none"
          >
            ›
          </button>
        )}

        {/* Counter */}
        {hasNav && images && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
