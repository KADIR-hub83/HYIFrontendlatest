import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FinancialAnalyticsClient from "@/components/section/technology-solutions/finance-risk-intelligence/financial-analytics/FinancialAnalyticsClient";

export default function FinancialAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <FinancialAnalyticsClient />
      <Footer />
    </main>
  );
}