"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type ModernizationPath = {
  strategy: string;
  title: string;
  description: string;
  bestFor: string;
};

type Layer = {
  title: string;
  description: string;
  items: string[];
};

type Phase = {
  label: string;
  title: string;
  description: string;
  output: string;
};

type Principle = {
  title: string;
  description: string;
};

type Workload = {
  name: string;
  current: string;
  target: string;
  action: string;
};

type Capability = {
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const modernizationPaths: ModernizationPath[] = [
  {
    strategy: "REHOST",
    title: "Move before changing.",
    description:
      "Relocate selected workloads to a modern infrastructure environment with limited application-level modification. Rehosting can reduce infrastructure dependency and create an initial foundation for deeper modernization.",
    bestFor:
      "Workloads where infrastructure change is more urgent than application redesign.",
  },
  {
    strategy: "REPLATFORM",
    title: "Change the platform.",
    description:
      "Move applications onto managed infrastructure, databases, runtime environments or container platforms while preserving significant portions of the existing application architecture.",
    bestFor:
      "Applications that can benefit from modern operational platforms without immediate full redesign.",
  },
  {
    strategy: "REFACTOR",
    title: "Change the architecture.",
    description:
      "Restructure selected parts of an application so services, data flows, integration boundaries and runtime characteristics better support modern cloud and AI-enabled operating environments.",
    bestFor:
      "Strategic applications constrained by architecture rather than only infrastructure.",
  },
  {
    strategy: "REARCHITECT",
    title: "Redesign the system.",
    description:
      "Reconsider application boundaries, service responsibilities, integration patterns, scalability assumptions and data architecture when the existing system fundamentally limits business evolution.",
    bestFor:
      "Core systems where incremental platform changes cannot resolve structural limitations.",
  },
  {
    strategy: "REBUILD",
    title: "Create a new foundation.",
    description:
      "Build a replacement capability when the cost and complexity of continuously adapting the legacy application exceeds the value of preserving its existing implementation.",
    bestFor:
      "Systems with high strategic relevance but limited long-term architectural viability.",
  },
  {
    strategy: "REPLACE",
    title: "Adopt a different capability.",
    description:
      "Retire custom legacy functionality where a modern platform or product can satisfy the required business capability with a more sustainable operational model.",
    bestFor:
      "Commodity capabilities where maintaining custom software no longer creates meaningful differentiation.",
  },
  {
    strategy: "RETIRE",
    title: "Remove what no longer matters.",
    description:
      "Decommission applications, integrations and infrastructure that no longer support meaningful business requirements, reducing operational complexity before modernization begins.",
    bestFor:
      "Redundant, unused or duplicated systems consuming operational effort without proportional value.",
  },
];

const layers: Layer[] = [
  {
    title: "Business capability",
    description:
      "Understand which business outcomes depend on the legacy environment and which capabilities require greater speed, intelligence or adaptability.",
    items: [
      "Business criticality",
      "Process dependency",
      "Customer impact",
      "Change demand",
    ],
  },
  {
    title: "Application architecture",
    description:
      "Identify monolithic boundaries, tightly coupled modules, runtime dependencies and areas where architecture prevents independent evolution.",
    items: [
      "Application boundaries",
      "Runtime dependencies",
      "Service decomposition",
      "Technical debt",
    ],
  },
  {
    title: "Data architecture",
    description:
      "Understand how operational data is stored, accessed, duplicated and exchanged before introducing modern analytics or AI capabilities.",
    items: [
      "Data ownership",
      "Database dependencies",
      "Data movement",
      "AI accessibility",
    ],
  },
  {
    title: "Integration",
    description:
      "Replace fragile point-to-point dependencies with explicit interfaces, APIs, events and integration patterns that support controlled change.",
    items: [
      "APIs",
      "Events",
      "Integration contracts",
      "External dependencies",
    ],
  },
  {
    title: "Infrastructure",
    description:
      "Modernize compute, storage, networking and runtime foundations so applications can operate within more automated and observable environments.",
    items: [
      "Cloud",
      "Containers",
      "Compute",
      "Runtime platforms",
    ],
  },
  {
    title: "Operations",
    description:
      "Improve deployment, observability, resilience and recovery so modernization changes how software is operated as well as how it is built.",
    items: [
      "CI/CD",
      "Observability",
      "Reliability",
      "Recovery",
    ],
  },
];

const phases: Phase[] = [
  {
    label: "DISCOVER",
    title: "Map the legacy estate.",
    description:
      "Build an evidence-based view of applications, infrastructure, interfaces, databases, business dependencies and operational ownership before deciding what should change.",
    output: "APPLICATION + DEPENDENCY BASELINE",
  },
  {
    label: "ASSESS",
    title: "Understand modernization pressure.",
    description:
      "Evaluate business criticality, technical debt, operational risk, change frequency, architecture constraints and opportunities for cloud, automation, data and AI enablement.",
    output: "MODERNIZATION ASSESSMENT",
  },
  {
    label: "CLASSIFY",
    title: "Choose a path per workload.",
    description:
      "Avoid treating every application identically. Determine whether each workload should be retained, retired, replaced, rehosted, replatformed, refactored or rebuilt.",
    output: "WORKLOAD DISPOSITION",
  },
  {
    label: "SEQUENCE",
    title: "Design the migration waves.",
    description:
      "Group modernization initiatives according to dependencies, business timing, risk, platform readiness and the order in which foundational capabilities must become available.",
    output: "MODERNIZATION ROADMAP",
  },
  {
    label: "MODERNIZE",
    title: "Change incrementally.",
    description:
      "Introduce new interfaces, platforms and application boundaries progressively so the organization can modernize important capabilities without requiring an uncontrolled enterprise-wide rewrite.",
    output: "MODERNIZED CAPABILITIES",
  },
  {
    label: "VALIDATE",
    title: "Prove operational readiness.",
    description:
      "Validate functionality, performance, security, data integrity, observability and recovery before workloads transition into their target operating environment.",
    output: "PRODUCTION READINESS",
  },
  {
    label: "TRANSITION",
    title: "Move with controlled risk.",
    description:
      "Coordinate cutover, traffic movement, data synchronization, fallback procedures and operational ownership so modernization remains reversible where practical.",
    output: "CONTROLLED CUTOVER",
  },
  {
    label: "EVOLVE",
    title: "Keep modernizing.",
    description:
      "Use the new architecture and operating model to continuously improve services instead of allowing the modernized estate to become the next generation of legacy technology.",
    output: "CONTINUOUS MODERNIZATION",
  },
];

const principles: Principle[] = [
  {
    title: "Modernize by business capability.",
    description:
      "Architecture boundaries should increasingly reflect meaningful business capabilities rather than historical implementation structures.",
  },
  {
    title: "Reduce coupling before increasing speed.",
    description:
      "Faster delivery provides limited value when every application change still requires coordinated modification across tightly connected systems.",
  },
  {
    title: "Protect data during architectural change.",
    description:
      "Data ownership, consistency and migration need explicit design because application modernization often changes where information lives and how it moves.",
  },
  {
    title: "Build observability into the target.",
    description:
      "A modern application environment should make behavior, dependencies, failures and performance easier to understand than the system it replaces.",
  },
  {
    title: "Separate modernization from migration.",
    description:
      "Moving software and improving software are related but different decisions. Some workloads should move first; others should change before moving.",
  },
  {
    title: "Retirement is modernization.",
    description:
      "Removing redundant applications can reduce complexity more effectively than investing in modernization for technology the enterprise no longer needs.",
  },
];

const workloads: Workload[] = [
  {
    name: "CORE TRANSACTION ENGINE",
    current: "MONOLITH",
    target: "MODULAR SERVICES",
    action: "REFACTOR",
  },
  {
    name: "INTERNAL REPORTING",
    current: "LEGACY VM",
    target: "MANAGED PLATFORM",
    action: "REPLATFORM",
  },
  {
    name: "DOCUMENT WORKFLOW",
    current: "CUSTOM APPLICATION",
    target: "MODERN PLATFORM",
    action: "REPLACE",
  },
  {
    name: "ARCHIVE SERVICE",
    current: "DEDICATED SERVER",
    target: "OBJECT STORAGE",
    action: "REHOST",
  },
  {
    name: "DUPLICATE PORTAL",
    current: "LEGACY WEB APP",
    target: "NONE",
    action: "RETIRE",
  },
  {
    name: "AI KNOWLEDGE ACCESS",
    current: "NOT AVAILABLE",
    target: "GOVERNED AI SERVICE",
    action: "BUILD",
  },
];

const capabilities: Capability[] = [
  {
    title: "Application discovery",
    description:
      "Inventory applications and connect technical components with business ownership, criticality and dependencies.",
  },
  {
    title: "Architecture assessment",
    description:
      "Examine structural constraints that influence scalability, maintainability, deployment independence and modernization feasibility.",
  },
  {
    title: "Cloud modernization",
    description:
      "Determine where managed cloud capabilities can replace infrastructure responsibilities or improve application operating characteristics.",
  },
  {
    title: "Application refactoring",
    description:
      "Restructure targeted application areas around clearer boundaries, APIs, services and modern runtime patterns.",
  },
  {
    title: "Data modernization",
    description:
      "Improve data accessibility and ownership while protecting integrity through application and platform transitions.",
  },
  {
    title: "API modernization",
    description:
      "Introduce stable interfaces around legacy capabilities to reduce direct dependencies and enable progressive replacement.",
  },
  {
    title: "DevOps enablement",
    description:
      "Automate build, validation and deployment practices so modernized applications can evolve with greater consistency.",
  },
  {
    title: "Observability",
    description:
      "Create visibility into service behavior, performance, dependencies and failure conditions across the target environment.",
  },
  {
    title: "Security modernization",
    description:
      "Reconsider identity, access, secrets, software supply chain and runtime controls as application boundaries change.",
  },
];

const targetEnvironment = [
  {
    Icon: Server,
    title: "Cloud",
    text: "Flexible infrastructure and managed platform capabilities.",
  },
  {
    Icon: Layers3,
    title: "Containers",
    text: "Portable runtime boundaries and standardized deployment environments.",
  },
  {
    Icon: Network,
    title: "APIs",
    text: "Explicit interfaces for applications, services and intelligent systems.",
  },
  {
    Icon: Database,
    title: "Modern data",
    text: "Governed information foundations accessible to analytics and AI.",
  },
  {
    Icon: Code2,
    title: "Automation",
    text: "Repeatable software delivery and infrastructure operations.",
  },
  {
    Icon: ShieldCheck,
    title: "Security",
    text: "Identity and control patterns designed for modern application boundaries.",
  },
  {
    Icon: Terminal,
    title: "Observability",
    text: "Operational signals that expose system health and application behavior.",
  },
  {
    Icon: ChevronRight,
    title: "AI access",
    text: "Controlled interfaces connecting intelligent systems with enterprise capabilities.",
  },
];

/* ============================================================
   BACKGROUND COMPONENT
============================================================ */

function PurpleGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#390b44]/60 blur-[180px] ${className}`}
    />
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function LegacyModernizationPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      {/* SCROLL INDICATOR */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-[#7046e6]"
      />

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5  pt-30 pb-10 md:px-10 ">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
          }}
        />


        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <h1 className="hyi-h1 hyi-white">
              Legacy is not a
              <span className="block hyi-blue">
                destination.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Modernize legacy applications, architecture and
              technology foundations without losing the business
              capability already embedded inside them. Create an
              environment where cloud, data, automation and AI can
              become part of how the enterprise operates.
            </p>

     
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MODERNIZATION PROBLEM
      ===================================================== */}
      <section
        id="modernization"
        className="relative overflow-hidden  "
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Legacy technology rarely becomes
                <span className="block hyi-blue">
                  a problem because it is old.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                It becomes a constraint when changing the system
                becomes slower, riskier and more expensive than
                changing the business requires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Legacy systems often contain years of business
                  logic, operational knowledge, customer rules and
                  integration dependencies. Replacing them without
                  understanding those responsibilities can transfer
                  technical debt into a new architecture instead of
                  removing it.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Modernization therefore begins with understanding
                  what should be preserved, what should change, what
                  can move independently and what should disappear
                  entirely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
      {/* =====================================================
          WORKLOAD DISPOSITION
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Not everything
                <span className="block hyi-blue">
                  needs rewriting.
                </span>
              </h2>

              <p className="mt-2 max-w-[420px] hyi-p">
                A modernization portfolio should make different
                decisions for different workloads.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#030303]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Terminal
                    size={14}
                    className="text-[#9878ef]"
                  />

                  <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                    MODERNIZATION PORTFOLIO
                  </span>
                </div>

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#a98cf1]"
                />
              </div>

              <div className="hidden grid-cols-[1.3fr_1fr_1fr_110px] border-b border-white/[0.06] px-6 py-4 md:grid">
                {["WORKLOAD", "CURRENT", "TARGET", "ACTION"].map(
                  (heading) => (
                    <span
                      key={heading}
                      className="font-mono text-[6px] tracking-[0.16em] text-white/[0.3]"
                    >
                      {heading}
                    </span>
                  ),
                )}
              </div>

              {workloads.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="grid gap-3 border-b border-white/[0.05] px-6 py-5 md:grid-cols-[1.3fr_1fr_1fr_110px] md:items-center"
                >
                  <span className="text-[11px] font-medium text-[#f2edff] md:text-[12px]">
                    {item.name}
                  </span>

                  <span className="font-mono text-[6px] text-white/[0.35]">
                    {item.current}
                  </span>

                  <span className="font-mono text-[6px] text-white/[0.5]">
                    {item.target}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.12em] text-[#a98cf1]">
                    {item.action}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODERNIZATION STRATEGIES
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Modernization
              <span className="block hyi-blue">
                strategies.
              </span>
            </h2>
          </div>

          <div className="mt-5">
            {modernizationPaths.map((item) => (
              <motion.article
                key={item.strategy}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid gap-5 border-t border-white/[0.07] py-8 lg:grid-cols-[0.7fr_1fr_1fr]"
              >
                <div>
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {item.strategy}
                  </span>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {item.title}
                  </h3>
                </div>

                <p className="hyi-p">{item.description}</p>

                <div className="lg:border-l lg:border-white/[0.07] lg:pl-8">
                  <p className="font-mono text-[6px] tracking-[0.18em] text-white/[0.3]">
                    USE WHEN
                  </p>

                  <p className="mt-2 hyi-p">{item.bestFor}</p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          MODERNIZATION LAYERS
      ===================================================== */}
      <section className="relative overflow-hidden  py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Modernize
                <span className="block hyi-blue">
                  the whole stack.
                </span>
              </h2>

              <p className="mt-2 max-w-[400px] hyi-p">
                Legacy modernization becomes incomplete when only
                the application code changes while its surrounding
                dependencies remain unchanged.
              </p>
            </motion.div>

            <div>
              {layers.map((layer) => (
                <motion.article
                  key={layer.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {layer.title}
                  </h3>

                  <div>
                    <p className="hyi-p">{layer.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
                        >
                          {item.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEFORE / AFTER
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              One change.
              <span className="block hyi-blue">
                Controlled change.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                BEFORE / LEGACY APPLICATION
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                One change. Everything moves.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Shared deployment",
                  "Shared database",
                  "Tight dependencies",
                  "Manual release process",
                  "Limited observability",
                  "Infrastructure coupling",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />

                    <span className="hyi-p">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[28px] border border-[#7046e6]/25 bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                AFTER / MODERNIZED SYSTEM
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Clear boundaries. Controlled change.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Explicit service boundaries",
                  "Governed data ownership",
                  "API contracts",
                  "Automated delivery",
                  "Operational telemetry",
                  "Modern runtime platform",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#9878ef]"
                    />

                    <span className="hyi-p">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGACY TO AI-READY
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Modernization makes enterprise knowledge accessible
              <span className="block hyi-blue">
                to modern applications and AI.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              AI systems require controlled access to enterprise
              information and business capabilities. Legacy
              modernization can expose that value through governed
              interfaces rather than requiring intelligent
              applications to depend directly on fragile historical
              implementations.
            </p>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              This makes modernization an important foundation for
              enterprise search, copilots, intelligent automation, AI
              agents and other systems that need reliable access to
              operational context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Modernization
              <span className="block hyi-blue">
                capabilities.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Change without
                <span className="block hyi-blue">
                  losing control.
                </span>
              </h2>

              <p className="mt-2 max-w-[410px] hyi-p">
                Large legacy estates become manageable when
                modernization is sequenced as a portfolio rather
                than treated as one irreversible migration event.
              </p>
            </div>

            <div>
              {phases.map((phase) => (
                <motion.article
                  key={phase.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {phase.label}
                  </span>

                  <div className="mt-2 grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
                    <h3 className="hyi-h3 hyi-white">
                      {phase.title}
                    </h3>

                    <div>
                      <p className="hyi-p">{phase.description}</p>

                      <div className="mt-3 flex items-center gap-3">
                        <ArrowRight
                          size={11}
                          className="text-[#9878ef]/60"
                        />

                        <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.35]">
                          OUTPUT / {phase.output}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Engineering
                <span className="block hyi-blue">
                  principles.
                </span>
              </h2>
            </div>

            <div>
              {principles.map((principle) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {principle.title}
                  </h3>

                  <p className="hyi-p">{principle.description}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TARGET ENVIRONMENT
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Modern foundations for
              <span className="block hyi-blue">
                continuous evolution.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {targetEnvironment.map(
              ({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.05 }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(112,70,230,.4)",
                  }}
                  className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={16}
                        className="text-[#bba4f6]"
                      />
                    </div>
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">{text}</p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTINUOUS MODERNIZATION
      ===================================================== */}
      <section className="relative overflow-hidden pt-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Don&apos;t rebuild yesterday.
              <span className="block hyi-blue">
                Build an architecture designed to change.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[850px] hyi-p">
              The objective is not simply to make old applications
              newer. It is to reduce the structural constraints that
              prevent technology from changing at the speed required
              by the business.
            </p>

            <p className="mx-auto mt-2 max-w-[850px] hyi-p">
              A modernized enterprise can evolve applications,
              infrastructure, data and intelligent capabilities
              incrementally — without requiring another complete
              transformation every time technology changes.
            </p>

     
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}