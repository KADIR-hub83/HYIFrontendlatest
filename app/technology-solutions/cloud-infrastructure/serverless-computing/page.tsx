import CloudServicePage from "@/components/section/technology-solutions/cloud-infrastructure/CloudServicePage";
import { cloudServices } from "@/components/section/technology-solutions/cloud-infrastructure/cloudServices";

export default function Page() {
  return <CloudServicePage service={cloudServices["serverless-computing"]} />;
}