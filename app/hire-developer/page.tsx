// // "use client";

import HireDeveloperSection from "@/components/section/hire-developer/DevloperSection";

// // import { useEffect, useMemo, useState } from "react";
// // import Link from "next/link";
// // import { motion, AnimatePresence, type Variants } from "framer-motion";
// // import Header from "@/components/section/general/header";
// // import Footer from "@/components/section/general/footer";

// // import {
// //   ArrowRight,
// //   Blocks,
// //   Boxes,
// //   BrainCircuit,
// //   Building2,
// //   ChevronRight,
// //   Cloud,
// //   Code2,
// //   Cpu,
// //   Database,
// //   Eye,
// //   Fingerprint,
// //   Gamepad2,
// //   GitBranch,
// //   Glasses,
// //   Globe,
// //   HardDrive,
// //   Layers3,
// //   LineChart,
// //   Link2,
// //   LockKeyhole,
// //   MessageSquareText,
// //   Palette,
// //   PenTool,
// //   Search,
// //   Server,
// //   ShieldCheck,
// //   ShoppingBag,
// //   Smartphone,
// //   TabletSmartphone,
// //   TestTube2,
// //   UsersRound,
// // } from "lucide-react";

// // /* -------------------------------------------------------------------------- */
// // /*                                    DATA                                    */
// // /* -------------------------------------------------------------------------- */

// // type Role = {
// //   slug: string;
// //   categoryId: string;
// //   icon: typeof Code2;
// //   title: string;
// //   skills: string[];
// //   description: string;
// // };

// // const categories = [
// //   { id: "web", label: "Web" },
// //   { id: "mobile", label: "Mobile" },
// //   { id: "ai-data", label: "AI & Data" },
// //   { id: "cloud", label: "Cloud & Infra" },
// //   { id: "design", label: "Design & Product" },
// //   { id: "quality", label: "Quality & Security" },
// //   { id: "specialized", label: "Specialized" },
// // ];

// // const roles: Role[] = [
// //   { slug: "frontend-developer", categoryId: "web", icon: Code2, title: "Frontend Developer", skills: ["React", "Next.js", "TypeScript"], description: "Interfaces that render fast and hold up under real traffic." },
// //   { slug: "backend-developer", categoryId: "web", icon: Server, title: "Backend Developer", skills: ["Node.js", "Python", "Java"], description: "APIs and services your product logic actually runs on." },
// //   { slug: "fullstack-developer", categoryId: "web", icon: Layers3, title: "Full-Stack Developer", skills: ["MERN", "Next.js", "PostgreSQL"], description: "One engineer, database to screen, no handoff gaps." },
// //   { slug: "wordpress-developer", categoryId: "web", icon: Globe, title: "WordPress Developer", skills: ["WordPress", "PHP", "WooCommerce"], description: "Custom themes and plugins, built to be maintained." },
// //   { slug: "shopify-developer", categoryId: "web", icon: ShoppingBag, title: "Shopify Developer", skills: ["Shopify", "Liquid", "Hydrogen"], description: "Storefronts and checkout flows that convert." },
// //   { slug: "ios-developer", categoryId: "mobile", icon: Smartphone, title: "iOS Developer", skills: ["Swift", "SwiftUI"], description: "Native iPhone and iPad engineering, done properly." },
// //   { slug: "android-developer", categoryId: "mobile", icon: TabletSmartphone, title: "Android Developer", skills: ["Kotlin", "Jetpack Compose"], description: "Native Android across every device class." },
// //   { slug: "react-native-developer", categoryId: "mobile", icon: Blocks, title: "React Native Developer", skills: ["React Native", "TypeScript"], description: "One codebase, native feel, both platforms at once." },
// //   { slug: "flutter-developer", categoryId: "mobile", icon: Cpu, title: "Flutter Developer", skills: ["Flutter", "Dart"], description: "Pixel-exact custom UI compiled to native speed." },
// //   { slug: "ai-ml-engineer", categoryId: "ai-data", icon: BrainCircuit, title: "AI / ML Engineer", skills: ["Python", "LLMs", "PyTorch"], description: "Model integration, fine-tuning and inference that ships." },
// //   { slug: "data-engineer", categoryId: "ai-data", icon: Database, title: "Data Engineer", skills: ["SQL", "Spark", "Airflow"], description: "Pipelines that turn raw data into something usable." },
// //   { slug: "data-scientist", categoryId: "ai-data", icon: LineChart, title: "Data Scientist", skills: ["Python", "Statistics"], description: "Answers grounded in your actual product data." },
// //   { slug: "computer-vision-engineer", categoryId: "ai-data", icon: Eye, title: "Computer Vision Engineer", skills: ["OpenCV", "PyTorch"], description: "Systems that read images, video and motion." },
// //   { slug: "nlp-engineer", categoryId: "ai-data", icon: MessageSquareText, title: "NLP Engineer", skills: ["Transformers", "spaCy"], description: "Language understanding, search and chat systems." },
// //   { slug: "cloud-architect", categoryId: "cloud", icon: Cloud, title: "Cloud Architect", skills: ["AWS", "Azure", "GCP"], description: "Infrastructure that scales without 3am surprises." },
// //   { slug: "devops-engineer", categoryId: "cloud", icon: GitBranch, title: "DevOps Engineer", skills: ["Docker", "Kubernetes", "CI/CD"], description: "Pipelines that let you ship safely, and often." },
// //   { slug: "sre", categoryId: "cloud", icon: HardDrive, title: "Site Reliability Engineer", skills: ["Monitoring", "Incident Response"], description: "Uptime, observability, systems that recover fast." },
// //   { slug: "database-administrator", categoryId: "cloud", icon: Database, title: "Database Administrator", skills: ["PostgreSQL", "MongoDB", "Redis"], description: "Schema, performance tuning, backups that hold." },
// //   { slug: "ui-ux-designer", categoryId: "design", icon: PenTool, title: "UI / UX Designer", skills: ["Figma", "Prototyping"], description: "Interfaces designed around how people actually use them." },
// //   { slug: "product-designer", categoryId: "design", icon: Palette, title: "Product Designer", skills: ["Design Systems", "Research"], description: "Design ownership from first sketch to shipped feature." },
// //   { slug: "technical-project-manager", categoryId: "design", icon: UsersRound, title: "Technical Project Manager", skills: ["Delivery", "Sprint Planning"], description: "One accountable person between kickoff and launch." },
// //   { slug: "qa-engineer", categoryId: "quality", icon: TestTube2, title: "QA / Test Engineer", skills: ["Manual", "Automation"], description: "Coverage across devices, OS versions, edge cases." },
// //   { slug: "security-engineer", categoryId: "quality", icon: ShieldCheck, title: "Security Engineer", skills: ["AppSec", "Threat Modeling"], description: "Security built into the architecture, not bolted on." },
// //   { slug: "penetration-tester", categoryId: "quality", icon: Fingerprint, title: "Penetration Tester", skills: ["Audits", "Vulnerability Testing"], description: "Finds the holes before someone else does." },
// //   { slug: "iam-engineer", categoryId: "quality", icon: LockKeyhole, title: "IAM Engineer", skills: ["Auth", "SSO", "RBAC"], description: "Authentication and access, correct from day one." },
// //   { slug: "blockchain-developer", categoryId: "specialized", icon: Link2, title: "Blockchain Developer", skills: ["Solidity", "Web3"], description: "On-chain logic and decentralized applications." },
// //   { slug: "game-developer", categoryId: "specialized", icon: Gamepad2, title: "Game Developer", skills: ["Unity", "Unreal Engine"], description: "Mobile and cross-platform game experiences." },
// //   { slug: "ar-vr-developer", categoryId: "specialized", icon: Glasses, title: "AR / VR Developer", skills: ["ARKit", "ARCore"], description: "Immersive experiences for headsets and mobile AR." },
// //   { slug: "embedded-iot-developer", categoryId: "specialized", icon: Cpu, title: "Embedded / IoT Developer", skills: ["C/C++", "RTOS"], description: "Firmware and connected-device engineering." },
// //   { slug: "salesforce-developer", categoryId: "specialized", icon: Building2, title: "Salesforce Developer", skills: ["Apex", "LWC"], description: "Custom CRM workflows on the Salesforce platform." },
// //   { slug: "sap-developer", categoryId: "specialized", icon: Boxes, title: "SAP Developer", skills: ["ABAP", "S/4HANA"], description: "Enterprise resource planning, customized to fit." },
// // ];

// // const steps = [
// //   { id: "01", title: "Share the requirement", description: "Stack, seniority, timeline, budget — whatever you know so far." },
// //   { id: "02", title: "Get a shortlist", description: "Matched profiles back within days, not weeks of back-and-forth." },
// //   { id: "03", title: "Interview directly", description: "Talk to the people themselves before anything is confirmed." },
// //   { id: "04", title: "Start working together", description: "Onboard and get moving, on your tools and your timeline." },
// // ];

// // const engagementModels = [
// //   {
// //     tag: "Per role",
// //     title: "Dedicated Developer",
// //     description: "One engineer, embedded in your team, for as long as the roadmap needs them.",
// //     points: ["Works inside your existing team", "Scale up or down monthly", "Direct daily collaboration"],
// //   },
// //   {
// //     tag: "Per team",
// //     title: "Dedicated Team",
// //     description: "A full cross-functional unit assembled around a product roadmap.",
// //     points: ["Frontend, backend, QA together", "Single point of coordination", "Built for sustained delivery"],
// //   },
// //   {
// //     tag: "Per project",
// //     title: "Project Based",
// //     description: "Fixed scope, fixed milestones — for a defined piece of work.",
// //     points: ["Clear deliverables upfront", "Specialist expertise on demand", "No long-term commitment"],
// //   },
// // ];

// // /* -------------------------------------------------------------------------- */
// // /*                               MOTION VARIANTS                              */
// // /* -------------------------------------------------------------------------- */

// // const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

// // const listItem: Variants = {
// //   hidden: { opacity: 0, y: 8 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
// //   exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
// // };

// // /* -------------------------------------------------------------------------- */
// // /*                              TERMINAL HERO HOOK                            */
// // /* -------------------------------------------------------------------------- */

// // const COMMAND = 'hyi hire --stack next.js --role senior';
// // const OUTPUT_LINES = [
// //   "resolving engineering network...",
// //   "12 senior Next.js developers matched",
// //   "avg. response time: 2 business days",
// //   "ready to interview →",
// // ];

// // function useTerminalTyping() {
// //   const [typed, setTyped] = useState("");
// //   const [visibleLines, setVisibleLines] = useState(0);

// //   useEffect(() => {
// //     let i = 0;
// //     const typeInterval = setInterval(() => {
// //       i += 1;
// //       setTyped(COMMAND.slice(0, i));
// //       if (i >= COMMAND.length) {
// //         clearInterval(typeInterval);
// //         let line = 0;
// //         const lineInterval = setInterval(() => {
// //           line += 1;
// //           setVisibleLines(line);
// //           if (line >= OUTPUT_LINES.length) clearInterval(lineInterval);
// //         }, 380);
// //       }
// //     }, 38);
// //     return () => clearInterval(typeInterval);
// //   }, []);

// //   return { typed, visibleLines, done: typed.length === COMMAND.length };
// // }

// // /* -------------------------------------------------------------------------- */
// // /*                                    PAGE                                    */
// // /* -------------------------------------------------------------------------- */

// // export default function HireDeveloperPage() {
// //   const { typed, visibleLines, done } = useTerminalTyping();

// //   const [activeCategory, setActiveCategory] = useState<string>("all");
// //   const [query, setQuery] = useState("");

// //   const filteredRoles = useMemo(() => {
// //     const q = query.trim().toLowerCase();
// //     return roles.filter((role) => {
// //       const inCategory = activeCategory === "all" || role.categoryId === activeCategory;
// //       if (!inCategory) return false;
// //       if (!q) return true;
// //       return (
// //         role.title.toLowerCase().includes(q) ||
// //         role.description.toLowerCase().includes(q) ||
// //         role.skills.some((s) => s.toLowerCase().includes(q))
// //       );
// //     });
// //   }, [activeCategory, query]);

// //   const countFor = (id: string) =>
// //     id === "all" ? roles.length : roles.filter((r) => r.categoryId === id).length;

// //   return (
// //     <main className="min-h-screen bg-[#0A0B0D] text-[#EDEDEA]">
// //       <style jsx global>{`
// //         @keyframes caret-blink {
// //           0%, 45% { opacity: 1; }
// //           50%, 95% { opacity: 0; }
// //           100% { opacity: 1; }
// //         }
// //         .caret {
// //           animation: caret-blink 1s step-end infinite;
// //         }
// //       `}</style>

   

// //       {/* ================================================================ */}
// //       {/* HERO                                                              */}
// //       {/* ================================================================ */}
// //       <section className="border-b border-white/[0.08]">
// //         <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
// //           <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-10">
// //             {/* Left: copy */}
// //             <div>
// //               <p className="font-mono text-[13px] text-[#FFB454]">// hire</p>

// //               <h1 className="mt-5 max-w-[560px] text-[38px] font-bold leading-[1.08] tracking-tight sm:text-[48px] lg:text-[56px]">
// //                 Every kind of developer, in one place to search.
// //               </h1>

// //               <p className="mt-6 max-w-[480px] text-[16px] leading-7 text-[#EDEDEA]/55">
// //                 iOS to infrastructure, machine learning to QA — find and hire
// //                 the specific engineer your project needs, matched and ready
// //                 to interview in days.
// //               </p>

// //               <div className="mt-9 flex flex-wrap items-center gap-4">
// //                 <Link
// //                   href="/talk-to-our-expert"
// //                   className="inline-flex h-12 items-center justify-center rounded-lg bg-[#FFB454] px-6 text-[14px] font-semibold text-[#0A0B0D] transition hover:bg-[#ffc57a]"
// //                 >
// //                   Start hiring
// //                 </Link>

// //                 <a
// //                   href="#directory"
// //                   className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-6 text-[14px] font-medium text-[#EDEDEA]/75 transition hover:border-white/25 hover:text-white"
// //                 >
// //                   Browse all roles
// //                   <ChevronRight size={15} />
// //                 </a>
// //               </div>

// //               <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] text-[#EDEDEA]/35">
// //                 <span>{roles.length} roles</span>
// //                 <span>{categories.length} categories</span>
// //                 <span>3 engagement models</span>
// //               </div>
// //             </div>

// //             {/* Right: terminal */}
// //             <div className="overflow-hidden rounded-xl border border-white/[0.10] bg-[#0E0F11] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
// //               <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-[#131417] px-4 py-3">
// //                 <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
// //                 <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
// //                 <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
// //                 <span className="ml-3 font-mono text-[11px] text-white/30">
// //                   hyi — zsh
// //                 </span>
// //               </div>

// //               <div className="min-h-[260px] px-5 py-6 font-mono text-[13px] leading-7 sm:text-[14px]">
// //                 <div className="flex flex-wrap items-center gap-2 text-white/85">
// //                   <span className="text-[#7FD858]">~/hyi</span>
// //                   <span className="text-white/30">$</span>
// //                   <span>{typed}</span>
// //                   <span className="caret inline-block h-4 w-[7px] translate-y-[1px] bg-[#FFB454]" />
// //                 </div>

// //                 <div className="mt-4 space-y-2">
// //                   {OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
// //                     <motion.div
// //                       key={line}
// //                       initial={{ opacity: 0, y: 4 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.25 }}
// //                       className={
// //                         i === OUTPUT_LINES.length - 1
// //                           ? "text-[#FFB454]"
// //                           : "text-white/45"
// //                       }
// //                     >
// //                       {i < OUTPUT_LINES.length - 1 ? "✓ " : "› "}
// //                       {line}
// //                     </motion.div>
// //                   ))}
// //                 </div>

// //                 {done && visibleLines >= OUTPUT_LINES.length && (
// //                   <motion.div
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 0.3 }}
// //                     className="mt-6 flex items-center gap-2 text-white/30"
// //                   >
// //                     <span className="text-[#7FD858]">~/hyi</span>
// //                     <span className="text-white/30">$</span>
// //                     <span className="caret inline-block h-4 w-[7px] bg-white/40" />
// //                   </motion.div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================================================================ */}
// //       {/* DIRECTORY                                                         */}
// //       {/* ================================================================ */}
// //       <section id="directory" className="border-b border-white/[0.08]">
// //         <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
// //           <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
// //             <div>
// //               <p className="font-mono text-[13px] text-[#FFB454]">// directory</p>
// //               <h2 className="mt-4 text-[30px] font-bold tracking-tight sm:text-[38px]">
// //                 Find your developer
// //               </h2>
// //               <p className="mt-3 max-w-[480px] text-[15px] leading-7 text-[#EDEDEA]/50">
// //                 Filter by discipline or search directly — every role below is
// //                 available to hire on its own or as part of a team.
// //               </p>
// //             </div>

// //             <div className="relative w-full max-w-[320px]">
// //               <Search
// //                 size={15}
// //                 className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
// //               />
// //               <input
// //                 value={query}
// //                 onChange={(e) => setQuery(e.target.value)}
// //                 placeholder='grep -i "role or skill"'
// //                 className="h-11 w-full rounded-lg border border-white/[0.12] bg-white/[0.03] pl-10 pr-4 font-mono text-[13px] text-white placeholder:text-white/25 outline-none transition focus:border-[#FFB454]/50 focus:bg-white/[0.05]"
// //               />
// //             </div>
// //           </div>

// //           <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
// //             {/* Mobile category chips */}
// //             <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
// //               <CategoryChip
// //                 active={activeCategory === "all"}
// //                 onClick={() => setActiveCategory("all")}
// //                 label="All"
// //                 count={countFor("all")}
// //               />
// //               {categories.map((cat) => (
// //                 <CategoryChip
// //                   key={cat.id}
// //                   active={activeCategory === cat.id}
// //                   onClick={() => setActiveCategory(cat.id)}
// //                   label={cat.label}
// //                   count={countFor(cat.id)}
// //                 />
// //               ))}
// //             </div>

// //             {/* Desktop sidebar */}
// //             <div className="hidden lg:block">
// //               <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-white/25">
// //                 directories/
// //               </p>
// //               <nav className="space-y-0.5">
// //                 <SidebarRow
// //                   active={activeCategory === "all"}
// //                   onClick={() => setActiveCategory("all")}
// //                   label="all/"
// //                   count={countFor("all")}
// //                 />
// //                 {categories.map((cat) => (
// //                   <SidebarRow
// //                     key={cat.id}
// //                     active={activeCategory === cat.id}
// //                     onClick={() => setActiveCategory(cat.id)}
// //                     label={`${cat.id}/`}
// //                     displayLabel={cat.label}
// //                     count={countFor(cat.id)}
// //                   />
// //                 ))}
// //               </nav>
// //             </div>

// //             {/* Role list */}
// //             <div>
// //               <p className="mb-4 font-mono text-[12px] text-white/30">
// //                 showing {filteredRoles.length} of {roles.length}
// //               </p>

// //               <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
// //                 <AnimatePresence mode="popLayout" initial={false}>
// //                   {filteredRoles.map((role) => {
// //                     const Icon = role.icon;
// //                     return (
// //                       <motion.div
// //                         key={role.slug}
// //                         layout
// //                         variants={listItem}
// //                         initial="hidden"
// //                         animate="visible"
// //                         exit="exit"
// //                         className="group flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
// //                       >
// //                         <div className="flex items-start gap-4">
// //                           <Icon
// //                             size={17}
// //                             className="mt-1 shrink-0 text-white/35 transition group-hover:text-[#FFB454]"
// //                           />
// //                           <div>
// //                             <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
// //                               <h3 className="text-[15px] font-semibold text-white">
// //                                 {role.title}
// //                               </h3>
// //                               <span className="font-mono text-[11px] text-white/25">
// //                                 @hyi/{role.slug}
// //                               </span>
// //                             </div>

// //                             <p className="mt-1 max-w-[520px] text-[13px] leading-6 text-white/45">
// //                               {role.description}
// //                             </p>

// //                             <div className="mt-2 flex flex-wrap gap-1.5">
// //                               {role.skills.map((skill) => (
// //                                 <span
// //                                   key={skill}
// //                                   className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/40"
// //                                 >
// //                                   {skill}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <button className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-white/[0.12] px-4 py-2 font-mono text-[12px] text-white/60 transition group-hover:border-[#FFB454]/40 group-hover:text-[#FFB454] sm:self-center">
// //                           hire
// //                           <ArrowRight size={12} />
// //                         </button>
// //                       </motion.div>
// //                     );
// //                   })}
// //                 </AnimatePresence>

// //                 {filteredRoles.length === 0 && (
// //                   <div className="py-14 text-center">
// //                     <p className="text-[14px] text-white/50">
// //                       No roles match &ldquo;{query}&rdquo;.
// //                     </p>
// //                     <button
// //                       onClick={() => {
// //                         setQuery("");
// //                         setActiveCategory("all");
// //                       }}
// //                       className="mt-3 font-mono text-[12px] text-[#FFB454] hover:underline"
// //                     >
// //                       clear filters
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-white/[0.10] bg-white/[0.02] p-6 sm:flex-row sm:items-center">
// //                 <p className="text-[14px] text-white/55">
// //                   Don&apos;t see the exact role you need?
// //                 </p>
// //                 <Link
// //                   href="/talk-to-our-expert"
// //                   className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/[0.06] px-5 text-[13px] font-medium text-white transition hover:bg-white/[0.10]"
// //                 >
// //                   Tell us what you&apos;re building
// //                   <ArrowRight size={13} />
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================================================================ */}
// //       {/* HOW IT WORKS                                                      */}
// //       {/* ================================================================ */}
// //       <section className="border-b border-white/[0.08]">
// //         <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
// //           <p className="font-mono text-[13px] text-[#FFB454]">// process</p>
// //           <h2 className="mt-4 text-[30px] font-bold tracking-tight sm:text-[38px]">
// //             How hiring actually works
// //           </h2>

// //           <div className="mt-12 grid gap-0 lg:grid-cols-4 lg:gap-6">
// //             {steps.map((step, i) => (
// //               <div
// //                 key={step.id}
// //                 className={`relative py-6 lg:py-0 ${
// //                   i !== 0 ? "border-t border-white/[0.08] lg:border-t-0 lg:border-l lg:pl-6" : ""
// //                 }`}
// //               >
// //                 <span className="font-mono text-[12px] text-white/30">
// //                   {step.id}
// //                 </span>
// //                 <h3 className="mt-3 text-[17px] font-semibold text-white">
// //                   {step.title}
// //                 </h3>
// //                 <p className="mt-2 text-[13px] leading-6 text-white/45">
// //                   {step.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================================================================ */}
// //       {/* ENGAGEMENT MODELS                                                 */}
// //       {/* ================================================================ */}
// //       <section className="border-b border-white/[0.08]">
// //         <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
// //           <p className="font-mono text-[13px] text-[#FFB454]">// engagement</p>
// //           <h2 className="mt-4 text-[30px] font-bold tracking-tight sm:text-[38px]">
// //             Pick how you want to work
// //           </h2>

// //           <div className="mt-12 grid gap-4 lg:grid-cols-3">
// //             {engagementModels.map((model) => (
// //               <div
// //                 key={model.title}
// //                 className="flex flex-col rounded-xl border border-white/[0.10] bg-white/[0.02] p-7"
// //               >
// //                 <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFB454]">
// //                   {model.tag}
// //                 </span>

// //                 <h3 className="mt-4 text-[20px] font-semibold text-white">
// //                   {model.title}
// //                 </h3>

// //                 <p className="mt-3 text-[14px] leading-6 text-white/45">
// //                   {model.description}
// //                 </p>

// //                 <ul className="mt-6 space-y-2.5 border-t border-white/[0.08] pt-5">
// //                   {model.points.map((point) => (
// //                     <li
// //                       key={point}
// //                       className="flex items-start gap-2.5 text-[13px] text-white/60"
// //                     >
// //                       <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#FFB454]" />
// //                       {point}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================================================================ */}
// //       {/* CTA                                                               */}
// //       {/* ================================================================ */}
// //       <section>
// //         <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
// //           <div className="rounded-xl border border-white/[0.10] bg-[#0E0F11] px-6 py-14 text-center sm:px-12">
// //             <p className="font-mono text-[13px] text-[#7FD858]">
// //               ~/hyi $ hire --start
// //               <span className="caret ml-1 inline-block h-4 w-[7px] translate-y-[1px] bg-[#FFB454]" />
// //             </p>

// //             <h2 className="mx-auto mt-6 max-w-[560px] text-[30px] font-bold leading-tight tracking-tight sm:text-[42px]">
// //               Tell us what you&apos;re building. We&apos;ll tell you who to hire.
// //             </h2>

// //             <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-7 text-white/50">
// //               No long forms, no sales calls you didn&apos;t ask for — just a
// //               direct conversation about the role you need filled.
// //             </p>

// //             <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
// //               <Link
// //                 href="/talk-to-our-expert"
// //                 className="inline-flex h-12 items-center justify-center rounded-lg bg-[#FFB454] px-7 text-[14px] font-semibold text-[#0A0B0D] transition hover:bg-[#ffc57a]"
// //               >
// //                 Start hiring
// //               </Link>

// //               <a
// //                 href="#directory"
// //                 className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-7 text-[14px] font-medium text-white/75 transition hover:border-white/25 hover:text-white"
// //               >
// //                 Browse all roles
// //                 <ChevronRight size={15} />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

    
// //     </main>
// //   );
// // }

// // /* -------------------------------------------------------------------------- */
// // /*                              SMALL COMPONENTS                              */
// // /* -------------------------------------------------------------------------- */

// // function CategoryChip({
// //   active,
// //   onClick,
// //   label,
// //   count,
// // }: {
// //   active: boolean;
// //   onClick: () => void;
// //   label: string;
// //   count: number;
// // }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`shrink-0 whitespace-nowrap rounded-lg border px-4 py-2 text-[13px] font-medium transition ${
// //         active
// //           ? "border-[#FFB454]/40 bg-[#FFB454]/10 text-[#FFB454]"
// //           : "border-white/[0.10] text-white/50 hover:text-white/80"
// //       }`}
// //     >
// //       {label} <span className="text-white/30">({count})</span>
// //     </button>
// //   );
// // }

// // function SidebarRow({
// //   active,
// //   onClick,
// //   label,
// //   displayLabel,
// //   count,
// // }: {
// //   active: boolean;
// //   onClick: () => void;
// //   label: string;
// //   displayLabel?: string;
// //   count: number;
// // }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`flex w-full items-center justify-between rounded-md px-3 py-2 font-mono text-[13px] transition ${
// //         active
// //           ? "border-l-2 border-[#FFB454] bg-[#FFB454]/[0.07] text-[#FFB454]"
// //           : "border-l-2 border-transparent text-white/45 hover:text-white/75"
// //       }`}
// //     >
// //       <span>{displayLabel ?? label}</span>
// //       <span className="text-white/25">{count}</span>
// //     </button>
// //   );
// // }





























// "use client";

// import {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
//   type MouseEvent as ReactMouseEvent,
// } from "react";
// import Link from "next/link";
// import {
//   AnimatePresence,
//   motion,
//   useInView,
//   useMotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
//   type Variants,
// } from "framer-motion";

// import Header from "@/components/section/general/header";
// import Footer from "@/components/section/general/footer";

// import {
//   ArrowRight,
//   ArrowUpRight,
//   BadgeCheck,
//   Blocks,
//   Bot,
//   Boxes,
//   BrainCircuit,
//   BriefcaseBusiness,
//   Building2,
//   Check,
//   CheckCircle2,
//   ChevronDown,
//   ChevronRight,
//   Cloud,
//   Code2,
//   Cpu,
//   Database,
//   Eye,
//   Fingerprint,
//   Gamepad2,
//   GitBranch,
//   Glasses,
//   Globe2,
//   HardDrive,
//   Layers3,
//   LineChart,
//   Link2,
//   LockKeyhole,
//   MessageSquareText,
//   MonitorSmartphone,
//   Network,
//   Palette,
//   PenTool,
//   Rocket,
//   Search,
//   Server,
//   ServerCog,
//   ShieldCheck,
//   ShoppingBag,
//   Smartphone,
//   Sparkles,
//   TabletSmartphone,
//   TestTube2,
//   TimerReset,
//   UsersRound,
//   Workflow,
//   X,
//   Zap,
// } from "lucide-react";
// import HireDeveloperSection from "@/components/section/hire-developer/DevloperSection";

// /* =============================================================================
//    TYPES
// ============================================================================= */

// type IconType = typeof Code2;

// type Role = {
//   slug: string;
//   categoryId: string;
//   icon: IconType;
//   title: string;
//   skills: string[];
//   description: string;
// };

// type Category = {
//   id: string;
//   label: string;
//   icon: IconType;
// };

// type FAQ = {
//   question: string;
//   answer: string;
// };

// /* =============================================================================
//    DATA
// ============================================================================= */

// const categories: Category[] = [
//   {
//     id: "web",
//     label: "Web Development",
//     icon: Code2,
//   },
//   {
//     id: "mobile",
//     label: "Mobile",
//     icon: Smartphone,
//   },
//   {
//     id: "ai-data",
//     label: "AI & Data",
//     icon: BrainCircuit,
//   },
//   {
//     id: "cloud",
//     label: "Cloud & Infra",
//     icon: Cloud,
//   },
//   {
//     id: "design",
//     label: "Design & Product",
//     icon: Palette,
//   },
//   {
//     id: "quality",
//     label: "Quality & Security",
//     icon: ShieldCheck,
//   },
//   {
//     id: "specialized",
//     label: "Specialized",
//     icon: Blocks,
//   },
// ];

// const roles: Role[] = [
//   {
//     slug: "frontend-developer",
//     categoryId: "web",
//     icon: Code2,
//     title: "Frontend Developer",
//     skills: ["React", "Next.js", "TypeScript", "Tailwind"],
//     description:
//       "Build responsive, polished and high-performance interfaces for modern digital products.",
//   },
//   {
//     slug: "backend-developer",
//     categoryId: "web",
//     icon: Server,
//     title: "Backend Developer",
//     skills: ["Node.js", "Python", "Java", "APIs"],
//     description:
//       "Develop secure APIs, services and scalable backend systems for complex applications.",
//   },
//   {
//     slug: "fullstack-developer",
//     categoryId: "web",
//     icon: Layers3,
//     title: "Full-Stack Developer",
//     skills: ["MERN", "Next.js", "PostgreSQL"],
//     description:
//       "Build across frontend, backend and databases with end-to-end product ownership.",
//   },
//   {
//     slug: "wordpress-developer",
//     categoryId: "web",
//     icon: Globe2,
//     title: "WordPress Developer",
//     skills: ["WordPress", "PHP", "WooCommerce"],
//     description:
//       "Create custom websites, themes, plugins and scalable WordPress experiences.",
//   },
//   {
//     slug: "shopify-developer",
//     categoryId: "web",
//     icon: ShoppingBag,
//     title: "Shopify Developer",
//     skills: ["Shopify", "Liquid", "Hydrogen"],
//     description:
//       "Build customized storefronts, integrations and modern commerce experiences.",
//   },

//   {
//     slug: "ios-developer",
//     categoryId: "mobile",
//     icon: Smartphone,
//     title: "iOS Developer",
//     skills: ["Swift", "SwiftUI", "iOS"],
//     description:
//       "Develop native iPhone and iPad applications with polished user experiences.",
//   },
//   {
//     slug: "android-developer",
//     categoryId: "mobile",
//     icon: TabletSmartphone,
//     title: "Android Developer",
//     skills: ["Kotlin", "Jetpack Compose", "Android"],
//     description:
//       "Build reliable Android applications across modern devices and form factors.",
//   },
//   {
//     slug: "react-native-developer",
//     categoryId: "mobile",
//     icon: Blocks,
//     title: "React Native Developer",
//     skills: ["React Native", "TypeScript", "Expo"],
//     description:
//       "Create cross-platform mobile experiences with a shared modern codebase.",
//   },
//   {
//     slug: "flutter-developer",
//     categoryId: "mobile",
//     icon: Cpu,
//     title: "Flutter Developer",
//     skills: ["Flutter", "Dart", "Firebase"],
//     description:
//       "Build smooth cross-platform applications with expressive custom interfaces.",
//   },

//   {
//     slug: "ai-ml-engineer",
//     categoryId: "ai-data",
//     icon: BrainCircuit,
//     title: "AI / ML Engineer",
//     skills: ["Python", "LLMs", "PyTorch", "AI"],
//     description:
//       "Build intelligent systems using machine learning, generative AI and modern AI infrastructure.",
//   },
//   {
//     slug: "generative-ai-engineer",
//     categoryId: "ai-data",
//     icon: Bot,
//     title: "Generative AI Engineer",
//     skills: ["LLMs", "RAG", "Agents", "Python"],
//     description:
//       "Build AI assistants, RAG systems, intelligent agents and generative product experiences.",
//   },
//   {
//     slug: "data-engineer",
//     categoryId: "ai-data",
//     icon: Database,
//     title: "Data Engineer",
//     skills: ["SQL", "Spark", "Airflow", "ETL"],
//     description:
//       "Create dependable pipelines and platforms that transform raw data into usable information.",
//   },
//   {
//     slug: "data-scientist",
//     categoryId: "ai-data",
//     icon: LineChart,
//     title: "Data Scientist",
//     skills: ["Python", "Statistics", "ML"],
//     description:
//       "Turn complex datasets into models, experiments and actionable business insights.",
//   },
//   {
//     slug: "computer-vision-engineer",
//     categoryId: "ai-data",
//     icon: Eye,
//     title: "Computer Vision Engineer",
//     skills: ["OpenCV", "PyTorch", "Vision"],
//     description:
//       "Develop intelligent systems capable of understanding images, video and visual information.",
//   },
//   {
//     slug: "nlp-engineer",
//     categoryId: "ai-data",
//     icon: MessageSquareText,
//     title: "NLP Engineer",
//     skills: ["Transformers", "spaCy", "LLMs"],
//     description:
//       "Build language understanding, semantic search and conversational AI systems.",
//   },

//   {
//     slug: "cloud-architect",
//     categoryId: "cloud",
//     icon: Cloud,
//     title: "Cloud Architect",
//     skills: ["AWS", "Azure", "GCP"],
//     description:
//       "Design scalable, secure and resilient cloud architecture for modern applications.",
//   },
//   {
//     slug: "devops-engineer",
//     categoryId: "cloud",
//     icon: GitBranch,
//     title: "DevOps Engineer",
//     skills: ["Docker", "Kubernetes", "CI/CD"],
//     description:
//       "Automate infrastructure and deployment workflows for reliable software delivery.",
//   },
//   {
//     slug: "site-reliability-engineer",
//     categoryId: "cloud",
//     icon: HardDrive,
//     title: "Site Reliability Engineer",
//     skills: ["Monitoring", "SRE", "Observability"],
//     description:
//       "Improve reliability, observability and operational resilience across production systems.",
//   },
//   {
//     slug: "database-administrator",
//     categoryId: "cloud",
//     icon: Database,
//     title: "Database Administrator",
//     skills: ["PostgreSQL", "MongoDB", "Redis"],
//     description:
//       "Optimize database architecture, availability, performance and data reliability.",
//   },

//   {
//     slug: "ui-ux-designer",
//     categoryId: "design",
//     icon: PenTool,
//     title: "UI / UX Designer",
//     skills: ["Figma", "UX", "Prototyping"],
//     description:
//       "Design intuitive interfaces and user experiences around real product requirements.",
//   },
//   {
//     slug: "product-designer",
//     categoryId: "design",
//     icon: Palette,
//     title: "Product Designer",
//     skills: ["Design Systems", "Research", "Figma"],
//     description:
//       "Own product design from discovery and prototyping through production-ready experiences.",
//   },
//   {
//     slug: "technical-project-manager",
//     categoryId: "design",
//     icon: UsersRound,
//     title: "Technical Project Manager",
//     skills: ["Delivery", "Agile", "Sprint Planning"],
//     description:
//       "Coordinate engineering execution, priorities and delivery across technical teams.",
//   },

//   {
//     slug: "qa-engineer",
//     categoryId: "quality",
//     icon: TestTube2,
//     title: "QA / Test Engineer",
//     skills: ["Automation", "Manual QA", "Testing"],
//     description:
//       "Improve product quality through systematic testing, automation and edge-case validation.",
//   },
//   {
//     slug: "security-engineer",
//     categoryId: "quality",
//     icon: ShieldCheck,
//     title: "Security Engineer",
//     skills: ["AppSec", "Security", "Threat Modeling"],
//     description:
//       "Integrate security into applications, architecture and engineering workflows.",
//   },
//   {
//     slug: "penetration-tester",
//     categoryId: "quality",
//     icon: Fingerprint,
//     title: "Penetration Tester",
//     skills: ["VAPT", "Audits", "Security Testing"],
//     description:
//       "Identify vulnerabilities through structured security assessments and testing.",
//   },
//   {
//     slug: "iam-engineer",
//     categoryId: "quality",
//     icon: LockKeyhole,
//     title: "IAM Engineer",
//     skills: ["Auth", "SSO", "RBAC"],
//     description:
//       "Build secure identity, authentication and access-management infrastructure.",
//   },

//   {
//     slug: "blockchain-developer",
//     categoryId: "specialized",
//     icon: Link2,
//     title: "Blockchain Developer",
//     skills: ["Solidity", "Web3", "Smart Contracts"],
//     description:
//       "Develop decentralized applications, smart contracts and blockchain integrations.",
//   },
//   {
//     slug: "game-developer",
//     categoryId: "specialized",
//     icon: Gamepad2,
//     title: "Game Developer",
//     skills: ["Unity", "Unreal Engine", "C#"],
//     description:
//       "Build interactive game experiences across mobile, desktop and emerging platforms.",
//   },
//   {
//     slug: "ar-vr-developer",
//     categoryId: "specialized",
//     icon: Glasses,
//     title: "AR / VR Developer",
//     skills: ["ARKit", "ARCore", "Unity"],
//     description:
//       "Create immersive augmented and virtual reality applications and experiences.",
//   },
//   {
//     slug: "embedded-iot-developer",
//     categoryId: "specialized",
//     icon: Cpu,
//     title: "Embedded / IoT Developer",
//     skills: ["C/C++", "RTOS", "IoT"],
//     description:
//       "Develop firmware and software for connected devices and embedded systems.",
//   },
//   {
//     slug: "salesforce-developer",
//     categoryId: "specialized",
//     icon: Building2,
//     title: "Salesforce Developer",
//     skills: ["Apex", "LWC", "Salesforce"],
//     description:
//       "Build custom CRM workflows, integrations and Salesforce applications.",
//   },
//   {
//     slug: "sap-developer",
//     categoryId: "specialized",
//     icon: Boxes,
//     title: "SAP Developer",
//     skills: ["ABAP", "S/4HANA", "SAP"],
//     description:
//       "Develop and customize enterprise applications across the SAP ecosystem.",
//   },
// ];

// const techCloud = [
//   "React",
//   "Next.js",
//   "Node.js",
//   "Python",
//   "TypeScript",
//   "Java",
//   "Flutter",
//   "Swift",
//   "Kotlin",
//   "AWS",
//   "Azure",
//   "GCP",
//   "Docker",
//   "Kubernetes",
//   "PostgreSQL",
//   "MongoDB",
//   "PyTorch",
//   "TensorFlow",
//   "LLMs",
//   "RAG",
//   "DevOps",
//   "Figma",
// ];

// const benefits = [
//   {
//     icon: BadgeCheck,
//     index: "01",
//     title: "Technical expertise",
//     description:
//       "Find engineering talent across modern frontend, backend, mobile, AI, data, cloud and infrastructure stacks.",
//   },
//   {
//     icon: TimerReset,
//     index: "02",
//     title: "Simplified hiring",
//     description:
//       "Move from technical requirement to relevant talent without managing a fragmented sourcing process.",
//   },
//   {
//     icon: Globe2,
//     index: "03",
//     title: "Global collaboration",
//     description:
//       "Build distributed engineering teams designed for modern remote collaboration and delivery.",
//   },
//   {
//     icon: Workflow,
//     index: "04",
//     title: "Flexible engagement",
//     description:
//       "Add an individual engineer, assemble a dedicated team or engage expertise around a defined project.",
//   },
// ];

// const processSteps = [
//   {
//     id: "01",
//     icon: MessageSquareText,
//     title: "Tell us what you're building.",
//     short: "Requirement",
//     description:
//       "Share your product goals, required technologies, engineering roles, timeline and preferred working model.",
//   },
//   {
//     id: "02",
//     icon: Search,
//     title: "Explore relevant talent.",
//     short: "Matching",
//     description:
//       "Review developers and specialists whose technical expertise aligns with your project requirements.",
//   },
//   {
//     id: "03",
//     icon: UsersRound,
//     title: "Interview your shortlist.",
//     short: "Interview",
//     description:
//       "Meet potential team members directly and evaluate technical, communication and collaboration fit.",
//   },
//   {
//     id: "04",
//     icon: Rocket,
//     title: "Start building together.",
//     short: "Onboarding",
//     description:
//       "Bring your selected talent into your workflow and begin execution with your existing tools and processes.",
//   },
// ];

// const engagementModels = [
//   {
//     index: "01",
//     icon: Code2,
//     tag: "INDIVIDUAL TALENT",
//     title: "Dedicated Developer",
//     description:
//       "Add specialized engineering capability directly into your existing team and product workflow.",
//     points: [
//       "Works alongside your internal team",
//       "Suitable for ongoing development",
//       "Flexible engineering capacity",
//       "Direct day-to-day collaboration",
//     ],
//   },
//   {
//     index: "02",
//     icon: UsersRound,
//     tag: "EXTENDED TEAM",
//     title: "Dedicated Team",
//     description:
//       "Assemble a cross-functional technology team around a product roadmap or engineering initiative.",
//     points: [
//       "Multiple complementary roles",
//       "Cross-functional collaboration",
//       "Built around your technology stack",
//       "Suitable for sustained delivery",
//     ],
//     featured: true,
//   },
//   {
//     index: "03",
//     icon: BriefcaseBusiness,
//     tag: "DEFINED SCOPE",
//     title: "Project Based",
//     description:
//       "Engage specialized technical expertise around a clearly defined product, platform or technology initiative.",
//     points: [
//       "Defined project requirements",
//       "Specialized technical expertise",
//       "Milestone-oriented execution",
//       "Suitable for focused initiatives",
//     ],
//   },
// ];

// const faqs: FAQ[] = [
//   {
//     question: "What types of developers can I hire through HYI?",
//     answer:
//       "You can explore talent across frontend, backend, full-stack, mobile, AI and machine learning, data engineering, cloud, DevOps, security, QA, product design and several specialized technology roles.",
//   },
//   {
//     question: "Can I hire only one developer?",
//     answer:
//       "Yes. The engagement can be structured around an individual developer, an extended engineering team or a defined project depending on your requirements.",
//   },
//   {
//     question: "Can HYI help me build a complete engineering team?",
//     answer:
//       "Yes. You can combine complementary roles such as frontend, backend, mobile, QA, DevOps, data and product specialists to support a broader product roadmap.",
//   },
//   {
//     question: "How do I choose the right technology specialist?",
//     answer:
//       "Start with the outcome you need, your current technology stack and the responsibilities the person will own. HYI can then help narrow the relevant engineering discipline and role.",
//   },
//   {
//     question: "Can developers work with our existing tools and team?",
//     answer:
//       "The engagement can be structured around collaboration with your existing engineering workflow, communication tools and development processes.",
//   },
// ];

// /* =============================================================================
//    MOTION
// ============================================================================= */

// const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.75,
//       ease: easeOut,
//     },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
// };

// const roleAnimation: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 15,
//     scale: 0.985,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.4,
//       ease: easeOut,
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.97,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// /* =============================================================================
//    HELPERS
// ============================================================================= */

// function Reveal({
//   children,
//   className = "",
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 35 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.75,
//         delay,
//         ease: easeOut,
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function SectionLabel({
//   number,
//   children,
// }: {
//   number: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex items-center gap-3">
//       <span className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6]">
//         {number}
//       </span>

//       <span className="h-px w-7 bg-[#8B5CF6]/50" />

//       <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
//         {children}
//       </span>
//     </div>
//   );
// }

// function PurpleButton({
//   href,
//   children,
//   className = "",
// }: {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-full bg-[#7547F5] px-7 text-[13px] font-semibold text-white shadow-[0_12px_40px_rgba(117,71,245,.22)] transition duration-300 hover:bg-[#8257F6] hover:shadow-[0_18px_55px_rgba(117,71,245,.32)] ${className}`}
//     >
//       <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

//       <span className="relative flex items-center gap-2">
//         {children}

//         <ArrowUpRight
//           size={16}
//           className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//         />
//       </span>
//     </Link>
//   );
// }

// function OutlineButton({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <a
//       href={href}
//       className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-7 text-[13px] font-medium text-white/65 backdrop-blur-md transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.055] hover:text-white"
//     >
//       {children}

//       <ChevronRight
//         size={15}
//         className="transition-transform group-hover:translate-x-1"
//       />
//     </a>
//   );
// }

// /* =============================================================================
//    MOUSE SPOTLIGHT
// ============================================================================= */

// function MouseSpotlight() {
//   const x = useMotionValue(-500);
//   const y = useMotionValue(-500);

//   const smoothX = useSpring(x, {
//     stiffness: 80,
//     damping: 25,
//     mass: 0.5,
//   });

//   const smoothY = useSpring(y, {
//     stiffness: 80,
//     damping: 25,
//     mass: 0.5,
//   });

//   useEffect(() => {
//     const handleMove = (event: MouseEvent) => {
//       x.set(event.clientX);
//       y.set(event.clientY);
//     };

//     window.addEventListener("mousemove", handleMove);

//     return () => window.removeEventListener("mousemove", handleMove);
//   }, [x, y]);

//   return (
//     <motion.div
//       aria-hidden
//       className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[500px] w-[500px] rounded-full lg:block"
//       style={{
//         x: smoothX,
//         y: smoothY,
//         translateX: "-50%",
//         translateY: "-50%",
//         background:
//           "radial-gradient(circle, rgba(117,71,245,0.075) 0%, rgba(117,71,245,0.025) 35%, transparent 70%)",
//       }}
//     />
//   );
// }

// /* =============================================================================
//    HERO VISUAL
// ============================================================================= */

// function EngineeringUniverse() {
//   const nodes = [
//     {
//       icon: Code2,
//       label: "Frontend",
//       className: "left-[2%] top-[19%]",
//       delay: 0,
//     },
//     {
//       icon: BrainCircuit,
//       label: "AI / ML",
//       className: "right-[0%] top-[17%]",
//       delay: 0.5,
//     },
//     {
//       icon: Cloud,
//       label: "Cloud",
//       className: "right-[1%] bottom-[17%]",
//       delay: 1,
//     },
//     {
//       icon: Database,
//       label: "Data",
//       className: "left-[1%] bottom-[17%]",
//       delay: 1.5,
//     },
//   ];

//   return (
//     <div className="relative mx-auto h-[500px] w-full max-w-[540px]">
//       {/* Outer atmosphere */}
//       <motion.div
//         animate={{
//           opacity: [0.28, 0.55, 0.28],
//           scale: [0.95, 1.04, 0.95],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7547F5]/20 blur-[90px]"
//       />

//       {/* Rings */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8B5CF6]/20"
//       >
//         <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#9F7AEA] shadow-[0_0_22px_rgba(159,122,234,.9)]" />
//       </motion.div>

//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B5CF6]/15"
//       >
//         <div className="absolute bottom-[25px] right-[38px] h-2 w-2 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,.5)]" />
//       </motion.div>

//       <div className="absolute left-1/2 top-1/2 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

//       {/* Connecting lines */}
//       <svg
//         className="pointer-events-none absolute inset-0 h-full w-full"
//         viewBox="0 0 540 500"
//         fill="none"
//       >
//         <defs>
//           <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop stopColor="#8B5CF6" stopOpacity="0" />
//             <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.55" />
//             <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         <motion.path
//           d="M100 120 C180 170 205 200 270 250"
//           stroke="url(#lineGradient)"
//           strokeWidth="1"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1.8, delay: 0.6 }}
//         />

//         <motion.path
//           d="M440 120 C360 165 330 200 270 250"
//           stroke="url(#lineGradient)"
//           strokeWidth="1"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1.8, delay: 0.9 }}
//         />

//         <motion.path
//           d="M100 385 C180 335 205 300 270 250"
//           stroke="url(#lineGradient)"
//           strokeWidth="1"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1.8, delay: 1.2 }}
//         />

//         <motion.path
//           d="M440 385 C365 335 330 300 270 250"
//           stroke="url(#lineGradient)"
//           strokeWidth="1"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1.8, delay: 1.5 }}
//         />
//       </svg>

//       {/* Center core */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.9,
//           delay: 0.3,
//           ease: easeOut,
//         }}
//         className="absolute left-1/2 top-1/2 z-20 flex h-[176px] w-[176px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[42px] border border-[#8B5CF6]/30 bg-[#0C0914]/85 shadow-[0_0_100px_rgba(117,71,245,.18)] backdrop-blur-2xl"
//       >
//         <div className="absolute inset-[7px] rounded-[36px] border border-white/[0.05]" />

//         <motion.div
//           animate={{
//             boxShadow: [
//               "0 0 0 rgba(139,92,246,0)",
//               "0 0 35px rgba(139,92,246,.22)",
//               "0 0 0 rgba(139,92,246,0)",
//             ],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//           }}
//           className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8B5CF6]/25 bg-[#8B5CF6]/10"
//         >
//           <Code2 size={25} className="text-[#A78BFA]" />
//         </motion.div>

//         <span className="mt-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/25">
//           Engineering
//         </span>

//         <span className="mt-1 text-[15px] font-semibold text-white">
//           HYI Talent
//         </span>
//       </motion.div>

//       {/* Nodes */}
//       {nodes.map((node) => {
//         const Icon = node.icon;

//         return (
//           <motion.div
//             key={node.label}
//             initial={{ opacity: 0, scale: 0.7 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: [0, -9, 0],
//             }}
//             transition={{
//               opacity: {
//                 duration: 0.6,
//                 delay: 0.8 + node.delay * 0.2,
//               },
//               scale: {
//                 duration: 0.6,
//                 delay: 0.8 + node.delay * 0.2,
//               },
//               y: {
//                 duration: 4 + node.delay,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//             className={`absolute z-30 ${node.className}`}
//           >
//             <div className="flex min-w-[132px] items-center gap-3 rounded-2xl border border-white/[0.09] bg-[#0B0B0E]/80 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-xl">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
//                 <Icon size={16} className="text-[#A78BFA]" />
//               </div>

//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
//                   Talent
//                 </p>

//                 <p className="mt-0.5 text-[12px] font-medium text-white/75">
//                   {node.label}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}

//       {/* Decorative particles */}
//       {[
//         ["left-[18%] top-[7%]", 0],
//         ["right-[16%] top-[4%]", 0.5],
//         ["left-[12%] bottom-[6%]", 1],
//         ["right-[18%] bottom-[4%]", 1.5],
//         ["left-[48%] top-[3%]", 2],
//         ["left-[48%] bottom-[1%]", 2.5],
//       ].map(([className, delay], index) => (
//         <motion.span
//           key={index}
//           animate={{
//             opacity: [0.15, 0.8, 0.15],
//             scale: [0.8, 1.2, 0.8],
//           }}
//           transition={{
//             duration: 3,
//             delay: Number(delay),
//             repeat: Infinity,
//           }}
//           className={`absolute h-1 w-1 rounded-full bg-[#A78BFA] ${className}`}
//         />
//       ))}
//     </div>
//   );
// }

// /* =============================================================================
//    HERO
// ============================================================================= */

// function HeroSection() {
//   const { scrollY } = useScroll();

//   const heroY = useTransform(scrollY, [0, 800], [0, 110]);
//   const heroOpacity = useTransform(scrollY, [0, 650], [1, 0.15]);

//   return (
//     <section className="relative isolate min-h-[800px] overflow-hidden border-b border-white/[0.07]">
//       {/* Grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.15]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.075) 1px, transparent 1px)",
//           backgroundSize: "72px 72px",
//           maskImage:
//             "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
//         }}
//       />

//       {/* Purple atmosphere */}
//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.12, 0.2, 0.12],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="pointer-events-none absolute left-1/2 top-[300px] h-[650px] w-[1100px] -translate-x-1/2 rounded-full bg-[#6D28D9] blur-[190px]"
//       />

//       <div className="pointer-events-none absolute -left-[250px] top-[40px] h-[500px] w-[500px] rounded-full bg-[#4C1D95]/10 blur-[150px]" />

//       <div className="pointer-events-none absolute -right-[250px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[150px]" />

//       <motion.div
//         style={{
//           y: heroY,
//           opacity: heroOpacity,
//         }}
//         className="relative mx-auto flex min-h-[760px] max-w-[1400px] items-center px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:py-24"
//       >
//         <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="relative z-20"
//           >
//             <motion.div
//               variants={fadeUp}
//               className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.07] px-4 py-2 backdrop-blur-xl"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A78BFA] opacity-60" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A78BFA]" />
//               </span>

//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">
//                 Build your engineering team
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeUp}
//               className="max-w-[790px] text-[47px] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[62px] md:text-[72px] lg:text-[78px] xl:text-[88px]"
//             >
//               Engineers for
//               <br />

//               <span className="relative inline-block">
//                 <span className="bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#DDD6FE] bg-clip-text text-transparent">
//                   what&apos;s next.
//                 </span>

//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{
//                     duration: 1,
//                     delay: 1,
//                     ease: easeOut,
//                   }}
//                   className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent"
//                 />
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-7 max-w-[620px] text-[16px] leading-7 text-white/50 sm:text-[18px] sm:leading-8"
//             >
//               Build web, mobile, AI, data and cloud products with engineering
//               talent aligned to your technology stack and business requirements.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="mt-9 flex flex-col gap-3 sm:flex-row"
//             >
//               <PurpleButton href="/talk-to-our-expert">
//                 Find your developer
//               </PurpleButton>

//               <OutlineButton href="#developer-directory">
//                 Explore talent
//               </OutlineButton>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
//             >
//               {[
//                 "Technology specialists",
//                 "Flexible engagement",
//                 "Remote collaboration",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2 text-[11px] text-white/35 sm:text-[12px]"
//                 >
//                   <CheckCircle2 size={13} className="text-[#8B5CF6]" />

//                   {item}
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.3,
//               ease: easeOut,
//             }}
//             className="relative hidden lg:block"
//           >
//             <EngineeringUniverse />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.a
//         href="#developer-directory"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.7 }}
//         className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/20 lg:flex"
//       >
//         <span className="text-[8px] uppercase tracking-[0.3em]">Explore</span>

//         <motion.div
//           animate={{ y: [0, 5, 0] }}
//           transition={{
//             duration: 1.7,
//             repeat: Infinity,
//           }}
//           className="flex h-8 w-5 justify-center rounded-full border border-white/10 pt-1.5"
//         >
//           <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />
//         </motion.div>
//       </motion.a>
//     </section>
//   );
// }

// /* =============================================================================
//    TECH STRIP
// ============================================================================= */

// function TechnologyStrip() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#070708] py-8">
//       <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />

//       <div className="mb-6 text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
//         Engineering across modern technology stacks
//       </div>

//       <div
//         className="relative flex overflow-hidden"
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//         }}
//       >
//         <motion.div
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             duration: 35,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="flex min-w-max items-center"
//         >
//           {[...techCloud, ...techCloud].map((tech, index) => (
//             <div
//               key={`${tech}-${index}`}
//               className="flex items-center whitespace-nowrap"
//             >
//               <span className="px-7 text-[13px] font-medium text-white/35 sm:px-10">
//                 {tech}
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#8B5CF6]/40" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    INTRO / CAPABILITY
// ============================================================================= */

// function CapabilityIntro() {
//   return (
//     <section className="relative border-b border-white/[0.07] py-24 sm:py-28 lg:py-36">
//       <div className="pointer-events-none absolute right-[-250px] top-[100px] h-[550px] w-[550px] rounded-full bg-[#6D28D9]/[0.07] blur-[160px]" />

//       <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
//           <Reveal>
//             <SectionLabel number="01">Engineering network</SectionLabel>
//           </Reveal>

//           <Reveal delay={0.08}>
//             <h2 className="max-w-[800px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-[45px] lg:text-[58px]">
//               The technical expertise your
//               <span className="text-white/30"> roadmap demands.</span>
//             </h2>

//             <div className="mt-8 grid gap-6 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
//               <p className="text-[14px] leading-7 text-white/40 sm:text-[15px]">
//                 From building your first product to extending an established
//                 engineering organization, access talent across the technologies
//                 modern products depend on.
//               </p>

//               <p className="text-[14px] leading-7 text-white/40 sm:text-[15px]">
//                 Search by discipline, role or technology and explore specialists
//                 across application development, AI, data, infrastructure,
//                 security and product engineering.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    ROLE CARD
// ============================================================================= */

// function RoleCard({ role }: { role: Role }) {
//   const Icon = role.icon;

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
//     const rect = event.currentTarget.getBoundingClientRect();

//     mouseX.set(event.clientX - rect.left);
//     mouseY.set(event.clientY - rect.top);
//   };

//   return (
//     <motion.div
//       layout
//       variants={roleAnimation}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       onMouseMove={handleMove}
//       whileHover={{ y: -5 }}
//       transition={{
//         layout: {
//           duration: 0.35,
//           ease: easeOut,
//         },
//       }}
//       className="group relative overflow-hidden rounded-[22px] border border-white/[0.075] bg-[#09090B] p-6"
//     >
//       <motion.div
//         className="pointer-events-none absolute h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
//         style={{
//           left: mouseX,
//           top: mouseY,
//           background:
//             "radial-gradient(circle, rgba(124,58,237,.20), transparent 68%)",
//         }}
//       />

//       <div className="relative">
//         <div className="flex items-start justify-between gap-5">
//           <motion.div
//             whileHover={{ rotate: -5, scale: 1.05 }}
//             className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-[#8B5CF6]/25 group-hover:bg-[#8B5CF6]/10"
//           >
//             <Icon
//               size={20}
//               className="text-white/45 transition-colors group-hover:text-[#A78BFA]"
//             />
//           </motion.div>

//           <div className="rounded-full border border-white/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
//             {role.categoryId}
//           </div>
//         </div>

//         <h3 className="mt-7 text-[18px] font-semibold tracking-[-0.02em] text-white">
//           {role.title}
//         </h3>

//         <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-white/38">
//           {role.description}
//         </p>

//         <div className="mt-5 flex min-h-[52px] flex-wrap content-start gap-1.5">
//           {role.skills.map((skill) => (
//             <span
//               key={skill}
//               className="rounded-md border border-white/[0.065] bg-white/[0.025] px-2.5 py-1.5 text-[9px] font-medium text-white/35 transition group-hover:border-white/[0.09] group-hover:text-white/50"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         <div className="mt-6 border-t border-white/[0.06] pt-5">
//           <Link
//             href="/talk-to-our-expert"
//             className="flex items-center justify-between text-[11px] font-medium text-white/35 transition group-hover:text-[#B8A2FF]"
//           >
//             <span>Hire this expertise</span>

//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] transition duration-300 group-hover:border-[#8B5CF6]/30 group-hover:bg-[#8B5CF6]/10">
//               <ArrowUpRight
//                 size={13}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </span>
//           </Link>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent transition-all duration-500 group-hover:w-full" />
//     </motion.div>
//   );
// }

// /* =============================================================================
//    DEVELOPER DIRECTORY
// ============================================================================= */

// function DeveloperDirectory() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [query, setQuery] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   const filteredRoles = useMemo(() => {
//     const normalizedQuery = query.trim().toLowerCase();

//     return roles.filter((role) => {
//       const categoryMatches =
//         activeCategory === "all" || role.categoryId === activeCategory;

//       if (!categoryMatches) return false;

//       if (!normalizedQuery) return true;

//       return (
//         role.title.toLowerCase().includes(normalizedQuery) ||
//         role.description.toLowerCase().includes(normalizedQuery) ||
//         role.skills.some((skill) =>
//           skill.toLowerCase().includes(normalizedQuery)
//         )
//       );
//     });
//   }, [activeCategory, query]);

//   const visibleRoles = showAll ? filteredRoles : filteredRoles.slice(0, 12);

//   const countForCategory = (id: string) => {
//     if (id === "all") return roles.length;

//     return roles.filter((role) => role.categoryId === id).length;
//   };

//   const changeCategory = (category: string) => {
//     setActiveCategory(category);
//     setShowAll(false);
//   };

//   return (
//     <section
//       id="developer-directory"
//       className="relative border-b border-white/[0.07] bg-[#070708] py-24 sm:py-28 lg:py-36"
//     >
//       <div className="pointer-events-none absolute left-[-300px] top-[300px] h-[600px] w-[600px] rounded-full bg-[#6D28D9]/[0.06] blur-[180px]" />

//       <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <Reveal>
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <SectionLabel number="02">Developer directory</SectionLabel>

//               <h2 className="mt-6 max-w-[720px] text-[36px] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[58px]">
//                 Find the expertise
//                 <span className="text-white/30"> your product needs.</span>
//               </h2>

//               <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-white/40 sm:text-[15px]">
//                 Browse engineering disciplines or search directly by role,
//                 technology or skill.
//               </p>
//             </div>

//             <div className="relative w-full lg:max-w-[390px]">
//               <Search
//                 size={16}
//                 className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
//               />

//               <input
//                 value={query}
//                 onChange={(event) => {
//                   setQuery(event.target.value);
//                   setShowAll(true);
//                 }}
//                 placeholder="Search role or technology..."
//                 className="h-[52px] w-full rounded-full border border-white/[0.09] bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition placeholder:text-white/20 focus:border-[#8B5CF6]/35 focus:bg-[#8B5CF6]/[0.035]"
//               />

//               <AnimatePresence>
//                 {query && (
//                   <motion.button
//                     initial={{ opacity: 0, scale: 0.7 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.7 }}
//                     onClick={() => setQuery("")}
//                     className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.05] text-white/35 hover:text-white"
//                   >
//                     <X size={12} />
//                   </motion.button>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </Reveal>

//         {/* Categories */}
//         <Reveal delay={0.08}>
//           <div className="mt-12 flex gap-2 overflow-x-auto border-b border-white/[0.07] pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             <button
//               onClick={() => changeCategory("all")}
//               className={`relative shrink-0 rounded-full px-4 py-2.5 text-[11px] font-medium transition ${
//                 activeCategory === "all"
//                   ? "text-white"
//                   : "text-white/35 hover:text-white/65"
//               }`}
//             >
//               {activeCategory === "all" && (
//                 <motion.span
//                   layoutId="category-pill"
//                   className="absolute inset-0 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10"
//                   transition={{
//                     type: "spring",
//                     stiffness: 350,
//                     damping: 30,
//                   }}
//                 />
//               )}

//               <span className="relative">
//                 All roles{" "}
//                 <span className="ml-1 text-white/25">
//                   {countForCategory("all")}
//                 </span>
//               </span>
//             </button>

//             {categories.map((category) => {
//               const Icon = category.icon;
//               const active = activeCategory === category.id;

//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => changeCategory(category.id)}
//                   className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-medium transition ${
//                     active
//                       ? "text-white"
//                       : "text-white/35 hover:text-white/65"
//                   }`}
//                 >
//                   {active && (
//                     <motion.span
//                       layoutId="category-pill"
//                       className="absolute inset-0 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10"
//                       transition={{
//                         type: "spring",
//                         stiffness: 350,
//                         damping: 30,
//                       }}
//                     />
//                   )}

//                   <Icon
//                     size={13}
//                     className={`relative ${
//                       active ? "text-[#A78BFA]" : "text-white/25"
//                     }`}
//                   />

//                   <span className="relative">{category.label}</span>

//                   <span className="relative text-white/20">
//                     {countForCategory(category.id)}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </Reveal>

//         {/* Result information */}
//         <div className="mt-8 flex items-center justify-between">
//           <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
//             Showing {visibleRoles.length} of {filteredRoles.length} roles
//           </p>

//           {activeCategory !== "all" && (
//             <button
//               onClick={() => changeCategory("all")}
//               className="text-[10px] font-medium text-[#9F7AEA] transition hover:text-[#C4B5FD]"
//             >
//               Clear category
//             </button>
//           )}
//         </div>

//         {/* Cards */}
//         <motion.div
//           layout
//           className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         >
//           <AnimatePresence mode="popLayout">
//             {visibleRoles.map((role) => (
//               <RoleCard key={role.slug} role={role} />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {filteredRoles.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-6 rounded-[24px] border border-white/[0.07] bg-white/[0.02] px-5 py-16 text-center"
//           >
//             <Search size={24} className="mx-auto text-white/15" />

//             <p className="mt-4 text-[14px] font-medium text-white/55">
//               No matching roles found.
//             </p>

//             <p className="mt-2 text-[12px] text-white/25">
//               Try another role, technology or category.
//             </p>

//             <button
//               onClick={() => {
//                 setQuery("");
//                 setActiveCategory("all");
//                 setShowAll(false);
//               }}
//               className="mt-5 text-[11px] font-medium text-[#A78BFA]"
//             >
//               Reset search
//             </button>
//           </motion.div>
//         )}

//         {filteredRoles.length > 12 && (
//           <div className="mt-10 flex justify-center">
//             <motion.button
//               whileHover={{ scale: 1.025 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setShowAll((current) => !current)}
//               className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-6 text-[11px] font-medium text-white/55 transition hover:border-[#8B5CF6]/25 hover:bg-[#8B5CF6]/[0.06] hover:text-white"
//             >
//               {showAll ? "Show fewer roles" : "Explore all roles"}

//               <ChevronDown
//                 size={14}
//                 className={`transition-transform duration-300 ${
//                   showAll ? "rotate-180" : ""
//                 }`}
//               />
//             </motion.button>
//           </div>
//         )}

//         <Reveal>
//           <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[22px] border border-white/[0.07] bg-gradient-to-r from-white/[0.025] to-[#8B5CF6]/[0.035] p-6 sm:flex-row sm:items-center sm:p-7">
//             <div>
//               <p className="text-[13px] font-medium text-white/75">
//                 Can&apos;t find the exact role?
//               </p>

//               <p className="mt-1.5 text-[12px] text-white/30">
//                 Tell us about the capability you need.
//               </p>
//             </div>

//             <Link
//               href="/talk-to-our-expert"
//               className="group flex items-center gap-2 text-[11px] font-medium text-[#B9A6FF]"
//             >
//               Discuss your requirement

//               <ArrowRight
//                 size={13}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    WHY HYI
// ============================================================================= */

// function WhyHYI() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-28 lg:py-36">
//       <div className="pointer-events-none absolute right-[-300px] top-[200px] h-[650px] w-[650px] rounded-full bg-[#6D28D9]/[0.07] blur-[180px]" />

//       <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
//           <div className="lg:sticky lg:top-28 lg:self-start">
//             <Reveal>
//               <SectionLabel number="03">Why HYI</SectionLabel>

//               <h2 className="mt-6 text-[36px] font-semibold leading-[1.06] tracking-[-0.045em] sm:text-[46px] lg:text-[56px]">
//                 Less friction.
//                 <br />
//                 <span className="text-white/30">More building.</span>
//               </h2>

//               <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-white/40">
//                 Engineering hiring should help your roadmap move forward, not
//                 become another project to manage.
//               </p>

//               <div className="mt-8">
//                 <PurpleButton href="/talk-to-our-expert">
//                   Talk to our team
//                 </PurpleButton>
//               </div>
//             </Reveal>
//           </div>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.12 }}
//             className="grid gap-3 sm:grid-cols-2"
//           >
//             {benefits.map((benefit, index) => {
//               const Icon = benefit.icon;

//               return (
//                 <motion.div
//                   key={benefit.title}
//                   variants={fadeUp}
//                   whileHover={{ y: -5 }}
//                   className={`group relative min-h-[310px] overflow-hidden rounded-[26px] border border-white/[0.075] bg-[#09090B] p-7 sm:p-8 ${
//                     index === 1 || index === 3 ? "sm:translate-y-8" : ""
//                   }`}
//                 >
//                   <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-[55px] transition duration-500 group-hover:bg-[#7C3AED]/20" />

//                   <div className="relative">
//                     <div className="flex items-start justify-between">
//                       <motion.div
//                         whileHover={{ rotate: 8 }}
//                         className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.07]"
//                       >
//                         <Icon size={19} className="text-[#A78BFA]" />
//                       </motion.div>

//                       <span className="font-mono text-[9px] tracking-[0.2em] text-white/15">
//                         {benefit.index}
//                       </span>
//                     </div>

//                     <h3 className="mt-12 text-[20px] font-semibold tracking-[-0.02em]">
//                       {benefit.title}
//                     </h3>

//                     <p className="mt-4 text-[13px] leading-6 text-white/38">
//                       {benefit.description}
//                     </p>
//                   </div>

//                   <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8B5CF6] to-transparent transition-all duration-500 group-hover:w-full" />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    TECHNOLOGY UNIVERSE
// ============================================================================= */

// function TechnologyUniverse() {
//   const stackGroups = [
//     {
//       icon: Code2,
//       title: "Web Engineering",
//       description: "Modern product interfaces and scalable web platforms.",
//       tech: ["React", "Next.js", "TypeScript", "Node.js", "Java"],
//     },
//     {
//       icon: MonitorSmartphone,
//       title: "Mobile Engineering",
//       description: "Native and cross-platform mobile product development.",
//       tech: ["Flutter", "React Native", "Swift", "Kotlin"],
//     },
//     {
//       icon: BrainCircuit,
//       title: "AI & Intelligence",
//       description: "Machine learning and generative AI product capabilities.",
//       tech: ["Python", "LLMs", "RAG", "PyTorch", "AI Agents"],
//     },
//     {
//       icon: Database,
//       title: "Data Engineering",
//       description: "Data pipelines, platforms and analytics infrastructure.",
//       tech: ["SQL", "Spark", "Airflow", "PostgreSQL", "MongoDB"],
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Infrastructure",
//       description: "Scalable infrastructure across major cloud platforms.",
//       tech: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
//     },
//     {
//       icon: ShieldCheck,
//       title: "Quality & Security",
//       description: "Reliable products with testing and security expertise.",
//       tech: ["QA", "Automation", "AppSec", "IAM", "VAPT"],
//     },
//   ];

//   return (
//     <section className="relative border-b border-white/[0.07] bg-[#070708] py-24 sm:py-28 lg:py-36">
//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <Reveal>
//           <div className="mx-auto max-w-[760px] text-center">
//             <div className="flex justify-center">
//               <SectionLabel number="04">Technology expertise</SectionLabel>
//             </div>

//             <h2 className="mt-6 text-[36px] font-semibold leading-[1.06] tracking-[-0.045em] sm:text-[46px] lg:text-[58px]">
//               One network.
//               <span className="text-white/30"> Every layer.</span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/40">
//               Assemble the technical capabilities required to move from product
//               idea to production infrastructure.
//             </p>
//           </div>
//         </Reveal>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {stackGroups.map((group) => {
//             const Icon = group.icon;

//             return (
//               <motion.div
//                 key={group.title}
//                 variants={fadeUp}
//                 whileHover={{ y: -4 }}
//                 className="group rounded-[24px] border border-white/[0.07] bg-[#0A0A0C] p-6 sm:p-7"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] transition group-hover:border-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/[0.07]">
//                     <Icon
//                       size={18}
//                       className="text-white/40 transition group-hover:text-[#A78BFA]"
//                     />
//                   </div>

//                   <ArrowUpRight
//                     size={15}
//                     className="text-white/15 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A78BFA]"
//                   />
//                 </div>

//                 <h3 className="mt-7 text-[17px] font-semibold">
//                   {group.title}
//                 </h3>

//                 <p className="mt-3 text-[12px] leading-6 text-white/35">
//                   {group.description}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-5">
//                   {group.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="rounded-md bg-white/[0.035] px-2.5 py-1.5 text-[9px] text-white/35"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    PROCESS
// ============================================================================= */

// function HiringProcess() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const inView = useInView(containerRef, {
//     once: true,
//     amount: 0.25,
//   });

//   return (
//     <section className="relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-28 lg:py-36">
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/[0.045] blur-[180px]" />

//       <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <Reveal>
//           <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
//             <div>
//               <SectionLabel number="05">How it works</SectionLabel>

//               <h2 className="mt-6 text-[36px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[58px]">
//                 From requirement
//                 <br />
//                 <span className="text-white/30">to collaboration.</span>
//               </h2>
//             </div>

//             <p className="max-w-[530px] text-[14px] leading-7 text-white/40 lg:justify-self-end">
//               A straightforward process for identifying relevant technical
//               expertise and bringing the right people into your engineering
//               workflow.
//             </p>
//           </div>
//         </Reveal>

//         <div ref={containerRef} className="relative mt-16">
//           {/* Desktop line */}
//           <div className="absolute left-[8%] right-[8%] top-[29px] hidden h-px bg-white/[0.07] lg:block">
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={inView ? { scaleX: 1 } : {}}
//               transition={{
//                 duration: 1.5,
//                 ease: easeOut,
//               }}
//               className="h-full origin-left bg-gradient-to-r from-[#8B5CF6]/70 via-[#8B5CF6]/30 to-transparent"
//             />
//           </div>

//           <div className="grid gap-3 lg:grid-cols-4">
//             {processSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={step.id}
//                   initial={{ opacity: 0, y: 25 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{
//                     duration: 0.65,
//                     delay: index * 0.15,
//                     ease: easeOut,
//                   }}
//                   className="group relative"
//                 >
//                   <div className="relative z-10 mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#8B5CF6]/25 bg-[#0A0810] shadow-[0_0_0_7px_#050506]">
//                     <Icon size={18} className="text-[#A78BFA]" />
//                   </div>

//                   <div className="min-h-[260px] rounded-[24px] border border-white/[0.07] bg-[#09090B] p-6 transition duration-300 group-hover:border-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/[0.025]">
//                     <div className="flex items-center justify-between">
//                       <span className="font-mono text-[9px] tracking-[0.2em] text-[#8B5CF6]">
//                         STEP {step.id}
//                       </span>

//                       <span className="text-[9px] uppercase tracking-[0.15em] text-white/15">
//                         {step.short}
//                       </span>
//                     </div>

//                     <h3 className="mt-8 text-[18px] font-semibold leading-6 tracking-[-0.02em]">
//                       {step.title}
//                     </h3>

//                     <p className="mt-4 text-[12px] leading-6 text-white/35">
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// function EngagementModels() {
//   return (
//     <section className="relative border-b border-white/[0.07] bg-[#070708] py-24 sm:py-28 lg:py-36">
//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <Reveal>
//           <div className="mx-auto max-w-[760px] text-center">
//             <div className="flex justify-center">
//               <SectionLabel number="06">Engagement models</SectionLabel>
//             </div>

//             <h2 className="mt-6 text-[36px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[58px]">
//               Build the team
//               <span className="text-white/30"> your way.</span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/40">
//               Choose an engagement structure based on the scope, duration and
//               engineering capacity your roadmap requires.
//             </p>
//           </div>
//         </Reveal>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-14 grid gap-3 lg:grid-cols-3"
//         >
//           {engagementModels.map((model) => {
//             const Icon = model.icon;

//             return (
//               <motion.div
//                 key={model.title}
//                 variants={fadeUp}
//                 whileHover={{ y: -6 }}
//                 className={`group relative overflow-hidden rounded-[28px] border p-7 sm:p-8 ${
//                   model.featured
//                     ? "border-[#8B5CF6]/25 bg-[#8B5CF6]/[0.055]"
//                     : "border-white/[0.075] bg-[#09090B]"
//                 }`}
//               >
//                 {model.featured && (
//                   <>
//                     <div className="absolute right-0 top-0 h-[260px] w-[260px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#7C3AED]/15 blur-[75px]" />

//                     <div className="absolute right-6 top-6 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
//                       Flexible
//                     </div>
//                   </>
//                 )}

//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.07]">
//                     <Icon size={19} className="text-[#A78BFA]" />
//                   </div>

//                   <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
//                     {model.tag}
//                   </p>

//                   <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.03em]">
//                     {model.title}
//                   </h3>

//                   <p className="mt-4 min-h-[72px] text-[13px] leading-6 text-white/38">
//                     {model.description}
//                   </p>

//                   <div className="mt-7 space-y-3 border-t border-white/[0.07] pt-6">
//                     {model.points.map((point) => (
//                       <div
//                         key={point}
//                         className="flex items-start gap-3 text-[12px] text-white/45"
//                       >
//                         <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10">
//                           <Check size={10} className="text-[#A78BFA]" />
//                         </span>

//                         {point}
//                       </div>
//                     ))}
//                   </div>

//                   <Link
//                     href="/talk-to-our-expert"
//                     className="mt-8 flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] text-[11px] font-medium text-white/50 transition duration-300 group-hover:border-[#8B5CF6]/25 group-hover:bg-[#8B5CF6]/10 group-hover:text-white"
//                   >
//                     Discuss this model
//                     <ArrowUpRight size={13} />
//                   </Link>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    ARCHITECTURE / VISUAL BREAK
// ============================================================================= */

// function EngineeringArchitecture() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-28 lg:py-36">
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/[0.07] blur-[180px]" />

//       <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <Reveal>
//           <div className="mx-auto max-w-[780px] text-center">
//             <div className="flex justify-center">
//               <SectionLabel number="07">Build across the stack</SectionLabel>
//             </div>

//             <h2 className="mt-6 text-[36px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[58px]">
//               One product.
//               <span className="text-white/30"> Many disciplines.</span>
//             </h2>
//           </div>
//         </Reveal>

//         <Reveal delay={0.1}>
//           <div className="relative mx-auto mt-16 max-w-[1000px] overflow-hidden rounded-[32px] border border-white/[0.075] bg-[#08080A] p-5 sm:p-8 lg:p-12">
//             <div
//               className="pointer-events-none absolute inset-0 opacity-[0.13]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
//                 backgroundSize: "45px 45px",
//                 maskImage:
//                   "radial-gradient(circle at center, black, transparent 75%)",
//                 WebkitMaskImage:
//                   "radial-gradient(circle at center, black, transparent 75%)",
//               }}
//             />

//             <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
//               {/* Left nodes */}
//               <div className="space-y-3">
//                 {[
//                   {
//                     icon: MonitorSmartphone,
//                     title: "Product Experience",
//                     sub: "Web · Mobile · Design",
//                   },
//                   {
//                     icon: ServerCog,
//                     title: "Application Layer",
//                     sub: "APIs · Backend · Services",
//                   },
//                   {
//                     icon: Database,
//                     title: "Data Layer",
//                     sub: "Databases · Pipelines · Analytics",
//                   },
//                 ].map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         delay: index * 0.12,
//                         duration: 0.6,
//                       }}
//                       className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/25 p-4"
//                     >
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6]/10">
//                         <Icon size={17} className="text-[#A78BFA]" />
//                       </div>

//                       <div>
//                         <p className="text-[12px] font-medium text-white/70">
//                           {item.title}
//                         </p>

//                         <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/20">
//                           {item.sub}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Core */}
//               <div className="relative mx-auto flex h-[180px] w-[180px] items-center justify-center lg:h-[210px] lg:w-[210px]">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute inset-0 rounded-full border border-dashed border-[#8B5CF6]/20"
//                 />

//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{
//                     duration: 18,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute inset-5 rounded-full border border-white/[0.07]"
//                 />

//                 <div className="relative z-10 flex h-[110px] w-[110px] flex-col items-center justify-center rounded-[30px] border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 shadow-[0_0_70px_rgba(124,58,237,.18)] backdrop-blur-xl">
//                   <Sparkles size={23} className="text-[#BCA8FF]" />

//                   <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
//                     Your
//                   </span>

//                   <span className="text-[13px] font-semibold">Product</span>
//                 </div>
//               </div>

//               {/* Right nodes */}
//               <div className="space-y-3">
//                 {[
//                   {
//                     icon: BrainCircuit,
//                     title: "Intelligence Layer",
//                     sub: "AI · ML · LLMs",
//                   },
//                   {
//                     icon: Cloud,
//                     title: "Infrastructure",
//                     sub: "Cloud · DevOps · SRE",
//                   },
//                   {
//                     icon: ShieldCheck,
//                     title: "Quality & Security",
//                     sub: "QA · AppSec · IAM",
//                   },
//                 ].map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         delay: index * 0.12,
//                         duration: 0.6,
//                       }}
//                       className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/25 p-4"
//                     >
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6]/10">
//                         <Icon size={17} className="text-[#A78BFA]" />
//                       </div>

//                       <div>
//                         <p className="text-[12px] font-medium text-white/70">
//                           {item.title}
//                         </p>

//                         <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/20">
//                           {item.sub}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    FAQ
// ============================================================================= */

// function FAQSection() {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(0);

//   return (
//     <section className="border-b border-white/[0.07] bg-[#070708] py-24 sm:py-28 lg:py-36">
//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
//         <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
//           <Reveal>
//             <div>
//               <SectionLabel number="08">Questions</SectionLabel>

//               <h2 className="mt-6 text-[36px] font-semibold leading-[1.06] tracking-[-0.045em] sm:text-[46px] lg:text-[54px]">
//                 Before you
//                 <br />
//                 <span className="text-white/30">start hiring.</span>
//               </h2>

//               <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-white/38">
//                 A few common questions about finding and working with technology
//                 talent through HYI.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={0.08}>
//             <div className="border-t border-white/[0.07]">
//               {faqs.map((faq, index) => {
//                 const active = openFAQ === index;

//                 return (
//                   <div
//                     key={faq.question}
//                     className="border-b border-white/[0.07]"
//                   >
//                     <button
//                       onClick={() => setOpenFAQ(active ? null : index)}
//                       className="group flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
//                     >
//                       <div className="flex items-start gap-4 sm:gap-6">
//                         <span className="mt-1 font-mono text-[9px] text-white/18">
//                           0{index + 1}
//                         </span>

//                         <span
//                           className={`text-[14px] font-medium transition sm:text-[15px] ${
//                             active ? "text-white" : "text-white/60"
//                           }`}
//                         >
//                           {faq.question}
//                         </span>
//                       </div>

//                       <motion.span
//                         animate={{ rotate: active ? 180 : 0 }}
//                         transition={{ duration: 0.25 }}
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-white/30 group-hover:border-[#8B5CF6]/20 group-hover:text-[#A78BFA]"
//                       >
//                         <ChevronDown size={13} />
//                       </motion.span>
//                     </button>

//                     <AnimatePresence initial={false}>
//                       {active && (
//                         <motion.div
//                           initial={{
//                             height: 0,
//                             opacity: 0,
//                           }}
//                           animate={{
//                             height: "auto",
//                             opacity: 1,
//                           }}
//                           exit={{
//                             height: 0,
//                             opacity: 0,
//                           }}
//                           transition={{
//                             duration: 0.35,
//                             ease: easeOut,
//                           }}
//                           className="overflow-hidden"
//                         >
//                           <p className="max-w-[720px] pb-7 pl-8 pr-12 text-[13px] leading-7 text-white/35 sm:pl-12">
//                             {faq.answer}
//                           </p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    FINAL CTA
// ============================================================================= */

// function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
//       <motion.div
//         animate={{
//           scale: [0.9, 1.1, 0.9],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9] blur-[190px]"
//       />

//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.14]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
//           backgroundSize: "65px 65px",
//           maskImage:
//             "radial-gradient(circle at center, black 0%, transparent 68%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 0%, transparent 68%)",
//         }}
//       />

//       <div className="relative mx-auto max-w-[1050px] px-5 text-center sm:px-8">
//         <Reveal>
//           <motion.div
//             animate={{
//               y: [0, -7, 0],
//               boxShadow: [
//                 "0 0 0 rgba(124,58,237,0)",
//                 "0 0 45px rgba(124,58,237,.2)",
//                 "0 0 0 rgba(124,58,237,0)",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//             }}
//             className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 backdrop-blur-xl"
//           >
//             <Sparkles size={24} className="text-[#BCA8FF]" />
//           </motion.div>

//           <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">
//             Start building
//           </p>

//           <h2 className="mx-auto mt-5 max-w-[950px] text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[58px] lg:text-[76px]">
//             Build what&apos;s next.
//             <span className="block text-white/28">
//               Bring in the right engineers.
//             </span>
//           </h2>

//           <p className="mx-auto mt-7 max-w-[600px] text-[14px] leading-7 text-white/38 sm:text-[15px]">
//             Tell us about your product, technology stack and the expertise your
//             roadmap needs.
//           </p>

//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <PurpleButton href="/talk-to-our-expert">
//               Start hiring
//             </PurpleButton>

//             <OutlineButton href="#developer-directory">
//               Browse developers
//             </OutlineButton>
//           </div>

//           <div className="mx-auto mt-12 flex max-w-[560px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-7">
//             {[
//               "Web",
//               "Mobile",
//               "AI & Data",
//               "Cloud",
//               "Security",
//               "Product",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="text-[9px] uppercase tracking-[0.16em] text-white/20"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* =============================================================================
//    MAIN PAGE
// ============================================================================= */

// export default function HireDeveloperPage() {
//   const { scrollYProgress } = useScroll();

//   const progressScale = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <main className="relative min-h-screen overflow-x-hidden bg-[#050506] text-[#F4F1F8] selection:bg-[#8B5CF6]/35 selection:text-white">
//       {/* Global CSS only for this page */}
//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           background: #050506;
//         }

//         @keyframes hireNoiseMove {
//           0% {
//             transform: translate3d(0, 0, 0);
//           }
//           25% {
//             transform: translate3d(-1%, 1%, 0);
//           }
//           50% {
//             transform: translate3d(1%, -1%, 0);
//           }
//           75% {
//             transform: translate3d(1%, 1%, 0);
//           }
//           100% {
//             transform: translate3d(0, 0, 0);
//           }
//         }

//         .hire-page-noise {
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.45'/%3E%3C/svg%3E");
//           animation: hireNoiseMove 0.3s steps(2) infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           html {
//             scroll-behavior: auto;
//           }

//           .hire-page-noise {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* Tiny noise layer */}
//       <div className="hire-page-noise pointer-events-none fixed inset-0 z-[3] opacity-[0.015] mix-blend-soft-light" />

//       {/* Mouse reactive background */}
//       <MouseSpotlight />

//       {/* Page scroll progress */}
//       <motion.div
//         style={{ scaleX: progressScale }}
//         className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-[#6D28D9] via-[#A78BFA] to-[#DDD6FE]"
//       />

//       {/* Existing Header */}
//       <div className="relative z-[100] w-full">
//         <Header />
//       </div>

//       <HeroSection />

//       <TechnologyStrip />

//       <CapabilityIntro />

//       <DeveloperDirectory />

//       <WhyHYI />

//       <TechnologyUniverse />

//       <HiringProcess />

//       <EngagementModels />

//       <EngineeringArchitecture />

//       <FAQSection />

//       <FinalCTA />

//       {/* Existing Footer */}
//       <Footer />

    
//     </main>
//   );
// }








export default function HireDeveloperpage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-white">
       <HireDeveloperSection/>
    </main>
  );
}