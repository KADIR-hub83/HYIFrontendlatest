"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CircleGauge,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers3,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    Icon: Cpu,
    title: "Accelerated Compute",
    description:
      "Design AI compute environments around GPUs and other accelerators for training, inference and computationally intensive machine-learning workloads.",
  },
  {
    Icon: Server,
    title: "Elastic Compute",
    description:
      "Create infrastructure that can expand and contract with changing application and AI workload demand without locking every workload into fixed capacity.",
  },
  {
    Icon: BrainCircuit,
    title: "AI Workload Infrastructure",
    description:
      "Align compute architecture with the distinct requirements of foundation models, inference services, fine-tuning pipelines and enterprise AI applications.",
  },
  {
    Icon: Network,
    title: "High-Speed Networking",
    description:
      "Connect distributed compute, storage and application services through networking designed for high-throughput and latency-sensitive AI workloads.",
  },
  {
    Icon: Database,
    title: "Compute + Data",
    description:
      "Bring processing capacity closer to the information AI systems need, reducing unnecessary movement across distributed infrastructure layers.",
  },
  {
    Icon: Gauge,
    title: "Performance Engineering",
    description:
      "Observe utilization, throughput and infrastructure behavior so compute resources can remain aligned with real production requirements.",
  },
];

const architectureLayers = [
  {
    title: "Applications & AI Services",
    description:
      "Agents · APIs · inference · enterprise applications",
    Icon: BrainCircuit,
  },
  {
    title: "Workload Orchestration",
    description:
      "Scheduling · scaling · placement · lifecycle",
    Icon: Workflow,
  },
  {
    title: "GPU & Compute Fabric",
    description:
      "Accelerators · CPU · memory · high-speed network",
    Icon: Cpu,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Regions · networking · storage · security",
    Icon: Cloud,
  },
];

const workloads = [
  {
    Icon: BrainCircuit,
    title: "LLM Inference",
    description:
      "Responsive compute environments for production model serving and AI application traffic.",
  },
  {
    Icon: Cpu,
    title: "Model Training",
    description:
      "High-performance accelerator infrastructure for computationally intensive model workloads.",
  },
  {
    Icon: Database,
    title: "RAG Systems",
    description:
      "Compute architecture connected with retrieval, vector search and enterprise data services.",
  },
  {
    Icon: Sparkles,
    title: "Fine-Tuning",
    description:
      "Flexible compute environments for adapting models to specialized enterprise requirements.",
  },
  {
    Icon: Zap,
    title: "AI APIs",
    description:
      "Low-latency compute infrastructure for intelligent APIs and real-time application experiences.",
  },
  {
    Icon: Boxes,
    title: "Distributed AI",
    description:
      "Infrastructure patterns for applications operating across multiple compute and data services.",
  },
];

const principles = [
  {
    Icon: Gauge,
    title: "Performance by design",
    description:
      "Compute architecture should begin with workload behavior, latency expectations and throughput requirements rather than generic infrastructure templates.",
  },
  {
    Icon: Layers3,
    title: "Right resource, right workload",
    description:
      "Different workloads require different combinations of CPU, GPU, memory, storage and networking. Infrastructure should reflect those differences.",
  },
  {
    Icon: RefreshCw,
    title: "Elastic where it matters",
    description:
      "Capacity should be able to respond to changing demand while maintaining predictable operational boundaries for critical AI services.",
  },
  {
    Icon: ShieldCheck,
    title: "Control at every layer",
    description:
      "Identity, network boundaries, workload isolation and operational governance should remain part of the compute architecture from the beginning.",
  },
];

/* =========================================================
   BACKGROUND COMPONENT
========================================================= */

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

/* =========================================================
   BUILDING HELPERS
========================================================= */

function Rack({
  delay = 0,
  label,
}: {
  delay?: number;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="relative h-[128px] flex-1 overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#050505]"
    >
      <div className="absolute inset-x-2 top-2 flex items-center justify-between">
        <span className="font-mono text-[4px] tracking-[0.16em] text-white/20">
          {label}
        </span>

        <motion.span
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay,
          }}
          className="h-1 w-1 rounded-full bg-[#9c7cf1]"
        />
      </div>

      <div className="absolute inset-x-2 bottom-2 top-7 space-y-[5px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="relative h-[7px] overflow-hidden rounded-[2px] border border-white/[0.05] bg-white/[0.025]"
          >
            <motion.div
              animate={{
                width: ["15%", "82%", "38%", "68%", "15%"],
              }}
              transition={{
                duration: 3.5 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + index * 0.08,
              }}
              className="absolute bottom-0 left-0 top-0 bg-[#7046e6]/40"
            />

            <div className="absolute right-1 top-1/2 flex -translate-y-1/2 gap-[2px]">
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
                className="h-[2px] w-[2px] rounded-full bg-[#bca7f3]"
              />

              <span className="h-[2px] w-[2px] rounded-full bg-white/15" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

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
        y: [0, 280],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{ left }}
      className="absolute top-[120px] z-40 h-1.5 w-1.5 rounded-full bg-[#cdbdf8] shadow-[0_0_14px_#7046e6]"
    />
  );
}

/* =========================================================
   HERO COMPUTE BUILDING
========================================================= */

function ComputeInfrastructureBuilding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-5 h-[760px] w-full max-w-[1200px] overflow-hidden lg:overflow-visible"
    >
      {/* ground glow */}
      <div className="absolute bottom-[20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-[#7046e6]/30 blur-[90px]" />

      {/* atmospheric glow */}
      <div className="absolute left-1/2 top-[40%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[130px]" />

      {/* floor */}
      <div className="absolute bottom-[52px] left-1/2 h-[2px] w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* packets */}
      <DataPacket delay={0} left="27%" />
      <DataPacket delay={1.1} left="41%" />
      <DataPacket delay={2.1} left="59%" />
      <DataPacket delay={0.7} left="72%" />

      {/* side info left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[1%] top-[30%] z-40 hidden w-[175px] rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <Cpu size={14} className="text-[#b59af4]" />

          <div>
            <p className="text-[9px] text-white/70">
              GPU Fabric
            </p>
            <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
              ACTIVE
            </p>
          </div>
        </div>

        <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            animate={{ width: ["35%", "84%", "64%", "35%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="h-full bg-[#7046e6]"
          />
        </div>
      </motion.div>

      {/* side info right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
        }}
        className="absolute right-[1%] top-[42%] z-40 hidden w-[175px] rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <Network size={14} className="text-[#b59af4]" />

          <div>
            <p className="text-[9px] text-white/70">
              Network Fabric
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
              CONNECTED
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-end gap-1">
          {[34, 58, 42, 72, 48, 83, 62, 76].map(
            (height, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [
                    `${height * 0.45}%`,
                    `${height}%`,
                    `${height * 0.6}%`,
                  ],
                }}
                transition={{
                  duration: 2 + index * 0.15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-full rounded-t-sm bg-[#7046e6]/50"
                style={{ height: 30 }}
              />
            ),
          )}
        </div>
      </motion.div>

      {/* building */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-[54px] left-1/2 w-[92%] max-w-[750px] -translate-x-1/2"
      >
        {/* antenna */}
        <div className="relative mx-auto h-[75px] w-px bg-gradient-to-t from-[#7046e6] to-transparent">
          <motion.span
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
            className="absolute -left-[4px] top-0 h-[9px] w-[9px] rounded-full border border-[#bca7f3] bg-black shadow-[0_0_20px_#7046e6]"
          />
        </div>

        {/* roof */}
        <div className="relative mx-auto flex w-[78%] items-center justify-between rounded-t-[22px] border border-b-0 border-white/[0.09] bg-[#050505] px-5 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-dashed border-[#7046e6]/60"
            >
              <BrainCircuit
                size={13}
                className="text-[#c6b5f5]"
              />
            </motion.div>

            <div>
              <p className="font-mono text-[5px] tracking-[0.2em] text-[#9c7cf1]">
                AI COMPUTE CONTROL
              </p>

              <p className="mt-1 text-[7px] text-white/25">
                Workload orchestration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#bca7f3]"
            />

            <span className="font-mono text-[5px] text-white/25">
              ONLINE
            </span>
          </div>
        </div>

        {/* main building shell */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#7046e6]/20 bg-[#070509]/80 p-3 shadow-[0_0_80px_rgba(112,70,230,.15)] backdrop-blur-xl">
          {/* scanning line */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 z-40 h-px bg-[#7046e6]/70 shadow-[0_0_14px_#7046e6]"
          />

          {/* AI services */}
          <div className="relative mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BrainCircuit
                  size={12}
                  className="text-[#9c7cf1]"
                />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  AI SERVICES
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9c7cf1]">
                24 SERVICES
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {["LLM", "RAG", "API", "AGENT"].map(
                (item, index) => (
                  <motion.div
                    key={item}
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
                      delay: index * 0.4,
                    }}
                    className="rounded-[10px] border bg-black px-3 py-3 text-center"
                  >
                    <span className="font-mono text-[5px] tracking-[0.15em] text-white/35">
                      {item}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* orchestration */}
          <div className="relative mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Workflow
                  size={12}
                  className="text-[#9c7cf1]"
                />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  ORCHESTRATION
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9c7cf1]">
                AUTO SCALE
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: [0.25, 1, 0.4] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.13,
                  }}
                  className="h-5 rounded-[5px] border border-[#7046e6]/20 bg-[#7046e6]/10"
                />
              ))}
            </div>
          </div>

          {/* GPU racks */}
          <div className="relative mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu size={12} className="text-[#9c7cf1]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  GPU COMPUTE FABRIC
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9c7cf1]">
                ACCELERATED
              </span>
            </div>

            <div className="flex gap-2">
              <Rack delay={0.3} label="GPU-A" />
              <Rack delay={0.5} label="GPU-B" />
              <Rack delay={0.7} label="GPU-C" />
              <Rack delay={0.9} label="GPU-D" />
              <Rack delay={1.1} label="GPU-E" />
            </div>
          </div>

          {/* network + storage */}
          <div className="relative rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Network
                  size={12}
                  className="text-[#9c7cf1]"
                />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  NETWORK + STORAGE
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9c7cf1]">
                CONNECTED
              </span>
            </div>

            <div className="relative h-[65px] overflow-hidden rounded-[12px] border border-white/[0.05] bg-black">
              <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-[#7046e6]/30" />

              {["12%", "31%", "50%", "69%", "88%"].map(
                (left, index) => (
                  <motion.div
                    key={left}
                    animate={{
                      scale: [1, 1.4, 1],
                      boxShadow: [
                        "0 0 0px rgba(112,70,230,0)",
                        "0 0 15px rgba(112,70,230,.7)",
                        "0 0 0px rgba(112,70,230,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    style={{ left }}
                    className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-[4px] border border-[#7046e6]/60 bg-black"
                  />
                ),
              )}

              <motion.div
                animate={{ left: ["8%", "90%", "8%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#d3c5f7] shadow-[0_0_12px_#7046e6]"
              />
            </div>
          </div>
        </div>

        {/* foundation */}
        <div className="mx-auto h-[17px] w-[88%] rounded-b-[18px] border-x border-b border-[#7046e6]/20 bg-[#09060b]" />

        <div className="mx-auto mt-2 flex w-[75%] justify-between">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-[9px] w-[2px] bg-white/[0.07]"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ComputeSolutionsPage() {
  return (
    <main className="overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden px-5  pt-30 md:px-10 ">
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
              Compute built for
              <span className="block hyi-blue">
                intelligent systems.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Build high-performance cloud compute environments for
              modern AI workloads — from accelerated GPU
              infrastructure and distributed model training to
              low-latency inference and enterprise AI applications.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {[
                "GPU Compute",
                "AI Workloads",
                "Elastic Scale",
                "Inference",
                "High-Speed Network",
                "Performance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 font-mono hyi-p tracking-[0.17em] text-white/[0.4]"
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </motion.div>

          <ComputeInfrastructureBuilding />
        </div>
      </section>

      {/* =====================================================
          COMPUTE FOUNDATION
      ===================================================== */}
      <section
        id="compute-foundation"
        className="relative overflow-hidden  py-10"
      >


        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Infrastructure that
                <span className="block hyi-blue">
                  thinks at scale.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                AI infrastructure is fundamentally different from
                traditional application hosting. Models can demand
                specialized accelerators, large memory footprints,
                high-throughput data access and tightly connected
                compute resources.
              </p>

              <p className="mt-2 max-w-[590px] hyi-p">
                Compute architecture should therefore be designed
                around the behavior of the workloads it supports,
                rather than treating every application as an
                identical infrastructure problem.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  Icon: Cpu,
                  value: "GPU",
                  label: "ACCELERATION",
                  text: "Specialized compute for demanding AI workloads.",
                },
                {
                  Icon: Zap,
                  value: "LOW",
                  label: "LATENCY",
                  text: "Infrastructure paths designed for responsive AI services.",
                },
                {
                  Icon: Network,
                  value: "HIGH",
                  label: "BANDWIDTH",
                  text: "Fast communication across distributed compute resources.",
                },
                {
                  Icon: RefreshCw,
                  value: "ELASTIC",
                  label: "CAPACITY",
                  text: "Compute that can respond to changing workload demand.",
                },
              ].map(({ Icon, value, label, text }, index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className=" rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={16}
                        className="text-[#bba4f6]"
                      />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]/60">
                      {label}
                    </span>
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {value}
                  </h3>

                  <p className="mt-2 hyi-p">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}
      <section className="relative overflow-hidden ">


        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
              <h2 className="hyi-h1 hyi-white">
                From infrastructure to
                <span className="block hyi-blue">
                  intelligent applications.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              A modern AI compute platform connects physical and
              cloud infrastructure with accelerated compute,
              orchestration and application services.
            </p>
          </div>

          <div className="mx-auto mt-5 max-w-[1050px] space-y-3">
            {architectureLayers.map(
              ({ title, description, Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    x: index % 2 ? 25 : -25,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 5,
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className="grid items-center gap-5 rounded-[24px] border border-white/[0.07] bg-[#080609] p-5 md:grid-cols-[70px_1fr_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={16}
                      className="text-[#bba4f6]"
                    />
                  </div>

                  <h3 className="hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="hyi-p">{description}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Engineered around
              <span className="block hyi-blue">
                workload reality.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(
              ({ Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(112,70,230,.45)",
                  }}
                  className="group rounded-[29px] border border-white/[0.07] bg-[#080609] p-7"
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

                  <p className="mt-2 hyi-p">{description}</p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPUTE FABRIC
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Distributed compute.
                <span className="block hyi-blue">
                  One platform.
                </span>
              </h2>

              <p className="mt-2 max-w-[500px] hyi-p">
                AI compute is more than individual machines. The
                platform must coordinate accelerators, CPUs, memory,
                networking, storage and workload scheduling as a
                connected system.
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Accelerated compute pools",
                  "High-throughput networking",
                  "Shared data access",
                  "Workload scheduling",
                  "Elastic capacity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#9878ef]"
                    />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/[0.07] bg-white/[0.025] p-6 md:p-8"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-[#9c7cf1]">
                    DISTRIBUTED COMPUTE FABRIC
                  </p>

                  <p className="mt-2 text-[10px] text-white/30">
                    Logical infrastructure view
                  </p>
                </div>

                <Network
                  size={17}
                  className="text-[#9c7cf1]"
                />
              </div>

              <div className="relative mx-auto mt-8 h-[430px] max-w-[720px]">
                {/* connection lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-[65%] -translate-x-1/2 bg-[#7046e6]/25" />

                <div className="absolute left-1/2 top-1/2 h-[65%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#7046e6]/25" />

                <div className="absolute left-[25%] top-[25%] h-px w-[50%] rotate-45 bg-[#7046e6]/20" />

                <div className="absolute left-[25%] top-[75%] h-px w-[50%] -rotate-45 bg-[#7046e6]/20" />

                {/* center */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(112,70,230,.15)",
                      "0 0 45px rgba(112,70,230,.45)",
                      "0 0 10px rgba(112,70,230,.15)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 z-20 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#7046e6]/45 bg-black"
                >
                  <BrainCircuit
                    size={34}
                    strokeWidth={1.1}
                    className="text-[#cbbbf4]"
                  />
                </motion.div>

                {[
                  {
                    Icon: Cpu,
                    title: "GPU",
                    position: "left-[7%] top-[8%]",
                  },
                  {
                    Icon: Server,
                    title: "CPU",
                    position: "right-[7%] top-[8%]",
                  },
                  {
                    Icon: Database,
                    title: "DATA",
                    position: "left-[7%] bottom-[8%]",
                  },
                  {
                    Icon: Network,
                    title: "NETWORK",
                    position: "right-[7%] bottom-[8%]",
                  },
                ].map(({ Icon, title, position }, index) => (
                  <motion.div
                    key={title}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                    }}
                    className={`absolute ${position} z-20 flex h-[100px] w-[120px] flex-col items-center justify-center rounded-[22px] border border-white/[0.08] bg-black`}
                  >
                    <Icon
                      size={20}
                      className="text-[#9c7cf1]"
                    />

                    <span className="mt-3 font-mono text-[6px] tracking-[0.18em] text-white/35">
                      {title}
                    </span>
                  </motion.div>
                ))}

                {[0, 1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 7 + item,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7046e6]/15"
                  >
                    <span
                      className="absolute h-1.5 w-1.5 rounded-full bg-[#bca7f3] shadow-[0_0_10px_#7046e6]"
                      style={{
                        top: `${10 + item * 18}%`,
                        left: `${20 + item * 15}%`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKLOADS
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Compute for every stage
              <span className="block hyi-blue">
                of the AI lifecycle.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {workloads.map(
              ({ Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
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

                  <p className="mt-2 hyi-p">{description}</p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Compute is an
                <span className="block hyi-blue">
                  engineering decision.
                </span>
              </h2>

              <p className="mt-2 max-w-[470px] hyi-p">
                The largest machine is not automatically the best
                infrastructure choice. Strong compute architecture
                aligns resources with workload behavior and
                operational requirements.
              </p>
            </div>

            <div>
              {principles.map(
                ({ Icon, title, description }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={15}
                        className="text-[#b69df4]"
                      />
                    </div>

                    <div>
                      <h3 className="mt-2 hyi-h3 hyi-white">
                        {title}
                      </h3>
                    </div>

                    <p className="hyi-p">{description}</p>
                  </motion.div>
                ),
              )}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPUTE OPERATIONS
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Know what your
              <span className="block hyi-blue">
                infrastructure is doing.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[1100px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#080609]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div className="flex items-center gap-3">
                <CircleGauge
                  size={16}
                  className="text-[#9c7cf1]"
                />

                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-[#9c7cf1]">
                    COMPUTE OPERATIONS
                  </p>

                  <p className="mt-1 text-[9px] text-white/25">
                    Infrastructure telemetry
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#bca7f3]"
                />

                <span className="font-mono text-[5px] text-white/25">
                  LIVE
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-white/[0.06] md:grid-cols-4">
              {[
                {
                  label: "GPU UTILIZATION",
                  value: "76%",
                  Icon: Cpu,
                },
                {
                  label: "COMPUTE POOLS",
                  value: "08",
                  Icon: Server,
                },
                {
                  label: "WORKLOADS",
                  value: "42",
                  Icon: Workflow,
                },
                {
                  label: "FABRIC STATUS",
                  value: "OK",
                  Icon: Activity,
                },
              ].map(({ label, value, Icon }, index) => (
                <div
                  key={label}
                  className="bg-[#080609] p-7"
                >
                  <Icon
                    size={14}
                    className="text-[#9c7cf1]"
                  />

                  <p className="mt-4 font-mono text-[5px] tracking-[0.16em] text-white/25">
                    {label}
                  </p>

                  <p className="mt-3 text-3xl font-medium text-white/75">
                    {value}
                  </p>

                  <div className="mt-5 h-[2px] overflow-hidden bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${55 + index * 10}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-[#7046e6]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}