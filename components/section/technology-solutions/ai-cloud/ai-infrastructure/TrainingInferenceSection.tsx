import PipelineFlowModel from "./PipelineFlowModel";

export default function TrainingInferenceSection() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
  

          <h2 className="hyi-h1 hyi-white">
            From data to model
            <span className="hyi-blue"> to production.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[680px] hyi-p">
            Infrastructure should support the complete model lifecycle rather
            than optimizing only one isolated training or serving stage.
          </p>
        </div>

        <div className="mt-6">
          <PipelineFlowModel />
        </div>
      </div>
    </section>
  );
}