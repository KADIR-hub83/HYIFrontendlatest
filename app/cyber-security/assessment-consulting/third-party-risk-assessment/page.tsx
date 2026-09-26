import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ThirdPartyRiskAssessmentClient from "@/components/section/cyber-security/assessment-consulting/third-party-risk-assessment/ThirdPartyRiskAssessmentClient";

export default function ThirdPartyRiskAssessmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ThirdPartyRiskAssessmentClient />
      <Footer />
    </main>
  );
}