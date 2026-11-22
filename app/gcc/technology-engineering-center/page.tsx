import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import EngineeringHero from "@/components/section/gcc/technology-engineering/EngineeringHero";
import EngineeringCommandCenter from "@/components/section/gcc/technology-engineering/EngineeringCommandCenter";
import EngineeringCapabilities from "@/components/section/gcc/technology-engineering/EngineeringCapabilities";
import TechnologyEcosystem from "@/components/section/gcc/technology-engineering/TechnologyEcosystem";
import EngineeringPipeline from "@/components/section/gcc/technology-engineering/EngineeringPipeline";
import GlobalDeliveryNetwork from "@/components/section/gcc/technology-engineering/GlobalDeliveryNetwork";
import EngineeringImpact from "@/components/section/gcc/technology-engineering/EngineeringImpact";
import EngineeringCTA from "@/components/section/gcc/technology-engineering/EngineeringCTA";

export default function TechnologyEngineeringCenterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020203] text-white">
      <Header />

      <EngineeringHero />

      <EngineeringCommandCenter />

      <EngineeringCapabilities />

      <TechnologyEcosystem />

      <EngineeringPipeline />

      <GlobalDeliveryNetwork />

      <EngineeringImpact />

      {/* <EngineeringCTA /> */}

      <Footer />
    </main>
  );
}