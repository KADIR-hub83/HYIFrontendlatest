import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("predictive-ai");

export const metadata: Metadata = {
  title: "Predictive AI Solutions | HYI.AI",
  description: "Develop predictive AI systems that forecast demand, identify risk, anticipate customer behaviour and support proactive business decisions.",
};

export default function PredictiveAiPage() {
  return <AIServiceShell service={service} />;
}
