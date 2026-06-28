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
      {/* X close — fixed top-right, above overlay */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xl transition-colors z-[10000]"
        aria-label="Close"
      >
        ×
      </button>

      {/* Left arrow — fixed to left edge of screen */}
      {hasNav && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous"
          className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center transition-colors shadow-lg z-[10000] cursor-pointer select-none"
        >
          ‹
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-[80vw] max-h-[85vh] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "80vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain", display: "block" }}
          className="rounded-xl shadow-2xl"
        />

        {/* Counter stays inside image container */}
        {hasNav && images && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
            {index + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Right arrow — fixed to right edge of screen */}
      {hasNav && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next"
          className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center transition-colors shadow-lg z-[10000] cursor-pointer select-none"
        >
          ›
        </button>
      )}
    </div>,
    document.body
  );
}
