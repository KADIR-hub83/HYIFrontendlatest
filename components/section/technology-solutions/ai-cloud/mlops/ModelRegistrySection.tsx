import ModelRegistryModel from "./ModelRegistryModel";

export default function ModelRegistrySection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.52fr_1.48fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            02 / MODEL REGISTRY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Know exactly
            <span className="block text-[#7046e6]">what is running.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.44]">
            A model registry provides a controlled record of model versions,
            lifecycle state and deployment candidates so production releases
            can reference known model artifacts.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
            Versioned models also make it easier to connect a production
            endpoint back to the model release that created its behavior.
          </p>
        </div>

        <ModelRegistryModel />
      </div>
    </section>
  );
}