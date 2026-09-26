"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

const advisoryNodes = [
  {
    title: "Strategy",
    subtitle: "Enterprise Direction",
    position: "left-[5%] top-[30%] lg:left-[9%]",
  },
  {
    title: "Market",
    subtitle: "Global Expansion",
    position: "right-[5%] top-[27%] lg:right-[9%]",
  },
  {
    title: "Risk",
    subtitle: "Governance",
    position: "left-[3%] bottom-[24%] lg:left-[8%]",
  },
  {
    title: "Operating Model",
    subtitle: "GCC Transformation",
    position: "right-[3%] bottom-[22%] lg:right-[7%]",
  },
];

const capabilities = [
  {
    number: "01",
    title: "GCC Strategy & Roadmap",
    description:
      "Define the right GCC vision, operating model, capability roadmap and transformation priorities aligned with long-term enterprise objectives.",
  },
  {
    number: "02",
    title: "Location & Market Advisory",
    description:
      "Evaluate global talent markets, operating environments, scalability, cost structures and ecosystem maturity to identify the right delivery locations.",
  },
  {
    number: "03",
    title: "Operating Model Design",
    description:
      "Build governance, organizational structures, delivery frameworks and decision models designed for speed, accountability and sustainable scale.",
  },
  {
    number: "04",
    title: "Digital Transformation",
    description:
      "Modernize business and technology capabilities through AI, automation, cloud platforms and data-driven operating models.",
  },
  {
    number: "05",
    title: "Talent & Capability Strategy",
    description:
      "Design workforce strategies that connect specialized global talent with critical business, engineering and transformation priorities.",
  },
  {
    number: "06",
    title: "Performance & Governance",
    description:
      "Establish measurable KPIs, governance systems and continuous optimization frameworks that turn GCC investments into business outcomes.",
  },
];

const transformationSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Understand business priorities, current capabilities and transformation opportunities.",
  },
  {
    step: "02",
    title: "Design",
    text: "Create the strategy, operating model, governance and capability architecture.",
  },
  {
    step: "03",
    title: "Build",
    text: "Activate talent, technology, processes and global delivery capabilities.",
  },
  {
    step: "04",
    title: "Scale",
    text: "Measure outcomes, optimize performance and expand strategic capabilities.",
  },
];

export default function StrategyAdvisoryPage() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!globeRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * -7;

      globeRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToCapabilities = () => {
    document
      .getElementById("advisory-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-white">
      <Header />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/[0.06] bg-[#020203]">
        {/* ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[35%] h-[850px] w-[1100px] -translate-x-1/2 rounded-full bg-[#6f20c7]/[0.12] blur-[180px]" />

          <div className="absolute -left-[180px] top-[20%] h-[550px] w-[550px] rounded-full bg-fuchsia-900/[0.07] blur-[150px]" />

          <div className="absolute -right-[160px] top-[15%] h-[550px] w-[550px] rounded-full bg-indigo-900/[0.08] blur-[150px]" />
        </div>

        {/* premium grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(154, 92, 255, .15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(154, 92, 255, .15) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 35%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 35%, black 70%, transparent)",
          }}
        />

        {/* top fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-[250px] w-full bg-gradient-to-b from-black/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 pt-28 md:px-10 md:pt-32 lg:px-16">
          {/* badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.18] bg-purple-500/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-[5px] w-[5px] rounded-full bg-[#b56cff] shadow-[0_0_12px_rgba(181,108,255,1)]" />

              <span className="text-[10px] uppercase tracking-[2.2px] text-purple-100/65">
                HYI.AI Global Capability Center
              </span>
            </div>
          </div>

          {/* heading */}
          <div className="relative z-30 mx-auto mt-8 max-w-[1150px] text-center">
            <p className="mb-5 text-[11px] uppercase tracking-[4px] text-white/30">
              Strategy • Transformation • Global Growth
            </p>

            <h1 className="text-[44px] font-semibold leading-[0.98] tracking-[-2.5px] text-white sm:text-[58px] md:text-[76px] lg:text-[88px]">
              Strategy &
              <span className="ml-0 block bg-gradient-to-r from-[#e1b6ff] via-[#a45cff] to-[#7258ff] bg-clip-text text-transparent md:ml-4 md:inline">
                Advisory
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[820px] text-[15px] leading-7 text-white/45 md:text-[17px] md:leading-8">
              Transform global ambition into an executable strategy. We help
              enterprises design, build and scale high-performance Global
              Capability Centers through intelligence, technology, talent and
              measurable operating models.
            </p>
          </div>

          {/* =====================================================
              WORLD INTELLIGENCE EXPERIENCE
          ====================================================== */}
          <div className="relative mx-auto mt-4 h-[510px] max-w-[1180px] md:mt-0 md:h-[650px]">
            {/* top network label */}
            <div className="absolute left-1/2 top-[7%] z-30 -translate-x-1/2">
              <div className="flex items-center gap-3 text-[8px] uppercase tracking-[3px] text-purple-200/40 md:text-[9px]">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                Global Strategy Intelligence
                <span className="h-1 w-1 rounded-full bg-purple-400" />
              </div>
            </div>

            {/* globe glow */}
            <div className="pointer-events-none absolute left-1/2 top-[52%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px] md:h-[620px] md:w-[620px]" />

            {/* vertical beam */}
            <div className="pointer-events-none absolute left-1/2 top-[13%] h-[75%] w-[130px] -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/[0.12] to-transparent blur-[40px]" />

            {/* orbital plane */}
            <div className="pointer-events-none absolute left-1/2 top-[54%] h-[140px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/[0.12] [transform:translate(-50%,-50%)_rotateX(70deg)] md:w-[850px]" />

            <div className="pointer-events-none absolute left-1/2 top-[54%] h-[190px] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/[0.06] [transform:translate(-50%,-50%)_rotateX(70deg)] md:w-[1050px]" />

            {/* globe */}
            <div
              ref={globeRef}
              className="absolute left-1/2 top-1/2 z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out [transform-style:preserve-3d] sm:h-[350px] sm:w-[350px] md:h-[455px] md:w-[455px]"
            >
              {/* globe aura */}
              <div className="absolute inset-[2%] rounded-full bg-purple-500/20 blur-[45px]" />

              {/* exterior */}
              <div
                className="absolute inset-0 rounded-full border border-purple-300/25 bg-black"
                style={{
                  boxShadow:
                    "0 0 30px rgba(159,86,255,.30), 0 0 100px rgba(101,39,220,.25), inset -45px -15px 70px rgba(0,0,0,.92), inset 25px 10px 55px rgba(164,91,255,.18)",
                }}
              />

              {/* sphere */}
              <div
                className="absolute inset-[4px] overflow-hidden rounded-full border border-white/[0.07]"
                style={{
                  background:
                    "radial-gradient(circle at 32% 22%, rgba(226,190,255,.22), transparent 19%), radial-gradient(circle at 48% 47%, rgba(126,55,220,.34), transparent 53%), linear-gradient(145deg,#1c0d31,#08040f 58%,#010102)",
                }}
              >
                {/* latitude */}
                <div className="absolute left-[7%] top-[22%] h-[24%] w-[86%] rounded-[50%] border border-purple-200/[0.15]" />
                <div className="absolute left-[3%] top-[40%] h-[20%] w-[94%] rounded-[50%] border border-purple-200/[0.18]" />
                <div className="absolute left-[7%] top-[59%] h-[20%] w-[86%] rounded-[50%] border border-purple-200/[0.12]" />

                {/* longitude */}
                <div className="absolute left-1/2 top-[3%] h-[94%] w-[38%] -translate-x-1/2 rounded-[50%] border border-purple-200/[0.14]" />
                <div className="absolute left-1/2 top-[3%] h-[94%] w-[72%] -translate-x-1/2 rounded-[50%] border border-purple-200/[0.10]" />

                {/* world continents */}
                <div className="absolute left-[12%] top-[27%] h-[25%] w-[32%] rotate-[-14deg] rounded-[48%_52%_60%_40%/44%_35%_65%_56%] bg-gradient-to-br from-[#d18aff] via-[#8742cf] to-[#3a1467] opacity-90 shadow-[0_0_25px_rgba(190,105,255,.30)]" />

                <div className="absolute left-[36%] top-[39%] h-[24%] w-[17%] rotate-[13deg] rounded-[40%_60%_53%_47%/38%_44%_56%_62%] bg-gradient-to-b from-[#c57aff] to-[#48166f] opacity-85" />

                <div className="absolute right-[9%] top-[25%] h-[30%] w-[41%] rotate-[4deg] rounded-[55%_45%_41%_59%/38%_54%_46%_62%] bg-gradient-to-br from-[#c57dff] via-[#7135ad] to-[#321151] opacity-80" />

                <div className="absolute bottom-[20%] right-[15%] h-[13%] w-[15%] rotate-[20deg] rounded-[47%] bg-[#8445b8] opacity-80" />

                {/* strategic network */}
                <svg
                  viewBox="0 0 500 500"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient
                      id="routeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M145 205 Q250 105 360 195"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="1.4"
                    strokeDasharray="5 6"
                  />

                  <path
                    d="M160 225 Q270 330 370 215"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="1.2"
                    strokeDasharray="4 7"
                  />

                  <path
                    d="M200 325 Q280 230 375 290"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="1.1"
                    strokeDasharray="5 6"
                  />
                </svg>

                {/* strategic points */}
                {[
                  "left-[27%] top-[37%]",
                  "right-[27%] top-[35%]",
                  "right-[23%] bottom-[32%]",
                  "left-[41%] bottom-[24%]",
                ].map((position) => (
                  <span
                    key={position}
                    className={`absolute ${position} h-[7px] w-[7px] rounded-full bg-purple-100 shadow-[0_0_14px_4px_rgba(190,120,255,.75)]`}
                  />
                ))}

                {/* surface lighting */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300/[0.08] via-transparent to-black/55" />
                <div className="absolute inset-[1px] rounded-full shadow-[inset_-50px_-10px_65px_rgba(0,0,0,.9)]" />

                {/* animated scanning light */}
                <div className="globe-scan absolute -left-[35%] top-[-10%] h-[110%] w-[32%] rotate-[20deg] bg-gradient-to-r from-transparent via-purple-100/[0.09] to-transparent blur-xl" />
              </div>

              {/* gloss */}
              <div className="pointer-events-none absolute left-[13%] top-[8%] h-[40%] w-[38%] rotate-[-30deg] rounded-full bg-white/[0.05] blur-xl" />

              <div className="pointer-events-none absolute inset-0 rounded-full border border-[#b46cff]/30 shadow-[inset_0_0_30px_rgba(180,108,255,.15)]" />
            </div>

            {/* advisory floating nodes */}
            {advisoryNodes.map((node) => (
              <div
                key={node.title}
                className={`absolute ${node.position} z-30 hidden md:block`}
              >
                <div className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl transition duration-300 group-hover:bg-purple-500/20" />

                  <div className="relative min-w-[175px] rounded-2xl border border-white/[0.08] bg-[#08070d]/75 px-4 py-3 backdrop-blur-2xl transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/30">
                    <div className="flex items-center gap-2">
                      <span className="h-[5px] w-[5px] rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />

                      <span className="text-[9px] uppercase tracking-[1.7px] text-white/30">
                        {node.subtitle}
                      </span>
                    </div>

                    <p className="mt-2 text-[13px] font-medium text-white/80">
                      {node.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA under globe */}
          <div className="relative z-40 mx-auto -mt-6 max-w-[850px] text-center md:-mt-10">
            <div className="mx-auto h-px w-[190px] bg-gradient-to-r from-transparent via-purple-400/45 to-transparent" />

            <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-7 text-white/40 md:text-[15px]">
              From market intelligence to operating model transformation, HYI.AI
              connects strategy with the capabilities required to execute it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToCapabilities}
                className="group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#722ce1] via-[#9250ff] to-[#7047f5] px-8 py-4 text-[13px] font-medium text-white shadow-[0_12px_45px_rgba(124,58,237,.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(124,58,237,.45)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Advisory Capabilities
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-y-0 left-[-45%] w-[35%] rotate-[18deg] bg-white/20 blur-xl transition-all duration-700 group-hover:left-[125%]" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("strategy-framework")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[13px] text-white/55 backdrop-blur-xl transition duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.06] hover:text-white"
              >
                Our Approach
              </button>
            </div>
          </div>

          {/* metrics */}
          <div className="relative z-30 mx-auto mt-16 grid max-w-[1000px] grid-cols-2 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
            {[
              ["360°", "Strategic Advisory"],
              ["Global", "Market Intelligence"],
              ["AI", "Enabled Strategy"],
              ["End-to-End", "GCC Transformation"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`relative px-5 py-6 text-center md:py-7 ${
                  index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
                } ${index < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}`}
              >
                <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                  {value}
                </div>

                <div className="mt-2 text-[9px] uppercase tracking-[1.6px] text-white/28">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-b from-transparent to-[#020203]" />
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section
        id="advisory-capabilities"
        className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-[20%] h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-purple-800/[0.07] blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[850px] text-center">
            <div className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] uppercase tracking-[2px] text-white/40">
              Strategic Capabilities
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-1.2px] text-white md:text-5xl">
              From strategic ambition to
              <span className="bg-gradient-to-r from-[#d8a6ff] to-[#8055ff] bg-clip-text text-transparent">
                {" "}
                enterprise impact.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 text-white/40 md:text-[15px]">
              Integrated advisory capabilities designed to help enterprises
              establish, transform and scale globally distributed operations.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#08070d]/80 p-7 transition duration-500 hover:-translate-y-1 hover:border-purple-400/20 md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-purple-600/[0.08] blur-[70px] transition duration-500 group-hover:bg-purple-600/[0.15]" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[2px] text-purple-300/45">
                      {item.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-sm text-white/30 transition duration-300 group-hover:border-purple-400/20 group-hover:text-purple-200">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-medium tracking-[-0.4px] text-white/90">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-white/38">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGY FRAMEWORK
      ========================================================== */}
      <section
        id="strategy-framework"
        className="relative overflow-hidden bg-[#020203] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d20a5]/[0.07] blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-[10px] uppercase tracking-[3px] text-purple-300/45">
              Strategy to Execution
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
              One connected transformation
              <span className="block bg-gradient-to-r from-[#d9a9ff] via-[#a35cff] to-[#7656ff] bg-clip-text text-transparent">
                journey.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-4 md:grid-cols-4">
            {/* desktop connecting line */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent md:block" />

            {transformationSteps.map((item) => (
              <div
                key={item.step}
                className="group relative rounded-[24px] border border-white/[0.06] bg-white/[0.018] p-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/20 hover:bg-purple-500/[0.035]"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-[10px] text-purple-200/65 shadow-[0_0_25px_rgba(139,92,246,.08)]">
                  {item.step}
                </div>

                <h3 className="mt-9 text-lg font-medium text-white/85">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/35">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* final executive statement */}
          <div className="relative mt-20 overflow-hidden rounded-[32px] border border-purple-400/[0.12] bg-gradient-to-br from-purple-900/[0.12] via-[#07060c] to-[#050508] px-6 py-16 text-center md:px-14 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.10] blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-[850px]">
              <p className="text-[9px] uppercase tracking-[3px] text-purple-200/40">
                Build the next generation GCC
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-1.2px] text-white md:text-5xl">
                Turn global capability into a
                <span className="block bg-gradient-to-r from-[#e1b3ff] via-[#a75fff] to-[#7758ff] bg-clip-text text-transparent">
                  strategic advantage.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-7 text-white/40">
                Build a GCC strategy engineered around business outcomes,
                scalable capabilities and long-term enterprise value.
              </p>

              <button className="group mt-9 rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce4] to-[#8951ff] px-8 py-4 text-[13px] font-medium text-white shadow-[0_15px_45px_rgba(124,58,237,.25)] transition duration-300 hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  Start Your GCC Strategy
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes strategyGlobeScan {
          0%,
          100% {
            transform: translateX(-10%) rotate(20deg);
            opacity: 0.25;
          }

          50% {
            transform: translateX(320%) rotate(20deg);
            opacity: 0.85;
          }
        }

        .globe-scan {
          animation: strategyGlobeScan 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .globe-scan {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}