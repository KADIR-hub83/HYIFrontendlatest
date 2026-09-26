const useCases = [
  ["Customer Experience", "Intelligent service assistants and contextual customer interactions."],
  ["Software Engineering", "Developer copilots, code intelligence, testing and engineering automation."],
  ["Enterprise Search", "Natural-language discovery across documents, systems and organizational knowledge."],
  ["Operations", "Agents that coordinate repetitive, multi-system business workflows."],
  ["Finance", "Document intelligence, analysis, summarization and decision-support workflows."],
  ["Sales & Marketing", "Content generation, research, personalization and sales intelligence."],
];

export default function AIUseCases() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.06] blur-[190px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Enterprise Use Cases
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            One intelligence layer.
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              Across the enterprise.
            </span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(([title, text], i) => (
            <article
              key={title}
              className="group relative min-h-[245px] overflow-hidden rounded-[26px] border border-white/[0.06] bg-[#07070a] p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20"
            >
              <div className="absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-purple-600/[0.07] blur-[60px] transition group-hover:bg-purple-600/[0.15]" />

              <span className="text-[8px] tracking-[2px] text-purple-300/30">
                0{i + 1}
              </span>

              <h3 className="relative mt-12 text-xl text-white/82">{title}</h3>

              <p className="relative mt-4 text-[13px] leading-7 text-white/32">
                {text}
              </p>

              <span className="absolute bottom-6 right-7 text-purple-300/20 transition group-hover:translate-x-1 group-hover:text-purple-300/50">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}