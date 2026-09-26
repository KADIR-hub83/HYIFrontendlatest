import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FinancialForecastingClient from "@/components/section/technology-solutions/finance-risk-intelligence/financial-forecasting/FinancialForecastingClient";

export default function FinancialForecastingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <FinancialForecastingClient />
      <Footer />
    </main>
  );
}