const impacts = [
  {
    value: "Faster",
    title: "Product Delivery",
    text: "Reduce the distance between ideas, engineering and production releases.",
  },
  {
    value: "Higher",
    title: "Engineering Quality",
    text: "Build quality, automation and reliability directly into delivery workflows.",
  },
  {
    value: "Scalable",
    title: "Technology Capacity",
    text: "Expand engineering capability as products, platforms and business demand grow.",
  },
  {
    value: "Stronger",
    title: "Innovation Engine",
    text: "Create long-term technology capability instead of relying only on project-based delivery.",
  },
];

export default function EngineeringImpact() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.06] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Engineering Impact
            </p>

            <h2 className="mt-5 max-w-[540px] text-3xl font-semibold leading-[1.08] tracking-[-1.3px] md:text-5xl">
              Engineering that creates
              <span className="block bg-gradient-to-r from-[#ddaaff] to-[#7758ff] bg-clip-text text-transparent">
                business momentum.
              </span>
            </h2>

            <p className="mt-6 max-w-[530px] text-[14px] leading-7 text-white/36">
              A Technology & Engineering Center should do more than increase
              headcount. It should improve delivery speed, technology quality,
              scalability and innovation capacity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {impacts.map((impact, index) => (
              <article
                key={impact.title}
                className={`impact-card group relative overflow-hidden rounded-[26px] border border-white/[0.06] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20 ${
                  index === 1 || index === 3 ? "sm:translate-y-7" : ""
                }`}
              >
                <div className="absolute right-[-80px] top-[-80px] h-[190px] w-[190px] rounded-full bg-purple-600/[0.06] blur-[60px] transition group-hover:bg-purple-600/[0.15]" />

                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-semibold text-transparent">
                    {impact.value}
                  </div>

                  <h3 className="mt-7 text-lg font-medium text-white/80">
                    {impact.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-white/32">
                    {impact.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#060609] md:grid-cols-4">
          {[
            ["Product", "Engineering"],
            ["Platform", "Modernization"],
            ["AI & Data", "Innovation"],
            ["Cloud", "Transformation"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`p-6 text-center md:p-8 ${
                index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
              } ${
                index < 2
                  ? "border-b border-white/[0.06] md:border-b-0"
                  : ""
              }`}
            >
              <div className="text-[16px] font-medium text-white/70">
                {value}
              </div>
              <div className="mt-2 text-[7px] uppercase tracking-[1.5px] text-purple-300/30">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}