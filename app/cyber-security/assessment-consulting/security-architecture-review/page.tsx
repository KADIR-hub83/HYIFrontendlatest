import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import SecurityArchitectureReviewClient from "@/components/section/cyber-security/assessment-consulting/security-architecture-review/SecurityArchitectureReviewClient";

export default function SecurityArchitectureReviewPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SecurityArchitectureReviewClient />
      <Footer />
    </main>
  );
}