const industries = [
  {
    name: "Supply Chain",
    decision: "How much should we order, where should inventory move and when?",
    examples: "Inventory • Routing • Procurement • Fulfillment",
  },
  {
    name: "Manufacturing",
    decision: "Which production plan best balances capacity, cost and service?",
    examples: "Scheduling • Maintenance • Capacity • Quality",
  },
  {
    name: "Financial Services",
    decision: "Which action balances opportunity, exposure and operating risk?",
    examples: "Risk • Fraud • Portfolio • Pricing",
  },
  {
    name: "Retail",
    decision: "Which price, promotion and inventory action should be taken?",
    examples: "Pricing • Assortment • Demand • Promotion",
  },
  {
    name: "Customer Growth",
    decision: "What is the next-best action for each customer or segment?",
    examples: "Retention • Offers • Service • Personalization",
  },
  {
    name: "Workforce",
    decision: "How should people and skills be allocated against demand?",
    examples: "Scheduling • Staffing • Skills • Capacity",
  },
];

export default function IndustryDecisions() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] tracking-[0.3em] text-[#e7dcf4]/40">
          ENTERPRISE DECISIONS
        </p>

        <h2 className="mt-5 max-w-[900px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          One discipline.
          <span className="text-white/35">
            {" "}Thousands of decisions.
          </span>
        </h2>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <article
              key={item.name}
              className="group min-h-[310px] rounded-[28px] border border-white/[0.07] bg-[#070707] p-7 transition duration-500 hover:border-[#e5daf2]/20 hover:bg-[#e5daf2]/[0.025]"
            >
              <div className="flex justify-between">
                <span className="font-mono text-[6px] text-white/20">
                  0{index + 1}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#e7dcf4]/30 transition group-hover:bg-[#e7dcf4]" />
              </div>

              <h3 className="mt-14 text-xl font-medium">
                {item.name}
              </h3>

              <p className="mt-5 max-w-[340px] text-[11px] leading-6 text-white/48">
                {item.decision}
              </p>

              <p className="mt-10 font-mono text-[6px] leading-5 tracking-[0.12em] text-[#e5daf2]/30">
                {item.examples}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}