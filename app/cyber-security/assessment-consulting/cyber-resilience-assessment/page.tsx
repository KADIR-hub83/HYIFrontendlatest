import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import DevloperDirectory from "@/components/section/hire-developer/DeveloperDirectory"

import CyberResilienceAssessmentClient from "@/components/section/cyber-security/assessment-consulting/cyber-resilience-assessment/CyberResilienceAssessmentClient";

export default function CyberResilienceAssessmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
       <DeveloperDirectory />
      <CyberResilienceAssessmentClient />

      <Footer />
    </main>
  );
}