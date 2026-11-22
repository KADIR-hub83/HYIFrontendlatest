import ExperimentMatrix from "./ExperimentMatrix";

export default function ExperimentSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center">
          <div className="max-w-[850px] mx-auto">
    

            <h2 className="hyi-h1 hyi-white">
              Turn experimentation
              <span className="block hyi-blue">into evidence.</span>
            </h2>
          </div>

          <p className="max-w-[700px] mx-auto hyi-p">
            Track model configurations, datasets and evaluation results so
            teams can compare runs and understand which candidate is being
            considered for the next lifecycle stage.
          </p>
        </div>

        <div className="mt-5">
          <ExperimentMatrix />
        </div>
      </div>
    </section>
  );
}