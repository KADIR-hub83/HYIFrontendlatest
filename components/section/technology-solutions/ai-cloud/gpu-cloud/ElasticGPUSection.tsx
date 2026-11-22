import ElasticScaleModel from "./ElasticScaleModel";

export default function ElasticGPUSection() {
  return (
    <section className="bg-[#030303]">
      <div className="mx-auto grid max-w-[1350px] gap-12 px-5 md:px-10 lg:grid-cols-[0.6fr_1.4fr]">
        <div>
        

          <h2 className="hyi-h1 hyi-white">
            Capacity that follows
            <span className="block hyi-blue">the workload.</span>
          </h2>

          <p className="mt-2 hyi-p">
            GPU demand can change across experimentation, training and
            production. A cloud operating model helps teams manage these
            changes through capacity pools, scheduling and lifecycle
            automation.
          </p>

          <p className="mt-2 hyi-p">
            Elasticity should still respect workload startup time, accelerator
            availability, data locality and the economics of specialized
            compute.
          </p>
        </div>

        <ElasticScaleModel />
      </div>
    </section>
  );
}