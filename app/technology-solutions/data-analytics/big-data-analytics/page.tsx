import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import BigDataHero from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataHero";
import DataStreamTicker from "@/components/section/technology-solutions/data-analytics/big-data-analytics/DataStreamTicker";
import DataUniverse from "@/components/section/technology-solutions/data-analytics/big-data-analytics/DataUniverse";
import BigDataPipeline from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataPipeline";
import AnalyticsCapabilities from "@/components/section/technology-solutions/data-analytics/big-data-analytics/AnalyticsCapabilities";
import ProcessingEngine from "@/components/section/technology-solutions/data-analytics/big-data-analytics/ProcessingEngine";
import BigDataArchitecture from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataArchitecture";
import BigDataCommandCenter from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataCommandCenter";
import IndustryIntelligence from "@/components/section/technology-solutions/data-analytics/big-data-analytics/IndustryIntelligence";
import BigDataImpact from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataImpact";
import BigDataCTA from "@/components/section/technology-solutions/data-analytics/big-data-analytics/BigDataCTA";

export default function BigDataAnalyticsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <BigDataHero />
      <DataStreamTicker />
      <DataUniverse />
      <BigDataPipeline />
      <AnalyticsCapabilities />
      <ProcessingEngine />
      <BigDataArchitecture />
      <BigDataCommandCenter />
      <IndustryIntelligence />
      <BigDataImpact />
      <BigDataCTA />

      <Footer />
    </main>
  );
}