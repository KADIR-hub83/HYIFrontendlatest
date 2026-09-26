const inputs = [
  ["Business objective", "What outcome are we trying to maximize or minimize?"],
  ["Decision variables", "Which choices are actually under organizational control?"],
  ["Constraints", "What capacity, policy, budget or operational limits must be respected?"],
  ["Predictions", "What future conditions and probabilities are expected?"],
  ["Trade-offs", "Which competing objectives must be balanced?"],
  ["Uncertainty", "How sensitive is the decision to changing assumptions?"],
];

export default function DecisionIntelligence() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e6dbf2]/40">
              Decision Intelligence
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              A forecast says
              <span className="block text-white/35">
                what could happen.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[12px] leading-7 text-white/52">
              A prescription evaluates what actions are available, how those
              actions interact with constraints and which combination best
              serves the defined objective.
            </p>
          </div>

          <div className="grid border-l border-t border-white/[0.07] sm:grid-cols-2">
            {inputs.map(([title, text], index) => (
              <div
                key={title}
                className="min-h-[220px] border-b border-r border-white/[0.07] p-7"
              >
                <span className="font-mono text-[6px] text-[#e8def5]/30">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-lg font-medium text-white/85">
                  {title}
                </h3>

                <p className="mt-4 max-w-[300px] text-[10px] leading-6 text-white/40">
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