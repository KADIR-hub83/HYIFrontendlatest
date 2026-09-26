import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import BusinessIntelligenceHero from "@/components/section/technology-solutions/data-analytics/business-intelligence/BusinessIntelligenceHero";
import IntelligenceBento from "@/components/section/technology-solutions/data-analytics/business-intelligence/IntelligenceBento";
import AnalyticsCapabilities from "@/components/section/technology-solutions/data-analytics/business-intelligence/AnalyticsCapabilities";
import DataFlowEngine from "@/components/section/technology-solutions/data-analytics/business-intelligence/DataFlowEngine";
import ExecutiveCommandCenter from "@/components/section/technology-solutions/data-analytics/business-intelligence/ExecutiveCommandCenter";
import DecisionIntelligence from "@/components/section/technology-solutions/data-analytics/business-intelligence/DecisionIntelligence";
import BIImpact from "@/components/section/technology-solutions/data-analytics/business-intelligence/BIImpact";
import BusinessIntelligenceCTA from "@/components/section/technology-solutions/data-analytics/business-intelligence/BusinessIntelligenceCTA";

export default function BusinessIntelligencePage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <Header />

      <BusinessIntelligenceHero />
      <IntelligenceBento />
      <AnalyticsCapabilities />
      <DataFlowEngine />
      <ExecutiveCommandCenter />
      <DecisionIntelligence />
      <BIImpact />
      <BusinessIntelligenceCTA />

      <Footer />
    </main>
  );
}