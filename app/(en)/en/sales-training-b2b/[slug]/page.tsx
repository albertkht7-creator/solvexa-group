import { notFound } from "next/navigation";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { trainingSubpagesEn } from "@/lib/services-en";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(trainingSubpagesEn).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = trainingSubpagesEn[slug];
  return data ? serviceMetadata(data) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = trainingSubpagesEn[slug];
  if (!data) notFound();
  return <ServicePage data={data} />;
}
