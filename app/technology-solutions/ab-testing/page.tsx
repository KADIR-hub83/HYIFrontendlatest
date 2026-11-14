import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "A/B Testing | HYI.AI",
  description: "Controlled experiments that show what actually works.",
};

export default function Page() {
  return <ServicePageClient pageKey="ab-testing" />;
}