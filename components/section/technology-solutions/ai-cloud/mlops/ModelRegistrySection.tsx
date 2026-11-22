import ModelRegistryModel from "./ModelRegistryModel";

export default function ModelRegistrySection() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.52fr_1.48fr]">
<div>
          <h2 className="hyi-h1 hyi-white">
            Know exactly
            <span className="block hyi-blue">what is running.</span>
          </h2>

          <p className="mt-2 hyi-p">
            A model registry provides a controlled record of model versions,
            lifecycle state and deployment candidates so production releases
            can reference known model artifacts.
          </p>

          <p className="mt-2 hyi-p">
            Versioned models also make it easier to connect a production
            endpoint back to the model release that created its behavior.
          </p>
        </div>

        <ModelRegistryModel />
      </div>
    </section>
  );
}