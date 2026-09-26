import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import PersonalizationTestingClient from "@/components/section/technology-solutions/ab-testing/personalization/PersonalizationTestingClient";

export default function PersonalizationTestingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Header />
      <PersonalizationTestingClient />
      <Footer />
    </main>
  );
}