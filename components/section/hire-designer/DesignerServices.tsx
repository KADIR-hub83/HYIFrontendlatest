"use client";

import type { CSSProperties, ComponentType } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import type { Variants } from "framer-motion";

import {
  ArrowUpRight,
  Component as ComponentIcon,
  Layers3,
  MousePointer2,
  PenTool,
  Smartphone,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

interface CursorProps {
  name: string;
  color: string;
  ink?: string;
  className?: string;
  delay?: number;
}

interface ServiceBlob {
  c: string;
  a: number;
  s: number;
  style: CSSProperties;
}

interface Service {
  title: string;
  text: string;
  tags: string[];
  icon: LucideIcon;
  Visual: ComponentType;
  glow: string;
  blobs: ServiceBlob[];
  className: string;
}

const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const KEYFRAMES = `
@keyframes dsv-float { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(12px,-8px,0); } }
@keyframes dsv-dash { to { stroke-dashoffset: -48; } }
@keyframes dsv-ripple { 0% { transform: scale(.3); opacity: .9; } 100% { transform: scale(2.4); opacity: 0; } }
.dsv-float { animation: dsv-float 7s ease-in-out infinite; }
.dsv-dash { stroke-dasharray: 6 6; animation: dsv-dash 2.6s linear infinite; }
.dsv-ripple { transform-box: fill-box; transform-origin: center; animation: dsv-ripple 2.4s ease-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .dsv-float, .dsv-dash, .dsv-ripple { animation: none; }
}
`;

// A collaborator cursor, like in a live design file
function Cursor({
  name,
  color,
  ink = "#fff",
  className = "",
  delay = 0,
}: CursorProps) {
  return (
    <div
      className={`dsv-float pointer-events-none absolute z-30 flex items-start ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <MousePointer2
        size={18}
        fill={color}
        stroke="#fff"
        strokeWidth={1.6}
        className="-rotate-[8deg] drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]"
      />
      <span
        className="ml-1 mt-4 rounded-full px-2.5 py-1 text-[11px] font-medium shadow-lg"
        style={{ background: color, color: ink }}
      >
        {name}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visuals, one per service                                           */
/* ------------------------------------------------------------------ */

// Sketch -> wireframe -> final, fanning out on hover
function ProductVisual() {
  return (
    <div className="relative h-full">
      {/* 1. sketch */}
      <div className="absolute left-[2%] top-[16%] h-[56%] w-[58%] -rotate-[7deg] rounded-2xl border border-dashed border-white/25 bg-white/[0.04] p-4 backdrop-blur-md transition duration-700 ease-out group-hover:-translate-x-3 group-hover:-rotate-[10deg]">
        <svg viewBox="0 0 100 56" className="w-full" fill="none">
          <rect x="1" y="1" width="98" height="38" rx="4" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" />
          <path d="M1 1L99 39M99 1L1 39" stroke="rgba(255,255,255,0.18)" />
          <path d="M1 47H60M1 53H38" stroke="rgba(255,255,255,0.3)" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. wireframe */}
      <div className="absolute left-[14%] top-[9%] h-[60%] w-[60%] -rotate-[2deg] rounded-2xl border border-white/20 bg-white/[0.06] p-4 backdrop-blur-lg transition duration-700 ease-out group-hover:-translate-y-2">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-white/25" />
          <div className="h-1.5 w-16 rounded-full bg-white/25" />
        </div>
        <div className="mt-3 h-[44%] rounded-lg border border-white/20 bg-white/[0.08]" />
        <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/25" />
        <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/15" />
      </div>

      {/* 3. final */}
      <div className="absolute right-[1%] top-[2%] h-[68%] w-[62%] rotate-[4deg] rounded-2xl border border-white/30 bg-white/[0.12] p-4 shadow-[0_30px_80px_-20px_rgba(124,92,255,0.7)] backdrop-blur-xl transition duration-700 ease-out group-hover:translate-x-3 group-hover:rotate-[6deg]">
        <div className="flex items-center justify-between">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-300 to-pink-300" />
          <div className="flex gap-1.5">
            <i className="h-1.5 w-8 rounded-full bg-white/40" />
            <i className="h-1.5 w-8 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="mt-4 h-[40%] rounded-xl bg-gradient-to-br from-violet-400 via-fuchsia-400 to-pink-300" />
        <div className="mt-4 h-2 w-3/4 rounded-full bg-white/60" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/30" />
        <div className="mt-4 flex h-8 w-28 items-center justify-center rounded-full bg-white text-[11px] font-medium text-[#120d2a]">
          Get started
        </div>
      </div>

      <Cursor name="Maya" color="#FF5C9E" className="bottom-[22%] right-[6%]" />

      {/* process rail */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 text-[11px] text-white/55">
        <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 backdrop-blur-md">Sketch</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-white/10" />
        <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 backdrop-blur-md">Wireframe</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-white/10" />
        <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-white backdrop-blur-md">Final</span>
      </div>
    </div>
  );
}

// A user flow drawn as three screens with a live path between them
function UXVisual() {
const screen = (x: number, strong: boolean) => (
    <g>
      <rect
        x={x}
        y="6"
        width="82"
        height="104"
        rx="14"
        fill={strong ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}
        stroke={strong ? "url(#dsv-ux)" : "rgba(255,255,255,0.22)"}
        strokeWidth={strong ? 1.5 : 1}
      />
      <rect x={x + 12} y="18" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.45)" />
      <rect x={x + 12} y="30" width="58" height="30" rx="8" fill="rgba(255,255,255,0.10)" />
      <rect x={x + 12} y="68" width="46" height="4" rx="2" fill="rgba(255,255,255,0.28)" />
      <rect x={x + 12} y="78" width="34" height="4" rx="2" fill="rgba(255,255,255,0.16)" />
      <rect x={x + 12} y="90" width="58" height="12" rx="6" fill={strong ? "url(#dsv-ux)" : "rgba(255,255,255,0.18)"} />
    </g>
  );

  return (
    <svg viewBox="0 0 520 150" className="h-full w-full" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden>
      <defs>
        <linearGradient id="dsv-ux" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      {screen(10, false)}
      {screen(219, true)}
      {screen(428, false)}

      <path className="dsv-dash" d="M92 64 C 150 64, 160 40, 219 40" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <path className="dsv-dash" d="M301 40 C 360 40, 370 64, 428 64" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="92" cy="64" r="3.5" fill="#fff" />
      <circle cx="428" cy="64" r="3.5" fill="#fff" />

      {/* tap ripple on the primary button */}
      <circle className="dsv-ripple" cx="260" cy="96" r="12" fill="rgba(125,211,252,0.55)" />

      <g fontSize="10" fill="rgba(255,255,255,0.55)" textAnchor="middle">
        <text x="51" y="132">Sign up</text>
        <text x="260" y="132">Explore</text>
        <text x="469" y="132">Checkout</text>
      </g>
    </svg>
  );
}

// A token board: type, colour scale, components
function SystemVisual() {
  const scale = ["#EDE9FE", "#C4B5FD", "#8B5CF6", "#6D28D9", "#3B1D8F"];
  return (
    <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-5">
      <div className="rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
        <div className="text-[46px] font-semibold leading-none tracking-[-0.05em] text-white">Aa</div>
        <div className="mt-1.5 text-[10px] text-white/55">Display 600</div>
      </div>

      <div className="flex items-center gap-2">
        {scale.map((c) => (
          <div
            key={c}
            className="h-16 flex-1 rounded-xl border border-white/20 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1.5"
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="flex flex-col items-start gap-2.5">
        <span className="rounded-full bg-white px-4 py-1.5 text-[11px] font-medium text-[#0e0a22]">Primary</span>
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] text-white backdrop-blur-md">Secondary</span>
        <div className="h-5 w-9 rounded-full bg-violet-300/80 p-0.5">
          <div className="h-4 w-4 translate-x-4 rounded-full bg-white shadow" />
        </div>
      </div>
    </div>
  );
}

// A roadmap, drawn as a timeline of glass bars
function StrategyVisual() {
  const lanes = [
    { label: "Discover", bars: [
      { l: 0, w: 30, t: "User interviews", a: "124,92,255", b: "96,165,250" },
      { l: 34, w: 22, t: "Market map", a: "96,165,250", b: "125,211,252" },
    ]},
    { label: "Validate", bars: [
      { l: 18, w: 30, t: "Prototype tests", a: "167,139,250", b: "244,114,182" },
      { l: 52, w: 20, t: "Pricing", a: "124,92,255", b: "167,139,250" },
    ]},
    { label: "Ship", bars: [
      { l: 40, w: 28, t: "MVP scope", a: "96,165,250", b: "124,92,255" },
      { l: 72, w: 24, t: "Launch", a: "244,114,182", b: "251,191,36" },
    ]},
  ];

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex flex-col justify-center gap-2.5 pl-[72px] sm:pl-20">
        {/* column guides */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-[72px] right-0 top-0 sm:left-20">
          {[25, 50, 75].map((p) => (
            <span key={p} className="absolute inset-y-0 w-px bg-white/[0.07]" style={{ left: `${p}%` }} />
          ))}
          {/* today marker */}
          <span className="absolute inset-y-0 w-px bg-gradient-to-b from-pink-300 via-pink-300/60 to-transparent" style={{ left: "46%" }} />
          <span className="absolute -top-1 -translate-x-1/2 rounded-full bg-pink-400 px-2 py-0.5 text-[10px] font-medium text-white" style={{ left: "46%" }}>
            Today
          </span>
        </div>

        {lanes.map((lane) => (
          <div key={lane.label} className="relative h-9">
            <span className="absolute -left-[72px] top-1/2 -translate-y-1/2 text-[11px] text-white/55 sm:-left-20">
              {lane.label}
            </span>
            {lane.bars.map((bar) => (
              <div
                key={bar.t}
                className="absolute top-0 flex h-9 items-center overflow-hidden whitespace-nowrap rounded-full border border-white/25 px-3.5 text-[11.5px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_30px_-14px_rgba(0,0,0,0.6)] backdrop-blur-md"
                style={{
                  left: `${bar.l}%`,
                  width: `${bar.w}%`,
                  background: `linear-gradient(90deg, rgba(${bar.a},0.75), rgba(${bar.b},0.55))`,
                }}
              >
                <span className="truncate">{bar.t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Cursor name="Dev" color="#22D3EE" ink="#04222a" className="left-[56%] top-[58%]" delay={1.2} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services: Service[] = [  {
    title: "Product Design",
    text: "End-to-end product thinking from discovery and flows to polished interfaces.",
    tags: ["Discovery", "Flows", "Prototyping"],
    icon: PenTool,
    Visual: ProductVisual,
    glow: "124,92,255",
    blobs: [
      { c: "124,92,255", a: 0.6, s: 420, style: { right: "-14%", top: "-12%" } },
      { c: "255,92,170", a: 0.32, s: 380, style: { left: "-16%", bottom: "-14%" } },
    ],
    className: "min-h-[560px] lg:row-span-2 lg:min-h-0",
  },
  {
    title: "UX / UI Design",
    text: "Intuitive interfaces grounded in user behaviour and business objectives.",
    tags: ["Research", "Interfaces"],
    icon: Smartphone,
    Visual: UXVisual,
    glow: "96,165,250",
    blobs: [
      { c: "56,130,255", a: 0.5, s: 340, style: { left: "6%", top: "-34%" } },
      { c: "124,92,255", a: 0.45, s: 340, style: { right: "-12%", bottom: "-38%" } },
    ],
    className: "",
  },
  {
    title: "Design Systems",
    text: "Scalable foundations that keep your product consistent as teams grow.",
    tags: ["Tokens", "Components"],
icon: ComponentIcon,
    Visual: SystemVisual,
    glow: "70,230,190",
    blobs: [
      { c: "70,230,190", a: 0.28, s: 320, style: { right: "-10%", top: "-34%" } },
      { c: "124,92,255", a: 0.55, s: 380, style: { left: "-14%", bottom: "-40%" } },
    ],
    className: "",
  },
  {
    title: "Product Strategy",
    text: "Translate complex ideas into clear product directions and experiences.",
    tags: ["Roadmaps", "Positioning", "Validation"],
    icon: Layers3,
    Visual: StrategyVisual,
    glow: "167,139,250",
    blobs: [
      { c: "124,92,255", a: 0.5, s: 460, style: { left: "-6%", top: "-40%" } },
      { c: "56,130,255", a: 0.38, s: 420, style: { right: "-4%", bottom: "-46%" } },
      { c: "255,92,170", a: 0.22, s: 300, style: { right: "30%", top: "-30%" } },
    ],
    className: "lg:col-span-2",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

function GlassCard({ service }: { service: Service }) {
    const { Visual, icon: Icon } = service;

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(460px circle at ${mx}px ${my}px, rgba(${service.glow},0.20), transparent 65%)`;
  const edge = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(255,255,255,0.9), transparent 70%)`;

  const maskRing =
    "[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor]";

  return (
    <motion.article
      variants={item}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-400);
        my.set(-400);
      }}
      className={`group relative isolate overflow-hidden rounded-[32px] bg-[#0b0919] ${service.className}`}
    >
      {/* colour blobs living inside the glass */}
      {service.blobs.map((b, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full blur-[70px]"
          style={{
            ...b.style,
            width: b.s,
            height: b.s,
            background: `rgba(${b.c},${b.a})`,
          }}
        />
      ))}

      {/* frosted tint + grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 32%, rgba(7,6,15,0.35) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />

      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {/* gradient hairline + hover edge light */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-30 rounded-[32px] p-px ${maskRing}`}
        style={{
          background:
            "linear-gradient(150deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0.2))",
        }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-30 rounded-[32px] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${maskRing}`}
        style={{ background: edge }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-8 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      {/* content */}
      <div className="relative z-20 flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[11px] text-white/70 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white/70 backdrop-blur-md transition duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black"
          >
            <ArrowUpRight size={15} />
          </div>
        </div>

        <div className="relative my-5 min-h-[130px] flex-1">
          <div className="absolute inset-0">
            <Visual />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 backdrop-blur-xl"
              style={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 30px -10px rgba(${service.glow},0.9)`,
              }}
            >
              <Icon size={18} className="text-white" strokeWidth={1.6} />
            </div>
            <h3 className="text-[26px] font-medium leading-none tracking-[-0.04em] text-white">
              {service.title}
            </h3>
          </div>
          <p className="mt-3 max-w-[540px] text-[13.5px] leading-6 text-white/60">
            {service.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function DesignerServices() {
  const reduce = useReducedMotion();
  const handle = "absolute h-2 w-2 border border-violet-500 bg-white";

  return (
    <section className="relative isolate overflow-hidden bg-[#07060f] px-5 py-10 text-white sm:px-8 lg:px-12 ">
      <style>{KEYFRAMES}</style>

      {/* design-canvas backdrop: dot grid + colour */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at 40% 20%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 40% 20%, black 10%, transparent 70%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[150px]" />
        <div className="absolute right-[-120px] top-1/3 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[150px]" />
        <div className="absolute bottom-[-160px] left-1/3 h-[480px] w-[600px] rounded-full bg-fuchsia-600/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-[1450px]">
        <div className="mb-24 grid gap-10 lg:grid-cols-2">
          {/* headline, selected like an object on a canvas */}
          <div>
            <div className="relative block w-fit max-w-full p-5 sm:p-6">
              <span aria-hidden className="pointer-events-none absolute inset-0 border border-violet-400/70" />
              <span aria-hidden className={`${handle} -left-1 -top-1`} />
              <span aria-hidden className={`${handle} -right-1 -top-1`} />
              <span aria-hidden className={`${handle} -bottom-1 -left-1`} />
              <span aria-hidden className={`${handle} -bottom-1 -right-1`} />

              <h2 className="max-w-[720px] hyi-h1  text-[clamp(40px,5.2vw,78px)] font-medium leading-[0.96] tracking-[-0.06em] text-transparent">
                Design talent for every stage of <span className="hyi-blue">your product.</span>
              </h2>

              <span aria-hidden className="absolute left-1/2 top-full mt-2.5 -translate-x-1/2 rounded bg-violet-500 px-2 py-0.5 text-[10px] font-medium text-white">
                Hug × Hug
              </span>
              <Cursor name="Aria" color="#FF5C9E" className="right-6 top-full mt-5 hidden sm:flex" delay={0.6} />
            </div>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[440px] hyi-p">
              Build a design function without months of recruiting. Access
              specialists across product strategy, UX, interface systems and
              visual design.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid auto-rows-[minmax(340px,auto)] gap-4 lg:grid-cols-2"
        >
          {services.map((service) => (
            <GlassCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}