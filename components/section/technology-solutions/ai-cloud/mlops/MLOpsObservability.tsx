import ObservabilityConsole from "./ObservabilityConsole";

export default function MLOpsObservability() {
  return (
    <section className=" bg-[#000000] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
     

          <h2 className="hyi-h1 hyi-white">
            Observe the model
            <span className="hyi-blue"> and the system.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[740px] hyi-p">
            Production ML operations need visibility across pipeline health,
            model-service behavior, data signals and lifecycle events—not only
            infrastructure uptime.
          </p>
        </div>

        <div className="mt-5">
          <ObservabilityConsole />
        </div>
      </div>
    </section>
  );
}