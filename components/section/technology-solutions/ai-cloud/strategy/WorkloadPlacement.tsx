"use client";

import WorkloadPlacementEngine from "./WorkloadPlacementEngine";

export default function WorkloadPlacement() {
  return (
    <section className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              03 / WORKLOAD PLACEMENT
            </p>

            <h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-0.055em] md:text-7xl">
              Right workload.
              <span className="block text-[#7046e6]">Right environment.</span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[14px] leading-8 text-white/[0.5]">
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