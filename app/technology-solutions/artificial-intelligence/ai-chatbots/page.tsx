import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIChatbotHero from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/AIChatbotCTA";
import ConversationEngine from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/ConversationEngine";
import IntelligenceLayer from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/IntelligenceLayer";
import ChatbotCapabilities from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/ChatbotCapabilities";
import OmnichannelExperience from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/OmnichannelExperience";
import EnterpriseIntegrations from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/EnterpriseIntegrations";
import ConversationCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/ConversationCommandCenter";
import ChatbotImpact from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/ChatbotImpact";
import AIChatbotCTA from "@/components/section/technology-solutions/artificial-intelligence/ai-chatbots/AIChatbotCTA";

export default function AIChatbotsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      <Header />

      <AIChatbotHero />
      <ConversationEngine />
      <IntelligenceLayer />
      <ChatbotCapabilities />
      <OmnichannelExperience />
      <EnterpriseIntegrations />
      <ConversationCommandCenter />
      <ChatbotImpact />
      <AIChatbotCTA />

      <Footer />
    </main>
  );
}