import DriftRadarModel from "./DriftRadarModel";

export default function DriftDetectionSection() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
     
          <h2 className="hyi-h1 hyi-white">
            Production changes.
            <span className="block hyi-blue">
              Models must be watched.
            </span>
          </h2>

          <p className="mt-2 hyi-p">
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