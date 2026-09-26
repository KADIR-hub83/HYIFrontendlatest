"use client";

import RoadmapEngine from "./RoadmapEngine";

export default function StrategyRoadmap() {
  return (
    <section className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
            07 / EXECUTION ROADMAP
          </p>

          <h2 className="mt-6 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Strategy becomes real
            <span className="block text-[#7046e6]">through sequencing.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-8 text-white/[0.5]">
            Turn the target state into an executable sequence of foundations,
            platform capabilities, workload migrations, AI enablement,
            governance and continuous optimization.
          </p>
        </div>

        <div className="mt-14">
          <RoadmapEngine />
        </div>
      </div>
    </section>
  );
}