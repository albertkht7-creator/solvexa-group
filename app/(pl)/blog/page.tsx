import BlogIndexPage, { blogIndexMetadata } from "@/components/pages/BlogIndexPage";

export const metadata = blogIndexMetadata("PL");

export default function Page() {
  return <BlogIndexPage lang="PL" />;
}
