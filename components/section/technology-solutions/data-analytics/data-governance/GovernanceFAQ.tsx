const questions = [
  {
    question: "Is data governance the same as data management?",
    answer:
      "No. Data management covers the broader technical and operational work required to collect, store, integrate, process and maintain data. Governance establishes accountability, policies, standards and decision rights that guide how that data should be managed and used.",
  },
  {
    question: "Is a data catalog enough for governance?",
    answer:
      "A catalog is an important enabling capability, but governance also requires ownership, stewardship, business definitions, quality management, policies, access decisions, issue management and operating processes.",
  },
  {
    question: "What is the difference between governance and security?",
    answer:
      "Governance defines accountability and rules for appropriate data use. Security provides many of the technical safeguards used to protect data and enforce access. The two disciplines work together.",
  },
  {
    question: "Why is lineage important?",
    answer:
      "Lineage helps teams understand where data originated, how it changed and where it is consumed. This is useful for troubleshooting, impact analysis, auditability and understanding analytical or AI dependencies.",
  },
  {
    question: "Why does AI increase the need for governance?",
    answer:
      "AI systems depend on data and often introduce additional questions around provenance, quality, sensitive information, access and permitted use. Governance provides context and accountability around those inputs and their downstream use.",
  },
];

export default function GovernanceFAQ() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
          GOVERNANCE NOTES
        </p>

        <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
          Common questions,
          <span className="text-white/30"> clearly answered.</span>
        </h2>

        <div className="mt-14 border-t border-white/[0.08]">
          {questions.map((item, index) => (
            <div
              key={item.question}
              className="grid gap-5 border-b border-white/[0.07] py-8 md:grid-cols-[60px_.9fr_1.4fr]"
            >
              <span className="font-mono text-[6px] text-white/20">
                0{index + 1}
              </span>

              <h3 className="max-w-[400px] text-[12px] font-medium leading-6 text-white/70">
                {item.question}
              </h3>

              <p className="text-[9px] leading-6 text-white/40">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}