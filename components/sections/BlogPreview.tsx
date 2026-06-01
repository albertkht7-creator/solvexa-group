"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "cold-calling-bledy",
    category: "Sprzedaż",
    title: "5 błędów cold callingu, które zabijają Twoje wyniki",
    excerpt: "Większość handlowców popełnia te same błędy. Oto jak je wyeliminować i zacząć słyszeć 'tak' częściej niż 'nie'.",
    readTime: "5 min",
  },
  {
    slug: "pipeline-ktory-konwertuje",
    category: "Prospecting",
    title: "Jak zbudować pipeline, który naprawdę konwertuje",
    excerpt: "Nie chodzi o ilość leadów. Chodzi o właściwych klientów, we właściwym czasie, z właściwym komunikatem.",
    readTime: "7 min",
  },
  {
    slug: "negocjacje-oferty",
    category: "Kariera",
    title: "Negocjacje oferty pracy w sprzedaży — kompletny przewodnik",
    excerpt: "Większość kandydatów zostawia pieniądze na stole. Dowiedz się jak negocjować wynagrodzenie bez strachu.",
    readTime: "8 min",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Wiedza w praktyce.</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Wszystkie artykuły <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-400 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime} czytania</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group-hover:gap-3"
              >
                Czytaj więcej <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Wszystkie artykuły →
          </Link>
        </div>
      </div>
    </section>
  );
}
