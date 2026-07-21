import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog - SOLVEXA GROUP",
  description: "Praktyczna wiedza sprzedażowa od Alberta Kohuta.",
};

export default function BlogPage() {
  const posts = getAllPosts();
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
