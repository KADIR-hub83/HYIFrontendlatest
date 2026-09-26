import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIInfrastructureHero from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/AIInfrastructureHero";
import InfrastructureOverview from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/InfrastructureOverview";
import ComputeArchitecture from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/ComputeArchitecture";
import TrainingInferenceSection from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/TrainingInferenceSection";
import StorageFabricSection from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/StorageFabricSection";
import NetworkFabricSection from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/NetworkFabricSection";
import ObservabilitySection from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/ObservabilitySection";
import InfrastructureCapabilities from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/InfrastructureCapabilities";
import ReliabilitySection from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/ReliabilitySection";
import InfrastructureWorkflow from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/InfrastructureWorkflow";
import AIInfrastructureCTA from "@/components/section/technology-solutions/ai-cloud/ai-infrastructure/AIInfrastructureCTA";

export default function AIInfrastructurePage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <AIInfrastructureHero />
      <InfrastructureOverview />
      <ComputeArchitecture />
      <TrainingInferenceSection />
      <StorageFabricSection />
      <NetworkFabricSection />
      <ObservabilitySection />
      <InfrastructureCapabilities />
      <ReliabilitySection />
      <InfrastructureWorkflow />
      <AIInfrastructureCTA />

      <Footer />
    </main>
  );
}