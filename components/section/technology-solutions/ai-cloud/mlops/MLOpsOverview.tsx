import LifecyclePipelineModel from "./LifecyclePipelineModel";

export default function MLOpsOverview() {
  return (
    <section
      id="mlops-overview"
      className=" bg-[#070707] "
    >
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center mx-auto">
          <div className="max-w-[850px] mx-auto">
            <h2 className="hyi-h1 hyi-white">
              Machine learning is
              <span className="block hyi-blue">
                a continuous system.
              </span>
            </h2>
          </div>

          <p className="max-w-[730px] hyi-p mx-auto">
            MLOps connects data, experimentation, training, validation,
            deployment and production monitoring so models can move through a
            controlled, repeatable lifecycle instead of isolated manual steps.
          </p>
        </div>

        <div className="mt-5">
          <LifecyclePipelineModel />
        </div>
      </div>
    </section>
  );
}