import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Integrate AI | HYI.AI",
  description: "Embed AI into your existing products and workflows.",
};

export default function Page() {
  return <ServicePageClient pageKey="integrate-ai" />;
}