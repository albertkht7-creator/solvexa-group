import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
}

const postsDir = path.join(process.cwd(), "content/blog");

// Single source of truth for the blog listings. Both the landing-page
// preview and the /blog page read from here, so adding an .mdx file to
// content/blog is all it takes to publish a post - no hardcoded arrays to
// keep in sync (the sitemap already reads the same directory).
export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(postsDir, f), "utf-8"));
      return {
        slug,
        title: data.title ?? slug,
        category: data.category ?? "",
        excerpt: data.excerpt ?? "",
        readTime: data.readTime ?? "",
        date: data.date ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}
