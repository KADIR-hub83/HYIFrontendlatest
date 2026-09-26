import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PortfolioRiskClient from "@/components/section/technology-solutions/finance-risk-intelligence/portfolio-risk/PortfolioRiskClient";

export default function PortfolioRiskPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <PortfolioRiskClient />
      <Footer />
    </main>
  );
}