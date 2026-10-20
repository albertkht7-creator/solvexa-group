import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { trainingPageEn } from "@/lib/services-en";

export const metadata = serviceMetadata(trainingPageEn);

export default function Page() {
  return <ServicePage data={trainingPageEn} />;
}
