"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

/* =========================================================
   DATA
========================================================= */

const regions = [
  {
    code: "US",
    city: "North America",
    detail: "Entity Operations",
    x: 20,
    y: 35,
  },
  {
    code: "EU",
    city: "Europe",
    detail: "Compliance Hub",
    x: 43,
    y: 25,
  },
  {
    code: "IN",
    city: "India",
    detail: "GCC Delivery",
    x: 66,
    y: 49,
  },
  {
    code: "SG",
    city: "Singapore",
    detail: "APAC Operations",
    x: 78,
    y: 61,
  },
  {
    code: "AU",
    city: "Australia",
    detail: "Regional Scale",
    x: 84,
    y: 77,
  },
  {
    code: "ME",
    city: "Middle East",
    detail: "Expansion Market",
    x: 55,
    y: 55,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Entity Formation",
    tag: "FOUNDATION",
    description:
      "Structure and establish your GCC entity with a clear operating framework aligned to your global business strategy.",
  },
  {
    number: "02",
    title: "Market Entry Strategy",
    tag: "EXPANSION",
    description:
      "Evaluate locations, talent ecosystems, operational readiness and expansion opportunities before entering new markets.",
  },
  {
    number: "03",
    title: "Compliance & Governance",
    tag: "CONTROL",
    description:
      "Build structured governance, compliance and operational controls designed for scalable global delivery.",
  },
  {
    number: "04",
    title: "Talent Infrastructure",
    tag: "WORKFORCE",
    description:
      "Create the workforce architecture needed to attract, onboard and scale specialized global talent.",
  },
  {
    number: "05",
    title: "Operational Launch",
    tag: "ACTIVATION",
    description:
      "Coordinate people, technology, processes and governance into one structured GCC launch program.",
  },
  {
    number: "06",
    title: "Multi-Market Expansion",
    tag: "SCALE",
    description:
      "Expand mature GCC capabilities into additional markets while maintaining consistency, visibility and control.",
  },
];

const phases = [
  {
    number: "01",
    title: "Assess",
    text: "Evaluate business objectives, operating requirements and target markets.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Design entity, governance, workforce and delivery architecture.",
  },
  {
    number: "03",
    title: "Establish",
    text: "Activate operational infrastructure and launch the GCC environment.",
  },
  {
    number: "04",
    title: "Expand",
    text: "Scale capabilities across teams, functions and global markets.",
  },
];

/* =========================================================
   GLOBAL EXPANSION NETWORK
========================================================= */

function GlobalExpansionNetwork() {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!networkRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 7;
      const y = (event.clientY / window.innerHeight - 0.5) * -5;

      networkRef.current.style.transform = `
        perspective(1200px)
        rotateX(${y}deg)
        rotateY(${x}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[1150px] md:h-[650px]">
      {/* background aura */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.10] blur-[130px]" />

      {/* top label */}
      <div className="absolute left-1/2 top-[4%] z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 whitespace-nowrap text-[8px] uppercase tracking-[3px] text-purple-200/40 md:text-[9px]">
          <span className="h-[4px] w-[4px] rounded-full bg-purple-400" />
          Global Expansion Intelligence Network
          <span className="h-[4px] w-[4px] rounded-full bg-purple-400" />
        </div>
      </div>

      <div
        ref={networkRef}
        className="absolute inset-0 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
      >
        {/* =====================================================
            WORLD MAP - CSS/SVG ONLY
        ====================================================== */}

        <div className="absolute left-1/2 top-[51%] h-[350px] w-[94%] max-w-[950px] -translate-x-1/2 -translate-y-1/2 md:h-[470px]">
          {/* scanning background */}
          <div className="absolute inset-0 overflow-hidden rounded-[50%]">
            <div className="network-scan absolute left-[-25%] top-0 h-full w-[20%] rotate-[12deg] bg-gradient-to-r from-transparent via-purple-300/[0.07] to-transparent blur-2xl" />
          </div>

          {/* globe / world boundary */}
          <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.12] md:h-[440px] md:w-[440px]" />

          <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.09] md:h-[350px] md:w-[350px]" />

          <div className="expansion-ring absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/[0.13] md:h-[520px] md:w-[520px]" />

          {/* world drawing */}
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="worldFill"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#c37cff" stopOpacity="0.52" />
                <stop offset="45%" stopColor="#7c3aed" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.16" />
              </linearGradient>

              <linearGradient
                id="networkLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
              </linearGradient>

              <filter id="purpleGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* NORTH AMERICA */}
            <path
              d="
                M120 145
                C150 105 205 88 250 104
                C277 114 293 139 285 158
                C272 180 244 185 234 206
                C221 229 201 246 177 235
                C153 224 150 202 131 190
                C112 178 103 162 120 145Z
              "
              fill="url(#worldFill)"
              stroke="#a855f7"
              strokeOpacity="0.28"
              strokeWidth="1"
            />

            {/* SOUTH AMERICA */}
            <path
              d="
                M252 254
                C280 246 308 258 313 284
                C317 308 300 329 295 352
                C289 383 276 420 255 442
                C239 423 238 392 226 368
                C213 341 202 314 212 287
                C220 269 233 259 252 254Z
              "
              fill="url(#worldFill)"
              stroke="#a855f7"
              strokeOpacity="0.28"
            />

            {/* EUROPE */}
            <path
              d="
                M438 139
                C465 123 498 126 516 143
                C525 153 518 169 501 174
                C480 181 460 174 442 183
                C423 175 420 153 438 139Z
              "
              fill="url(#worldFill)"
              stroke="#c084fc"
              strokeOpacity="0.35"
            />

            {/* AFRICA */}
            <path
              d="
                M457 203
                C487 186 526 190 548 215
                C566 237 557 270 545 295
                C530 326 509 357 482 364
                C459 342 452 310 439 281
                C426 250 430 220 457 203Z
              "
              fill="url(#worldFill)"
              stroke="#a855f7"
              strokeOpacity="0.28"
            />

            {/* ASIA */}
            <path
              d="
                M525 135
                C575 99 650 92 713 111
                C764 125 813 149 835 180
                C815 202 780 195 758 213
                C734 232 706 237 682 220
                C658 203 635 209 610 202
                C584 194 562 176 535 174
                C513 169 506 149 525 135Z
              "
              fill="url(#worldFill)"
              stroke="#a855f7"
              strokeOpacity="0.3"
            />

            {/* INDIA / SEA */}
            <path
              d="
                M642 220
                C661 221 675 237 669 254
                C663 272 653 288 643 302
                C632 286 623 267 624 249
                C625 234 630 224 642 220Z
              "
              fill="#9d5cff"
              fillOpacity="0.4"
            />

            {/* AUSTRALIA */}
            <path
              d="
                M763 330
                C798 309 844 316 866 342
                C879 362 863 384 837 394
                C807 403 775 393 757 371
                C744 354 747 340 763 330Z
              "
              fill="url(#worldFill)"
              stroke="#a855f7"
              strokeOpacity="0.28"
            />

            {/* NETWORK CONNECTIONS */}
            <path
              className="network-path path-one"
              d="M205 175 Q390 35 495 155"
              fill="none"
              stroke="url(#networkLine)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />

            <path
              className="network-path path-two"
              d="M495 155 Q620 100 700 235"
              fill="none"
              stroke="url(#networkLine)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />

            <path
              className="network-path path-three"
              d="M700 235 Q790 240 815 350"
              fill="none"
              stroke="url(#networkLine)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />

            <path
              className="network-path path-four"
              d="M205 175 Q430 370 700 235"
              fill="none"
              stroke="url(#networkLine)"
              strokeWidth="1.2"
              strokeDasharray="5 9"
            />

            <path
              className="network-path path-five"
              d="M495 155 Q510 290 815 350"
              fill="none"
              stroke="url(#networkLine)"
              strokeWidth="1.2"
              strokeDasharray="5 9"
            />

            {/* points */}
            {[
              [205, 175],
              [495, 155],
              [700, 235],
              [815, 350],
              [540, 265],
              [260, 335],
            ].map(([cx, cy], index) => (
              <g key={index}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="10"
                  fill="#a855f7"
                  opacity="0.08"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  fill="#e9d5ff"
                  filter="url(#purpleGlow)"
                />
              </g>
            ))}
          </svg>

          {/* central command core */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/20 bg-[#08040f]/90 shadow-[0_0_60px_rgba(126,55,220,.32)] backdrop-blur-xl md:h-[125px] md:w-[125px]">
            <div className="absolute inset-[10px] rounded-full border border-purple-400/[0.15]" />

            <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-purple-500/20 to-purple-950/20" />

            <div className="relative text-center">
              <div className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                GCC
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[2px] text-white/25">
                Expansion
              </div>
            </div>
          </div>

          {/* radar */}
          <div className="radar-sweep pointer-events-none absolute left-1/2 top-1/2 z-10 h-[215px] w-[215px] origin-bottom-left rounded-tr-full bg-gradient-to-tr from-transparent to-purple-400/[0.08] md:h-[300px] md:w-[300px]" />
        </div>
      </div>

      {/* bottom network status */}
      <div className="absolute bottom-[3%] left-1/2 z-30 -translate-x-1/2 md:bottom-[5%]">
        <div className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-black/30 px-4 py-2 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>

          <span className="whitespace-nowrap text-[8px] uppercase tracking-[2px] text-white/30">
            Expansion Network Active
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LIVE TERMINAL
========================================================= */

function ExpansionTerminal() {
  const [activeLine, setActiveLine] = useState(0);

  const lines = [
    "Analyzing global operating environment...",
    "Evaluating talent ecosystem...",
    "Structuring entity framework...",
    "Mapping compliance architecture...",
    "Activating workforce infrastructure...",
    "GCC expansion model ready.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((current) => {
        if (current >= lines.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#07070a]">
      {/* terminal header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-purple-400/50" />
        </div>

        <span className="text-[8px] uppercase tracking-[2px] text-white/20">
          HYI Expansion Engine
        </span>
      </div>

      <div className="min-h-[330px] p-6 md:p-8">
        <div className="text-[10px] uppercase tracking-[2px] text-purple-300/40">
          SYSTEM / ENTITY_SETUP
        </div>

        <div className="mt-7 space-y-4">
          {lines.map((line, index) => (
            <div
              key={line}
              className={`flex items-start gap-3 transition-all duration-500 ${
                index <= activeLine
                  ? "translate-x-0 opacity-100"
                  : "translate-x-3 opacity-15"
              }`}
            >
              <span
                className={`mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full ${
                  index < activeLine
                    ? "bg-green-400"
                    : index === activeLine
                    ? "animate-pulse bg-purple-400 shadow-[0_0_12px_#a855f7]"
                    : "bg-white/20"
                }`}
              />

              <div>
                <p
                  className={`text-[12px] md:text-[13px] ${
                    index <= activeLine ? "text-white/60" : "text-white/20"
                  }`}
                >
                  {line}
                </p>

                {index < activeLine && (
                  <span className="mt-1 block text-[8px] uppercase tracking-[1.5px] text-green-400/40">
                    Complete
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-transparent" />

        <div className="mt-5 flex justify-between">
          <span className="text-[8px] uppercase tracking-[1.5px] text-white/20">
            Network
          </span>

          <span className="text-[8px] uppercase tracking-[1.5px] text-green-400/50">
            Operational
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function EntitySetupExpansionPage() {
  const scrollToCapabilities = () => {
    document
      .getElementById("expansion-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-white">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden border-b border-white/[0.05] bg-[#020203]">
        {/* background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[38%] h-[850px] w-[1200px] -translate-x-1/2 rounded-full bg-[#7020bd]/[0.11] blur-[180px]" />

          <div className="absolute -left-[250px] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-900/[0.07] blur-[160px]" />

          <div className="absolute -right-[250px] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-900/[0.07] blur-[160px]" />
        </div>

        {/* grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(145,85,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145,85,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 72%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 72%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 pt-28 md:px-10 md:pt-32 lg:px-16">
          {/* badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.17] bg-purple-500/[0.055] px-4 py-2 backdrop-blur-xl">
              <span className="h-[5px] w-[5px] rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,110,255,1)]" />

              <span className="text-[9px] uppercase tracking-[2.2px] text-purple-100/60">
                HYI.AI Global Capability Center
              </span>
            </div>
          </div>

          {/* title */}
          <div className="relative z-30 mx-auto mt-8 max-w-[1150px] text-center">
            <p className="mb-5 text-[9px] uppercase tracking-[4px] text-white/25 md:text-[10px]">
              Establish • Operate • Expand
            </p>

            <h1 className="text-[42px] font-semibold leading-[0.98] tracking-[-2.5px] text-white sm:text-[56px] md:text-[74px] lg:text-[88px]">
              Entity Setup &
              <span className="ml-0 block bg-gradient-to-r from-[#dfafff] via-[#a55cff] to-[#7657ff] bg-clip-text text-transparent md:ml-4 md:inline">
                Expansion
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[800px] text-[14px] leading-7 text-white/42 md:text-[17px] md:leading-8">
              Establish and scale your Global Capability Center through a
              structured expansion model connecting entity formation,
              governance, talent, technology and global operations.
            </p>
          </div>

          {/* ANIMATED WORLD */}
          <div className="-mt-2 md:-mt-6">
            <GlobalExpansionNetwork />
          </div>

          {/* CTA */}
          <div className="relative z-40 mx-auto -mt-5 max-w-[820px] text-center md:-mt-10">
            <div className="mx-auto h-px w-[200px] bg-gradient-to-r from-transparent via-purple-400/45 to-transparent" />

            <p className="mx-auto mt-6 max-w-[690px] text-[13px] leading-7 text-white/35 md:text-[14px]">
              One integrated framework for building the legal, operational and
              workforce foundation required to launch and expand global
              capabilities.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToCapabilities}
                className="group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce5] via-[#9250ff] to-[#7447ff] px-8 py-4 text-[13px] font-medium text-white shadow-[0_12px_45px_rgba(124,58,237,.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(124,58,237,.45)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Build Your Global Entity
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-y-0 left-[-45%] w-[35%] rotate-[18deg] bg-white/20 blur-xl transition-all duration-700 group-hover:left-[125%]" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("expansion-framework")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[13px] text-white/55 backdrop-blur-xl transition duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.06] hover:text-white"
              >
                View Expansion Model
              </button>
            </div>
          </div>

          {/* metrics */}
          <div className="relative z-30 mx-auto mt-16 grid max-w-[1000px] grid-cols-2 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
            {[
              ["Global", "Market Reach"],
              ["360°", "Setup Framework"],
              ["End-to-End", "Operations"],
              ["Scalable", "GCC Model"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-5 py-6 text-center md:py-7 ${
                  index !== 3
                    ? "md:border-r md:border-white/[0.06]"
                    : ""
                } ${
                  index < 2
                    ? "border-b border-white/[0.06] md:border-b-0"
                    : ""
                }`}
              >
                <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                  {value}
                </div>

                <div className="mt-2 text-[9px] uppercase tracking-[1.6px] text-white/25">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-b from-transparent to-[#020203]" />
      </section>

      {/* =====================================================
          EXPANSION CAPABILITIES
      ====================================================== */}

      <section
        id="expansion-capabilities"
        className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-[20%] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-900/[0.07] blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[850px] text-center">
            <div className="inline-flex rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 text-[9px] uppercase tracking-[2px] text-white/35">
              Expansion Infrastructure
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-1.2px] md:text-5xl">
              Everything required to establish
              <span className="block bg-gradient-to-r from-[#dcaaff] via-[#a45cff] to-[#7958ff] bg-clip-text text-transparent">
                and scale globally.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[690px] text-[14px] leading-7 text-white/38">
              A connected entity setup framework designed around operational
              readiness, global talent and long-term scalability.
            </p>
          </div>

          {/* unusual staggered cards */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.number}
                className={`group relative min-h-[285px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#08070d]/80 p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20 md:p-8 ${
                  index === 1 || index === 4 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-purple-600/[0.07] blur-[70px] transition duration-500 group-hover:bg-purple-600/[0.16]" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[2px] text-purple-300/40">
                      {item.number}
                    </span>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[7px] tracking-[1.5px] text-white/25">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-14 flex items-end justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.4px] text-white/90">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[13px] leading-7 text-white/35">
                        {item.description}
                      </p>
                    </div>

                    <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-white/25 transition duration-300 group-hover:border-purple-400/25 group-hover:text-purple-200">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPANSION ENGINE
      ====================================================== */}

      <section
        id="expansion-framework"
        className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute right-[5%] top-[10%] h-[550px] w-[550px] rounded-full bg-purple-800/[0.07] blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/[0.12] bg-purple-500/[0.04] px-4 py-2">
                <span className="h-1 w-1 rounded-full bg-purple-400" />

                <span className="text-[8px] uppercase tracking-[2px] text-purple-200/40">
                  HYI Expansion Engine
                </span>
              </div>

              <h2 className="mt-7 max-w-[570px] text-3xl font-semibold leading-[1.08] tracking-[-1.3px] md:text-5xl">
                Expansion engineered as
                <span className="block bg-gradient-to-r from-[#dba9ff] via-[#a15bff] to-[#7657ff] bg-clip-text text-transparent">
                  one connected system.
                </span>
              </h2>

              <p className="mt-6 max-w-[540px] text-[14px] leading-7 text-white/38">
                Instead of treating entity setup, hiring, governance and
                operations as disconnected activities, HYI.AI brings them
                together into one coordinated expansion framework.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Global market and operating assessment",
                  "Entity and governance architecture",
                  "Workforce and technology activation",
                  "Continuous operational scalability",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.05] pb-4"
                  >
                    <span className="text-[9px] text-purple-300/40">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] text-white/55">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ExpansionTerminal />
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPANSION JOURNEY
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#030305] py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.06] blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Expansion Journey
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-1.2px] md:text-5xl">
              From market decision to
              <span className="bg-gradient-to-r from-[#ddaaff] to-[#7d59ff] bg-clip-text text-transparent">
                {" "}
                global scale.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-4 md:grid-cols-4">
            {/* connector */}
            <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent md:block" />

            {phases.map((phase) => (
              <div
                key={phase.number}
                className="group relative rounded-[24px] border border-white/[0.06] bg-white/[0.018] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-purple-500/[0.035]"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-[9px] text-purple-200/60">
                  {phase.number}
                </div>

                <h3 className="mt-9 text-lg font-medium text-white/85">
                  {phase.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/34">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="relative mt-20 overflow-hidden rounded-[32px] border border-purple-400/[0.11] bg-[#07060b] px-6 py-16 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.11] blur-[110px]" />

            {/* animated rings behind CTA */}
            <div className="cta-ring pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.07]" />

            <div className="cta-ring-two pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.04]" />

            <div className="relative z-10 mx-auto max-w-[850px]">
              <p className="text-[9px] uppercase tracking-[3px] text-purple-200/35">
                Global Capability Center
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-1.2px] md:text-5xl">
                Build once.
                <span className="block bg-gradient-to-r from-[#e0b0ff] via-[#a45dff] to-[#7758ff] bg-clip-text text-transparent">
                  Expand without limits.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-7 text-white/38">
                Establish the operating foundation your organization needs to
                launch today and scale globally tomorrow.
              </p>

              <button className="group mt-9 rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce4] to-[#8951ff] px-8 py-4 text-[13px] font-medium text-white shadow-[0_15px_45px_rgba(124,58,237,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,58,237,.38)]">
                <span className="flex items-center gap-3">
                  Start Your Expansion
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx global>{`
        @keyframes networkScan {
          0% {
            transform: translateX(-30%) rotate(12deg);
            opacity: 0;
          }

          20% {
            opacity: 0.8;
          }

          80% {
            opacity: 0.8;
          }

          100% {
            transform: translateX(650%) rotate(12deg);
            opacity: 0;
          }
        }

        .network-scan {
          animation: networkScan 7s ease-in-out infinite;
        }

        @keyframes rotateExpansionRing {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .expansion-ring {
          animation: rotateExpansionRing 35s linear infinite;
        }

        @keyframes radarSweep {
          from {
            transform: translate(-100%, -100%) rotate(0deg);
          }

          to {
            transform: translate(-100%, -100%) rotate(360deg);
          }
        }

        .radar-sweep {
          transform-origin: 100% 100%;
          animation: radarSweep 8s linear infinite;
        }

        @keyframes networkFlow {
          to {
            stroke-dashoffset: -120;
          }
        }

        .network-path {
          animation: networkFlow 6s linear infinite;
        }

        .path-two {
          animation-duration: 8s;
        }

        .path-three {
          animation-duration: 7s;
        }

        .path-four {
          animation-duration: 10s;
        }

        .path-five {
          animation-duration: 9s;
        }

        @keyframes ctaRing {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.25;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 0.8;
          }
        }

        .cta-ring {
          animation: ctaRing 5s ease-in-out infinite;
        }

        .cta-ring-two {
          animation: ctaRing 7s ease-in-out infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .network-scan,
          .expansion-ring,
          .radar-sweep,
          .network-path,
          .cta-ring,
          .cta-ring-two {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}