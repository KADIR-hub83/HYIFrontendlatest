// app/cyber-security/security-awareness-training/incident-reporting-training/page.tsx

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import SecurityAwarenessClient from "@/components/section/cyber-security/security-awareness-training/SecurityAwarenessClient";

export default function IncidentReportingTrainingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SecurityAwarenessClient pageKey="incident-reporting" />
      <Footer />
    </main>
  );
}