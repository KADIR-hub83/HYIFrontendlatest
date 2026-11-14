import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Cloud Infrastructure | HYI.AI",
  description: "Secure, resilient and cost-aware cloud infrastructure.",
};

export default function Page() {
  return <ServicePageClient pageKey="cloud-infrastructure" />;
}