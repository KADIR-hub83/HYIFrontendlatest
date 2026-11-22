import GovernanceControlModel from "./GovernanceControlModel";

export default function MLOpsGovernance() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[0.52fr_1.48fr]">
        <div>
 
          <h2 className="hyi-h1 hyi-white">
            Automation with
            <span className="block hyi-blue">controlled gates.</span>
          </h2>

          <p className="mt-2 hyi-p">
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