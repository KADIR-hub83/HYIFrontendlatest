import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AIPoweredFinanceClient from "@/components/section/technology-solutions/finance-risk-intelligence/ai-powered-finance/AIPoweredFinanceClient";

export default function AIPoweredFinancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <AIPoweredFinanceClient />
      <Footer />
    </main>
  );
}