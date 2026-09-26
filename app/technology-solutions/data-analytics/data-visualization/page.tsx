import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataVisualizationHero from "@/components/section/technology-solutions/data-analytics/data-visualization/DataVisualizationHero";
import VisualizationCanvas from "@/components/section/technology-solutions/data-analytics/data-visualization/VisualizationCanvas";
import VisualIntelligence from "@/components/section/technology-solutions/data-analytics/data-visualization/VisualIntelligence";
import DataStorytelling from "@/components/section/technology-solutions/data-analytics/data-visualization/DataStorytelling";
import LiveAnalyticsStudio from "@/components/section/technology-solutions/data-analytics/data-visualization/LiveAnalyticsStudio";
import VisualizationCapabilities from "@/components/section/technology-solutions/data-analytics/data-visualization/VisualizationCapabilities";
import VisualizationWorkflow from "@/components/section/technology-solutions/data-analytics/data-visualization/VisualizationWorkflow";
import VisualizationImpact from "@/components/section/technology-solutions/data-analytics/data-visualization/VisualizationImpact";
import DataVisualizationCTA from "@/components/section/technology-solutions/data-analytics/data-visualization/DataVisualizationCTA";

export default function DataVisualizationPage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <Header />

      <DataVisualizationHero />
      <VisualizationCanvas />
      <VisualIntelligence />
      <DataStorytelling />
      <LiveAnalyticsStudio />
      <VisualizationCapabilities />
      <VisualizationWorkflow />
      <VisualizationImpact />
      <DataVisualizationCTA />

      <Footer />
    </main>
  );
}