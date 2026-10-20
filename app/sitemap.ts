import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { trainingSubpages } from "@/lib/services";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl, alternatePath } from "@/lib/routes";

type Entry = MetadataRoute.Sitemap[number];

// Every page exists in Polish (root) and English (/en); each URL is listed with
// its hreflang twin, built from the same sources the routes use, so adding a
// course, post or service page puts both versions in the sitemap automatically.
function bilingual(
  plPath: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"],
  lastModified: Date,
): Entry[] {
  const enPath = alternatePath(plPath, "EN");
  if (!enPath) return [{ url: absoluteUrl(plPath), lastModified, changeFrequency, priority }];
  const alternates = {
    languages: {
      "pl-PL": absoluteUrl(plPath),
      "en-GB": absoluteUrl(enPath),
    },
  };
  return [plPath, enPath].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    alternates,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts("PL").flatMap((p) =>
    bilingual(`/blog/${p.slug}`, 0.5, "yearly", p.date ? new Date(p.date) : now),
  );

  return [
    ...bilingual("/", 1, "monthly", now),
    ...bilingual("/szkolenia-sprzedazowe-b2b", 0.9, "monthly", now),
    ...Object.keys(trainingSubpages).flatMap((slug) =>
      bilingual(`/szkolenia-sprzedazowe-b2b/${slug}`, 0.8, "monthly", now),
    ),
    ...bilingual("/rekrutacja-handlowcow", 0.9, "monthly", now),
    ...bilingual("/mentoring-sprzedazowy", 0.9, "monthly", now),
    // Course pages are not linked from the landing page by design - the Courses
    // section is an in-place accordion and Albert delivers each course manually
    // on request. They exist as standalone landing pages for campaign traffic,
    // which is exactly why they need to be indexable.
    ...courses.flatMap((c) => bilingual(`/kursy/${c.slug}`, 0.8, "monthly", now)),
    ...bilingual("/blog", 0.6, "weekly", now),
    ...posts,
  ];
}
