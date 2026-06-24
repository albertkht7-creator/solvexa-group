"use client";
import { useLang } from "@/lib/language-context";

export default function IntroVideo() {
  const { lang } = useLang();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-4">
          {lang === "PL" ? "WIDEO" : "VIDEO"}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-10">
          {lang === "PL" ? "Poznaj mnie w 60 sekund" : "Get to know me in 60 seconds"}
        </h2>
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            controls
            preload="none"
            poster="/images/albert-speaking-1.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
