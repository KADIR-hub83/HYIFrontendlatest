import CloudServicePage from "@/components/section/technology-solutions/cloud-infrastructure/CloudServicePage";
import { cloudServices } from "@/components/section/technology-solutions/cloud-infrastructure/cloudServices";

export default function CloudInfrastructurePage() {
  return (
    <CloudServicePage
      service={{
        ...cloudServices["cloud-architecture"],
        title: "Cloud Infrastructure",
        eyebrow: "Enterprise Cloud",
        accent: "Engineer the foundation of digital business.",
        description:
          "HYI.AI cloud infrastructure services bring architecture, networking, security, automation, resilience, observability and cost-aware operations into a unified engineering approach.",
      }}
    />
  );
}