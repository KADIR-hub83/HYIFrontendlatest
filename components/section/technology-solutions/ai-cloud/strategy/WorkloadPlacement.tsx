"use client";

import WorkloadPlacementEngine from "./WorkloadPlacementEngine";

export default function WorkloadPlacement() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
       

            <h2 className="hyi-h1 hyi-white">
              Right workload.
              <span className="block hyi-blue">Right environment.</span>
            </h2>

            <p className="mt-2 max-w-[520px] hyi-p">
              Not every workload belongs in the same environment. Placement
              decisions should consider latency, data gravity, security,
              compliance, integration, elasticity, economics and operational
              maturity.
            </p>
          </div>

          <WorkloadPlacementEngine />
        </div>
      </div>
    </section>
  );
}