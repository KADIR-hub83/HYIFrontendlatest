import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ZeroTrustConsultingClient from "@/components/section/cyber-security/assessment-consulting/zero-trust-consulting/ZeroTrustConsultingClient";

export default function ZeroTrustConsultingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ZeroTrustConsultingClient />
      <Footer />
    </main>
  );
}