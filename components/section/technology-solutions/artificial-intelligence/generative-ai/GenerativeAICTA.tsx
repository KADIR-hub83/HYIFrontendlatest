export default function GenerativeAICTA() {
  return (
    <section className="relative overflow-hidden bg-[#020203] px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[38px] border border-purple-400/[0.12] bg-[#07060b] px-6 py-24 text-center md:py-32">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.12] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.2) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="cta-ai-ring absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.08]" />
        <div className="cta-ai-ring-two absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.04]" />

        <div className="relative z-10 mx-auto max-w-[950px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.14] bg-purple-500/[0.04] px-4 py-2">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-purple-300" />
            <span className="text-[8px] uppercase tracking-[2px] text-purple-100/40">
              Build With HYI.AI
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.02] tracking-[-1.8px] md:text-6xl lg:text-7xl">
            Turn your enterprise
            <span className="block bg-gradient-to-r from-[#e6c1ff] via-[#a95fff] to-[#7657ff] bg-clip-text text-transparent">
              into an intelligent enterprise.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-[14px] leading-7 text-white/36">
            Design, engineer and scale generative AI solutions grounded in your
            business, your knowledge and your technology ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full border border-purple-300/20 bg-gradient-to-r from-[#7128df] via-[#914fff] to-[#744dff] px-9 py-4 text-[13px] font-medium shadow-[0_15px_55px_rgba(124,58,237,.3)] transition hover:-translate-y-1">
              Start Your Generative AI Journey →
            </button>

            <button className="rounded-full border border-white/[0.09] bg-white/[0.025] px-9 py-4 text-[13px] text-white/48 transition hover:border-purple-400/25 hover:text-white">
              Talk to HYI.AI
            </button>
          </div>

          <div className="mx-auto mt-12 flex max-w-[650px] flex-wrap justify-center gap-5 text-[7px] uppercase tracking-[1.4px] text-white/18">
            <span>LLM Engineering</span>
            <span>•</span>
            <span>RAG</span>
            <span>•</span>
            <span>Agents</span>
            <span>•</span>
            <span>Responsible AI</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aiCtaPulse {
          0%,100% {
            transform:translate(-50%,-50%) scale(.92);
            opacity:.25;
          }
          50% {
            transform:translate(-50%,-50%) scale(1.1);
            opacity:.7;
          }
        }

        .cta-ai-ring {
          animation:aiCtaPulse 6s ease-in-out infinite;
        }

        .cta-ai-ring-two {
          animation:aiCtaPulse 9s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  );
}