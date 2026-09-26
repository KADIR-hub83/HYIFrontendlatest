import LiveInferenceMonitor from "./LiveInferenceMonitor";

export default function HostingObservability() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            07 / SERVING OBSERVABILITY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Production models need
            <span className="text-[#7046e6]"> production visibility.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[730px] text-[12px] leading-7 text-white/[0.45]">
            Understand request activity, endpoint health, model-serving
            capacity and runtime behavior as one operational system instead of
            monitoring infrastructure and AI services in isolation.
          </p>
        </div>

        <div className="mt-16">
          <LiveInferenceMonitor />
        </div>
      </div>
    </section>
  );
}