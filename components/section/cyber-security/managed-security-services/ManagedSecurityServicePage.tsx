import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import type { ManagedSecurityService } from "./managedSecurityServices";

import ManagedSecurityHero from "./ManagedSecurityHero";
import SecurityCommandCenter from "./SecurityCommandCenter";
import SecurityCapabilities from "./SecurityCapabilities";
import SecurityArchitecture from "./SecurityArchitecture";
import SecurityIntelligence from "./SecurityIntelligence";
import SecurityOperations from "./SecurityOperations";
import SecurityProcess from "./SecurityProcess";
import SecurityPrinciples from "./SecurityPrinciples";
import SecurityUseCases from "./SecurityUseCases";
import SecurityCTA from "./SecurityCTA";

type Props = {
  service: ManagedSecurityService;
};

export default function ManagedSecurityServicePage({ service }: Props) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />

      <ManagedSecurityHero service={service} />

      <SecurityCommandCenter service={service} />

      <SecurityCapabilities service={service} />

      <SecurityArchitecture service={service} />

      <SecurityIntelligence service={service} />

      <SecurityOperations service={service} />

      <SecurityProcess service={service} />

      <SecurityPrinciples service={service} />

      <SecurityUseCases service={service} />

      <SecurityCTA service={service} />

      <Footer />
    </main>
  );
}