const impacts = [
  ["Faster", "Knowledge Access", "Help teams find and use enterprise information through natural language."],
  ["Smarter", "Automation", "Move from fixed automation toward context-aware intelligent workflows."],
  ["Better", "Experiences", "Create personalized and conversational experiences across digital products."],
  ["Scalable", "Intelligence", "Build reusable AI foundations that support multiple business functions and use cases."],
];

export default function GenerativeAIImpact() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Business Impact
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Turn generative AI into
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              enterprise advantage.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {impacts.map(([value, title, text], index) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.018] p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20 ${
                index % 2 === 1 ? "md:translate-y-7" : ""
              }`}
            >
              <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-purple-600/[0.06] blur-[70px]" />

              <div className="relative">
                <div className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-semibold text-transparent">
                  {value}
                </div>

                <h3 className="mt-8 text-xl text-white/80">{title}</h3>

                <p className="mt-4 max-w-[480px] text-[13px] leading-7 text-white/32">
                  {text}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 overflow-hidden rounded-[26px] border border-white/[0.06] md:grid-cols-4">
          {[
            ["Knowledge", "Intelligence"],
            ["Agents", "Automation"],
            ["Multimodal", "Experiences"],
            ["AI", "Transformation"],
          ].map(([a, b], i) => (
            <div
              key={a}
              className={`bg-[#060609] p-7 text-center ${
                i !== 3 ? "md:border-r md:border-white/[0.06]" : ""
              }`}
            >
              <div className="text-[16px] text-white/68">{a}</div>
              <div className="mt-2 text-[7px] uppercase tracking-[1.5px] text-purple-300/28">
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}