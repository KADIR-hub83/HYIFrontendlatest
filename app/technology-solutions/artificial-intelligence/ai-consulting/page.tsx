import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIConsultingHero from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIConsultingHero";
import AIDiagnostic from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIDiagnostic";
import ConsultingPillars from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/ConsultingPillars";
import TransformationRoadmap from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/TransformationRoadmap";
import AIMaturityMatrix from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIMaturityMatrix";
import AIGovernance from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIGovernance";
import AIOperatingModel from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIOperatingModel";
import ConsultingEngagement from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/ConsultingEngagement";
import AIConsultingImpact from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIConsultingImpact";
import AIConsultingCTA from "@/components/section/technology-solutions/artificial-intelligence/ai-consulting/AIConsultingCTA";

export const metadata = {
  title: "AI Consulting & Transformation | HYI.AI",
  description:
    "AI strategy, transformation, governance, architecture and enterprise AI consulting services from HYI.AI.",
};

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020203] text-white">
      <Header />

      <AIConsultingHero />
      <AIDiagnostic />
      <ConsultingPillars />
      <TransformationRoadmap />
      <AIMaturityMatrix />
      <AIGovernance />
      <AIOperatingModel />
      <ConsultingEngagement />
      <AIConsultingImpact />
      <AIConsultingCTA />

      <Footer />
    </main>
  );
}