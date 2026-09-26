import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

import {
  ArrowDownRight,
  ArrowRight,
  Binary,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================
   TECHNOLOGY CONSULTING PAGE
   Concept: Technology Intelligence Lab
   Single-file / Server Component safe
============================================================ */

/* ============================================================
   DATA
============================================================ */

const consultingDomains = [
  {
    number: "01",
    code: "STRATEGY",
    title: "Technology Strategy",
    text: "Connect technology investment with business priorities through clear architecture principles, capability decisions, modernization priorities and measurable transformation outcomes.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    code: "ARCHITECTURE",
    title: "Enterprise Architecture",
    text: "Design technology foundations that connect applications, data, cloud, infrastructure, security and integration into a coherent enterprise operating environment.",
    icon: Layers3,
  },
  {
    number: "03",
    code: "MODERNIZATION",
    title: "Platform Modernization",
    text: "Evaluate legacy systems, technical debt and operational constraints to define practical modernization paths without unnecessary disruption to critical business services.",
    icon: Boxes,
  },
  {
    number: "04",
    code: "AI",
    title: "AI Transformation",
    text: "Identify where AI can improve knowledge work, customer experiences, operations and decision support while establishing the data, governance and platform foundations required.",
    icon: Sparkles,
  },
  {
    number: "05",
    code: "CLOUD",
    title: "Cloud Advisory",
    text: "Make workload, architecture, security and operating-model decisions based on business requirements rather than treating cloud migration as a destination by itself.",
    icon: Cloud,
  },
  {
    number: "06",
    code: "DATA",
    title: "Data Strategy",
    text: "Build a reliable data foundation that improves discoverability, quality, governance, analytics and AI readiness across business and technology teams.",
    icon: Database,
  },
];

const decisionSignals = [
  "Business Value",
  "Architecture",
  "AI Readiness",
  "Cloud",
  "Data",
  "Security",
  "Integration",
  "Operations",
  "Cost",
  "Scalability",
];

const architectureLayers = [
  {
    id: "L01",
    name: "Experience",
    text: "Web, mobile, portals, employee experiences and AI-assisted interfaces.",
    icon: Globe2,
  },
  {
    id: "L02",
    name: "Applications",
    text: "Business platforms, custom applications, SaaS and domain services.",
    icon: Code2,
  },
  {
    id: "L03",
    name: "Integration",
    text: "APIs, events, workflow orchestration and service connectivity.",
    icon: Network,
  },
  {
    id: "L04",
    name: "Intelligence",
    text: "AI models, agents, analytics, retrieval and decision-support systems.",
    icon: BrainCircuit,
  },
  {
    id: "L05",
    name: "Data",
    text: "Operational data, analytical platforms, governance and knowledge.",
    icon: Database,
  },
  {
    id: "L06",
    name: "Infrastructure",
    text: "Cloud, compute, networks, containers, observability and resilience.",
    icon: Server,
  },
];

const questions = [
  {
    no: "01",
    question: "What should we modernize first?",
    answer:
      "Prioritize systems where business importance, operational friction, technical risk and strategic opportunity create the strongest case for change.",
  },
  {
    no: "02",
    question: "Where should AI actually be used?",
    answer:
      "Start with workflows where interpretation, knowledge retrieval, repetitive analysis or structured execution can improve without removing necessary human accountability.",
  },
  {
    no: "03",
    question: "What belongs in the cloud?",
    answer:
      "Workload placement should reflect performance, resilience, security, regulatory, integration and economic requirements rather than a cloud-first slogan.",
  },
  {
    no: "04",
    question: "How do we reduce technical debt?",
    answer:
      "Separate debt that limits business change from debt that is merely imperfect. Modernize deliberately around measurable operational and strategic constraints.",
  },
  {
    no: "05",
    question: "How should our architecture evolve?",
    answer:
      "Move toward clear boundaries, reusable capabilities, observable systems and interfaces that allow change without creating unnecessary coupling.",
  },
];

const roadmap = [
  {
    phase: "DISCOVER",
    number: "01",
    title: "Understand the environment",
    text: "Map business objectives, technology estate, architecture constraints, data dependencies, operational risks and current transformation initiatives.",
  },
  {
    phase: "DIAGNOSE",
    number: "02",
    title: "Find structural friction",
    text: "Identify technical debt, duplicated capabilities, integration bottlenecks, fragile dependencies and areas where technology limits business movement.",
  },
  {
    phase: "DESIGN",
    number: "03",
    title: "Define the target state",
    text: "Create architecture principles, platform decisions, modernization patterns and an operating model aligned with future business requirements.",
  },
  {
    phase: "PRIORITIZE",
    number: "04",
    title: "Sequence investment",
    text: "Balance value, risk, dependencies, effort and organizational readiness to create an executable transformation portfolio.",
  },
  {
    phase: "ENABLE",
    number: "05",
    title: "Build foundations",
    text: "Establish reusable cloud, data, integration, security and engineering capabilities that accelerate delivery across multiple initiatives.",
  },
  {
    phase: "EVOLVE",
    number: "06",
    title: "Continuously improve",
    text: "Use operational evidence, architecture governance and business outcomes to evolve the technology environment over time.",
  },
];

const operatingPrinciples = [
  "Business value before technology novelty",
  "Architecture before uncontrolled complexity",
  "Reusable capabilities before duplication",
  "Security designed into the platform",
  "Data treated as an enterprise capability",
  "AI introduced with clear accountability",
  "Observability built into critical systems",
  "Modernization sequenced around real dependencies",
];

const techNodes = [
  { label: "AI", x: "50%", y: "6%" },
  { label: "CLOUD", x: "82%", y: "20%" },
  { label: "DATA", x: "94%", y: "52%" },
  { label: "APPS", x: "78%", y: "84%" },
  { label: "OPS", x: "50%", y: "95%" },
  { label: "SECURITY", x: "17%", y: "82%" },
  { label: "INTEGRATION", x: "4%", y: "51%" },
  { label: "PLATFORM", x: "18%", y: "18%" },
];

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.18]">
        {index}
      </span>

      <span className="h-px w-10 bg-white/[0.12]" />

      <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.38]">
        {children}
      </span>
    </div>
  );
}

/* ============================================================
   TECHNOLOGY DECISION ENGINE
============================================================ */

function TechnologyDecisionEngine() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[820px]">
      {/* outer ambient rings */}

      <div className="absolute left-1/2 top-1/2 h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

      <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]" />

      {/* rotating systems */}

      <div className="tech-orbit tech-orbit-slow absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]">
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-white/[0.8]" />

        <span className="absolute bottom-[12%] right-[12%] h-1.5 w-1.5 rounded-full bg-white/[0.3]" />
      </div>

      <div className="tech-orbit-reverse absolute left-1/2 top-1/2 h-[69%] w-[69%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]">
        <span className="absolute right-[-3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/[0.45]" />
      </div>

      <div className="tech-orbit tech-orbit-fast absolute left-1/2 top-1/2 h-[51%] w-[51%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]">
        <span className="absolute bottom-[-3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/[0.5]" />
      </div>

      {/* grid */}

      <div className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-white/[0.035]" />

      <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-white/[0.035]" />

      <div className="absolute left-[18%] top-[18%] h-px w-[64%] rotate-45 bg-white/[0.025]" />

      <div className="absolute left-[18%] top-[18%] h-px w-[64%] -rotate-45 bg-white/[0.025]" />

      {/* scanner */}

      <div className="scanner-line absolute left-1/2 top-1/2 h-[44%] w-px origin-bottom bg-gradient-to-t from-white/[0.35] to-transparent" />

      {/* node labels */}

      {techNodes.map((node, index) => (
        <div
          key={node.label}
          className="tech-node absolute z-20"
          style={{
            left: node.x,
            top: node.y,
            animationDelay: `${index * 0.35}s`,
          }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full border border-white/[0.25] bg-black">
                <span className="h-[3px] w-[3px] rounded-full bg-white/[0.75]" />
              </span>

              <span className="font-mono text-[5px] tracking-[0.14em] text-white/[0.32]">
                {node.label}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* intelligence core */}

      <div className="core-pulse absolute left-1/2 top-1/2 z-30 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.14] bg-black">
        <div className="absolute inset-[10px] rounded-full border border-dashed border-white/[0.08] tech-orbit" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <BrainCircuit
            size={30}
            strokeWidth={1}
            className="text-white/[0.82]"
          />

          <span className="mt-5 font-mono text-[7px] tracking-[0.18em] text-white/[0.7]">
            DECISION
          </span>

          <span className="mt-1 font-mono text-[5px] tracking-[0.2em] text-white/[0.28]">
            INTELLIGENCE
          </span>
        </div>
      </div>

      {/* pulse waves */}

      <div className="pulse-wave pulse-wave-one absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]" />

      <div className="pulse-wave pulse-wave-two absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

      {/* corner metadata */}

      <div className="absolute left-[8%] top-[8%] font-mono text-[5px] leading-4 tracking-[0.16em] text-white/[0.16]">
        ENTERPRISE
        <br />
        TECHNOLOGY
        <br />
        SYSTEM
      </div>

      <div className="absolute bottom-[8%] right-[8%] text-right font-mono text-[5px] leading-4 tracking-[0.16em] text-white/[0.16]">
        ANALYZE
        <br />
        ARCHITECT
        <br />
        EVOLVE
      </div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-36 md:px-10 md:pb-40 md:pt-48">
      {/* giant background text */}

      <div className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 whitespace-nowrap">
        <span className="text-[clamp(10rem,28vw,31rem)] font-semibold leading-none tracking-[-0.11em] text-white/[0.018]">
          TECH
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* top metadata */}

        <div className="grid grid-cols-2 border-y border-white/[0.07] py-5 md:grid-cols-3">
          <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
            HYI.AI / CONSULTING
          </span>

          <span className="hidden text-center font-mono text-[7px] tracking-[0.2em] text-white/[0.16] md:block">
            TECHNOLOGY INTELLIGENCE LAB
          </span>

          <span className="text-right font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
            DIGITAL TRANSFORMATION
          </span>
        </div>

        {/* centered hero */}

        <div className="relative flex min-h-[730px] flex-col items-center justify-center py-24 text-center">
          <div className="hero-enter">
            <div className="mx-auto flex w-fit items-center gap-4">
              <span className="h-px w-9 bg-white/[0.16]" />

              <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.4]">
                TECHNOLOGY CONSULTING
              </span>

              <span className="h-px w-9 bg-white/[0.16]" />
            </div>

            <h1 className="mt-12 text-[clamp(4.6rem,10.8vw,11rem)] font-semibold leading-[0.76] tracking-[-0.095em]">
              Think beyond
              <span className="block text-white/[0.17]">
                technology.
              </span>
            </h1>

            <p className="mx-auto mt-12 max-w-[790px] text-[14px] leading-8 text-white/[0.48] md:text-[16px] md:leading-9">
              Make technology decisions around business movement, not
              isolated tools. HYI.AI technology consulting connects
              strategy, architecture, AI, cloud, data, engineering and
              operations into a practical transformation system.
            </p>

            <a
              href="#decision-engine"
              className="group mx-auto mt-12 flex w-fit items-center gap-4 border-b border-white/[0.15] pb-3"
            >
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
                ENTER THE INTELLIGENCE LAB
              </span>

              <ArrowDownRight
                size={12}
                className="text-white/[0.45] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* model full width */}

        <div
          id="decision-engine"
          className="relative border-t border-white/[0.07] pt-20"
        >
          <div className="absolute left-0 top-7 font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
            MODEL / 001
          </div>

          <div className="absolute right-0 top-7 font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
            TECHNOLOGY DECISION ENGINE
          </div>

          <TechnologyDecisionEngine />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SIGNAL MARQUEE
============================================================ */

function SignalMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-black py-7">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...decisionSignals, ...decisionSignals].map((signal, index) => (
          <div
            key={`${signal}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/[0.28] md:px-16">
              {signal.toUpperCase()}
            </span>

            <CircleDot
              size={7}
              className="text-white/[0.16]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   CONSULTING DOMAINS
============================================================ */

function ConsultingDomains() {
  return (
    <section className="bg-black px-5 py-36 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="01">
                CONSULTING SYSTEM
              </SectionLabel>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                One strategy.
                <span className="block text-white/[0.18]">
                  Connected
                </span>
                technology.
              </h2>

              <p className="mt-10 max-w-[460px] text-[13px] leading-8 text-white/[0.43]">
                Technology strategy becomes stronger when architecture,
                cloud, data, AI, security and engineering decisions are
                made as parts of the same system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {consultingDomains.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="consulting-card group relative min-h-[420px] overflow-hidden border border-white/[0.07] p-8 md:p-10"
                >
                  <div className="absolute inset-0 translate-y-full bg-white/[0.025] transition-transform duration-700 group-hover:translate-y-0" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <Icon
                        size={22}
                        strokeWidth={1}
                        className="text-white/[0.55]"
                      />

                      <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-28">
                      <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                        {item.code}
                      </span>

                      <h3 className="mt-5 text-3xl font-medium leading-[1] tracking-[-0.05em]">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-[12px] leading-7 text-white/[0.4]">
                        {item.text}
                      </p>
                    </div>
                  </div>
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
   INFRASTRUCTURE IMAGE STORY
============================================================ */

function InfrastructureStory() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel index="02">
          TECHNOLOGY IN THE REAL WORLD
        </SectionLabel>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          {/* large image */}

          <div className="image-panel group relative min-h-[700px] overflow-hidden border border-white/[0.08]">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1900&q=90"
              alt="Enterprise data center infrastructure"
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-[1800ms] group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

            <div className="absolute left-7 top-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/[0.65]" />

              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.6]">
                ENTERPRISE INFRASTRUCTURE
              </span>
            </div>

            <div className="absolute bottom-9 left-8 right-8 md:bottom-12 md:left-12">
              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.45]">
                PHYSICAL + CLOUD + INTELLIGENCE
              </span>

              <h3 className="mt-5 max-w-[900px] text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Every digital experience
                <span className="block text-white/[0.55]">
                  depends on architecture.
                </span>
              </h3>
            </div>
          </div>

          <div className="grid gap-5">
            {/* image two */}

            <div className="group relative min-h-[335px] overflow-hidden border border-white/[0.08]">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=88"
                alt="Server infrastructure"
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-[1600ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-8 left-8 right-8">
                <Server
                  size={20}
                  strokeWidth={1}
                  className="text-white/[0.65]"
                />

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.05em]">
                  Infrastructure
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/[0.5]">
                  Design resilient compute, network and platform
                  foundations around workload requirements.
                </p>
              </div>
            </div>

            {/* technical panel */}

            <div className="relative min-h-[345px] overflow-hidden border border-white/[0.08] p-8">
              <div className="absolute inset-0 tech-grid opacity-40" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Cpu
                    size={20}
                    strokeWidth={1}
                    className="text-white/[0.55]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
                    SYSTEM / ARCH
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    Architecture intelligence
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                    Understand how applications, data, infrastructure
                    and business processes interact before deciding
                    what should change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ARCHITECTURE BLUEPRINT
============================================================ */

function ArchitectureBlueprint() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <SectionLabel index="03">
            ENTERPRISE BLUEPRINT
          </SectionLabel>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            See the whole
            <span className="block text-white/[0.18]">
              technology system.
            </span>
          </h2>
        </div>

        <div className="mt-28 border border-white/[0.08]">
          <div className="grid border-b border-white/[0.08] px-7 py-5 md:grid-cols-[100px_1fr_1fr]">
            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
              LAYER
            </span>

            <span className="hidden font-mono text-[6px] tracking-[0.18em] text-white/[0.15] md:block">
              CAPABILITY
            </span>

            <span className="hidden font-mono text-[6px] tracking-[0.18em] text-white/[0.15] md:block">
              PURPOSE
            </span>
          </div>

          {architectureLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                className="architecture-row group grid min-h-[150px] items-center gap-8 border-b border-white/[0.07] px-7 py-8 last:border-b-0 md:grid-cols-[100px_1fr_1fr]"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[7px] text-white/[0.17]">
                    {layer.id}
                  </span>

                  <Icon
                    size={15}
                    strokeWidth={1}
                    className="text-white/[0.35] md:hidden"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <div className="hidden h-10 w-10 items-center justify-center border border-white/[0.08] md:flex">
                    <Icon
                      size={16}
                      strokeWidth={1}
                      className="text-white/[0.4]"
                    />
                  </div>

                  <h3 className="text-2xl font-medium tracking-[-0.045em] md:text-3xl">
                    {layer.name}
                  </h3>
                </div>

                <p className="max-w-[560px] text-[12px] leading-7 text-white/[0.4]">
                  {layer.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECHNOLOGY QUESTIONS
============================================================ */

function TechnologyQuestions() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="04">
                DECISION QUESTIONS
              </SectionLabel>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Better answers
                <span className="block text-white/[0.18]">
                  start with
                </span>
                better questions.
              </h2>
            </div>
          </div>

          <div>
            {questions.map((item) => (
              <article
                key={item.no}
                className="question-row group border-t border-white/[0.08] py-11"
              >
                <div className="grid gap-9 md:grid-cols-[70px_.9fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.15]">
                    {item.no}
                  </span>

                  <h3 className="max-w-[500px] text-3xl font-medium leading-[1.05] tracking-[-0.05em] md:text-4xl">
                    {item.question}
                  </h3>

                  <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AI CONSULTING LAB
============================================================ */

function AIConsultingLab() {
  const blocks = [
    {
      label: "INPUT",
      title: "Business Context",
      icon: Globe2,
    },
    {
      label: "ANALYZE",
      title: "Technology Estate",
      icon: Radar,
    },
    {
      label: "REASON",
      title: "Architecture",
      icon: BrainCircuit,
    },
    {
      label: "DECIDE",
      title: "Transformation",
      icon: GitBranch,
    },
  ];

  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel index="05">
          TECHNOLOGY INTELLIGENCE
        </SectionLabel>

        <div className="mt-16 grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              From complexity
              <span className="block text-white/[0.18]">
                to decisions.
              </span>
            </h2>

            <p className="mt-10 max-w-[520px] text-[13px] leading-8 text-white/[0.42]">
              Consulting should create clarity. The objective is not a
              larger architecture diagram; it is a stronger connection
              between business needs, technology choices and executable
              change.
            </p>
          </div>

          <div className="relative border border-white/[0.08] p-5 md:p-8">
            <div className="absolute inset-0 tech-grid opacity-40" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div className="flex items-center gap-3">
                  <span className="status-dot h-1.5 w-1.5 rounded-full bg-white/[0.7]" />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.3]">
                    INTELLIGENCE ENGINE
                  </span>
                </div>

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
                  ACTIVE
                </span>
              </div>

              <div className="mt-6 grid md:grid-cols-2">
                {blocks.map((block, index) => {
                  const Icon = block.icon;

                  return (
                    <div
                      key={block.label}
                      className="group min-h-[260px] border border-white/[0.06] p-7"
                    >
                      <div className="flex items-center justify-between">
                        <Icon
                          size={18}
                          strokeWidth={1}
                          className="text-white/[0.45]"
                        />

                        <span className="font-mono text-[6px] text-white/[0.12]">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-24">
                        <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.18]">
                          {block.label}
                        </span>

                        <h3 className="mt-4 text-2xl font-medium tracking-[-0.045em]">
                          {block.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.18]">
                  BUSINESS → TECHNOLOGY → EXECUTION
                </span>

                <Zap
                  size={12}
                  className="text-white/[0.3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROADMAP
============================================================ */

function TransformationRoadmap() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <SectionLabel index="06">
            TRANSFORMATION PATH
          </SectionLabel>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            Strategy becomes
            <span className="block text-white/[0.18]">
              a sequence.
            </span>
          </h2>
        </div>

        <div className="mt-28">
          {roadmap.map((item, index) => (
            <article
              key={item.number}
              className="roadmap-row group relative grid min-h-[250px] gap-9 border-t border-white/[0.08] py-12 md:grid-cols-[100px_.65fr_1fr]"
            >
              <div>
                <span className="font-mono text-[7px] text-white/[0.15]">
                  {item.number}
                </span>

                <div className="mt-7 flex items-center">
                  <span className="relative z-10 h-2.5 w-2.5 rounded-full border border-white/[0.35] bg-black" />

                  <span className="h-px flex-1 bg-white/[0.07]" />
                </div>
              </div>

              <div>
                <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                  {item.phase}
                </span>

                <h3 className="mt-5 max-w-[460px] text-3xl font-medium leading-[1.03] tracking-[-0.05em] md:text-4xl">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                {item.text}
              </p>
            </article>
          ))}

          <div className="border-t border-white/[0.08]" />
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
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="07">
                OPERATING PRINCIPLES
              </SectionLabel>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Build for
                <span className="block text-white/[0.18]">
                  continuous
                </span>
                change.
              </h2>

              <p className="mt-10 max-w-[450px] text-[13px] leading-8 text-white/[0.42]">
                The target architecture should not only solve today's
                requirements. It should make tomorrow's change easier,
                safer and more observable.
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {operatingPrinciples.map((principle, index) => (
              <div
                key={principle}
                className="principle-row group flex min-h-[105px] items-center justify-between gap-7 border-b border-white/[0.08]"
              >
                <div className="flex items-center gap-7">
                  <span className="font-mono text-[6px] text-white/[0.13]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl font-medium tracking-[-0.035em] text-white/[0.7] transition-colors group-hover:text-white md:text-2xl">
                    {principle}
                  </span>
                </div>

                <ChevronRight
                  size={13}
                  className="text-white/[0.15] transition-transform group-hover:translate-x-1"
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
   DECISION BOARD
============================================================ */

function DecisionBoard() {
  const systems = [
    {
      icon: Cloud,
      title: "Cloud",
      status: "ARCHITECT",
    },
    {
      icon: Database,
      title: "Data",
      status: "UNIFY",
    },
    {
      icon: BrainCircuit,
      title: "AI",
      status: "ENABLE",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      status: "PROTECT",
    },
    {
      icon: Network,
      title: "Integration",
      status: "CONNECT",
    },
    {
      icon: Workflow,
      title: "Operations",
      status: "AUTOMATE",
    },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel index="08">
          DECISION BOARD
        </SectionLabel>

        <div className="mt-16 border border-white/[0.08]">
          <div className="flex items-center justify-between border-b border-white/[0.08] px-7 py-5">
            <div className="flex items-center gap-3">
              <Binary
                size={13}
                className="text-white/[0.35]"
              />

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
                ENTERPRISE TECHNOLOGY MAP
              </span>
            </div>

            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
              HYI.AI / SYSTEM
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system, index) => {
              const Icon = system.icon;

              return (
                <div
                  key={system.title}
                  className="group min-h-[260px] border border-white/[0.06] p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={20}
                      strokeWidth={1}
                      className="text-white/[0.5]"
                    />

                    <span className="font-mono text-[6px] text-white/[0.12]">
                      NODE / 0{index + 1}
                    </span>
                  </div>

                  <div className="mt-24 flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-medium tracking-[-0.05em]">
                        {system.title}
                      </h3>

                      <span className="mt-3 block font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                        {system.status}
                      </span>
                    </div>

                    <ArrowRight
                      size={13}
                      className="text-white/[0.18] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL SECTION
============================================================ */

function FinalSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-48 md:px-10 md:py-72">
      {/* huge animated word */}

      <div className="final-marquee pointer-events-none absolute bottom-0 flex w-max whitespace-nowrap">
        <span className="text-[clamp(10rem,24vw,27rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]">
          THINK / DESIGN / BUILD / EVOLVE / THINK / DESIGN / BUILD /
          EVOLVE /
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <SectionLabel index="09">
          TECHNOLOGY CONSULTING
        </SectionLabel>

        <div className="mt-16 grid gap-16 lg:grid-cols-[.2fr_1.8fr]">
          <div className="hidden lg:block">
            <div className="flex flex-col items-start gap-5">
              <BrainCircuit
                size={20}
                strokeWidth={1}
                className="text-white/[0.42]"
              />

              <Network
                size={20}
                strokeWidth={1}
                className="text-white/[0.28]"
              />

              <Cpu
                size={20}
                strokeWidth={1}
                className="text-white/[0.18]"
              />
            </div>
          </div>

          <div>
            <h2 className="max-w-[1250px] text-[clamp(4.4rem,9vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Make technology
              <span className="block text-white/[0.18]">
                easier to change.
              </span>
            </h2>

            <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-12 md:grid-cols-[160px_1fr]">
              <span className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.16]">
                STRATEGY
                <br />
                ARCHITECTURE
                <br />
                AI
                <br />
                CLOUD
                <br />
                DATA
              </span>

              <div>
                <p className="max-w-[850px] text-[15px] leading-9 text-white/[0.47]">
                  Strong technology consulting creates an environment
                  where business priorities can move through reliable
                  architecture, reusable platforms, trustworthy data and
                  intelligent systems without creating unnecessary
                  complexity.
                </p>

                <a
                  href="#decision-engine"
                  className="group mt-14 flex w-fit items-center gap-5 border-b border-white/[0.16] pb-3"
                >
                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.48]">
                    EXPLORE THE SYSTEM
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-white/[0.45] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function TechnologyConsultingPage() {
  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      {/* ======================================================
          GLOBAL ANIMATION CSS
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes techOrbit {
              from {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }

            @keyframes techOrbitLocal {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes techOrbitReverse {
              from {
                transform: translate(-50%, -50%) rotate(360deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(0deg);
              }
            }

            @keyframes scanner {
              from {
                transform: translate(-50%, -100%) rotate(0deg);
              }
              to {
                transform: translate(-50%, -100%) rotate(360deg);
              }
            }

            @keyframes pulseWave {
              0% {
                transform: translate(-50%, -50%) scale(.72);
                opacity: .25;
              }
              100% {
                transform: translate(-50%, -50%) scale(2.3);
                opacity: 0;
              }
            }

            @keyframes corePulse {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(255,255,255,.02);
              }
              50% {
                box-shadow: 0 0 80px 12px rgba(255,255,255,.045);
              }
            }

            @keyframes nodeFloat {
              0%, 100% {
                transform: translateY(0px);
                opacity: .55;
              }
              50% {
                transform: translateY(-8px);
                opacity: 1;
              }
            }

            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            @keyframes finalMarquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-35%);
              }
            }

            @keyframes statusPulse {
              0%, 100% {
                opacity: .25;
                transform: scale(.8);
              }
              50% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes heroEnter {
              from {
                opacity: 0;
                transform: translateY(45px);
              }
              to {
                opacity: 1;
                transform: translateY(0px);
              }
            }

            .tech-orbit {
              animation: techOrbitLocal 30s linear infinite;
            }

            .tech-orbit-slow {
              animation: techOrbit 42s linear infinite;
            }

            .tech-orbit-fast {
              animation: techOrbit 20s linear infinite;
            }

            .tech-orbit-reverse {
              animation: techOrbitReverse 34s linear infinite;
            }

            .scanner-line {
              animation: scanner 10s linear infinite;
            }

            .pulse-wave {
              animation: pulseWave 3.8s ease-out infinite;
            }

            .pulse-wave-two {
              animation-delay: 1.7s;
            }

            .core-pulse {
              animation: corePulse 4s ease-in-out infinite;
            }

            .tech-node {
              animation: nodeFloat 3.5s ease-in-out infinite;
            }

            .marquee-track {
              animation: marquee 28s linear infinite;
            }

            .final-marquee {
              animation: finalMarquee 40s linear infinite;
            }

            .status-dot {
              animation: statusPulse 1.8s ease-in-out infinite;
            }

            .hero-enter {
              animation: heroEnter 1s cubic-bezier(.16,1,.3,1) both;
            }

            .tech-grid {
              background-image:
                linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
              background-size: 34px 34px;
            }

            .consulting-card {
              transition:
                transform .55s cubic-bezier(.16,1,.3,1),
                border-color .55s ease;
            }

            .consulting-card:hover {
              transform: translateY(-7px);
              border-color: rgba(255,255,255,.16);
            }

            .architecture-row {
              transition:
                padding-left .45s cubic-bezier(.16,1,.3,1),
                background-color .45s ease;
            }

            .architecture-row:hover {
              padding-left: 38px;
              background: rgba(255,255,255,.018);
            }

            .question-row {
              transition:
                padding-left .45s cubic-bezier(.16,1,.3,1),
                background-color .45s ease;
            }

            .question-row:hover {
              padding-left: 18px;
              background: rgba(255,255,255,.012);
            }

            .roadmap-row {
              transition:
                padding-left .45s cubic-bezier(.16,1,.3,1),
                background-color .45s ease;
            }

            .roadmap-row:hover {
              padding-left: 16px;
              background: rgba(255,255,255,.012);
            }

            .principle-row {
              transition:
                padding-left .4s cubic-bezier(.16,1,.3,1),
                background-color .4s ease;
            }

            .principle-row:hover {
              padding-left: 12px;
              background: rgba(255,255,255,.012);
            }

            .image-panel::after {
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              background:
                linear-gradient(
                  90deg,
                  transparent 0%,
                  rgba(255,255,255,.035) 50%,
                  transparent 100%
                );
              transform: translateX(-100%);
              animation: imageScan 7s ease-in-out infinite;
            }

            @keyframes imageScan {
              0%, 25% {
                transform: translateX(-100%);
              }
              75%, 100% {
                transform: translateX(100%);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .tech-orbit,
              .tech-orbit-slow,
              .tech-orbit-fast,
              .tech-orbit-reverse,
              .scanner-line,
              .pulse-wave,
              .core-pulse,
              .tech-node,
              .marquee-track,
              .final-marquee,
              .status-dot,
              .hero-enter,
              .image-panel::after {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <SignalMarquee />

      <ConsultingDomains />

      <InfrastructureStory />

      <ArchitectureBlueprint />

      <TechnologyQuestions />

      <AIConsultingLab />

      <SignalMarquee />

      <TransformationRoadmap />

      <Principles />

      <DecisionBoard />

      <FinalSection />

      <Footer />
    </main>
  );
}