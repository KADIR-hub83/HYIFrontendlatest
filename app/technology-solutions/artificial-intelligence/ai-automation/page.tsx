import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("ai-automation");

export const metadata: Metadata = {
  title: "AI Automation Solutions | HYI.AI",
  description: "Automate repetitive and knowledge-intensive business workflows by combining AI models, business rules, APIs and human approval.",
};

export default function AiAutomationPage() {
  return <AIServiceShell service={service} />;
}
