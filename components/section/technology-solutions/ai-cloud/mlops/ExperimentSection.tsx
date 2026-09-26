import ExperimentMatrix from "./ExperimentMatrix";

export default function ExperimentSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              05 / EXPERIMENT TRACKING
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Turn experimentation
              <span className="block text-[#7046e6]">into evidence.</span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[12px] leading-7 text-white/[0.44]">
            Track model configurations, datasets and evaluation results so
            teams can compare runs and understand which candidate is being
            considered for the next lifecycle stage.
          </p>
        </div>

        <div className="mt-16">
          <ExperimentMatrix />
        </div>
      </div>
    </section>
  );
}