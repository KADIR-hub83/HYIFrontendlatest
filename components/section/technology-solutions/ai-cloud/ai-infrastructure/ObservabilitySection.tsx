import TelemetryModel from "./TelemetryModel";

export default function ObservabilitySection() {
  return (
    <section className="bg-[#030303] py-">
      <div className="mx-auto grid max-w-[1350px] gap-12 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
    
          <h2 className=" hyi-h1 hyi-white">
            See what the
            <span className="block hyi-blue">infrastructure sees.</span>
          </h2>

          <p className="mt-2 hyi-p">
            AI operations need visibility into resource utilization, workload
            queues, infrastructure health, capacity pressure and the
            dependencies between compute, storage and network systems.
          </p>

          <p className="mt-2 hyi-p">
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