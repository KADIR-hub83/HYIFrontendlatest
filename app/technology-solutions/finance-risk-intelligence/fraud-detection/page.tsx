import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FraudDetectionClient from "@/components/section/technology-solutions/finance-risk-intelligence/fraud-detection/FraudDetectionClient";

export default function FraudDetectionPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <FraudDetectionClient />
      <Footer />
    </main>
  );
}