const sources = [
  "Documents",
  "Databases",
  "CRM",
  "ERP",
  "APIs",
  "Knowledge Base",
];

export default function EnterpriseKnowledge() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.07] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Enterprise Knowledge Layer
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Make your enterprise knowledge
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              accessible to intelligence.
            </span>
          </h2>
        </div>

        <div className="relative mt-16 min-h-[620px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#060609] p-6 md:p-10">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle,rgba(192,132,252,.7) 1px,transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="relative mx-auto h-[520px] max-w-[1050px]">
            <div className="knowledge-core absolute left-1/2 top-1/2 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/[0.06] shadow-[0_0_90px_rgba(126,55,220,.22)]">
              <div className="text-center">
                <div className="text-2xl font-semibold text-purple-100/80">
                  RAG
                </div>
                <div className="mt-2 text-[7px] uppercase tracking-[1.5px] text-white/22">
                  Knowledge Engine
                </div>
              </div>
            </div>

            <svg
              viewBox="0 0 1000 520"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {[
                [100, 100],
                [500, 45],
                [900, 100],
                [100, 420],
                [500, 475],
                [900, 420],
              ].map(([x, y], i) => (
                <line
                  key={i}
                  x1={x}
                  y1={y}
                  x2="500"
                  y2="260"
                  stroke="rgba(192,132,252,.18)"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                />
              ))}
            </svg>

            {sources.map((source, i) => {
              const positions = [
                "left-[1%] top-[10%]",
                "left-1/2 top-[1%] -translate-x-1/2",
                "right-[1%] top-[10%]",
                "left-[1%] bottom-[9%]",
                "left-1/2 bottom-[1%] -translate-x-1/2",
                "right-[1%] bottom-[9%]",
              ];

              return (
                <div
                  key={source}
                  className={`absolute ${positions[i]} rounded-2xl border border-white/[0.07] bg-[#0a0910]/85 px-5 py-4 backdrop-blur-xl`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-[6px] w-[6px] rounded-full bg-purple-300/60" />
                    <span className="text-[9px] text-white/45">{source}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes knowledgePulse {
          0%,100% { transform:translate(-50%,-50%) scale(.96); }
          50% { transform:translate(-50%,-50%) scale(1.05); }
        }

        .knowledge-core {
          animation:knowledgePulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}