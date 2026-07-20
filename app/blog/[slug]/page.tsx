import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const postsDir = path.join(process.cwd(), "content/blog");

function getPost(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function generateStaticParams() {
  return fs.readdirSync(postsDir).map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.frontmatter.title}- SOLVEXA GROUP` };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Blog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400">
            {post.frontmatter.category}
          </span>
          <span className="text-xs text-white/30">{post.frontmatter.readTime} czytania</span>
        </div>
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>
        <div className="mt-16 pt-10 border-t border-white/8 text-center">
          <p className="text-white/50 mb-6">Chcesz porozmawiać o sprzedaży?</p>
          <Link
            href="/#kontakt"
            className="inline-flex px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            Umów rozmowę z Albertem
          </Link>
        </div>
      </div>
    </main>
  );
}
