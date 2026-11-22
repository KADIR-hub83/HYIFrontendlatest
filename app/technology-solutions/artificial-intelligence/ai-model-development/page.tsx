import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("ai-model-development");

export const metadata: Metadata = {
  title: "Custom AI Model Development | HYI.AI",
  description: "Design, train and deploy custom AI models for specialised business problems, domain-specific data and production environments.",
};

export default function AiModelDevelopmentPage() {
  return <AIServiceShell service={service} />;
}
