import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataTransformationExperience from "@/components/section/technology-solutions/digital-transformation/data-transformation/DataTransformationExperience";

export default function DataTransformationPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />
      <DataTransformationExperience />
      <Footer />
    </main>
  );
}