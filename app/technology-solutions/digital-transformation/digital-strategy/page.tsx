"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Radar,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    Icon: BrainCircuit,
    number: "01",
    label: "AI STRATEGY",
    title: "Enterprise AI Direction",
    description:
      "Define where artificial intelligence creates meaningful business value, which capabilities should be prioritized, and how AI initiatives connect with the broader digital transformation roadmap.",
  },
  {
    Icon: Layers3,
    number: "02",
    label: "ARCHITECTURE",
    title: "Digital Architecture",
    description:
      "Design a connected technology foundation spanning applications, data, cloud platforms, integration services and intelligent systems instead of creating isolated technology investments.",
  },
  {
    Icon: Database,
    number: "03",
    label: "DATA",
    title: "Data Intelligence",
    description:
      "Create trusted and accessible data foundations that can support analytics, automation, machine learning and generative AI applications across the enterprise.",
  },
  {
    Icon: Cloud,
    number: "04",
    label: "CLOUD",
    title: "Cloud Transformation",
    description:
      "Align cloud platforms, infrastructure and operating models with application modernization, AI workloads, scalability requirements and long-term technology strategy.",
  },
  {
    Icon: Workflow,
    number: "05",
    label: "AUTOMATION",
    title: "Intelligent Operations",
    description:
      "Identify processes where software, workflow automation and AI can reduce repetitive work while creating faster and more observable digital operations.",
  },
  {
    Icon: ShieldCheck,
    number: "06",
    label: "GOVERNANCE",
    title: "Digital Governance",
    description:
      "Establish architectural standards, security controls, ownership models and governance mechanisms that allow transformation programs to scale responsibly.",
  },
];

const transformationLayers = [
  {
    Icon: Globe2,
    floor: "06",
    label: "DIGITAL EXPERIENCE",
    title: "Customer & Employee Experiences",
    tags: ["WEB", "MOBILE", "PORTALS", "COPILOTS"],
  },
  {
    Icon: Sparkles,
    floor: "05",
    label: "AI APPLICATIONS",
    title: "Intelligent Applications",
    tags: ["AGENTS", "GEN AI", "RAG", "AUTOMATION"],
  },
  {
    Icon: BrainCircuit,
    floor: "04",
    label: "INTELLIGENCE",
    title: "Models & Decision Systems",
    tags: ["LLM", "ML", "VISION", "PREDICTION"],
  },
  {
    Icon: Database,
    floor: "03",
    label: "DATA PLATFORM",
    title: "Enterprise Data Foundation",
    tags: ["LAKE", "VECTOR", "STREAM", "ANALYTICS"],
  },
  {
    Icon: Cloud,
    floor: "02",
    label: "CLOUD PLATFORM",
    title: "Compute & Infrastructure",
    tags: ["CLOUD", "GPU", "API", "CONTAINERS"],
  },
  {
    Icon: ShieldCheck,
    floor: "01",
    label: "DIGITAL GOVERNANCE",
    title: "Security & Control",
    tags: ["IAM", "POLICY", "RISK", "OBSERVE"],
  },
];

const roadmap = [
  {
    step: "01",
    Icon: Radar,
    label: "DISCOVER",
    title: "Understand",
    description:
      "Map the current technology estate, business priorities, data maturity, operational constraints and transformation opportunities.",
  },
  {
    step: "02",
    Icon: BrainCircuit,
    label: "DEFINE",
    title: "Strategize",
    description:
      "Translate business objectives into digital, data, cloud and AI priorities with clear architectural principles and investment themes.",
  },
  {
    step: "03",
    Icon: Layers3,
    label: "DESIGN",
    title: "Architect",
    description:
      "Create the target digital architecture and define how applications, platforms, data and AI capabilities should interact.",
  },
  {
    step: "04",
    Icon: Rocket,
    label: "EXECUTE",
    title: "Transform",
    description:
      "Deliver transformation through sequenced initiatives, platform modernization, AI adoption and measurable operational changes.",
  },
  {
    step: "05",
    Icon: Activity,
    label: "OPERATE",
    title: "Measure",
    description:
      "Observe adoption, system performance, delivery effectiveness and business outcomes to guide the next transformation cycle.",
  },
];

const principles = [
  {
    Icon: BrainCircuit,
    number: "01",
    title: "AI with a business purpose",
    text:
      "AI adoption should begin with a defined business problem, workflow or experience rather than introducing technology without a clear operational role.",
  },
  {
    Icon: Database,
    number: "02",
    title: "Data before intelligence",
    text:
      "Reliable intelligent systems depend on accessible, governed and context-rich data foundations. AI strategy and data strategy should therefore evolve together.",
  },
  {
    Icon: Layers3,
    number: "03",
    title: "Platforms over isolated projects",
    text:
      "Reusable digital capabilities can reduce duplication and make future products, applications and AI initiatives easier to deliver across the organization.",
  },
  {
    Icon: ShieldCheck,
    number: "04",
    title: "Governance by architecture",
    text:
      "Security, access control, observability and operational responsibility should be embedded into digital platforms rather than added after deployment.",
  },
];

const outcomes = [
  {
    Icon: Rocket,
    title: "Faster Digital Delivery",
    text:
      "A clearer technology direction helps teams coordinate modernization and reduce fragmented transformation work.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-Ready Enterprise",
    text:
      "Data, applications and cloud platforms evolve toward foundations capable of supporting intelligent applications.",
  },
  {
    Icon: Network,
    title: "Connected Technology",
    text:
      "Applications, platforms and information flows are designed as parts of one digital system rather than independent silos.",
  },
  {
    Icon: Activity,
    title: "Observable Operations",
    text:
      "Transformation becomes easier to manage when technology health, adoption and operational signals remain visible.",
  },
];

/* =========================================================
   STATUS LIGHT
========================================================= */

function StatusLight({
  delay = 0,
  size = "h-1.5 w-1.5",
}: {
  delay?: number;
  size?: string;
}) {
  return (
    <motion.span
      animate={{
        opacity: [0.25, 1, 0.25],
        scale: [0.8, 1.25, 0.8],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        delay,
      }}
      className={`${size} rounded-full bg-[#7046e6] shadow-[0_0_14px_rgba(112,70,230,.8)]`}
    />
  );
}

/* =========================================================
   DATA PACKET
========================================================= */

function DataPacket({
  delay,
  left,
}: {
  delay: number;
  left: string;
}) {
  return (
    <motion.div
      animate={{
        top: ["5%", "94%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{ left }}
      className="absolute z-50 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_#7046e6]"
    />
  );
}

/* =========================================================
   MINI SERVER
========================================================= */

function MiniServer({
  delay,
  label,
}: {
  delay: number;
  label: string;
}) {
  return (
    <motion.div
      animate={{
        borderColor: [
          "rgba(255,255,255,.06)",
          "rgba(112,70,230,.35)",
          "rgba(255,255,255,.06)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      className="rounded-[8px] border bg-black p-2"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[4px] text-white/25">
          {label}
        </span>

        <StatusLight delay={delay} size="h-1 w-1" />
      </div>

      <div className="mt-2 space-y-[3px]">
        {[35, 72, 49].map((width, i) => (
          <div
            key={i}
            className="h-[3px] overflow-hidden rounded-full bg-white/[0.05]"
          >
            <motion.div
              animate={{
                width: [
                  `${Math.max(15, width - 20)}%`,
                  `${width}%`,
                  `${Math.max(20, width - 10)}%`,
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: delay + i * 0.15,
              }}
              className="h-full bg-[#7046e6]/60"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   AI ENTERPRISE BUILDING MODEL
========================================================= */

function AIEnterpriseBuilding() {
  return (
    <div className="relative mx-auto  h-[820px] max-w-[1180px]">
      {/* vertical traffic */}

      <DataPacket delay={0} left="38%" />
      <DataPacket delay={1.3} left="50%" />
      <DataPacket delay={2.6} left="62%" />

      {/* LEFT CARD */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-0 top-[34%] z-50 hidden w-[190px] rounded-[20px] border border-white/[0.08] bg-black p-5 xl:block"
      >
        <div className="flex items-center justify-between">
          <BrainCircuit size={15} className="text-white/70" />

          <StatusLight />
        </div>

        <p className="mt-8 font-mono text-[5px] tracking-[0.2em] text-white/25">
          AI ADOPTION
        </p>

        <p className="mt-2 text-xl font-medium text-white/80">
          Active
        </p>

        <div className="mt-5 h-[2px] overflow-hidden bg-white/[0.06]">
          <motion.div
            animate={{
              width: ["20%", "82%", "55%", "20%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="h-full bg-[#7046e6]"
          />
        </div>
      </motion.div>

      {/* RIGHT CARD */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
        }}
        className="absolute right-0 top-[45%] z-50 hidden w-[190px] rounded-[20px] border border-white/[0.08] bg-black p-5 xl:block"
      >
        <div className="flex items-center justify-between">
          <Activity size={15} className="text-white/70" />

          <span className="font-mono text-[5px] text-white/25">
            LIVE
          </span>
        </div>

        <div className="mt-8 flex h-[48px] items-end gap-1">
          {[22, 50, 34, 76, 47, 84, 58, 70, 42, 91].map(
            (height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    `${Math.max(15, height - 25)}%`,
                    `${height}%`,
                    `${Math.max(20, height - 12)}%`,
                  ],
                }}
                transition={{
                  duration: 1.8 + i * 0.08,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex-1 rounded-t-sm bg-white/20"
              />
            ),
          )}
        </div>

        <p className="mt-5 font-mono text-[5px] tracking-[0.17em] text-white/20">
          DIGITAL OPERATIONS
        </p>
      </motion.div>

      {/* BUILDING */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-[35px] left-1/2 w-[94%] max-w-[760px] -translate-x-1/2"
      >
        {/* ANTENNA */}

        <div className="relative mx-auto h-[70px] w-px bg-gradient-to-t from-white/30 to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -left-[5px] top-0 h-[11px] w-[11px] rounded-full border border-[#7046e6] bg-black shadow-[0_0_20px_#7046e6]"
          />
        </div>

        {/* TOP AI CORE */}

        <div className="mx-auto flex w-[80%] items-center justify-between rounded-t-[25px] border border-b-0 border-white/[0.1] bg-[#030303] px-5 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-[#7046e6]/70"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[6px] rounded-full border border-dotted border-white/20"
              />

              <BrainCircuit
                size={15}
                className="relative text-white/80"
              />
            </div>

            <div>
              <p className="font-mono text-[5px] tracking-[0.2em] text-white/30">
                ENTERPRISE INTELLIGENCE CORE
              </p>

              <p className="mt-1 font-mono text-[5px] text-[#9675ed]">
                AI STRATEGY ACTIVE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <StatusLight />

            <span className="font-mono text-[5px] text-white/25">
              ONLINE
            </span>
          </div>
        </div>

        {/* BUILDING BODY */}

        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#020202] p-3 shadow-[0_30px_100px_rgba(0,0,0,.8)]">
          {/* scanner */}

          <motion.div
            animate={{
              top: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 z-40 h-px bg-[#7046e6]/70 shadow-[0_0_15px_#7046e6]"
          />

          {transformationLayers.map(
            (
              {
                Icon,
                floor,
                label,
                title,
                tags,
              },
              floorIndex,
            ) => (
              <motion.div
                key={floor}
                initial={{
                  opacity: 0,
                  x: floorIndex % 2 === 0 ? -25 : 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5 + floorIndex * 0.12,
                }}
                className="mb-2 last:mb-0 rounded-[18px] border border-white/[0.065] bg-[#050505] p-4"
              >
                <div className="grid items-center gap-4 md:grid-cols-[40px_1fr_1.25fr_55px]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-black">
                    <Icon
                      size={13}
                      className="text-white/65"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[4px] tracking-[0.18em] text-[#9675ed]">
                      FLOOR {floor} / {label}
                    </p>

                    <p className="mt-1 text-[9px] text-white/60">
                      {title}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {tags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        animate={{
                          borderColor: [
                            "rgba(255,255,255,.05)",
                            "rgba(112,70,230,.28)",
                            "rgba(255,255,255,.05)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay:
                            floorIndex * 0.2 +
                            index * 0.2,
                        }}
                        className="rounded-[6px] border bg-black px-1 py-2 text-center"
                      >
                        <span className="font-mono text-[3.5px] tracking-[0.1em] text-white/25">
                          {tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <StatusLight
                      delay={floorIndex * 0.2}
                    />

                    <span className="font-mono text-[4px] text-white/20">
                      LIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* BASE */}

        <div className="mx-auto h-[18px] w-[88%] rounded-b-[18px] border-x border-b border-white/[0.08] bg-[#050505]" />

        <div className="mx-auto h-[10px] w-[70%] rounded-b-xl border-x border-b border-white/[0.05] bg-[#020202]" />
      </motion.div>
    </div>
  );
}

/* =========================================================
   STRATEGY ORBIT
========================================================= */

function StrategyOrbit() {
  const nodes = [
    {
      Icon: BrainCircuit,
      label: "AI",
      position: "left-[47%] top-[4%]",
    },
    {
      Icon: Cloud,
      label: "CLOUD",
      position: "right-[5%] top-[43%]",
    },
    {
      Icon: Database,
      label: "DATA",
      position: "bottom-[3%] left-[46%]",
    },
    {
      Icon: Code2,
      label: "APPS",
      position: "left-[3%] top-[43%]",
    },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {[100, 78, 55].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 25 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${size}%`,
            height: `${size}%`,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
        />
      ))}

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(112,70,230,.05)",
            "0 0 55px rgba(112,70,230,.25)",
            "0 0 20px rgba(112,70,230,.05)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#7046e6]/30 bg-black"
      >
        <BrainCircuit
          size={27}
          strokeWidth={1.2}
          className="text-white/80"
        />

        <p className="mt-4 font-mono text-[5px] tracking-[0.2em] text-white/30">
          DIGITAL
        </p>

        <p className="font-mono text-[5px] tracking-[0.2em] text-[#9675ed]">
          STRATEGY
        </p>
      </motion.div>

      {nodes.map(({ Icon, label, position }, index) => (
        <motion.div
          key={label}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className={`absolute ${position} flex h-[62px] w-[62px] flex-col items-center justify-center rounded-[17px] border border-white/[0.09] bg-black`}
        >
          <Icon size={14} className="text-white/65" />

          <span className="mt-2 font-mono text-[4px] tracking-[0.14em] text-white/25">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function DigitalStrategyPage() {
  return (
    <main className="overflow-hidden bg-[#000000]  text-white selection:bg-[#7046e6] selection:hyi-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#000000] px-5  md:px-10 pt-30 max-w-[1350px] mx-auto">
        {/* grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,black,transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom,black,transparent 85%)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="mx-auto max-w-[1250px] text-center"
          >
        

            <h1 className="hyi-h1 hyi-white">
              Rebuild the enterprise
              <span className="block hyi-blue">
                around intelligence.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[900px] hyi-p">
              Create a digital strategy that connects business
              transformation with applications, data, cloud
              infrastructure, automation and artificial intelligence
              as one enterprise technology system.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                "AI Strategy",
                "Digital Architecture",
                "Data",
                "Cloud",
                "Automation",
                "Governance",
              ].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(112,70,230,.5)",
                  }}
                  className="rounded-full border border-white/[0.08] bg-black px-4 py-2.5 font-mono hyi-p tracking-[0.16em] text-white/[0.35]"
                >
                  {item.toUpperCase()}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <AIEnterpriseBuilding />

     
        </div>
      </section>

      {/* =====================================================
          STRATEGY
      ===================================================== */}

      <section
        id="strategy"
        className=" bg-black py-10 max-w-[1350px] mx-auto"
      >
        <div className="mx-auto grid max-w-[1500px] items-center gap-20 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
         

            <h2 className="hyi-h1 hyi-white">
              Technology follows
              <span className="block hyi-blue">
                direction.
              </span>
            </h2>

            <p className="mt-2 max-w-[620px] hyi-p">
              Digital transformation becomes difficult when cloud,
              applications, data and AI evolve as independent
              initiatives. Digital strategy creates a common direction
              for how these capabilities should support the
              organization.
            </p>

            <p className="mt-2 max-w-[620px] hyi-p">
              The goal is not simply to adopt more technology. It is to
              create an enterprise architecture capable of adapting as
              products, customer expectations, operating models and AI
              capabilities continue to evolve.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                ["BUSINESS", "Value"],
                ["TECHNOLOGY", "Architecture"],
                ["DATA", "Intelligence"],
                ["OPERATIONS", "Execution"],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[18px] border border-white/[0.07] bg-[#030303] p-5"
                >
                  <p className="font-mono hyi-p racking-[0.18em] text-white/20">
                    {label}
                  </p>

                  <p className="mt-1 hyi-h3">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <StrategyOrbit />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="bg-black py-10">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="max-w-[1100px text-center mx-auto">
        

            <h2 className="hyi-h1 hyi-white">
              Strategy across the
              <span className="block hyi-blue">
                digital enterprise.
              </span>
            </h2>

            <p className="mt-2 max-w-[760px] mx-auto hyi-p">
              Transformation requires more than a single platform or
              application. The strategy should define how major
              technology capabilities work together and where shared
              foundations can accelerate future delivery.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(
              (
                {
                  Icon,
                  number,
                  label,
                  title,
                  description,
                },
                index,
              ) => (
                <motion.article
                  key={title}
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
                    y: -8,
                    borderColor: "rgba(112,70,230,.38)",
                  }}
                  className="group  rounded-[30px] border border-white/[0.07] bg-[#030303] p-7"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/[0.09] bg-black"
                    >
                      <Icon
                        size={17}
                        className="text-white/70"
                      />
                    </motion.div>

          
                  </div>

                  <p className="mt-2 hyi-p hyi-blue ">
                    {label}
                  </p>

                  <h3 className="mt-2  hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI OPERATING SYSTEM
      ===================================================== */}

      <section className=" bg-black ">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1050px] text-center">
            

            <h2 className="hyi-h1 hyi-white">
              AI becomes part of the
              <span className="block hyi-blue">
                operating system.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[800px] hyi-p">
              Instead of treating artificial intelligence as an
              isolated innovation program, digital strategy can
              position AI as a reusable capability across products,
              workflows, analytics and enterprise operations.
            </p>
          </div>

          <div className="mx-auto mt-5 max-w-[1150px] rounded-[34px] border border-white/[0.08] bg-[#020202] p-5 md:p-8">
            <div className="grid gap-3 lg:grid-cols-5">
              {[
                {
                  Icon: Globe2,
                  number: "01",
                  label: "EXPERIENCE",
                  title: "Digital Channels",
                },
                {
                  Icon: Workflow,
                  number: "02",
                  label: "WORKFLOW",
                  title: "Automation",
                },
                {
                  Icon: BrainCircuit,
                  number: "03",
                  label: "INTELLIGENCE",
                  title: "Enterprise AI",
                },
                {
                  Icon: Database,
                  number: "04",
                  label: "KNOWLEDGE",
                  title: "Data Platform",
                },
                {
                  Icon: Cloud,
                  number: "05",
                  label: "FOUNDATION",
                  title: "Cloud Platform",
                },
              ].map(
                (
                  {
                    Icon,
                    number,
                    label,
                    title,
                  },
                  index,
                ) => (
                  <motion.div
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
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="relative  rounded-[22px] border border-white/[0.07] bg-black p-5"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={19}
                        className="text-white/65"
                      />

                 
                    </div>

                    <div className="mt-2">
                      <p className="hyi-p hyi-blue">
                        {label}
                      </p>

                      <h3 className="mt-1 hyi-h3 hyi-white">
                        {title}
                      </h3>
                    </div>

                    {index < 4 && (
                      <motion.div
                        animate={{
                          x: [0, 7, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute -right-[10px] top-1/2 z-30 hidden lg:block"
                      >
                        <ArrowRight
                          size={12}
                          className="text-[#7046e6]"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ),
              )}
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {[
                {
                  Icon: ShieldCheck,
                  label: "GOVERNANCE",
                  text: "Security · risk · policy",
                },
                {
                  Icon: Activity,
                  label: "OBSERVABILITY",
                  text: "Metrics · signals · health",
                },
                {
                  Icon: RefreshCw,
                  label: "OPERATIONS",
                  text: "Deploy · operate · improve",
                },
              ].map(({ Icon, label, text }) => (
                <motion.div
                  key={label}
                  whileHover={{
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className="flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-black p-5"
                >
                  <Icon
                    size={14}
                    className="text-white/60"
                  />

                  <div>
                    <p className="hyi-p">
                      {label}
                    </p>

                    <p className="mt-1 hyi-h3">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ROADMAP
      ===================================================== */}

      <section className="bg-black py-10">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >
            

              <h2 className="hyi-h1 hyi-white">
                Strategy becomes
                <span className="block hyi-blue">
                  execution.
                </span>
              </h2>

              <p className="mt-2 max-w-[480px] hyi-p">
                A transformation roadmap converts strategic direction
                into an ordered sequence of decisions, platform
                changes and delivery initiatives.
              </p>

              <div className="mt-5 rounded-[22px] border border-white/[0.07] bg-[#030303] p-6">
                <div className="flex items-center gap-3">
                  <Terminal
                    size={19}
                    className="text-white/60"
                  />

                  <span className="hyi-p">
                    TRANSFORMATION ENGINE
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {[
                    "business priorities",
                    "technology architecture",
                    "data & AI foundations",
                    "delivery roadmap",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      animate={{
                        opacity: [0.25, 0.75, 0.25],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.45,
                      }}
                      className="flex items-center gap-3 font-mono hyi-h6"
                    >
                      <span className="text-[#9675ed]">
                        0{index + 1}
                      </span>

                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              {roadmap.map(
                (
                  {
                    Icon,
                    step,
                    label,
                    title,
                    description,
                  },
                  index,
                ) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="group grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[70px_0.55fr_1.2fr]"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/[0.09] bg-[#030303]"
                    >
                      <Icon
                        size={15}
                        className="text-white/65"
                      />
                    </motion.div>

                    <div>
               

                      <h3 className="mt-1 hyi-h3 hyi-white">
                        {title}
                      </h3>
                    </div>

                    <p className="hyi-p">
                      {description}
                    </p>
                  </motion.div>
                ),
              )}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIVE STRATEGY CONSOLE
      ===================================================== */}

      <section className=" bg-black ">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
      
            <h2 className="hyi-h1 hyi-white">
              See transformation
              <span className="block hyi-blue">
                as a system.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[1150px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#020202]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div className="flex items-center gap-3">
                <Gauge
                  size={15}
                  className="text-white/60"
                />

                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-white/35">
                    DIGITAL STRATEGY CONTROL PLANE
                  </p>

                  <p className="mt-1 text-[9px] text-white/20">
                    Illustrative transformation interface
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <StatusLight />

                <span className="font-mono text-[5px] text-white/25">
                  ACTIVE
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-white/[0.06] md:grid-cols-4">
              {[
                {
                  Icon: BrainCircuit,
                  label: "AI",
                  value: "ACTIVE",
                },
                {
                  Icon: Cloud,
                  label: "CLOUD",
                  value: "READY",
                },
                {
                  Icon: Database,
                  label: "DATA",
                  value: "SYNC",
                },
                {
                  Icon: ShieldCheck,
                  label: "CONTROL",
                  value: "ON",
                },
              ].map(
                ({ Icon, label, value }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{
                      backgroundColor:
                        "rgba(255,255,255,.015)",
                    }}
                    className="bg-[#020202] p-7"
                  >
                    <Icon
                      size={15}
                      className="text-white/60"
                    />

                    <p className="mt-12 font-mono text-[5px] tracking-[0.18em] text-white/20">
                      {label}
                    </p>

                    <p className="mt-3 text-xl font-medium text-white/70">
                      {value}
                    </p>

                    <div className="mt-5 h-[2px] overflow-hidden bg-white/[0.05]">
                      <motion.div
                        animate={{
                          width: [
                            `${35 + index * 8}%`,
                            `${75 + index * 4}%`,
                            `${45 + index * 6}%`,
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="h-full bg-[#7046e6]"
                      />
                    </div>
                  </motion.div>
                ),
              )}
            </div>

            <div className="grid gap-px border-t border-white/[0.06] bg-white/[0.06] md:grid-cols-[1.3fr_.7fr]">
              <div className="bg-black p-6">
                <div className="flex items-center gap-3">
                  <Activity
                    size={13}
                    className="text-white/55"
                  />

                  <span className="font-mono text-[5px] tracking-[0.18em] text-white/25">
                    ENTERPRISE SIGNAL STREAM
                  </span>
                </div>

                <div className="mt-7 flex h-[110px] items-end gap-1">
                  {[
                    25, 48, 37, 72, 43, 82, 55, 67, 91, 58,
                    76, 48, 85, 63, 92, 72, 56, 80, 61, 88,
                  ].map((height, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${Math.max(
                            12,
                            height - 30,
                          )}%`,
                          `${height}%`,
                          `${Math.max(
                            20,
                            height - 15,
                          )}%`,
                        ],
                      }}
                      transition={{
                        duration:
                          1.4 + index * 0.035,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="flex-1 rounded-t-[2px] bg-white/15"
                    />
                  ))}
                </div>
              </div>

              <div className="bg-black p-6">
                <p className="font-mono text-[5px] tracking-[0.18em] text-white/25">
                  SYSTEM STATUS
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "AI foundation",
                    "Data platform",
                    "Cloud layer",
                    "Governance",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[9px] text-white/35">
                        {item}
                      </span>

                      <StatusLight
                        delay={index * 0.35}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="bg-black py-10">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
           

              <h2 className="hyi-h1 hyi-white">
                Build foundations
                <span className="block hyi-blue">
                  that survive change.
                </span>
              </h2>

              <p className="mt-3 max-w-[480px] hyi-p">
                Technology products change quickly. Strong digital
                strategy therefore focuses on architectural principles
                and reusable capabilities that remain valuable as the
                technology landscape evolves.
              </p>
            </div>

            <div>
              {principles.map(
                (
                  {
                    Icon,
                    number,
                    title,
                    text,
                  },
                  index,
                ) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="grid gap-6 border-t border-white/[0.07] py-8 md:grid-cols-[70px_.75fr_1.25fr]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/[0.09] bg-[#030303]">
                      <Icon
                        size={15}
                        className="text-white/65"
                      />
                    </div>

                    <div>
                     

                      <h3 className="mt-1 hyi-h3 hyi-white ">
                        {title}
                      </h3>
                    </div>

                    <p className="hyi-p">
                      {text}
                    </p>
                  </motion.div>
                ),
              )}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className=" bg-black py-">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="max-w-[950px] text-center mx-auto">
      

            <h2 className="hyi-h1 hyi-white">
              A clearer path from
              <span className="block hyi-blue">
                technology to value.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(
              ({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                    borderColor:
                      "rgba(112,70,230,.35)",
                  }}
                  className="rounded-[28px] border border-white/[0.07] bg-[#030303] p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={17}
                      className="text-white/65"
                    />

                
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

  <Footer />
    </main>
  );
}