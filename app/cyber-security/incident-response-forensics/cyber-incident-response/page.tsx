// app/cyber-security/incident-response-forensics/cyber-incident-response/page.tsx

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import IncidentForensicsClient from "@/components/section/cyber-security/incident-response-forensics/IncidentForensicsClient";

export default function CyberIncidentResponsePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <IncidentForensicsClient pageKey="incident" />
      <Footer />
    </main>
  );
}