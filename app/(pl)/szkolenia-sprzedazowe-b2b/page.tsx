import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { trainingPage } from "@/lib/services";

export const metadata = serviceMetadata(trainingPage);

export default function Page() {
  return <ServicePage data={trainingPage} />;
}
