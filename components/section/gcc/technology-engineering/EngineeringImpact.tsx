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
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] ">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.06] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
          

            <h2 className=" max-w-[540px] hyi-h1 hyi-white">
              Engineering that creates
              <span className="block hyi-blue">
                business momentum.
              </span>
            </h2>

            <p className="mt-2 max-w-[530px] hyi-p">
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
                  <div className="hyi-h3 hyi-white">
                    {impact.value}
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {impact.title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {impact.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        <div className="md:mt-10 mt-5 grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#060609] md:grid-cols-4">
          {[
            ["Product", "Engineering"],
            ["Platform", "Modernization"],
            ["AI & Data", "Innovation"],
            ["Cloud", "Transformation"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`p-3 text-center md:p-4 ${
                index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
              } ${
                index < 2
                  ? "border-b border-white/[0.06] md:border-b-0"
                  : ""
              }`}
            >
              <div className="hyi-h3 hyi-white">
                {value}
              </div>
              <div className="mt-2   hyi-p">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}