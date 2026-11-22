"use client";

import EngineeringGlobe from "./EngineeringGlobe";

export default function EngineeringHero() {
  const scrollToCapabilities = () => {
    document
      .getElementById("engineering-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative  overflow-hidden  bg-[#020203]">
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

      <div className="relative z-10 mx-auto max-w-[1350px] px-5  pt-28 md:px-10 md:pt-32 lg:px-16">
        {/* title */}
        <div className="relative z-30 mx-auto  max-w-[1200px] text-center">
     

          <h1 className="hyi-h1 hyi-white">
            Technology &
            <span className="block hyi-blue">
              Engineering Center
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[880px] hyi-p">
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