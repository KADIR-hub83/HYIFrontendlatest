import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import RegulatoryComplianceClient from "@/components/section/technology-solutions/finance-risk-intelligence/regulatory-compliance/RegulatoryComplianceClient";

export default function RegulatoryCompliancePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <RegulatoryComplianceClient />
      <Footer />
    </main>
  );
}