import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | HYI.AI",
  description:
    "Explore HYI.AI artificial intelligence services including machine learning, generative AI, AI agents, computer vision, NLP and intelligent automation.",
};

export default function Page() {
  return <ServicePageClient pageKey="artificial-intelligence" />;
}