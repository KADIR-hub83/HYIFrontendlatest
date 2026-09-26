import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import CybersecurityAuditingClient from "@/components/section/cyber-security/assessment-consulting/cybersecurity-auditing/CybersecurityAuditingClient";

export default function CybersecurityAuditingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <CybersecurityAuditingClient />
      <Footer />
    </main>
  );
}