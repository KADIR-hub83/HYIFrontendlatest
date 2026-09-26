import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIModelHero from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/AIModelHero";
import LiveTrainingConsole from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/LiveTrainingConsole";
import ModelDevelopmentPipeline from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/ModelDevelopmentPipeline";
import ModelArchitectureLab from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/ModelArchitectureLab";
import ModelCapabilities from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/ModelCapabilities";
import TrainingIntelligence from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/TrainingIntelligence";
import ModelCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/ModelCommandCenter";
import MLOpsArchitecture from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/MLOpsArchitecture";
import ModelImpact from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/ModelImpact";
import AIModelCTA from "@/components/section/technology-solutions/artificial-intelligence/ai-model-development/AIModelCTA";

export default function AIModelDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-[#020203] text-white">
      <Header />
      <AIModelHero />
      <LiveTrainingConsole />
      <ModelDevelopmentPipeline />
      <ModelArchitectureLab />
      <ModelCapabilities />
      <TrainingIntelligence />
      <ModelCommandCenter />
      <MLOpsArchitecture />
      <ModelImpact />
      <AIModelCTA />
      <Footer />
    </main>
  );
}