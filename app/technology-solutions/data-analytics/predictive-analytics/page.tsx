import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PredictiveAnalyticsHero from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveAnalyticsHero";
import ForecastHorizon from "@/components/section/technology-solutions/data-analytics/predictive-analytics/ForecastHorizon";
import ScenarioSimulator from "@/components/section/technology-solutions/data-analytics/predictive-analytics/ScenarioSimulator";
import RiskRadar from "@/components/section/technology-solutions/data-analytics/predictive-analytics/RiskRadar";
import DecisionMatrix from "@/components/section/technology-solutions/data-analytics/predictive-analytics/DecisionMatrix";
import PredictiveNeuralCore from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveNeuralCore";
import PredictionPipeline from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictionPipeline";
import PredictiveCapabilities from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveCapabilities";
import PredictiveCommandCenter from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveCommandCenter";
import PredictiveUseCases from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveUseCases";
import PredictiveImpact from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveImpact";
import PredictiveCTA from "@/components/section/technology-solutions/data-analytics/predictive-analytics/PredictiveCTA";

export default function PredictiveAnalyticsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <PredictiveAnalyticsHero />
      <ForecastHorizon />
      <ScenarioSimulator />

      <section className="bg-[#030303] py-5">
        <div className="mx-auto grid max-w-[1500px] gap-5 px-5 md:px-8 lg:grid-cols-2">
          <RiskRadar />
          <DecisionMatrix />
        </div>
      </section>

      <PredictiveNeuralCore />
      <PredictionPipeline />
      <PredictiveCapabilities />
      <PredictiveCommandCenter />
      <PredictiveUseCases />
      <PredictiveImpact />
      <PredictiveCTA />

      <Footer />
    </main>
  );
}