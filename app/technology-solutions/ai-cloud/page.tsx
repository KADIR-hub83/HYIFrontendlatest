import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "AI Cloud | HYI.AI",
  description: "Cloud platforms built for training, serving and governing AI.",
};

export default function Page() {
  return <ServicePageClient pageKey="ai-cloud" />;
}