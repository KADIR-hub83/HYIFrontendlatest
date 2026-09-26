import PrivateCloudModel from "./PrivateCloudModel";

export default function PrivateHostingSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            06 / PRIVATE MODEL HOSTING
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Your models.
            <span className="block text-[#7046e6]">Your environment.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            Some AI workloads require stronger control over model artifacts,
            application traffic, data access and infrastructure boundaries.
            Private hosting patterns can place the serving platform inside a
            controlled cloud or enterprise environment.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
            The architecture should still preserve repeatable deployment,
            observability, scaling and lifecycle management instead of turning
            privacy requirements into manual infrastructure operations.
          </p>
        </div>

        <PrivateCloudModel />
      </div>
    </section>
  );
}