import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import WebsiteABTestingClient from "@/components/section/technology-solutions/ab-testing/website/WebsiteABTestingClient";

export default function WebsiteABTestingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <WebsiteABTestingClient />
      <Footer />
    </main>
  );
}