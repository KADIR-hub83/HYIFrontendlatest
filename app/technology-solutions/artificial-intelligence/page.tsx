import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Artificial Intelligence | HYI.AI",
  description: "Machine learning and generative AI solutions by HYI.AI.",
};

export default function Page() {
  return <ServicePageClient pageKey="artificial-intelligence" />;
}