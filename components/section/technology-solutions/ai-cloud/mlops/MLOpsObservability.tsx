import ObservabilityConsole from "./ObservabilityConsole";

export default function MLOpsObservability() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            07 / ML OBSERVABILITY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Observe the model
            <span className="text-[#7046e6]"> and the system.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[740px] text-[12px] leading-7 text-white/[0.44]">
            Production ML operations need visibility across pipeline health,
            model-service behavior, data signals and lifecycle events—not only
            infrastructure uptime.
          </p>
        </div>

        <div className="mt-16">
          <ObservabilityConsole />
        </div>
      </div>
    </section>
  );
}