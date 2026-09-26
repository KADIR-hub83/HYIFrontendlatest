import ReplicaScaleModel from "./ReplicaScaleModel";

export default function AutoScalingSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            04 / ELASTIC SERVING
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Scale the service,
            <span className="block text-[#7046e6]">not the complexity.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            Inference demand may change throughout the day or after a product
            release. Hosting platforms can coordinate replica capacity around
            workload demand while keeping applications connected to the same
            serving interface.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
            Effective scaling also considers model startup time, memory
            requirements, accelerator availability and the amount of warm
            capacity needed for responsive service.
          </p>
        </div>

        <ReplicaScaleModel />
      </div>
    </section>
  );
}