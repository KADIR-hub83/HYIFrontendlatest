import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIAutomationHero from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AIAutomationHero";
import LiveAutomationTerminal from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/LiveAutomationTerminal";
import AutomationNetwork from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AutomationNetwork";
import AutomationCapabilities from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AutomationCapabilities";
import WorkflowEngine from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/WorkflowEngine";
import AutomationCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AutomationCommandCenter";
import EnterpriseAutomation from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/EnterpriseAutomation";
import AutomationImpact from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AutomationImpact";
import AIAutomationCTA from "@/components/section/technology-solutions/artificial-intelligence/ai-automation/AIAutomationCTA";

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-[#F7F4FB]">
      <Header />

      <AIAutomationHero />
      <LiveAutomationTerminal />
      <AutomationNetwork />
      <AutomationCapabilities />
      <WorkflowEngine />
      <AutomationCommandCenter />
      <EnterpriseAutomation />
      <AutomationImpact />
      <AIAutomationCTA />

      <Footer />
    </main>
  );
}