import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DigitalWorkplaceExperience from "@/components/section/technology-solutions/digital-transformation/digital-workplace/DigitalWorkplaceExperience";

export default function DigitalWorkplacePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#000000] text-white">
      <Header />
      <DigitalWorkplaceExperience />
      <Footer />
    </main>
  );
}