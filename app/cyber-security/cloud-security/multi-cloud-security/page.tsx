import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import CloudSecurityClient from "@/components/section/cyber-security/cloud-security/CloudSecurityClient";
import { cloudSecurityPages } from "@/components/section/cyber-security/cloud-security/cloudSecurityData";

export default function Page() {
  const service = cloudSecurityPages["multi-cloud-security"];
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <CloudSecurityClient service={service} />
      <Footer />
    </main>
  );
}
