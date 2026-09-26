import ElasticScaleModel from "./ElasticScaleModel";

export default function ElasticGPUSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.6fr_1.4fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            06 / ELASTIC GPU CAPACITY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Capacity that follows
            <span className="block text-[#7653df]">the workload.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            GPU demand can change across experimentation, training and
            production. A cloud operating model helps teams manage these
            changes through capacity pools, scheduling and lifecycle
            automation.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
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