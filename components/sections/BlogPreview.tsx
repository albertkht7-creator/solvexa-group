"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/language-context";
import type { PostMeta } from "@/lib/posts";

export default function BlogPreview({ posts }: { posts: PostMeta[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const pl = lang === "PL";

  return (
    <section id="blog" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              {pl ? "Wiedza w praktyce." : "Knowledge in practice."}
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
            {pl ? "Wszystkie artykuły" : "All articles"} <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-white/30">
                  {post.readTime} {pl ? "czytania" : "read"}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group-hover:gap-3"
              >
                {pl ? "Czytaj więcej" : "Read more"} <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">
            {pl ? "Wszystkie artykuły →" : "All articles →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
