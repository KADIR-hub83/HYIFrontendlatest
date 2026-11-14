import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Finance & Risk Intelligence | HYI.AI",
  description: "Analytics and AI for finance and risk teams.",
};

export default function Page() {
  return <ServicePageClient pageKey="finance-risk-intelligence" />;
}