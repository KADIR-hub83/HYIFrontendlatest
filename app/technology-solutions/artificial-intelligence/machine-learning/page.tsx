import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("machine-learning");

export const metadata: Metadata = {
  title: "Machine Learning Development | HYI.AI",
  description: "Build machine learning solutions for prediction, classification, recommendation and intelligent automation—from data pipelines to production MLOps.",
};

export default function MachineLearningPage() {
  return <AIServiceShell service={service} />;
}
