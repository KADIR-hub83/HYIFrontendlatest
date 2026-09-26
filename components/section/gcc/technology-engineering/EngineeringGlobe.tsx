"use client";

import { useEffect, useRef } from "react";

const orbitNodes = [
  {
    label: "AI",
    sub: "Intelligence",
    position: "left-[3%] top-[27%] md:left-[5%]",
    delay: "0s",
  },
  {
    label: "CLOUD",
    sub: "Infrastructure",
    position: "right-[3%] top-[25%] md:right-[5%]",
    delay: ".7s",
  },
  {
    label: "DATA",
    sub: "Engineering",
    position: "left-[2%] bottom-[24%] md:left-[7%]",
    delay: "1.4s",
  },
  {
    label: "DEVOPS",
    sub: "Automation",
    position: "right-[2%] bottom-[23%] md:right-[7%]",
    delay: "2.1s",
  },
];

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${5 + ((index * 37) % 90)}%`,
  top: `${6 + ((index * 53) % 86)}%`,
  delay: `${(index % 8) * 0.45}s`,
  duration: `${5 + (index % 6)}s`,
}));

export default function EngineeringGlobe() {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!modelRef.current) return;

      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      const rotateY = mouseX * 8;
      const rotateX = mouseY * -6;

      modelRef.current.style.transform = `
        perspective(1400px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const handleMouseLeave = () => {
      if (!modelRef.current) return;

      modelRef.current.style.transform =
        "perspective(1400px) rotateX(0deg) rotateY(0deg)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[1150px] sm:h-[600px] md:h-[690px] lg:h-[730px]">
      {/* =====================================================
          BACKGROUND ENERGY
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.12] blur-[120px] md:h-[620px] md:w-[800px] md:blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-[9%] h-[80%] w-[100px] -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-400/[0.10] to-transparent blur-[35px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

      {/* =====================================================
          PARTICLE FIELD
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="engineering-particle absolute h-[2px] w-[2px] rounded-full bg-purple-200"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          TOP STATUS
      ====================================================== */}

      <div className="absolute left-1/2 top-[4%] z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 whitespace-nowrap text-[7px] uppercase tracking-[2.4px] text-purple-100/35 sm:text-[8px] md:text-[9px] md:tracking-[3px]">
          <span className="relative flex h-[5px] w-[5px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-green-400" />
          </span>

          Global Engineering Network

          <span className="h-[4px] w-[4px] rounded-full bg-purple-400" />
        </div>
      </div>

      {/* =====================================================
          3D MODEL
      ====================================================== */}

      <div
        ref={modelRef}
        className="absolute inset-0 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
      >
        {/* outer orbit */}
        <div className="engineering-orbit-slow absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-300/[0.13] sm:h-[400px] sm:w-[400px] md:h-[540px] md:w-[540px] lg:h-[590px] lg:w-[590px]">
          <span className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-purple-100 shadow-[0_0_18px_5px_rgba(192,132,252,.55)]" />

          <span className="absolute bottom-[8%] right-[13%] h-[6px] w-[6px] rounded-full bg-violet-300 shadow-[0_0_15px_4px_rgba(139,92,246,.5)]" />
        </div>

        {/* second orbit */}
        <div className="engineering-orbit-reverse absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.12] sm:h-[345px] sm:w-[345px] md:h-[455px] md:w-[455px] lg:h-[500px] lg:w-[500px]">
          <span className="absolute left-[7%] top-[29%] h-[7px] w-[7px] rounded-full bg-fuchsia-300 shadow-[0_0_16px_4px_rgba(217,70,239,.45)]" />
        </div>

        {/* third orbit */}
        <div className="engineering-orbit-medium absolute left-1/2 top-1/2 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-300/[0.15] sm:h-[280px] sm:w-[280px] md:h-[365px] md:w-[365px] lg:h-[400px] lg:w-[400px]" />

        {/* horizontal 3D rings */}
        <div className="engineering-horizontal-one absolute left-1/2 top-1/2 h-[105px] w-[72%] rounded-[50%] border border-purple-400/[0.14] md:h-[145px] md:w-[72%]" />

        <div className="engineering-horizontal-two absolute left-1/2 top-1/2 h-[155px] w-[88%] rounded-[50%] border border-purple-400/[0.06] md:h-[210px] md:w-[85%]" />

        {/* vertical sphere lines */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[105px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-300/[0.10] sm:h-[330px] sm:w-[125px] md:h-[420px] md:w-[155px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-300/[0.07] sm:h-[330px] sm:w-[235px] md:h-[420px] md:w-[300px]" />

        {/* =====================================================
            CONNECTION NETWORK
        ====================================================== */}

        <svg
          viewBox="0 0 800 600"
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[560px] w-[800px] -translate-x-1/2 -translate-y-1/2 md:block"
        >
          <defs>
            <linearGradient
              id="engineering-line"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#7c3aed"
                stopOpacity="0.08"
              />
              <stop
                offset="48%"
                stopColor="#d8b4fe"
                stopOpacity="0.65"
              />
              <stop
                offset="100%"
                stopColor="#6366f1"
                stopOpacity="0.08"
              />
            </linearGradient>

            <filter id="engineering-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="engineering-data-line"
            d="M400 300 C300 190 190 170 100 220"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
          />

          <path
            className="engineering-data-line engineering-data-two"
            d="M400 300 C500 185 620 165 700 215"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
          />

          <path
            className="engineering-data-line engineering-data-three"
            d="M400 300 C290 400 190 420 95 380"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
          />

          <path
            className="engineering-data-line engineering-data-four"
            d="M400 300 C520 410 620 420 705 380"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
          />

          <path
            className="engineering-data-line engineering-data-five"
            d="M400 300 C345 160 355 90 400 50"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1"
            strokeDasharray="5 11"
          />

          <path
            className="engineering-data-line engineering-data-six"
            d="M400 300 C455 440 445 510 400 550"
            fill="none"
            stroke="url(#engineering-line)"
            strokeWidth="1"
            strokeDasharray="5 11"
          />

          {[
            [100, 220],
            [700, 215],
            [95, 380],
            [705, 380],
            [400, 50],
            [400, 550],
          ].map(([cx, cy], index) => (
            <g key={index}>
              <circle
                cx={cx}
                cy={cy}
                r="11"
                fill="#a855f7"
                opacity=".06"
              />

              <circle
                cx={cx}
                cy={cy}
                r="3"
                fill="#e9d5ff"
                filter="url(#engineering-glow)"
              />
            </g>
          ))}
        </svg>

        {/* =====================================================
            CENTRAL ENGINEERING CORE
        ====================================================== */}

        <div className="absolute left-1/2 top-1/2 z-30 flex h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/20 bg-[#07040d]/95 shadow-[0_0_100px_rgba(124,58,237,.32)] backdrop-blur-2xl sm:h-[210px] sm:w-[210px] md:h-[240px] md:w-[240px]">
          {/* pulse rings */}
          <div className="engineering-core-pulse absolute inset-[-24px] rounded-full border border-purple-400/[0.12]" />

          <div className="engineering-core-pulse-two absolute inset-[-48px] rounded-full border border-purple-400/[0.07]" />

          <div className="engineering-core-pulse-three absolute inset-[-75px] rounded-full border border-purple-400/[0.035]" />

          {/* inner sphere */}
          <div className="absolute inset-[9px] rounded-full border border-purple-200/[0.10]" />

          <div
            className="absolute inset-[19px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 28%, rgba(233,213,255,.18), transparent 22%), radial-gradient(circle at 50% 50%, rgba(139,92,246,.15), transparent 60%), linear-gradient(145deg,#130923,#050208 70%)",
              boxShadow:
                "inset -25px -15px 45px rgba(0,0,0,.75), inset 15px 10px 35px rgba(168,85,247,.08)",
            }}
          />

          {/* internal grid */}
          <div className="absolute inset-[38px] rounded-full border border-dashed border-purple-300/[0.12] engineering-inner-spin" />

          {/* center text */}
          <div className="relative z-20 text-center">
            <div className="engineering-tec-glow bg-gradient-to-r from-white via-purple-100 to-violet-300 bg-clip-text text-[35px] font-semibold tracking-[-2px] text-transparent sm:text-[43px] md:text-[49px]">
              TEC
            </div>

            <p className="mt-1 text-[6px] uppercase tracking-[2.3px] text-white/25 sm:text-[7px]">
              Engineering Core
            </p>

            <div className="mx-auto mt-4 flex w-fit items-center gap-2">
              <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-green-400" />
              </span>

              <span className="text-[6px] uppercase tracking-[1.4px] text-green-300/45">
                Systems Online
              </span>
            </div>
          </div>

          {/* scanning light */}
          <div className="engineering-core-scan pointer-events-none absolute inset-[10px] overflow-hidden rounded-full">
            <div className="absolute -left-[45%] top-[-15%] h-[130%] w-[25%] rotate-[20deg] bg-gradient-to-r from-transparent via-purple-100/[0.12] to-transparent blur-lg" />
          </div>
        </div>

        {/* =====================================================
            FLOATING MODULES
        ====================================================== */}

        {orbitNodes.map((node) => (
          <div
            key={node.label}
            className={`engineering-floating-module absolute ${node.position} z-40 hidden md:block`}
            style={{
              animationDelay: node.delay,
            }}
          >
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-purple-500/[0.10] blur-xl transition duration-500 group-hover:bg-purple-500/[0.22]" />

              <div className="relative min-w-[150px] rounded-2xl border border-white/[0.08] bg-[#08070d]/75 px-4 py-3.5 backdrop-blur-2xl transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/30">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-[7px] uppercase tracking-[1.5px] text-white/22">
                    {node.sub}
                  </span>

                  <span className="relative flex h-[5px] w-[5px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-40" />
                    <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-purple-300" />
                  </span>
                </div>

                <div className="mt-2 text-[12px] font-medium tracking-[1px] text-purple-100/75">
                  {node.label}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* =====================================================
            TOP / BOTTOM MODULES
        ====================================================== */}

        <div className="engineering-top-module absolute left-1/2 top-[11%] z-40 hidden -translate-x-1/2 md:block">
          <div className="rounded-full border border-white/[0.07] bg-black/40 px-4 py-2 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="h-[4px] w-[4px] rounded-full bg-indigo-300 shadow-[0_0_8px_#818cf8]" />

              <span className="text-[7px] uppercase tracking-[1.7px] text-white/30">
                Platform Engineering
              </span>
            </div>
          </div>
        </div>

        <div className="engineering-bottom-module absolute bottom-[9%] left-1/2 z-40 hidden -translate-x-1/2 md:block">
          <div className="rounded-full border border-white/[0.07] bg-black/40 px-4 py-2 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="h-[4px] w-[4px] rounded-full bg-fuchsia-300 shadow-[0_0_8px_#e879f9]" />

              <span className="text-[7px] uppercase tracking-[1.7px] text-white/30">
                Quality & Security
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOOR / BASE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[75px] w-[70%] -translate-x-1/2 rounded-[50%] border border-purple-400/[0.09] bg-purple-500/[0.015] [transform:translateX(-50%)_rotateX(70deg)] md:h-[110px]" />

      <div className="pointer-events-none absolute bottom-[7%] left-1/2 h-[130px] w-[88%] -translate-x-1/2 rounded-[50%] border border-purple-400/[0.04] [transform:translateX(-50%)_rotateX(70deg)]" />

      {/* bottom status */}
      <div className="absolute bottom-[1%] left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-black/40 px-4 py-2 backdrop-blur-xl md:px-5">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />

          <span className="whitespace-nowrap text-[6px] uppercase tracking-[1.7px] text-white/28 md:text-[7px] md:tracking-[2px]">
            Engineering Infrastructure Active
          </span>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`
        @keyframes orbitSlow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes orbitMedium {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        .engineering-orbit-slow {
          animation: orbitSlow 32s linear infinite;
        }

        .engineering-orbit-reverse {
          animation: orbitReverse 24s linear infinite;
        }

        .engineering-orbit-medium {
          animation: orbitMedium 18s linear infinite;
        }

        @keyframes horizontalOne {
          from {
            transform: translate(-50%, -50%) rotateX(72deg) rotateZ(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(72deg)
              rotateZ(360deg);
          }
        }

        @keyframes horizontalTwo {
          from {
            transform: translate(-50%, -50%) rotateX(72deg)
              rotateZ(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(72deg) rotateZ(0deg);
          }
        }

        .engineering-horizontal-one {
          animation: horizontalOne 25s linear infinite;
        }

        .engineering-horizontal-two {
          animation: horizontalTwo 36s linear infinite;
        }

        @keyframes corePulse {
          0%,
          100% {
            transform: scale(0.93);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.75;
          }
        }

        @keyframes corePulseLarge {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.13);
            opacity: 0.55;
          }
        }

        .engineering-core-pulse {
          animation: corePulse 3.5s ease-in-out infinite;
        }

        .engineering-core-pulse-two {
          animation: corePulseLarge 5s ease-in-out infinite reverse;
        }

        .engineering-core-pulse-three {
          animation: corePulse 7s ease-in-out infinite;
        }

        @keyframes innerSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .engineering-inner-spin {
          animation: innerSpin 14s linear infinite;
        }

        @keyframes dataMovement {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -180;
          }
        }

        .engineering-data-line {
          animation: dataMovement 6s linear infinite;
        }

        .engineering-data-two {
          animation-duration: 7.5s;
        }

        .engineering-data-three {
          animation-duration: 8s;
        }

        .engineering-data-four {
          animation-duration: 6.5s;
        }

        .engineering-data-five {
          animation-duration: 9s;
        }

        .engineering-data-six {
          animation-duration: 10s;
        }

        @keyframes particleMovement {
          0%,
          100% {
            opacity: 0.08;
            transform: translateY(0) scale(0.7);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-30px) scale(1.4);
            box-shadow: 0 0 10px rgba(192, 132, 252, 0.65);
          }
        }

        .engineering-particle {
          animation-name: particleMovement;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes floatingModule {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-11px);
          }
        }

        .engineering-floating-module {
          animation: floatingModule 5.5s ease-in-out infinite;
        }

        @keyframes topFloating {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-7px);
          }
        }

        @keyframes bottomFloating {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(7px);
          }
        }

        .engineering-top-module {
          animation: topFloating 6s ease-in-out infinite;
        }

        .engineering-bottom-module {
          animation: bottomFloating 7s ease-in-out infinite;
        }

        @keyframes coreScan {
          0% {
            transform: translateX(-130%);
          }
          55%,
          100% {
            transform: translateX(550%);
          }
        }

        .engineering-core-scan > div {
          animation: coreScan 5s ease-in-out infinite;
        }

        @keyframes tecGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(168, 85, 247, 0.15));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(192, 132, 252, 0.5));
          }
        }

        .engineering-tec-glow {
          animation: tecGlow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .engineering-orbit-slow,
          .engineering-orbit-reverse,
          .engineering-orbit-medium,
          .engineering-horizontal-one,
          .engineering-horizontal-two,
          .engineering-core-pulse,
          .engineering-core-pulse-two,
          .engineering-core-pulse-three,
          .engineering-inner-spin,
          .engineering-data-line,
          .engineering-particle,
          .engineering-floating-module,
          .engineering-top-module,
          .engineering-bottom-module,
          .engineering-core-scan > div,
          .engineering-tec-glow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}