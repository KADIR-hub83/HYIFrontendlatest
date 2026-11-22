import GPUPerformanceModel from "./GPUPerformanceModel";

export default function GPUObservability() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
        
          <h2 className="hyi-h1 hyi-white">
            Know where compute
            <span className="hyi-blue"> is going.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] hyi-p">
            GPU operations require visibility across workload queues,
            accelerator utilization, memory pressure, cluster state and the
            dependencies surrounding distributed AI jobs.
          </p>
        </div>

        <div className="mt-6">
          <GPUPerformanceModel />
        </div>
      </div>
    </section>
  );
}