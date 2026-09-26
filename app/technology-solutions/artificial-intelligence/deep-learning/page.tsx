import DeepLearningHero from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/DeepLearningHero";
import LearningArchitecture from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/LearningArchitecture";
import NeuralCapabilities from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/NeuralCapabilities";
import DeepLearningWorkflow from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/DeepLearningWorkflow";
import IndustryApplications from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/IndustryApplications";
import ModelPerformance from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/ModelPerformance";
import NeuralCommandCenter from "@/components/section//technology-solutions/artificial-intelligence/deep-learning/NeuralCommandCenter";
import DeepLearningImpact from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/DeepLearningImpact";
import DeepLearningCTA from "@/components/section/technology-solutions/artificial-intelligence/deep-learning/DeepLearningCTA";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export default function DeepLearningPage() {
  return (
    <main className="relative overflow-hidden bg-[#020308] text-white">
      <Header />

      <DeepLearningHero />
      <LearningArchitecture />
      <NeuralCapabilities />
      <DeepLearningWorkflow />
      <IndustryApplications />
      <ModelPerformance />
      <NeuralCommandCenter />
      <DeepLearningImpact />
      <DeepLearningCTA />

      <Footer />
    </main>
  );
}