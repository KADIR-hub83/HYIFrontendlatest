import VersionRolloutModel from "./VersionRolloutModel";

export default function ModelVersioningSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              05 / MODEL VERSIONING
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Upgrade models without
              <span className="block text-[#7046e6]">
                gambling with production.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/[0.44]">
            Treat model releases as controlled production changes. Versioned
            artifacts, staged rollout and observable traffic transitions make
            it easier to introduce a new model while preserving a path back to
            a previous version.
          </p>
        </div>

        <div className="mt-16">
          <VersionRolloutModel />
        </div>
      </div>
    </section>
  );
}