import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Cpu,
  Factory,
  Gauge,
  Globe2,
  Network,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

/* ============================================================
   INDUSTRIAL ROBOTICS
   HYI.AI

   Route:
   /technology-solutions/robotic-design-development/industrial-robotics

   SINGLE FILE PAGE
============================================================ */

const globalNodes = [
  {
    city: "San Francisco",
    region: "North America",
    left: "17%",
    top: "39%",
  },
  {
    city: "New York",
    region: "North America",
    left: "28%",
    top: "34%",
  },
  {
    city: "São Paulo",
    region: "South America",
    left: "35%",
    top: "69%",
  },
  {
    city: "London",
    region: "Europe",
    left: "48%",
    top: "30%",
  },
  {
    city: "Frankfurt",
    region: "Europe",
    left: "53%",
    top: "34%",
  },
  {
    city: "Dubai",
    region: "Middle East",
    left: "61%",
    top: "47%",
  },
  {
    city: "Mumbai",
    region: "India",
    left: "68%",
    top: "51%",
  },
  {
    city: "Singapore",
    region: "Asia Pacific",
    left: "76%",
    top: "62%",
  },
  {
    city: "Tokyo",
    region: "Asia Pacific",
    left: "86%",
    top: "39%",
  },
];

const capabilities = [
  {
    icon: Bot,
    code: "IR / 01",
    title: "Industrial Robot Systems",
    text: "Design robotic systems around payload, reach, precision, cycle requirements, tooling and the physical realities of production.",
  },
  {
    icon: BrainCircuit,
    code: "IR / 02",
    title: "AI + Machine Vision",
    text: "Combine computer vision and AI with robotics where machines need to inspect, identify, locate or interpret changing physical environments.",
  },
  {
    icon: Workflow,
    code: "IR / 03",
    title: "Production Automation",
    text: "Connect robots with machines, conveyors, sensors, PLCs and production workflows to create coordinated automation cells.",
  },
  {
    icon: ShieldCheck,
    code: "IR / 04",
    title: "Safety Architecture",
    text: "Design controlled operating states, workspace boundaries and system behavior around real human-machine interaction.",
  },
];

const applications = [
  {
    icon: Boxes,
    number: "01",
    title: "Material Handling",
    text: "Automated movement of components, products and materials between repeatable production stages.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Machine Tending",
    text: "Robotic loading and unloading around suitable industrial machines and structured manufacturing operations.",
  },
  {
    icon: ScanLine,
    number: "03",
    title: "Vision Inspection",
    text: "Camera-assisted robotic inspection for repeatable quality and visual verification workflows.",
  },
  {
    icon: Target,
    number: "04",
    title: "Precision Assembly",
    text: "Robotic assistance for controlled positioning, handling and repeatable assembly operations.",
  },
  {
    icon: Factory,
    number: "05",
    title: "Smart Production",
    text: "Connected robotics integrated with manufacturing data, operational systems and production intelligence.",
  },
  {
    icon: Radar,
    number: "06",
    title: "Adaptive Robotics",
    text: "Sensor and AI-assisted robotic behavior for selected environments where fixed automation alone is insufficient.",
  },
];

const architecture = [
  {
    number: "01",
    name: "Physical Layer",
    sub: "ROBOT / TOOLING / CELL",
    icon: Bot,
  },
  {
    number: "02",
    name: "Control Layer",
    sub: "PLC / MOTION / SAFETY",
    icon: Cpu,
  },
  {
    number: "03",
    name: "Perception Layer",
    sub: "CAMERA / SENSOR / VISION",
    icon: Radar,
  },
  {
    number: "04",
    name: "Intelligence Layer",
    sub: "AI / ANALYSIS / DECISION",
    icon: BrainCircuit,
  },
  {
    number: "05",
    name: "Operations Layer",
    sub: "DATA / MONITORING / FACTORY",
    icon: Activity,
  },
];

const deployment = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the physical process, production target and operating constraints.",
  },
  {
    number: "02",
    title: "Engineer",
    text: "Define robot configuration, tooling, sensing, controls and system architecture.",
  },
  {
    number: "03",
    title: "Simulate",
    text: "Explore motion, reach, collisions and workflow assumptions in a virtual environment.",
  },
  {
    number: "04",
    title: "Integrate",
    text: "Connect robotic equipment with machines, software, safety and production systems.",
  },
  {
    number: "05",
    title: "Operate",
    text: "Commission, observe and continuously improve the robotic production environment.",
  },
];

/* ============================================================
   INDUSTRIAL ROBOT MODEL
============================================================ */

function IndustrialRobotModel() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[560px] md:h-[580px]">
      {/* glow */}

      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.12] blur-[90px]" />

      {/* technical circles */}

      <div className="robot-orbit absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20" />

      <div className="robot-orbit-reverse absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a855f7]/20" />

      <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

      {/* coordinate lines */}

      <div className="absolute left-1/2 top-[9%] h-[82%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent" />

      <div className="absolute left-[10%] top-1/2 h-px w-[80%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

      {/* ======================================================
          ROBOT ARM
      ====================================================== */}

      <div className="robot-machine absolute bottom-[42px] left-1/2 h-[410px] w-[390px] -translate-x-1/2">
        {/* base floor */}

        <div className="absolute bottom-0 left-1/2 h-[16px] w-[190px] -translate-x-1/2 rounded-[50%] bg-[#8b5cf6]/15 blur-md" />

        {/* base */}

        <div className="absolute bottom-[15px] left-[108px] h-[45px] w-[140px] rounded-t-[18px] border border-[#9d7cff]/45 bg-gradient-to-b from-[#21153b] to-[#08070c] shadow-[0_0_35px_rgba(124,58,237,0.18)]">
          <div className="absolute left-1/2 top-[9px] h-[7px] w-[78px] -translate-x-1/2 rounded-full bg-[#a78bfa]/20" />
        </div>

        {/* rotating platform */}

        <div className="robot-base absolute bottom-[54px] left-[135px] h-[72px] w-[86px] rounded-[18px_18px_10px_10px] border border-[#a78bfa]/45 bg-gradient-to-br from-[#30204f] via-[#151020] to-[#070709] shadow-[0_0_30px_rgba(139,92,246,0.18)]">
          <div className="absolute left-1/2 top-1/2 h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c4b5fd]/40 bg-[#8b5cf6]/10">
            <div className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4b5fd]/70 shadow-[0_0_12px_#8b5cf6]" />
          </div>
        </div>

        {/* lower arm */}

        <div className="robot-lower-arm absolute bottom-[109px] left-[163px] h-[150px] w-[55px] origin-bottom -rotate-[26deg]">
          <div className="absolute inset-0 rounded-[25px_25px_14px_14px] border border-[#a78bfa]/45 bg-gradient-to-r from-[#120d1d] via-[#39235f] to-[#100b18] shadow-[0_0_35px_rgba(124,58,237,0.12)]" />

          <div className="absolute left-1/2 top-[15px] h-[100px] w-px -translate-x-1/2 bg-gradient-to-b from-[#c4b5fd]/45 to-transparent" />

          <div className="absolute left-1/2 top-0 h-[58px] w-[58px] -translate-x-1/2 -translate-y-[35%] rounded-full border border-[#c4b5fd]/50 bg-[#130e1d] shadow-[0_0_25px_rgba(139,92,246,0.22)]">
            <div className="absolute left-1/2 top-1/2 h-[31px] w-[31px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/50 bg-[#8b5cf6]/10" />

            <div className="joint-light absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b4fe]" />
          </div>
        </div>

        {/* upper arm */}

        <div className="robot-upper-arm absolute bottom-[246px] left-[174px] h-[52px] w-[155px] origin-left -rotate-[7deg]">
          <div className="absolute inset-0 rounded-[24px_12px_12px_24px] border border-[#a78bfa]/45 bg-gradient-to-b from-[#3b2560] via-[#1b122b] to-[#0c0911] shadow-[0_0_35px_rgba(139,92,246,0.12)]" />

          <div className="absolute left-[22px] top-1/2 h-px w-[105px] -translate-y-1/2 bg-gradient-to-r from-[#c4b5fd]/40 to-transparent" />

          <div className="absolute right-[-22px] top-1/2 h-[54px] w-[54px] -translate-y-1/2 rounded-full border border-[#c4b5fd]/50 bg-[#100b17]">
            <div className="absolute left-1/2 top-1/2 h-[27px] w-[27px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/50" />

            <div className="joint-light joint-delay absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b4fe]" />
          </div>
        </div>

        {/* wrist */}

        <div className="robot-wrist absolute bottom-[242px] left-[323px] h-[45px] w-[70px] origin-left rotate-[38deg] rounded-[8px] border border-[#a78bfa]/45 bg-gradient-to-r from-[#2a1b43] to-[#0c0911]">
          <div className="absolute right-[-15px] top-1/2 h-[32px] w-[32px] -translate-y-1/2 rounded-full border border-[#a78bfa]/45 bg-[#100b17]" />
        </div>

        {/* gripper */}

        <div className="robot-gripper absolute bottom-[199px] left-[378px] h-[82px] w-[50px] rotate-[38deg]">
          <div className="absolute left-[18px] top-0 h-[36px] w-[16px] rounded-sm border border-[#c4b5fd]/50 bg-[#15101d]" />

          <div className="absolute left-[3px] top-[28px] h-[48px] w-[8px] rotate-[18deg] rounded-sm border border-[#c4b5fd]/50 bg-[#17111f]" />

          <div className="absolute right-[3px] top-[28px] h-[48px] w-[8px] -rotate-[18deg] rounded-sm border border-[#c4b5fd]/50 bg-[#17111f]" />
        </div>

        {/* cable */}

        <div className="absolute bottom-[139px] left-[188px] h-[125px] w-[145px] rounded-tr-[80px] border-r border-t border-[#a78bfa]/20" />
      </div>

      {/* scanner */}

      <div className="robot-scanner absolute left-[8%] top-[14%] h-px w-[84%] bg-gradient-to-r from-transparent via-[#c084fc]/70 to-transparent shadow-[0_0_16px_#8b5cf6]" />

      {/* labels */}

      <div className="absolute left-[2%] top-[27%] hidden items-center gap-3 md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/40">
          6-AXIS MOTION
        </span>
      </div>

      <div className="absolute right-[1%] top-[36%] hidden items-center gap-3 md:flex">
        <span className="font-mono text-[7px] tracking-[0.18em] text-white/40">
          AI VISION
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
      </div>

      <div className="absolute bottom-[18%] left-[3%] hidden items-center gap-3 md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/40">
          MOTION CONTROL
        </span>
      </div>

      {/* status */}

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-5 py-3 backdrop-blur-md">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
          INDUSTRIAL ROBOT / ONLINE
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   GLOBAL MAP
============================================================ */

function GlobalRoboticsMap() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#07050b] md:min-h-[640px]">
      {/* background glow */}

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.12] blur-[120px]" />

      {/* map */}

      <div className="world-map absolute inset-[7%] opacity-70">
        {/* north america */}

        <div className="continent continent-na" />

        {/* south america */}

        <div className="continent continent-sa" />

        {/* europe */}

        <div className="continent continent-eu" />

        {/* africa */}

        <div className="continent continent-af" />

        {/* asia */}

        <div className="continent continent-as" />

        {/* australia */}

        <div className="continent continent-au" />
      </div>

      {/* connecting routes */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="routeGradient"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#7c3aed"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#a78bfa"
              stopOpacity="0.8"
            />

            <stop
              offset="100%"
              stopColor="#d946ef"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M170 235 Q330 100 480 180"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path"
        />

        <path
          d="M280 205 Q420 310 610 280"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path route-delay"
        />

        <path
          d="M480 180 Q680 100 860 230"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path route-delay-two"
        />

        <path
          d="M610 280 Q730 190 860 230"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path"
        />

        <path
          d="M350 415 Q520 320 680 305"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path route-delay"
        />

        <path
          d="M680 305 Q760 400 810 370"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          className="route-path route-delay-two"
        />
      </svg>

      {/* nodes */}

      {globalNodes.map((node, index) => (
        <div
          key={node.city}
          className="group absolute z-20"
          style={{
            left: node.left,
            top: node.top,
          }}
        >
          <div className="relative">
            <span
              className="map-pulse absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/40"
              style={{
                animationDelay: `${index * 0.25}s`,
              }}
            />

            <span className="relative block h-2.5 w-2.5 rounded-full border border-[#ddd6fe] bg-[#8b5cf6] shadow-[0_0_14px_#8b5cf6]" />

            <div className="pointer-events-none absolute left-1/2 top-5 w-max -translate-x-1/2 rounded-lg border border-white/10 bg-black/80 px-3 py-2 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
              <span className="block text-[10px] font-medium text-white">
                {node.city}
              </span>

              <span className="mt-1 block font-mono text-[6px] tracking-[0.12em] text-white/35">
                {node.region}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* top status */}

      <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-black/40 px-4 py-2 backdrop-blur-md">
        <Globe2
          size={13}
          className="text-[#a78bfa]"
        />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
          GLOBAL ROBOTICS NETWORK
        </span>
      </div>

      <div className="absolute right-7 top-7 hidden items-center gap-3 md:flex">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

        <span className="font-mono text-[7px] tracking-[0.16em] text-white/35">
          WORLDWIDE / CONNECTED
        </span>
      </div>

      {/* bottom */}

      <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5">
        <div>
          <span className="block font-mono text-[6px] tracking-[0.16em] text-white/20">
            REGION
          </span>

          <span className="mt-2 block text-[11px] text-white/55">
            Global
          </span>
        </div>

        <div className="text-center">
          <span className="block font-mono text-[6px] tracking-[0.16em] text-white/20">
            NETWORK
          </span>

          <span className="mt-2 block text-[11px] text-white/55">
            Connected
          </span>
        </div>

        <div className="text-right">
          <span className="block font-mono text-[6px] tracking-[0.16em] text-white/20">
            PLATFORM
          </span>

          <span className="mt-2 block text-[11px] text-white/55">
            HYI.AI
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030205] px-5 pb-24 pt-36 md:px-10 md:pb-36 md:pt-44">
      {/* background */}

      <div className="pointer-events-none absolute left-[55%] top-[18%] h-[650px] w-[650px] rounded-full bg-[#6d28d9]/[0.12] blur-[150px]" />

      <div className="pointer-events-none absolute -left-[10%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#a21caf]/[0.06] blur-[140px]" />

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* meta */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / INDUSTRIAL ROBOTICS
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            ROBOTIC DESIGN & DEVELOPMENT
          </span>
        </div>

        {/* hero */}

        <div className="grid min-h-[760px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          {/* left */}

          <div className="hero-content relative z-10 pt-20 lg:pt-0">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] px-4 py-2">
              <Sparkles
                size={12}
                className="text-[#a78bfa]"
              />

              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]/70">
                PHYSICAL AI / INDUSTRY 4.0
              </span>
            </div>

            <h1 className="mt-9 max-w-[800px] text-[clamp(4.2rem,7.5vw,8.3rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Industrial
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                Robotics.
              </span>
            </h1>

            <p className="mt-10 max-w-[650px] text-[14px] leading-8 text-white/50 md:text-[16px] md:leading-9">
              Engineer intelligent robotic systems that connect
              physical automation with AI, machine vision, controls,
              safety and connected factory operations.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#global"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium text-white shadow-[0_0_35px_rgba(124,58,237,0.25)] transition hover:scale-[1.03]"
              >
                Explore Industrial Robotics

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#capabilities"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/[0.05]"
              >
                Our Capabilities
              </a>
            </div>

            {/* mini stats */}

            <div className="mt-16 grid max-w-[680px] grid-cols-3 border-y border-white/[0.07] py-6">
              <div>
                <span className="font-mono text-[6px] tracking-[0.17em] text-white/20">
                  SYSTEM
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Robotics
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.17em] text-white/20">
                  INTELLIGENCE
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  AI + Vision
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.17em] text-white/20">
                  SCALE
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* right robot */}

          <div className="relative">
            <IndustrialRobotModel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE
============================================================ */

function Marquee() {
  const items = [
    "INDUSTRIAL ROBOTICS",
    "PHYSICAL AI",
    "MACHINE VISION",
    "SMART FACTORY",
    "AUTOMATION",
    "MOTION CONTROL",
    "ROBOT SAFETY",
    "CONNECTED PRODUCTION",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#07050a] py-6">
      <div className="global-marquee flex w-max items-center whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/35 md:px-14">
              {item}
            </span>

            <CircleDot
              size={7}
              className="text-[#8b5cf6]/60"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   GLOBAL SECTION
============================================================ */

function GlobalSection() {
  return (
    <section
      id="global"
      className="relative overflow-hidden bg-[#030205] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
            <Globe2
              size={12}
              className="text-[#a78bfa]"
            />

            <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
              GLOBAL INDUSTRIAL INTELLIGENCE
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
            Robotics without
            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              borders.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-8 text-white/45">
            Build a connected robotics strategy across factories,
            engineering teams and production environments while
            maintaining a common digital architecture for automation,
            intelligence and operations.
          </p>
        </div>

        <div className="mt-16">
          <GlobalRoboticsMap />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITIES
============================================================ */

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          {/* left */}

          <div>
            <div className="lg:sticky lg:top-28">
              <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
                01 / CAPABILITIES
              </span>

              <h2 className="mt-7 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
                Build the
                <span className="block text-white/20">
                  complete
                </span>
                robotic system.
              </h2>

              <p className="mt-8 max-w-[440px] text-[13px] leading-8 text-white/45">
                Industrial robotics works when mechanical systems,
                controls, perception, intelligence and operations are
                designed as one coordinated architecture.
              </p>
            </div>
          </div>

          {/* cards */}

          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.code}
                  className="purple-card group relative min-h-[370px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-gradient-to-br from-[#0b0812] to-[#050307] p-8"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7c3aed]/10 blur-[70px] transition duration-700 group-hover:bg-[#7c3aed]/20" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                        <Icon
                          size={19}
                          strokeWidth={1.2}
                          className="text-[#b9a4ff]"
                        />
                      </div>

                      <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                        {item.code}
                      </span>
                    </div>

                    <div className="mt-24">
                      <h3 className="text-3xl font-medium tracking-[-0.05em]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-[12px] leading-7 text-white/42">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APPLICATIONS
============================================================ */

function Applications() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#030205] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-15%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#6d28d9]/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              02 / INDUSTRIAL APPLICATIONS
            </span>

            <h2 className="mt-7 max-w-[850px] text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
              Automation built
              <span className="block text-white/20">
                around production.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/42">
            Select robotics according to the physical task,
            environment, integration requirements and operating model.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="application-card group min-h-[320px] border border-white/[0.07] p-8"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={19}
                    strokeWidth={1.1}
                    className="text-[#a78bfa]"
                  />

                  <span className="font-mono text-[6px] text-white/20">
                    {item.number}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/40">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ARCHITECTURE
============================================================ */

function Architecture() {
  return (
    <section className="bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          {/* visual */}

          <div className="relative min-h-[650px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#08050d]">
            <div className="hero-grid absolute inset-0 opacity-60" />

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[100px]" />

            {/* center brain */}

            <div className="absolute left-1/2 top-1/2 flex h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#8b5cf6]/[0.08] shadow-[0_0_60px_rgba(124,58,237,0.2)]">
              <BrainCircuit
                size={42}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <div className="architecture-ring absolute -inset-10 rounded-full border border-dashed border-[#8b5cf6]/20" />

              <div className="architecture-ring-reverse absolute -inset-24 rounded-full border border-[#8b5cf6]/10" />
            </div>

            {/* satellites */}

            {[
              {
                icon: Bot,
                label: "ROBOT",
                left: "18%",
                top: "22%",
              },
              {
                icon: EyeIcon,
                label: "VISION",
                left: "73%",
                top: "22%",
              },
              {
                icon: Cpu,
                label: "CONTROL",
                left: "15%",
                top: "70%",
              },
              {
                icon: Network,
                label: "NETWORK",
                left: "75%",
                top: "70%",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="absolute"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black/70 shadow-[0_0_30px_rgba(124,58,237,0.12)]">
                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[#a78bfa]"
                    />
                  </div>

                  <span className="absolute left-1/2 top-[68px] -translate-x-1/2 font-mono text-[6px] tracking-[0.15em] text-white/25">
                    {item.label}
                  </span>
                </div>
              );
            })}

            {/* connections */}

            <div className="absolute left-[23%] top-[28%] h-px w-[31%] origin-left rotate-[32deg] bg-gradient-to-r from-[#8b5cf6]/10 to-[#a78bfa]/50" />

            <div className="absolute right-[23%] top-[28%] h-px w-[31%] origin-right -rotate-[32deg] bg-gradient-to-l from-[#8b5cf6]/10 to-[#a78bfa]/50" />

            <div className="absolute bottom-[26%] left-[21%] h-px w-[34%] origin-left -rotate-[31deg] bg-gradient-to-r from-[#8b5cf6]/10 to-[#a78bfa]/50" />

            <div className="absolute bottom-[26%] right-[21%] h-px w-[34%] origin-right rotate-[31deg] bg-gradient-to-l from-[#8b5cf6]/10 to-[#a78bfa]/50" />

            <div className="absolute left-7 top-7">
              <span className="font-mono text-[7px] tracking-[0.18em] text-white/30">
                ROBOTICS INTELLIGENCE ARCHITECTURE
              </span>
            </div>
          </div>

          {/* layers */}

          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              03 / SYSTEM ARCHITECTURE
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
              From movement
              <span className="block text-white/20">
                to intelligence.
              </span>
            </h2>

            <p className="mt-8 max-w-[600px] text-[13px] leading-8 text-white/42">
              Industrial robotics is a layered system. Each layer
              contributes a different capability while remaining
              connected to the physical production environment.
            </p>

            <div className="mt-12 border-t border-white/[0.07]">
              {architecture.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="architecture-row group grid grid-cols-[45px_45px_1fr_auto] items-center gap-4 border-b border-white/[0.07] py-6"
                  >
                    <span className="font-mono text-[6px] text-white/15">
                      {item.number}
                    </span>

                    <Icon
                      size={15}
                      strokeWidth={1}
                      className="text-[#a78bfa]/70"
                    />

                    <span className="text-[15px] font-medium text-white/75">
                      {item.name}
                    </span>

                    <span className="hidden font-mono text-[6px] tracking-[0.14em] text-white/20 sm:block">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* helper because Eye is also easy to confuse visually */

function EyeIcon({
  size = 18,
  strokeWidth = 1,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle
        cx="12"
        cy="12"
        r="3"
      />
    </svg>
  );
}

/* ============================================================
   DEPLOYMENT
============================================================ */

function Deployment() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#030205] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
            04 / DEPLOYMENT MODEL
          </span>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
            Engineer.
            <span className="text-white/20"> Simulate.</span>
            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Deploy.
            </span>
          </h2>
        </div>

        <div className="relative mt-20 grid gap-4 lg:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-[31px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent lg:block" />

          {deployment.map((item) => (
            <article
              key={item.number}
              className="relative z-10 rounded-[20px] border border-[#8b5cf6]/15 bg-[#08060d] p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.07] shadow-[0_0_25px_rgba(124,58,237,0.12)]">
                <span className="font-mono text-[7px] text-[#c4b5fd]/70">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-14 text-2xl font-medium tracking-[-0.045em]">
                {item.title}
              </h3>

              <p className="mt-5 text-[11px] leading-7 text-white/38">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL SECTION
============================================================ */

function FinalSection() {
  return (
    <section className="relative overflow-hidden bg-[#030205] px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[180px]" />

      <div className="final-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.25fr_1.75fr]">
          <div className="hidden lg:block">
            <div className="flex flex-col gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                <Bot
                  size={19}
                  strokeWidth={1}
                  className="text-[#a78bfa]"
                />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04]">
                <BrainCircuit
                  size={19}
                  strokeWidth={1}
                  className="text-[#a78bfa]/60"
                />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/10 bg-[#8b5cf6]/[0.03]">
                <Globe2
                  size={19}
                  strokeWidth={1}
                  className="text-[#a78bfa]/40"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Zap
                size={11}
                className="text-[#c084fc]"
              />

              <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                HYI.AI INDUSTRIAL ROBOTICS
              </span>
            </div>

            <h2 className="mt-10 max-w-[1150px] text-[clamp(4rem,8vw,8.7rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
              Intelligence
              <span className="block text-white/20">
                that can move
              </span>
              the physical
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                world.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-[750px] text-[14px] leading-8 text-white/45">
                Connect robotics, automation, machine vision and AI
                into industrial systems designed around real
                production requirements and scalable digital
                operations.
              </p>

              <a
                href="#capabilities"
                className="group flex w-fit items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_35px_rgba(124,58,237,0.22)]"
              >
                Explore Robotics

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function IndustrialRoboticsPage() {
  return (
    <main className="relative overflow-hidden bg-[#030205] text-white">
      {/* ======================================================
          CSS ANIMATIONS
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }

            /* ================================================
               HERO GRID
            ================================================ */

            .hero-grid {
              background-image:
                linear-gradient(
                  rgba(139,92,246,.025) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139,92,246,.025) 1px,
                  transparent 1px
                );

              background-size:
                48px 48px;

              mask-image:
                linear-gradient(
                  to bottom,
                  black,
                  transparent 90%
                );

              -webkit-mask-image:
                linear-gradient(
                  to bottom,
                  black,
                  transparent 90%
                );
            }

            /* ================================================
               HERO CONTENT
            ================================================ */

            @keyframes heroEnter {
              0% {
                opacity: 0;
                transform: translateY(35px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .hero-content {
              animation:
                heroEnter
                .9s
                cubic-bezier(.16,1,.3,1)
                both;
            }

            /* ================================================
               ROBOT MACHINE
            ================================================ */

            @keyframes robotMachine {
              0%,
              100% {
                transform:
                  translateX(-50%)
                  translateY(0px);
              }

              50% {
                transform:
                  translateX(-50%)
                  translateY(-8px);
              }
            }

            .robot-machine {
              animation:
                robotMachine
                5s
                ease-in-out
                infinite;
            }

            @keyframes lowerArm {
              0%,
              100% {
                transform:
                  rotate(-26deg);
              }

              50% {
                transform:
                  rotate(-22deg);
              }
            }

            .robot-lower-arm {
              animation:
                lowerArm
                4.5s
                ease-in-out
                infinite;
            }

            @keyframes upperArm {
              0%,
              100% {
                transform:
                  rotate(-7deg);
              }

              50% {
                transform:
                  rotate(-2deg);
              }
            }

            .robot-upper-arm {
              animation:
                upperArm
                4.5s
                ease-in-out
                infinite;
            }

            @keyframes wristMove {
              0%,
              100% {
                transform:
                  rotate(38deg);
              }

              50% {
                transform:
                  rotate(31deg);
              }
            }

            .robot-wrist,
            .robot-gripper {
              animation:
                wristMove
                4.5s
                ease-in-out
                infinite;
            }

            /* ================================================
               ROBOT ORBITS
            ================================================ */

            @keyframes orbitRotate {
              from {
                transform:
                  translate(-50%, -50%)
                  rotate(0deg);
              }

              to {
                transform:
                  translate(-50%, -50%)
                  rotate(360deg);
              }
            }

            .robot-orbit {
              animation:
                orbitRotate
                24s
                linear
                infinite;
            }

            .robot-orbit-reverse {
              animation:
                orbitRotate
                18s
                linear
                infinite
                reverse;
            }

            /* ================================================
               ROBOT SCANNER
            ================================================ */

            @keyframes robotScanner {
              0% {
                top: 14%;
                opacity: 0;
              }

              10% {
                opacity: 1;
              }

              90% {
                opacity: .6;
              }

              100% {
                top: 86%;
                opacity: 0;
              }
            }

            .robot-scanner {
              animation:
                robotScanner
                4.5s
                ease-in-out
                infinite;
            }

            /* ================================================
               JOINT LIGHT
            ================================================ */

            @keyframes jointLight {
              0%,
              100% {
                opacity: .35;
                box-shadow:
                  0 0 5px #8b5cf6;
              }

              50% {
                opacity: 1;
                box-shadow:
                  0 0 18px #c084fc;
              }
            }

            .joint-light {
              animation:
                jointLight
                1.8s
                ease-in-out
                infinite;
            }

            .joint-delay {
              animation-delay:
                .7s;
            }

            /* ================================================
               STATUS
            ================================================ */

            @keyframes statusDot {
              0%,
              100% {
                opacity: .35;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.15);
              }
            }

            .status-dot {
              animation:
                statusDot
                1.8s
                ease-in-out
                infinite;
            }

            /* ================================================
               MARQUEE
            ================================================ */

            @keyframes globalMarquee {
              from {
                transform:
                  translateX(0%);
              }

              to {
                transform:
                  translateX(-50%);
              }
            }

            .global-marquee {
              animation:
                globalMarquee
                30s
                linear
                infinite;
            }

            /* ================================================
               WORLD MAP
            ================================================ */

            .world-map {
              filter:
                drop-shadow(
                  0 0 25px
                  rgba(124,58,237,.16)
                );
            }

            .continent {
              position:
                absolute;

              background-image:
                radial-gradient(
                  circle,
                  rgba(139,92,246,.72)
                  1.4px,
                  transparent 1.8px
                );

              background-size:
                7px 7px;
            }

            .continent-na {
              left:
                5%;

              top:
                16%;

              width:
                30%;

              height:
                34%;

              clip-path:
                polygon(
                  8% 14%,
                  26% 2%,
                  47% 8%,
                  63% 2%,
                  83% 15%,
                  97% 34%,
                  84% 48%,
                  69% 51%,
                  61% 70%,
                  48% 82%,
                  33% 65%,
                  22% 48%,
                  4% 41%
                );
            }

            .continent-sa {
              left:
                27%;

              top:
                47%;

              width:
                15%;

              height:
                40%;

              clip-path:
                polygon(
                  9% 2%,
                  72% 9%,
                  92% 27%,
                  76% 49%,
                  65% 67%,
                  42% 98%,
                  28% 70%,
                  20% 48%,
                  3% 23%
                );
            }

            .continent-eu {
              left:
                44%;

              top:
                22%;

              width:
                17%;

              height:
                20%;

              clip-path:
                polygon(
                  3% 38%,
                  18% 14%,
                  39% 20%,
                  55% 2%,
                  70% 17%,
                  96% 26%,
                  80% 48%,
                  58% 61%,
                  31% 54%,
                  12% 73%
                );
            }

            .continent-af {
              left:
                46%;

              top:
                38%;

              width:
                19%;

              height:
                39%;

              clip-path:
                polygon(
                  8% 6%,
                  53% 1%,
                  90% 18%,
                  77% 48%,
                  63% 78%,
                  40% 98%,
                  25% 72%,
                  13% 47%,
                  2% 25%
                );
            }

            .continent-as {
              left:
                57%;

              top:
                17%;

              width:
                38%;

              height:
                43%;

              clip-path:
                polygon(
                  1% 31%,
                  14% 13%,
                  33% 16%,
                  45% 2%,
                  64% 9%,
                  78% 23%,
                  98% 31%,
                  92% 50%,
                  75% 58%,
                  69% 81%,
                  53% 67%,
                  41% 72%,
                  28% 54%,
                  11% 58%
                );
            }

            .continent-au {
              right:
                3%;

              bottom:
                10%;

              width:
                17%;

              height:
                21%;

              clip-path:
                polygon(
                  12% 18%,
                  48% 4%,
                  83% 17%,
                  98% 43%,
                  77% 83%,
                  42% 96%,
                  9% 72%,
                  1% 40%
                );
            }

            /* ================================================
               MAP PULSE
            ================================================ */

            @keyframes mapPulse {
              0% {
                transform:
                  translate(-50%, -50%)
                  scale(.3);

                opacity:
                  .8;
              }

              100% {
                transform:
                  translate(-50%, -50%)
                  scale(2.4);

                opacity:
                  0;
              }
            }

            .map-pulse {
              animation:
                mapPulse
                2.8s
                ease-out
                infinite;
            }

            /* ================================================
               ROUTES
            ================================================ */

            @keyframes routePath {
              0% {
                stroke-dashoffset:
                  500;
              }

              100% {
                stroke-dashoffset:
                  0;
              }
            }

            .route-path {
              stroke-dasharray:
                8 9;

              animation:
                routePath
                8s
                linear
                infinite;
            }

            .route-delay {
              animation-delay:
                -2s;
            }

            .route-delay-two {
              animation-delay:
                -4s;
            }

            /* ================================================
               PURPLE CARDS
            ================================================ */

            .purple-card {
              transition:
                transform .5s
                cubic-bezier(.16,1,.3,1),
                border-color .5s ease,
                box-shadow .5s ease;
            }

            .purple-card:hover {
              transform:
                translateY(-7px);

              border-color:
                rgba(139,92,246,.35);

              box-shadow:
                0 24px 80px
                rgba(76,29,149,.12);
            }

            /* ================================================
               APPLICATIONS
            ================================================ */

            .application-card {
              transition:
                background-color .4s ease,
                border-color .4s ease,
                transform .4s
                cubic-bezier(.16,1,.3,1);
            }

            .application-card:hover {
              background:
                rgba(124,58,237,.035);

              border-color:
                rgba(139,92,246,.22);

              transform:
                translateY(-5px);
            }

            /* ================================================
               ARCHITECTURE
            ================================================ */

            @keyframes architectureRing {
              from {
                transform:
                  rotate(0deg);
              }

              to {
                transform:
                  rotate(360deg);
              }
            }

            .architecture-ring {
              animation:
                architectureRing
                18s
                linear
                infinite;
            }

            .architecture-ring-reverse {
              animation:
                architectureRing
                25s
                linear
                infinite
                reverse;
            }

            .architecture-row {
              transition:
                padding-left .35s
                cubic-bezier(.16,1,.3,1),
                background-color .35s ease;
            }

            .architecture-row:hover {
              padding-left:
                10px;

              background:
                rgba(124,58,237,.025);
            }

            /* ================================================
               FINAL GRID
            ================================================ */

            .final-grid {
              background-image:
                linear-gradient(
                  rgba(139,92,246,.02) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139,92,246,.02) 1px,
                  transparent 1px
                );

              background-size:
                55px 55px;

              mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 75%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 75%
                );
            }

            /* ================================================
               REDUCED MOTION
            ================================================ */

            @media (
              prefers-reduced-motion:
              reduce
            ) {
              .hero-content,
              .robot-machine,
              .robot-lower-arm,
              .robot-upper-arm,
              .robot-wrist,
              .robot-gripper,
              .robot-orbit,
              .robot-orbit-reverse,
              .robot-scanner,
              .joint-light,
              .status-dot,
              .global-marquee,
              .map-pulse,
              .route-path,
              .architecture-ring,
              .architecture-ring-reverse {
                animation:
                  none
                  !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <Marquee />

      <GlobalSection />

      <Capabilities />

      <Applications />

      <Architecture />

      <Deployment />

      <FinalSection />

      <Footer />
    </main>
  );
}