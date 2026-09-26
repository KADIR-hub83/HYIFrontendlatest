import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import IntelligentAutomationClient from "@/components/section/technology-solutions/digital-transformation/intelligent-automation/IntelligentAutomationClient";

export default function IntelligentAutomationPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />

      <IntelligentAutomationClient />

      <Footer />
    </main>
  );
}