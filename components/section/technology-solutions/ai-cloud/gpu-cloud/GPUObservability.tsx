import GPUPerformanceModel from "./GPUPerformanceModel";

export default function GPUObservability() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            07 / GPU OBSERVABILITY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Know where compute
            <span className="text-[#7653df]"> is going.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-[12px] leading-7 text-white/[0.45]">
            GPU operations require visibility across workload queues,
            accelerator utilization, memory pressure, cluster state and the
            dependencies surrounding distributed AI jobs.
          </p>
        </div>

        <div className="mt-16">
          <GPUPerformanceModel />
        </div>
      </div>
    </section>
  );
}