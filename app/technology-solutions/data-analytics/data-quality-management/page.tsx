import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataQualityHero from "@/components/section/technology-solutions/data-analytics/data-quality-management/DataQualityHero";
import WhatIsDataQuality from "@/components/section/technology-solutions/data-analytics/data-quality-management/WhatIsDataQuality";
import QualityDimensions from "@/components/section/technology-solutions/data-analytics/data-quality-management/QualityDimensions";
import QualityLifecycle from "@/components/section/technology-solutions/data-analytics/data-quality-management/QualityLifecycle";
import QualityRuleEngine from "@/components/section/technology-solutions/data-analytics/data-quality-management/QualityRuleEngine";
import DataProfiling from "@/components/section/technology-solutions/data-analytics/data-quality-management/DataProfiling";
import QualityObservatory from "@/components/section/technology-solutions/data-analytics/data-quality-management/QualityObservatory";
import RootCauseIntelligence from "@/components/section/technology-solutions/data-analytics/data-quality-management/RootCauseIntelligence";
import QualityVsGovernance from "@/components/section/technology-solutions/data-analytics/data-quality-management/QualityVsGovernance";
import AIDataQuality from "@/components/section/technology-solutions/data-analytics/data-quality-management/AIDataQuality";
import HYIQualityFramework from "@/components/section/technology-solutions/data-analytics/data-quality-management/HYIQualityFramework";
import DataQualityKnowledge from "@/components/section/technology-solutions/data-analytics/data-quality-management/DataQualityKnowledge";
import DataQualityCTA from "@/components/section/technology-solutions/data-analytics/data-quality-management/DataQualityCTA";

export default function DataQualityManagementPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <DataQualityHero />
      <WhatIsDataQuality />
      <QualityDimensions />
      <QualityLifecycle />
      <QualityRuleEngine />
      <DataProfiling />
      <QualityObservatory />
      <RootCauseIntelligence />
      <QualityVsGovernance />
      <AIDataQuality />
      <HYIQualityFramework />
      <DataQualityKnowledge />
      <DataQualityCTA />

      <Footer />
    </main>
  );
}