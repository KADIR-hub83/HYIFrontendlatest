import PipelineFlowModel from "./PipelineFlowModel";

export default function TrainingInferenceSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            03 / AI WORKLOAD LIFECYCLE
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            From data to model
            <span className="text-[#7653df]"> to production.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-[12px] leading-7 text-white/[0.45]">
            Infrastructure should support the complete model lifecycle rather
            than optimizing only one isolated training or serving stage.
          </p>
        </div>

        <div className="mt-16">
          <PipelineFlowModel />
        </div>
      </div>
    </section>
  );
}