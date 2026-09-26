import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import MobileAppABTestingClient from "@/components/section/technology-solutions/ab-testing/mobile-app/MobileAppABTestingClient";

export default function MobileAppABTestingPage() {
  return (
    <main className="min-h-screen bg-black text-white ">
      <Header />
      <MobileAppABTestingClient />
      <Footer />
    </main>
  );
}