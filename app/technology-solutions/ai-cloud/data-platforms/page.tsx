import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataPlatformsHero from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataPlatformsHero";
import DataFoundation from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataFoundation";
import ModernDataArchitecture from "@/components/section/technology-solutions/ai-cloud/data-platforms/ModernDataArchitecture";
import DataPlatformLayers from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataPlatformLayers";
import UnifiedDataSection from "@/components/section/technology-solutions/ai-cloud/data-platforms/UnifiedDataSection";
import DataEngineeringSection from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataEngineeringSection";
import AnalyticsReadySection from "@/components/section/technology-solutions/ai-cloud/data-platforms/AnalyticsReadySection";
import DataGovernanceSection from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataGovernanceSection";
import AIReadyDataSection from "@/components/section/technology-solutions/ai-cloud/data-platforms/AIReadyDataSection";
import PlatformCapabilities from "@/components/section/technology-solutions/ai-cloud/data-platforms/PlatformCapabilities";
import DataPlatformUseCases from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataPlatformUseCases";
import DataPlatformPrinciples from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataPlatformPrinciples";
import DataPlatformClosing from "@/components/section/technology-solutions/ai-cloud/data-platforms/DataPlatformClosing";

export default function DataPlatformsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <DataPlatformsHero />
      <DataFoundation />
      <ModernDataArchitecture />
      <DataPlatformLayers />
      <UnifiedDataSection />
      <DataEngineeringSection />
      <AnalyticsReadySection />
      <DataGovernanceSection />
      <AIReadyDataSection />
      <PlatformCapabilities />
      <DataPlatformUseCases />
      <DataPlatformPrinciples />
      <DataPlatformClosing />

      <Footer />
    </main>
  );
}