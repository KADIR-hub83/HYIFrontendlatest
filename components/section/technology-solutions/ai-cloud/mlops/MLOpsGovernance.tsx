import GovernanceControlModel from "./GovernanceControlModel";

export default function MLOpsGovernance() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.52fr_1.48fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            08 / GOVERNANCE
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Automation with
            <span className="block text-[#7046e6]">controlled gates.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.44]">
            Production ML workflows can introduce validation, approval,
            versioning and traceability controls at lifecycle transitions
            rather than relying on informal release processes.
          </p>
        </div>

        <GovernanceControlModel />
      </div>
    </section>
  );
}