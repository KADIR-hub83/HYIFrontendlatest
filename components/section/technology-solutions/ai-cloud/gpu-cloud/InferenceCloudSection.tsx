import InferenceFabricModel from "./InferenceFabricModel";

export default function InferenceCloudSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            04 / GPU INFERENCE
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Models trained.
            <span className="block text-[#7653df]">Now make them useful.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            Production inference has different requirements from training.
            GPU-cloud architecture can separate serving capacity, scale model
            endpoints independently and route requests according to runtime
            requirements.
          </p>

          <div className="mt-9 space-y-3">
            {[
              ["MODEL SERVING", "Deploy model endpoints into dedicated serving pools."],
              ["REQUEST ROUTING", "Direct inference traffic toward appropriate model capacity."],
              ["ELASTIC CAPACITY", "Adjust serving resources as workload demand changes."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[18px] border border-white/[0.06] bg-[#080808] p-5"
              >
                <p className="font-mono text-[7px] text-[#9878ef]">{title}</p>
                <p className="mt-3 text-[10px] leading-5 text-white/[0.38]">
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