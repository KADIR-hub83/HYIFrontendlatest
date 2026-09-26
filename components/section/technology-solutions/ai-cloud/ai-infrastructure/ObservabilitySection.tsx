import TelemetryModel from "./TelemetryModel";

export default function ObservabilitySection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            06 / AI OBSERVABILITY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            See what the
            <span className="block text-[#7653df]">infrastructure sees.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            AI operations need visibility into resource utilization, workload
            queues, infrastructure health, capacity pressure and the
            dependencies between compute, storage and network systems.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
            Observability connects these signals so engineering teams can
            investigate bottlenecks and operational changes with infrastructure
            context.
          </p>
        </div>

        <TelemetryModel />
      </div>
    </section>
  );
}