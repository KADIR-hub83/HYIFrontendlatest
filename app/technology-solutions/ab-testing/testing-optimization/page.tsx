import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import TestingOptimizationClient from "@/components/section/technology-solutions/ab-testing/testing-optimization/TestingOptimizationClient";

export default function TestingOptimizationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <TestingOptimizationClient />
      <Footer />
    </main>
  );
}