import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";

const BASE = "https://www.solvexagroup.co";

// Built from the same sources the routes themselves use (lib/courses.ts and
// content/blog), so adding a course or a post puts it in the sitemap
// automatically - no second list to keep in sync.
export default function sitemap(): MetadataRoute.Sitemap {
  const postsDir = path.join(process.cwd(), "content/blog");

  const posts = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(postsDir, f), "utf-8"));
      // Fall back to the file's mtime if a post has no `date` in frontmatter.
      const date = data.date
        ? new Date(data.date)
        : fs.statSync(path.join(postsDir, f)).mtime;

      return {
        url: `${BASE}/blog/${slug}`,
        lastModified: date,
        changeFrequency: "yearly" as const,
        priority: 0.5,
      };
    });

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    // Course pages are not linked from the landing page by design - the Courses
    // section is an in-place accordion and Albert delivers each course manually
    // on request. They exist as standalone landing pages for campaign traffic,
    // which is exactly why they need to be indexable.
    ...courses.map((c) => ({
      url: `${BASE}/kursy/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    ...posts,
  ];
}
