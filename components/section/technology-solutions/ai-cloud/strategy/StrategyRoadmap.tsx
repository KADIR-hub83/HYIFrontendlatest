"use client";

import RoadmapEngine from "./RoadmapEngine";

export default function StrategyRoadmap() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
       

          <h2 className="hyi-h1 hyi-white">
            Strategy becomes real
            <span className="block hyi-blue">through sequencing.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[720px] hyi-p">
            Turn the target state into an executable sequence of foundations,
            platform capabilities, workload migrations, AI enablement,
            governance and continuous optimization.
          </p>
        </div>

        <div className="mt-6">
          <RoadmapEngine />
        </div>
      </div>
    </section>
  );
}