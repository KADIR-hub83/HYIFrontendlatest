import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIAgentsHero from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AIAgentsHero";
import AgentRuntime from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentRuntime";
import MultiAgentNetwork from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/MultiAgentNetwork";
import AgentCapabilities from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentCapabilities";
import AgentArchitecture from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentArchitecture";
import AgentVisualExperience from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentVisualExperience";
import AgentCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentCommandCenter";
import EnterpriseAgents from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/EnterpriseAgents";
import AgentImpact from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AgentImpact";
import AIAgentsCTA from "@/components/section/technology-solutions/artificial-intelligence/ai-agents/AIAgentsCTA";

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-[#F7F3FB]">
      <Header />

      <AIAgentsHero />
      <AgentRuntime />
      <MultiAgentNetwork />
      <AgentCapabilities />
      <AgentArchitecture />
      <AgentVisualExperience />
      <AgentCommandCenter />
      <EnterpriseAgents />
      <AgentImpact />
      <AIAgentsCTA />

      <Footer />
    </main>
  );
}