const capabilities = [
  ["Mathematical Optimization", "Search complex decision spaces while respecting operational constraints."],
  ["What-if Simulation", "Evaluate decisions under changing assumptions and uncertain future conditions."],
  ["Resource Allocation", "Allocate capital, people, inventory, equipment and capacity against objectives."],
  ["Decision Automation", "Operationalize repeatable recommendations inside business workflows and applications."],
  ["Constraint Management", "Model budgets, policies, capacity, dependencies and service requirements."],
  ["Continuous Re-optimization", "Recalculate recommendations as new events, forecasts and constraints arrive."],
];

export default function PrescriptiveCapabilities() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#e7dcf4]/40">
              CORE CAPABILITIES
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              Intelligence designed
              <span className="block text-white/35">
                for decisions.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.07] md:grid-cols-2">
            {capabilities.map(([title, text], index) => (
              <div
                key={title}
                className="min-h-[210px] border-b border-r border-white/[0.07] p-7"
              >
                <span className="font-mono text-[6px] text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-lg font-medium text-white/85">
                  {title}
                </h3>

                <p className="mt-4 text-[10px] leading-6 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}