import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FraudAnomalyDetectionClient from "@/components/section/technology-solutions/finance-risk-intelligence/fraud-anomaly-detection/FraudAnomalyDetectionClient";

export default function FraudAnomalyDetectionPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <FraudAnomalyDetectionClient />
      <Footer />
    </main>
  );
}