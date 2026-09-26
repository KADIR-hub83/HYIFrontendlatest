const workflow = [
  {
    n: "01",
    title: "Define",
    text: "Translate a business problem into measurable objectives and controllable decisions.",
  },
  {
    n: "02",
    title: "Predict",
    text: "Estimate future demand, behavior, risk, failures or other relevant outcomes.",
  },
  {
    n: "03",
    title: "Constrain",
    text: "Encode budgets, policies, capacities, SLAs, dependencies and operating limits.",
  },
  {
    n: "04",
    title: "Optimize",
    text: "Search feasible alternatives and compare their expected objective values.",
  },
  {
    n: "05",
    title: "Recommend",
    text: "Present actionable decisions together with expected impact and trade-offs.",
  },
  {
    n: "06",
    title: "Learn",
    text: "Monitor outcomes and refresh models as conditions, data and objectives evolve.",
  },
];

export default function PrescriptiveWorkflow() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e7dbf4]/40">
          Decision Lifecycle
        </p>

        <h2 className="mt-5 max-w-[850px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          From business question
          <span className="text-white/35"> to operational action.</span>
        </h2>

        <div className="mt-16 grid border-l border-t border-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.n}
              className="min-h-[230px] border-b border-r border-white/[0.07] p-7"
            >
              <span className="font-mono text-[6px] text-[#e6daf2]/30">
                {item.n}
              </span>

              <h3 className="mt-10 text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[330px] text-[10px] leading-6 text-white/40">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}