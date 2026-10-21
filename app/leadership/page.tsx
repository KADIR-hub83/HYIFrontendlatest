"use client";

import { useEffect, useRef, useState } from "react";
import type {
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";

/* ⚠️ CHANGE THESE 2 IMPORT PATHS to wherever your Navbar and Footer really live.
 *    (Open app/page.tsx or app/layout.tsx and copy the exact import lines.)
 *    If your layout.tsx ALREADY renders <Navbar /> and <Footer /> for every page,
 *    delete these two imports and the <Navbar /> / <Footer /> tags at the bottom. */
import Navbar from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

/* ============================================================================
 * HYI — LEADERSHIP PAGE
 * ----------------------------------------------------------------------------
 * Location: frontend/app/leadership/page.tsx   (route: /leadership)
 *
 * SECTIONS
 *  1. Hero ............ living "global network" map (pulsing cities + animated
 *                       arcs), word-by-word headline, scroll cue
 *  2. Founder ......... sticky 3D credential card + story that scrolls beside it
 *  3. Executive suite . CEO · CSO · CFO · CTO · CMO as a 3D COVERFLOW of
 *                       credential cards (drag, swipe, click, arrows, auto-play)
 *                       with a live details panel
 *  4. The Council ..... Legal Advisor · Investment Advisor · Sales Director
 *                       with cursor-spotlight cards
 *  5. Values marquee .. a marquee whose speed follows your scroll speed
 *  6. CTA
 *
 * PHOTOS & NAMES
 *  - Photos are free STOCK placeholders (randomuser.me), NOT real people from
 *    your team. Replace with real ones: put images in  frontend/public/leaders/
 *    and set  photo: "/leaders/ceo.jpg".  If a photo fails, initials are shown.
 *  - ALL NAMES / BIOS BELOW ARE SAMPLE TEXT. Replace with your real leadership.
 *
 * Scroll effects: progress bar, parallax, sticky founder, reveals, count of
 * motion respects "reduce motion". No extra libraries needed.
 * ==========================================================================*/

const CTA_PRIMARY = "/hire-developer";
const CTA_SECONDARY = "/talk-to-our-expert";

const VIOLET = "#8b5cf6";
const VIOLET_SOFT = "#a78bfa";

/* ---------------------------------- Data ---------------------------------- */

type Leader = {
  id: string;
  role: string; // full title
  abbr: string; // short label shown on the card
  name: string;
  bio: string;
  focus: string[];
  photo?: string;
  linkedin?: string;
  x?: string;
};

const portrait = (g: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

/* ------------------------- REPLACE WITH REAL PEOPLE ----------------------- */

const FOUNDER: Leader = {
  id: "founder",
  role: "Founder",
  abbr: "FOUNDER",
  name: "Rohit Malhotra",
  bio: "Started HYI with one belief: great talent should never be limited by geography. He sets the long-term vision and keeps the company focused on one mission — connecting businesses with the best people, anywhere.",
  focus: ["Vision", "Culture", "Global expansion"],
  photo: portrait("men", 41),
  linkedin: "#",
  x: "#",
};

const EXECUTIVES: Leader[] = [
  {
    id: "ceo",
    role: "Chief Executive Officer",
    abbr: "CEO",
    name: "Ananya Kapoor",
    bio: "Runs day-to-day operations and turns the vision into a clear plan the whole company can execute.",
    focus: ["Operations", "Partnerships", "Company growth"],
    photo: portrait("women", 65),
    linkedin: "#",
    x: "#",
  },
  {
    id: "cso",
    role: "Chief Strategy Officer",
    abbr: "CSO",
    name: "Vikram Sethi",
    bio: "Shapes where HYI plays and how it wins — market entry, positioning and long-range planning.",
    focus: ["Strategy", "New markets", "Planning"],
    photo: portrait("men", 52),
    linkedin: "#",
  },
  {
    id: "cfo",
    role: "Chief Financial Officer",
    abbr: "CFO",
    name: "Neha Agarwal",
    bio: "Owns financial health, budgeting and reporting so the company can grow responsibly.",
    focus: ["Finance", "Planning", "Compliance"],
    photo: portrait("women", 26),
    linkedin: "#",
  },
  {
    id: "cto",
    role: "Chief Technology Officer",
    abbr: "CTO",
    name: "Arjun Reddy",
    bio: "Leads engineering, product architecture and the AI that powers talent matching and verification.",
    focus: ["Engineering", "AI & data", "Security"],
    photo: portrait("men", 75),
    linkedin: "#",
    x: "#",
  },
  {
    id: "cmo",
    role: "Chief Marketing Officer",
    abbr: "CMO",
    name: "Simran Kaur",
    bio: "Builds the HYI brand and the demand engine that reaches businesses and talent around the world.",
    focus: ["Brand", "Growth", "Community"],
    photo: portrait("women", 12),
    linkedin: "#",
    x: "#",
  },
];

const COUNCIL: Leader[] = [
  {
    id: "legal",
    role: "Legal Advisor",
    abbr: "LEGAL",
    name: "Adv. Kunal Bhatia",
    bio: "Guides contracts, compliance and data-protection so every engagement is secure and transparent.",
    focus: ["Contracts", "Compliance", "Data protection"],
    photo: portrait("men", 22),
    linkedin: "#",
  },
  {
    id: "invest",
    role: "Investment Advisor",
    abbr: "INVEST",
    name: "Sanjay Rao",
    bio: "Advises on fundraising, capital strategy and investor relations as HYI scales globally.",
    focus: ["Fundraising", "Capital strategy", "Investor relations"],
    photo: portrait("men", 33),
    linkedin: "#",
  },
  {
    id: "sales",
    role: "Sales Director",
    abbr: "SALES",
    name: "Priya Nambiar",
    bio: "Leads revenue and enterprise relationships — helping companies hire verified talent faster.",
    focus: ["Enterprise sales", "Key accounts", "Revenue"],
    photo: portrait("women", 44),
    linkedin: "#",
    x: "#",
  },
];

const PRINCIPLES = [
  { t: "Talent without borders", d: "Skills decide opportunity — not postcode." },
  { t: "Trust by verification", d: "Every profile is checked before it is shown." },
  { t: "Speed with integrity", d: "Move fast, stay transparent, keep promises." },
];

const VALUES = ["Vision", "Trust", "Execution", "Global reach", "Integrity", "Innovation"];

/* ------------------------------ Motion helpers ---------------------------- */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const wrapN = (v: number, n: number) => ((((v + n / 2) % n) + n) % n) - n / 2; // -> [-n/2, n/2)
const mod = (v: number, n: number) => ((v % n) + n) % n;

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

type Dir = "up" | "left" | "right" | "scale";
const HIDDEN: Record<Dir, string> = {
  up: "translate-y-10 opacity-0",
  left: "-translate-x-12 opacity-0",
  right: "translate-x-12 opacity-0",
  scale: "scale-95 opacity-0",
};

function Reveal({
  children,
  delay = 0,
  dir = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  dir?: Dir;
  className?: string;
}) {
  const [ref, shown] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN[dir]
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const p = clamp(h.scrollTop / (h.scrollHeight - h.clientHeight || 1), 0, 1);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px]">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-violet-600 via-violet-400 to-cyan-300"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

/** Moves children at a different speed than the page scroll (parallax). */
function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!outer.current || !inner.current) return;
      const r = outer.current.getBoundingClientRect();
      const offset = r.top + r.height / 2 - window.innerHeight / 2;
      inner.current.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <div ref={outer} className={className}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------ Small UI parts ---------------------------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.3em] text-violet-200/80">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-300/60" />
      {children}
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-300/60" />
    </span>
  );
}

const Icon = ({ children, className = "h-4 w-4" }: { children: ReactNode; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);
const ArrowUpRight = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);
const ChevronLeft = () => (
  <Icon className="h-5 w-5">
    <path d="M15 5l-7 7 7 7" />
  </Icon>
);
const ChevronRight = () => (
  <Icon className="h-5 w-5">
    <path d="M9 5l7 7-7 7" />
  </Icon>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4V9Z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H2l8.1-9.3L1.5 2h7l4.9 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
  </svg>
);

function Socials({ l }: { l: Leader }) {
  const items = [
    l.linkedin && { href: l.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
    l.x && { href: l.x, label: "X", icon: <XIcon /> },
  ].filter(Boolean) as { href: string; label: string; icon: ReactNode }[];
  if (!items.length) return null;
  return (
    <div className="flex items-center gap-2">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={`${l.name} on ${s.label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-white"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

/** Photo with graceful fallback (gradient + initials). Fills its parent. */
function Avatar({ l, className = "" }: { l: Leader; className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = l.name
    .replace(/^Adv\.\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  if (!l.photo || failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-900 text-lg font-semibold text-white ${className}`}
      >
        {initials}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={l.photo}
      alt={l.name}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

/* ------------------------------ Credential card --------------------------- */

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const serialOf = (id: string) => {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const hex = (h >>> 0).toString(16).toUpperCase().padStart(8, "0");
  return `${hex.slice(0, 4)} ${hex.slice(4)}`;
};

const Chip = () => (
  <svg width="38" height="29" viewBox="0 0 38 29" aria-hidden>
    <defs>
      <linearGradient id="hyChip" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f3e3b8" />
        <stop offset="0.5" stopColor="#c9a45f" />
        <stop offset="1" stopColor="#8f6c2e" />
      </linearGradient>
    </defs>
    <rect x="0.5" y="0.5" width="37" height="28" rx="6" fill="url(#hyChip)" />
    <g stroke="#6b4f1c" strokeOpacity="0.55" strokeWidth="0.9" fill="none">
      <path d="M0.5 10h11M0.5 19h11M26.5 10h11M26.5 19h11" />
      <path d="M11.5 0.5v28M26.5 0.5v28" />
      <rect x="11.5" y="8" width="15" height="13" rx="3" />
    </g>
  </svg>
);

/** Premium "black metal" credential card with live 3D tilt, glare and foil. 320x200 * scale */
function LeaderCard({ l, scale = 1 }: { l: Leader; scale?: number }) {
  const tilt = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    const el = tilt.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateX(${((0.5 - py) * 12).toFixed(2)}deg) rotateY(${((px - 0.5) * 16).toFixed(2)}deg)`;
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--hx", `${(px * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    if (tilt.current) tilt.current.style.transform = "";
  };

  return (
    <div className="relative" style={{ width: 320 * scale, height: 200 * scale }}>
      <div
        className="group absolute left-0 top-0 h-[200px] w-[320px] origin-top-left select-none rounded-[22px] [perspective:900px]"
        style={{ transform: `scale(${scale})` }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div
          ref={tilt}
          className="relative h-full w-full rounded-[22px] transition-transform duration-200 ease-out will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* surface */}
          <div className="absolute inset-0 isolate overflow-hidden rounded-[22px] bg-[#0b0811] shadow-[0_50px_90px_-35px_rgba(0,0,0,0.95),0_18px_40px_-20px_rgba(124,58,237,0.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c1530_0%,#0e0a17_55%,#08060d_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_-5%,rgba(139,92,246,0.45),transparent_55%)]" />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle at 104% 108%, rgba(255,255,255,0.055) 0 1px, transparent 1px 7px)",
                WebkitMaskImage: "radial-gradient(circle at 100% 100%, #000, transparent 70%)",
                maskImage: "radial-gradient(circle at 100% 100%, #000, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 opacity-[0.16] mix-blend-overlay" style={{ backgroundImage: NOISE }} />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />
            <div
              className="absolute inset-0 opacity-0 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(115deg, transparent 22%, rgba(168,85,247,0.55) 36%, rgba(34,211,238,0.5) 48%, rgba(250,204,21,0.35) 58%, transparent 72%)",
                backgroundSize: "230% 100%",
                backgroundPosition: "var(--hx, 50%) 0",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(260px circle at var(--gx, 50%) var(--gy, 0%), rgba(255,255,255,0.16), transparent 55%)",
              }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.09]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* content */}
          <div
            className="relative z-10 flex h-full flex-col justify-between p-5"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-start justify-end">
              {/* <Chip /> */}
              <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-2.5 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.24em] text-violet-100">
                {l.abbr}
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="relative h-[58px] w-[58px] shrink-0 rounded-full bg-gradient-to-br from-white/45 via-white/10 to-violet-400/50 p-[1.5px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0b0811] p-[2px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Avatar l={l} />
                  </div>
                </div>
              </div>
              <div className="min-w-0">
                <h3
                  className="truncate text-[19px] font-medium leading-tight tracking-tight text-white"
                  style={{ textShadow: "0 1px 0 rgba(255,255,255,0.1), 0 -1px 0 rgba(0,0,0,0.7)" }}
                >
                  {l.name}
                </h3>
                <p className="mt-1 truncate text-[12.5px] tracking-wide text-white/55">{l.role}</p>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-white/35">HYI · Leadership</p>
                <p className="mt-0.5 font-mono text-[12px] tracking-[0.2em] text-white/80">{serialOf(l.id)}</p>
              </div>
              <p className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-white/35">Global</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Hero: network ---------------------------- */

const CITIES: [number, number][] = [
  [150, 190],
  [260, 300],
  [480, 170],
  [560, 270],
  [690, 200],
  [790, 310],
  [865, 235],
  [410, 335],
];
const ARCS: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 6],
  [1, 3],
  [3, 5],
  [2, 3],
  [7, 5],
  [0, 1],
];

function GlobalNet() {
  return (
    <svg
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="hyArc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={VIOLET} stopOpacity="0" />
          <stop offset="0.5" stopColor={VIOLET_SOFT} stopOpacity="0.9" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      {ARCS.map(([a, b], i) => {
        const [x1, y1] = CITIES[a];
        const [x2, y2] = CITIES[b];
        const mx = (x1 + x2) / 2;
        const my = Math.min(y1, y2) - 70 - (i % 3) * 18;
        return (
          <path
            key={i}
            d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
            fill="none"
            stroke="url(#hyArc)"
            strokeWidth="1.3"
            strokeDasharray="4 10"
            className="hy-dash"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        );
      })}
      {CITIES.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3.2" fill="#c4b5fd" />
          <circle
            cx={x}
            cy={y}
            r="3.2"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="1.2"
            className="hy-pulse"
            style={{ animationDelay: `${i * 0.45}s`, transformOrigin: `${x}px ${y}px` }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------- Coverflow -------------------------------- */

const CARD_W = 320;
const CARD_H = 200;
const SPACE = 270; // px between neighbouring cards at the centre
const AUTO_MS = 5200;

function ExecutiveFlow({ leaders }: { leaders: Leader[] }) {
  const n = leaders.length;
  const stage = useRef<HTMLDivElement>(null);
  const slots = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const s = useRef({
    pos: 0,
    target: 0,
    vel: 0,
    hovered: false,
    dragging: false,
    captured: false,
    moved: 0,
    lastX: 0,
    lastT: 0,
    visible: false,
    autoAt: performance.now() + AUTO_MS,
  });

  useEffect(() => {
    const st = s.current;
    const reduce = prefersReducedMotion();
    let raf = 0;
    let last = performance.now();

    const apply = () => {
      for (let i = 0; i < n; i++) {
        const el = slots.current[i];
        if (!el) continue;
        const d = wrapN(i - st.pos, n);
        const ad = Math.abs(d);
        const side = Math.sign(d);
        const x = side * (Math.min(ad, 1) * SPACE + Math.max(0, ad - 1) * 120);
        const z = -Math.min(ad, 1) * 170 - Math.max(0, ad - 1) * 70;
        const rot = -clamp(d, -1, 1) * 46;
        const sc = 1 - Math.min(ad, 2) * 0.05;
        const o = clamp(1 - Math.max(0, ad - 1.3) * 0.6, 0, 1);
        el.style.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
        el.style.opacity = o.toFixed(3);
        el.style.zIndex = String(Math.round(100 - ad * 10));
        el.style.pointerEvents = ad > 2.4 ? "none" : "auto";
        el.style.setProperty("--dim", (Math.min(ad, 1) * 0.55).toFixed(3));
      }
      setActive(mod(Math.round(st.pos), n));
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!st.visible) return;

      if (!st.dragging) {
        if (!reduce && !st.hovered && now > st.autoAt) {
          st.target = Math.round(st.target) + 1;
          st.autoAt = now + AUTO_MS;
        }
        st.pos += (st.target - st.pos) * (1 - Math.exp(-dt * 7));
      }
      apply();
    };

    const io = new IntersectionObserver(([en]) => {
      st.visible = en.isIntersecting;
      if (en.isIntersecting) st.autoAt = performance.now() + AUTO_MS;
    });
    if (stage.current) io.observe(stage.current);

    apply();
    raf = requestAnimationFrame(tick);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [n]);

  const goTo = (target: number) => {
    const st = s.current;
    st.target = target;
    st.autoAt = performance.now() + AUTO_MS * 1.6;
  };
  const goBy = (dir: 1 | -1) => goTo(Math.round(s.current.target) + dir);
  const goToIndex = (i: number) => {
    const st = s.current;
    goTo(Math.round(st.pos + wrapN(i - st.pos, n)));
  };

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goBy(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goBy(-1);
    }
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const st = s.current;
    st.dragging = true;
    st.captured = false;
    st.moved = 0;
    st.lastX = e.clientX;
    st.lastT = performance.now();
    st.vel = 0;
  };
  const onPointerMove = (e: ReactPointerEvent) => {
    const st = s.current;
    if (!st.dragging) return;
    const dx = e.clientX - st.lastX;
    const now = performance.now();
    const dtm = (now - st.lastT) / 1000;
    st.moved += Math.abs(dx);
    st.pos -= dx / SPACE;
    st.target = st.pos;
    if (!st.captured && st.moved > 6) {
      st.captured = true;
      stage.current?.setPointerCapture(e.pointerId);
    }
    if (dtm > 0) st.vel = st.vel * 0.6 + (-dx / SPACE / dtm) * 0.4;
    st.lastX = e.clientX;
    st.lastT = now;
  };
  const endDrag = (e: ReactPointerEvent) => {
    const st = s.current;
    if (!st.dragging) return;
    st.dragging = false;
    if (st.captured) stage.current?.releasePointerCapture?.(e.pointerId);
    st.target = Math.round(st.pos + clamp(st.vel, -6, 6) * 0.3);
    st.autoAt = performance.now() + AUTO_MS * 1.6;
  };
  const onClickCapture = (e: ReactMouseEvent) => {
    const st = s.current;
    if (st.moved > 6) {
      e.stopPropagation();
      e.preventDefault();
      st.moved = 0;
      return;
    }
    const el = (e.target as HTMLElement).closest("[data-slot]") as HTMLElement | null;
    if (!el) return;
    const i = Number(el.dataset.slot);
    if (Math.abs(wrapN(i - st.pos, n)) > 0.4) {
      e.preventDefault();
      goToIndex(i);
    }
  };

  const cur = leaders[active] ?? leaders[0];

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Executive leadership" onKeyDown={onKeyDown}>
      <div
        ref={stage}
        className="relative h-[340px] w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 40%",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
        onPointerEnter={(e) => e.pointerType === "mouse" && (s.current.hovered = true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && (s.current.hovered = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[85%] w-[460px] -translate-x-1/2 bg-gradient-to-b from-violet-400/25 via-violet-500/10 to-transparent blur-2xl"
          style={{ clipPath: "polygon(36% 0, 64% 0, 100% 100%, 0 100%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.45),transparent_70%)] blur-xl"
        />

        {leaders.map((l, i) => (
          <div
            key={l.id}
            data-slot={i}
            ref={(el) => {
              slots.current[i] = el;
            }}
            className="absolute left-1/2 top-[46%]"
            style={{
              width: CARD_W,
              height: CARD_H,
              marginLeft: -CARD_W / 2,
              marginTop: -CARD_H / 2,
              willChange: "transform, opacity",
            }}
          >
            <LeaderCard l={l} />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[22px] bg-[#06030b]"
              style={{ opacity: "var(--dim, 0)" }}
            />
          </div>
        ))}
      </div>

      {/* controls */}
      <div className="mt-3 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous leader"
          onClick={() => goBy(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose leader">
          {leaders.map((l, i) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={i === active}
              aria-label={l.role}
              onClick={() => goToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-violet-400" : "w-1.5 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next leader"
          onClick={() => goBy(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
        >
          <ChevronRight />
        </button>
      </div>

      {/* details panel */}
      <div key={cur.id} className="hy-swap mx-auto mt-10 max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet-300">{cur.role}</p>
        <h3 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">{cur.name}</h3>
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60">{cur.bio}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {cur.focus.map((f) => (
            <span
              key={f}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] text-white/75"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Socials l={cur} />
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Council spotlight card ----------------------- */

function CouncilCard({ l, index }: { l: Leader; index: number }) {
  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      onPointerMove={onMove}
      className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/35 sm:p-8"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.22), transparent 60%)",
        }}
      />

      <div className="relative flex items-start justify-end">
        {/* <span
          className="font-mono text-[44px] font-semibold leading-none text-transparent"
          style={{ WebkitTextStroke: "1px rgba(167,139,250,0.45)" }}
        >
          0{index + 1}
        </span> */}
        <span className="rounded-full border border-violet-300/25 bg-violet-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-violet-100">
          {l.abbr}
        </span>
      </div>

      <div className="relative mt-8 flex items-center gap-4">
        <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105">
          <Avatar l={l} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[21px] font-semibold leading-tight tracking-tight">{l.name}</h3>
          <p className="mt-1 text-[13.5px] text-violet-200/80">{l.role}</p>
        </div>
      </div>

      <p className="relative mt-6 text-[14.5px] leading-relaxed text-white/60">{l.bio}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {l.focus.map((f) => (
          <span key={f} className="rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-white/70 ring-1 ring-white/10">
            {f}
          </span>
        ))}
      </div>

      <div className="relative mt-7">
        <Socials l={l} />
      </div>
    </article>
  );
}

/* --------------------------- Scroll-speed marquee ------------------------- */

function VelocityMarquee() {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0;
    let x = 0;
    let boost = 0;
    let lastY = window.scrollY;
    const loop = () => {
      const y = window.scrollY;
      boost += ((y - lastY) * 0.35 - boost) * 0.12;
      lastY = y;
      x -= 0.7 + boost;
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (x <= -half) x += half;
        if (x > 0) x -= half;
      }
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const row = (k: string) => (
    <div key={k} className="flex shrink-0 items-center">
      {[...VALUES, ...VALUES].map((w, i) => (
        <span
          key={`${k}-${i}`}
          className="flex items-center gap-8 px-8 text-[clamp(2.6rem,7vw,5.5rem)] font-semibold italic leading-none text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(167,139,250,0.5)" }}
        >
          {w}
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden py-10 md:py-14" aria-hidden>
      <div ref={track} className="flex w-max whitespace-nowrap will-change-transform">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function LeadershipPage() {
  const hero = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = hero.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--sp", clamp(-r.top / Math.max(1, r.height), 0, 1).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="overflow-x-clip bg-[#050308] text-white">
      <style>{`
        @keyframes hy-rise { from { transform: translateY(118%); } to { transform: translateY(0); } }
        .hy-mask { display: inline-block; overflow: hidden; vertical-align: bottom; padding: 0 0.08em 0.14em; margin-bottom: -0.14em; }
        .hy-rise { display: inline-block; transform: translateY(118%); animation: hy-rise 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes hy-fade { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .hy-fade { opacity: 0; animation: hy-fade 0.9s ease forwards; }
        .hy-swap { animation: hy-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes hy-shine { from { background-position: 100% 0; } to { background-position: -150% 0; } }
        .hy-shine {
          display: inline-block;
          background: linear-gradient(100deg, #c4b5fd 0%, #8b5cf6 30%, #fff 50%, #8b5cf6 70%, #c4b5fd 100%);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: hy-shine 6s linear infinite;
        }

        @keyframes hy-dash { to { stroke-dashoffset: -56; } }
        .hy-dash { animation: hy-dash 3.2s linear infinite; }
        @keyframes hy-pulse { 0% { transform: scale(1); opacity: 0.9; } 100% { transform: scale(6); opacity: 0; } }
        .hy-pulse { animation: hy-pulse 2.8s ease-out infinite; }

        @keyframes hy-wheel { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(12px); opacity: 0; } }
        .hy-wheel { animation: hy-wheel 1.6s ease-in-out infinite; }
        @keyframes hy-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .hy-float { animation: hy-float 5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hy-rise { animation: none; transform: none; }
          .hy-fade, .hy-swap { animation: none; opacity: 1; transform: none; }
          .hy-shine, .hy-dash, .hy-pulse, .hy-wheel, .hy-float { animation: none; }
        }
      `}</style>

      <ScrollProgress />
      <Navbar />

      <main className="relative">
        {/* ============================== HERO ============================== */}
        <section
          ref={hero}
          className="relative flex min-h-[100svh] items-center justify-center px-6 pb-28 pt-36 md:px-12"
          style={{ ["--sp" as string]: 0 }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <Parallax speed={0.16} className="absolute left-1/2 top-[8%] -translate-x-1/2">
              <div className="h-[28rem] w-[56rem] rounded-full bg-violet-700/25 blur-[140px]" />
            </Parallax>
            <div
              className="absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage: "radial-gradient(rgba(167,139,250,0.9) 1px, transparent 1.4px)",
                backgroundSize: "22px 22px",
                WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, #000 0%, transparent 68%)",
                maskImage: "radial-gradient(ellipse at 50% 45%, #000 0%, transparent 68%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse at 50% 48%, #000 20%, transparent 75%)",
                maskImage: "radial-gradient(ellipse at 50% 48%, #000 20%, transparent 75%)",
              }}
            >
              <GlobalNet />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050308] to-transparent" />
          </div>

          <div
            className="relative z-10 mx-auto max-w-5xl text-center"
            style={{
              transform: "translate3d(0, calc(var(--sp) * 80px), 0)",
              opacity: "calc(1 - var(--sp) * 1.2)",
            }}
          >
            <div className="hy-fade" style={{ animationDelay: "50ms" }}>
              <Eyebrow>Leadership</Eyebrow>
            </div>

            <h1 className="mt-8 text-[clamp(2.8rem,8vw,6.4rem)] font-semibold leading-[1.02] tracking-tight">
              {["The", "people", "behind"].map((w, i) => (
                <span key={w} className="hy-mask mr-[0.22em]">
                  <span className="hy-rise" style={{ animationDelay: `${200 + i * 110}ms` }}>
                    {w}
                  </span>
                </span>
              ))}
              <br />
              {["global", "talent."].map((w, i) => (
                <span key={w} className="hy-mask mr-[0.22em] last:mr-0">
                  <span className="hy-rise" style={{ animationDelay: `${540 + i * 130}ms` }}>
                    <span className="hy-shine">{w}</span>
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="hy-fade mx-auto mt-8 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              style={{ animationDelay: "950ms" }}
            >
              Meet the founder, executives and advisors building the world&apos;s most trusted network
              of verified remote talent.
            </p>

            <div
              className="hy-fade mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "1100ms" }}
            >
              <a
                href="#founder"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 px-7 py-4 text-[14.5px] font-medium text-white shadow-[0_14px_44px_-14px_rgba(139,92,246,0.9)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Meet the leaders
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3.5 text-[13.5px] text-white/75 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {1 + EXECUTIVES.length + COUNCIL.length} leaders · one mission
              </span>
            </div>
          </div>

          {/* <div
            className="hy-fade pointer-events-none absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.3em] text-white/40"
            style={{ animationDelay: "1500ms" }}
          >
            Scroll
            <span className="flex h-9 w-[22px] justify-center rounded-full border border-white/25 pt-2">
              <span className="hy-wheel h-1.5 w-[3px] rounded-full bg-violet-400" />
            </span>
          </div> */}
        </section>

        {/* ============================= FOUNDER ============================= */}
        <section id="founder" className="relative scroll-mt-24 px-6 py-24 md:px-12 md:py-36">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <Parallax speed={-0.1} className="absolute -left-40 top-1/3">
              <div className="h-[26rem] w-[26rem] rounded-full bg-violet-600/20 blur-[130px]" />
            </Parallax>
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* sticky card */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal dir="left">
                <div className="relative mx-auto w-fit max-w-full">
                  <div
                    className="absolute -inset-8 rounded-[44px] opacity-70 blur-3xl"
                    style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.45), transparent)" }}
                  />
                  <div className="relative hidden sm:block">
                    <LeaderCard l={FOUNDER} scale={1.3} />
                  </div>
                  <div className="relative sm:hidden">
                    <LeaderCard l={FOUNDER} />
                  </div>

                  <div className="hy-float absolute -bottom-6 -right-2 rounded-2xl border border-white/10 bg-[#0d0916]/90 px-5 py-3.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur sm:-right-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-violet-300">Founder</p>
                    <p className="mt-0.5 text-[17px] font-semibold">{FOUNDER.name}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* story */}
            <div className="lg:pt-8">
              <Reveal dir="right">
                <Eyebrow>The founder</Eyebrow>
              </Reveal>
              <Reveal dir="right" delay={80}>
                <h2 className="mt-7 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                  A simple belief,{" "}
                  <span className="hy-shine">a global network.</span>
                </h2>
              </Reveal>
              <Reveal dir="right" delay={150}>
                <blockquote className="mt-9 border-l-2 border-violet-400/70 pl-6 text-[clamp(1.2rem,2.2vw,1.65rem)] font-medium leading-snug text-white/90">
                  &ldquo;Talent is everywhere. Opportunity should be too.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={210}>
                <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-white/60">{FOUNDER.bio}</p>
              </Reveal>

              <div className="mt-10 space-y-3">
                {PRINCIPLES.map((p, i) => (
                  <Reveal key={p.t} dir="right" delay={i * 100}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.05]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 font-mono text-[12px] font-semibold text-white">
                        0{i + 1}
                      </span>
                      <div>
                        <p className="font-medium">{p.t}</p>
                        <p className="mt-0.5 text-[14px] text-white/55">{p.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={150} className="mt-9 flex flex-wrap items-center gap-5">
                <Socials l={FOUNDER} />
                <div className="flex flex-wrap gap-2">
                  {FOUNDER.focus.map((f) => (
                    <span key={f} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-white/70">
                      {f}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================= EXECUTIVES ========================== */}
        <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-96 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[140px]" />

          <div className="relative mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>Executive leadership</Eyebrow>
              <h2 className="mt-7 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.05] tracking-tight">
                The executive <span className="hy-shine">suite.</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/55">
                Drag, swipe or tap a card — CEO, CSO, CFO, CTO and CMO, each owning a part of the mission.
              </p>
            </Reveal>

            <Reveal delay={120} dir="scale" className="mt-14">
              <ExecutiveFlow leaders={EXECUTIVES} />
            </Reveal>
          </div>
        </section>

        {/* ============================== COUNCIL ============================ */}
        <section className="relative px-6 py-24 md:px-12 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <Eyebrow>Advisors &amp; directors</Eyebrow>
              <h2 className="mt-7 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.05] tracking-tight">
                The <span className="hy-shine">council.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/55">
                Specialists in law, investment and sales who keep HYI compliant, funded and growing.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {COUNCIL.map((l, i) => (
                <Reveal key={l.id} delay={i * 120} dir="scale">
                  <CouncilCard l={l} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== VALUES ============================= */}
        <VelocityMarquee />

        {/* ================================ CTA ============================== */}
        <section className="px-6 pb-24 pt-8 md:px-12 md:pb-32">
          <Reveal dir="scale">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#150d26] via-[#0b0713] to-[#050308] px-8 py-16 text-center sm:px-16 sm:py-20">
              <Parallax speed={0.1} className="pointer-events-none absolute -right-24 -top-28">
                <div className="h-80 w-80 rounded-full bg-violet-600/35 blur-[100px]" />
              </Parallax>
              <div className="relative">
                <Eyebrow>Join the mission</Eyebrow>
                <h2 className="mx-auto mt-7 max-w-2xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-tight">
                  Build your team with{" "}
                  <span className="hy-shine">verified talent.</span>
                </h2>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={CTA_PRIMARY}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 px-7 py-4 text-[14.5px] font-medium text-white shadow-[0_14px_44px_-14px_rgba(139,92,246,0.9)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Hire talent
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={CTA_SECONDARY}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 text-[14.5px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Talk to our expert
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}