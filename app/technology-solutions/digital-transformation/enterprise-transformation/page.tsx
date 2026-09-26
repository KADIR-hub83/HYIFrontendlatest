"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const transformationLayers = [
  {
    no: "01",
    label: "STRATEGY",
    title: "Business direction",
    text:
      "Connect enterprise transformation to measurable business priorities. Define where artificial intelligence, automation, cloud and data can change how the organization creates value instead of treating technology modernization as an isolated initiative.",
  },
  {
    no: "02",
    label: "OPERATING MODEL",
    title: "How the enterprise works",
    text:
      "Redesign decision rights, ownership, collaboration and operational structures so teams can adopt intelligent systems without creating fragmented AI initiatives across departments.",
  },
  {
    no: "03",
    label: "PROCESS",
    title: "How work moves",
    text:
      "Reimagine workflows around intelligent automation, connected information and human judgment. Remove unnecessary handoffs before introducing AI into the operating environment.",
  },
  {
    no: "04",
    label: "DATA",
    title: "How context becomes available",
    text:
      "Create governed data foundations that allow people, applications and AI systems to access trusted enterprise context at the moment decisions and actions occur.",
  },
  {
    no: "05",
    label: "TECHNOLOGY",
    title: "How capabilities scale",
    text:
      "Modernize platforms, integration layers and cloud infrastructure so AI capabilities can move from isolated experiments into reusable enterprise services.",
  },
  {
    no: "06",
    label: "PEOPLE",
    title: "How change becomes real",
    text:
      "Develop new skills, responsibilities and ways of working. Enterprise transformation succeeds when technology adoption becomes part of everyday operations rather than remaining a separate innovation program.",
  },
];

const shifts = [
  {
    from: "SILOED SYSTEMS",
    to: "CONNECTED ENTERPRISE",
    text:
      "Move from disconnected applications and departmental information toward integrated platforms and shared enterprise context.",
  },
  {
    from: "MANUAL COORDINATION",
    to: "INTELLIGENT ORCHESTRATION",
    text:
      "Reduce repetitive coordination by allowing workflows, automation and AI systems to participate in operational execution.",
  },
  {
    from: "STATIC REPORTING",
    to: "CONTINUOUS INTELLIGENCE",
    text:
      "Move from delayed business reporting toward operational signals and intelligence available closer to the moment of action.",
  },
  {
    from: "ISOLATED AI PILOTS",
    to: "ENTERPRISE AI CAPABILITY",
    text:
      "Replace disconnected experiments with governed, reusable AI capabilities integrated into business processes and technology platforms.",
  },
  {
    from: "TECHNOLOGY PROJECTS",
    to: "BUSINESS TRANSFORMATION",
    text:
      "Evaluate modernization through changes in business capability, operating performance and organizational adaptability.",
  },
];

const operatingSystem = [
  {
    index: "01",
    title: "Business",
    description:
      "Strategy, customer value, operating priorities and measurable transformation outcomes.",
  },
  {
    index: "02",
    title: "People",
    description:
      "Skills, accountability, organizational design, adoption and human decision-making.",
  },
  {
    index: "03",
    title: "Process",
    description:
      "Workflows, automation, handoffs, decisions and operational execution.",
  },
  {
    index: "04",
    title: "Data",
    description:
      "Trusted information, governance, accessibility, context and enterprise knowledge.",
  },
  {
    index: "05",
    title: "AI",
    description:
      "Machine intelligence, copilots, agents, predictive systems and intelligent automation.",
  },
  {
    index: "06",
    title: "Technology",
    description:
      "Cloud, platforms, applications, APIs, infrastructure and enterprise architecture.",
  },
];

const journey = [
  {
    number: "01",
    phase: "UNDERSTAND",
    title: "Establish the transformation baseline.",
    description:
      "Understand business priorities, operating constraints, technology landscape, data maturity, process friction and current AI capabilities.",
  },
  {
    number: "02",
    phase: "DEFINE",
    title: "Design the future enterprise.",
    description:
      "Define target capabilities, operating principles, transformation priorities and the future relationship between people, AI, data and technology.",
  },
  {
    number: "03",
    phase: "PRIORITIZE",
    title: "Build a sequenced portfolio.",
    description:
      "Identify initiatives based on strategic relevance, dependencies, feasibility and the organizational capabilities required to implement them responsibly.",
  },
  {
    number: "04",
    phase: "TRANSFORM",
    title: "Change processes and platforms together.",
    description:
      "Modernize workflows, applications, data foundations and AI capabilities while maintaining alignment with the target operating model.",
  },
  {
    number: "05",
    phase: "ADOPT",
    title: "Embed change into daily work.",
    description:
      "Support teams with governance, skills, communication and new operating practices so transformation becomes part of normal business execution.",
  },
  {
    number: "06",
    phase: "EVOLVE",
    title: "Continuously adapt the enterprise.",
    description:
      "Use operational feedback and changing technology capabilities to continuously improve processes, platforms and ways of working.",
  },
];

const principles = [
  {
    title: "Business before technology.",
    text:
      "Technology choices should follow the business capabilities and operating changes the organization is trying to create.",
  },
  {
    title: "Transform systems together.",
    text:
      "Process, data, applications, people and AI are interconnected. Changing one without considering the others creates new constraints.",
  },
  {
    title: "Build reusable capability.",
    text:
      "Shared platforms, data foundations and AI services create more enterprise value than isolated departmental solutions.",
  },
  {
    title: "Governance is architecture.",
    text:
      "Security, accountability, permissions, auditability and human oversight must be designed into intelligent operations.",
  },
  {
    title: "Adoption is part of delivery.",
    text:
      "A technically successful platform creates little value when teams cannot integrate it into everyday work.",
  },
  {
    title: "Transformation never finishes.",
    text:
      "Enterprise transformation creates the capability to continuously respond to changing markets, technology and customer expectations.",
  },
];

const capabilities = [
  "AI STRATEGY",
  "ENTERPRISE ARCHITECTURE",
  "PROCESS TRANSFORMATION",
  "DATA MODERNIZATION",
  "CLOUD TRANSFORMATION",
  "INTELLIGENT AUTOMATION",
  "AI GOVERNANCE",
  "OPERATING MODEL",
  "CHANGE ENABLEMENT",
  "PLATFORM MODERNIZATION",
];

/* =========================================================
   MOTION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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

/* =========================================================
   SMALL UI
========================================================= */

function Label({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4"
    >
      <motion.span
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="h-[5px] w-[5px] rounded-full bg-white"
      />

      <span className="font-mono text-[7px] tracking-[0.25em] text-white/[0.38]">
        {number && `${number} / `}
        {children}
      </span>
    </motion.div>
  );
}

function AnimatedDivider() {
  return (
    <div className="relative h-px overflow-hidden bg-white/[0.08]">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.7,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 w-[30%] bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function EnterpriseTransformationPage() {
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <main className="relative overflow-hidden bg-[#000000] text-white selection:bg-white selection:text-black">
      {/* SCROLL PROGRESS */}

      <motion.div
        style={{ width: progressWidth }}
        className="fixed left-0 top-0 z-[9999] h-[2px] bg-white"
      />

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-end bg-[#000000] px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="mx-auto w-full max-w-[1500px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Label>
                DIGITAL TRANSFORMATION / ENTERPRISE TRANSFORMATION
              </Label>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12"
            >
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.25]">
                REIMAGINING THE INTELLIGENT ENTERPRISE
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-[1450px] text-[clamp(4.2rem,10vw,10.5rem)] font-semibold leading-[0.79] tracking-[-0.085em]"
            >
              Transform the
              <span className="block text-white/[0.38]">
                entire enterprise.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-16 grid gap-10 border-t border-white/[0.09] pt-8 lg:grid-cols-[0.65fr_1.35fr]"
            >
              <div>
                <p className="font-mono text-[7px] leading-6 tracking-[0.18em] text-white/[0.25]">
                  STRATEGY
                  <br />
                  PEOPLE
                  <br />
                  PROCESS
                  <br />
                  DATA
                  <br />
                  AI
                  <br />
                  TECHNOLOGY
                </p>
              </div>

              <div>
                <p className="max-w-[850px] text-[15px] leading-8 text-white/[0.56] md:text-[18px] md:leading-10">
                  Enterprise transformation connects business strategy,
                  operating models, people, processes, data and
                  technology into one coordinated system of change.
                  Artificial intelligence introduces a new layer of
                  capability — but sustainable transformation requires
                  redesigning the enterprise around it.
                </p>

                <motion.a
                  href="#enterprise"
                  whileHover={{ x: 6 }}
                  className="mt-10 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.35]"
                >
                  EXPLORE TRANSFORMATION
                  <ArrowDown size={11} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RUNNING TEXT
      ===================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...capabilities, ...capabilities].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center"
            >
              <span className="px-9 font-mono text-[7px] tracking-[0.2em] text-white/[0.32] md:px-14">
                {item}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/[0.25]" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          ENTERPRISE QUESTION
      ===================================================== */}

      <section
        id="enterprise"
        className="bg-black px-5 py-32 md:px-10 md:py-48"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.48fr_1.52fr]">
            <div>
              <Label number="01">THE ENTERPRISE QUESTION</Label>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                variants={fadeUp}
                className="max-w-[1050px] text-5xl font-semibold leading-[0.96] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
              >
                Technology changed.
                <span className="block text-white/[0.35]">
                  Has the enterprise?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-12 max-w-[850px] text-[16px] leading-9 text-white/[0.54] md:text-[18px] md:leading-10"
              >
                AI, cloud platforms, automation and modern data systems
                can fundamentally change how organizations operate.
                Their value is limited, however, when they are inserted
                into structures and processes designed for an earlier
                technology environment.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[850px] text-[13px] leading-8 text-white/[0.38] md:text-[14px]"
              >
                Enterprise transformation looks beyond individual
                technology deployments. It asks how strategy,
                organization, processes, information and technology
                should evolve together so the enterprise can operate
                differently.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* =====================================================
          LARGE STATEMENT
      ===================================================== */}

      <section className="bg-black px-5 py-32 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[1450px] text-[clamp(3.6rem,7.7vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.077em]"
          >
            AI transformation is
            <span className="text-white/[0.34]">
              {" "}
              not another technology program.
            </span>

            <span className="mt-4 block">
              It changes how the enterprise
              <span className="text-white/[0.34]">
                {" "}
                thinks, decides and operates.
              </span>
            </span>
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          SIX LAYERS
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_1.55fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Label number="02">TRANSFORMATION SYSTEM</Label>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                Six connected
                <span className="block text-white/[0.35]">
                  dimensions.
                </span>
              </h2>

              <p className="mt-8 max-w-[420px] text-[13px] leading-8 text-white/[0.38]">
                Enterprise transformation becomes stronger when these
                dimensions evolve as one system instead of separate
                initiatives.
              </p>
            </motion.div>

            <div>
              {transformationLayers.map((item, index) => (
                <motion.article
                  key={item.no}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    duration: 0.7,
                  }}
                  className="group border-t border-white/[0.08] py-10 md:py-12"
                >
                  <div className="grid gap-7 md:grid-cols-[70px_0.75fr_1.25fr]">
                    <motion.span
                      whileHover={{
                        x: 5,
                      }}
                      className="font-mono text-[7px] text-white/[0.28]"
                    >
                      {item.no}
                    </motion.span>

                    <div>
                      <p className="font-mono text-[6px] tracking-[0.22em] text-white/[0.26]">
                        {item.label}
                      </p>

                      <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[13px] leading-8 text-white/[0.43]">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING SYSTEM
      ===================================================== */}

      <section className="bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Label number="03">THE INTELLIGENT ENTERPRISE</Label>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
              <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">
                One enterprise.
                <span className="block text-white/[0.35]">
                  Multiple systems.
                </span>
              </h2>

              <p className="max-w-[550px] self-end text-[13px] leading-8 text-white/[0.42]">
                The intelligent enterprise coordinates human capability,
                digital platforms and machine intelligence instead of
                allowing each to operate independently.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid border-l border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {operatingSystem.map((item, index) => (
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.018)",
                }}
                className="min-h-[330px] border-b border-r border-white/[0.08] p-7 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] text-white/[0.25]">
                    {item.index}
                  </span>

                  <motion.span
                    animate={{
                      opacity: [0.15, 0.5, 0.15],
                    }}
                    transition={{
                      duration: 2.4,
                      delay: index * 0.2,
                      repeat: Infinity,
                    }}
                    className="h-[5px] w-[5px] rounded-full bg-white"
                  />
                </div>

                <h3 className="mt-28 text-3xl font-medium tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[360px] text-[12px] leading-7 text-white/[0.4]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FROM -> TO
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.45fr_1.55fr]">
            <div>
              <Label number="04">ENTERPRISE SHIFT</Label>

              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                From old
                <span className="block text-white/[0.35]">
                  to adaptive.
                </span>
              </h2>
            </div>

            <div>
              {shifts.map((item, index) => (
                <motion.div
                  key={item.from}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
                  }}
                  className="border-t border-white/[0.08] py-10"
                >
                  <div className="grid gap-7 md:grid-cols-[.8fr_70px_.8fr]">
                    <div>
                      <p className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                        FROM
                      </p>

                      <h3 className="mt-3 text-xl font-medium text-white/[0.38] md:text-2xl">
                        {item.from}
                      </h3>
                    </div>

                    <div className="flex items-center">
                      <motion.div
                        animate={{
                          x: [0, 7, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight
                          size={16}
                          className="text-white/[0.3]"
                        />
                      </motion.div>
                    </div>

                    <div>
                      <p className="font-mono text-[6px] tracking-[0.18em] text-white/[0.38]">
                        TO
                      </p>

                      <h3 className="mt-3 text-xl font-medium md:text-2xl">
                        {item.to}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 max-w-[750px] text-[12px] leading-7 text-white/[0.37] md:ml-[calc(40%+70px)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI IS NOT THE TRANSFORMATION
      ===================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.24em] text-white/[0.27]">
              05 / ARTIFICIAL INTELLIGENCE
            </p>

            <h2 className="mt-10 max-w-[1450px] text-[clamp(4rem,8vw,8.8rem)] font-semibold leading-[0.87] tracking-[-0.08em]">
              AI is not
              <span className="text-white/[0.34]">
                {" "}
                the transformation.
              </span>

              <span className="block pt-5">
                AI changes
                <span className="text-white/[0.34]">
                  {" "}
                  what transformation can become.
                </span>
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-9 md:grid-cols-[.65fr_1.35fr]">
              <p className="font-mono text-[7px] tracking-[0.18em] text-white/[0.2]">
                ENTERPRISE AI
              </p>

              <div className="max-w-[820px]">
                <p className="text-[15px] leading-9 text-white/[0.5]">
                  AI creates new possibilities for how knowledge is
                  accessed, how decisions are supported, how processes
                  operate and how customers interact with organizations.
                  Capturing that potential requires more than deploying
                  models.
                </p>

                <p className="mt-7 text-[13px] leading-8 text-white/[0.36]">
                  Enterprises need trusted information, modern
                  technology foundations, clear accountability,
                  redesigned workflows and people prepared to work with
                  intelligent systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_1.55fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <Label number="06">TRANSFORMATION JOURNEY</Label>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl">
                Change with
                <span className="block text-white/[0.35]">
                  direction.
                </span>
              </h2>

              <p className="mt-8 max-w-[410px] text-[13px] leading-8 text-white/[0.38]">
                Enterprise transformation needs a direction and
                sequencing model while remaining flexible enough to
                respond to new information and emerging AI capability.
              </p>
            </motion.div>

            <div>
              {journey.map((item, index) => (
                <motion.article
                  key={item.number}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.75,
                  }}
                  className="min-h-[350px] border-t border-white/[0.08] py-12 md:min-h-[390px]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[7px] text-white/[0.25]">
                      {item.number}
                    </span>

                    <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                      {item.phase}
                    </span>
                  </div>

                  <div className="mt-24 grid gap-8 md:grid-cols-[.9fr_1.1fr]">
                    <h3 className="max-w-[460px] text-3xl font-medium leading-[1.08] tracking-[-0.045em] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="max-w-[560px] text-[13px] leading-8 text-white/[0.42]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <Label number="07">TRANSFORMATION PRINCIPLES</Label>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-[850px] text-5xl font-semibold leading-[0.97] tracking-[-0.06em] md:text-7xl"
          >
            Build an enterprise
            <span className="block text-white/[0.35]">
              designed to evolve.
            </span>
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: (index % 2) * 0.08,
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.015)",
                }}
                className="border-t border-white/[0.08] p-7 md:min-h-[270px] md:p-9"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    0{index + 1}
                  </span>

                  <ChevronRight
                    size={13}
                    className="text-white/[0.16]"
                  />
                </div>

                <h3 className="mt-16 text-2xl font-medium tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[550px] text-[12px] leading-7 text-white/[0.39]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT CHANGES
      ===================================================== */}

      <section className="bg-black px-5 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <Label number="08">WHAT CHANGES</Label>
            </div>

            <div>
              {[
                "HOW LEADERS MAKE DECISIONS",
                "HOW TEAMS ACCESS KNOWLEDGE",
                "HOW PROCESSES ARE EXECUTED",
                "HOW DATA MOVES THROUGH THE BUSINESS",
                "HOW SOFTWARE PARTICIPATES IN WORK",
                "HOW AI INTERACTS WITH PEOPLE",
                "HOW TECHNOLOGY CAPABILITIES ARE GOVERNED",
                "HOW THE ENTERPRISE RESPONDS TO CHANGE",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="group flex items-center justify-between border-t border-white/[0.08] py-7"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[6px] text-white/[0.2]">
                      0{index + 1}
                    </span>

                    <h3 className="text-[15px] font-medium tracking-[-0.02em] text-white/[0.62] transition-colors group-hover:text-white md:text-xl">
                      {item}
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <ArrowRight
                      size={13}
                      className="text-white/[0.18]"
                    />
                  </motion.div>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          END STATEMENT
      ===================================================== */}

      <section className="border-t border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
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
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <Label number="09">THE ADAPTIVE ENTERPRISE</Label>

            <h2 className="mt-12 max-w-[1450px] text-[clamp(4rem,8.8vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.082em]">
              Transform once?
              <span className="block text-white/[0.32]">
                No.
              </span>

              <span className="mt-5 block">
                Build the ability
                <span className="text-white/[0.34]">
                  {" "}
                  to keep transforming.
                </span>
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-9 lg:grid-cols-[.55fr_1.45fr]">
              <p className="font-mono text-[7px] leading-6 tracking-[0.2em] text-white/[0.22]">
                ENTERPRISE
                <br />
                TRANSFORMATION
              </p>

              <div>
                <p className="max-w-[850px] text-[15px] leading-9 text-white/[0.5]">
                  The long-term objective of transformation is not a
                  fixed destination. It is an enterprise capable of
                  continuously adapting its strategy, processes,
                  technology and workforce as markets and intelligent
                  technologies evolve.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
                  {[
                    "ADAPT",
                    "LEARN",
                    "MODERNIZE",
                    "CONNECT",
                    "AUTOMATE",
                    "GOVERN",
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
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -3,
                        color: "#ffffff",
                      }}
                      className="font-mono text-[6px] tracking-[0.2em] text-white/[0.25]"
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