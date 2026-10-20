import { notFound } from "next/navigation";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { trainingSubpages } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(trainingSubpages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = trainingSubpages[slug];
  return data ? serviceMetadata(data) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = trainingSubpages[slug];
  if (!data) notFound();
  return <ServicePage data={data} />;
}
