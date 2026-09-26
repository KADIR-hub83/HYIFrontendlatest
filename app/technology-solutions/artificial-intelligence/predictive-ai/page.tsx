import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PredictiveAIHero from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/ForecastEngine";
import FutureSignals from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/FutureSignals";
import ForecastEngine from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/ForecastEngine";
import PredictiveCapabilities from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/PredictiveCapabilities";
import ScenarioSimulator from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/ScenarioSimulator";
import PredictiveCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/PredictiveCommandCenter";
import IndustryForecasts from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/IndustryForecasts";
import PredictiveImpact from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/PredictiveImpact";
import PredictiveAICTA from "@/components/section/technology-solutions/artificial-intelligence/predictive-ai/PredictiveAICTA";

export default function PredictiveAIPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-[#F7F3FF]">
      <Header />

      <PredictiveAIHero />
      <FutureSignals />
      <ForecastEngine />
      <PredictiveCapabilities />
      <ScenarioSimulator />
      <PredictiveCommandCenter />
      <IndustryForecasts />
      <PredictiveImpact />
      <PredictiveAICTA />

      <Footer />
    </main>
  );
}