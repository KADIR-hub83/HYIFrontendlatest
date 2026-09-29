import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCcw,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
    type LucideIcon,
} from "lucide-react";

const modernizationServices = [
  {
    no: "01",
    icon: RefreshCcw,
    title: "Legacy Application Modernization",
    description:
      "Transform aging applications into maintainable, scalable and modern digital platforms.",
  },
  {
    no: "02",
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Move workloads and applications toward flexible cloud-native infrastructure.",
  },
  {
    no: "03",
    icon: Boxes,
    title: "Monolith to Modular Architecture",
    description:
      "Break complex legacy systems into maintainable services and independent modules.",
  },
  {
    no: "04",
    icon: Database,
    title: "Database Modernization",
    description:
      "Improve data access, reliability and scalability with modern database architecture.",
  },
  {
    no: "05",
    icon: Network,
    title: "API Enablement",
    description:
      "Expose legacy capabilities through secure APIs and connect modern applications.",
  },
  {
    no: "06",
    icon: ShieldCheck,
    title: "Security Modernization",
    description:
      "Modernize authentication, authorization and infrastructure protection.",
  },
];

const stages = [
  {
    no: "01",
    title: "Assess",
    text: "Application architecture, dependencies, performance, risk and modernization opportunities.",
  },
  {
    no: "02",
    title: "Architect",
    text: "Target architecture, migration strategy, services, APIs, infrastructure and data approach.",
  },
  {
    no: "03",
    title: "Transform",
    text: "Application layers are modernized incrementally without unnecessary disruption.",
  },
  {
    no: "04",
    title: "Validate",
    text: "Performance, functionality, integrations, security and reliability are tested.",
  },
  {
    no: "05",
    title: "Migrate",
    text: "Workloads and data are transitioned through controlled deployment stages.",
  },
  {
    no: "06",
    title: "Optimize",
    text: "Continuous monitoring and improvement prepare the platform for future growth.",
  },
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
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
];

export default function ApplicationModernizationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC IMAGE-FIRST HERO
      ========================================================= */}
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=95"
            alt="Modern cloud infrastructure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-[#030303]" />

          <div className="absolute left-1/2 top-[45%] h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/25 blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-center px-5 py-28 text-center md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-black/35 px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Application Modernization
            </div>

            <h1 className="mt-7 text-[45px] font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[94px]">
              Transform legacy systems
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
                into modern digital platforms.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
              Rebuild aging applications for cloud, performance, scalability
              and the next generation of business growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#9859F7] px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]">
                Modernize Your Application
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/15 bg-black/30 px-7 py-4 text-sm text-white/70 backdrop-blur-xl">
                Explore Modernization
              </button>
            </div>
          </div>

          {/* floating stats */}
          <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["Faster", "Releases"],
              ["Lower", "Technical Debt"],
              ["Modern", "Security"],
              ["Elastic", "Scale"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-black/35 px-5 py-5 backdrop-blur-xl"
              >
                <p className="text-xl font-semibold md:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-white/35">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER IMAGE VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="relative min-h-[540px] overflow-hidden rounded-[38px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=95"
              alt="Legacy technology system"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">
                Before
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Complex legacy architecture.
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Technical Debt",
                  "Slow Releases",
                  "Rigid Systems",
                  "Legacy Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden rounded-[38px] border border-purple-400/20">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=95"
              alt="Modern cloud architecture"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-purple-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
                After
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Modern cloud-native platform.
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Modular",
                  "Scalable",
                  "Secure",
                  "Cloud Ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-300/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE TRANSFORMATION IMAGE
      ========================================================= */}
      <section className="px-5 pb-24 md:px-8 lg:px-12 lg:pb-36">
        <div className="relative mx-auto min-h-[650px] max-w-[1450px] overflow-hidden rounded-[42px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2200&q=95"
            alt="Application modernization technology"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

          <div className="relative z-10 flex min-h-[650px] items-end p-8 md:p-12 lg:p-16">
            <div className="max-w-5xl">
              <RefreshCcw className="h-8 w-8 text-purple-300" />

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Modernization strategy
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                Modernize without rebuilding
                <span className="block text-white/40">
                  everything at once.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODERNIZATION SERVICES
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Modernization capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Modernize every layer
              <span className="block text-white/25">
                of your technology stack.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modernizationServices.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[320px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition hover:-translate-y-1 hover:border-purple-400/25"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-700/0 blur-[90px] transition group-hover:bg-purple-700/15" />

                  <div className="relative flex justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <span className="text-sm text-white/15">{item.no}</span>
                  </div>

                  <h3 className="relative mt-16 text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#08080C] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Layers3 className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              From monolith
              <span className="block text-white/25">
                to modern architecture.
              </span>
            </h2>
          </div>

          <div className="relative mx-auto mt-20 max-w-6xl">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_80px_1.4fr]">
              {/* legacy */}
              <div className="rounded-[30px] border border-red-400/10 bg-red-500/[0.03] p-7 text-center">
                <Server className="mx-auto h-7 w-7 text-red-300/70" />

                <p className="mt-5 text-lg font-medium">Legacy Monolith</p>

                <div className="mt-6 space-y-2">
                  {[
                    "Frontend",
                    "Business Logic",
                    "Database",
                    "Integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-xs text-white/35"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden items-center md:flex">
                <div className="h-px flex-1 bg-gradient-to-r from-red-400/20 to-purple-400/60" />
                <ChevronRight className="h-5 w-5 text-purple-400" />
              </div>

              {/* modern */}
              <div className="grid grid-cols-2 gap-3">
               {(
  [
    ["Frontend", Code2],
    ["API Services", Network],
    ["Cloud", Cloud],
    ["Data", Database],
    ["Automation", Workflow],
    ["Security", ShieldCheck],
  ] as [string, LucideIcon][]
).map(([title, Icon]) => (
  <div
    key={title}
    className="rounded-[24px] border border-purple-400/15 bg-purple-500/[0.05] p-6 text-center"
  >
    <Icon className="mx-auto h-5 w-5 text-purple-300" />
    <p className="mt-4 text-sm">{title}</p>
  </div>
))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE DASHBOARD
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0A0A0F]">
            <div className="flex flex-col justify-between gap-5 border-b border-white/[0.07] p-7 md:flex-row md:items-end md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
                  Modernization impact
                </p>

                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Performance after modernization.
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Platform healthy
              </div>
            </div>

            <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Performance</p>
                    <p className="mt-1 text-xs text-white/25">
                      Before vs modernized platform
                    </p>
                  </div>

                  <Gauge className="h-5 w-5 text-purple-300" />
                </div>

                <div className="mt-10 flex h-[270px] items-end gap-3">
                  {[
                    [30, 70],
                    [38, 76],
                    [35, 82],
                    [42, 88],
                    [49, 91],
                    [45, 96],
                  ].map(([legacy, modern], index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end justify-center gap-1.5"
                    >
                      <div
                        className="w-[38%] rounded-t-lg bg-white/10"
                        style={{ height: `${legacy}%` }}
                      />

                      <div
                        className="w-[38%] rounded-t-lg bg-gradient-to-t from-purple-800 to-purple-300"
                        style={{ height: `${modern}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center gap-6 text-xs">
                  <span className="flex items-center gap-2 text-white/30">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    Legacy
                  </span>

                  <span className="flex items-center gap-2 text-purple-300">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Modernized
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["3.4×", "Faster deployment"],
                  ["61%", "Lower response time"],
                  ["99.99%", "Availability"],
                  ["42%", "Lower infrastructure waste"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"
                  >
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-2 text-xs text-white/30">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOUD IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <div className="relative min-h-[650px] overflow-hidden rounded-[42px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2200&q=95"
            alt="Cloud infrastructure modernization"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />

          <div className="relative flex min-h-[650px] items-end p-8 md:p-12 lg:p-16">
            <div className="max-w-5xl">
              <Cloud className="h-8 w-8 text-purple-300" />

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Cloud ready
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                Infrastructure designed to
                <span className="block text-white/40">
                  scale with demand.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Modernization roadmap
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Transform incrementally.
              <span className="block text-white/25">
                Reduce transformation risk.
              </span>
            </h2>
          </div>

          <div className="mt-16">
            {stages.map((item) => (
              <div
                key={item.no}
                className="grid gap-4 border-t border-white/[0.08] py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-12 md:py-11"
              >
                <span className="text-sm text-purple-400">{item.no}</span>

                <h3 className="text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STACK
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Modern technology stack
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Replace technical debt
            <span className="block text-white/25">
              with a future-ready foundation.
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
      </section>

      {/* =========================================================
          FINAL IMAGE CTA
      ========================================================= */}
      <section className="px-5 pb-28 md:px-8 lg:px-12 lg:pb-40">
        <div className="relative mx-auto min-h-[680px] max-w-[1450px] overflow-hidden rounded-[44px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2200&q=95"
            alt="Modern digital technology environment"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />

          <div className="relative z-10 flex min-h-[680px] items-end justify-center px-6 py-16 text-center md:px-12 lg:py-20">
            <div className="max-w-5xl">
              <Rocket className="mx-auto h-8 w-8 text-purple-300" />

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Modernize with HYI
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Your existing application
                <span className="block text-white/40">
                  can become your next advantage.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/50">
                Modernize architecture, infrastructure, security and
                performance without losing the business value already inside
                your platform.
              </p>

              <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]">
                Start Your Modernization
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}