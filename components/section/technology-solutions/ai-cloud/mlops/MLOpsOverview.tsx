import LifecyclePipelineModel from "./LifecyclePipelineModel";

export default function MLOpsOverview() {
  return (
    <section
      id="mlops-overview"
      className="border-y border-white/[0.06] bg-[#070707] py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              01 / ML LIFECYCLE
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Machine learning is
              <span className="block text-[#7046e6]">
                a continuous system.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[12px] leading-7 text-white/[0.45]">
            MLOps connects data, experimentation, training, validation,
            deployment and production monitoring so models can move through a
            controlled, repeatable lifecycle instead of isolated manual steps.
          </p>
        </div>

        <div className="mt-16">
          <LifecyclePipelineModel />
        </div>
      </div>
    </section>
  );
}