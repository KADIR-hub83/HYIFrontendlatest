"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
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
  number: string;
  strategy: string;
  title: string;
  description: string;
  bestFor: string;
};

type Layer = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

type Phase = {
  number: string;
  label: string;
  title: string;
  description: string;
  output: string;
};

type Principle = {
  number: string;
  title: string;
  description: string;
};

type Workload = {
  id: string;
  name: string;
  current: string;
  target: string;
  action: string;
};

type Capability = {
  number: string;
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const modernizationPaths: ModernizationPath[] = [
  {
    number: "01",
    strategy: "REHOST",
    title: "Move before changing.",
    description:
      "Relocate selected workloads to a modern infrastructure environment with limited application-level modification. Rehosting can reduce infrastructure dependency and create an initial foundation for deeper modernization.",
    bestFor:
      "Workloads where infrastructure change is more urgent than application redesign.",
  },
  {
    number: "02",
    strategy: "REPLATFORM",
    title: "Change the platform.",
    description:
      "Move applications onto managed infrastructure, databases, runtime environments or container platforms while preserving significant portions of the existing application architecture.",
    bestFor:
      "Applications that can benefit from modern operational platforms without immediate full redesign.",
  },
  {
    number: "03",
    strategy: "REFACTOR",
    title: "Change the architecture.",
    description:
      "Restructure selected parts of an application so services, data flows, integration boundaries and runtime characteristics better support modern cloud and AI-enabled operating environments.",
    bestFor:
      "Strategic applications constrained by architecture rather than only infrastructure.",
  },
  {
    number: "04",
    strategy: "REARCHITECT",
    title: "Redesign the system.",
    description:
      "Reconsider application boundaries, service responsibilities, integration patterns, scalability assumptions and data architecture when the existing system fundamentally limits business evolution.",
    bestFor:
      "Core systems where incremental platform changes cannot resolve structural limitations.",
  },
  {
    number: "05",
    strategy: "REBUILD",
    title: "Create a new foundation.",
    description:
      "Build a replacement capability when the cost and complexity of continuously adapting the legacy application exceeds the value of preserving its existing implementation.",
    bestFor:
      "Systems with high strategic relevance but limited long-term architectural viability.",
  },
  {
    number: "06",
    strategy: "REPLACE",
    title: "Adopt a different capability.",
    description:
      "Retire custom legacy functionality where a modern platform or product can satisfy the required business capability with a more sustainable operational model.",
    bestFor:
      "Commodity capabilities where maintaining custom software no longer creates meaningful differentiation.",
  },
  {
    number: "07",
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
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
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
    number: "01",
    label: "DISCOVER",
    title: "Map the legacy estate.",
    description:
      "Build an evidence-based view of applications, infrastructure, interfaces, databases, business dependencies and operational ownership before deciding what should change.",
    output: "APPLICATION + DEPENDENCY BASELINE",
  },
  {
    number: "02",
    label: "ASSESS",
    title: "Understand modernization pressure.",
    description:
      "Evaluate business criticality, technical debt, operational risk, change frequency, architecture constraints and opportunities for cloud, automation, data and AI enablement.",
    output: "MODERNIZATION ASSESSMENT",
  },
  {
    number: "03",
    label: "CLASSIFY",
    title: "Choose a path per workload.",
    description:
      "Avoid treating every application identically. Determine whether each workload should be retained, retired, replaced, rehosted, replatformed, refactored or rebuilt.",
    output: "WORKLOAD DISPOSITION",
  },
  {
    number: "04",
    label: "SEQUENCE",
    title: "Design the migration waves.",
    description:
      "Group modernization initiatives according to dependencies, business timing, risk, platform readiness and the order in which foundational capabilities must become available.",
    output: "MODERNIZATION ROADMAP",
  },
  {
    number: "05",
    label: "MODERNIZE",
    title: "Change incrementally.",
    description:
      "Introduce new interfaces, platforms and application boundaries progressively so the organization can modernize important capabilities without requiring an uncontrolled enterprise-wide rewrite.",
    output: "MODERNIZED CAPABILITIES",
  },
  {
    number: "06",
    label: "VALIDATE",
    title: "Prove operational readiness.",
    description:
      "Validate functionality, performance, security, data integrity, observability and recovery before workloads transition into their target operating environment.",
    output: "PRODUCTION READINESS",
  },
  {
    number: "07",
    label: "TRANSITION",
    title: "Move with controlled risk.",
    description:
      "Coordinate cutover, traffic movement, data synchronization, fallback procedures and operational ownership so modernization remains reversible where practical.",
    output: "CONTROLLED CUTOVER",
  },
  {
    number: "08",
    label: "EVOLVE",
    title: "Keep modernizing.",
    description:
      "Use the new architecture and operating model to continuously improve services instead of allowing the modernized estate to become the next generation of legacy technology.",
    output: "CONTINUOUS MODERNIZATION",
  },
];

const principles: Principle[] = [
  {
    number: "P01",
    title: "Modernize by business capability.",
    description:
      "Architecture boundaries should increasingly reflect meaningful business capabilities rather than historical implementation structures.",
  },
  {
    number: "P02",
    title: "Reduce coupling before increasing speed.",
    description:
      "Faster delivery provides limited value when every application change still requires coordinated modification across tightly connected systems.",
  },
  {
    number: "P03",
    title: "Protect data during architectural change.",
    description:
      "Data ownership, consistency and migration need explicit design because application modernization often changes where information lives and how it moves.",
  },
  {
    number: "P04",
    title: "Build observability into the target.",
    description:
      "A modern application environment should make behavior, dependencies, failures and performance easier to understand than the system it replaces.",
  },
  {
    number: "P05",
    title: "Separate modernization from migration.",
    description:
      "Moving software and improving software are related but different decisions. Some workloads should move first; others should change before moving.",
  },
  {
    number: "P06",
    title: "Retirement is modernization.",
    description:
      "Removing redundant applications can reduce complexity more effectively than investing in modernization for technology the enterprise no longer needs.",
  },
];

const workloads: Workload[] = [
  {
    id: "APP-001",
    name: "CORE TRANSACTION ENGINE",
    current: "MONOLITH",
    target: "MODULAR SERVICES",
    action: "REFACTOR",
  },
  {
    id: "APP-002",
    name: "INTERNAL REPORTING",
    current: "LEGACY VM",
    target: "MANAGED PLATFORM",
    action: "REPLATFORM",
  },
  {
    id: "APP-003",
    name: "DOCUMENT WORKFLOW",
    current: "CUSTOM APPLICATION",
    target: "MODERN PLATFORM",
    action: "REPLACE",
  },
  {
    id: "APP-004",
    name: "ARCHIVE SERVICE",
    current: "DEDICATED SERVER",
    target: "OBJECT STORAGE",
    action: "REHOST",
  },
  {
    id: "APP-005",
    name: "DUPLICATE PORTAL",
    current: "LEGACY WEB APP",
    target: "NONE",
    action: "RETIRE",
  },
  {
    id: "APP-006",
    name: "AI KNOWLEDGE ACCESS",
    current: "NOT AVAILABLE",
    target: "GOVERNED AI SERVICE",
    action: "BUILD",
  },
];

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Application discovery",
    description:
      "Inventory applications and connect technical components with business ownership, criticality and dependencies.",
  },
  {
    number: "02",
    title: "Architecture assessment",
    description:
      "Examine structural constraints that influence scalability, maintainability, deployment independence and modernization feasibility.",
  },
  {
    number: "03",
    title: "Cloud modernization",
    description:
      "Determine where managed cloud capabilities can replace infrastructure responsibilities or improve application operating characteristics.",
  },
  {
    number: "04",
    title: "Application refactoring",
    description:
      "Restructure targeted application areas around clearer boundaries, APIs, services and modern runtime patterns.",
  },
  {
    number: "05",
    title: "Data modernization",
    description:
      "Improve data accessibility and ownership while protecting integrity through application and platform transitions.",
  },
  {
    number: "06",
    title: "API modernization",
    description:
      "Introduce stable interfaces around legacy capabilities to reduce direct dependencies and enable progressive replacement.",
  },
  {
    number: "07",
    title: "DevOps enablement",
    description:
      "Automate build, validation and deployment practices so modernized applications can evolve with greater consistency.",
  },
  {
    number: "08",
    title: "Observability",
    description:
      "Create visibility into service behavior, performance, dependencies and failure conditions across the target environment.",
  },
  {
    number: "09",
    title: "Security modernization",
    description:
      "Reconsider identity, access, secrets, software supply chain and runtime controls as application boundaries change.",
  },
];

/* ============================================================
   ANIMATION
============================================================ */

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ============================================================
   COMPONENTS
============================================================ */

function Eyebrow({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-5"
    >
      <span className="font-mono text-[7px] text-white/[0.22]">
        {number}
      </span>

      <div className="h-px w-8 bg-white/[0.18]" />

      <span className="font-mono text-[7px] tracking-[0.24em] text-white/[0.38]">
        {children}
      </span>
    </motion.div>
  );
}

function Line() {
  return (
    <div className="relative h-px overflow-hidden bg-white/[0.08]">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "130%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-y-0 w-[35%] bg-white/[0.45]"
      />
    </div>
  );
}

function WordReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mr-[0.22em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
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

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.25],
  );

  return (
    <main className="relative overflow-hidden bg-[#000000] text-white selection:bg-white selection:text-black">
      {/* ====================================================
          GLOBAL SCROLL INDICATOR
      ==================================================== */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-white"
      />

      <Header />

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative min-h-screen bg-black px-5 pb-10 pt-40 md:px-10 md:pt-48">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-[1500px] flex-col justify-between"
        >
          <div className="grid gap-12 lg:grid-cols-[0.36fr_1.64fr]">
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block"
            >
              <div className="border-l border-white/[0.1] pl-5">
                <p className="font-mono text-[6px] leading-6 tracking-[0.22em] text-white/[0.25]">
                  DIGITAL
                  <br />
                  TRANSFORMATION
                  <br />
                  /
                  <br />
                  LEGACY
                  <br />
                  MODERNIZATION
                </p>
              </div>
            </motion.aside>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={reveal}>
                <Eyebrow number="00">
                  LEGACY MODERNIZATION
                </Eyebrow>
              </motion.div>

              <motion.p
                variants={reveal}
                className="mt-12 font-mono text-[7px] tracking-[0.25em] text-white/[0.26]"
              >
                OLD SYSTEMS / NEW POSSIBILITIES
              </motion.p>

              <motion.h1
                variants={reveal}
                className="mt-7 max-w-[1200px] text-[clamp(4.4rem,10.2vw,10.8rem)] font-semibold leading-[0.77] tracking-[-0.09em]"
              >
                Legacy
                <span className="block text-white/[0.28]">
                  is not a
                </span>
                <span className="block">
                  destination.
                </span>
              </motion.h1>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="mt-24 grid gap-10 border-t border-white/[0.09] py-8 lg:grid-cols-[0.36fr_.64fr_1fr]"
          >
            <div>
              <p className="font-mono text-[6px] leading-6 tracking-[0.2em] text-white/[0.22]">
                APPLICATIONS
                <br />
                DATA
                <br />
                INFRASTRUCTURE
                <br />
                INTEGRATION
              </p>
            </div>

            <div>
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                MODERNIZATION / 2026
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[14px] leading-8 text-white/[0.52] md:text-[17px] md:leading-9">
                Modernize legacy applications, architecture and
                technology foundations without losing the business
                capability already embedded inside them. Create an
                environment where cloud, data, automation and AI can
                become part of how the enterprise operates.
              </p>

              <motion.a
                href="#modernization"
                whileHover={{ x: 7 }}
                className="mt-8 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.32]"
              >
                READ THE SYSTEM
                <ArrowDown size={11} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          INDEX STRIP
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 px-5 md:grid-cols-4 md:px-10 lg:grid-cols-8">
          {[
            "DISCOVER",
            "ASSESS",
            "CLASSIFY",
            "SEQUENCE",
            "MODERNIZE",
            "VALIDATE",
            "TRANSITION",
            "EVOLVE",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,.025)",
              }}
              className="border-r border-white/[0.07] px-4 py-6"
            >
              <span className="block font-mono text-[6px] text-white/[0.18]">
                0{index + 1}
              </span>

              <span className="mt-3 block font-mono text-[6px] tracking-[0.16em] text-white/[0.4]">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================
          MANIFESTO
      ==================================================== */}

      <section
        id="modernization"
        className="bg-black px-5 py-36 md:px-10 md:py-56"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.32fr_1.68fr]">
            <div>
              <Eyebrow number="01">
                THE MODERNIZATION PROBLEM
              </Eyebrow>
            </div>

            <div>
              <WordReveal
                text="Legacy technology rarely becomes a problem because it is old."
                className="max-w-[1200px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
              />

              <motion.p
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 max-w-[900px] text-[16px] leading-9 text-white/[0.5] md:text-[18px] md:leading-10"
              >
                It becomes a constraint when changing the system becomes
                slower, riskier and more expensive than changing the
                business requires.
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-16 h-px bg-white/[0.12]"
              />

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[13px] leading-8 text-white/[0.38]"
                >
                  Legacy systems often contain years of business logic,
                  operational knowledge, customer rules and integration
                  dependencies. Replacing them without understanding
                  those responsibilities can transfer technical debt
                  into a new architecture instead of removing it.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[13px] leading-8 text-white/[0.38]"
                >
                  Modernization therefore begins with understanding what
                  should be preserved, what should change, what can move
                  independently and what should disappear entirely.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Line />

      {/* ====================================================
          MASSIVE TEXT STATEMENT
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="font-mono text-[7px] tracking-[0.23em] text-white/[0.24]">
              LEGACY ≠ FAILURE
            </p>

            <h2 className="mt-12 max-w-[1450px] text-[clamp(4rem,8.4vw,9rem)] font-semibold leading-[0.86] tracking-[-0.082em]">
              Preserve
              <span className="text-white/[0.27]">
                {" "}
                what creates value.
              </span>

              <span className="mt-5 block">
                Remove
                <span className="text-white/[0.27]">
                  {" "}
                  what creates friction.
                </span>
              </span>

              <span className="mt-5 block">
                Modernize
                <span className="text-white/[0.27]">
                  {" "}
                  what limits change.
                </span>
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          WORKLOAD TERMINAL
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black">
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.42fr_1.58fr]">
            <div>
              <Eyebrow number="02">
                WORKLOAD DISPOSITION
              </Eyebrow>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                Not everything
                <span className="block text-white/[0.3]">
                  needs rewriting.
                </span>
              </h2>

              <p className="mt-8 max-w-[420px] text-[13px] leading-8 text-white/[0.38]">
                A modernization portfolio should make different
                decisions for different workloads.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/[0.1]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex items-center gap-3">
                  <Terminal
                    size={12}
                    className="text-white/[0.35]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.35]">
                    MODERNIZATION_PORTFOLIO
                  </span>
                </div>

                <motion.span
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-[5px] w-[5px] rounded-full bg-white"
                />
              </div>

              <div className="hidden grid-cols-[90px_1.3fr_1fr_1fr_110px] border-b border-white/[0.08] px-5 py-4 md:grid">
                {[
                  "ID",
                  "WORKLOAD",
                  "CURRENT",
                  "TARGET",
                  "ACTION",
                ].map((heading) => (
                  <span
                    key={heading}
                    className="font-mono text-[6px] tracking-[0.16em] text-white/[0.2]"
                  >
                    {heading}
                  </span>
                ))}
              </div>

              {workloads.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,.018)",
                  }}
                  className="grid gap-5 border-b border-white/[0.07] px-5 py-6 md:grid-cols-[90px_1.3fr_1fr_1fr_110px] md:items-center"
                >
                  <span className="font-mono text-[6px] text-white/[0.24]">
                    {item.id}
                  </span>

                  <span className="text-[12px] font-medium text-white/[0.7]">
                    {item.name}
                  </span>

                  <span className="font-mono text-[6px] text-white/[0.28]">
                    {item.current}
                  </span>

                  <span className="font-mono text-[6px] text-white/[0.42]">
                    {item.target}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.12em] text-white/[0.72]">
                    {item.action}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================
          7 MODERNIZATION PATHS
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow number="03">
            MODERNIZATION STRATEGIES
          </Eyebrow>

          <div className="mt-14">
            {modernizationPaths.map((item, index) => (
              <motion.article
                key={item.strategy}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="group border-t border-white/[0.08] py-12 md:py-16"
              >
                <div className="grid gap-9 lg:grid-cols-[90px_.7fr_1fr_1fr]">
                  <div>
                    <motion.span
                      whileHover={{
                        x: 6,
                      }}
                      className="block font-mono text-[7px] text-white/[0.22]"
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  <div>
                    <p className="font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
                      {item.strategy}
                    </p>

                    <h3 className="mt-5 max-w-[320px] text-3xl font-medium leading-[1.05] tracking-[-0.045em]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.4]">
                    {item.description}
                  </p>

                  <div className="lg:border-l lg:border-white/[0.07] lg:pl-8">
                    <p className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                      USE WHEN
                    </p>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.36]">
                      {item.bestFor}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          ARCHITECTURE LAYERS
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.4fr_1.6fr]">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <Eyebrow number="04">
                MODERNIZATION LAYERS
              </Eyebrow>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-6xl">
                Modernize
                <span className="block text-white/[0.3]">
                  the whole stack.
                </span>
              </h2>

              <p className="mt-8 max-w-[400px] text-[13px] leading-8 text-white/[0.38]">
                Legacy modernization becomes incomplete when only the
                application code changes while its surrounding
                dependencies remain unchanged.
              </p>
            </motion.div>

            <div>
              {layers.map((layer, index) => (
                <motion.article
                  key={layer.title}
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="min-h-[400px] border-t border-white/[0.08] py-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[7px] text-white/[0.2]">
                      LAYER / {layer.number}
                    </span>

                    <motion.span
                      animate={{
                        opacity: [0.15, 0.7, 0.15],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                      }}
                      className="h-[5px] w-[5px] rounded-full bg-white"
                    />
                  </div>

                  <div className="mt-20 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
                    <div>
                      <h3 className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                        {layer.title}
                      </h3>
                    </div>

                    <div>
                      <p className="max-w-[600px] text-[13px] leading-8 text-white/[0.42]">
                        {layer.description}
                      </p>

                      <div className="mt-9 grid grid-cols-2 gap-x-7 gap-y-4">
                        {layer.items.map((item) => (
                          <motion.div
                            key={item}
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-3 border-t border-white/[0.07] pt-4"
                          >
                            <span className="h-1 w-1 rounded-full bg-white/[0.35]" />

                            <span className="font-mono text-[6px] tracking-[0.12em] text-white/[0.32]">
                              {item.toUpperCase()}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CODE / SYSTEM SECTION
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[7px] tracking-[0.2em] text-white/[0.25]">
                BEFORE / LEGACY APPLICATION
              </p>

              <h2 className="mt-8 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
                One change.
                <span className="block text-white/[0.28]">
                  Everything moves.
                </span>
              </h2>

              <div className="mt-12 border-l border-white/[0.1] pl-6">
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
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-4 py-3"
                  >
                    <span className="font-mono text-[6px] text-white/[0.18]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[12px] text-white/[0.38]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:border-l lg:border-white/[0.08] lg:pl-14"
            >
              <p className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
                AFTER / MODERNIZED SYSTEM
              </p>

              <h2 className="mt-8 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
                Clear boundaries.
                <span className="block text-white/[0.28]">
                  Controlled change.
                </span>
              </h2>

              <div className="mt-12 border-l border-white/[0.18] pl-6">
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
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-4 py-3"
                  >
                    <Check
                      size={10}
                      className="text-white/[0.45]"
                    />

                    <span className="text-[12px] text-white/[0.55]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Line />

      {/* ====================================================
          AI READY
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow number="05">
            LEGACY TO AI-READY
          </Eyebrow>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 max-w-[1450px] text-[clamp(4.2rem,8.5vw,9.2rem)] font-semibold leading-[0.85] tracking-[-0.083em]"
          >
            Modernization makes
            <span className="text-white/[0.28]">
              {" "}
              enterprise knowledge accessible
            </span>

            <span className="mt-5 block">
              to modern
              <span className="text-white/[0.28]">
                {" "}
                applications and AI.
              </span>
            </span>
          </motion.h2>

          <div className="mt-20 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[.35fr_.65fr_1fr]">
            <div>
              <Database
                size={19}
                className="text-white/[0.3]"
              />
            </div>

            <div>
              <p className="font-mono text-[7px] leading-6 tracking-[0.18em] text-white/[0.25]">
                DATA
                <br />
                CONTEXT
                <br />
                APIS
                <br />
                EVENTS
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-9 text-white/[0.5]">
                AI systems require controlled access to enterprise
                information and business capabilities. Legacy
                modernization can expose that value through governed
                interfaces rather than requiring intelligent
                applications to depend directly on fragile historical
                implementations.
              </p>

              <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.35]">
                This makes modernization an important foundation for
                enterprise search, copilots, intelligent automation,
                AI agents and other systems that need reliable access
                to operational context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CAPABILITIES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[.35fr_1.65fr]">
            <div>
              <Eyebrow number="06">
                CAPABILITIES
              </Eyebrow>
            </div>

            <div className="grid md:grid-cols-3">
              {capabilities.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (index % 3) * 0.06,
                  }}
                  whileHover={{
                    backgroundColor:
                      "rgba(255,255,255,.018)",
                  }}
                  className="min-h-[330px] border-b border-r border-t border-white/[0.08] p-7"
                >
                  <span className="font-mono text-[6px] text-white/[0.2]">
                    CAP / {item.number}
                  </span>

                  <h3 className="mt-24 text-2xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[12px] leading-7 text-white/[0.38]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          JOURNEY
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.4fr_1.6fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <Eyebrow number="07">
                MODERNIZATION JOURNEY
              </Eyebrow>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl">
                Change without
                <span className="block text-white/[0.3]">
                  losing control.
                </span>
              </h2>

              <p className="mt-8 max-w-[410px] text-[13px] leading-8 text-white/[0.38]">
                Large legacy estates become manageable when
                modernization is sequenced as a portfolio rather than
                treated as one irreversible migration event.
              </p>
            </div>

            <div>
              {phases.map((phase, index) => (
                <motion.article
                  key={phase.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                  }}
                  className="min-h-[410px] border-t border-white/[0.08] py-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-white/[0.2]">
                      {phase.number}
                    </span>

                    <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.34]">
                      {phase.label}
                    </span>
                  </div>

                  <div className="mt-24 grid gap-10 md:grid-cols-[.85fr_1.15fr]">
                    <h3 className="max-w-[460px] text-4xl font-medium leading-[1] tracking-[-0.05em]">
                      {phase.title}
                    </h3>

                    <div>
                      <p className="max-w-[570px] text-[13px] leading-8 text-white/[0.42]">
                        {phase.description}
                      </p>

                      <div className="mt-9 flex items-center gap-3">
                        <ArrowRight
                          size={10}
                          className="text-white/[0.25]"
                        />

                        <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.27]">
                          OUTPUT / {phase.output}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRINCIPLES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow number="08">
            ENGINEERING PRINCIPLES
          </Eyebrow>

          <div className="mt-16">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                }}
                className="border-t border-white/[0.08] py-10"
              >
                <div className="grid gap-7 md:grid-cols-[110px_1fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    {principle.number}
                  </span>

                  <h3 className="max-w-[480px] text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-[570px] text-[13px] leading-8 text-white/[0.39]">
                    {principle.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          TECHNOLOGY INDEX
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow number="09">
            TARGET ENVIRONMENT
          </Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-[1000px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
          >
            Modern foundations for
            <span className="block text-white/[0.3]">
              continuous evolution.
            </span>
          </motion.h2>

          <div className="mt-20 grid border-l border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Server,
                title: "Cloud",
                text:
                  "Flexible infrastructure and managed platform capabilities.",
              },
              {
                Icon: Layers3,
                title: "Containers",
                text:
                  "Portable runtime boundaries and standardized deployment environments.",
              },
              {
                Icon: Network,
                title: "APIs",
                text:
                  "Explicit interfaces for applications, services and intelligent systems.",
              },
              {
                Icon: Database,
                title: "Modern data",
                text:
                  "Governed information foundations accessible to analytics and AI.",
              },
              {
                Icon: Code2,
                title: "Automation",
                text:
                  "Repeatable software delivery and infrastructure operations.",
              },
              {
                Icon: ShieldCheck,
                title: "Security",
                text:
                  "Identity and control patterns designed for modern application boundaries.",
              },
              {
                Icon: Terminal,
                title: "Observability",
                text:
                  "Operational signals that expose system health and application behavior.",
              },
              {
                Icon: ChevronRight,
                title: "AI access",
                text:
                  "Controlled interfaces connecting intelligent systems with enterprise capabilities.",
              },
            ].map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: (index % 4) * 0.05,
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.018)",
                }}
                className="min-h-[290px] border-b border-r border-white/[0.08] p-7"
              >
                <div className="flex justify-between">
                  <Icon
                    size={15}
                    className="text-white/[0.28]"
                  />

                  <span className="font-mono text-[6px] text-white/[0.18]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-24 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.36]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          CLOSING MANIFESTO
      ==================================================== */}

      <section className="border-t border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Eyebrow number="10">
              CONTINUOUS MODERNIZATION
            </Eyebrow>

            <h2 className="mt-14 max-w-[1450px] text-[clamp(4.3rem,9vw,9.8rem)] font-semibold leading-[0.82] tracking-[-0.088em]">
              Don&apos;t rebuild
              <span className="block text-white/[0.27]">
                yesterday.
              </span>

              <span className="mt-7 block">
                Build an architecture
              </span>

              <span className="block text-white/[0.27]">
                designed to change.
              </span>
            </h2>

            <div className="mt-20 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.35fr_.65fr_1fr]">
              <div>
                <p className="font-mono text-[6px] leading-6 tracking-[0.2em] text-white/[0.2]">
                  LEGACY
                  <br />
                  MODERNIZATION
                  <br />
                  /
                  <br />
                  DIGITAL
                  <br />
                  TRANSFORMATION
                </p>
              </div>

              <div>
                <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.25]">
                  APPLICATIONS
                  <br />
                  DATA
                  <br />
                  CLOUD
                  <br />
                  AI
                  <br />
                  OPERATIONS
                </p>
              </div>

              <div>
                <p className="max-w-[760px] text-[15px] leading-9 text-white/[0.48]">
                  The objective is not simply to make old applications
                  newer. It is to reduce the structural constraints
                  that prevent technology from changing at the speed
                  required by the business.
                </p>

                <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.34]">
                  A modernized enterprise can evolve applications,
                  infrastructure, data and intelligent capabilities
                  incrementally — without requiring another complete
                  transformation every time technology changes.
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                  }}
                  className="mt-12 h-px bg-white/[0.12]"
                />

                <div className="mt-8 flex flex-wrap gap-x-9 gap-y-5">
                  {[
                    "DISCOVER",
                    "DECOUPLE",
                    "MODERNIZE",
                    "MIGRATE",
                    "AUTOMATE",
                    "OBSERVE",
                    "EVOLVE",
                  ].map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="font-mono text-[6px] tracking-[0.2em] text-white/[0.28]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}