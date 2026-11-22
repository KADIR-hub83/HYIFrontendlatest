import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("generative-ai");

export const metadata: Metadata = {
  title: "Generative AI Development | HYI.AI",
  description: "Build secure generative AI systems, enterprise copilots, RAG platforms and multimodal applications engineered around your business.",
};

export default function GenerativeAiPage() {
  return <AIServiceShell service={service} />;
}
