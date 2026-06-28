"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";
import { Lightbox } from "@/components/ui/lightbox";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const tr = t[lang].about;
  const ABOUT_IMAGES = [
    "/images/albert-conference.jpg",
    "/images/albert-headshot.jpg",
    "/images/albert-revolut-hoodie.jpg",
  ];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="o-mnie" ref={ref} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ willChange: "opacity, transform" }}
        >
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-xs font-semibold tracking-widest text-white bg-gray-900 uppercase px-3 py-1 rounded-full mb-3"
            >{tr.tag}</motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6"
            >
              {tr.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </motion.h2>
          </motion.div>
          <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
            <p>{tr.p1}</p>
            <p>
              {lang === "PL" ? (
                <>Przez lata pracowałem z klientami od SMB i mid-market po Enterprise, a dziś jako{" "}
                  <span className="text-gray-900 font-medium">Menedżer sprzedaży w Revolut Biznes</span> zarządzam
                  zespołem sprzedażowym i wspieram rozwój handlowców w środowisku wysokich oczekiwań
                  i szybkiego tempa wzrostu.</>
              ) : (
                <>Over the years I worked with clients from SMB and mid-market to Enterprise, and today as{" "}
                  <span className="text-gray-900 font-medium">Sales Leader at Revolut Business</span> I manage
                  a sales team and support the development of sales reps in a high-expectation, fast-growth environment.</>
              )}
            </p>
            <p>
              {lang === "PL" ? (
                <>
                  Sprzedaję i zarządzam zespołem na polskim rynku - jednym z najtrudniejszych dla Revolut Biznes na świecie. Silna pozycja lokalnych banków, kulturowa nieufność do zagranicznego fintech i złożone realia produktowe sprawiają, że każda zamknięta umowa to prawdziwy sprawdzian.{" "}
                  <span className="font-bold">Dowozimy - i właśnie tego uczę.</span>
                </>
              ) : (
                <>
                  I lead sales in Poland - one of the hardest markets for Revolut Business globally. Deep-rooted loyalty to local banks, cultural resistance to foreign fintech, and complex product realities make every closed deal a genuine test of sales craft.{" "}
                  <span className="font-bold">We deliver anyway - that is exactly what I teach.</span>
                </>
              )}
            </p>
            <p>{tr.p3}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {tr.tags.map((tag) => (
              <span key={tag} className="text-sm px-4 py-1.5 rounded-full border border-gray-900 text-gray-900 font-semibold">
                {tag}
              </span>
            ))}
          </div>

        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="relative col-span-2 rounded-2xl overflow-hidden aspect-[16/9] cursor-pointer group" onClick={() => setLightboxIndex(0)}>
            <Image src="/images/albert-conference.jpg" alt="Albert Kohut" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group" onClick={() => setLightboxIndex(1)}>
            <Image src="/images/albert-headshot.jpg" alt="Albert Kohut" fill sizes="25vw" className="object-cover object-top transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group" onClick={() => setLightboxIndex(2)}>
            <Image src="/images/albert-revolut-hoodie.jpg" alt="Albert Kohut" fill sizes="25vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        </motion.div>
        <Lightbox
          src={lightboxIndex !== null ? ABOUT_IMAGES[lightboxIndex] : null}
          images={ABOUT_IMAGES}
          index={lightboxIndex ?? 0}
          onNavigate={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      </div>
    </section>
  );
}
