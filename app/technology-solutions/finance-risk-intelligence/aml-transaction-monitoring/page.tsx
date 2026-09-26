import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import AMLTransactionMonitoringClient from "@/components/section/technology-solutions/finance-risk-intelligence/aml-transaction-monitoring/AMLTransactionMonitoringClient";

export default function AMLTransactionMonitoringPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <AMLTransactionMonitoringClient />

      <Footer />
    </main>
  );
}