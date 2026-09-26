import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import CreditRiskClient from "@/components/section/technology-solutions/finance-risk-intelligence/credit-risk/CreditRiskClient";

export default function CreditRiskPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <CreditRiskClient />
      <Footer />
    </main>
  );
}