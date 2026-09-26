const dimensions = [
  {
    title: "Accuracy",
    question: "Does the data correctly represent the real-world value?",
  },
  {
    title: "Completeness",
    question: "Are required records and attributes present?",
  },
  {
    title: "Validity",
    question: "Does data conform to expected formats, domains and rules?",
  },
  {
    title: "Consistency",
    question: "Do equivalent values agree across systems and datasets?",
  },
  {
    title: "Freshness",
    question: "Is the information updated within the expected time window?",
  },
  {
    title: "Uniqueness",
    question: "Are duplicate entities or records controlled appropriately?",
  },
];

export default function DataQualitySection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
              06 / DATA QUALITY
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              Trust must be
              <span className="block text-white/30">
                measurable.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[10px] leading-7 text-white/42">
              Governance turns vague statements such as “good data” into
              explicit quality expectations, measurable rules, ownership and
              remediation workflows.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
            {dimensions.map((item, index) => (
              <div
                key={item.title}
                className="min-h-[210px] bg-[#060606] p-6"
              >
                <span className="font-mono text-[5px] text-white/18">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-[13px] font-medium text-white/75">
                  {item.title}
                </h3>

                <p className="mt-4 text-[9px] leading-6 text-white/37">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[25px] border border-white/[0.07] bg-[#050505] p-7">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["Rule", "Define what acceptable data looks like."],
              ["Measure", "Evaluate datasets against defined expectations."],
              ["Assign", "Route issues to accountable owners or stewards."],
              ["Improve", "Correct root causes and monitor recurring issues."],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-[10px] text-white/65">
                  {title}
                </p>

                <p className="mt-3 text-[8px] leading-5 text-white/30">
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