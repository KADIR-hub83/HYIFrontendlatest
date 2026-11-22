import PrivateCloudModel from "./PrivateCloudModel";

export default function PrivateHostingSection() {
  return (
    <section className="bg-[#000000] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>

          <h2 className="hyi-h1 hyi-white">
            Your models.
            <span className="block hyi-blue">Your environment.</span>
          </h2>

          <p className="mt-2 hyi-p">
            Some AI workloads require stronger control over model artifacts,
            application traffic, data access and infrastructure boundaries.
            Private hosting patterns can place the serving platform inside a
            controlled cloud or enterprise environment.
          </p>

          <p className="mt-2 hyi-p">
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