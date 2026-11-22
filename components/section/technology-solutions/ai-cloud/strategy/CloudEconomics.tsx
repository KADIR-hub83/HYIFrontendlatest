"use client";

import FinOpsSimulator from "./FinOpsSimulator";

export default function CloudEconomics() {
  return (
    <section className=" ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center">
          <div>
       
            <h2 className=" hyi-h1 hyi-white">
              Engineer value,
              <span className="block hyi-blue">not just capacity.</span>
            </h2>
          </div>

          <p className="max-w-[650px] hyi-p mx-auto mt-2">
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