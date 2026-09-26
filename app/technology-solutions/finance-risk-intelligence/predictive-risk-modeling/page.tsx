import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PredictiveRiskModelingClient from "@/components/section/technology-solutions/finance-risk-intelligence/predictive-risk-modeling/PredictiveRiskModelingClient";

export default function PredictiveRiskModelingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <PredictiveRiskModelingClient />
      <Footer />
    </main>
  );
}