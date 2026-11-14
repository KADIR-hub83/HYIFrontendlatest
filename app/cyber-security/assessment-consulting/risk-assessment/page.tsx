import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import RiskAssessmentClient from "@/components/section/cyber-security/assessment-consulting/risk-assessment/RiskAssessmentClient";

export default function RiskAssessmentPage() {
  return (
    <main className=" bg-black text-white">
      <Header />
      <RiskAssessmentClient />
      <Footer />
    </main>
  );
}