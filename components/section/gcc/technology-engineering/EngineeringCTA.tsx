export default function EngineeringCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020203] px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[36px] border border-purple-400/[0.11] bg-[#07060b] px-6 py-20 text-center md:py-28">
        {/* background */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.11] blur-[135px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.15) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center,black,transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center,black,transparent 75%)",
          }}
        />

        {/* rings */}
        <div className="cta-ring-one absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.08]" />
        <div className="cta-ring-two absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.045]" />
        <div className="cta-ring-three absolute left-1/2 top-1/2 h-[610px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.025]" />

        <div className="relative z-10 mx-auto max-w-[900px]">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-purple-400/[0.13] bg-purple-500/[0.04] px-4 py-2">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-purple-300" />
            <span className="text-[8px] uppercase tracking-[2px] text-purple-200/40">
              HYI.AI Technology & Engineering
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-semibold leading-[1.03] tracking-[-1.7px] md:text-6xl">
            Build the engineering
            <span className="block bg-gradient-to-r from-[#e0b0ff] via-[#a45dff] to-[#7758ff] bg-clip-text text-transparent">
              capability behind your future.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-[14px] leading-7 text-white/38">
            Create a scalable Technology & Engineering Center designed around
            your products, platforms, technology strategy and long-term
            innovation roadmap.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="cta-button group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce4] via-[#9150ff] to-[#7750ff] px-9 py-4 text-[13px] font-medium shadow-[0_15px_50px_rgba(124,58,237,.28)] transition duration-300 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-3">
                Build Your Engineering Center
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="cta-shine absolute inset-y-0 left-[-40%] w-[30%] rotate-[18deg] bg-white/20 blur-xl" />
            </button>

            <button className="rounded-full border border-white/[0.09] bg-white/[0.025] px-9 py-4 text-[13px] text-white/50 backdrop-blur-xl transition hover:border-purple-400/25 hover:text-white">
              Talk to HYI.AI
            </button>
          </div>

          <div className="mx-auto mt-12 flex max-w-[620px] flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[7px] uppercase tracking-[1.4px] text-white/20">
            <span>Product Engineering</span>
            <span className="h-[3px] w-[3px] rounded-full bg-purple-400/50" />
            <span>Cloud</span>
            <span className="h-[3px] w-[3px] rounded-full bg-purple-400/50" />
            <span>AI & Data</span>
            <span className="h-[3px] w-[3px] rounded-full bg-purple-400/50" />
            <span>DevOps</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ctaPulse {
          0%,100% {
            transform: translate(-50%,-50%) scale(.9);
            opacity:.2;
          }
          50% {
            transform:translate(-50%,-50%) scale(1.12);
            opacity:.65;
          }
        }

        .cta-ring-one {
          animation:ctaPulse 5s ease-in-out infinite;
        }

        .cta-ring-two {
          animation:ctaPulse 7s ease-in-out infinite reverse;
        }

        .cta-ring-three {
          animation:ctaPulse 9s ease-in-out infinite;
        }

        .cta-button:hover .cta-shine {
          animation:ctaShine 1s ease forwards;
        }

        @keyframes ctaShine {
          from { left:-40%; }
          to { left:130%; }
        }
      `}</style>
    </section>
  );
}