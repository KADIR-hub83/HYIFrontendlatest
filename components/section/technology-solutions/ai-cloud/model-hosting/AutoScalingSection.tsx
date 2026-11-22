import ReplicaScaleModel from "./ReplicaScaleModel";

export default function AutoScalingSection() {
  return (
    <section className="bg-[#000000] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <h2 className="hyi-h1 hyi-white">
            Scale the service,
            <span className="block hyi-blue">not the complexity.</span>
          </h2>

          <p className="mt-2 hyi-p">
            Inference demand may change throughout the day or after a product
            release. Hosting platforms can coordinate replica capacity around
            workload demand while keeping applications connected to the same
            serving interface.
          </p>

          <p className="mt-2 hyi-p">
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