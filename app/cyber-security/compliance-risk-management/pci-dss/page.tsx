import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ComplianceRiskClient from "@/components/section/cyber-security/compliance-risk-management/ComplianceRiskClient";

export default function PCIDSSCompliancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ComplianceRiskClient pageKey="pci" />
      <Footer />
    </main>
  );
}