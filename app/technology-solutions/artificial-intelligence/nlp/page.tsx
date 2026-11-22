import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/data/ai-services.data";

const service = getAIService("nlp");

export const metadata: Metadata = {
  title: "Natural Language Processing | HYI.AI",
  description: "Build NLP systems that extract meaning from text, classify information, discover relationships and power intelligent language experiences.",
};

export default function NlpPage() {
  return <AIServiceShell service={service} />;
}
