import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import EndpointHero from "./EndpointHero";
import EndpointCapabilities from "./EndpointCapabilities";
import EndpointIntelligence from "./EndpointIntelligence";
import EndpointArchitecture from "./EndpointArchitecture";
import EndpointProcess from "./EndpointProcess";
import EndpointUseCases from "./EndpointUseCases";
import EndpointPrinciples from "./EndpointPrinciples";
import EndpointCTA from "./EndpointCTA";

import type { EndpointService } from "./endpointServices";

export default function EndpointServicePage({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <EndpointHero service={service} />

      <EndpointCapabilities service={service} />

      <EndpointIntelligence service={service} />

      <EndpointArchitecture service={service} />

      <EndpointProcess service={service} />

      <EndpointUseCases service={service} />

      <EndpointPrinciples service={service} />

      <EndpointCTA service={service} />

      <Footer />
    </main>
  );
}