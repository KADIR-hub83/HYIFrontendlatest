import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import GPUCloudHero from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudHero";
import GPUCloudOverview from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudOverview";
import GPUArchitecture from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUArchitecture";
import TrainingCloudSection from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/TrainingCloudSection";
import InferenceCloudSection from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/InferenceCloudSection";
import GPUMemorySection from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUMemorySection";
import ElasticGPUSection from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/ElasticGPUSection";
import GPUObservability from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUObservability";
import GPUCloudCapabilities from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudCapabilities";
import GPUCloudWorkflow from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudWorkflow";
import GPUCloudPrinciples from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudPrinciples";
import GPUCloudUseCases from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudUseCases";
import GPUCloudCTA from "@/components/section/technology-solutions/ai-cloud/gpu-cloud/GPUCloudCTA";

export default function GPUCloudPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />
      <GPUCloudHero />
      <GPUCloudOverview />
      <GPUArchitecture />
      <TrainingCloudSection />
      <InferenceCloudSection />
      <GPUMemorySection />
      <ElasticGPUSection />
      <GPUObservability />
      <GPUCloudCapabilities />
      <GPUCloudWorkflow />
      <GPUCloudPrinciples />
      <GPUCloudUseCases />
      <GPUCloudCTA />
      <Footer />
    </main>
  );
}