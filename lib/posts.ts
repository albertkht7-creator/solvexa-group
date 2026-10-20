import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Lang } from "@/lib/routes";

export interface PostMeta {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  plSlug: string;
}

function dirFor(lang: Lang) {
  return path.join(process.cwd(), lang === "EN" ? "content/blog-en" : "content/blog");
}

// Single source of truth for the blog listings. The landing-page preview, the
// blog index, the posts themselves and the sitemap all read from here, so adding
// an .mdx file to content/blog (Polish) and content/blog-en (English, with a
// `plSlug` frontmatter key) is all it takes to publish a post in both languages.
export function getPostSlugs(lang: Lang): string[] {
  return fs
    .readdirSync(dirFor(lang))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(lang: Lang, slug: string) {
  const filePath = path.join(dirFor(lang), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));
  return { frontmatter: data, content };
}

export function getAllPosts(lang: Lang = "PL"): PostMeta[] {
  return getPostSlugs(lang)
    .map((slug) => {
      const post = getPost(lang, slug)!;
      const data = post.frontmatter;
      return {
        slug,
        title: data.title ?? slug,
        category: data.category ?? "",
        excerpt: data.excerpt ?? "",
        readTime: data.readTime ?? "",
        date: data.date ?? "",
        plSlug: lang === "EN" ? (data.plSlug ?? "") : slug,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}
