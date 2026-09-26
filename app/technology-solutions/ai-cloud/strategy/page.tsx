import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AICloudStrategyHero from "@/components/section/technology-solutions/ai-cloud/strategy/AICloudStrategyHero";
import CloudAssessmentSection from "@/components/section/technology-solutions/ai-cloud/strategy/CloudAssessmentSection";
import StrategyArchitecture from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyArchitecture";
import WorkloadPlacement from "@/components/section/technology-solutions/ai-cloud/strategy/WorkloadPlacement";
import AIInfrastructureSection from "@/components/section/technology-solutions/ai-cloud/strategy/AIInfrastructureSection";
import GovernanceSection from "@/components/section/technology-solutions/ai-cloud/strategy/GovernanceSection";
import CloudEconomics from "@/components/section/technology-solutions/ai-cloud/strategy/CloudEconomics";
import StrategyRoadmap from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyRoadmap";
import StrategyCapabilities from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyCapabilities";
// import OperatingModel from "@/components/section/technology-solutions/ai-cloud/strategy/OperatingModel";
import StrategyPrinciples from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyPrinciples";
import StrategyUseCases from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyUseCases";
import StrategyOutcomes from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyOutcomes";
import AICloudStrategyCTA from "@/components/section/technology-solutions/ai-cloud/strategy/AICloudStrategyCTA";
import StrategyDecisionSystem from "@/components/section/technology-solutions/ai-cloud/strategy/StrategyDecisionSystem";

export default function AICloudStrategyPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <AICloudStrategyHero />
      <StrategyDecisionSystem />
      <CloudAssessmentSection />
      <StrategyArchitecture />
      <WorkloadPlacement />
      <AIInfrastructureSection />
      <GovernanceSection />
      <CloudEconomics />
      <StrategyRoadmap />
      <StrategyCapabilities />
      {/* <OperatingModel /> */}
      <StrategyPrinciples />
      <StrategyUseCases />
      <StrategyOutcomes />
      <AICloudStrategyCTA />

      <Footer />
    </main>
  );
}