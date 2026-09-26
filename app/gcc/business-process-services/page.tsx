import BusinessProcessGlobe from "@/components/section/gcc/BusinessProcessGlobe";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

const services = [
  {
    number: "01",
    title: "Finance & Accounting",
    description:
      "Build efficient finance operations across accounts payable, receivables, reconciliations, reporting, compliance, and financial support.",
    tags: ["AP / AR", "Reporting", "Reconciliation"],
  },
  {
    number: "02",
    title: "Customer Experience",
    description:
      "Deliver consistent customer experiences through scalable support operations, service management, and intelligent engagement workflows.",
    tags: ["Customer Support", "CRM", "Service Ops"],
  },
  {
    number: "03",
    title: "HR & People Operations",
    description:
      "Streamline employee lifecycle processes including onboarding, payroll support, HR administration, documentation, and workforce operations.",
    tags: ["HR Ops", "Payroll", "Onboarding"],
  },
  {
    number: "04",
    title: "Procurement Operations",
    description:
      "Improve sourcing and procurement efficiency with structured vendor management, purchase operations, compliance, and analytics.",
    tags: ["Procurement", "Vendor Ops", "Analytics"],
  },
  {
    number: "05",
    title: "Data & Back-Office Operations",
    description:
      "Scale document processing, data operations, research, validation, reporting, and other high-volume business processes.",
    tags: ["Data Ops", "Validation", "Back Office"],
  },
  {
    number: "06",
    title: "AI-Enabled Process Automation",
    description:
      "Combine people, automation, and AI to reduce repetitive work, improve accuracy, and create faster enterprise workflows.",
    tags: ["AI", "Automation", "Workflow"],
  },
];

const operationSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your existing processes, operational gaps, SLAs, systems, business goals, and transformation priorities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team defines an optimized delivery model combining specialized talent, workflows, governance, and automation.",
  },
  {
    number: "03",
    title: "Transition",
    description:
      "Processes are transferred through structured knowledge management, documentation, quality controls, and operational readiness.",
  },
  {
    number: "04",
    title: "Operate & Improve",
    description:
      "We continuously manage performance, optimize workflows, improve service quality, and identify automation opportunities.",
  },
];

const technologies = [
  "AI Automation",
  "CRM",
  "ERP",
  "RPA",
  "Analytics",
  "Cloud",
  "Workflow",
  "Data",
];

const outcomes = [
  {
    value: "24/7",
    title: "Operations",
    text: "Globally distributed operating model.",
  },
  {
    value: "360°",
    title: "Governance",
    text: "Process visibility and performance oversight.",
  },
  {
    value: "AI",
    title: "Enabled",
    text: "Automation integrated across workflows.",
  },
  {
    value: "Scale",
    title: "On Demand",
    text: "Flexible capacity aligned to business demand.",
  },
];

export default function BusinessProcessServicesPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020204] text-white">
      {/* ==================================================
          GLOBAL BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute left-[-300px] top-[700px] h-[800px] w-[800px] rounded-full bg-purple-800/[0.10] blur-[190px]" />

      <div className="pointer-events-none absolute right-[-300px] top-[1500px] h-[750px] w-[750px] rounded-full bg-violet-600/[0.09] blur-[200px]" />

      <Header />

      <main className="relative z-10">
        {/* ==================================================
            PREMIUM BPS HERO
        ================================================== */}

        <section className="relative min-h-screen overflow-hidden border-b border-white/[0.05] bg-[#020204]">
          {/* ambient background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[25%] h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-[#6f21bd]/[0.10] blur-[180px]" />

            <div className="absolute left-[10%] top-[25%] h-[500px] w-[500px] rounded-full bg-fuchsia-900/[0.07] blur-[150px]" />

            <div className="absolute right-[7%] top-[18%] h-[500px] w-[500px] rounded-full bg-indigo-800/[0.06] blur-[150px]" />
          </div>

          {/* grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(142,80,255,.18) 1px, transparent 1px),
                linear-gradient(90deg,rgba(142,80,255,.18) 1px, transparent 1px)
              `,
              backgroundSize: "85px 85px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 35%, black 60%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 35%, black 60%, transparent 95%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 pt-16 md:px-10 md:pt-20 lg:px-16">
            {/* badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.16] bg-purple-500/[0.055] px-4 py-2 text-[10px] uppercase tracking-[2px] text-purple-200/70 backdrop-blur-xl md:text-[11px]">
                <span className="h-[5px] w-[5px] rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,110,255,1)]" />
                HYI.AI Global Capability Center
              </div>
            </div>

            {/* heading */}
            <div className="relative z-20 mx-auto mt-8 max-w-[1150px] text-center">
              <h1 className="text-[43px] font-semibold leading-[0.98] tracking-[-2px] text-white sm:text-[55px] md:text-[72px] md:tracking-[-3px] lg:text-[86px]">
                Business Process
                <span className="ml-0 block bg-gradient-to-r from-[#dfb0ff] via-[#a962ff] to-[#775cff] bg-clip-text text-transparent md:ml-3 md:inline">
                  Services
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-[680px] text-[13px] uppercase tracking-[2px] text-white/25 md:text-[14px]">
                Intelligent Global Operations · Delivered Through HYI.AI
              </p>

              <div className="mx-auto mt-7 h-px w-[180px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            </div>

            {/* globe */}
            <div className="-mt-2 md:-mt-8">
              <BusinessProcessGlobe />
            </div>

            {/* description */}
            <div className="relative z-30 mx-auto -mt-4 max-w-[850px] text-center md:-mt-8">
              <p className="mx-auto max-w-[790px] text-[15px] leading-8 text-white/46 md:text-[18px]">
                Build intelligent global operations through specialized talent,
                AI-powered workflows, structured governance and scalable
                business process capabilities — managed through your Global
                Capability Center.
              </p>

              {/* buttons */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <button className="group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#762de8] via-[#9250ff] to-[#7447ff] px-8 py-4 text-[14px] font-medium text-white shadow-[0_10px_45px_rgba(124,58,237,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_55px_rgba(124,58,237,.45)]">
                  <span className="relative z-10 flex items-center gap-3">
                    Transform Your Operations

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <div className="absolute inset-y-0 left-[-40%] w-[35%] rotate-[18deg] bg-white/20 blur-xl transition-all duration-700 group-hover:left-[120%]" />
                </button>

                <button className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[14px] text-white/65 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.06] hover:text-white">
                  Explore Capabilities
                </button>
              </div>
            </div>

            {/* metrics */}
            <div className="relative z-30 mx-auto mt-16 grid max-w-[940px] grid-cols-2 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
              {[
                {
                  value: "Global",
                  label: "Delivery Network",
                },
                {
                  value: "24/7",
                  label: "Operations",
                },
                {
                  value: "AI",
                  label: "Enabled Workflows",
                },
                {
                  value: "360°",
                  label: "Governance",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`
                    relative
                    px-5
                    py-6
                    text-center
                    md:py-7
                    ${
                      index !== 3
                        ? "md:border-r md:border-white/[0.06]"
                        : ""
                    }
                    ${
                      index < 2
                        ? "border-b border-white/[0.06] md:border-b-0"
                        : ""
                    }
                  `}
                >
                  <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                    {item.value}
                  </div>

                  <div className="mt-2 text-[9px] uppercase tracking-[1.5px] text-white/30 md:text-[10px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-b from-transparent to-[#020204]" />
        </section>

        {/* ==================================================
            SMARTER BUSINESS OPERATIONS
        ================================================== */}

        <section className="relative py-28 md:py-36">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-20 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
            {/* DASHBOARD */}
            <div className="relative flex min-h-[520px] items-center justify-center">
              <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-700/[0.09] blur-[100px]" />

              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-gradient-to-br from-[#10111a] to-[#060609] p-4 shadow-[0_35px_110px_rgba(0,0,0,.55)]">
                <div className="rounded-[27px] border border-purple-400/[0.1] bg-[#050507] p-7">
                  <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-5">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-400/70" />
                    </div>

                    <span className="text-[10px] uppercase tracking-[2px] text-white/25">
                      Operations Center
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Global", "Delivery"],
                      ["24/7", "Operations"],
                      ["AI", "Automation"],
                      ["Live", "Performance"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[20px] border border-white/[0.055] bg-gradient-to-br from-white/[0.035] to-transparent p-5"
                      >
                        <p className="text-2xl font-semibold text-purple-200">
                          {value}
                        </p>

                        <p className="mt-2 text-xs text-white/35">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[22px] border border-white/[0.055] bg-white/[0.025] p-5">
                    <div className="mb-5 flex justify-between">
                      <p className="text-sm text-white/60">
                        Process Performance
                      </p>

                      <p className="text-xs text-purple-300">Optimized</p>
                    </div>

                    <div className="flex h-[115px] items-end gap-3">
                      {[46, 58, 44, 71, 65, 80, 72, 88, 82, 94].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-purple-800/40 to-purple-400/70"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <div className="mb-5 inline-flex rounded-full border border-purple-400/[0.15] bg-purple-500/[0.06] px-4 py-2 text-xs uppercase tracking-[2px] text-purple-300">
                Smarter Business Operations
              </div>

              <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-[-1px] md:text-[46px]">
                Go Beyond Traditional
                <span className="block bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                  Business Process Outsourcing
                </span>
              </h2>

              <p className="mt-7 max-w-[680px] text-[16px] leading-8 text-white/50">
                HYI.AI combines global talent, process expertise, intelligent
                automation, and GCC governance to create scalable business
                operations aligned with your enterprise objectives.
              </p>

              <p className="mt-5 max-w-[680px] text-[16px] leading-8 text-white/50">
                Instead of simply executing tasks, our model continuously
                improves processes, measures outcomes, identifies automation
                opportunities, and creates long-term operational capability.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Dedicated Process Teams",
                  "AI-Assisted Operations",
                  "Performance Governance",
                  "Flexible Global Delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-[10px] text-purple-300">
                      ✓
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            BUSINESS PROCESS SERVICES
        ================================================== */}

        <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#05050a] py-28">
          <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/[0.11] blur-[170px]" />

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="mx-auto mb-16 max-w-[830px] text-center">
              <div className="mb-5 inline-flex rounded-full bg-gradient-to-r from-[#2c153f] to-[#17162e] px-5 py-2 text-sm text-purple-100">
                What We Offer
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-1px] md:text-[45px]">
                Business Processes Built For
                <span className="text-purple-300"> Modern Enterprises</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-7 text-white/45">
                Specialized process capabilities designed around efficiency,
                service quality, scalability, governance, and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-[27px] border border-white/[0.075] bg-gradient-to-br from-[#10111d] via-[#090a11] to-[#060608] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30"
                >
                  <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-[260px] w-[260px] rounded-full bg-purple-600/0 blur-[80px] transition-all duration-500 group-hover:bg-purple-600/[0.22]" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/[0.18] bg-purple-500/[0.06] text-sm font-semibold text-purple-300">
                        {service.number}
                      </div>

                      <span className="text-xl text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-300">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[15px] leading-7 text-white/48">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            TECHNOLOGY
        ================================================== */}

        <section className="relative py-28 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-purple-400">
                  Connected Operations
                </div>

                <h2 className="text-3xl font-semibold leading-tight tracking-[-1px] md:text-[45px]">
                  Technology Powered
                  <span className="block text-white/40">
                    Business Operations
                  </span>
                </h2>

                <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/48">
                  Integrate human expertise with modern enterprise platforms,
                  automation, analytics, AI, and workflow technologies to create
                  intelligent operations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="group relative flex min-h-[150px] items-center justify-center overflow-hidden rounded-[23px] border border-white/[0.07] bg-[#090a11] transition duration-300 hover:-translate-y-1.5 hover:border-purple-400/30"
                  >
                    <div className="absolute bottom-0 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition group-hover:via-purple-500" />

                    <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/[0.15] bg-purple-500/[0.06] text-[11px] font-semibold text-purple-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="mt-4 px-2 text-sm text-white/65 transition group-hover:text-white">
                        {tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            OPERATING MODEL
        ================================================== */}

        <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#060610] py-28">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.07] blur-[170px]" />

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="mb-16 max-w-[800px]">
              <div className="mb-5 inline-flex rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-sm text-white/60">
                Our Operating Model
              </div>

              <h2 className="text-3xl font-semibold leading-tight md:text-[46px]">
                From Existing Processes To
                <span className="text-purple-300">
                  {" "}
                  High-Performance Operations
                </span>
              </h2>

              <p className="mt-5 max-w-[690px] text-[16px] leading-7 text-white/42">
                A structured operating model designed to transition, manage,
                govern, and continuously improve enterprise processes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {operationSteps.map((item, index) => (
                <div
                  key={item.number}
                  className="group relative min-h-[345px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-transparent p-7 transition duration-300 hover:border-purple-400/[0.25]"
                >
                  {index < operationSteps.length - 1 && (
                    <div className="absolute right-[-20px] top-[64px] z-20 hidden h-px w-10 bg-purple-500/30 lg:block" />
                  )}

                  <span className="text-sm font-medium text-purple-400">
                    / {item.number}
                  </span>

                  <div className="mt-14 flex h-[62px] w-[62px] items-center justify-center rounded-[20px] border border-purple-500/[0.18] bg-purple-500/[0.055]">
                    <div className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/43">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            GOVERNANCE
        ================================================== */}

        <section className="relative py-28">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-[#111020] via-[#090911] to-[#060609] p-8 md:p-11">
                <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-purple-600/[0.16] blur-[100px]" />

                <div className="relative">
                  <div className="text-xs uppercase tracking-[3px] text-purple-400">
                    Operational Governance
                  </div>

                  <h3 className="mt-6 max-w-[600px] text-3xl font-semibold leading-tight">
                    Every Process Managed Through
                    <span className="text-purple-300">
                      {" "}
                      Measurable Performance
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-white/45">
                    Structured SLAs, KPIs, quality controls, workflow
                    visibility, risk management, and continuous improvement
                    ensure your GCC operations remain aligned with business
                    objectives.
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {["KPI", "SLA", "Quality", "Compliance"].map((label) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-5 text-center text-sm text-white/60"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-purple-400/[0.11] bg-gradient-to-br from-purple-950/40 to-[#07070b] p-8 md:p-10">
                <div className="absolute bottom-[-130px] left-1/2 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-purple-500/[0.18] blur-[90px]" />

                <div className="relative flex h-full min-h-[340px] flex-col">
                  <p className="text-xs uppercase tracking-[3px] text-purple-300">
                    Continuous Improvement
                  </p>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug">
                    Operate.
                    <br />
                    Measure.
                    <br />
                    Automate.
                    <br />
                    Improve.
                  </h3>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-gradient-to-r from-purple-400/50 to-transparent" />

                    <p className="mt-5 text-sm leading-6 text-white/40">
                      Build operations that become smarter with every cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            OUTCOMES
        ================================================== */}

        <section className="relative pb-28">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="overflow-hidden rounded-[35px] border border-purple-400/[0.12] bg-gradient-to-br from-[#11091f] via-[#080810] to-[#060608]">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-8 md:p-14 lg:p-16">
                  <p className="text-xs uppercase tracking-[3px] text-purple-400">
                    Designed For Scale
                  </p>

                  <h2 className="mt-6 max-w-[530px] text-3xl font-semibold leading-tight md:text-[43px]">
                    Business Operations That
                    <span className="block text-purple-300">
                      Grow With You
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-white/45">
                    Build an adaptable operating capability that can expand
                    across functions, regions, technologies, and business
                    priorities.
                  </p>
                </div>

                <div className="grid grid-cols-2 border-t border-white/[0.06] lg:border-l lg:border-t-0">
                  {outcomes.map((item) => (
                    <div
                      key={item.title}
                      className="flex min-h-[210px] flex-col justify-center border-b border-r border-white/[0.06] p-7"
                    >
                      <div className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
                        {item.value}
                      </div>

                      <p className="mt-3 text-sm font-medium text-white/65">
                        {item.title}
                      </p>

                      <p className="mt-2 max-w-[190px] text-xs leading-5 text-white/30">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CTA
        ================================================== */}

        <section className="relative px-6 pb-28 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute bottom-[30px] left-1/2 h-[330px] w-[750px] -translate-x-1/2 rounded-full bg-purple-700/[0.13] blur-[130px]" />

          <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[36px] border border-purple-300/[0.13] bg-gradient-to-br from-purple-950/55 via-[#0d0817] to-[#060609] px-7 py-16 text-center md:px-12 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
                  linear-gradient(90deg,rgba(255,255,255,.25) 1px, transparent 1px)
                `,
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative z-10">
              <div className="mb-7 inline-flex rounded-full border border-purple-400/[0.18] bg-purple-500/[0.08] px-5 py-2 text-sm text-purple-200">
                Build Smarter Operations
              </div>

              <h2 className="mx-auto max-w-[900px] text-3xl font-semibold leading-tight tracking-[-1px] md:text-[50px]">
                Transform Your Business Processes
                <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Through HYI.AI GCC
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-7 text-white/46">
                Build scalable operations with specialized talent, intelligent
                automation, structured governance, and continuous improvement.
              </p>

              <button className="group mt-9 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.13)]">
                Start Your GCC Transformation

                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}