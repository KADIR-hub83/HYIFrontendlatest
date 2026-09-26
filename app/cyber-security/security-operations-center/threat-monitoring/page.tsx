import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import SOCServicePage from "@/components/section/cyber-security/security-operations-center/SOCServicePage";
import { getSOCService } from "@/components/section/cyber-security/security-operations-center/socServices";

export default function ThreatMonitoringPage() {
  const service = getSOCService("threat-monitoring");

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Header />
      <SOCServicePage service={service} />
      <Footer />
    </main>
  );
}