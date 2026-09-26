import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import MachineLearningHero from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MachineLearningHero";
import ModelTrainingLab from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/ModelTrainingLab";
import MLCapabilities from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MLCapabilities";
import DataIntelligencePipeline from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/DataIntelligencePipeline";
import ModelEcosystem from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/ModelEcosystem";
import MLOpsLifecycle from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MLOpsLifecycle";
import MLUseCases from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MLUseCases";
import MLPerformance from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MLPerformance";
import MachineLearningCTA from "@/components/section/technology-solutions/artificial-intelligence/machine-learning/MachineLearningCTA";

export const metadata = {
  title: "Machine Learning Solutions | HYI.AI",
  description:
    "Machine learning engineering, predictive analytics, MLOps, computer vision, recommendation systems and intelligent automation solutions from HYI.AI.",
};

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf9ff]">
      <Header />

      <MachineLearningHero />
      <ModelTrainingLab />
      <MLCapabilities />
      <DataIntelligencePipeline />
      <ModelEcosystem />
      <MLOpsLifecycle />
      <MLUseCases />
      <MLPerformance />
      <MachineLearningCTA />

      <Footer />
    </main>
  );
}