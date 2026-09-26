import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ThreatDetectionClient from "@/components/section/cyber-security/threat-detection-response/ThreatDetectionClient";

export default function AutomatedThreatResponsePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ThreatDetectionClient pageKey="automated" />
      <Footer />
    </main>
  );
}