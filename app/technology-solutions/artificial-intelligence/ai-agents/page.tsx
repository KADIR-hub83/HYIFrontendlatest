import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("ai-agents");

export const metadata: Metadata = {
  title: "AI Agent Development | HYI.AI",
  description: "Develop autonomous AI agents that understand objectives, reason across enterprise context, collaborate with specialist agents and execute complex multi-step work.",
};

export default function AiAgentsPage() {
  return <AIServiceShell service={service} />;
}
