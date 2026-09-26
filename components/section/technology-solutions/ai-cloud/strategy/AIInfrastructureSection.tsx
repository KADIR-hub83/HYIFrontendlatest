"use client";

import AIComputeModel from "./AIComputeModel";

export default function AIInfrastructureSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
            04 / AI INFRASTRUCTURE
          </p>

          <h2 className="mt-6 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Build for AI,
            <span className="text-[#7046e6]"> not around it.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[14px] leading-8 text-white/[0.5]">
            AI infrastructure connects accelerated compute, storage, data
            pipelines, model services, networking and observability into a
            platform capable of supporting experimentation and production.
          </p>
        </div>

        <div className="mt-14">
          <AIComputeModel />
        </div>
      </div>
    </section>
  );
}