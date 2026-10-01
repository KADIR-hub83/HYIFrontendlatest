import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
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
    icon: Building2,
    title: "Enterprise Platforms",
    description:
      "Mission-critical digital platforms designed around complex business processes, multiple departments and large user ecosystems.",
  },
  {
    no: "02",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Transform repetitive operations into connected digital workflows with intelligent routing, approvals and automation.",
  },
  {
    no: "03",
    icon: Database,
    title: "Data & System Integration",
    description:
      "Connect enterprise databases, legacy platforms, APIs and third-party systems through a unified integration architecture.",
  },
  {
    no: "04",
    icon: Cloud,
    title: "Cloud-Native Engineering",
    description:
      "Build resilient cloud applications engineered for scalability, availability, distributed workloads and continuous delivery.",
  },
  {
    no: "05",
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Identity, access control, secure APIs, encryption and governance engineered throughout the application architecture.",
  },
  {
    no: "06",
    icon: Sparkles,
    title: "AI-Enabled Operations",
    description:
      "Embed AI into enterprise workflows for intelligent assistance, automation, analysis and operational decision support.",
  },
];

const process = [
  {
    no: "01",
    title: "Enterprise Discovery",
    text: "We map business objectives, stakeholders, departments, existing systems, operational dependencies and long-term transformation goals.",
  },
  {
    no: "02",
    title: "Architecture Planning",
    text: "Application boundaries, services, data flows, security layers, integration patterns and deployment architecture are defined.",
  },
  {
    no: "03",
    title: "Experience Engineering",
    text: "Complex enterprise workflows are transformed into clear interfaces designed for productivity and adoption.",
  },
  {
    no: "04",
    title: "Application Development",
    text: "Frontend experiences, backend services, databases, integrations and automation are engineered as one connected platform.",
  },
  {
    no: "05",
    title: "Quality & Security",
    text: "Functional, integration, security and performance testing validate the platform across critical enterprise scenarios.",
  },
  {
    no: "06",
    title: "Deployment & Evolution",
    text: "Applications are released through controlled environments with monitoring, optimization and continuous product evolution.",
  },
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail & Commerce",
  "Logistics",
  "Professional Services",
  "Education",
  "Technology",
  "Energy",
  "Government",
  "Real Estate",
  "Telecommunications",
];

const technologies = [
  "React",
  "Next.js",
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

export default function EnterpriseApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC ENTERPRISE HERO
      ========================================================= */}
      <section className="relative min-h-[1050px] overflow-hidden border-b border-white/[0.08] lg:min-h-[1120px]">
        <div className="absolute inset-0 bg-[#030303]" />

        <div className="absolute left-1/2 top-[30%] h-[850px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/20 blur-[180px]" />

        <div className="absolute -left-[20%] top-[30%] h-[650px] w-[650px] rounded-full bg-indigo-900/10 blur-[170px]" />

        <div className="absolute -right-[20%] top-[40%] h-[700px] w-[700px] rounded-full bg-fuchsia-900/10 blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm">
              <Building2 className="h-4 w-4" />
              Enterprise Application Development
            </div>

            <h1 className="mt-7 text-[43px] font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Build the digital core
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#E879F9] bg-clip-text text-transparent">
                of your enterprise.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
              HYI designs and engineers secure, scalable enterprise
              applications that connect people, processes, data and
              intelligence across the organization.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#8B5CF6] px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.3)] transition hover:scale-[1.02]">
                Build Your Enterprise Platform
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm text-white/65 backdrop-blur-xl transition hover:bg-white/[0.07]">
                Explore Enterprise Solutions
              </button>
            </div>
          </div>

          {/* ENTERPRISE COMMAND CENTER */}
          <div className="relative mx-auto mt-20 max-w-[1320px]">
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0F]/95 shadow-[0_50px_160px_rgba(0,0,0,.75)] backdrop-blur-2xl">
              {/* Browser bar */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="hidden rounded-full border border-white/[0.07] bg-white/[0.03] px-16 py-2 text-[10px] text-white/25 sm:block">
                  Enterprise Control Center
                </div>

                <div className="flex gap-3 text-white/25">
                  <Activity className="h-4 w-4" />
                  <Settings2 className="h-4 w-4" />
                </div>
              </div>

              <div className="grid min-h-[600px] lg:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-white/[0.07] bg-black/20 p-5 lg:block">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                      <Building2 className="h-5 w-5 text-purple-300" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">HYI Enterprise</p>
                      <p className="text-[10px] text-white/25">
                        Organization OS
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Overview",
                      "Operations",
                      "Workflows",
                      "Analytics",
                      "Infrastructure",
                      "Security",
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
                        Organization overview
                      </p>
                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                        Enterprise Operations
                      </h3>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      All systems operational
                    </div>
                  </div>

                  {/* KPI */}
                  <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {[
                      ["99.99%", "Platform uptime"],
                      ["2.4M", "Daily operations"],
                      ["184", "Active workflows"],
                      ["38%", "Efficiency gain"],
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
                    {/* chart */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Operational performance
                          </p>
                          <p className="mt-1 text-[10px] text-white/25">
                            Real-time enterprise activity
                          </p>
                        </div>

                        <BarChart3 className="h-5 w-5 text-purple-300" />
                      </div>

                      <div className="mt-8 flex h-[180px] items-end gap-2 sm:h-[210px] sm:gap-3">
                        {[
                          36, 52, 43, 61, 57, 73, 65, 82, 70, 88, 77, 95,
                          83, 91,
                        ].map((height, index) => (
                          <div
                            key={index}
                            className="group relative flex-1 rounded-t-lg bg-gradient-to-t from-purple-900/30 to-purple-400/80"
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-purple-200/70" />
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-between text-[9px] text-white/20">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                      </div>
                    </div>

                    {/* system health */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm font-medium">System health</p>
                      <p className="mt-1 text-[10px] text-white/25">
                        Live infrastructure
                      </p>

                      <div className="mt-6 space-y-3">
                        {[
                          ["API Gateway", "99.99%"],
                          ["Database Cluster", "99.98%"],
                          ["Cloud Services", "100%"],
                          ["Identity Service", "99.99%"],
                        ].map(([label, value], index) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/[0.06] bg-black/20 p-3"
                          >
                            <div className="flex justify-between text-[11px]">
                              <span className="text-white/50">{label}</span>
                              <span className="text-emerald-300">{value}</span>
                            </div>

                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-300"
                                style={{
                                  width: `${96 + index}%`,
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

            {/* Floating card */}
            <div className="absolute -bottom-8 left-[5%] hidden rounded-2xl border border-purple-400/20 bg-[#100D18]/90 p-4 shadow-2xl backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <Sparkles className="h-4 w-4 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/35">AI optimization</p>
                  <p className="mt-1 text-sm font-medium">
                    14 workflows improved
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
            Digital enterprise engineering
          </p>

          <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Your business is complex.
            <span className="block text-white/25">
              Your technology shouldn&apos;t be.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
            We transform disconnected processes, systems and data into
            cohesive enterprise platforms that help teams operate faster,
            collaborate better and make smarter decisions.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-white/[0.08] py-10 md:grid-cols-4">
          {[
            ["Scalable", "Architecture"],
            ["Secure", "By Design"],
            ["Connected", "Enterprise Data"],
            ["Intelligent", "Automation"],
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
              Enterprise capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Technology designed around
              <span className="block text-white/25">
                how your organization works.
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
          ARCHITECTURE VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#08080C] px-5 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800/10 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Orbit className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              One connected
              <span className="block text-white/25">
                enterprise architecture.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/40">
              Users, applications, services and enterprise data operate as one
              connected digital ecosystem.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            {/* User layer */}
            <div className="mx-auto max-w-md rounded-2xl border border-purple-400/25 bg-purple-500/10 p-5 text-center">
              <Globe2 className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 text-sm font-medium">
                Enterprise Experience Layer
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                Web · Mobile · Internal Portals
              </p>
            </div>

            <div className="mx-auto h-12 w-px bg-gradient-to-b from-purple-400/50 to-white/10" />

            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <Network className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 text-sm font-medium">
                Enterprise API & Integration Layer
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                APIs · Services · Events · Integrations
              </p>
            </div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  icon: Database,
                  title: "Enterprise Data",
                  text: "Databases · Warehouses",
                },
                {
                  icon: Server,
                  title: "Core Services",
                  text: "Business · Processing",
                },
                {
                  icon: Sparkles,
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
                Secure Cloud Infrastructure
              </p>
              <p className="mt-1 text-[10px] text-white/25">
                Compute · Networking · Containers · Monitoring · Scaling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTOMATION
      ========================================================= */}
      <section className="relative border-y border-white/[0.08] py-28 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/[0.08] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Intelligent operations
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl lg:text-7xl">
              Turn complex operations
              <span className="block text-white/25">
                into intelligent workflows.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090D] p-5 md:p-10">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_80px_1fr_80px_1fr]">
              {[
                {
                  icon: Boxes,
                  title: "Business Event",
                  text: "Request received",
                },
                {
                  icon: GitBranch,
                  title: "Smart Workflow",
                  text: "Route & automate",
                },
                {
                  icon: Check,
                  title: "Business Outcome",
                  text: "Process completed",
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
          SECURITY
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[38px] border border-purple-400/15 bg-gradient-to-br from-[#150D20] via-[#09090D] to-[#050505] p-7 md:p-12 lg:p-16">
          <div className="absolute right-[-200px] top-[-200px] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[150px]" />

          <div className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <LockKeyhole className="mx-auto h-8 w-8 text-purple-300" />

              <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
                Enterprise-grade security
                <span className="block text-white/25">
                  from identity to infrastructure.
                </span>
              </h2>
            </div>

            <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Fingerprint,
                  title: "Identity",
                  text: "SSO & authentication",
                },
                {
                  icon: KeyRound,
                  title: "Access",
                  text: "Role-based permissions",
                },
                {
                  icon: ShieldCheck,
                  title: "Protection",
                  text: "Secure application layers",
                },
                {
                  icon: LockKeyhole,
                  title: "Data",
                  text: "Protected information",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/[0.08] bg-black/20 p-6 text-center backdrop-blur"
                  >
                    <Icon className="mx-auto h-5 w-5 text-purple-300" />
                    <p className="mt-4 font-medium">{item.title}</p>
                    <p className="mt-2 text-xs text-white/30">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCALE
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-5xl text-center">
            <Gauge className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Designed for today.
              <span className="block text-white/25">
                Engineered for what comes next.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Millions", "of transactions"],
              ["Global", "user ecosystems"],
              ["Always-on", "business operations"],
              ["Elastic", "cloud scalability"],
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
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Enterprise use cases
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Built around your industry,
            <span className="block text-white/25">
              not around a template.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm text-white/45 transition hover:border-purple-400/25 hover:bg-purple-500/[0.08] hover:text-white"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              How we engineer
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Enterprise development
              <span className="block text-white/25">
                without enterprise complexity.
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Technology foundation
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Modern engineering for
            <span className="block text-white/25">
              long-term enterprise growth.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50 transition hover:border-purple-400/25 hover:bg-purple-500/[0.07] hover:text-white"
            >
              <Code2 className="mr-2 h-4 w-4 text-purple-400" />
              {tech}
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
            <Zap className="mx-auto h-8 w-8 text-purple-300" />

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
              Transform your enterprise
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Build the platform your
              <span className="block text-white/25">
                next stage of growth needs.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/40">
              Partner with HYI to transform complex enterprise requirements
              into secure, connected and scalable digital products.
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