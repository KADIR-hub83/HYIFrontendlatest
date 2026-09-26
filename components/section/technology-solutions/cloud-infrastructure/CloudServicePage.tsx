"use client";



import CloudHero from "./CloudHero";
// import CloudArchitectureModel from "./CloudArchitectureModel";
import CloudKnowledge from "./CloudKnowledge";
import CloudProcess from "./CloudProcess";
import CloudCapabilities from "./CloudCapabilities";
import CloudPrinciples from "./CloudPrinciples";
import CloudUseCases from "./CloudUseCases";
import CloudCTA from "./CloudCTA";

import { CloudService } from "./cloudServices";

export default function CloudServicePage({
  service,
}: {
  service: CloudService;
}) {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">


      <CloudHero service={service} />
      {/* <CloudArchitectureModel service={service} /> */}
      <CloudKnowledge service={service} />
      <CloudProcess service={service} />
      <CloudCapabilities service={service} />
      <CloudPrinciples service={service} />
      <CloudUseCases service={service} />
      <CloudCTA service={service} />


    </main>
  );
}