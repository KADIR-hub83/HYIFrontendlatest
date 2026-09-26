import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import CloudTransformationClient from "@/components/section/technology-solutions/digital-transformation/cloud-transformation/CloudTransformationClient";

export default function CloudTransformationPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />
      <CloudTransformationClient />
      <Footer />
    </main>
  );
}