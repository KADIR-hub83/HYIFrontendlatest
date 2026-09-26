import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ExperimentDesignClient from "@/components/section/technology-solutions/ab-testing/experiment-design/ExperimentDesignClient";

export default function ExperimentDesignPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <ExperimentDesignClient />
      <Footer />
    </main>
  );
}