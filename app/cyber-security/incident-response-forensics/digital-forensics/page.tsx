// app/cyber-security/incident-response-forensics/digital-forensics/page.tsx

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import IncidentForensicsClient from "@/components/section/cyber-security/incident-response-forensics/IncidentForensicsClient";

export default function DigitalForensicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <IncidentForensicsClient pageKey="digital" />
      <Footer />
    </main>
  );
}