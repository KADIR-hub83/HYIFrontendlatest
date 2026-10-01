// Next Imports
import { notFound } from "next/navigation";

// Components Imports
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import CorporateTrainingPage from "@/components/section/corporate-ai-training/CorporateTrainingPage";

// Data Imports
import { getCorporateTrainingPage } from "@/components/data/corporateAITraining";

export default function IndustrySpecificAITrainingPage() {
  const data = getCorporateTrainingPage(
    "industry-specific-ai-training"
  );

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />

      <CorporateTrainingPage data={data} />

      <Footer />
    </>
  );
}