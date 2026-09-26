import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import WorkflowAutomationClient from "@/components/section/technology-solutions/digital-transformation/workflow-automation/WorkflowAutomationClient";

export default function WorkflowAutomationPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />

      <WorkflowAutomationClient />

      <Footer />
    </main>
  );
}