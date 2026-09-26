import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ResponsibleAIHero from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/ResponsibleAIHero";
import GovernanceBento from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/GovernanceBento";
import LivePolicyTerminal from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/LivePolicyTerminal";
import ResponsiblePillars from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/ResponsiblePillars";
import RiskIntelligence from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/RiskIntelligence";
import ExplainabilityLab from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/ExplainabilityLab";
import HumanOversight from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/HumanOversight";
import GovernanceCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/GovernanceCommandCenter";
import ResponsibleAIProcess from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/ResponsibleAIProcess";
import ResponsibleAICTA from "@/components/section/technology-solutions/artificial-intelligence/responsible-ai/ResponsibleAICTA";

export default function ResponsibleAIPage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <Header />

      <ResponsibleAIHero />
      <GovernanceBento />
      <LivePolicyTerminal />
      <ResponsiblePillars />
      <RiskIntelligence />
      <ExplainabilityLab />
      <HumanOversight />
      <GovernanceCommandCenter />
      <ResponsibleAIProcess />
      <ResponsibleAICTA />

      <Footer />
    </main>
  );
}