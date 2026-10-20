import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { recruitmentPageEn } from "@/lib/services-en";

export const metadata = serviceMetadata(recruitmentPageEn);

export default function Page() {
  return <ServicePage data={recruitmentPageEn} />;
}
