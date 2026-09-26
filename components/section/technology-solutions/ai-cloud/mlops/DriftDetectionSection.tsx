import DriftRadarModel from "./DriftRadarModel";

export default function DriftDetectionSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            04 / MODEL DRIFT
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Production changes.
            <span className="block text-[#7046e6]">
              Models must be watched.
            </span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.44]">
            Monitor changes in production inputs, model outputs and other
            observable signals that may indicate the environment seen by a
            deployed model is moving away from its expected operating
            conditions.
          </p>
        </div>

        <DriftRadarModel />
      </div>
    </section>
  );
}