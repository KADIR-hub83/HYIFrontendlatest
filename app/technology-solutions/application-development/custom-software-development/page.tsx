import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Puzzle,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    no: "01",
    icon: Puzzle,
    title: "Business-Specific Software",
    description:
      "Software engineered around your exact operations, teams, workflows and business model — not around generic templates.",
  },
  {
    no: "02",
    icon: Workflow,
    title: "Process Automation",
    description:
      "Digitize repetitive business operations with intelligent workflows, approvals, task automation and connected systems.",
  },
  {
    no: "03",
    icon: Database,
    title: "Data-Driven Applications",
    description:
      "Transform operational data into usable systems with dashboards, analytics, reporting and connected data architecture.",
  },
  {
    no: "04",
    icon: Network,
    title: "System Integrations",
    description:
      "Connect internal tools, third-party platforms, databases and APIs into one unified business ecosystem.",
  },
  {
    no: "05",
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Authentication, permissions, protected data, API security and reliable infrastructure built into the product from the start.",
  },
  {
    no: "06",
    icon: BrainCircuit,
    title: "AI-Enabled Software",
    description:
      "Integrate AI assistants, automation, recommendations, intelligent search and decision-support systems into your software.",
  },
];

const process = [
  {
    no: "01",
    title: "Business Discovery",
    description:
      "We understand your current processes, pain points, users, operational bottlenecks and long-term objectives.",
  },
  {
    no: "02",
    title: "Solution Architecture",
    description:
      "We define the product architecture, workflows, database structure, integrations, user roles and security model.",
  },
  {
    no: "03",
    title: "Experience Design",
    description:
      "Complex business processes are transformed into intuitive interfaces and clear task flows.",
  },
  {
    no: "04",
    title: "Software Engineering",
    description:
      "Frontend, backend, databases, APIs, automation and third-party integrations are built as one connected system.",
  },
  {
    no: "05",
    title: "Testing & Validation",
    description:
      "Functional flows, permissions, integrations, performance and real-world edge cases are validated before release.",
  },
  {
    no: "06",
    title: "Launch & Continuous Evolution",
    description:
      "We deploy, monitor and improve the platform as users, features and business requirements continue to evolve.",
  },
];

const softwareTypes = [
  "CRM Platforms",
  "ERP Systems",
  "Operations Portals",
  "Internal Business Tools",
  "Customer Portals",
  "Admin Dashboards",
  "Workflow Systems",
  "Booking Platforms",
  "Marketplace Systems",
  "Analytics Platforms",
  "Automation Software",
  "AI Business Applications",
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "Docker",
  "AWS",
  "REST APIs",
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative min-h-[1080px] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[#030303]" />

        <div className="absolute left-1/2 top-[28%] h-[850px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[180px]" />

        <div className="absolute -left-[20%] top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[160px]" />

        <div className="absolute -right-[20%] top-[40%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Custom Software Development
            </div>

            <h1 className="mt-7 text-[43px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[90px]">
              Software shaped around
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#E879F9] bg-clip-text text-transparent">
                how your business works.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
              HYI designs and engineers custom software systems that solve
              specific business problems, automate operations and create
              long-term technology advantages.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#8B5CF6] px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.3)] transition hover:scale-[1.02]">
                Build Your Software
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm text-white/65 backdrop-blur-xl transition hover:bg-white/[0.07]">
                Explore Capabilities
              </button>
            </div>
          </div>

          {/* SOFTWARE CONTROL SYSTEM */}
          <div className="relative mx-auto mt-20 max-w-[1320px]">
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0A0A0F]/95 shadow-[0_50px_160px_rgba(0,0,0,.75)] backdrop-blur-2xl">
              {/* top bar */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <div className="hidden rounded-full border border-white/[0.07] bg-white/[0.03] px-14 py-2 text-[10px] text-white/25 sm:block">
                  Custom Business Platform
                </div>

                <div className="flex gap-3 text-white/25">
                  <Activity className="h-4 w-4" />
                  <Settings2 className="h-4 w-4" />
                </div>
              </div>

              <div className="grid min-h-[610px] lg:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-white/[0.07] bg-black/20 p-5 lg:block">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                      <Puzzle className="h-5 w-5 text-purple-300" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Business OS</p>
                      <p className="text-[10px] text-white/25">
                        Custom Software
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Dashboard",
                      "Operations",
                      "Automation",
                      "Customers",
                      "Analytics",
                      "Settings",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-xs ${
                          index === 0
                            ? "bg-purple-500/15 text-purple-200"
                            : "text-white/35"
                        }`}
                      >
                        <span>{item}</span>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs text-white/30">
                        Business intelligence
                      </p>
                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                        Operations Dashboard
                      </h3>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      System live
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {[
                      ["184", "Active processes"],
                      ["3.8k", "Daily operations"],
                      ["42%", "Automation gain"],
                      ["99.9%", "Availability"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5"
                      >
                        <p className="text-xl font-semibold sm:text-2xl">
                          {value}
                        </p>
                        <p className="mt-2 text-[10px] text-white/30 sm:text-xs">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
                    {/* Graph */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Process performance
                          </p>
                          <p className="mt-1 text-[10px] text-white/25">
                            Activity over time
                          </p>
                        </div>

                        <Gauge className="h-5 w-5 text-purple-300" />
                      </div>

                      <div className="mt-9 flex h-[190px] items-end gap-2 sm:h-[220px] sm:gap-3">
                        {[
                          34, 45, 39, 56, 48, 68, 62, 78, 66, 85, 73, 91,
                          82, 96,
                        ].map((height, index) => (
                          <div
                            key={index}
                            className="relative flex-1 rounded-t-lg bg-gradient-to-t from-purple-900/25 to-purple-400/80"
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute inset-x-0 top-0 h-px bg-purple-200/60" />
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-between text-[9px] text-white/20">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                      </div>
                    </div>

                    {/* Automation status */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm font-medium">Automation status</p>
                      <p className="mt-1 text-[10px] text-white/25">
                        Active workflows
                      </p>

                      <div className="mt-6 space-y-3">
                        {[
                          ["Lead qualification", "Running"],
                          ["Invoice processing", "Running"],
                          ["Customer onboarding", "Optimized"],
                          ["Approval workflow", "Running"],
                        ].map(([label, status], index) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/[0.06] bg-black/20 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-white/50">
                                {label}
                              </span>
                              <span className="text-[9px] text-emerald-300">
                                {status}
                              </span>
                            </div>

                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-300"
                                style={{
                                  width: `${78 + index * 6}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-8 right-[6%] hidden rounded-2xl border border-purple-400/20 bg-[#100D18]/90 p-4 shadow-2xl backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <BrainCircuit className="h-4 w-4 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/35">AI assistant</p>
                  <p className="mt-1 text-sm font-medium">
                    12 opportunities detected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Built around your reality
          </p>

          <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Your business should not adapt
            <span className="block text-white/25">
              to off-the-shelf software.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
            Custom software gives you the freedom to design technology around
            your workflows, users and business model instead of forcing your
            organization into generic systems.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-white/[0.08] py-10 md:grid-cols-4">
          {[
            ["Tailored", "Business Logic"],
            ["Connected", "Systems"],
            ["Automated", "Operations"],
            ["Scalable", "Technology"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`px-4 text-center ${
                index !== 3 ? "md:border-r md:border-white/[0.08]" : ""
              }`}
            >
              <p className="text-xl font-semibold md:text-3xl">{value}</p>
              <p className="mt-2 text-xs text-white/30">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Custom development capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Software engineered for
              <span className="block text-white/25">
                your exact business requirements.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition duration-500 hover:-translate-y-1 hover:border-purple-400/25 md:p-9"
                >
                  <div className="absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full bg-purple-700/0 blur-[90px] transition group-hover:bg-purple-700/15" />

                  <div className="relative flex justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <span className="text-sm text-white/15">{item.no}</span>
                  </div>

                  <div className="relative mt-20">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOFTWARE ARCHITECTURE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#08080C] px-5 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800/10 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Orbit className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              A complete software ecosystem,
              <span className="block text-white/25">
                not just another interface.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/40">
              Custom software becomes the connection point between people,
              processes, data and business intelligence.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="mx-auto max-w-md rounded-2xl border border-purple-400/25 bg-purple-500/10 p-5 text-center">
              <Globe2 className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 text-sm font-medium">
                User Experience Layer
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                Web · Mobile · Admin · Portals
              </p>
            </div>

            <div className="mx-auto h-12 w-px bg-gradient-to-b from-purple-400/50 to-white/10" />

            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <Network className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 text-sm font-medium">
                Application Services
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                Business Logic · APIs · Authentication · Automation
              </p>
            </div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  icon: Database,
                  title: "Data Layer",
                  text: "Databases · Storage",
                },
                {
                  icon: GitBranch,
                  title: "Integrations",
                  text: "APIs · External Systems",
                },
                {
                  icon: BrainCircuit,
                  title: "Intelligence",
                  text: "AI · Analytics · Automation",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-center"
                  >
                    <Icon className="mx-auto h-5 w-5 text-purple-300" />
                    <p className="mt-4 text-sm font-medium">{item.title}</p>
                    <p className="mt-2 text-[10px] text-white/25">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-black/30 p-5 text-center">
              <Cloud className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 text-sm font-medium">
                Scalable Cloud Infrastructure
              </p>
              <p className="mt-1 text-[10px] text-white/25">
                Compute · Deployment · Monitoring · Scaling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTOMATION FLOW
      ========================================================= */}
      <section className="relative border-y border-white/[0.08] py-28 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/[0.08] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Business automation
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl lg:text-7xl">
              Turn manual work
              <span className="block text-white/25">
                into intelligent systems.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090D] p-5 md:p-10">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_80px_1fr_80px_1fr]">
              {[
                {
                  icon: Boxes,
                  title: "Business Input",
                  text: "Request or event",
                },
                {
                  icon: Workflow,
                  title: "Automated Workflow",
                  text: "Process & intelligence",
                },
                {
                  icon: Check,
                  title: "Business Outcome",
                  text: "Action completed",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="contents">
                    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                        <Icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <p className="mt-5 font-medium">{item.title}</p>
                      <p className="mt-2 text-xs text-white/30">{item.text}</p>
                    </div>

                    {index < 2 && (
                      <div className="hidden items-center md:flex">
                        <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-purple-400/50" />
                        <ChevronRight className="h-4 w-4 text-purple-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOFTWARE TYPES
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            What we can build
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            One development partner,
            <span className="block text-white/25">
              unlimited software possibilities.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
          {softwareTypes.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm text-white/45 transition hover:border-purple-400/25 hover:bg-purple-500/[0.08] hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECURITY / RELIABILITY
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#150D20] to-[#070708] p-8 md:p-12">
              <div className="absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[100px]" />

              <div className="relative">
                <LockKeyhole className="h-7 w-7 text-purple-300" />

                <h2 className="mt-7 text-3xl font-semibold md:text-5xl">
                  Secure by architecture.
                </h2>

                <p className="mt-6 max-w-lg leading-8 text-white/40">
                  Security is designed into authentication, permissions,
                  APIs, data access and cloud infrastructure.
                </p>

                <div className="mt-10 space-y-3">
                  {[
                    "Authentication & authorization",
                    "Role-based permissions",
                    "Protected APIs",
                    "Sensitive data controls",
                    "Infrastructure security",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <Check className="h-4 w-4 text-purple-400" />
                      {item}
                    </div>
                  ))}
                </div>

                <Fingerprint className="absolute -bottom-24 -right-5 h-[230px] w-[230px] text-purple-500/[0.06]" />
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#10101D] to-[#070708] p-8 md:p-12">
              <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-indigo-700/20 blur-[100px]" />

              <div className="relative">
                <Gauge className="h-7 w-7 text-blue-300" />

                <h2 className="mt-7 text-3xl font-semibold md:text-5xl">
                  Built for real business load.
                </h2>

                <p className="mt-6 max-w-lg leading-8 text-white/40">
                  Performance, scalability and reliability are considered
                  across application code, database access and infrastructure.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  {[
                    ["Fast", "Response"],
                    ["Stable", "Workflows"],
                    ["Scalable", "Architecture"],
                    ["Reliable", "Infrastructure"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
                    >
                      <p className="text-xl font-semibold">{value}</p>
                      <p className="mt-2 text-xs text-white/30">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Development process
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            From business problem
            <span className="block text-white/25">
              to production software.
            </span>
          </h2>
        </div>

        <div className="mt-16">
          {process.map((item) => (
            <div
              key={item.no}
              className="group grid gap-4 border-t border-white/[0.08] py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-12 md:py-11"
            >
              <span className="text-sm font-medium text-purple-400">
                {item.no}
              </span>

              <h3 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TECH STACK
      ========================================================= */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Technology foundation
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Built with modern technology,
              <span className="block text-white/25">
                selected for your system.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stack.map((item) => (
              <div
                key={item}
                className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50 transition hover:border-purple-400/25 hover:bg-purple-500/[0.07] hover:text-white"
              >
                <Code2 className="mr-2 h-4 w-4 text-purple-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SCALE / VALUE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <Zap className="mx-auto h-8 w-8 text-purple-300" />

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Software that creates
            <span className="block text-white/25">
              measurable operational value.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Faster", "business operations"],
            ["Lower", "manual workload"],
            ["Better", "data visibility"],
            ["Scalable", "digital foundation"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] px-6 py-10 text-center"
            >
              <p className="text-2xl font-semibold md:text-3xl">{value}</p>
              <p className="mt-3 text-sm text-white/30">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-28 md:px-8 lg:px-12 lg:pb-40">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[42px] border border-purple-400/15 bg-[#0B0710] px-6 py-20 text-center md:px-12 lg:py-32">
          <div className="absolute left-1/2 top-[-260px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[170px]" />

          <div className="relative mx-auto max-w-5xl">
            <Rocket className="mx-auto h-8 w-8 text-purple-300" />

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
              Build with HYI
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Turn your business logic
              <span className="block text-white/25">
                into powerful software.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/40">
              Partner with HYI to build custom software that fits your
              operations, supports your team and evolves with your business.
            </p>

            <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#8B5CF6] px-8 py-4 font-medium shadow-[0_15px_60px_rgba(124,58,237,.3)]">
              Talk to Our Experts
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}