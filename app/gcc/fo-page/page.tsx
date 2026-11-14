import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Global Capability Center (GCC) | HYI.AI",
  description: "Set up and scale a Global Capability Center with HYI.AI.",
};

export default function Page() {
  return <ServicePageClient pageKey="gcc" />;
}