import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PrescriptiveAnalyticsHero from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/PrescriptiveAnalyticsHero";
import AnalyticsEvolution from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/AnalyticsEvolution";
import DecisionIntelligence from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/DecisionIntelligence";
import OptimizationEngine from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/OptimizationEngine";
import ScenarioExplorer from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/ScenarioExplorer";
import PrescriptiveWorkflow from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/PrescriptiveWorkflow";
import RecommendationConsole from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/RecommendationConsole";
import PrescriptiveCapabilities from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/PrescriptiveCapabilities";
import IndustryDecisions from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/IndustryDecisions";
import HumanDecisionSection from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/HumanDecisionSection";
import PrescriptiveCTA from "@/components/section/technology-solutions/data-analytics/prescriptive-analytics/PrescriptiveCTA";

export default function PrescriptiveAnalyticsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <PrescriptiveAnalyticsHero />
      <AnalyticsEvolution />
      <DecisionIntelligence />
      <OptimizationEngine />
      <ScenarioExplorer />
      <PrescriptiveWorkflow />
      <RecommendationConsole />
      <PrescriptiveCapabilities />
      <IndustryDecisions />
      <HumanDecisionSection />
      <PrescriptiveCTA />

      <Footer />
    </main>
  );
}