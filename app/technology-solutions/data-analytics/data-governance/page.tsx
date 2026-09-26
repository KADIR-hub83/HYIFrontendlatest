import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataGovernanceHero from "@/components/section/technology-solutions/data-analytics/data-governance/DataGovernanceHero";
import GovernanceDefinition from "@/components/section/technology-solutions/data-analytics/data-governance/GovernanceDefinition";
import GovernancePillars from "@/components/section/technology-solutions/data-analytics/data-governance/GovernancePillars";
import GovernanceOperatingModel from "@/components/section/technology-solutions/data-analytics/data-governance/GovernanceOperatingModel";
import DataOwnership from "@/components/section/technology-solutions/data-analytics/data-governance/DataOwnership";
import DataCatalogSection from "@/components/section/technology-solutions/data-analytics/data-governance/DataCatalogSection";
import DataLineageSection from "@/components/section/technology-solutions/data-analytics/data-governance/DataLineageSection";
import DataQualitySection from "@/components/section/technology-solutions/data-analytics/data-governance/DataQualitySection";
import SecurityGovernance from "@/components/section/technology-solutions/data-analytics/data-governance/SecurityGovernance";
import HYIGovernanceFramework from "@/components/section/technology-solutions/data-analytics/data-governance/HYIGovernanceFramework";
import GovernanceLifecycle from "@/components/section/technology-solutions/data-analytics/data-governance/GovernanceLifecycle";
import GovernanceUseCases from "@/components/section/technology-solutions/data-analytics/data-governance/GovernanceUseCases";
import GovernanceFAQ from "@/components/section/technology-solutions/data-analytics/data-governance/GovernanceFAQ";
import DataGovernanceCTA from "@/components/section/technology-solutions/data-analytics/data-governance/DataGovernanceCTA";

export default function DataGovernancePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <Header />

      <DataGovernanceHero />
      <GovernanceDefinition />
      <GovernancePillars />
      <GovernanceOperatingModel />
      <DataOwnership />
      <DataCatalogSection />
      <DataLineageSection />
      <DataQualitySection />
      <SecurityGovernance />
      <HYIGovernanceFramework />
      <GovernanceLifecycle />
      <GovernanceUseCases />
      <GovernanceFAQ />
      <DataGovernanceCTA />

      <Footer />
    </main>
  );
}