import type { Metadata } from "next";
import { AIServiceIndex } from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | HYI.AI",
  description: "Explore HYI.AI artificial intelligence services including machine learning, generative AI, AI agents, computer vision, NLP and intelligent automation.",
};

export default function ArtificialIntelligencePage() {
  return <AIServiceIndex />;
}
