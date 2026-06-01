"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kursy" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-3">
            Kursy online
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Kursy, które sprzedają.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-400 transition-all duration-300 group"
            >
              <div>
                <span className="text-gray-300 font-mono text-xs">0{i + 1}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{course.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/kursy/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group-hover:gap-3"
              >
                Więcej <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
