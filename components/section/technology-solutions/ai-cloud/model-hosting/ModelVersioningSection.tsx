import VersionRolloutModel from "./VersionRolloutModel";

export default function ModelVersioningSection() {
  return (
    <section className=" bg-[#000000] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center">
          <div className="max-w-[850px] mx-auto">
      
            <h2 className="hyi-h1 hyi-white">
              Upgrade models without
              <span className="block hyi-blue">
                gambling with production.
              </span>
            </h2>
          </div>

          <p className="max-w-[670px] hyi-p mx-auto text-center">
            Treat model releases as controlled production changes. Versioned
            artifacts, staged rollout and observable traffic transitions make
            it easier to introduce a new model while preserving a path back to
            a previous version.
          </p>
        </div>

        <div className="mt-5">
          <VersionRolloutModel />
        </div>
      </div>
    </section>
  );
}