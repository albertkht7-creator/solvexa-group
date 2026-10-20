import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { mentoringPage } from "@/lib/services";

export const metadata = serviceMetadata(mentoringPage);

export default function Page() {
  return <ServicePage data={mentoringPage} />;
}
