// app/cyber-security/incident-response-forensics/evidence-collection/page.tsx

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import IncidentForensicsClient from "@/components/section/cyber-security/incident-response-forensics/IncidentForensicsClient";

export default function EvidenceCollectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <IncidentForensicsClient pageKey="evidence" />
      <Footer />
    </main>
  );
}