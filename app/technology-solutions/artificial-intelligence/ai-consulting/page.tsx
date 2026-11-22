import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/data/ai-services.data";

const service = getAIService("ai-consulting");

export const metadata: Metadata = {
  title: "AI Consulting and Transformation | HYI.AI",
  description: "Align AI strategy, operating models, architecture and governance with business priorities through a practical transformation programme.",
};

export default function AiConsultingPage() {
  return <AIServiceShell service={service} />;
}
