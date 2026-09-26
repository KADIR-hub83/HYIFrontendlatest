import RuntimeClusterModel from "./RuntimeClusterModel";

export default function ModelRuntimeSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            03 / MODEL RUNTIME
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Give every model
            <span className="text-[#7046e6]"> the right runtime.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[730px] text-[12px] leading-7 text-white/[0.45]">
            Different models can require different memory profiles,
            accelerators, libraries and serving behavior. Hosting architecture
            should keep these runtime requirements isolated from the
            applications consuming the model.
          </p>
        </div>

        <div className="mt-16">
          <RuntimeClusterModel />
        </div>
      </div>
    </section>
  );
}