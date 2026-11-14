import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Digital Transformation | HYI.AI",
  description: "Modernize processes, technology and ways of working.",
};

export default function Page() {
  return <ServicePageClient pageKey="digital-transformation" />;
}