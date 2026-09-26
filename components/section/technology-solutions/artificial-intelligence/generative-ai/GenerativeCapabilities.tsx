const capabilities = [
  ["01", "Enterprise Copilots", "AI assistants grounded in your enterprise knowledge, applications and workflows.", ["Knowledge AI", "Search", "Assistance"]],
  ["02", "RAG Platforms", "Retrieval-augmented generation systems that connect language models with trusted business context.", ["Vector DB", "Retrieval", "Grounding"]],
  ["03", "AI Agents", "Intelligent agents that reason, use tools and coordinate multi-step business workflows.", ["Tools", "Reasoning", "Automation"]],
  ["04", "LLM Engineering", "Model selection, prompt engineering, fine-tuning, evaluation and production optimization.", ["Models", "Fine-Tuning", "Evaluation"]],
  ["05", "Multimodal AI", "Applications that understand and generate across text, documents, images and structured information.", ["Vision", "Documents", "Language"]],
  ["06", "AI Integration", "Embed generative intelligence into enterprise products, platforms, APIs and operating workflows.", ["APIs", "Products", "Enterprise"]],
];

export default function GenerativeCapabilities() {
  return (
    <section
      id="genai-capabilities"
      className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-[40%] h-[800px] w-[1100px] -translate-x-1/2 rounded-full bg-purple-900/[0.06] blur-[190px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Generative AI Capabilities
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
            Intelligence engineered for
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              real enterprise work.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([no, title, text, tags], index) => (
            <article
              key={no as string}
              className={`genai-card group relative min-h-[350px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08070d]/75 p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/25 ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-purple-600/[0.07] blur-[80px] transition group-hover:bg-purple-600/[0.16]" />

              <div className="relative z-10 flex justify-between">
                <span className="text-[9px] tracking-[2px] text-purple-300/40">
                  {no}
                </span>
                <span className="h-[7px] w-[7px] rounded-full border border-purple-300/40" />
              </div>

              <div className="relative z-10 mt-10">
                <div className="mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-purple-400/[0.12] bg-purple-500/[0.04]">
                  <div className="genai-node h-5 w-5 rounded-full border border-purple-300/30">
                    <div className="m-auto mt-[6px] h-[6px] w-[6px] rounded-full bg-purple-200 shadow-[0_0_14px_#a855f7]" />
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white/85">{title}</h3>

                <p className="mt-4 text-[13px] leading-7 text-white/34">
                  {text}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(tags as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.05] px-3 py-1.5 text-[7px] uppercase tracking-[.7px] text-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/50 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nodePulse {
          0%,100% { transform:scale(.85); }
          50% { transform:scale(1.15); }
        }

        .genai-node {
          animation:nodePulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}