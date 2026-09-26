const stages = [
  {
    number: "01",
    name: "Descriptive",
    question: "What happened?",
    description:
      "Historical reporting summarizes events, performance and measurable business outcomes.",
  },
  {
    number: "02",
    name: "Diagnostic",
    question: "Why did it happen?",
    description:
      "Root-cause analysis examines relationships, anomalies and drivers behind observed outcomes.",
  },
  {
    number: "03",
    name: "Predictive",
    question: "What may happen?",
    description:
      "Statistical and machine-learning models estimate future events, probabilities and demand.",
  },
  {
    number: "04",
    name: "Prescriptive",
    question: "What should we do?",
    description:
      "Optimization evaluates available actions against objectives, constraints, risk and predicted outcomes.",
  },
];

export default function AnalyticsEvolution() {
  return (
    <section
      id="analytics-evolution"
      className="border-t border-white/[0.06] bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e9dfff]/40">
          Analytics Maturity
        </p>

        <div className="mt-5 grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="max-w-[650px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            From understanding data
            <span className="text-white/35"> to deciding action.</span>
          </h2>

          <p className="max-w-[650px] text-[13px] leading-7 text-white/55 lg:ml-auto">
            Prescriptive analytics sits beyond reporting and forecasting. It
            combines predictions with business objectives and operating
            constraints to evaluate possible decisions and recommend a course
            of action.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-white/[0.07] md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <div
              key={stage.name}
              className={`min-h-[330px] border-b border-r border-white/[0.07] p-7 ${
                index === 3 ? "bg-[#e8def5]/[0.04]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-white/20">
                  {stage.number}
                </span>

                {index === 3 && (
                  <span className="rounded-full border border-[#e8def5]/15 px-3 py-1 font-mono text-[5px] tracking-[0.15em] text-[#e8def5]/50">
                    ACTION LAYER
                  </span>
                )}
              </div>

              <h3 className="mt-16 text-2xl font-medium">
                {stage.name}
              </h3>

              <p className="mt-3 text-[11px] text-[#ddd2e9]/70">
                {stage.question}
              </p>

              <p className="mt-8 text-[11px] leading-6 text-white/42">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}