import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DashboardHero from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardHero";
import DashboardBuildJourney from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardBuildJourney";
import KPIArchitecture from "@/components/section/technology-solutions/data-analytics/dashboard-development/KPIArchitecture";
import DashboardDesignSystem from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardDesignSystem";
import DashboardIntelligence from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardIntelligence";
import DashboardEngineering from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardEngineering";
import DashboardCTA from "@/components/section/technology-solutions/data-analytics/dashboard-development/DashboardCTA";

export default function DashboardDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />
      <DashboardHero />
      <DashboardBuildJourney />
      <KPIArchitecture />
      <DashboardDesignSystem />
      <DashboardIntelligence />
      <DashboardEngineering />
      <DashboardCTA />
      <Footer />
    </main>
  );
}