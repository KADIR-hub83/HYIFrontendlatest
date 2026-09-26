import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FinancialDataAnalyticsClient from "@/components/section/technology-solutions/finance-risk-intelligence/financial-data-analytics/FinancialDataAnalyticsClient";

export default function FinancialDataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <FinancialDataAnalyticsClient />
      <Footer />
    </main>
  );
}