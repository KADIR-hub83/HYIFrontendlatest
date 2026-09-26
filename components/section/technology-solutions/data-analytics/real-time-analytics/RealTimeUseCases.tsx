const cases = [
  {
    number: "01",
    title: "Fraud & Risk Signals",
    description:
      "Evaluate transactions and behavioral events as they occur to surface suspicious patterns for review or automated workflows.",
    tags: ["Transactions", "Risk scoring", "Alerts"],
  },
  {
    number: "02",
    title: "Customer Experience",
    description:
      "Use live digital activity and operational signals to understand changing customer journeys and service conditions.",
    tags: ["Sessions", "Behavior", "Experience"],
  },
  {
    number: "03",
    title: "IoT & Operations",
    description:
      "Process telemetry from equipment and connected systems to identify changing operating conditions.",
    tags: ["Telemetry", "Sensors", "Operations"],
  },
  {
    number: "04",
    title: "Supply Chain",
    description:
      "Continuously monitor inventory, orders, logistics events and operational exceptions across connected systems.",
    tags: ["Inventory", "Orders", "Logistics"],
  },
  {
    number: "05",
    title: "Digital Products",
    description:
      "Understand application activity, product usage and system behavior while users interact with digital services.",
    tags: ["Product", "Usage", "Applications"],
  },
  {
    number: "06",
    title: "Live Business KPIs",
    description:
      "Maintain continuously updated operational views instead of relying only on end-of-day reporting.",
    tags: ["KPIs", "Dashboards", "Operations"],
  },
];

export default function RealTimeUseCases() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] tracking-[0.3em] text-[#e8def3]/40">
          REAL-TIME USE CASES
        </p>

        <h2 className="mt-5 max-w-[850px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          When minutes are
          <span className="text-white/35">
            {" "}already too late.
          </span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group min-h-[330px] rounded-[30px] border border-white/[0.07] bg-[#070707] p-7 transition duration-500 hover:border-[#e8def3]/20 hover:bg-[#e8def3]/[0.025]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-white/20">
                  {item.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#e8def3]/25 transition group-hover:bg-[#eee7f7]" />
              </div>

              <h3 className="mt-14 text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[350px] text-[10px] leading-6 text-white/42">
                {item.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] px-3 py-1.5 font-mono text-[5px] tracking-[0.12em] text-white/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}