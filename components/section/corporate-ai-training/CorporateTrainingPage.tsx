// Data Types
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

// Components
import CorporateHero from "./CorporateHero";
import TrainingOverview from "./TrainingOverview";
import TrainingPrograms from "./TrainingPrograms";
import LearningJourney from "./LearningJourney";
import BusinessOutcomes from "./BusinessOutcomes";
import WhoItsFor from "./WhoItsFor";
import DeliveryModels from "./DeliveryModels";
import CorporateCTA from "./CorporateCTA";

interface CorporateTrainingPageProps {
  data: CorporateTrainingPageData;
}

export default function CorporateTrainingPage({
  data,
}: CorporateTrainingPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <CorporateHero data={data.hero} />
      <TrainingOverview data={data.overview} />
      <TrainingPrograms data={data.programs} />
      <LearningJourney data={data.journey} />
      <BusinessOutcomes data={data.outcomes} />
      <WhoItsFor data={data.audience} />
      <DeliveryModels data={data.delivery} />
      <CorporateCTA data={data.cta} />
    </main>
  );
}