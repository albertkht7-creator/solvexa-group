import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { mentoringPageEn } from "@/lib/services-en";

export const metadata = serviceMetadata(mentoringPageEn);

export default function Page() {
  return <ServicePage data={mentoringPageEn} />;
}
