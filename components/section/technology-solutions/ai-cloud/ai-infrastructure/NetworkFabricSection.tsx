import NetworkTopologyModel from "./NetworkTopologyModel";

export default function NetworkFabricSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              05 / NETWORK FABRIC
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Compute is only as fast
              <span className="block text-[#7653df]">as its connections.</span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/[0.43]">
            Distributed AI systems exchange data between workers, storage,
            services and inference endpoints. Network topology therefore
            becomes part of workload performance and reliability.
          </p>
        </div>

        <div className="mt-16">
          <NetworkTopologyModel />
        </div>
      </div>
    </section>
  );
}