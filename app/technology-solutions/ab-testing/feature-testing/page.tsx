import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import FeatureTestingClient from "@/components/section/technology-solutions/ab-testing/feature-testing/FeatureTestingClient";

export default function FeatureTestingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <Header />
      <FeatureTestingClient />
      <Footer />
    </main>
  );
}