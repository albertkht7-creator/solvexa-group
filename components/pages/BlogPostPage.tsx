import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import { getPost } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { BASE_URL, type Lang } from "@/lib/routes";

export function blogPostMetadata(lang: Lang, slug: string) {
  const post = getPost(lang, slug);
  if (!post) return {};
  const plSlug = lang === "EN" ? String(post.frontmatter.plSlug ?? "") : slug;
  return pageMetadata({
    lang,
    plPath: `/blog/${plSlug}`,
    title: `${post.frontmatter.title} - SOLVEXA GROUP`,
    description: post.frontmatter.excerpt ?? "",
    type: "article",
  });
}

export default function BlogPostPage({ lang, slug }: { lang: Lang; slug: string }) {
  const en = lang === "EN";
  const post = getPost(lang, slug);
  if (!post) notFound();

  const url = `${BASE_URL}${en ? "/en" : ""}/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt ?? "",
    datePublished: post.frontmatter.date ?? undefined,
    inLanguage: en ? "en-GB" : "pl-PL",
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: "Albert Kohut", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Solvexa Group",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/solvexa-logo.png` },
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-2xl mx-auto">
        <Link
          href={en ? "/en/blog" : "/blog"}
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Blog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400">{post.frontmatter.category}</span>
          <span className="text-xs text-white/30">
            {post.frontmatter.readTime} {en ? "read" : "czytania"}
          </span>
        </div>
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>
        <div className="mt-16 pt-10 border-t border-white/8 text-center">
          <p className="text-white/50 mb-6">{en ? "Want to talk about sales?" : "Chcesz porozmawiać o sprzedaży?"}</p>
          <BookCallButton
            topic={`Blog: ${post.frontmatter.title}`}
            className="inline-flex px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer"
          >
            {en ? "Book a call with Albert" : "Umów rozmowę z Albertem"}
          </BookCallButton>
        </div>
      </div>
    </main>
  );
}
