import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ExperimentAutomationClient from "@/components/section/technology-solutions/ab-testing/experiment-automation/ExperimentAutomationClient";

export default function ExperimentAutomationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <ExperimentAutomationClient />
      <Footer />
    </main>
  );
}