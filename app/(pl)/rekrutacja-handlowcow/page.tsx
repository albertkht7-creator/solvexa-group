import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { recruitmentPage } from "@/lib/services";

export const metadata = serviceMetadata(recruitmentPage);

export default function Page() {
  return <ServicePage data={recruitmentPage} />;
}
