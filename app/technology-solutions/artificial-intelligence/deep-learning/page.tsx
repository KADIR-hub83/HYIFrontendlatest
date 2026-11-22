import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("deep-learning");

export const metadata: Metadata = {
  title: "Deep Learning Solutions | HYI.AI",
  description: "Develop deep learning systems that turn complex data into intelligent products, predictive capabilities and production-ready applications.",
};

export default function DeepLearningPage() {
  return <AIServiceShell service={service} />;
}
