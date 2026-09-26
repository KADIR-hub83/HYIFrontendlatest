"use client";

import EngineeringGlobe from "./EngineeringGlobe";

export default function EngineeringHero() {
  const scrollToCapabilities = () => {
    document
      .getElementById("engineering-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/[0.05] bg-[#020203]">
      {/* ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[34%] h-[950px] w-[1250px] -translate-x-1/2 rounded-full bg-purple-800/[0.11] blur-[190px]" />
        <div className="absolute -left-[300px] top-[15%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/[0.05] blur-[180px]" />
        <div className="absolute -right-[300px] top-[20%] h-[650px] w-[650px] rounded-full bg-indigo-900/[0.06] blur-[180px]" />
      </div>

      {/* engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(145,85,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(145,85,255,.16) 1px,transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage:
            "linear-gradient(to bottom,transparent,black 20%,black 72%,transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom,transparent,black 20%,black 72%,transparent)",
        }}
      />

      {/* top radial lines */}
      <div className="pointer-events-none absolute left-1/2 top-[160px] h-[600px] w-px -translate-x-1/2 bg-gradient-to-b from-purple-400/20 via-purple-400/[0.05] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 pt-28 md:px-10 md:pt-32 lg:px-16">
        {/* badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.16] bg-purple-500/[0.05] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-40" />
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-purple-300" />
            </span>

            <span className="text-[8px] uppercase tracking-[2px] text-purple-100/55 md:text-[9px]">
              HYI.AI Global Capability Center
            </span>
          </div>
        </div>

        {/* title */}
        <div className="relative z-30 mx-auto mt-8 max-w-[1200px] text-center">
          <p className="mb-5 text-[8px] uppercase tracking-[4px] text-white/25 md:text-[10px]">
            Build • Engineer • Modernize • Scale
          </p>

          <h1 className="text-[43px] font-semibold leading-[0.96] tracking-[-2.5px] sm:text-[58px] md:text-[76px] lg:text-[90px]">
            Technology &
            <span className="block bg-gradient-to-r from-[#e1b3ff] via-[#a75fff] to-[#7258ff] bg-clip-text text-transparent">
              Engineering Center
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[880px] text-[14px] leading-7 text-white/42 md:text-[17px] md:leading-8">
            Build a world-class engineering capability inside your Global
            Capability Center — combining product engineering, cloud, AI,
            DevOps, data platforms, quality engineering and modern digital
            architecture.
          </p>
        </div>

        {/* globe */}
        <div className="-mt-5 md:-mt-10">
          <EngineeringGlobe />
        </div>

        {/* CTA area */}
        <div className="relative z-40 mx-auto -mt-5 max-w-[850px] text-center md:-mt-10">
          <div className="mx-auto h-px w-[240px] bg-gradient-to-r from-transparent via-purple-400/45 to-transparent" />

          <p className="mx-auto mt-6 max-w-[720px] text-[13px] leading-7 text-white/34 md:text-[14px]">
            From engineering strategy and specialist talent to scalable
            platforms and continuous delivery, HYI.AI helps enterprises create
            an engineering organization built for long-term innovation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToCapabilities}
              className="hero-primary group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce5] via-[#9250ff] to-[#7447ff] px-8 py-4 text-[13px] font-medium shadow-[0_12px_45px_rgba(124,58,237,.28)] transition duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Engineering Capabilities
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="hero-button-shine absolute inset-y-0 left-[-45%] w-[30%] rotate-[18deg] bg-white/20 blur-xl" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("engineering-command-center")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[13px] text-white/50 backdrop-blur-xl transition duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.05] hover:text-white"
            >
              View Engineering System
            </button>
          </div>
        </div>

        {/* metrics */}
        <div className="relative z-30 mx-auto mt-16 grid max-w-[1080px] grid-cols-2 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
          {[
            ["Full-Stack", "Engineering"],
            ["Cloud-Native", "Platforms"],
            ["AI-Ready", "Architecture"],
            ["24/7", "Delivery"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-5 py-6 text-center ${
                index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
              } ${
                index < 2
                  ? "border-b border-white/[0.06] md:border-b-0"
                  : ""
              }`}
            >
              <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                {value}
              </div>

              <div className="mt-2 text-[8px] uppercase tracking-[1.6px] text-white/25">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes buttonShine {
          0% {
            left: -45%;
          }
          55%,
          100% {
            left: 135%;
          }
        }

        .hero-primary:hover .hero-button-shine {
          animation: buttonShine 1s ease forwards;
        }
      `}</style>
    </section>
  );
}