import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ITSecurityConsultingClient from "@/components/section/cyber-security/assessment-consulting/it-security-consulting/ITSecurityConsultingClient";

export default function ITSecurityConsultingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ITSecurityConsultingClient />
      <Footer />
    </main>
  );
}