import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Database,
  FileCheck2,
  FileText,
  GitBranch,
  Inbox,
  Layers3,
  Mail,
  Network,
  RefreshCcw,
  ScanLine,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Table2,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================
   DATA
============================================================ */

const capabilities = [
  {
    icon: FileText,
    number: "01",
    title: "Document Processing",
    eyebrow: "READ / EXTRACT / VALIDATE",
    description:
      "Automate repetitive document workflows by capturing information from forms, invoices, reports and structured business documents before routing the extracted data into downstream systems.",
  },
  {
    icon: Mail,
    number: "02",
    title: "Email Automation",
    eyebrow: "MONITOR / CLASSIFY / ROUTE",
    description:
      "Monitor operational inboxes, identify relevant messages, extract required information and trigger predefined workflows without relying on constant manual handling.",
  },
  {
    icon: Database,
    number: "03",
    title: "Data Operations",
    eyebrow: "MOVE / VERIFY / SYNCHRONIZE",
    description:
      "Transfer structured information between enterprise applications while applying validation rules, formatting requirements and workflow-specific business logic.",
  },
  {
    icon: Workflow,
    number: "04",
    title: "Workflow Execution",
    eyebrow: "TRIGGER / PROCESS / COMPLETE",
    description:
      "Coordinate repeatable multi-step business processes across applications, approvals, queues and operational systems through software-based automation.",
  },
  {
    icon: BrainCircuit,
    number: "05",
    title: "AI Decisions",
    eyebrow: "UNDERSTAND / REASON / ASSIST",
    description:
      "Introduce AI into automation flows when software needs contextual classification, content understanding, knowledge retrieval or decision assistance.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Controlled Automation",
    eyebrow: "GOVERN / AUDIT / OBSERVE",
    description:
      "Design automation with access boundaries, exception paths, operational visibility and traceable execution across enterprise processes.",
  },
];

const applications = [
  {
    number: "01",
    title: "Finance Operations",
    tag: "FINANCE",
    text: "Invoice handling, reconciliation preparation, transaction processing and structured financial workflow automation.",
  },
  {
    number: "02",
    title: "Human Resources",
    tag: "PEOPLE",
    text: "Employee onboarding tasks, information movement, document processing and recurring administrative workflows.",
  },
  {
    number: "03",
    title: "Customer Operations",
    tag: "SERVICE",
    text: "Automate repetitive service workflows while routing exceptions and complex decisions to the appropriate people.",
  },
  {
    number: "04",
    title: "IT Operations",
    tag: "TECHNOLOGY",
    text: "Automate repeatable operational requests, account workflows, system updates and routine support processes.",
  },
  {
    number: "05",
    title: "Data Administration",
    tag: "DATA",
    text: "Reduce manual copying and synchronization across structured applications, records and operational databases.",
  },
  {
    number: "06",
    title: "Compliance Workflows",
    tag: "CONTROL",
    text: "Support evidence collection, workflow routing and repeatable process execution with clearer operational traceability.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Trigger",
    text: "A schedule, event, message, file or user action initiates the automation.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Rules or AI interpret the information required for the next action.",
  },
  {
    number: "03",
    title: "Validate",
    text: "Data is checked against required conditions and process constraints.",
  },
  {
    number: "04",
    title: "Execute",
    text: "The software bot performs the defined actions across connected systems.",
  },
  {
    number: "05",
    title: "Verify",
    text: "The workflow confirms expected outcomes and identifies exceptions.",
  },
  {
    number: "06",
    title: "Complete",
    text: "Results are recorded, routed or returned to the appropriate system.",
  },
];

const principles = [
  "Automate deterministic work first",
  "Keep exceptions visible",
  "Separate automation from business policy",
  "Design human review where it matters",
  "Treat credentials as controlled assets",
  "Observe every important workflow",
  "Build reusable automation components",
  "Measure operational outcomes",
];

/* ============================================================
   DIGITAL BOT VISUAL
============================================================ */

function DigitalWorkerVisual() {
  return (
    <div className="relative mx-auto h-[590px] w-full max-w-[680px]">
      {/* background */}

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      <div className="rpa-ring absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15" />

      <div className="rpa-ring-reverse absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a78bfa]/15" />

      {/* connection lines */}

      <svg
        viewBox="0 0 680 590"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M125 145 C220 145 220 240 290 260"
          stroke="rgba(139,92,246,.32)"
          strokeWidth="1"
          strokeDasharray="5 8"
          className="flow-line"
        />

        <path
          d="M555 145 C465 145 465 240 390 260"
          stroke="rgba(139,92,246,.32)"
          strokeWidth="1"
          strokeDasharray="5 8"
          className="flow-line flow-delay"
        />

        <path
          d="M115 440 C215 440 225 360 290 335"
          stroke="rgba(139,92,246,.32)"
          strokeWidth="1"
          strokeDasharray="5 8"
          className="flow-line flow-delay-two"
        />

        <path
          d="M565 440 C465 440 455 360 390 335"
          stroke="rgba(139,92,246,.32)"
          strokeWidth="1"
          strokeDasharray="5 8"
          className="flow-line"
        />
      </svg>

      {/* node 1 */}

      <div className="rpa-node node-one absolute left-[5%] top-[17%] w-[145px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060f]/90 p-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
            <Mail size={13} className="text-[#c4b5fd]" />
          </div>

          <div>
            <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
              INPUT
            </span>

            <span className="mt-1 block text-[9px] text-white/60">
              Email
            </span>
          </div>
        </div>
      </div>

      {/* node 2 */}

      <div className="rpa-node node-two absolute right-[5%] top-[17%] w-[145px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060f]/90 p-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
            <FileText size={13} className="text-[#c4b5fd]" />
          </div>

          <div>
            <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
              DOCUMENT
            </span>

            <span className="mt-1 block text-[9px] text-white/60">
              Invoice
            </span>
          </div>
        </div>
      </div>

      {/* node 3 */}

      <div className="rpa-node node-three absolute bottom-[16%] left-[4%] w-[145px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060f]/90 p-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
            <Database size={13} className="text-[#c4b5fd]" />
          </div>

          <div>
            <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
              SYSTEM
            </span>

            <span className="mt-1 block text-[9px] text-white/60">
              Database
            </span>
          </div>
        </div>
      </div>

      {/* node 4 */}

      <div className="rpa-node node-four absolute bottom-[16%] right-[4%] w-[145px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060f]/90 p-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
            <Table2 size={13} className="text-[#c4b5fd]" />
          </div>

          <div>
            <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
              OUTPUT
            </span>

            <span className="mt-1 block text-[9px] text-white/60">
              ERP
            </span>
          </div>
        </div>
      </div>

      {/* central bot */}

      <div className="digital-worker absolute left-1/2 top-1/2 z-20 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-[#a78bfa]/30 bg-gradient-to-b from-[#1b102c] via-[#0c0712] to-[#050307] shadow-[0_0_90px_rgba(124,58,237,.22)]">
        <div className="absolute left-1/2 top-[25px] flex -translate-x-1/2 items-center gap-2">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

          <span className="font-mono text-[6px] tracking-[0.16em] text-white/35">
            DIGITAL WORKER
          </span>
        </div>

        <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#a78bfa]/25 bg-[#8b5cf6]/10">
          <Bot
            size={46}
            strokeWidth={0.9}
            className="text-[#c4b5fd]"
          />

          <div className="bot-scan absolute left-3 right-3 h-px bg-[#c4b5fd]/70 shadow-[0_0_12px_#8b5cf6]" />
        </div>

        <div className="absolute bottom-[24px] left-1/2 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="bot-light h-1 w-5 rounded-full bg-[#8b5cf6]/25"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* orbit labels */}

      <div className="absolute left-1/2 top-[4%] -translate-x-1/2 whitespace-nowrap">
        <span className="font-mono text-[6px] tracking-[0.2em] text-white/20">
          READ → UNDERSTAND → EXECUTE
        </span>
      </div>

      <div className="absolute bottom-[3%] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-5 py-3">
        <Activity size={11} className="text-[#a78bfa]" />

        <span className="font-mono text-[6px] tracking-[0.16em] text-white/40">
          AUTOMATION RUNNING
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#000000] px-5 pb-24 pt-36 md:px-10 md:pt-44">
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.11] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOTIC PROCESS AUTOMATION
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            DIGITAL WORKFORCE / RPA
          </span>
        </div>

        <div className="grid min-h-[760px] items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div className="hero-enter relative z-10">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] px-4 py-2">
              <Sparkles size={11} className="text-[#c4b5fd]" />

              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]/70">
                RPA + AI + WORKFLOW
              </span>
            </div>

            <h1 className="mt-9 max-w-[780px] text-[clamp(4.3rem,7.4vw,8.5rem)] font-semibold leading-[0.81] tracking-[-0.085em]">
              Work that
              <span className="block text-white/25">
                runs itself.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[14px] leading-8 text-white/52 md:text-[16px] md:leading-9">
              Design intelligent robotic process automation that moves
              information, executes repetitive workflows, connects
              enterprise systems and introduces AI where software needs
              deeper understanding.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore RPA

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#workflow"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                View Automation Flow
                <ChevronRight size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[620px] grid-cols-3 border-y border-white/[0.07] py-6">
              <div>
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  WORKERS
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Software Bots
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  LOGIC
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Rules + AI
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  EXECUTION
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Automated
                </p>
              </div>
            </div>
          </div>

          <DigitalWorkerVisual />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE
============================================================ */

function AutomationStrip() {
  const items = [
    "DOCUMENTS",
    "EMAIL",
    "ERP",
    "CRM",
    "DATABASES",
    "WORKFLOWS",
    "AI",
    "APPROVALS",
    "OPERATIONS",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="automation-marquee flex w-max whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/35 md:px-14">
              {item}
            </span>

            <CircleDot size={7} className="text-[#8b5cf6]/60" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   INTRO STATEMENT
============================================================ */

function IntroStatement() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.35fr_1.65fr]">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              01 / RPA
            </span>
          </div>

          <div>
            <h2 className="max-w-[1100px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[86px]">
              People should not spend
              <span className="text-white/25">
                {" "}their day moving information between systems.
              </span>
            </h2>

            <div className="mt-14 grid gap-8 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[500px] text-[13px] leading-8 text-white/48">
                RPA creates software workers capable of interacting
                with digital processes in a structured and repeatable
                way.
              </p>

              <p className="max-w-[500px] text-[13px] leading-8 text-white/48">
                AI extends that model by helping automation understand
                documents, classify information, retrieve knowledge
                and handle workflows that contain more context.
              </p>
            </div>
          </div>
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
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-15%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.06] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              02 / AUTOMATION CAPABILITIES
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              A digital workforce
              <span className="block text-white/25">
                built around work.
              </span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[13px] leading-8 text-white/45">
            Combine deterministic automation with AI capabilities to
            support a wider range of repeatable enterprise processes.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="capability-card group relative min-h-[370px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#08060d] p-8"
              >
                <div className="absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full bg-[#7c3aed]/[0.07] blur-[70px] transition duration-500 group-hover:bg-[#7c3aed]/[0.13]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                      <Icon
                        size={18}
                        strokeWidth={1.2}
                        className="text-[#b9a4ff]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-20">
                    <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                      {item.eyebrow}
                    </span>

                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/45">
                      {item.description}
                    </p>
                  </div>
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
   CONTROL ROOM
============================================================ */

function AutomationControlRoom() {
  return (
    <div className="relative min-h-[630px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b]">
      <div className="control-grid absolute inset-0" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      {/* top bar */}

      <div className="absolute left-7 right-7 top-7 z-20 flex items-center justify-between border-b border-white/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <Workflow size={13} className="text-[#a78bfa]" />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/35">
            AUTOMATION CONTROL ROOM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

          <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
            ACTIVE
          </span>
        </div>
      </div>

      {/* workflow */}

      <div className="absolute left-[8%] right-[8%] top-[29%]">
        <div className="absolute left-0 right-0 top-[31px] h-px bg-[#8b5cf6]/20" />

        <div className="flow-progress absolute left-0 top-[31px] h-px bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#9333ea] shadow-[0_0_12px_rgba(139,92,246,.7)]" />

        <div className="relative grid grid-cols-5 gap-4">
          {[
            {
              icon: Inbox,
              label: "INPUT",
            },
            {
              icon: ScanLine,
              label: "READ",
            },
            {
              icon: BrainCircuit,
              label: "DECIDE",
            },
            {
              icon: GitBranch,
              label: "PROCESS",
            },
            {
              icon: CheckCircle2,
              label: "DONE",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="control-node relative flex flex-col items-center"
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] border border-[#8b5cf6]/25 bg-[#0c0813] shadow-[0_0_25px_rgba(124,58,237,.12)]">
                  <Icon
                    size={18}
                    strokeWidth={1.1}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-4 font-mono text-[6px] tracking-[0.15em] text-white/30">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom console */}

      <div className="absolute bottom-[70px] left-[8%] right-[8%] grid gap-3 md:grid-cols-3">
        <div className="rounded-[18px] border border-white/[0.06] bg-black/40 p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
              BOT QUEUE
            </span>

            <Layers3 size={11} className="text-[#8b5cf6]" />
          </div>

          <p className="mt-5 text-lg font-medium text-white/70">
            Process Queue
          </p>

          <div className="mt-4 space-y-2">
            <div className="h-1 w-full rounded-full bg-white/[0.04]">
              <div className="queue-one h-full rounded-full bg-[#8b5cf6]/55" />
            </div>

            <div className="h-1 w-full rounded-full bg-white/[0.04]">
              <div className="queue-two h-full rounded-full bg-[#a78bfa]/40" />
            </div>
          </div>
        </div>

        <div className="rounded-[18px] border border-white/[0.06] bg-black/40 p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
              EXECUTION
            </span>

            <Zap size={11} className="text-[#8b5cf6]" />
          </div>

          <p className="mt-5 text-lg font-medium text-white/70">
            Workflow Active
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

            <span className="font-mono text-[6px] tracking-[0.14em] text-white/30">
              BOT RUNNING
            </span>
          </div>
        </div>

        <div className="rounded-[18px] border border-white/[0.06] bg-black/40 p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
              EXCEPTIONS
            </span>

            <Activity size={11} className="text-[#8b5cf6]" />
          </div>

          <p className="mt-5 text-lg font-medium text-white/70">
            Human Review
          </p>

          <p className="mt-3 text-[9px] leading-5 text-white/30">
            Exceptions can be routed outside the automated path.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   WORKFLOW SECTION
============================================================ */

function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-[#000000] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <AutomationControlRoom />

          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              03 / AUTOMATION ENGINE
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              From trigger
              <span className="block text-white/25">
                to completed
              </span>
              work.
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/48">
              An RPA workflow can watch for events, interpret
              information, apply rules, interact with connected
              applications and record the resulting outcome.
            </p>

            <div className="mt-12 space-y-3">
              {[
                "Event and schedule based automation",
                "Structured workflow execution",
                "Application and system interaction",
                "Data validation and transformation",
                "Exception and human review paths",
                "Execution logging and visibility",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                >
                  <CheckCircle2
                    size={13}
                    strokeWidth={1.3}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[12px] text-white/50">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RPA + AI
============================================================ */

function AISection() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              04 / RPA + AI
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Automation
              <span className="block text-white/25">
                executes.
              </span>
              AI interprets.
            </h2>

            <p className="mt-8 max-w-[470px] text-[13px] leading-8 text-white/45">
              Traditional RPA is strongest when work follows explicit
              rules. AI can extend automation into processes that
              contain language, documents, classification and
              contextual information.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Search,
                title: "Understand",
                text: "Interpret incoming content before the automation selects its next action.",
              },
              {
                icon: FileText,
                title: "Extract",
                text: "Identify useful information from documents and business content.",
              },
              {
                icon: BrainCircuit,
                title: "Reason",
                text: "Introduce contextual AI assistance where simple rules are insufficient.",
              },
              {
                icon: Network,
                title: "Connect",
                text: "Move the resulting decisions and information into operational systems.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="ai-card min-h-[270px] rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-7"
                >
                  <Icon
                    size={19}
                    strokeWidth={1}
                    className="text-[#a78bfa]"
                  />

                  <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/42">
                    {item.text}
                  </p>
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
   EXECUTION LOOP
============================================================ */

function ExecutionLoop() {
  return (
    <section className="bg-[#000000] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
            05 / EXECUTION LOOP
          </span>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Every automation
            <span className="block text-white/25">
              follows a controlled path.
            </span>
          </h2>
        </div>

        <div className="mt-20 border-t border-white/[0.07]">
          {workflowSteps.map((step, index) => (
            <article
              key={step.number}
              className="execution-row group grid gap-5 border-b border-white/[0.07] py-7 md:grid-cols-[80px_1fr_1fr_40px] md:items-center"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                {step.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.045em] text-white/80 md:text-3xl">
                {step.title}
              </h3>

              <p className="max-w-[520px] text-[11px] leading-7 text-white/40">
                {step.text}
              </p>

              {index !== workflowSteps.length - 1 && (
                <ArrowRight
                  size={14}
                  className="hidden text-white/15 transition-transform group-hover:translate-x-1 md:block"
                />
              )}
            </article>
          ))}
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
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              06 / ENTERPRISE AUTOMATION
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Automate across
              <span className="block text-white/25">
                business operations.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/45">
            RPA can support processes across departments wherever
            repetitive digital work can be clearly defined and
            controlled.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => (
            <article
              key={item.number}
              className="application-card group min-h-[300px] rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-white/20">
                  {item.number}
                </span>

                <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                  {item.tag}
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/43">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HUMAN + DIGITAL WORKFORCE
============================================================ */

function HumanDigitalWorkforce() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 py-32 md:px-10 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              07 / HUMAN + AUTOMATION
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Bots handle
              <span className="block text-white/25">
                repetition.
              </span>
              People handle
              <span className="block text-white/25">
                judgment.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-[570px] text-[14px] leading-8 text-white/48">
              A useful automation strategy does not attempt to remove
              people from every process. It separates repeatable
              machine work from situations that require judgment,
              accountability, negotiation or human context.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.03] p-6">
                <Bot
                  size={19}
                  strokeWidth={1}
                  className="text-[#a78bfa]"
                />

                <h3 className="mt-8 text-xl font-medium">
                  Digital Workers
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/40">
                  Repetitive execution, structured movement,
                  monitoring and predefined workflow actions.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.015] p-6">
                <BrainCircuit
                  size={19}
                  strokeWidth={1}
                  className="text-white/50"
                />

                <h3 className="mt-8 text-xl font-medium">
                  Human Decisions
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/40">
                  Exceptions, accountability, complex decisions and
                  situations requiring business judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRINCIPLES
============================================================ */

function Principles() {
  return (
    <section className="border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              08 / DESIGN PRINCIPLES
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Automation
              <span className="block text-white/25">
                needs discipline.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/[0.07]">
            {principles.map((item, index) => (
              <div
                key={item}
                className="principle-row group flex items-center justify-between border-b border-white/[0.07] py-6"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[6px] text-[#a78bfa]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[14px] text-white/65 md:text-[16px]">
                    {item}
                  </span>
                </div>

                <ArrowRight
                  size={13}
                  className="text-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 py-36 md:px-10 md:py-52">
      <div className="final-grid absolute inset-0" />

      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Bot size={11} className="text-[#c4b5fd]" />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            DIGITAL WORKFORCE / HYI.AI
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1250px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
          Stop moving
          <span className="block text-white/20">
            work manually.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Let software move it.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/45">
          Connect automation, AI and enterprise workflows to reduce
          repetitive digital effort and create more consistent
          operational processes.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#capabilities"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium text-white shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore RPA Solutions

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function RPAPage() {
  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }

            /* ===============================================
               GRID
            =============================================== */

            .hero-grid,
            .final-grid {
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
                radial-gradient(
                  circle at center,
                  black,
                  transparent 80%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 80%
                );
            }

            /* ===============================================
               HERO
            =============================================== */

            @keyframes heroEnter {
              from {
                opacity: 0;
                transform: translateY(30px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .hero-enter {
              animation:
                heroEnter
                .9s
                cubic-bezier(.16,1,.3,1)
                both;
            }

            /* ===============================================
               RPA RINGS
            =============================================== */

            @keyframes rpaRing {
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

            .rpa-ring {
              animation:
                rpaRing
                24s
                linear
                infinite;
            }

            .rpa-ring-reverse {
              animation:
                rpaRing
                18s
                linear
                infinite
                reverse;
            }

            /* ===============================================
               DIGITAL WORKER
            =============================================== */

            @keyframes digitalWorker {
              0%,
              100% {
                transform:
                  translate(-50%, -50%)
                  translateY(0);
              }

              50% {
                transform:
                  translate(-50%, -50%)
                  translateY(-10px);
              }
            }

            .digital-worker {
              animation:
                digitalWorker
                4.5s
                ease-in-out
                infinite;
            }

            /* ===============================================
               BOT SCANNER
            =============================================== */

            @keyframes botScan {
              0% {
                top: 18%;
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              85% {
                opacity: .8;
              }

              100% {
                top: 82%;
                opacity: 0;
              }
            }

            .bot-scan {
              animation:
                botScan
                2.8s
                ease-in-out
                infinite;
            }

            /* ===============================================
               BOT LIGHT
            =============================================== */

            @keyframes botLight {
              0%,
              100% {
                opacity: .2;
              }

              50% {
                opacity: 1;
                background:
                  rgba(196,181,253,.7);
              }
            }

            .bot-light {
              animation:
                botLight
                1.8s
                ease-in-out
                infinite;
            }

            /* ===============================================
               FLOW LINE
            =============================================== */

            @keyframes flowLine {
              from {
                stroke-dashoffset: 200;
              }

              to {
                stroke-dashoffset: 0;
              }
            }

            .flow-line {
              animation:
                flowLine
                5s
                linear
                infinite;
            }

            .flow-delay {
              animation-delay: -2s;
            }

            .flow-delay-two {
              animation-delay: -3.5s;
            }

            /* ===============================================
               NODES
            =============================================== */

            @keyframes nodeFloat {
              0%,
              100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-7px);
              }
            }

            .rpa-node {
              animation:
                nodeFloat
                4s
                ease-in-out
                infinite;
            }

            .node-two {
              animation-delay: .6s;
            }

            .node-three {
              animation-delay: 1.2s;
            }

            .node-four {
              animation-delay: 1.8s;
            }

            /* ===============================================
               STATUS
            =============================================== */

            @keyframes statusDot {
              0%,
              100% {
                opacity: .35;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.2);
              }
            }

            .status-dot {
              animation:
                statusDot
                1.8s
                ease-in-out
                infinite;
            }

            /* ===============================================
               MARQUEE
            =============================================== */

            @keyframes automationMarquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            .automation-marquee {
              animation:
                automationMarquee
                30s
                linear
                infinite;
            }

            /* ===============================================
               CAPABILITY
            =============================================== */

            .capability-card {
              transition:
                transform .45s
                cubic-bezier(.16,1,.3,1),
                border-color .45s ease,
                box-shadow .45s ease;
            }

            .capability-card:hover {
              transform:
                translateY(-7px);

              border-color:
                rgba(139,92,246,.34);

              box-shadow:
                0 25px 80px
                rgba(76,29,149,.12);
            }

            /* ===============================================
               CONTROL GRID
            =============================================== */

            .control-grid {
              background-image:
                linear-gradient(
                  rgba(139,92,246,.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139,92,246,.035) 1px,
                  transparent 1px
                );

              background-size:
                35px 35px;

              mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );
            }

            /* ===============================================
               FLOW PROGRESS
            =============================================== */

            @keyframes flowProgress {
              0% {
                width: 0%;
              }

              60%,
              100% {
                width: 100%;
              }
            }

            .flow-progress {
              animation:
                flowProgress
                5s
                ease-in-out
                infinite;
            }

            /* ===============================================
               CONTROL NODE
            =============================================== */

            @keyframes controlNode {
              0%,
              100% {
                transform: translateY(0);
                opacity: .65;
              }

              50% {
                transform: translateY(-6px);
                opacity: 1;
              }
            }

            .control-node {
              animation:
                controlNode
                3s
                ease-in-out
                infinite;
            }

            /* ===============================================
               QUEUES
            =============================================== */

            @keyframes queueOne {
              0% {
                width: 15%;
              }

              50% {
                width: 85%;
              }

              100% {
                width: 35%;
              }
            }

            .queue-one {
              animation:
                queueOne
                4s
                ease-in-out
                infinite;
            }

            @keyframes queueTwo {
              0% {
                width: 70%;
              }

              50% {
                width: 30%;
              }

              100% {
                width: 75%;
              }
            }

            .queue-two {
              animation:
                queueTwo
                5s
                ease-in-out
                infinite;
            }

            /* ===============================================
               AI CARDS
            =============================================== */

            .ai-card {
              transition:
                transform .4s
                cubic-bezier(.16,1,.3,1),
                border-color .4s ease,
                background-color .4s ease;
            }

            .ai-card:hover {
              transform:
                translateY(-6px);

              border-color:
                rgba(139,92,246,.32);

              background:
                rgba(124,58,237,.035);
            }

            /* ===============================================
               EXECUTION ROW
            =============================================== */

            .execution-row {
              transition:
                padding-left .4s
                cubic-bezier(.16,1,.3,1),
                background-color .4s ease;
            }

            .execution-row:hover {
              padding-left: 12px;

              background:
                rgba(124,58,237,.025);
            }

            /* ===============================================
               APPLICATION CARD
            =============================================== */

            .application-card {
              transition:
                transform .45s
                cubic-bezier(.16,1,.3,1),
                border-color .45s ease,
                background-color .45s ease;
            }

            .application-card:hover {
              transform:
                translateY(-6px);

              border-color:
                rgba(139,92,246,.32);

              background:
                rgba(124,58,237,.035);
            }

            /* ===============================================
               PRINCIPLE
            =============================================== */

            .principle-row {
              transition:
                padding-left .35s
                cubic-bezier(.16,1,.3,1),
                background-color .35s ease;
            }

            .principle-row:hover {
              padding-left: 10px;

              background:
                rgba(124,58,237,.025);
            }

            /* ===============================================
               REDUCED MOTION
            =============================================== */

            @media (
              prefers-reduced-motion:
              reduce
            ) {
              .hero-enter,
              .rpa-ring,
              .rpa-ring-reverse,
              .digital-worker,
              .bot-scan,
              .bot-light,
              .flow-line,
              .rpa-node,
              .status-dot,
              .automation-marquee,
              .flow-progress,
              .control-node,
              .queue-one,
              .queue-two {
                animation:
                  none
                  !important;
              }
            }

            /* ===============================================
               MOBILE
            =============================================== */

            @media (
              max-width: 640px
            ) {
              .rpa-ring {
                width: 340px;
                height: 340px;
              }

              .rpa-ring-reverse {
                width: 270px;
                height: 270px;
              }

              .digital-worker {
                width: 190px;
                height: 190px;
              }

              .rpa-node {
                width: 115px;
                padding: 12px;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <AutomationStrip />

      <IntroStatement />

      <Capabilities />

      <WorkflowSection />

      <AISection />

      <ExecutionLoop />

      <Applications />

      <HumanDigitalWorkforce />

      <Principles />

      <FinalCTA />

      <Footer />
    </main>
  );
}