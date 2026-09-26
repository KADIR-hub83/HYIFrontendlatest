// app/cyber-security/security-awareness-training/employee-security-training/page.tsx

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import SecurityAwarenessClient from "@/components/section/cyber-security/security-awareness-training/SecurityAwarenessClient";

export default function EmployeeSecurityTrainingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SecurityAwarenessClient pageKey="employee-training" />
      <Footer />
    </main>
  );
}