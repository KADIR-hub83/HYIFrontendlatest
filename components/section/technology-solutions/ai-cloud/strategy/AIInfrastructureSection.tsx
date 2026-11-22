"use client";

import AIComputeModel from "./AIComputeModel";

export default function AIInfrastructureSection() {
  return (
    <section className=" bg-[#000000] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
      

          <h2 className="hyi-h1 hyi-white">
            Build for AI,
            <span className="hyi-blue"> not around it.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[760px]  hyi-p">
            AI infrastructure connects accelerated compute, storage, data
            pipelines, model services, networking and observability into a
            platform capable of supporting experimentation and production.
          </p>
        </div>

        <div className="mt-6">
          <AIComputeModel />
        </div>
      </div>
    </section>
  );
}