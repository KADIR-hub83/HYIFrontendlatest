import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/data/ai-services.data";

const service = getAIService("ai-chatbots");

export const metadata: Metadata = {
  title: "AI Chatbot Development | HYI.AI",
  description: "Build intelligent chatbots that understand user intent, answer with relevant context and connect conversations to your business systems.",
};

export default function AiChatbotsPage() {
  return <AIServiceShell service={service} />;
}
