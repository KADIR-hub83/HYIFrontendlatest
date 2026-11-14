"use client";

import CloudHero from "./CloudHero";
// import CloudArchitectureModel from "./CloudArchitectureModel";
import CloudKnowledge from "./CloudKnowledge";
import CloudProcess from "./CloudProcess";
import CloudCapabilities from "./CloudCapabilities";
import CloudPrinciples from "./CloudPrinciples";
import CloudUseCases from "./CloudUseCases";
import CloudCTA from "./CloudCTA";

import type { CloudService } from "./cloudServices";

export default function CloudServicePage({
  service,
}: {
  service: CloudService;
}) {
  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      <CloudHero service={service} />
      {/* <CloudArchitectureModel service={service} /> */}
      <CloudKnowledge service={service} />
      <CloudProcess service={service} />
      <CloudCapabilities service={service} />
      <CloudPrinciples service={service} />
      <CloudUseCases service={service} />
      {/* <CloudCTA service={service} /> */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.4);
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}