const controls = [
  ["01", "Data Protection", "Protect sensitive enterprise context and control how information reaches AI systems."],
  ["02", "AI Guardrails", "Apply policy, content, safety and business-rule controls around model responses."],
  ["03", "Evaluation", "Continuously evaluate grounding, relevance, quality and model behavior."],
  ["04", "Observability", "Monitor prompts, responses, latency, token usage, quality and operational health."],
  ["05", "Human Oversight", "Keep people in control of sensitive decisions and high-impact workflows."],
  ["06", "Governance", "Create repeatable standards for models, data, access, deployment and AI operations."],
];

export default function ResponsibleAI() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Responsible AI
            </p>

            <h2 className="mt-5 max-w-[540px] text-3xl font-semibold leading-[1.08] md:text-5xl">
              Powerful AI.
              <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
                Controlled by design.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/34">
              Enterprise generative AI requires more than model access.
              Governance, evaluation, security and operational visibility must
              be part of the architecture from the beginning.
            </p>

            <div className="relative mt-10 h-[260px] max-w-[430px]">
              <div className="security-ring absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/15" />
              <div className="absolute left-1/2 top-1/2 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.05]">
                <div className="text-center">
                  <div className="text-xl text-purple-100/75">AI</div>
                  <div className="mt-1 text-[6px] uppercase tracking-[1px] text-white/20">
                    Governed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {controls.map(([no, title, text]) => (
              <article
                key={no}
                className="group rounded-[25px] border border-white/[0.06] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-1 hover:border-purple-400/20"
              >
                <span className="text-[8px] tracking-[2px] text-purple-300/35">
                  {no}
                </span>

                <h3 className="mt-8 text-lg text-white/80">{title}</h3>

                <p className="mt-3 text-[13px] leading-7 text-white/31">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes securityRotate {
          to {
            transform:translate(-50%,-50%) rotate(360deg);
          }
        }

        .security-ring {
          animation:securityRotate 25s linear infinite;
        }
      `}</style>
    </section>
  );
}