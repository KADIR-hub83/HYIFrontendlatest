import FeaturePipelineModel from "./FeaturePipelineModel";

export default function FeaturePipelineSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.5fr_1.5fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            06 / FEATURE PIPELINE
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Connect data to
            <span className="block text-[#7046e6]">model behavior.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.44]">
            Operational ML pipelines coordinate data preparation and feature
            transformations so training and inference can consume
            intentionally managed inputs.
          </p>
        </div>

        <FeaturePipelineModel />
      </div>
    </section>
  );
}