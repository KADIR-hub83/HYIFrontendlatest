"use client";

import { useEffect, useRef } from "react";

const locations = [
  {
    name: "North America",
    service: "Finance & Accounting",
    position: "left-[4%] top-[24%] md:left-[10%]",
  },
  {
    name: "Europe",
    service: "Customer Experience",
    position: "right-[4%] top-[20%] md:right-[12%]",
  },
  {
    name: "India",
    service: "AI & Automation",
    position: "right-[2%] bottom-[26%] md:right-[9%]",
  },
  {
    name: "APAC",
    service: "Data Operations",
    position: "left-[2%] bottom-[25%] md:left-[9%]",
  },
];

export default function BusinessProcessGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!globeRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * -8;

      globeRef.current.style.transform = `
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
    <div className="relative mx-auto flex h-[390px] w-full max-w-[920px] items-center justify-center md:h-[520px] lg:h-[600px]">

      {/* giant atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3cff]/20 blur-[130px] md:h-[650px] md:w-[650px]" />

      {/* vertical purple beam */}
      <div className="pointer-events-none absolute left-1/2 top-[5%] h-[90%] w-[160px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8f4cff]/10 to-transparent blur-[45px]" />

      {/* horizontal orbital plane */}
      <div className="pointer-events-none absolute left-1/2 top-[53%] h-[125px] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/10 [transform:translate(-50%,-50%)_rotateX(70deg)] md:w-[700px]" />

      <div className="pointer-events-none absolute left-1/2 top-[53%] h-[185px] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/[0.07] [transform:translate(-50%,-50%)_rotateX(70deg)] md:w-[850px]" />

      {/* =====================================
          GLOBE
      ====================================== */}

      <div
  ref={globeRef}
  className={`
    relative
    z-20
    h-[270px]
    w-[270px]
    transition-transform
    duration-700
    ease-out
    [transform-style:preserve-3d]
    md:h-[390px]
    md:w-[390px]
    lg:h-[440px]
    lg:w-[440px]
  `}
>
        {/* glow behind globe */}
        <div className="absolute inset-[3%] rounded-full bg-purple-500/20 blur-[50px]" />

        {/* outer atmosphere */}
      <div
  className="absolute inset-0 rounded-full border border-purple-300/20 bg-black"
  style={{
    boxShadow:
      "0 0 25px rgba(153,82,255,.3), 0 0 90px rgba(112,42,255,.28), inset -35px -20px 65px rgba(0,0,0,.9), inset 20px 8px 55px rgba(163,90,255,.20)",
  }}
/>

        {/* globe surface */}
        <div
  className="absolute inset-[3px] overflow-hidden rounded-full border border-white/[0.06]"
  style={{
    background:
      "radial-gradient(circle at 34% 24%, rgba(211,174,255,.18), transparent 20%), radial-gradient(circle at 48% 48%, rgba(118,54,210,.3), transparent 52%), linear-gradient(145deg,#1b0d30,#07030d 58%,#010102)",
  }}
>
          {/* latitude lines */}
          <div className="absolute left-[7%] top-[23%] h-[23%] w-[86%] rounded-[50%] border border-purple-300/[0.14]" />

          <div className="absolute left-[3%] top-[40%] h-[19%] w-[94%] rounded-[50%] border border-purple-300/[0.18]" />

          <div className="absolute left-[7%] top-[58%] h-[20%] w-[86%] rounded-[50%] border border-purple-300/[0.12]" />

          {/* longitude */}
          <div className="absolute left-1/2 top-[3%] h-[94%] w-[39%] -translate-x-1/2 rounded-[50%] border border-purple-300/[0.13]" />

          <div className="absolute left-1/2 top-[3%] h-[94%] w-[72%] -translate-x-1/2 rounded-[50%] border border-purple-300/[0.1]" />


{/* continents - abstract premium world */}

<div
  className={`
    absolute
    left-[15%]
    top-[27%]
    h-[26%]
    w-[31%]
    rotate-[-15deg]
    rounded-[47%_53%_62%_38%/45%_34%_66%_55%]
    bg-gradient-to-br
    from-[#c978ff]
    via-[#8242c8]
    to-[#3e176b]
    opacity-80
    shadow-[0_0_25px_rgba(187,102,255,.32)]
  `}
/>

<div
  className={`
    absolute
    left-[37%]
    top-[37%]
    h-[23%]
    w-[17%]
    rotate-[15deg]
    rounded-[40%_60%_53%_47%/38%_44%_56%_62%]
    bg-gradient-to-b
    from-[#c077ff]
    to-[#4d1a78]
    opacity-85
  `}
/>

<div
  className={`
    absolute
    right-[10%]
    top-[24%]
    h-[31%]
    w-[40%]
    rotate-[5deg]
    rounded-[55%_45%_41%_59%/38%_54%_46%_62%]
    bg-gradient-to-br
    from-[#bd76ff]
    via-[#7137ae]
    to-[#341256]
    opacity-75
  `}
/>

<div
  className={`
    absolute
    bottom-[20%]
    right-[16%]
    h-[13%]
    w-[15%]
    rotate-[20deg]
    rounded-[47%]
    bg-[#8345ba]
    opacity-75
  `}
/>

          {/* atmosphere lighting */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300/[0.08] via-transparent to-black/50" />

          <div className="absolute inset-[1px] rounded-full shadow-[inset_-45px_-10px_60px_rgba(0,0,0,.9)]" />

          {/* moving light */}
          <div className="absolute -left-[30%] top-[-10%] h-[100%] w-[35%] rotate-[20deg] bg-gradient-to-r from-transparent via-purple-200/[0.08] to-transparent blur-xl animate-[globeLight_7s_ease-in-out_infinite]" />

          {/* points */}
          <div className="absolute left-[28%] top-[36%] h-2 w-2 rounded-full bg-[#e1bdff] shadow-[0_0_14px_4px_rgba(190,120,255,.7)]" />

          <div className="absolute right-[28%] top-[35%] h-2 w-2 rounded-full bg-[#d69cff] shadow-[0_0_14px_4px_rgba(190,120,255,.7)]" />

          <div className="absolute right-[24%] bottom-[32%] h-2 w-2 rounded-full bg-[#d69cff] shadow-[0_0_14px_4px_rgba(190,120,255,.7)]" />

          <div className="absolute left-[43%] bottom-[24%] h-2 w-2 rounded-full bg-[#d69cff] shadow-[0_0_14px_4px_rgba(190,120,255,.7)]" />
        </div>

        {/* gloss */}
        <div className="pointer-events-none absolute left-[14%] top-[8%] h-[42%] w-[38%] rotate-[-30deg] rounded-full bg-white/[0.055] blur-xl" />

        {/* planet edge */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-[#b56fff]/30 shadow-[inset_0_0_25px_rgba(178,99,255,.16)]" />
      </div>

      {/* =====================================
          FLOATING GLOBAL LABELS
      ====================================== */}

      {locations.map((location) => (
        <div
          key={location.name}
          className={`
            absolute
            ${location.position}
            z-30
            hidden
            md:block
          `}
        >
          <div className="group relative">
            <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl transition group-hover:bg-purple-500/20" />

            <div
              className={`
  relative
  min-w-[165px]
  rounded-2xl
  border
  border-white/[0.08]
  bg-[#08070d]/70
  px-4
  py-3
  backdrop-blur-2xl
  transition-all
  duration-300
  group-hover:-translate-y-1
  group-hover:border-purple-400/30
`}
            >
              <div className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />

                <span className="text-[10px] uppercase tracking-[1.7px] text-white/35">
                  {location.name}
                </span>
              </div>

              <p className="mt-2 text-[12px] font-medium text-white/75">
                {location.service}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* top small global network label */}
      <div className="absolute left-1/2 top-[4%] z-30 -translate-x-1/2 md:top-[2%]">
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[3px] text-purple-200/50">
          <span className="h-[4px] w-[4px] rounded-full bg-purple-400" />
          Global Operations Network
          <span className="h-[4px] w-[4px] rounded-full bg-purple-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes globeLight {
          0%,
          100% {
            transform: translateX(-10%) rotate(20deg);
            opacity: 0.4;
          }

          50% {
            transform: translateX(270%) rotate(20deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}