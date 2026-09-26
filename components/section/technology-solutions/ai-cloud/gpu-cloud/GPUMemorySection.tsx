import MemoryTopologyModel from "./MemoryTopologyModel";

export default function GPUMemorySection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              05 / MEMORY + DATA
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Keep the accelerator
              <span className="block text-[#7653df]">fed with data.</span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/[0.43]">
            AI workload performance depends on more than raw compute.
            Architecture should consider movement between persistent data,
            host resources, accelerator memory and distributed workers.
          </p>
        </div>

        <div className="mt-16">
          <MemoryTopologyModel />
        </div>
      </div>
    </section>
  );
}