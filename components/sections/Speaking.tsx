"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";
import { Lightbox } from "@/components/ui/lightbox";

const IMAGES = [
  "/images/albert-speaking-1.jpg",
  "/images/albert-speaking-2.jpg",
  "/images/albert-speaking-3.jpg",
  "/images/albert-speaking-4.jpg",
  "/images/albert-speaking-5.jpg",
  "/images/albert-speaking-6.jpg",
  "/images/albert-speaking-7.jpg",
  "/images/albert-speaking-8.jpg",
  "/images/albert-speaking-9.jpg",
];

const GAP = 16;

export default function Speaking() {
  const { lang } = useLang();
  const tr = t[lang].speaking;

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const spr = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      setSlidesPerView(spr);
      const ref = w >= 768 ? desktopRef : mobileRef;
      if (ref.current) setContainerWidth(ref.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalGroups = Math.ceil(IMAGES.length / slidesPerView);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, totalGroups - 1));
  }, [totalGroups]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev >= totalGroups - 1 ? 0 : prev + 1));
  }, [totalGroups]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? totalGroups - 1 : prev - 1));
  }, [totalGroups]);

  const imgWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (slidesPerView - 1)) / slidesPerView
      : 0;

  const translateX =
    imgWidth > 0 ? activeIndex * slidesPerView * (imgWidth + GAP) : 0;

  const imgHeight = slidesPerView === 1 ? 260 : 320;

  const track = (
    <div
      style={{
        display: "flex",
        gap: `${GAP}px`,
        transform: `translateX(-${translateX}px)`,
        transition: "transform 0.4s ease",
      }}
    >
      {IMAGES.map((src, i) => (
        <div
          key={src}
          style={{
            width:
              imgWidth > 0
                ? `${imgWidth}px`
                : `calc(${100 / slidesPerView}% - ${(GAP * (slidesPerView - 1)) / slidesPerView}px)`,
            flexShrink: 0,
            height: `${imgHeight}px`,
          }}
          className="rounded-xl overflow-hidden relative cursor-pointer group"
          onClick={() => setLightboxSrc(src)}
        >
          <Image
            src={src}
            alt="Albert Kohut - speaking event"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${i === 0 ? "object-[60%_center]" : "object-top"}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  const prevBtn = (
    <button
      onClick={goPrev}
      aria-label="Previous"
      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-colors group flex-shrink-0"
    >
      <FaArrowLeft size={15} className="text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );

  const nextBtn = (
    <button
      onClick={goNext}
      aria-label="Next"
      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-colors group flex-shrink-0"
    >
      <FaArrowRight size={15} className="text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );

  const dots = (
    <div className="flex justify-center gap-2 mt-5">
      {Array.from({ length: totalGroups }).map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          aria-label={`Slide ${i + 1}`}
          className={`w-2 h-2 rounded-full transition-colors ${
            i === activeIndex ? "bg-gray-900" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="wystapienia" className="py-16 md:py-24 px-4 md:px-6">
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3">
            {tr.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            {tr.heading}
          </h2>
          <p className="text-gray-600 text-lg lg:text-base">{tr.sub}</p>
        </div>

        {/* Desktop & Tablet: arrows on sides */}
        <div className="hidden md:flex items-center gap-4">
          {prevBtn}
          <div ref={desktopRef} className="flex-1 overflow-hidden">
            {track}
          </div>
          {nextBtn}
        </div>
        <div className="hidden md:block">{dots}</div>

        {/* Mobile: arrows and dots below */}
        <div className="md:hidden">
          <div ref={mobileRef} className="overflow-hidden w-full">
            {track}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {prevBtn}
            {nextBtn}
          </div>
          {dots}
        </div>
      </div>
    </section>
  );
}
