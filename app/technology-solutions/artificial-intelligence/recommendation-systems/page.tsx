import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import RecommendationHero from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationHero";
import PersonalizationStream from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/PersonalizationStream";
import RecommendationEngine from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationEngine";
import TasteIntelligence from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/TasteIntelligence";
import RecommendationCapabilities from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationCapabilities";
import RankingArchitecture from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RankingArchitecture";
import RecommendationCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationCommandCenter";
import RecommendationUseCases from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationUseCases";
import RecommendationImpact from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationImpact";
import RecommendationCTA from "@/components/section/technology-solutions/artificial-intelligence/recommendation-systems/RecommendationCTA";

export default function RecommendationSystemsPage() {
  return (
    <main className="relative overflow-hidden bg-[#020203] text-white">
      <Header />

      <RecommendationHero />
      <PersonalizationStream />
      <RecommendationEngine />
      <TasteIntelligence />
      <RecommendationCapabilities />
      <RankingArchitecture />
      <RecommendationCommandCenter />
      <RecommendationUseCases />
      <RecommendationImpact />
      <RecommendationCTA />

      <Footer />
    </main>
  );
}