import FeaturePipelineModel from "./FeaturePipelineModel";

export default function FeaturePipelineSection() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.5fr_1.5fr]">
        <div>
        

          <h2 className="hyi-h1 hyi-white">
            Connect data to
            <span className="block hyi-blue">model behavior.</span>
          </h2>

          <p className="mt-2 hyi-p">
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