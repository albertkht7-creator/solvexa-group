import BlogIndexPage, { blogIndexMetadata } from "@/components/pages/BlogIndexPage";

export const metadata = blogIndexMetadata("EN");

export default function Page() {
  return <BlogIndexPage lang="EN" />;
}
