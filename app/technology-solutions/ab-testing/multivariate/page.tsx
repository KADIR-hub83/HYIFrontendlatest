import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import MultivariateTestingClient from "@/components/section/technology-solutions/ab-testing/multivariate/MultivariateTestingClient";

export default function MultivariateTestingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Header />
      <MultivariateTestingClient />
      <Footer />
    </main>
  );
}