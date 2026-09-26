import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import RealTimeAnalyticsHero from "@/components/section/technology-solutions/data-analytics/real-time-analytics/RealTimeAnalyticsHero";
import StreamingArchitecture from "@/components/section/technology-solutions/data-analytics/real-time-analytics/StreamingArchitecture";
import EventStreamConsole from "@/components/section/technology-solutions/data-analytics/real-time-analytics/EventStreamConsole";
import LiveMetrics from "@/components/section/technology-solutions/data-analytics/real-time-analytics/LiveMetrics";
import RealTimeIntelligence from "@/components/section/technology-solutions/data-analytics/real-time-analytics/RealTimeIntelligence";
import AnomalyRadar from "@/components/section/technology-solutions/data-analytics/real-time-analytics/AnomalyRadar";
import RealTimeUseCases from "@/components/section/technology-solutions/data-analytics/real-time-analytics/RealTimeUseCases";
import RealTimeWorkflow from "@/components/section/technology-solutions/data-analytics/real-time-analytics/RealTimeWorkflow";
import RealTimeAnalyticsCTA from "@/components/section/technology-solutions/data-analytics/real-time-analytics/RealTimeAnalyticsCTA";

export default function RealTimeAnalyticsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <RealTimeAnalyticsHero />
      <StreamingArchitecture />
      <EventStreamConsole />
      <LiveMetrics />
      <RealTimeIntelligence />
      <AnomalyRadar />
      <RealTimeUseCases />
      <RealTimeWorkflow />
      <RealTimeAnalyticsCTA />

      <Footer />
    </main>
  );
}