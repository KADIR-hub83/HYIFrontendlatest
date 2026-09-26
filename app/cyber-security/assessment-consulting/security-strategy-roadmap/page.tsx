import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import SecurityStrategyRoadmapClient from "@/components/section/cyber-security/assessment-consulting/security-strategy-roadmap/SecurityStrategyRoadmapClient";

export default function SecurityStrategyRoadmapPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <SecurityStrategyRoadmapClient />

      <Footer />
    </main>
  );
}