"use client";

import FinOpsSimulator from "./FinOpsSimulator";

export default function CloudEconomics() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              06 / CLOUD ECONOMICS
            </p>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Engineer value,
              <span className="block text-[#7046e6]">not just capacity.</span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[14px] leading-8 text-white/[0.5] lg:justify-self-end">
            AI workloads can introduce highly variable compute and data costs.
            FinOps practices connect architecture decisions with ownership,
            utilization, forecasting and business value.
          </p>
        </div>

        <div className="mt-14">
          <FinOpsSimulator />
        </div>
      </div>
    </section>
  );
}