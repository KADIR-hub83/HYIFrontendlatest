// "use client";

// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import HeroMapImage from "@/public/Hero-map.png";
// import HeroMapGif from "@/assets/landingPage/images/Hero-gif-03.gif";

// import HiringModal from "@/components/forCompaniesPage/HiringForms";
// import ViewPublicProfile from "@/components/section/general/viewPublicProfile";
// import TalentCard, {
//   HeroTalent,
//   TalentPhoto,
// } from "@/components/shared/talentCard";
// import Header from "../general/header";
// import TypingAnimation from "./typingAnimation";
// import { ShimmerButton } from "@/components/shared/customShimmerButton";

// /**
//  * HeroExperience — HYI landing, first fold
//  * ---------------------------------------------------------------------------
//  * Inspired by two reference sites, but built original for HYI:
//  *   • Toptal  -> "I'm looking for" switch, a featured verified-expert card that
//  *                follows a carousel of expert cards (centre card = active)
//  *   • Turing  -> bold headline with a coloured second line, "roles in demand"
//  *                pill cloud, and a labelled trust strip at the bottom
//  *   • HYI     -> keeps your purple world-map + network GIF, dark theme, and the
//  *                existing HiringModal / ViewPublicProfile flows
//  *
//  * Production notes
//  *   - Fully responsive (mobile -> desktop). The heavy network GIF only renders
//  *     on >= lg screens.
//  *   - No Math.random() / Date in render -> no hydration mismatches.
//  *   - Respects prefers-reduced-motion. Auto-advance pauses on hover, when the
//  *     tab is hidden, and when a modal is open.
//  *   - Demo/placeholder profiles never try to open a real profile modal.
//  */

// /* -------------------------------------------------------------------------- */
// /* content (edit freely)                                                       */
// /* -------------------------------------------------------------------------- */

// type ModeId = "talent" | "tech" | "cyber" | "ai";

// interface Mode {
//   id: ModeId;
//   label: string;
//   eyebrow: string;
//   line1: string;
//   line2: string;
//   sub: string;
//   primary: { label: string; href?: string }; // no href => opens the hiring modal
//   secondary: { label: string; href: string };
//   chips: string[];
//   bullets: string[];
// }

// const MODES: Mode[] = [
//   {
//     id: "talent",
//     label: "Hire Talent",
//     eyebrow: "Pre-vetted · AI-matched · Remote",
//     line1: "Hire the top remote talent,",
//     line2: "verified & ready.",
//     sub: "Developers, designers and virtual assistants — matched by AI, backed by 24/7 dedicated support and productivity reports.",
//     primary: { label: "Hire Talent" },
//     secondary: { label: "Join as talent", href: "/get-hired" },
//     chips: [
//       "Software Engineer",
//       "AI / ML Engineer",
//       "Virtual Assistant",
//       "UI/UX Designer",
//       "Data Analyst",
//       "DevOps Engineer",
//       "QA Engineer",
//       "Security Analyst",
//     ],
//     bullets: [],
//   },
//   {
//     id: "tech",
//     label: "Technology Solutions",
//     eyebrow: "Dedicated expert teams",
//     line1: "Build technology that",
//     line2: "scales with you.",
//     sub: "Application development, cloud and integrations delivered by dedicated teams — from the first sprint to long-term maintenance.",
//     primary: { label: "Explore solutions", href: "/technology-solutions" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "Web Apps",
//       "Mobile Apps",
//       "Cloud",
//       "API Integration",
//       "DevOps",
//       "QA Testing",
//       "A/B Testing",
//       "Maintenance",
//     ],
//     bullets: [
//       "Web & mobile application development",
//       "Cloud, DevOps and API integration",
//       "QA, A/B testing and ongoing maintenance",
//     ],
//   },
//   {
//     id: "cyber",
//     label: "Cyber Security",
//     eyebrow: "Expert-led protection",
//     line1: "Security you can trust,",
//     line2: "around the clock.",
//     sub: "Assess, protect and monitor your business with expert-led cyber security solutions and enterprise-grade practices.",
//     primary: { label: "Secure my business", href: "/cyber-security" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "Pen Testing",
//       "Monitoring",
//       "Compliance",
//       "Cloud Security",
//       "Incident Response",
//       "Audits",
//     ],
//     bullets: [
//       "Vulnerability assessment and penetration testing",
//       "Continuous monitoring and incident response",
//       "Compliance readiness and security audits",
//     ],
//   },
//   {
//     id: "ai",
//     label: "AI Mastery",
//     eyebrow: "Applied AI for teams",
//     line1: "Master AI.",
//     line2: "Put it to work.",
//     sub: "Integrate AI into your workflows and upskill your team with practical, hands-on AI programs.",
//     primary: { label: "Explore AI solutions", href: "/integrate-AI" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "AI Integration",
//       "Automation",
//       "AI Agents",
//       "Prompt Engineering",
//       "Team Training",
//       "Data & Analytics",
//     ],
//     bullets: [
//       "AI integration into your existing workflows",
//       "Custom automation and AI agents",
//       "Training programs for teams and leaders",
//     ],
//   },
// ];

// // Built from your own site copy (pre-vetted, AI, 24/7 support, global workforce)
// const TRUST = [
//   {
//     title: "Pre-vetted talent",
//     text: "Every profile is verified before you see it.",
//     icon: "shield",
//   },
//   {
//     title: "AI-powered matching",
//     text: "Smart, secure and precise hiring.",
//     icon: "spark",
//   },
//   {
//     title: "24/7 dedicated support",
//     text: "Easy communication and productivity reports.",
//     icon: "clock",
//   },
//   {
//     title: "Global workforce",
//     text: "World-class professionals, anywhere.",
//     icon: "globe",
//   },
// ] as const;

// /* -------------------------------------------------------------------------- */
// /* small helpers + icons                                                       */
// /* -------------------------------------------------------------------------- */

// const hashOf = (s: string) => {
//   let h = 2166136261;
//   for (let i = 0; i < s.length; i++) {
//     h ^= s.charCodeAt(i);
//     h = Math.imul(h, 16777619);
//   }
//   return h >>> 0;
// };

// const Icon = ({
//   children,
//   className = "h-5 w-5",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <svg
//     viewBox="0 0 24 24"
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     {children}
//   </svg>
// );

// const ArrowRight = ({ className }: { className?: string }) => (
//   <Icon className={className ?? "h-4 w-4"}>
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </Icon>
// );

// const TrustIcon = ({ name }: { name: (typeof TRUST)[number]["icon"] }) => {
//   switch (name) {
//     case "shield":
//       return (
//         <Icon>
//           <path d="M12 2.5 20 6v5.5c0 5-3.3 8.8-8 10-4.7-1.2-8-5-8-10V6l8-3.5Z" />
//           <path d="m8.5 12 2.5 2.5 4.5-5" />
//         </Icon>
//       );
//     case "spark":
//       return (
//         <Icon>
//           <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
//         </Icon>
//       );
//     case "clock":
//       return (
//         <Icon>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M12 7v5l3 2" />
//         </Icon>
//       );
//     default:
//       return (
//         <Icon>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
//         </Icon>
//       );
//   }
// };

// const prefersReducedMotion = () =>
//   typeof window !== "undefined" &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// /* -------------------------------------------------------------------------- */
// /* featured expert (Toptal-style side card)                                    */
// /* -------------------------------------------------------------------------- */

// function FeaturedExpert({
//   t,
//   onOpen,
// }: {
//   t: HeroTalent;
//   onOpen: () => void;
// }) {
//   const h = hashOf(t.id);
//   const x = 18 + (h % 64); // % inside the map thumbnail
//   const y = 22 + ((h >> 8) % 48);

//   return (
//     <div
//       key={t.id}
//       className="hx-swap w-full max-w-[350px] rounded-2xl border border-white/10 bg-[#0d0916]/90 p-4 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.95),0_20px_60px_-30px_rgba(139,92,246,0.55)] backdrop-blur-xl"
//     >
//       {/* mini map with a pinned location */}
//       <div className="relative h-[96px] overflow-hidden rounded-xl bg-[#080510] ring-1 ring-white/10">
//         <Image
//           src={HeroMapImage}
//           alt=""
//           fill
//           sizes="350px"
//           className="object-cover opacity-45"
//         />
//         <span
//           className="absolute"
//           style={{ left: `${x}%`, top: `${y}%` }}
//           aria-hidden
//         >
//           <span className="hx-ping absolute -left-2 -top-2 h-4 w-4 rounded-full bg-violet-400/60" />
//           <span className="absolute -left-[5px] -top-[5px] h-2.5 w-2.5 rounded-full bg-violet-300 ring-2 ring-violet-500/60" />
//         </span>
//         <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
//           Remote
//         </span>
//       </div>

//       <div className="mt-4 flex items-center gap-3.5">
//         <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full ring-2 ring-violet-400/60">
//           <TalentPhoto t={t} sizes="56px" textClass="text-lg" />
//         </div>
//         <div className="min-w-0">
//           <p className="truncate text-[17px] font-semibold tracking-tight text-white">
//             {t.name}
//           </p>
//           <p className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-violet-300">
//             <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
//               <circle cx="12" cy="12" r="10" fill="#8b5cf6" />
//               <path
//                 d="m7.6 12.4 3 3 5.8-6.4"
//                 fill="none"
//                 stroke="#fff"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             {t.demo ? "Sample profile" : "Verified Expert"}
//           </p>
//         </div>
//       </div>

//       {t.designation && (
//         <p className="mt-3.5 truncate rounded-lg bg-white/[0.05] px-3 py-2 text-[13.5px] capitalize text-white/75 ring-1 ring-white/10">
//           {t.designation}
//         </p>
//       )}

//       <div className="mt-3.5 flex flex-wrap gap-1.5">
//         {["Pre-vetted", "Available", "Remote"].map((c) => (
//           <span
//             key={c}
//             className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/65"
//           >
//             {c}
//           </span>
//         ))}
//       </div>

//       {!t.demo && (
//         <button
//           type="button"
//           onClick={onOpen}
//           className="group mt-4 flex w-full items-center justify-between rounded-xl bg-violet-600/90 px-4 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-violet-500"
//         >
//           View profile
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </button>
//       )}
//     </div>
//   );
// }

// function ServicePanel({ mode }: { mode: Mode }) {
//   return (
//     <div
//       key={mode.id}
//       className="hx-swap w-full max-w-[350px] rounded-2xl border border-white/10 bg-[#0d0916]/90 p-5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.95),0_20px_60px_-30px_rgba(139,92,246,0.55)] backdrop-blur-xl"
//     >
//       <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-violet-300">
//         {mode.label}
//       </p>
//       <p className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-white">
//         {mode.line1} {mode.line2}
//       </p>
//       <ul className="mt-5 space-y-3">
//         {mode.bullets.map((b) => (
//           <li key={b} className="flex items-start gap-3 text-[14px] leading-snug text-white/70">
//             <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 ring-1 ring-violet-400/40">
//               <svg viewBox="0 0 24 24" className="h-3 w-3 text-violet-200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
//                 <path d="m5 13 4.5 4.5L19 7.5" />
//               </svg>
//             </span>
//             {b}
//           </li>
//         ))}
//       </ul>
//       {mode.primary.href && (
//         <Link
//           href={mode.primary.href}
//           className="group mt-5 flex w-full items-center justify-between rounded-xl bg-violet-600/90 px-4 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-violet-500"
//         >
//           {mode.primary.label}
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </Link>
//       )}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* talent rail (endless carousel, centre card = active)                        */
// /* -------------------------------------------------------------------------- */

// function TalentRail({
//   talents,
//   onActive,
//   onOpen,
//   paused,
// }: {
//   talents: HeroTalent[];
//   onActive: (i: number) => void;
//   onOpen: (t: HeroTalent) => void;
//   paused: boolean;
// }) {
//   const n = talents.length;
//   const copies = n >= 6 ? 3 : 5; // odd number of copies so we can loop seamlessly
//   const mid = (copies - 1) / 2;

//   const [pos, setPos] = useState(mid * n);
//   const [animate, setAnimate] = useState(true);
//   const [wrapW, setWrapW] = useState(0);

//   const wrapRef = useRef<HTMLDivElement>(null);
//   const hovered = useRef(false);
//   const swipe = useRef({ x: 0, down: false, moved: false });

//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const ro = new ResizeObserver(() => setWrapW(el.clientWidth));
//     ro.observe(el);
//     setWrapW(el.clientWidth);
//     return () => ro.disconnect();
//   }, []);

//   const gap = 16;
//   const cardW =
//     wrapW === 0 ? 340 : wrapW < 520 ? Math.max(250, Math.min(320, wrapW - 72)) : 340;
//   const x = wrapW / 2 - cardW / 2 - pos * (cardW + gap);

//   const active = n ? pos % n : 0;
//   const items = useMemo(
//     () => Array.from({ length: copies * n }, (_, i) => talents[i % n]),
//     [copies, n, talents]
//   );

//   useEffect(() => {
//     onActive(active);
//   }, [active, onActive]);

//   const goBy = useCallback((d: number) => {
//     setAnimate(true);
//     setPos((p) => p + d);
//   }, []);

//   // after a slide ends, silently jump back into the middle copy
//   const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
//     if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
//     if (pos >= (mid + 1) * n) {
//       setAnimate(false);
//       setPos((p) => p - n);
//     } else if (pos < mid * n) {
//       setAnimate(false);
//       setPos((p) => p + n);
//     }
//   };

//   useEffect(() => {
//     if (animate) return;
//     const id = requestAnimationFrame(() =>
//       requestAnimationFrame(() => setAnimate(true))
//     );
//     return () => cancelAnimationFrame(id);
//   }, [animate]);

//   // auto-advance
//   useEffect(() => {
//     if (n < 2 || paused || prefersReducedMotion()) return;
//     const id = window.setInterval(() => {
//       if (hovered.current || document.hidden) return;
//       goBy(1);
//     }, 5200);
//     return () => window.clearInterval(id);
//   }, [n, paused, goBy]);

//   const onKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowRight") {
//       e.preventDefault();
//       goBy(1);
//     }
//     if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       goBy(-1);
//     }
//   };

//   if (!n) return null;

//   return (
//     <div
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Verified talents"
//       className="relative"
//       onKeyDown={onKeyDown}
//     >
//       <div
//         ref={wrapRef}
//         className={`relative h-[150px] touch-pan-y select-none overflow-hidden transition-opacity duration-700 ${
//           wrapW ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//           maskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//         }}
//         onPointerEnter={(e) => {
//           if (e.pointerType === "mouse") hovered.current = true;
//         }}
//         onPointerLeave={(e) => {
//           if (e.pointerType === "mouse") hovered.current = false;
//         }}
//         onPointerDown={(e) => {
//           swipe.current = { x: e.clientX, down: true, moved: false };
//         }}
//         onPointerUp={(e) => {
//           const s = swipe.current;
//           if (!s.down) return;
//           s.down = false;
//           const dx = e.clientX - s.x;
//           if (Math.abs(dx) > 45) {
//             s.moved = true;
//             goBy(dx < 0 ? 1 : -1);
//           }
//         }}
//         onPointerCancel={() => {
//           swipe.current.down = false;
//         }}
//         onClickCapture={(e) => {
//           if (swipe.current.moved) {
//             e.stopPropagation();
//             e.preventDefault();
//             swipe.current.moved = false;
//           }
//         }}
//       >
//         <div
//           className="absolute left-0 top-[9px] flex"
//           onTransitionEnd={onTransitionEnd}
//           style={{
//             gap,
//             transform: `translate3d(${x}px,0,0)`,
//             transition: animate
//               ? "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)"
//               : "none",
//             willChange: "transform",
//           }}
//         >
//           {items.map((t, i) => (
//             <TalentCard
//               key={`${t.id}-${i}`}
//               t={t}
//               width={cardW}
//               active={i === pos}
//               onClick={() => {
//                 if (i === pos) {
//                   if (!t.demo) onOpen(t);
//                 } else {
//                   setAnimate(true);
//                   setPos(i);
//                 }
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {n > 1 && (
//         <>
//           <button
//             type="button"
//             aria-label="Previous talent"
//             onClick={() => goBy(-1)}
//             className="absolute left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M15 5l-7 7 7 7" />
//             </Icon>
//           </button>
//           <button
//             type="button"
//             aria-label="Next talent"
//             onClick={() => goBy(1)}
//             className="absolute right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M9 5l7 7-7 7" />
//             </Icon>
//           </button>
//         </>
//       )}

//       {/* dots */}
//       {n > 1 && n <= 12 && (
//         <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Choose talent">
//           {talents.map((t, i) => (
//             <button
//               key={t.id}
//               role="tab"
//               aria-selected={i === active}
//               aria-label={`Show ${t.name}`}
//               onClick={() => {
//                 setAnimate(true);
//                 setPos(mid * n + i);
//               }}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active ? "w-7 bg-violet-400" : "w-1.5 bg-white/25 hover:bg-white/45"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* hero                                                                        */
// /* -------------------------------------------------------------------------- */

// export default function HeroExperience({ talents }: { talents: HeroTalent[] }) {
//   const [modeId, setModeId] = useState<ModeId>("talent");
//   const [chipIdx, setChipIdx] = useState(0);
//   const [active, setActive] = useState(0);
//   const [hiringOpen, setHiringOpen] = useState(false);
//   const [profileId, setProfileId] = useState<string | null>(null);

//   const mode = MODES.find((m) => m.id === modeId) ?? MODES[0];
//   const current = talents[active] ?? talents[0];
//   const modalOpen = hiringOpen || !!profileId;

//   const sectionRef = useRef<HTMLElement>(null);

//   // cycle the highlighted role chip (Turing-style)
//   useEffect(() => {
//     setChipIdx(0);
//     if (prefersReducedMotion()) return;
//     const id = window.setInterval(
//       () => setChipIdx((i) => (i + 1) % mode.chips.length),
//       2200
//     );
//     return () => window.clearInterval(id);
//   }, [mode]);

//   // gentle mouse parallax on the map (desktop only)
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el || prefersReducedMotion()) return;
//     if (!window.matchMedia("(min-width: 1024px)").matches) return;
//     let raf = 0;
//     const onMove = (e: PointerEvent) => {
//       if (raf) return;
//       raf = requestAnimationFrame(() => {
//         raf = 0;
//         const r = el.getBoundingClientRect();
//         el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
//         el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
//       });
//     };
//     el.addEventListener("pointermove", onMove);
//     return () => {
//       el.removeEventListener("pointermove", onMove);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   const openProfile = useCallback((t: HeroTalent) => {
//     if (!t.demo) setProfileId(t.id);
//   }, []);

//   const primaryClass =
//     "hx-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_44px_-14px_rgba(139,92,246,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_54px_-14px_rgba(139,92,246,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300";

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate w-full overflow-hidden"
//       style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
//       aria-label="HYI — hire verified global talent"
//     >
       
//       <style>{`
//         @keyframes hx-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .hx-in { opacity: 0; animation: hx-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//         .hx-swap { animation: hx-rise 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }

//         @keyframes hx-shine { from { background-position: 100% 0; } to { background-position: -150% 0; } }
//         .hx-grad {
//           background: linear-gradient(100deg, #a78bfa 0%, #8b5cf6 35%, #e9d5ff 50%, #8b5cf6 65%, #a78bfa 100%);
//           background-size: 250% 100%;
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           animation: hx-shine 7s linear infinite;
//         }

//         @keyframes hx-ping { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(3.2); opacity: 0; } }
//         .hx-ping { animation: hx-ping 2.2s ease-out infinite; }

//         @keyframes hx-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
//         .hx-float { animation: hx-float 5s ease-in-out infinite; }

//         .hx-btn::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
//           transform: translateX(-120%);
//           transition: transform 0.9s ease;
//         }
//         .hx-btn:hover::after { transform: translateX(120%); }

//         @media (prefers-reduced-motion: reduce) {
//           .hx-in, .hx-swap { animation: none; opacity: 1; transform: none; }
//           .hx-grad, .hx-ping, .hx-float { animation: none; }
//           .hx-btn::after { display: none; }
//         }
//       `}</style>

//       {/* ------------------------------ backdrop ------------------------------ */}
//       <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
//         <div className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.28),transparent_70%)] blur-3xl" />
//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
//             backgroundSize: "64px 64px",
//             WebkitMaskImage:
//               "radial-gradient(ellipse at 50% 35%, #000 0%, transparent 70%)",
//             maskImage: "radial-gradient(ellipse at 50% 35%, #000 0%, transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">

//           <div className="hx-in flex w-full items-center gap-3 justify-center sm:gap-4 lg:items-center"  style=      {{animationDelay: "40ms" }}>
//               <span className="shrink-0 text-[13px] font-medium text-white/50">
//                 I&apos;m looking for
//               </span>
//               <div
//                 role="tablist"
//                 aria-label="What are you looking for?"
//                 className="flex flex-wrap items-center justify-center gap-1.5 rounded-[22px] border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur sm:rounded-full lg:justify-start"
//               >
//                 {MODES.map((m) => (
//                   <button
//                     key={m.id}
//                     role="tab"
//                     aria-selected={m.id === modeId}
//                     onClick={() => setModeId(m.id)}
//                     className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-all duration-300 ${
//                       m.id === modeId
//                         ? "bg-violet-600 text-white shadow-[0_8px_24px_-8px_rgba(139,92,246,0.9)]"
//                         : "text-white/65 hover:bg-white/[0.06] hover:text-white"
//                     }`}
//                   >
//                     {m.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//         {/* ------------------------------ top grid ------------------------------ */}
//         <div className="grid items-center gap-10  lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 mt-20">
//           {/* ----------------------------- left ----------------------------- */}
//     <div className="relative z-10 flex flex-col items-center text-center lg:items-center lg:text-left">
//             {/* mode switch */}
      

//             {/* eyebrow + headline (re-animates when the mode changes) */}
//             <div key={mode.id} className=" w-full">
//               {/* <span className="hx-in inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-violet-200">
//                 <span className="relative flex h-1.5 w-1.5">
//                   <span className="hx-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
//                   <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                 </span>
//                 {mode.eyebrow}
//               </span> */}

//               {/* <h1
//                 className="hx-in mt-5 text-[clamp(2.15rem,5.4vw,4.3rem)] font-semibold leading-[1.05] tracking-tight text-white"
//                 style={{ animationDelay: "90ms" }}
//               >
//                 {mode.line1}

//                 <br />
//                 <span className="hx-grad">{mode.line2}</span>
//               </h1> */}
//                  <div className="w-full min-h-[124px] min-w-[330px] transition-all duration-500 ease-in-out overflow-hidden min-[410px]:min-w-[400px] min-[768px]:min-h-[140px] md:min-w-[450px] md:max-w-[450px] flex flex-col gap-3">
//                         <TypingAnimation />
//                 </div>

//               {/* <p
//                 className="hx-in mx-auto mt-5 max-w-[34rem] text-[15.5px] leading-relaxed text-white/65 sm:text-[16.5px] lg:mx-0"
//                 style={{ animationDelay: "160ms" }}
//               >
//                 {mode.sub}
//               </p> */}

//             <div
//   className="hx-in mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
//   style={{ animationDelay: "230ms" }}
// >
//   {mode.primary.href ? (
//     <Link href={mode.primary.href} className={primaryClass}>
//       {mode.primary.label}
//       <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//     </Link>
//   ) : (
//     <ShimmerButton
//       className="px-7"
//       onClick={() => setIsModalOpen(true)}
//     >
//       {mode.primary.label}
//       <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//     </ShimmerButton>
//   )}

//   <Link
//     href={mode.secondary.href}
//     className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-[15px] font-medium text-white transition-all duration-300  hover:border-violet-400/50 hover:bg-white/[0.08]"
//   >
//     {mode.secondary.label}
//   </Link>
// </div>
//             </div>

//             {/* roles / topics in demand (Turing-style pill cloud) */}
//             <div className="hx-in mt-4 w-full" style={{ animationDelay: "320ms" }}>
//               {/* <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/40">
//                 {mode.id === "talent" ? "Roles in demand" : "What we cover"}
//               </p> */}
//               <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
//                 {mode.chips.map((c, i) => (
//                   <li
//                     key={c}
//                     className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-all duration-500 ${
//                       i === chipIdx
//                         ? "border-violet-400/70 bg-violet-500/15 text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.8)]"
//                         : "border-white/10 bg-white/[0.03] text-white/60"
//                     }`}
//                   >
//                     {c}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* ----------------------------- right ---------------------------- */}
//           <div className="relative flex flex-col items-center lg:block">
//             <div
//               className="relative isolate w-full opacity-90 lg:opacity-100"
//               style={{
//                 transform:
//                   "translate3d(calc(var(--mx) * -10px), calc(var(--my) * -8px), 0)",
//                 transition: "transform 0.4s ease-out",
//               }}
//             >
//               <Image
//                 src={HeroMapImage}
//                 alt="World map"
//                 fetchPriority="high"
//                 sizes="(min-width: 1024px) 50vw, 100vw"
//                 className="h-auto w-full"
//               />
//               <Image
//                 src={HeroMapGif}
//                 alt="People network worldwide"
//                 unoptimized
//                 sizes="50vw"
//                 className="absolute inset-0 hidden h-full w-full lg:block"
//               />
//             </div>

//             <div className="relative z-10 -mt-14 w-full max-w-[350px] lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0">
//               <div className="hx-float">
//                 {modeId === "talent" && current ? (
//                   <FeaturedExpert t={current} onOpen={() => openProfile(current)} />
//                 ) : (
//                   <ServicePanel mode={mode} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --------------------------- talent carousel --------------------------- */}
//         <div className="relative pb-8 pt-8 lg:pt-12">
//           {/* <div className="mx-auto mb-7 flex max-w-2xl flex-col items-center gap-2 text-center">
//             <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-tight text-white">
//               Verified Global Talents.
//             </h2>
//             <p className="text-[14.5px] leading-relaxed text-white/55 sm:text-[15.5px]">
//               Pre-vetted remote developers, ready to join your team. Select a card to
//               meet them.
//             </p>
//           </div> */}

//           <TalentRail
//             talents={talents}
//             onActive={setActive}
//             onOpen={openProfile}
//             paused={modalOpen}
//           />
//         </div>

//         {/* ----------------------------- trust strip ----------------------------- */}
//         <div className="mb-4 border-t border-white/10 pt-8 md:mb-8">
//           <div className="grid gap-6 lg:grid-cols-[160px_1fr] lg:gap-10">
//             <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 lg:pt-1 lg:text-left">
//               Why HYI
//             </p>
//             <ul className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
//               {TRUST.map((t) => (
//                 <li key={t.title} className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
//                   <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300 ring-1 ring-violet-400/25">
//                     <TrustIcon name={t.icon} />
//                   </span>
//                   <div>
//                     <p className="text-[14.5px] font-semibold text-white">{t.title}</p>
//                     <p className="mt-1 text-[13px] leading-snug text-white/50">{t.text}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------- modals ------------------------------- */}
//       <HiringModal
//         isOpen={hiringOpen}
//         onClose={() => setHiringOpen(false)}
//         title={"Talent"}
//       />

//       {profileId && (
//         <ViewPublicProfile
//           open={!!profileId}
//           selectedCandidateId={profileId}
//           onClose={() => setProfileId(null)}
//         />
//       )}
//     </section>
//   );
// }






















// "use client";

// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import HeroMapImage from "@/public/Hero-map.png";
// import HeroMapGif from "@/assets/landingPage/images/Hero-gif-03.gif";

// import HiringModal from "@/components/forCompaniesPage/HiringForms";
// import TalentCard, {
//   HeroTalent,
//   TalentPhoto,
// } from "@/components/shared/talentCard";
// import TypingAnimation from "./typingAnimation";
// import { ShimmerButton } from "@/components/shared/customShimmerButton";

// /**
//  * HeroExperience — HYI landing, first fold (v4)
//  * ---------------------------------------------------------------------------
//  *  - LEFT  : typing text + Hire Talent / Join as talent, map behind (70%)
//  *  - RIGHT : 3 rows of SMALL talent cards, staggered, sliding right -> left
//  *            (Turing style), 70% opacity, only inside the top area
//  *  - Over the cards: role pills that keep changing (Turing style)
//  *  - BOTTOM: talent carousel, NO profile link / no click-through
//  */

// /* -------------------------------------------------------------------------- */
// /* helpers + icons                                                             */
// /* -------------------------------------------------------------------------- */

// const Icon = ({
//   children,
//   className = "h-5 w-5",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <svg
//     viewBox="0 0 24 24"
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     {children}
//   </svg>
// );

// const ArrowRight = ({ className }: { className?: string }) => (
//   <Icon className={className ?? "h-4 w-4"}>
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </Icon>
// );

// const prefersReducedMotion = () =>
//   typeof window !== "undefined" &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// /* -------------------------------------------------------------------------- */
// /* small sliding card                                                          */
// /* -------------------------------------------------------------------------- */

// function MiniCard({ t, index }: { t: HeroTalent; index: number }) {
//   const dotLeft = 15 + ((index * 37) % 65);
//   const dotTop = 20 + ((index * 23) % 50);
//   const photoTalent: HeroTalent = { ...t, photo: t.cutout || t.photo };

//   return (
//     <div className="relative flex h-[112px] w-[290px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#130d22]/80 backdrop-blur-md">
//       {/* mini map (faint, behind details) */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] opacity-40">
//         <Image
//           src={HeroMapImage}
//           alt=""
//           fill
//           sizes="180px"
//           className="object-cover object-center "
//         />
//         <span
//           className="absolute"
//           style={{ left: `${dotLeft}%`, top: `${dotTop}%` }}
//         >
//           <span className="hx-ping absolute -inset-1 rounded-full bg-violet-400/70" />
//           <span className="relative block h-2 w-2 rounded-full border border-white bg-violet-500" />
//         </span>
//       </div>

//       {/* photo */}
//       <div className="relative w-[88px] shrink-0 overflow-hidden bg-gradient-to-br from-violet-500/30 to-violet-950/60">
//         <TalentPhoto t={photoTalent} sizes="88px" textClass="text-2xl" />
//         <span
//           aria-hidden
//           className="absolute bottom-0 left-0 h-6 w-6 bg-violet-600"
//           style={{ clipPath: "polygon(0 30%, 70% 100%, 0 100%)" }}
//         />
//       </div>

//       {/* details */}
//       <div className="relative flex min-w-0 flex-1 flex-col justify-center gap-1 px-3">
//         <p className="truncate text-[14.5px] font-semibold text-violet-300">
//           {t.name}
//         </p>
//         <p className="flex items-center gap-1.5 text-[11.5px] font-medium text-emerald-400">
//           <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden>
//             <circle cx="12" cy="12" r="10" fill="currentColor" />
//             <path
//               d="m7.5 12.3 3 3 6-6.3"
//               fill="none"
//               stroke="#0c0914"
//               strokeWidth="2.4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="truncate">
//             {t.demo ? "Sample profile" : "Verified Expert"}
//           </span>
//         </p>
//         {t.designation && (
//           <p className="truncate text-[12px] capitalize text-white/60">
//             {t.designation}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// /** One endless row, right -> left. Two identical halves => seamless loop. */
// function SlideRow({
//   talents,
//   rowIndex,
//   seconds,
//   offsetPx,
// }: {
//   talents: HeroTalent[];
//   rowIndex: number;
//   seconds: number;
//   offsetPx: number;
// }) {
//   const base = useMemo(() => {
//     if (!talents.length) return [];
//     const reps = Math.max(1, Math.ceil(7 / talents.length));
//     const total = reps * talents.length;
//     // rotate so every row starts with a different talent
//     return Array.from(
//       { length: total },
//       (_, i) => talents[(i + rowIndex * 2) % talents.length]
//     );
//   }, [talents, rowIndex]);

//   if (!base.length) return null;

//   const half = (copy: number) => (
//     <div key={copy} className="flex shrink-0 gap-8 pr-4" aria-hidden={copy === 1}>
//       {base.map((t, i) => (
//         <MiniCard key={`${copy}-${t.id}-${i}`} t={t} index={i + rowIndex * 3} />
//       ))}
//     </div>
//   );

//   return (
//     <div style={{ marginLeft: offsetPx }}>
//       <div
//         className="hx-slide flex w-max"
//         style={{ animationDuration: `${seconds}s` }}
//       >
//         {half(0)}
//         {half(1)}
//       </div>
//     </div>
//   );
// }

// /** 3 staggered rows (Turing style) */
// function SlideRows({
//   talents,
//   rows = 3,
//   className = "",
// }: {
//   talents: HeroTalent[];
//   rows?: number;
//   className?: string;
// }) {
//   const config = [
//     { seconds: 50, offsetPx: 0 },
//     { seconds: 75, offsetPx: -150 },
//     { seconds: 55, offsetPx: -60 },
//   ].slice(0, rows);

//   return (
//     <div
//       className={`pointer-events-none flex flex-col justify-center gap-15 lg:pt-30  overflow-hidden opacity-30 ${className}`}
//       style={{
//         WebkitMaskImage:
//           "linear-gradient(90deg, transparent 0%, #000 20%, #000 90%, transparent 100%)",
//         maskImage:
//           "linear-gradient(90deg, transparent 0%, #000 20%, #000 90%, transparent 100%)",
//       }}
//       aria-hidden="true"
//     >
//       {config.map((c, i) => (
//         <SlideRow
//           key={i}
//           talents={talents}
//           rowIndex={i}
//           seconds={c.seconds}
//           offsetPx={c.offsetPx}
//         />
//       ))}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* changing role pills (Turing style)                                          */
// /* -------------------------------------------------------------------------- */

// const PILL_ROLES = [
//   "Digital Transformation",
//   "AI / ML Engineer",
//   "Virtual Assistant",
//   "UI/UX Designer",
//   "Data Analyst",
//   "DevOps Engineer",
//   "QA Engineer",
//   "Security Analyst",
//   "Mobile Developer",
//   "Cloud Engineer",
//   "Full-Stack Developer",
//   "Prompt Engineer",
//   "Data Scientist",
//   "Product Manager",
//   "Cyber Security Expert",
//   "Automation Specialist",
// ];

// const PILLS_VISIBLE = 8;

// function RolePills({ className = "" }: { className?: string }) {
//   const [start, setStart] = useState(0);

//   useEffect(() => {
//     if (prefersReducedMotion()) return;
//     const id = window.setInterval(
//       () => setStart((s) => (s + PILLS_VISIBLE) % PILL_ROLES.length),
//       3600
//     );
//     return () => window.clearInterval(id);
//   }, []);

//   const visible = Array.from(
//     { length: PILLS_VISIBLE },
//     (_, i) => PILL_ROLES[(start + i) % PILL_ROLES.length]
//   );

//   return (
//     <div
//       key={start}
//       className={`pointer-events-none flex flex-wrap content-center gap-3 ${className}`}
//       aria-hidden="true"
//     >
//       {visible.map((r, i) => (
//         <span
//           key={r}
//           className="hx-pill rounded-full border border-white/20 bg-[#0a0714]/80 px-5 py-2.5 text-[15px] font-medium text-white backdrop-blur"
//           style={{ animationDelay: `${i * 90}ms` }}
//         >
//           {r}
//         </span>
//       ))}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* talent rail (bottom carousel) — NO profile link                             */
// /* -------------------------------------------------------------------------- */

// function TalentRail({
//   talents,
//   paused,
// }: {
//   talents: HeroTalent[];
//   paused: boolean;
// }) {
//   const n = talents.length;
//   const copies = n >= 6 ? 3 : 5;
//   const mid = (copies - 1) / 2;

//   const [pos, setPos] = useState(mid * n);
//   const [animate, setAnimate] = useState(true);
//   const [wrapW, setWrapW] = useState(0);

//   const wrapRef = useRef<HTMLDivElement>(null);
//   const hovered = useRef(false);
//   const swipe = useRef({ x: 0, down: false, moved: false });

//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const ro = new ResizeObserver(() => setWrapW(el.clientWidth));
//     ro.observe(el);
//     setWrapW(el.clientWidth);
//     return () => ro.disconnect();
//   }, []);

//   const gap = 16;
//   const cardW =
//     wrapW === 0 ? 340 : wrapW < 520 ? Math.max(250, Math.min(320, wrapW - 72)) : 340;
//   const x = wrapW / 2 - cardW / 2 - pos * (cardW + gap);

//   const active = n ? pos % n : 0;
//   const items = useMemo(
//     () => Array.from({ length: copies * n }, (_, i) => talents[i % n]),
//     [copies, n, talents]
//   );

//   const goBy = useCallback((d: number) => {
//     setAnimate(true);
//     setPos((p) => p + d);
//   }, []);

//   const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
//     if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
//     if (pos >= (mid + 1) * n) {
//       setAnimate(false);
//       setPos((p) => p - n);
//     } else if (pos < mid * n) {
//       setAnimate(false);
//       setPos((p) => p + n);
//     }
//   };

//   useEffect(() => {
//     if (animate) return;
//     const id = requestAnimationFrame(() =>
//       requestAnimationFrame(() => setAnimate(true))
//     );
//     return () => cancelAnimationFrame(id);
//   }, [animate]);

//   useEffect(() => {
//     if (n < 2 || paused || prefersReducedMotion()) return;
//     const id = window.setInterval(() => {
//       if (hovered.current || document.hidden) return;
//       goBy(1);
//     }, 5200);
//     return () => window.clearInterval(id);
//   }, [n, paused, goBy]);

//   const onKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowRight") {
//       e.preventDefault();
//       goBy(1);
//     }
//     if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       goBy(-1);
//     }
//   };

//   if (!n) return null;

//   return (
//     <div
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Verified talents"
//       className="relative"
//       onKeyDown={onKeyDown}
//     >
//       <div
//         ref={wrapRef}
//         className={`relative h-[150px] touch-pan-y select-none overflow-hidden transition-opacity duration-700 ${
//           wrapW ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//           maskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//         }}
//         onPointerEnter={(e) => {
//           if (e.pointerType === "mouse") hovered.current = true;
//         }}
//         onPointerLeave={(e) => {
//           if (e.pointerType === "mouse") hovered.current = false;
//         }}
//         onPointerDown={(e) => {
//           swipe.current = { x: e.clientX, down: true, moved: false };
//         }}
//         onPointerUp={(e) => {
//           const s = swipe.current;
//           if (!s.down) return;
//           s.down = false;
//           const dx = e.clientX - s.x;
//           if (Math.abs(dx) > 45) {
//             s.moved = true;
//             goBy(dx < 0 ? 1 : -1);
//           }
//         }}
//         onPointerCancel={() => {
//           swipe.current.down = false;
//         }}
//         onClickCapture={(e) => {
//           if (swipe.current.moved) {
//             e.stopPropagation();
//             e.preventDefault();
//             swipe.current.moved = false;
//           }
//         }}
//       >
//         <div
//           className="absolute left-0 top-[9px] flex"
//           onTransitionEnd={onTransitionEnd}
//           style={{
//             gap,
//             transform: `translate3d(${x}px,0,0)`,
//             transition: animate
//               ? "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)"
//               : "none",
//             willChange: "transform",
//           }}
//         >
//           {items.map((t, i) => (
//             <TalentCard
//               key={`${t.id}-${i}`}
//               t={t}
//               width={cardW}
//               active={i === pos}
//               /* no profile link: clicking only moves the carousel */
//               onClick={() => {
//                 if (i !== pos) {
//                   setAnimate(true);
//                   setPos(i);
//                 }
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {n > 1 && (
//         <>
//           <button
//             type="button"
//             aria-label="Previous talent"
//             onClick={() => goBy(-1)}
//             className="absolute left-1 top-[75px] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M15 5l-7 7 7 7" />
//             </Icon>
//           </button>
//           <button
//             type="button"
//             aria-label="Next talent"
//             onClick={() => goBy(1)}
//             className="absolute right-1 top-[75px] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M9 5l7 7-7 7" />
//             </Icon>
//           </button>
//         </>
//       )}

//       {n > 1 && n <= 12 && (
//         <div
//           className="mt-3 flex items-center justify-center gap-2"
//           role="tablist"
//           aria-label="Choose talent"
//         >
//           {talents.map((t, i) => (
//             <button
//               key={t.id}
//               role="tab"
//               aria-selected={i === active}
//               aria-label={`Show ${t.name}`}
//               onClick={() => {
//                 setAnimate(true);
//                 setPos(mid * n + i);
//               }}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active ? "w-7 bg-violet-400" : "w-1.5 bg-white/25 hover:bg-white/45"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* hero                                                                        */
// /* -------------------------------------------------------------------------- */

// export default function HeroExperience({ talents }: { talents: HeroTalent[] }) {
//   const [hiringOpen, setHiringOpen] = useState(false);

//   return (
//     <section
//       className="relative isolate flex min-h-[calc(100dvh-90px)] w-full flex-col overflow-hidden"
//       aria-label="HYI — hire verified global talent"
//     >
//       <style>{`
//         @keyframes hx-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .hx-in { opacity: 0; animation: hx-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

//         @keyframes hx-ping { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(3); opacity: 0; } }
//         .hx-ping { animation: hx-ping 2.2s ease-out infinite; }

//         /* cards: right -> left, endless */
//         @keyframes hx-slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
//         .hx-slide { animation: hx-slide 70s linear infinite; will-change: transform; }

//         /* pills: fade in, hold, fade out, then the set changes */
//         @keyframes hx-pill {
//           0%   { opacity: 0; transform: translateY(10px) scale(0.96); }
//           12%  { opacity: 1; transform: none; }
//           85%  { opacity: 1; transform: none; }
//           100% { opacity: 0; transform: translateY(-6px); }
//         }
//         .hx-pill { opacity: 0; animation: hx-pill 3.6s ease-in-out forwards; }

//         @media (prefers-reduced-motion: reduce) {
//           .hx-in { animation: none; opacity: 1; transform: none; }
//           .hx-ping, .hx-slide { animation: none; }
//           .hx-pill { animation: none; opacity: 1; }
//         }
//       `}</style>

//       {/* ---------- map: behind the typing text, 70% opacity ---------- */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-20 bg-[#05030a]"
//         aria-hidden="true"
//       />
//       {/* <div
//         className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full opacity-70 lg:w-[58%]"
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(90deg, #000 0%, #000 70%, transparent 100%)",
//           maskImage:
//             "linear-gradient(90deg, #000 0%, #000 70%, transparent 100%)",
//         }}
//         aria-hidden="true"
//         >
//         <Image
//           src={HeroMapImage}
//           alt=""
//           fill
//           priority
//           sizes="60vw"
//           className="object-cover object-center"
//         />
//         <Image
//           src={HeroMapGif}
//           alt=""
//           fill
//           unoptimized
//           sizes="60vw"
//           className="hidden object-cover object-center lg:block"
//         />
//       </div> */}

//       {/* ---------------------------- main content ---------------------------- */}
//       <div className="relative mx-auto flex w-full  flex-1 flex-col px-4 md:px-20">

// <div className="relative flex flex-1 items-center lg:min-h-[500px]">
//   {/* background rows: full width, behind the text (all screen sizes) */}
//   <SlideRows
//     talents={talents}
//     rows={3}
//     className="absolute inset-y-0 right-[-24px] z-0  w-[62%] "
//   />

//   {/* soft dark overlay so the text stays readable over the cards */}
//   <div
//     aria-hidden="true"
//     className="pointer-events-none absolute inset-0 z-[1]"
//     style={{
//       background:
//         "radial-gradient(ellipse 60% 70% at 25% 50%, rgba(5,3,10,0.75) 0%, rgba(5,3,10,0.35) 60%, transparent 100%)",
//     }}
//   />

//   {/* content grid */}
//   <div className="relative z-10 grid w-full items-center gap-10 py-30 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-30 mt-30">
//     {/* LEFT: typing text */}
//     <div className="w-full text-center lg:text-left">
//       <TypingAnimation />
//     </div>

//     {/* RIGHT: pills + buttons (left edges aligned) */}
//     <div className="flex w-full flex-col items-center lg:items-start">
//       <RolePills className="min-h-[190px] w-full max-w-[560px] justify-center lg:justify-start" />

//       <div
//         className="hx-in mt- flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
//         style={{ animationDelay: "230ms" }}
//       >
//         <ShimmerButton className="px-7" onClick={() => setHiringOpen(true)}>
//           Hire Talent
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </ShimmerButton>

//        <Link
//   href="/get-hired"
//   className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/40 bg-[linear-gradient(180deg,#93c5fd_0%,#3b82f6_35%,#1e40af_100%)] px-5 py-1.5 text-[15px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:border-blue-200/60 hover:shadow-[0_0_30px_rgba(96,165,250,0.75),inset_0_1px_0_rgba(255,255,255,0.45)] hover:brightness-110"
// >
//   Join as Talent
// </Link>
//       </div>
//     </div>
//   </div>
// </div>

// {/* ⚠️ yahan wali purani mobile line DELETE kar do:
//     <SlideRows talents={talents} rows={2} className="mb-4 flex lg:hidden" /> */}

//         {/* mobile: 2 rows of small cards in normal flow */}
//         {/* <SlideRows talents={talents} rows={2} className="mb-4 flex lg:hidden" /> */}

//         {/* ------------------------- talent carousel (no link) ------------------------- */}
//         <div className="relative pb-6 pt-4">
//           <TalentRail talents={talents} paused={hiringOpen} />
//         </div>
//       </div>

//       {/* ------------------------------- modal ------------------------------- */}
//       <HiringModal
//         isOpen={hiringOpen}
//         onClose={() => setHiringOpen(false)}
//         title={"Talent"}
//       />
//     </section>
//   );
// }



































"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HeroMapImage from "@/public/Hero-map.png";

import HiringModal from "@/components/forCompaniesPage/HiringForms";
import TalentCard, {
  HeroTalent,
  TalentPhoto,
} from "@/components/shared/talentCard";
import ViewPublicProfile from "@/components/section/general/viewPublicProfile";
import TypingAnimation from "./typingAnimation";
import { ShimmerButton } from "@/components/shared/customShimmerButton";

/**
 * HeroExperience — HYI landing, first fold (v5)
 *  - Background rows: glass "Verified Talent" cards (photo, map, socials) — NOT clickable
 *  - Bottom carousel: click a real talent => opens profile
 */

/* -------------------------------------------------------------------------- */
/* config                                                                      */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/* helpers + icons                                                             */
/* -------------------------------------------------------------------------- */

const Icon = ({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <Icon className={className ?? "h-4 w-4"}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* social icons (filled) */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[13px] w-[13px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
  </svg>
);

const PinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/* background card (display only, same look as the design)                     */
/* -------------------------------------------------------------------------- */

function MiniCard({ t, index }: { t: HeroTalent; index: number }) {
  const pinLeft = 58 + ((index * 13) % 22);
  const pinTop = 30 + ((index * 17) % 28);
  const photoTalent: HeroTalent = { ...t, photo: t.cutout || t.photo };

  return (
    <div className="pointer-events-none relative h-[164px] w-[256px] shrink-0 overflow-hidden rounded-[18px] border border-blue-400/30 bg-gradient-to-br from-[#0d1f5c]/90 via-[#0a1440]/90 to-[#070b26]/95 shadow-[0_0_28px_-8px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
      {/* dotted map + pin */}
      <div className="absolute inset-y-0 right-0 w-[62%] opacity-50">
        <Image
          src={HeroMapImage}
          alt=""
          fill
          sizes="160px"
          className="object-cover object-center"
        />
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.9)]"
          style={{ left: `${pinLeft}%`, top: `${pinTop}%` }}
        >
          <PinIcon className="h-5 w-5" />
        </span>
      </div>

      {/* round photo */}
      <div className="absolute left-3 top-3 h-[68px] w-[68px] rounded-full border-2 border-sky-400/80 p-[3px] shadow-[0_0_18px_rgba(56,189,248,0.55)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-950">
          <TalentPhoto t={photoTalent} sizes="68px" textClass="text-xl" />
        </div>
      </div>

      {/* verified badge */}
      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-gradient-to-b from-green-500 to-green-700 py-1 pl-1.5 pr-3 text-[11px] font-semibold text-white shadow-[0_0_14px_rgba(34,197,94,0.45)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#d1fae5" />
          <path
            d="m7 12.5 3.2 3.2L17 8.9"
            fill="none"
            stroke="#15803d"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {t.demo ? "Sample" : "Verified Talent"}
      </div>

      {/* bottom details */}
      <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[17px] font-bold leading-tight text-white">
            {t.name}
          </p>
          {t.designation && (
            <p className="mt-0.5 truncate text-[12px] capitalize text-white/70">
              {t.designation}
            </p>
          )}
          <p className="mt-1 flex items-center gap-1 text-[11px] text-white/80">
            <PinIcon className="h-3 w-3 shrink-0 text-sky-300" />
            <span className="truncate">{t.location || "Remote"}</span>
          </p>
        </div>

        {/* social icons (display only) */}
        <div className="flex shrink-0 items-center gap-1.5">
          {[GithubIcon, LinkedinIcon, BriefcaseIcon].map((I, k) => (
            <span
              key={k}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#1b2a6b]/80 text-white"
            >
              <I />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}



function SlideRow({
  talents,
  rowIndex,
  seconds,
  offsetPx,
}: {
  talents: HeroTalent[];
  rowIndex: number;
  seconds: number;
  offsetPx: number;
}) {
  const base = useMemo(() => {
    if (!talents.length) return [];
    const reps = Math.max(1, Math.ceil(7 / talents.length));
    const total = reps * talents.length;
    return Array.from(
      { length: total },
      (_, i) => talents[(i + rowIndex * 2) % talents.length]
    );
  }, [talents, rowIndex]);

  if (!base.length) return null;

  const half = (copy: number) => (
    <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1}>
      {base.map((t, i) => (
        <MiniCard key={`${copy}-${t.id}-${i}`} t={t} index={i + rowIndex * 3} />
      ))}
    </div>
  );

  return (
    <div style={{ marginLeft: offsetPx }}>
      <div
        className="hx-slide flex w-max"
        style={{ animationDuration: `${seconds}s` }}
      >
        {half(0)}
        {half(1)}
      </div>
    </div>
  );
}

/** 3 staggered rows */
function SlideRows({
  talents,
  rows = 3,
  className = "",
}: {
  talents: HeroTalent[];
  rows?: number;
  className?: string;
}) {
const config = [
  { seconds: 45, offsetPx: 0 },     // 1st card — fastest
  { seconds: 65, offsetPx: -150 },   // 2nd card — slower
  { seconds: 70, offsetPx: -60 },    // 3rd card — slowest
].slice(0, rows);

  return (
    <div
      className={`pointer-events-none flex flex-col justify-center gap-5 overflow-hidden opacity-20 lg:pt-40 ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 20%, #000 90%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 20%, #000 90%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      {config.map((c, i) => (
        <SlideRow
          key={i}
          talents={talents}
          rowIndex={i}
          seconds={c.seconds}
          offsetPx={c.offsetPx}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* changing role pills                                                         */
/* -------------------------------------------------------------------------- */


const PILL_ROLES = [
  "Digital Transformation",
  "Build Your LLM",
  "Virtual Assistant",
  "Deploy Your Code",
  "Build Your AI",
  "AI Automation",
  "Custom AI Agents",
  "AI Integration",
  "LLM Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "QA Engineer",
  "Data Scientist",
  "Security Analyst",
  "Cyber Security Expert",
  "Automation Specialist",
];

const PILLS_VISIBLE = 8;
const MOBILE_PILLS_VISIBLE = 6;

function RolePills({ className = "" }: { className?: string }) {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const updateScreen = () => setIsMobile(media.matches);
    updateScreen();

    media.addEventListener("change", updateScreen);
    return () => media.removeEventListener("change", updateScreen);
  }, []);

  const visibleCount = isMobile
    ? MOBILE_PILLS_VISIBLE
    : PILLS_VISIBLE;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      setStart((s) => (s + visibleCount) % PILL_ROLES.length);
    }, 3600);

    return () => window.clearInterval(id);
  }, [visibleCount]);

  const visible = Array.from(
    { length: visibleCount },
    (_, i) => PILL_ROLES[(start + i) % PILL_ROLES.length]
  );

  const pillClass = `
    hx-pill inline-flex w-fit max-w-full shrink-0
    items-center justify-center whitespace-nowrap
    rounded-full border border-white/15
    bg-[#0a0714]/80
    px-4 py-2.5
    text-[12px] font-medium text-white
    backdrop-blur
    sm:px-5 sm:text-[15px]
  `;

  return (
    <div
      key={`${start}-${isMobile}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* MOBILE: Turing-style staggered layout */}
      <div className="flex flex-col items-center gap-2.5 lg:hidden">

        <div className="flex items-center justify-start gap-2.5">
          {visible.slice(0, 2).map((r, i) => (
            <span
              key={r}
              className={pillClass}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {r}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          <span className={pillClass}>{visible[2]}</span>
        </div>

        <div className="flex items-center justify-center gap-2.5">
          {visible.slice(3, 5).map((r, i) => (
            <span
              key={r}
              className={pillClass}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {r}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          <span className={pillClass}>{visible[5]}</span>
        </div>
      </div>

      {/* DESKTOP: Existing flexible layout */}
      <div className="hidden lg:flex flex-wrap items-start justify-start gap-3">
        {visible.map((r, i) => (
          <span
            key={r}
            className={pillClass}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/* talent rail (bottom carousel) — click opens profile                         */
/* -------------------------------------------------------------------------- */

function TalentRail({
  talents,
  paused,
  onOpenProfile,
}: {
  talents: HeroTalent[];
  paused: boolean;
  onOpenProfile: (talent: HeroTalent) => void;
}) {
  const n = talents.length;

  // ek half me itne cards ki screen hamesha bhari rahe
  const base = useMemo(() => {
    if (!n) return [];
    const reps = Math.max(1, Math.ceil(10 / n));
    return Array.from({ length: reps * n }, (_, i) => talents[i % n]);
  }, [talents, n]);

  if (!n) return null;

  // 246px = card 230 + gap 16, speed ~ 45px/s
  const seconds = Math.max(20, Math.round((base.length * 246) / 45));

  const half = (copy: number) => (
    <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
      {base.map((t, i) => (
        <TalentCard
          key={`${copy}-${t.id}-${i}`}
          t={t}
          onClick={() => onOpenProfile(t)}
        />
      ))}
    </div>
  );

  return (
    <div
      role="region"
      aria-label="Verified talents"
      className="relative overflow-hidden py- "
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div
        className="hx-marquee flex w-max"
        style={{
          animationDuration: `${seconds}s`,
          animationPlayState: paused ? "paused" : undefined,
        }}
      >
        {half(0)}
        {half(1)}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* hero                                                                        */
/* -------------------------------------------------------------------------- */

export default function HeroExperience({
  talents,
}: {
  talents: HeroTalent[];
}) {
  const [hiringOpen, setHiringOpen] = useState(false);

  const [openPublicProfileDialog, setOpenPublicProfileDialog] =
    useState(false);

  const [selectedCandidateId, setSelectedCandidateId] =
    useState<string>("");

  // Open profile popup
  const handleOpenTalentProfile = useCallback((talent: HeroTalent) => {
    if (talent.demo) return;

    if (!talent.id) {
      console.error("Talent ID missing:", talent);
      return;
    }

    setSelectedCandidateId(talent.id);
    setOpenPublicProfileDialog(true);
  }, []);

  // Close profile popup
  const handleCloseProfile = useCallback(() => {
    setOpenPublicProfileDialog(false);
    setSelectedCandidateId("");
  }, []);

  return (
    <section
      className="relative isolate flex  w-full flex-col overflow-hidden mx-auto max-w-[1350px] justify-center items-center"
      aria-label="HYI — hire verified global talent"
    >
      <style>{`
        @keyframes hx-rise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .hx-in {
          opacity: 0;
          animation: hx-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hx-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .hx-slide {
          animation: hx-slide 70s linear infinite;
          will-change: transform;
        }

        @keyframes hx-pill {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          12% {
            opacity: 1;
            transform: none;
          }
          85% {
            opacity: 1;
            transform: none;
          }
          100% {
            opacity: 0;
            transform: translateY(-6px);
          }
        }

        .hx-pill {
          opacity: 0;
          animation: hx-pill 3.6s ease-in-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-in {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .hx-slide {
            animation: none;
          }

          .hx-pill {
            animation: none;
            opacity: 1;
          }
        }

        @keyframes hx-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.hx-marquee {
  animation: hx-marquee 40s linear infinite;
  will-change: transform;
}

.hx-marquee:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .hx-marquee { animation: none; }
}
      `}</style>

      {/* Dark background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[#05030a]"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative mx-auto flex w-full flex-1 flex-col px-10">
        <div className="relative flex flex-1 items-center lg:min-h-[500px]">
          {/* Background talent cards */}
          <SlideRows
            talents={talents}
            rows={3}
            className="absolute inset-y-0 right-[-24px] z-0 w-[62%] max-md:w-[100%]"
          />

          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 25% 50%, rgba(5,3,10,0.75) 0%, rgba(5,3,10,0.35) 60%, transparent 100%)",
            }}
          />

          {/* Content grid */}
          <div className="relative z-10 mt-15 md:mt-30 grid w-full items-center gap-5 md:py-30 max-md:pt-30 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-30">
            {/* LEFT */}
            <div className="w-full text-center lg:text-left">
              <TypingAnimation />
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col items-center lg:items-start">
              <RolePills className=" w-full max-w-[560px] justify-center lg:justify-start" />

              {/* <div
                className="hx-in flex mt-2 flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
                style={{ animationDelay: "230ms" }}
              >
                <ShimmerButton
                  className="px-7"
                  onClick={() => setHiringOpen(true)}
                >
                  Hire Talent
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </ShimmerButton>

                <Link
                  href="/get-hired"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/40 bg-[linear-gradient(180deg,#93c5fd_0%,#3b82f6_35%,#1e40af_100%)] px-5 py-1.5 text-[15px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:border-blue-200/60 hover:shadow-[0_0_30px_rgba(96,165,250,0.75),inset_0_1px_0_rgba(255,255,255,0.45)] hover:brightness-110"
                >
                  Join as Talent
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {/* Talent carousel */}
<div className="relative pt-10">
  <h2
    className="hx-in mb-5 text-center text-2xl font-bold tracking-tight hyi-white sm:text-3xl"
    style={{ animationDelay: "150ms" }}
  >
    Verified Global Talents
  </h2>

  <TalentRail
    talents={talents}
    paused={hiringOpen}
    onOpenProfile={handleOpenTalentProfile}
  />
</div>

      </div>

      {/* Hiring modal */}
      <HiringModal
        isOpen={hiringOpen}
        onClose={() => setHiringOpen(false)}
        title="Talent"
      />

      {/* Public profile popup */}
      {openPublicProfileDialog && selectedCandidateId && (
        <ViewPublicProfile
          open={openPublicProfileDialog}
          selectedCandidateId={selectedCandidateId}
          onClose={handleCloseProfile}
        />
      )}
    </section>
  );
}















































// "use client";

// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import HeroMapImage from "@/public/Hero-map.png";
// import HeroMapGif from "@/assets/landingPage/images/Hero-gif-03.gif";

// import HiringModal from "@/components/forCompaniesPage/HiringForms";
// import ViewPublicProfile from "@/components/section/general/viewPublicProfile";
// import TalentCard, {
//   HeroTalent,
//   TalentPhoto,
// } from "@/components/shared/talentCard";
// import TypingAnimation from "./typingAnimation";
// import { ShimmerButton } from "@/components/shared/customShimmerButton";

// /**
//  * HeroExperience — HYI landing, first fold (v2)
//  * ---------------------------------------------------------------------------
//  *  - Full-page purple world map (centred, covers the whole hero)
//  *  - Active talent's photo sits in the CENTRE of the map at 70% opacity,
//  *    with pulsing "location dot" rings + orbit animation
//  *  - Left: your TypingAnimation + CTA + role chips (unchanged behaviour)
//  *  - Right: glass container (40% width on desktop) with hiring roles that
//  *    scroll bottom -> top continuously
//  *  - Bottom: Toptal-style talent carousel (centre card = active)
//  *  - Mobile: everything stacks (text -> photo stage -> glass box -> carousel)
//  */

// /* -------------------------------------------------------------------------- */
// /* content                                                                     */
// /* -------------------------------------------------------------------------- */

// type ModeId = "talent" | "tech" | "cyber" | "ai";

// interface Mode {
//   id: ModeId;
//   label: string;
//   panelTitle: string;
//   primary: { label: string; href?: string }; // no href => opens hiring modal
//   secondary: { label: string; href: string };
//   chips: string[];
// }

// const MODES: Mode[] = [
//   {
//     id: "talent",
//     label: "Hire Talent",
//     panelTitle: "Hiring global talent",
//     primary: { label: "Hire Talent" },
//     secondary: { label: "Join as talent", href: "/get-hired" },
//     chips: [
//       "Software Engineer",
//       "AI / ML Engineer",
//       "Virtual Assistant",
//       "UI/UX Designer",
//       "Data Analyst",
//       "DevOps Engineer",
//       "QA Engineer",
//       "Security Analyst",
//     ],
//   },
//   {
//     id: "tech",
//     label: "Technology Solutions",
//     panelTitle: "Technology solutions",
//     primary: { label: "Explore solutions", href: "/technology-solutions" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "Web Apps",
//       "Mobile Apps",
//       "Cloud",
//       "API Integration",
//       "DevOps",
//       "QA Testing",
//       "A/B Testing",
//       "Maintenance",
//     ],
//   },
//   {
//     id: "cyber",
//     label: "Cyber Security",
//     panelTitle: "Cyber security",
//     primary: { label: "Secure my business", href: "/cyber-security" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "Pen Testing",
//       "Monitoring",
//       "Compliance",
//       "Cloud Security",
//       "Incident Response",
//       "Audits",
//     ],
//   },
//   {
//     id: "ai",
//     label: "AI Mastery",
//     panelTitle: "AI mastery",
//     primary: { label: "Explore AI solutions", href: "/integrate-AI" },
//     secondary: { label: "Talk to an expert", href: "/talk-to-our-expert" },
//     chips: [
//       "AI Integration",
//       "Automation",
//       "AI Agents",
//       "Prompt Engineering",
//       "Team Training",
//       "Data & Analytics",
//     ],
//   },
// ];

// /** Rows that scroll inside the glass box (talent mode). Edit freely. */
// const HIRING_ROWS = [
//   { role: "Software Engineer", skills: "React · Node · Python", where: "Worldwide" },
//   { role: "AI / ML Engineer", skills: "LLMs · MLOps · Vision", where: "Worldwide" },
//   { role: "Virtual Assistant", skills: "Admin · Support · Ops", where: "Worldwide" },
//   { role: "UI/UX Designer", skills: "Figma · Research · Design systems", where: "Worldwide" },
//   { role: "Data Analyst", skills: "SQL · BI · Python", where: "Worldwide" },
//   { role: "DevOps Engineer", skills: "AWS · Docker · CI/CD", where: "Worldwide" },
//   { role: "QA Engineer", skills: "Automation · Manual · API", where: "Worldwide" },
//   { role: "Security Analyst", skills: "Pen testing · SOC · Audits", where: "Worldwide" },
//   { role: "Mobile Developer", skills: "Flutter · React Native · Swift", where: "Worldwide" },
//   { role: "Cloud Engineer", skills: "AWS · Azure · GCP", where: "Worldwide" },
// ];

// const TRUST = [
//   { title: "Pre-vetted talent", text: "Every profile is verified before you see it.", icon: "shield" },
//   { title: "AI-powered matching", text: "Smart, secure and precise hiring.", icon: "spark" },
//   { title: "24/7 dedicated support", text: "Easy communication and productivity reports.", icon: "clock" },
//   { title: "Global workforce", text: "World-class professionals, anywhere.", icon: "globe" },
// ] as const;

// /* -------------------------------------------------------------------------- */
// /* helpers + icons                                                             */
// /* -------------------------------------------------------------------------- */

// const Icon = ({
//   children,
//   className = "h-5 w-5",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <svg
//     viewBox="0 0 24 24"
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     {children}
//   </svg>
// );

// const ArrowRight = ({ className }: { className?: string }) => (
//   <Icon className={className ?? "h-4 w-4"}>
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </Icon>
// );

// const TrustIcon = ({ name }: { name: (typeof TRUST)[number]["icon"] }) => {
//   switch (name) {
//     case "shield":
//       return (
//         <Icon>
//           <path d="M12 2.5 20 6v5.5c0 5-3.3 8.8-8 10-4.7-1.2-8-5-8-10V6l8-3.5Z" />
//           <path d="m8.5 12 2.5 2.5 4.5-5" />
//         </Icon>
//       );
//     case "spark":
//       return (
//         <Icon>
//           <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
//         </Icon>
//       );
//     case "clock":
//       return (
//         <Icon>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M12 7v5l3 2" />
//         </Icon>
//       );
//     default:
//       return (
//         <Icon>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
//         </Icon>
//       );
//   }
// };

// const prefersReducedMotion = () =>
//   typeof window !== "undefined" &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// /* -------------------------------------------------------------------------- */
// /* centre stage: active talent photo on the map                                */
// /* -------------------------------------------------------------------------- */



// function CenterStage({
//   talent,
//   onOpen,
//   label,
// }: {
//   talent?: HeroTalent;
//   onOpen: () => void;
//   label: string;
// }) {
//   if (!talent) return null;

//   return (
//     <div className="pointer-events-none relative z-[5] flex h-[220px] w-full items-end justify-center sm:h-[260px] lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-[300px] lg:z-[20] lg:h-[300px]">
//       <div
//         key={talent.id}
//         className="hx-center-talent relative h-[clamp(180px,22vw,300px)] w-[clamp(150px,18vw,240px)]"
//       >
//         {/* Purple ambient glow */}
//         <div className="absolute inset-x-4 bottom-6 top-6 bg-violet-600/20 blur-[50px]" />

//         {/* Talent portrait */}
//         <div
//           className="absolute inset-0 overflow-hidden"
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
//             maskImage:
//               "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
//           }}
//         >
//           <TalentPhoto
//             t={talent}
//             sizes="(max-width: 768px) 75vw, 240px"
//             textClass="text-6xl"
//           />
//         </div>

//         {/* Soft lighting */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/15 via-transparent to-white/[0.05]" />
//       </div>
//     </div>
//   );
// }



// /* -------------------------------------------------------------------------- */
// /* glass container: rows move bottom -> top                                    */
// /* -------------------------------------------------------------------------- */

// interface Row {
//   role: string;
//   skills: string;
//   where: string;
// }

// function GlassHiringPanel({
//   title,
//   rows,
//   onHire,
//   ctaLabel,
//   ctaHref,
// }: {
//   title: string;
//   rows: Row[];
//   onHire: () => void;
//   ctaLabel: string;
//   ctaHref?: string;
// }) {
//   const duration = Math.max(20, rows.length * 4.5);

//   const list = (copy: number) => (
//     <div key={copy} className="flex flex-col gap-3 pb-3" aria-hidden={copy === 1}>
//       {rows.map((r) => (
//         <div
//           key={`${copy}-${r.role}`}
//           className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-3 transition-colors hover:border-violet-300/40 hover:bg-white/[0.09]"
//         >
//           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200 ring-1 ring-violet-300/30">
//             <Icon className="h-5 w-5">
//               <circle cx="12" cy="8" r="3.5" />
//               <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
//             </Icon>
//           </span>
//           <div className="min-w-0 flex-1">
//             <p className="truncate text-[14.5px] font-semibold text-white">{r.role}</p>
//             <p className="truncate text-[12.5px] text-white/55">{r.skills}</p>
//           </div>
//           <div className="flex shrink-0 flex-col items-end gap-1">
//             <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-400/25">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//               Hiring
//             </span>
//             <span className="text-[11px] text-white/40">{r.where}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="relative z-10 w-full overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-4 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:p-5">
//       <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/30 blur-3xl" />

//       <div className="relative flex items-center justify-between gap-3">
//         <div className="min-w-0">
//           <p className="truncate text-[17px] font-semibold tracking-tight text-white">
//             {title}
//           </p>
//           <p className="mt-0.5 text-[12.5px] text-white/55">
//             Roles companies are hiring for right now
//           </p>
//         </div>
//         <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[12px] text-white/80">
//           <span className="relative flex h-2 w-2">
//             <span className="hx-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
//           </span>
//           Live
//         </span>
//       </div>

//       {/* scrolling viewport */}
//       <div
//         className="hx-viewport relative mt-4 h-[300px] overflow-hidden sm:h-[330px] lg:h-[340px]"
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
//           maskImage:
//             "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
//         }}
//       >
//         <div
//           className="hx-marquee"
//           style={{ animationDuration: `${duration}s` }}
//         >
//           {list(0)}
//           {list(1)}
//         </div>
//       </div>

//       {ctaHref ? (
//         <Link
//           href={ctaHref}
//           className="group relative mt-4 flex w-full items-center justify-between rounded-xl bg-violet-600/90 px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-violet-500"
//         >
//           {ctaLabel}
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </Link>
//       ) : (
//         <button
//           type="button"
//           onClick={onHire}
//           className="group relative mt-4 flex w-full items-center justify-between rounded-xl bg-violet-600/90 px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-violet-500"
//         >
//           {ctaLabel}
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </button>
//       )}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* talent rail (endless carousel, centre card = active)                        */
// /* -------------------------------------------------------------------------- */

// function TalentRail({
//   talents,
//   onActive,
//   onOpen,
//   paused,
// }: {
//   talents: HeroTalent[];
//   onActive: (i: number) => void;
//   onOpen: (t: HeroTalent) => void;
//   paused: boolean;
// }) {
//   const n = talents.length;
//   const copies = n >= 6 ? 3 : 5;
//   const mid = (copies - 1) / 2;

//   const [pos, setPos] = useState(mid * n);
//   const [animate, setAnimate] = useState(true);
//   const [wrapW, setWrapW] = useState(0);

//   const wrapRef = useRef<HTMLDivElement>(null);
//   const hovered = useRef(false);
//   const swipe = useRef({ x: 0, down: false, moved: false });

//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const ro = new ResizeObserver(() => setWrapW(el.clientWidth));
//     ro.observe(el);
//     setWrapW(el.clientWidth);
//     return () => ro.disconnect();
//   }, []);

//   const gap = 16;
//   const cardW =
//     wrapW === 0 ? 340 : wrapW < 520 ? Math.max(250, Math.min(320, wrapW - 72)) : 340;
//   const x = wrapW / 2 - cardW / 2 - pos * (cardW + gap);

//   const active = n ? pos % n : 0;
//   const items = useMemo(
//     () => Array.from({ length: copies * n }, (_, i) => talents[i % n]),
//     [copies, n, talents]
//   );

//   useEffect(() => {
//     onActive(active);
//   }, [active, onActive]);

//   const goBy = useCallback((d: number) => {
//     setAnimate(true);
//     setPos((p) => p + d);
//   }, []);

//   const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
//     if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
//     if (pos >= (mid + 1) * n) {
//       setAnimate(false);
//       setPos((p) => p - n);
//     } else if (pos < mid * n) {
//       setAnimate(false);
//       setPos((p) => p + n);
//     }
//   };

//   useEffect(() => {
//     if (animate) return;
//     const id = requestAnimationFrame(() =>
//       requestAnimationFrame(() => setAnimate(true))
//     );
//     return () => cancelAnimationFrame(id);
//   }, [animate]);

//   useEffect(() => {
//     if (n < 2 || paused || prefersReducedMotion()) return;
//     const id = window.setInterval(() => {
//       if (hovered.current || document.hidden) return;
//       goBy(1);
//     }, 5200);
//     return () => window.clearInterval(id);
//   }, [n, paused, goBy]);

//   const onKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowRight") {
//       e.preventDefault();
//       goBy(1);
//     }
//     if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       goBy(-1);
//     }
//   };

//   if (!n) return null;

//   return (
//     <div
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Verified talents"
//       className="relative"
//       onKeyDown={onKeyDown}
//     >
//       <div
//         ref={wrapRef}
//         className={`relative h-[150px] touch-pan-y select-none overflow-hidden transition-opacity duration-700 ${
//           wrapW ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//           maskImage:
//             "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//         }}
//         onPointerEnter={(e) => {
//           if (e.pointerType === "mouse") hovered.current = true;
//         }}
//         onPointerLeave={(e) => {
//           if (e.pointerType === "mouse") hovered.current = false;
//         }}
//         onPointerDown={(e) => {
//           swipe.current = { x: e.clientX, down: true, moved: false };
//         }}
//         onPointerUp={(e) => {
//           const s = swipe.current;
//           if (!s.down) return;
//           s.down = false;
//           const dx = e.clientX - s.x;
//           if (Math.abs(dx) > 45) {
//             s.moved = true;
//             goBy(dx < 0 ? 1 : -1);
//           }
//         }}
//         onPointerCancel={() => {
//           swipe.current.down = false;
//         }}
//         onClickCapture={(e) => {
//           if (swipe.current.moved) {
//             e.stopPropagation();
//             e.preventDefault();
//             swipe.current.moved = false;
//           }
//         }}
//       >
//         <div
//           className="absolute left-0 top-[9px] flex"
//           onTransitionEnd={onTransitionEnd}
//           style={{
//             gap,
//             transform: `translate3d(${x}px,0,0)`,
//             transition: animate
//               ? "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)"
//               : "none",
//             willChange: "transform",
//           }}
//         >
//           {items.map((t, i) => (
//             <TalentCard
//               key={`${t.id}-${i}`}
//               t={t}
//               width={cardW}
//               active={i === pos}
//               onClick={() => {
//                 if (i === pos) {
//                   if (!t.demo) onOpen(t);
//                 } else {
//                   setAnimate(true);
//                   setPos(i);
//                 }
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {n > 1 && (
//         <>
//           <button
//             type="button"
//             aria-label="Previous talent"
//             onClick={() => goBy(-1)}
//             className="absolute left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M15 5l-7 7 7 7" />
//             </Icon>
//           </button>
//           <button
//             type="button"
//             aria-label="Next talent"
//             onClick={() => goBy(1)}
//             className="absolute right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0916]/85 text-white backdrop-blur transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-600/30 sm:flex"
//           >
//             <Icon>
//               <path d="M9 5l7 7-7 7" />
//             </Icon>
//           </button>
//         </>
//       )}

//       {n > 1 && n <= 12 && (
//         <div
//           className="mt-4 flex items-center justify-center gap-2"
//           role="tablist"
//           aria-label="Choose talent"
//         >
//           {talents.map((t, i) => (
//             <button
//               key={t.id}
//               role="tab"
//               aria-selected={i === active}
//               aria-label={`Show ${t.name}`}
//               onClick={() => {
//                 setAnimate(true);
//                 setPos(mid * n + i);
//               }}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active ? "w-7 bg-violet-400" : "w-1.5 bg-white/25 hover:bg-white/45"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* hero                                                                        */
// /* -------------------------------------------------------------------------- */

// export default function HeroExperience({ talents }: { talents: HeroTalent[] }) {
//   const [modeId, setModeId] = useState<ModeId>("talent");
//   const [chipIdx, setChipIdx] = useState(0);
//   const [active, setActive] = useState(0);
//   const [hiringOpen, setHiringOpen] = useState(false);
//   const [profileId, setProfileId] = useState<string | null>(null);

//   const mode = MODES.find((m) => m.id === modeId) ?? MODES[0];
//   const current = talents[active] ?? talents[0];
//   const modalOpen = hiringOpen || !!profileId;
//   const isTalent = modeId === "talent";

//   const sectionRef = useRef<HTMLElement>(null);

//   // rows for the glass box
//   const rows: Row[] = useMemo(
//     () =>
//       isTalent
//         ? HIRING_ROWS
//         : mode.chips.map((c) => ({
//             role: c,
//             skills: "Expert-led delivery",
//             where: "Worldwide",
//           })),
//     [isTalent, mode]
//   );

//   // cycle highlighted chip
//   useEffect(() => {
//     setChipIdx(0);
//     if (prefersReducedMotion()) return;
//     const id = window.setInterval(
//       () => setChipIdx((i) => (i + 1) % mode.chips.length),
//       2200
//     );
//     return () => window.clearInterval(id);
//   }, [mode]);

//   // gentle parallax on the map (desktop only)
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el || prefersReducedMotion()) return;
//     if (!window.matchMedia("(min-width: 1024px)").matches) return;
//     let raf = 0;
//     const onMove = (e: PointerEvent) => {
//       if (raf) return;
//       raf = requestAnimationFrame(() => {
//         raf = 0;
//         const r = el.getBoundingClientRect();
//         el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
//         el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
//       });
//     };
//     el.addEventListener("pointermove", onMove);
//     return () => {
//       el.removeEventListener("pointermove", onMove);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   const openProfile = useCallback((t: HeroTalent) => {
//     if (!t.demo) setProfileId(t.id);
//   }, []);

//   const primaryClass =
//     "hx-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_44px_-14px_rgba(139,92,246,0.95)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300";

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate w-full overflow-hidden"
//       style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
//       aria-label="HYI — hire verified global talent"
//     >
//       <style>{`
//         @keyframes hx-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .hx-in { opacity: 0; animation: hx-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

//         /* centre photo: blur-to-sharp, scale up, settles at 70% opacity */
//         @keyframes hx-photo { 
//           0%   { opacity: 0; transform: scale(0.72); filter: blur(14px); }
//           60%  { opacity: 0.78; transform: scale(1.04); filter: blur(0); }
//           100% { opacity: 0.7; transform: scale(1); filter: blur(0); }
//         }
//         .hx-photo { animation: hx-photo 1.1s cubic-bezier(0.16, 1, 0.3, 1) both; }

//         @keyframes hx-chip { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
//         .hx-chip { animation: hx-chip 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }

//         @keyframes hx-ring { 0% { transform: scale(0.8); opacity: 0.9; } 100% { transform: scale(1.7); opacity: 0; } }
//         .hx-ring { animation: hx-ring 3.3s ease-out infinite; }

//         @keyframes hx-spin { to { transform: rotate(360deg); } }
//         .hx-spin { animation: hx-spin 22s linear infinite; }

//         @keyframes hx-ping { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(3); opacity: 0; } }
//         .hx-ping { animation: hx-ping 2.2s ease-out infinite; }

//         @keyframes hx-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
//         .hx-float { animation: hx-float 6s ease-in-out infinite; }

//         /* glass list: bottom -> top */
//         @keyframes hx-marquee { from { transform: translateY(0); } to { transform: translateY(-50%); } }
//         .hx-marquee { animation: hx-marquee 40s linear infinite; will-change: transform; }
//         .hx-viewport:hover .hx-marquee { animation-play-state: paused; }

//         .hx-btn::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
//           transform: translateX(-120%);
//           transition: transform 0.9s ease;
//         }
//         .hx-btn:hover::after { transform: translateX(120%); }

//         @media (prefers-reduced-motion: reduce) {
//           .hx-in, .hx-chip { animation: none; opacity: 1; transform: none; }
//           .hx-photo { animation: none; opacity: 0.7; }
//           .hx-ring, .hx-spin, .hx-ping, .hx-float { animation: none; }
//           .hx-marquee { animation: none; }
//           .hx-viewport { overflow-y: auto !important; }
//           .hx-btn::after { display: none; }
//         }
//       `}</style>

//       {/* ------------------------- full-page map backdrop ------------------------- */}

// <div
//   className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#05030a]"
//   aria-hidden="true"
// >
//   {/* Large map shifted toward top-left */}
//   <div
//     className="absolute -left-[12%] -top-[0%] h-[56%] w-[41%] lg:w-[68%]"
//     style={{
//       transform:
//         "translate3d(calc(var(--mx) * -8px), calc(var(--my) * -6px), 0) scale(1.08)",
//       transformOrigin: "top left",
//       transition: "transform 0.5s ease-out",
//     }}
//   >
//     <Image
//       src={HeroMapImage}
//       alt=""
//       fill
//       priority
//       sizes="80vw"
//       className="object-cover object-center opacity-100"
//     />

//     <Image
//       src={HeroMapGif}
//       alt=""
//       fill
//       unoptimized
//       sizes="80vw"
//       className="hidden object-cover object-center opacity-100 lg:block"
//     />
//   </div>

//   {/* Purple glow */}
//   {/* <div className="absolute left-[35%] top-[30%] h-[620px] w-[920px] max-w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_68%)] blur-3xl" />


//   <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/80 lg:from-black/40" />
//   <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" /> */}
// </div>


//       <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
//         {/* mode switch */}
//         {/* <div
//           className="hx-in flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-4"
//           style={{ animationDelay: "40ms" }}
//         >
//           <span className="shrink-0 text-[13px] font-medium text-white/55">
//             I&apos;m looking for
//           </span>
//           <div
//             role="tablist"
//             aria-label="What are you looking for?"
//             className="grid w-full max-w-[420px] grid-cols-2 gap-1.5 rounded-[24px] border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur sm:flex sm:w-auto sm:max-w-none sm:items-center sm:rounded-full"
//           >
//             {MODES.map((m) => (
//               <button
//                 key={m.id}
//                 role="tab"
//                 aria-selected={m.id === modeId}
//                 onClick={() => setModeId(m.id)}
//                 className={`rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-300 sm:px-4 sm:text-[13.5px] ${
//                   m.id === modeId
//                     ? "bg-violet-600 text-white shadow-[0_8px_24px_-8px_rgba(139,92,246,0.9)]"
//                     : "text-white/65 hover:bg-white/[0.06] hover:text-white"
//                 }`}
//               >
//                 {m.label}
//               </button>
//             ))}
//           </div>
//         </div> */}

//         {/* ------------------------------ top grid ------------------------------ */}
//         <div className="relative mt-10 grid items-center gap-6 sm:mt-14 lg:mt-16 lg:min-h-[520px] lg:grid-cols-[1fr_40%] lg:gap-8">
//           {/* left: typing text + CTA + chips */}
//           <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
//             <div key={mode.id} className="w-full">
//               <div className="mx-auto flex min-h-[124px] w-full max-w-[450px] flex-col gap-3 overflow-hidden md:min-h-[140px] lg:mx-0">
//                 <TypingAnimation />
//               </div>

//               <div
//                 className="hx-in mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
//                 style={{ animationDelay: "230ms" }}
//               >
//                 {mode.primary.href ? (
//                   <Link href={mode.primary.href} className={primaryClass}>
//                     {mode.primary.label}
//                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </Link>
//                 ) : (
//                   <ShimmerButton className="px-7" onClick={() => setHiringOpen(true)}>
//                     {mode.primary.label}
//                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </ShimmerButton>
//                 )}

//                 <Link
//                   href={mode.secondary.href}
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-[15px] font-medium text-white backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-white/[0.08]"
//                 >
//                   {mode.secondary.label}
//                 </Link>
//               </div>
//             </div>

//             {/* <div className="hx-in mt-5 w-full" style={{ animationDelay: "320ms" }}>
//               <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
//                 {mode.chips.map((c, i) => (
//                   <li
//                     key={c}
//                     className={`rounded-full border px-3 py-1.5 text-[12.5px] backdrop-blur transition-all duration-500 sm:px-3.5 sm:text-[13px] ${
//                       i === chipIdx
//                         ? "border-violet-400/70 bg-violet-500/20 text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.8)]"
//                         : "border-white/10 bg-black/20 text-white/60"
//                     }`}
//                   >
//                     {c}
//                   </li>
//                 ))}
//               </ul>
//             </div> */}
//           </div>

//           {/* centre: active talent on the map (absolute on desktop, in-flow on mobile) */}
//           <CenterStage
//             talent={isTalent ? current : undefined}
//             label={mode.label}
//             onOpen={() => current && openProfile(current)}
//           />

//           {/* right: glass container */}
//           <div className="relative z-10 w-full">
//             <div className="hx-float mx-auto w-full max-w-[520px] lg:max-w-none">
//               <GlassHiringPanel
//                 title={mode.panelTitle}
//                 rows={rows}
//                 onHire={() => setHiringOpen(true)}
//                 ctaLabel={mode.primary.label}
//                 ctaHref={mode.primary.href}
//               />
//             </div>
//           </div>
//         </div>

//         {/* --------------------------- talent carousel --------------------------- */}
//         <div className="relative pb-8 pt-8 lg:pt-12">
//           <TalentRail
//             talents={talents}
//             onActive={setActive}
//             onOpen={openProfile}
//             paused={modalOpen}
//           />
//         </div>

//       </div>

//       {/* ------------------------------- modals ------------------------------- */}
//       <HiringModal
//         isOpen={hiringOpen}
//         onClose={() => setHiringOpen(false)}
//         title={"Talent"}
//       />

//       {profileId && (
//         <ViewPublicProfile
//           open={!!profileId}
//           selectedCandidateId={profileId}
//           onClose={() => setProfileId(null)}
//         />
//       )}
//     </section>
//   );
// }












































