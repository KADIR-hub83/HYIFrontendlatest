import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ModelHostingHero from "@/components/section/technology-solutions/ai-cloud/model-hosting/ModelHostingHero";
import HostingOverview from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingOverview";
import ServingArchitecture from "@/components/section/technology-solutions/ai-cloud/model-hosting/ServingArchitecture";
import ModelRuntimeSection from "@/components/section/technology-solutions/ai-cloud/model-hosting/ModelRuntimeSection";
import AutoScalingSection from "@/components/section/technology-solutions/ai-cloud/model-hosting/AutoScalingSection";
import ModelVersioningSection from "@/components/section/technology-solutions/ai-cloud/model-hosting/ModelVersioningSection";
import PrivateHostingSection from "@/components/section/technology-solutions/ai-cloud/model-hosting/PrivateHostingSection";
import HostingObservability from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingObservability";
import HostingCapabilities from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingCapabilities";
import HostingWorkflow from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingWorkflow";
import HostingPrinciples from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingPrinciples";
import HostingUseCases from "@/components/section/technology-solutions/ai-cloud/model-hosting/HostingUseCases";
import ModelHostingCTA from "@/components/section/technology-solutions/ai-cloud/model-hosting/ModelHostingCTA";

export default function ModelHostingPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <ModelHostingHero />
      <HostingOverview />
      <ServingArchitecture />
      <ModelRuntimeSection />
      <AutoScalingSection />
      <ModelVersioningSection />
      <PrivateHostingSection />
      <HostingObservability />
      <HostingCapabilities />
      <HostingWorkflow />
      <HostingPrinciples />
      <HostingUseCases />
      <ModelHostingCTA />

      <Footer />
    </main>
  );
}