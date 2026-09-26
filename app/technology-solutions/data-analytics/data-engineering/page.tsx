import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataEngineeringHero from "@/components/section/technology-solutions/data-analytics/data-engineering/DataEngineeringHero";
import DataPipelineUniverse from "@/components/section/technology-solutions/data-analytics/data-engineering/DataPipelineUniverse";
import EngineeringArchitecture from "@/components/section/technology-solutions/data-analytics/data-engineering/EngineeringArchitecture";
import DataInfrastructure from "@/components/section/technology-solutions/data-analytics/data-engineering/DataInfrastructure";
import StreamingEngine from "@/components/section/technology-solutions/data-analytics/data-engineering/StreamingEngine";
import EngineeringCapabilities from "@/components/section/technology-solutions/data-analytics/data-engineering/EngineeringCapabilities";
import DataObservability from "@/components/section/technology-solutions/data-analytics/data-engineering/DataObservability";
import EngineeringWorkflow from "@/components/section/technology-solutions/data-analytics/data-engineering/EngineeringWorkflow";
import DataEngineeringImpact from "@/components/section/technology-solutions/data-analytics/data-engineering/DataEngineeringImpact";
import DataEngineeringCTA from "@/components/section/technology-solutions/data-analytics/data-engineering/DataEngineeringCTA";

export default function DataEngineeringPage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <Header />

      <DataEngineeringHero />
      <DataPipelineUniverse />
      <EngineeringArchitecture />
      <DataInfrastructure />
      <StreamingEngine />
      <EngineeringCapabilities />
      <DataObservability />
      <EngineeringWorkflow />
      <DataEngineeringImpact />
      <DataEngineeringCTA />

      <Footer />
    </main>
  );
}