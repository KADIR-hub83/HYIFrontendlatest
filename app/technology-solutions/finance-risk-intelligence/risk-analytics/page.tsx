import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import RiskAnalyticsClient from "@/components/section/technology-solutions/finance-risk-intelligence/risk-analytics/RiskAnalyticsClient";

export default function RiskAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <RiskAnalyticsClient />
      <Footer />
    </main>
  );
}