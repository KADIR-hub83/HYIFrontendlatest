import InferenceFabricModel from "./InferenceFabricModel";

export default function InferenceCloudSection() {
  return (
    <section className="bg-[#030303] ">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
    

          <h2 className="hyi-h1 hyi-white">
            Models trained.
            <span className="block hyi-blue">Now make them useful.</span>
          </h2>

          <p className="mt-2 hyi-p">
            Production inference has different requirements from training.
            GPU-cloud architecture can separate serving capacity, scale model
            endpoints independently and route requests according to runtime
            requirements.
          </p>

          <div className="mt-5 space-y-3">
            {[
              ["MODEL SERVING", "Deploy model endpoints into dedicated serving pools."],
              ["REQUEST ROUTING", "Direct inference traffic toward appropriate model capacity."],
              ["ELASTIC CAPACITY", "Adjust serving resources as workload demand changes."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[18px] border border-white/[0.06] bg-[#080808] p-5"
              >
                <p className="hyi-p">{title}</p>
                <p className="mt-2 hyi-p">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <InferenceFabricModel />
      </div>
    </section>
  );
}