import type { Metadata } from "next";
import AIServiceShell from "@/components/section/technology-solutions/artificial-intelligence/AIServiceShell";
import { getAIService } from "@/components/data/ai-services.data";

const service = getAIService("computer-vision");

export const metadata: Metadata = {
  title: "Computer Vision Solutions | HYI.AI",
  description: "Build computer vision applications that interpret images and video for inspection, automation, safety and operational intelligence.",
};

export default function ComputerVisionPage() {
  return <AIServiceShell service={service} />;
}
