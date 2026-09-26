// import Footer from "@/components/section/general/footer";
// import Header from "@/components/section/general/header";

// const engineeringServices = [
//   {
//     number: "01",
//     title: "Product Engineering",
//     description:
//       "Build scalable, secure, and high-performance digital products with dedicated engineering teams aligned to your business goals.",
//     tags: ["Web Platforms", "SaaS", "Enterprise Apps"],
//   },
//   {
//     number: "02",
//     title: "Cloud & DevOps",
//     description:
//       "Modernize infrastructure with cloud-native architecture, automated delivery pipelines, monitoring, and reliable DevOps operations.",
//     tags: ["AWS", "Azure", "CI/CD"],
//   },
//   {
//     number: "03",
//     title: "AI & Data Engineering",
//     description:
//       "Turn enterprise data into intelligent products through AI engineering, analytics, automation, and production-ready data platforms.",
//     tags: ["AI/ML", "Data", "Automation"],
//   },
//   {
//     number: "04",
//     title: "Quality Engineering",
//     description:
//       "Accelerate releases while maintaining reliability with automated testing, performance engineering, and continuous quality assurance.",
//     tags: ["Automation", "QA", "Performance"],
//   },
//   {
//     number: "05",
//     title: "Platform Engineering",
//     description:
//       "Create internal engineering platforms that improve developer productivity, standardize workflows, and simplify infrastructure management.",
//     tags: ["Kubernetes", "Platform", "SRE"],
//   },
//   {
//     number: "06",
//     title: "Cyber Resilient Engineering",
//     description:
//       "Embed security into every engineering stage with secure architecture, DevSecOps practices, monitoring, and proactive risk controls.",
//     tags: ["DevSecOps", "Security", "Compliance"],
//   },
// ];

// const engineeringStack = [
//   "React",
//   "Next.js",
//   "Node.js",
//   "Python",
//   "Java",
//   ".NET",
//   "AWS",
//   "Azure",
//   "Docker",
//   "Kubernetes",
//   "AI / ML",
//   "Data",
// ];

// const deliverySteps = [
//   {
//     step: "01",
//     title: "Discover",
//     description:
//       "Understand your product roadmap, existing architecture, business priorities, and engineering gaps.",
//   },
//   {
//     step: "02",
//     title: "Build The Team",
//     description:
//       "Deploy specialized engineers and technology experts matched to your domain, stack, and delivery requirements.",
//   },
//   {
//     step: "03",
//     title: "Engineer",
//     description:
//       "Execute through agile product engineering with strong architecture, automation, quality, and security practices.",
//   },
//   {
//     step: "04",
//     title: "Scale",
//     description:
//       "Continuously optimize engineering velocity, platform maturity, cost efficiency, reliability, and team capability.",
//   },
// ];

// export default function TechnologyEngineeringCenter() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#030306] text-white">
//       {/* ========================================
//           GLOBAL BACKGROUND EFFECTS
//       ======================================== */}

//       <div className="pointer-events-none absolute left-[-250px] top-[150px] h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[170px]" />

//       <div className="pointer-events-none absolute right-[-250px] top-[350px] h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[180px]" />

//       <Header />

//       <main className="relative z-10">

//         {/* ========================================
//             HERO SECTION
//         ======================================== */}

//         <section className="relative min-h-[780px] overflow-hidden border-b border-white/[0.05]">
//           {/* Hero background grid */}
//           <div
//             className="pointer-events-none absolute inset-0 opacity-[0.15]"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(139,92,246,0.20) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(139,92,246,0.20) 1px, transparent 1px)
//               `,
//               backgroundSize: "70px 70px",
//               maskImage:
//                 "linear-gradient(to bottom, transparent, black 30%, transparent 95%)",
//             }}
//           />

//           {/* Hero glow */}
//           <div className="pointer-events-none absolute left-[15%] top-[20%] h-[500px] w-[700px] rounded-full bg-fuchsia-700/[0.14] blur-[150px]" />

//           <div className="mx-auto grid min-h-[780px] max-w-[1450px] grid-cols-1 items-center gap-14 px-6 pb-20 pt-36 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">

//             {/* LEFT */}
//             <div className="relative z-10">
//               <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-400/[0.07] px-4 py-2 text-sm text-purple-200 backdrop-blur-xl">
//                 <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,1)]" />
//                 Global Capability Center
//               </div>

//               <h1 className="max-w-[680px] text-[42px] font-semibold leading-[1.06] tracking-[-1.5px] text-white md:text-[58px] lg:text-[68px]">
//                 Technology &
//                 <span className="mt-2 block bg-gradient-to-r from-[#B96CFF] via-[#8E62FF] to-[#6857FF] bg-clip-text text-transparent">
//                   Engineering Center
//                 </span>
//               </h1>

//               <p className="mt-7 max-w-[630px] text-[17px] leading-8 text-white/60 md:text-[18px]">
//                 Build high-performing global engineering capabilities with
//                 dedicated technology teams, modern platforms, AI-driven
//                 development, and scalable delivery models.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7537EA] to-[#8D54FF] px-7 py-3.5 text-[15px] font-medium shadow-[0_10px_40px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.45)]">
//                   Build Your Engineering Center
//                   <span className="transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>

//                 <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-[15px] text-white/80 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-purple-400/[0.08]">
//                   Explore Capabilities
//                 </button>
//               </div>

//               {/* Mini stats */}
//               <div className="mt-14 grid max-w-[650px] grid-cols-3 gap-3">
//                 {[
//                   ["24/7", "Engineering"],
//                   ["Agile", "Delivery"],
//                   ["Global", "Talent"],
//                 ].map(([value, title]) => (
//                   <div
//                     key={title}
//                     className="border-l border-purple-400/30 pl-4"
//                   >
//                     <p className="text-xl font-semibold text-white">{value}</p>
//                     <p className="mt-1 text-xs text-white/40">{title}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT ENGINEERING VISUAL */}
//             <div className="relative flex min-h-[530px] items-center justify-center">
//               <div className="absolute h-[470px] w-[470px] rounded-full border border-purple-400/10" />
//               <div className="absolute h-[370px] w-[370px] rounded-full border border-purple-400/[0.15]" />
//               <div className="absolute h-[270px] w-[270px] rounded-full border border-purple-400/20" />

//               <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-600/[0.12] blur-[90px]" />

//               {/* Center orb */}
//               <div className="relative z-10 flex h-[190px] w-[190px] items-center justify-center rounded-full border border-purple-300/20 bg-gradient-to-br from-[#191029] to-[#08050e] shadow-[0_0_90px_rgba(132,74,255,0.25)]">
//                 <div className="absolute inset-4 rounded-full border border-purple-400/20" />

//                 <div className="absolute inset-9 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-800/10 shadow-[inset_0_0_40px_rgba(168,85,247,0.2)]" />

//                 <div className="relative text-center">
//                   <p className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-4xl font-bold text-transparent">
//                     TEC
//                   </p>
//                   <p className="mt-2 text-[10px] uppercase tracking-[3px] text-white/30">
//                     Engineering
//                   </p>
//                 </div>
//               </div>

//               {/* Orbit nodes */}
//               {[
//                 {
//                   title: "AI",
//                   className: "left-[5%] top-[18%]",
//                 },
//                 {
//                   title: "WEB",
//                   className: "right-[5%] top-[19%]",
//                 },
//                 {
//                   title: "DATA",
//                   className: "left-[4%] bottom-[21%]",
//                 },
//                 {
//                   title: "CLOUD",
//                   className: "right-[2%] bottom-[23%]",
//                 },
//                 {
//                   title: "DEVOPS",
//                   className: "left-[40%] top-[2%]",
//                 },
//                 {
//                   title: "QA",
//                   className: "left-[43%] bottom-[0%]",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className={`absolute ${item.className} z-20 flex h-[80px] w-[80px] items-center justify-center rounded-2xl border border-[#5845a4]/30 bg-[#0c0d18]/90 shadow-[0_0_35px_rgba(100,60,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_0_45px_rgba(132,74,255,0.3)]`}
//                 >
//                   <span className="text-xs font-semibold tracking-wider text-purple-200">
//                     {item.title}
//                   </span>
//                 </div>
//               ))}

//               {/* Decorative dots */}
//               <div className="absolute left-[17%] top-[48%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
//               <div className="absolute right-[17%] top-[49%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_20px_#6366f1]" />
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             INTRO SECTION
//         ======================================== */}

//         <section className="relative py-28 md:py-36">
//           <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-20 px-6 md:px-10 lg:grid-cols-2 lg:px-16">

//             {/* LEFT VISUAL */}
//             <div className="relative flex min-h-[500px] items-center justify-center">
//               <div className="absolute h-[430px] w-[430px] rounded-full bg-purple-700/10 blur-[100px]" />

//               <div className="relative w-full max-w-[530px] rounded-[35px] border border-white/[0.08] bg-gradient-to-br from-[#0c0d17] to-[#07070b] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
//                 <div className="rounded-[28px] border border-purple-400/[0.12] bg-[#050508] p-7">

//                   {/* Fake software window */}
//                   <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-5">
//                     <div className="flex gap-2">
//                       <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-purple-400/60" />
//                     </div>

//                     <p className="text-[11px] uppercase tracking-[2px] text-white/30">
//                       Engineering Platform
//                     </p>
//                   </div>

//                   <div className="space-y-4">
//                     {[
//                       ["Product Engineering", "94%"],
//                       ["Cloud Infrastructure", "87%"],
//                       ["AI & Data Platform", "91%"],
//                       ["DevOps Automation", "89%"],
//                     ].map(([label, number], index) => (
//                       <div
//                         key={label}
//                         className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-5"
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm text-white/70">{label}</span>
//                           <span className="text-xs text-purple-300">
//                             {number}
//                           </span>
//                         </div>

//                         <div className="mt-4 h-[5px] overflow-hidden rounded-full bg-white/[0.05]">
//                           <div
//                             className="h-full rounded-full bg-gradient-to-r from-purple-700 to-violet-400"
//                             style={{
//                               width:
//                                 index === 0
//                                   ? "94%"
//                                   : index === 1
//                                   ? "87%"
//                                   : index === 2
//                                   ? "91%"
//                                   : "89%",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div>
//               <div className="mb-5 inline-flex rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2 text-xs uppercase tracking-[2px] text-purple-300">
//                 Build. Modernize. Scale.
//               </div>

//               <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-[-1px] md:text-[46px]">
//                 Build A World-Class
//                 <span className="block bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
//                   Engineering Capability
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-[670px] text-[17px] leading-8 text-white/55">
//                 HYI.AI Technology & Engineering Center enables enterprises to
//                 access specialized engineering talent, modern development
//                 practices, and scalable digital infrastructure through a
//                 globally integrated delivery model.
//               </p>

//               <p className="mt-5 max-w-[670px] text-[17px] leading-8 text-white/55">
//                 From product development and cloud transformation to AI,
//                 platform engineering, DevOps, and quality engineering — we
//                 create technology capabilities designed for continuous
//                 innovation.
//               </p>

//               <div className="mt-9 grid grid-cols-2 gap-4">
//                 {[
//                   "Faster Engineering Velocity",
//                   "Specialized Global Talent",
//                   "Modern Architecture",
//                   "Enterprise-Grade Security",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 text-sm text-white/70"
//                   >
//                     <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-500/10 text-xs text-purple-300">
//                       ✓
//                     </div>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             ENGINEERING SERVICES
//         ======================================== */}

//         <section className="relative border-y border-white/[0.05] bg-[#05050b] py-28">
//           <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-purple-700/[0.12] blur-[150px]" />

//           <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
//             <div className="mx-auto mb-16 max-w-[800px] text-center">
//               <div className="mb-5 inline-flex rounded-full bg-gradient-to-r from-purple-900/70 to-indigo-900/60 px-5 py-2 text-sm text-purple-100">
//                 Engineering Capabilities
//               </div>

//               <h2 className="text-3xl font-semibold tracking-[-1px] md:text-[45px]">
//                 Everything You Need To Build And Scale
//               </h2>

//               <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-white/45">
//                 Integrated engineering capabilities designed to help global
//                 enterprises launch faster, modernize smarter, and operate at
//                 scale.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {engineeringServices.map((service) => (
//                 <div
//                   key={service.title}
//                   className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#0d0f1b] via-[#090a11] to-[#08080d] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30"
//                 >
//                   <div className="pointer-events-none absolute bottom-[-90px] right-[-80px] h-[230px] w-[230px] rounded-full bg-purple-600/0 blur-[70px] transition-all duration-500 group-hover:bg-purple-600/20" />

//                   <div className="relative z-10 flex h-full flex-col">
//                     <div className="flex items-center justify-between">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] text-sm font-semibold text-purple-300">
//                         {service.number}
//                       </div>

//                       <span className="text-xl text-white/15 transition-all group-hover:translate-x-1 group-hover:text-purple-300">
//                         ↗
//                       </span>
//                     </div>

//                     <h3 className="mt-8 text-xl font-semibold">
//                       {service.title}
//                     </h3>

//                     <p className="mt-4 flex-1 text-[15px] leading-7 text-white/50">
//                       {service.description}
//                     </p>

//                     <div className="mt-7 flex flex-wrap gap-2">
//                       {service.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/45"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             TECH STACK
//         ======================================== */}

//         <section className="relative py-28">
//           <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
//             <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">

//               <div>
//                 <div className="mb-5 text-sm font-medium uppercase tracking-[3px] text-purple-400">
//                   Technology Ecosystem
//                 </div>

//                 <h2 className="text-3xl font-semibold leading-tight tracking-[-1px] md:text-[44px]">
//                   Engineering Across
//                   <span className="block text-white/45">
//                     Modern Technology Stacks
//                   </span>
//                 </h2>

//                 <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-white/50">
//                   Assemble multidisciplinary engineering teams across frontend,
//                   backend, cloud, AI, data, DevOps, platform engineering and
//                   enterprise technologies.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
//                 {engineeringStack.map((tech, index) => (
//                   <div
//                     key={tech}
//                     className="group relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0a0b12] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30"
//                   >
//                     <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition-all group-hover:via-purple-500" />

//                     <div className="text-center">
//                       <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/[0.06] text-xs font-semibold text-purple-300">
//                         {String(index + 1).padStart(2, "0")}
//                       </div>

//                       <p className="text-sm font-medium text-white/70 transition group-hover:text-white">
//                         {tech}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             HOW WE BUILD
//         ======================================== */}

//         <section className="relative overflow-hidden bg-[#070711] py-28">
//           <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.08] blur-[170px]" />

//           <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
//             <div className="mb-16 max-w-[760px]">
//               <div className="mb-5 inline-flex rounded-full border border-white/[0.07] px-4 py-2 text-sm text-white/60">
//                 Our Engineering Model
//               </div>

//               <h2 className="text-3xl font-semibold leading-tight md:text-[46px]">
//                 From Strategy To
//                 <span className="text-purple-400"> Scalable Engineering</span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
//               {deliverySteps.map((item, index) => (
//                 <div
//                   key={item.step}
//                   className="relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7"
//                 >
//                   {index !== deliverySteps.length - 1 && (
//                     <div className="absolute right-[-20px] top-[63px] hidden h-[1px] w-10 bg-purple-500/30 lg:block" />
//                   )}

//                   <div className="text-sm font-medium text-purple-400">
//                     / {item.step}
//                   </div>

//                   <div className="mt-14 flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/[0.07]">
//                     <div className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />
//                   </div>

//                   <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

//                   <p className="mt-4 text-[15px] leading-7 text-white/45">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             BUSINESS IMPACT
//         ======================================== */}

//         <section className="relative py-28">
//           <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
//             <div className="overflow-hidden rounded-[36px] border border-purple-400/[0.12] bg-gradient-to-br from-[#10091f] via-[#090811] to-[#08080d]">

//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
//                 <div className="p-8 md:p-14 lg:p-16">
//                   <div className="text-sm uppercase tracking-[3px] text-purple-400">
//                     Business Impact
//                   </div>

//                   <h2 className="mt-6 max-w-[600px] text-3xl font-semibold leading-tight md:text-[44px]">
//                     Engineering Designed For
//                     <span className="block text-purple-300">
//                       Measurable Outcomes
//                     </span>
//                   </h2>

//                   <p className="mt-6 max-w-[570px] text-[16px] leading-8 text-white/50">
//                     Move beyond traditional outsourcing. Build a strategic
//                     engineering capability that improves speed, quality,
//                     resilience, innovation, and long-term technology ownership.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 border-t border-white/[0.06] lg:border-l lg:border-t-0">
//                   {[
//                     ["40%", "Faster Delivery"],
//                     ["24/7", "Global Operations"],
//                     ["360°", "Engineering Coverage"],
//                     ["Scale", "On Demand"],
//                   ].map(([value, text]) => (
//                     <div
//                       key={text}
//                       className="flex min-h-[180px] flex-col items-center justify-center border-b border-r border-white/[0.06] p-6 text-center"
//                     >
//                       <div className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
//                         {value}
//                       </div>

//                       <div className="mt-3 text-sm text-white/40">{text}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================
//             FINAL CTA
//         ======================================== */}

//         <section className="relative px-6 pb-28 pt-10 md:px-10 lg:px-16">
//           <div className="pointer-events-none absolute bottom-[50px] left-1/2 h-[300px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700/[0.13] blur-[120px]" />

//           <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[35px] border border-purple-300/[0.15] bg-gradient-to-br from-purple-950/60 via-[#0d0918] to-[#08080c] px-7 py-16 text-center md:px-12 md:py-20">

//             {/* decorative lines */}
//             <div
//               className="pointer-events-none absolute inset-0 opacity-[0.07]"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
//                   linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
//                 `,
//                 backgroundSize: "45px 45px",
//               }}
//             />

//             <div className="relative z-10">
//               <div className="mx-auto mb-7 inline-flex rounded-full border border-purple-400/20 bg-purple-500/[0.1] px-5 py-2 text-sm text-purple-200">
//                 Your Next Engineering Advantage
//               </div>

//               <h2 className="mx-auto max-w-[850px] text-3xl font-semibold leading-tight tracking-[-1px] md:text-[50px]">
//                 Build Your Global Technology &
//                 <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
//                   Engineering Center With HYI.AI
//                 </span>
//               </h2>

//               <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-7 text-white/50">
//                 Access specialized talent, proven engineering practices, and
//                 scalable technology capabilities through one integrated GCC
//                 model.
//               </p>

//               <button className="group mt-9 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]">
//                 Start Building Your GCC
//                 <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }







import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import EngineeringHero from "@/components/section/gcc/technology-engineering/EngineeringHero";
import EngineeringCommandCenter from "@/components/section/gcc/technology-engineering/EngineeringCommandCenter";
import EngineeringCapabilities from "@/components/section/gcc/technology-engineering/EngineeringCapabilities";
import TechnologyEcosystem from "@/components/section/gcc/technology-engineering/TechnologyEcosystem";
import EngineeringPipeline from "@/components/section/gcc/technology-engineering/EngineeringPipeline";
import GlobalDeliveryNetwork from "@/components/section/gcc/technology-engineering/GlobalDeliveryNetwork";
import EngineeringImpact from "@/components/section/gcc/technology-engineering/EngineeringImpact";
import EngineeringCTA from "@/components/section/gcc/technology-engineering/EngineeringCTA";

export default function TechnologyEngineeringCenterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020203] text-white">
      <Header />

      <EngineeringHero />

      <EngineeringCommandCenter />

      <EngineeringCapabilities />

      <TechnologyEcosystem />

      <EngineeringPipeline />

      <GlobalDeliveryNetwork />

      <EngineeringImpact />

      <EngineeringCTA />

      <Footer />
    </main>
  );
}