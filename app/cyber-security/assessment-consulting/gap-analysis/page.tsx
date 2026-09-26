import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import CybersecurityGapAnalysisClient from "@/components/section/cyber-security/assessment-consulting/gap-analysis/CybersecurityGapAnalysisClient";

export default function CybersecurityGapAnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <CybersecurityGapAnalysisClient />
      <Footer />
    </main>
  );
}