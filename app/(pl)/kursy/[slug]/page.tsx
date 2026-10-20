import CoursePage, { courseMetadata, courseStaticParams } from "@/components/pages/CoursePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseStaticParams("PL");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return courseMetadata("PL", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CoursePage lang="PL" slug={slug} />;
}
