// Next Imports
import { notFound } from "next/navigation";

// Components Imports
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import CorporateTrainingPage from "@/components/section/corporate-ai-training/CorporateTrainingPage";

// Data Imports
import { getCorporateTrainingPage } from "@/components/data/corporateAITraining";

export default function ExecutiveAIProgramsPage() {
  const data = getCorporateTrainingPage(
    "executive-ai-programs"
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