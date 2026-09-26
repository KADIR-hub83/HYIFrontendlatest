import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import StatisticalAnalysisClient from "@/components/section/technology-solutions/ab-testing/statistical-analysis/StatisticalAnalysisClient";

export default function StatisticalAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <StatisticalAnalysisClient />
      <Footer />
    </main>
  );
}