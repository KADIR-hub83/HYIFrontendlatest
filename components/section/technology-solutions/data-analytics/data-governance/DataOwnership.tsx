const roles = [
  {
    role: "Data Owner",
    purpose: "Accountable",
    description:
      "A business leader accountable for a data domain, its intended use, risk posture and governance outcomes.",
    responsibilities: [
      "Approve domain standards",
      "Resolve ownership conflicts",
      "Sponsor quality improvement",
      "Approve important access decisions",
    ],
  },
  {
    role: "Data Steward",
    purpose: "Responsible",
    description:
      "A subject-matter expert who manages definitions, metadata, quality rules and governance issues in day-to-day operations.",
    responsibilities: [
      "Maintain glossary terms",
      "Review quality issues",
      "Curate metadata",
      "Coordinate remediation",
    ],
  },
  {
    role: "Data Custodian",
    purpose: "Technical",
    description:
      "Technology teams responsible for implementing technical controls, storage, pipelines, permissions and operational safeguards.",
    responsibilities: [
      "Implement access controls",
      "Operate platforms",
      "Protect data",
      "Support lifecycle policies",
    ],
  },
  {
    role: "Data Consumer",
    purpose: "Usage",
    description:
      "Analysts, applications, AI systems and business teams that consume governed information according to approved policies.",
    responsibilities: [
      "Use approved assets",
      "Follow usage policies",
      "Report quality problems",
      "Respect classifications",
    ],
  },
];

export default function DataOwnership() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
              03 / ACCOUNTABILITY
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              Every critical dataset needs
              <span className="block text-white/32">
                accountable humans.
              </span>
            </h2>

            <p className="mt-7 max-w-[420px] text-[10px] leading-7 text-white/42">
              Technology can automate controls, but governance still requires
              clear decision rights. Ownership identifies who has authority;
              stewardship defines who manages governance work.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.07]">
            <div className="hidden grid-cols-[.8fr_.65fr_1.6fr_1.4fr] border-b border-white/[0.07] bg-white/[0.015] px-6 py-4 font-mono text-[5px] tracking-[0.15em] text-white/20 md:grid">
              <span>ROLE</span>
              <span>FUNCTION</span>
              <span>ACCOUNTABILITY</span>
              <span>COMMON RESPONSIBILITIES</span>
            </div>

            {roles.map((item) => (
              <div
                key={item.role}
                className="grid gap-5 border-b border-white/[0.06] p-6 last:border-b-0 md:grid-cols-[.8fr_.65fr_1.6fr_1.4fr]"
              >
                <p className="text-[11px] font-medium text-white/75">
                  {item.role}
                </p>

                <p className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#ddd2e9]/40">
                  {item.purpose}
                </p>

                <p className="text-[9px] leading-6 text-white/40">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <p
                      key={responsibility}
                      className="text-[8px] text-white/35"
                    >
                      — {responsibility}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}