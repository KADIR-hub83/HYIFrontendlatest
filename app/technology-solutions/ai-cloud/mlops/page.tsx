import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import MLOpsHero from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsHero";
import MLOpsOverview from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsOverview";
import ModelRegistrySection from "@/components/section/technology-solutions/ai-cloud/mlops/ModelRegistrySection";
import DeploymentSection from "@/components/section/technology-solutions/ai-cloud/mlops/DeploymentSection";
import DriftDetectionSection from "@/components/section/technology-solutions/ai-cloud/mlops/DriftDetectionSection";
import ExperimentSection from "@/components/section/technology-solutions/ai-cloud/mlops/ExperimentSection";
import FeaturePipelineSection from "@/components/section/technology-solutions/ai-cloud/mlops/FeaturePipelineSection";
import MLOpsObservability from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsObservability";
import MLOpsGovernance from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsGovernance";
import MLOpsCapabilities from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsCapabilities";
import MLOpsWorkflow from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsWorkflow";
import MLOpsUseCases from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsUseCases";
import MLOpsCTA from "@/components/section/technology-solutions/ai-cloud/mlops/MLOpsCTA";

export default function MLOpsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />
      <MLOpsHero />
      <MLOpsOverview />
      <ModelRegistrySection />
      <DeploymentSection />
      <DriftDetectionSection />
      <ExperimentSection />
      <FeaturePipelineSection />
      <MLOpsObservability />
      <MLOpsGovernance />
      <MLOpsCapabilities />
      <MLOpsWorkflow />
      <MLOpsUseCases />
      <MLOpsCTA />
      <Footer />
    </main>
  );
}