import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ComplianceRiskClient from "@/components/section/cyber-security/compliance-risk-management/ComplianceRiskClient";

export default function ISO27001CompliancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ComplianceRiskClient pageKey="iso27001" />
      <Footer />
    </main>
  );
}