import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Robotic Design & Development | HYI.AI",
  description: "Robotic systems engineering from concept to deployment.",
};

export default function Page() {
  return <ServicePageClient pageKey="robotic-design-development" />;
}