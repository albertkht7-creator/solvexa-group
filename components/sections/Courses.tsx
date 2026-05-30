"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { courses } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kursy" ref={ref} className="bg-[#0a0a0a]">
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase block mb-3">
              Kursy online
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Kursy, które sprzedają.
            </h2>
          </motion.div>
        }
      >
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-xl border border-white/10 bg-[#1a1a1a] hover:border-white/25 transition-all duration-300 group"
            >
              <div>
                <span className="text-white/20 font-mono text-xs">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{course.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{course.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/kursy/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group-hover:gap-3"
              >
                Więcej <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
