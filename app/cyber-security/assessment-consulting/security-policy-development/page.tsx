import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import SecurityPolicyDevelopmentClient from "@/components/section/cyber-security/assessment-consulting/security-policy-development/SecurityPolicyDevelopmentClient";

export default function SecurityPolicyDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SecurityPolicyDevelopmentClient />
      <Footer />
    </main>
  );
}