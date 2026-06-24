import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "cold-calling-bledy",
    category: "Sprzedaż",
    title: "5 błędów cold callingu, które zabijają Twoje wyniki",
    excerpt: "Większość handlowców popełnia te same błędy. Oto jak je wyeliminować.",
    readTime: "5 min",
    date: "2026-05-20",
  },
  {
    slug: "pipeline-ktory-konwertuje",
    category: "Prospecting",
    title: "Jak zbudować pipeline, który naprawdę konwertuje",
    excerpt: "Nie chodzi o ilość leadów. Chodzi o właściwych klientów, we właściwym czasie.",
    readTime: "7 min",
    date: "2026-05-10",
  },
  {
    slug: "negocjacje-oferty",
    category: "Kariera",
    title: "Negocjacje oferty pracy w sprzedaży - kompletny przewodnik",
    excerpt: "Większość kandydatów zostawia pieniądze na stole. Dowiedz się jak negocjować.",
    readTime: "8 min",
    date: "2026-05-01",
  },
];

export const metadata = {
  title: "Blog - SOLVEXA GROUP",
  description: "Praktyczna wiedza sprzedażowa od Alberta Kohuta.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Blog</span>
        <h1 className="text-5xl font-bold text-white mt-3 mb-16">Wiedza w praktyce.</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30">{post.readTime} czytania</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-1">{post.title}</h2>
                <p className="text-sm text-white/40">{post.excerpt}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-white/30 group-hover:text-white transition-colors flex-shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
