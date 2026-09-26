"use client";

import GenerativeAICore from "./GenerativeAICore";

export default function GenerativeAIHero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/[0.05] bg-[#020203]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[35%] h-[900px] w-[1300px] -translate-x-1/2 rounded-full bg-purple-800/[0.1] blur-[200px]" />
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-700/[0.04] blur-[150px]" />
        <div className="absolute right-[10%] top-[25%] h-[400px] w-[400px] rounded-full bg-indigo-700/[0.05] blur-[150px]" />
      </div>

      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.18) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom,transparent,black 20%,black 70%,transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom,transparent,black 20%,black 70%,transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 pt-28 md:px-10 md:pt-36 lg:px-16">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/15 bg-purple-500/[0.045] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-40" />
              <span className="relative h-[6px] w-[6px] rounded-full bg-purple-200" />
            </span>

            <span className="text-[8px] uppercase tracking-[2.4px] text-purple-100/50">
              HYI.AI • Artificial Intelligence
            </span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1200px] text-center">
          <p className="text-[8px] uppercase tracking-[4px] text-white/22 md:text-[10px]">
            Create • Reason • Automate • Transform
          </p>

          <h1 className="mt-5 text-[48px] font-semibold leading-[0.92] tracking-[-3px] sm:text-[64px] md:text-[88px] lg:text-[106px]">
            Generative
            <span className="block bg-gradient-to-r from-[#e8c5ff] via-[#ad65ff] to-[#7657ff] bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[900px] text-[14px] leading-7 text-white/40 md:text-[17px] md:leading-8">
            Transform enterprise knowledge into intelligence. Build secure
            generative AI systems, intelligent agents, RAG platforms and
            AI-powered experiences engineered around your business.
          </p>
        </div>

        <div className="-mt-4 md:-mt-10">
          <GenerativeAICore />
        </div>

        <div className="relative z-30 mx-auto -mt-4 max-w-[900px] text-center md:-mt-8">
          <div className="mx-auto h-px w-[260px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-[720px] text-[13px] leading-7 text-white/30">
            From enterprise copilots and autonomous workflows to knowledge
            intelligence and multimodal applications, HYI.AI helps move
            generative AI from experimentation into production.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("genai-capabilities")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-purple-300/20 bg-gradient-to-r from-[#7027df] via-[#914dff] to-[#714bff] px-8 py-4 text-[13px] font-medium shadow-[0_15px_50px_rgba(124,58,237,.28)] transition hover:-translate-y-1"
            >
              Explore Generative AI ↓
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("ai-command-center")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[13px] text-white/48 transition hover:border-purple-400/25 hover:text-white"
            >
              View AI System
            </button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1080px] grid-cols-2 overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
          {[
            ["LLM", "Engineering"],
            ["RAG", "Knowledge"],
            ["AI Agents", "Automation"],
            ["Responsible", "AI"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`p-6 text-center ${
                index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
              } ${
                index < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""
              }`}
            >
              <div className="text-xl font-medium text-purple-100/80">
                {value}
              </div>
              <div className="mt-2 text-[7px] uppercase tracking-[1.6px] text-white/22">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }

        .hero-grid {
          animation: gridMove 18s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-grid { animation: none; }
        }
      `}</style>
    </section>
  );
}