import type { Metadata } from "next";
import ServicePageClient from "@/components/section/footer-technology-pages/ServicePageClient";

export const metadata: Metadata = {
  title: "Application Development | HYI.AI",
  description: "Web, mobile and enterprise application development by HYI.AI.",
};

export default function Page() {
  return <ServicePageClient pageKey="application-development" />;
}