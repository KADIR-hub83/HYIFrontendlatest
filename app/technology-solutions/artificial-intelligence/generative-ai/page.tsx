import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import GenerativeAIHero from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/GenerativeAIHero";
import AICommandCenter from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/AICommandCenter";
import GenerativeCapabilities from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/GenerativeCapabilities";
import ModelEcosystem from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/ModelEcosystem";
import AIWorkflow from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/AIWorkflow";
import EnterpriseKnowledge from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/EnterpriseKnowledge";
import ResponsibleAI from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/ResponsibleAI";
import AIUseCases from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/AIUseCases";
import GenerativeAIImpact from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/GenerativeAIImpact";
import GenerativeAICTA from "@/components/section/technology-solutions/artificial-intelligence/generative-ai/GenerativeAICTA";

export default function GenerativeAIPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020203] text-white">
      <Header />

      <GenerativeAIHero />

      <AICommandCenter />

      <GenerativeCapabilities />

      <ModelEcosystem />

      <AIWorkflow />

      <EnterpriseKnowledge />

      <ResponsibleAI />

      <AIUseCases />

      <GenerativeAIImpact />

      <GenerativeAICTA />

      <Footer />
    </main>
  );
}