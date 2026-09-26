import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import SecurityMaturityAssessmentClient from "@/components/section/cyber-security/assessment-consulting/security-maturity-assessment/SecurityMaturityAssessmentClient";

export default function SecurityMaturityAssessmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SecurityMaturityAssessmentClient />
      <Footer />
    </main>
  );
}