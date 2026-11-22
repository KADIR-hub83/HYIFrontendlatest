import LiveInferenceMonitor from "./LiveInferenceMonitor";

export default function HostingObservability() {
  return (
    <section className=" bg-[#000000] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
       

          <h2 className="hyi-h1 hyi-white">
            Production models need
            <span className="hyi-blue"> production visibility.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[730px] hyi-p">
            Understand request activity, endpoint health, model-serving
            capacity and runtime behavior as one operational system instead of
            monitoring infrastructure and AI services in isolation.
          </p>
        </div>

        <div className="mt-5">
          <LiveInferenceMonitor />
        </div>
      </div>
    </section>
  );
}