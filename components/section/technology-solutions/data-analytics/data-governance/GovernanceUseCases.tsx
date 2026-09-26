const useCases = [
  {
    category: "ANALYTICS",
    title: "Trusted reporting",
    text: "Give analysts clearer definitions, lineage, ownership and quality context for important reporting datasets.",
  },
  {
    category: "AI",
    title: "Governed AI data",
    text: "Understand which data feeds models, its origin, classification, quality expectations and permitted use.",
  },
  {
    category: "RISK",
    title: "Sensitive data control",
    text: "Discover and classify sensitive information so appropriate access and handling policies can be applied.",
  },
  {
    category: "OPERATIONS",
    title: "Data issue ownership",
    text: "Route quality and definition issues toward the people accountable for resolving them.",
  },
  {
    category: "CHANGE",
    title: "Impact analysis",
    text: "Use lineage to understand downstream reports, datasets and applications affected by upstream changes.",
  },
  {
    category: "DISCOVERY",
    title: "Data self-service",
    text: "Help users locate approved data and understand business meaning before building their own analysis.",
  },
];

export default function GovernanceUseCases() {
  return (
    <section className="bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
          BUSINESS VALUE
        </p>

        <h2 className="mt-5 max-w-[850px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          Governance is useful when it
          <span className="text-white/30">
            {" "}improves real decisions.
          </span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="min-h-[280px] rounded-[28px] border border-white/[0.07] bg-[#050505] p-7"
            >
              <span className="font-mono text-[5px] tracking-[0.18em] text-[#ddd2e9]/32">
                {item.category}
              </span>

              <h3 className="mt-14 text-lg font-medium">
                {item.title}
              </h3>

              <p className="mt-5 text-[10px] leading-6 text-white/40">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}