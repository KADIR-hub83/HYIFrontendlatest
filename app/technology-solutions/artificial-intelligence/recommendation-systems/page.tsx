import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/data/ai-services.data";

const service = getAIService("recommendation-systems");

export const metadata: Metadata = {
  title: "AI Recommendation Systems | HYI.AI",
  description: "Build recommendation engines that understand behaviour, preferences and context to rank products, content, services and next-best actions for every user.",
};

export default function RecommendationSystemsPage() {
  return <AIServiceShell service={service} />;
}
