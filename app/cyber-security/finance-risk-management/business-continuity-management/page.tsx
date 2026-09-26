import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FinanceRiskClient from "@/components/section/cyber-security/finance-risk-management/FinanceRiskClient";

export default function BusinessContinuityManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <FinanceRiskClient pageKey="continuity" />

      <Footer />
    </main>
  );
}