import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/data/ai-services.data";

const service = getAIService("responsible-ai");

export const metadata: Metadata = {
  title: "Responsible AI and Governance | HYI.AI",
  description: "Establish responsible AI practices across model development and deployment with governance, explainability, risk management and human oversight.",
};

export default function ResponsibleAiPage() {
  return <AIServiceShell service={service} />;
}
