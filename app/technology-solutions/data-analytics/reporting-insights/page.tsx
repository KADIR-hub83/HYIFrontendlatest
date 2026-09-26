import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ReportingInsightsHero from "@/components/section/technology-solutions/data-analytics/reporting-insights/ReportingInsightsHero";
import InsightCommandCenter from "@/components/section/technology-solutions/data-analytics/reporting-insights/InsightCommandCenter";
import ReportingVsInsights from "@/components/section/technology-solutions/data-analytics/reporting-insights/ReportingVsInsights";
import InsightAnatomy from "@/components/section/technology-solutions/data-analytics/reporting-insights/InsightAnatomy";
import ReportingLifecycle from "@/components/section/technology-solutions/data-analytics/reporting-insights/ReportingLifecycle";
import InsightTypes from "@/components/section/technology-solutions/data-analytics/reporting-insights/InsightTypes";
import HYIReportingApproach from "@/components/section/technology-solutions/data-analytics/reporting-insights/HYIReportingApproach";
import ReportingInsightsCTA from "@/components/section/technology-solutions/data-analytics/reporting-insights/ReportingInsightsCTA";

export default function ReportingInsightsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <ReportingInsightsHero />
      <InsightCommandCenter />
      <ReportingVsInsights />
      <InsightAnatomy />
      <ReportingLifecycle />
      <InsightTypes />
      <HYIReportingApproach />
      <ReportingInsightsCTA />

      <Footer />
    </main>
  );
}