"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers3,
  Network,
  RefreshCw,
  Server,
  Settings2,
  Sparkles,
  TrendingDown,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const optimizationAreas = [
  {
    Icon: Cpu,
    title: "Compute Optimization",
    text: "Align CPU, GPU and accelerator capacity with actual AI workload demand so infrastructure can scale efficiently without unnecessary idle resources.",
  },
  {
    Icon: CircleDollarSign,
    title: "Cloud Cost Optimization",
    text: "Create visibility into infrastructure consumption and identify opportunities to improve the relationship between cloud spend, capacity and business value.",
  },
  {
    Icon: Gauge,
    title: "Performance Engineering",
    text: "Improve latency, throughput and resource utilization across inference services, data pipelines and distributed AI workloads.",
  },
  {
    Icon: Network,
    title: "Network Efficiency",
    text: "Design efficient communication paths between applications, AI services, storage systems and distributed compute environments.",
  },
  {
    Icon: Database,
    title: "Data Optimization",
    text: "Improve how AI platforms move, cache and access enterprise information across analytical, retrieval and model-serving workloads.",
  },
  {
    Icon: Workflow,
    title: "Operational Optimization",
    text: "Automate repeatable infrastructure decisions and give engineering teams clearer operational signals across the AI platform.",
  },
];

const flow = [
  {
    Icon: Activity,
    title: "Measure",
    text: "Collect infrastructure, workload, utilization and operational signals.",
  },
  {
    Icon: BrainCircuit,
    title: "Understand",
    text: "Identify capacity patterns, constraints and optimization opportunities.",
  },
  {
    Icon: Settings2,
    title: "Adjust",
    text: "Tune resources, workload placement and infrastructure configuration.",
  },
  {
    Icon: RefreshCw,
    title: "Improve",
    text: "Repeat the optimization cycle as workloads and demand evolve.",
  },
];

const workloadRows = [
  {
    name: "LLM Inference",
    type: "GPU",
    load: 74,
    status: "BALANCED",
  },
  {
    name: "RAG Pipeline",
    type: "DATA",
    load: 58,
    status: "OPTIMAL",
  },
  {
    name: "Model Serving",
    type: "GPU",
    load: 82,
    status: "SCALING",
  },
  {
    name: "Vector Search",
    type: "MEMORY",
    load: 63,
    status: "OPTIMAL",
  },
];

const principles = [
  {
    Icon: Activity,
    title: "Measure before optimizing",
    text: "Optimization decisions should begin with observable workload behavior rather than assumptions about how infrastructure is being consumed.",
  },
  {
    Icon: Layers3,
    title: "Optimize the system",
    text: "Compute, data, network and application architecture interact with each other. Local improvements should support the performance of the complete platform.",
  },
  {
    Icon: TrendingDown,
    title: "Cost follows architecture",
    text: "Sustainable cloud economics come from architecture, workload placement and operational discipline rather than isolated cost-cutting exercises.",
  },
  {
    Icon: RefreshCw,
    title: "Continuous improvement",
    text: "AI demand changes quickly, so infrastructure optimization should operate as an ongoing engineering discipline instead of a one-time project.",
  },
];

const useCases = [
  {
    Icon: BrainCircuit,
    title: "LLM inference optimization",
    text: "Balance compute capacity, model serving and application demand for responsive production AI experiences.",
  },
  {
    Icon: Cpu,
    title: "GPU utilization",
    text: "Improve workload placement and capacity planning across expensive accelerator infrastructure.",
  },
  {
    Icon: Database,
    title: "AI data pipelines",
    text: "Optimize data movement and processing across retrieval, analytics and machine-learning workflows.",
  },
  {
    Icon: Cloud,
    title: "Hybrid AI infrastructure",
    text: "Coordinate workloads across cloud and private infrastructure according to performance, control and economic requirements.",
  },
  {
    Icon: Zap,
    title: "Latency-sensitive AI",
    text: "Design infrastructure paths for applications where response time and predictable performance are critical.",
  },
  {
    Icon: CircleDollarSign,
    title: "AI cloud economics",
    text: "Connect infrastructure consumption with operational context so teams can understand where AI resources create value.",
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
   HERO LIVE MODEL
========================================================= */

function OptimizationInfrastructureModel() {
  const nodes = [
    {
      Icon: Cpu,
      label: "GPU CLUSTER",
      value: "74% LOAD",
      position: "left-[3%] top-[24%]",
    },
    {
      Icon: Database,
      label: "DATA LAYER",
      value: "OPTIMAL",
      position: "right-[3%] top-[24%]",
    },
    {
      Icon: Network,
      label: "NETWORK",
      value: "12ms",
      position: "left-[5%] bottom-[19%]",
    },
    {
      Icon: CircleDollarSign,
      label: "CLOUD COST",
      value: "OPTIMIZING",
      position: "right-[5%] bottom-[19%]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-5 h-[690px] w-full max-w-[1250px] overflow-hidden md:overflow-visible"
    >
      {/* atmospheric light */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[130px]" />

      <div className="absolute bottom-[20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-[#7046e6]/30 blur-[90px]" />

      {/* outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/15"
      >
        <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#d8caff] shadow-[0_0_25px_#7046e6]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"
      />

      {/* floating nodes */}
      {nodes.map(({ Icon, label, value, position }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${position} z-30 hidden min-w-[155px] rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl lg:block`}
        >
          <div className="flex items-center gap-3">
            <Icon size={14} className="text-[#b59af4]" />

            <div>
              <p className="text-[9px] text-white/70">
                {label}
              </p>
              <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
                {value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* core platform */}
      <div className="absolute left-1/2 top-1/2 z-20 w-[92%] max-w-[650px] -translate-x-1/2 -translate-y-1/2">
        {/* top AI core */}
        <div className="relative z-30 mx-auto mb-[-34px] flex h-[120px] w-[120px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-[36px] border border-dashed border-[#7046e6]/45"
          />

          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(112,70,230,.25)",
                "0 0 75px rgba(112,70,230,.55)",
                "0 0 20px rgba(112,70,230,.25)",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
            className="flex h-[82px] w-[82px] items-center justify-center rounded-[27px] border border-[#7046e6]/35 bg-[#0d0812]"
          >
            <BrainCircuit
              size={31}
              strokeWidth={1.25}
              className="text-[#d2c3f8]"
            />
          </motion.div>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/25 bg-[#070509]/80 p-3 shadow-[0_0_80px_rgba(112,70,230,.15)] backdrop-blur-xl">
          {/* scanning line */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 z-30 h-px bg-[#b99ff5] shadow-[0_0_20px_#7046e6]"
          />

          <div className="rounded-[27px] border border-white/[0.06] bg-[#030303]/90 p-5 md:p-6">
            {/* header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div>
                <p className="font-mono text-[6px] tracking-[0.2em] text-[#a98cf1]">
                  AI CLOUD OPTIMIZATION ENGINE
                </p>

                <p className="mt-2 text-[9px] text-white/35">
                  Continuous workload intelligence
                </p>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#b79cf6]"
                />

                <span className="font-mono text-[6px] text-white/30">
                  LIVE
                </span>
              </div>
            </div>

            {/* dashboard */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { label: "COMPUTE", value: "74%", Icon: Cpu },
                { label: "EFFICIENCY", value: "91%", Icon: Gauge },
                { label: "LATENCY", value: "12ms", Icon: Zap },
              ].map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-white/[0.06] bg-white/[0.02] p-3 md:p-4"
                >
                  <Icon size={12} className="text-[#9878ef]" />

                  <p className="mt-5 font-mono text-[5px] tracking-[0.15em] text-white/25">
                    {label}
                  </p>

                  <p className="mt-2 text-lg font-medium text-white/75">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* workloads */}
            <div className="mt-3 space-y-2">
              {workloadRows.map(
                ({ name, type, load, status }, index) => (
                  <motion.div
                    key={name}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -30 : 30,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.13,
                      duration: 0.65,
                    }}
                    className="rounded-[17px] border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                        <Server
                          size={12}
                          className="text-[#c8b5f8]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[11px] text-[#f2edff] md:text-[12px]">
                              {name}
                            </p>

                            <p className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/25">
                              {type}
                            </p>
                          </div>

                          <span className="font-mono text-[5px] tracking-[0.12em] text-[#a98cf1]">
                            {status}
                          </span>
                        </div>

                        <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${load}%` }}
                            transition={{
                              duration: 1.4,
                              delay: 1 + index * 0.15,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#390b44] to-[#9878ef]"
                          />
                        </div>
                      </div>

                      <span className="w-8 text-right font-mono text-[6px] text-white/30">
                        {load}%
                      </span>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* pulses */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{
            scale: [0.55, 1.45],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: ring * 1.35,
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/20"
        />
      ))}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AICloudOptimizationPage() {
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
              Make every resource
              <span className="block hyi-blue">
                work smarter.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Optimize AI cloud infrastructure across compute,
              accelerators, data, networking and operations to create
              a platform engineered for performance, efficiency and
              continuously changing workload demand.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {[
                "GPU Efficiency",
                "Performance",
                "FinOps",
                "Workload Placement",
                "Data",
                "Automation",
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

          <OptimizationInfrastructureModel />
        </div>
      </section>

      {/* =====================================================
          OPTIMIZATION FOUNDATION
      ===================================================== */}
      <section
        id="optimization"
        className="relative overflow-hidden  py-10"
      >
        <PurpleGlow className="-left-[400px] top-1/2 h-[800px] w-[800px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                AI infrastructure
                <span className="block hyi-blue">
                  never stands still.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                AI workloads can shift dramatically between
                experimentation, training, retrieval and production
                inference. Optimization creates an infrastructure
                layer capable of adapting to those changing demands.
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Right-sized compute resources",
                  "Efficient accelerator utilization",
                  "Performance-aware workload placement",
                  "Observable infrastructure consumption",
                  "Continuous optimization workflows",
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
            </motion.div>

            {/* utilization visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[36px] border border-white/[0.07] bg-white/[0.025] p-6 md:p-9"
            >
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[120px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                      RESOURCE INTELLIGENCE
                    </p>

                    <h3 className="mt-2 hyi-h3 hyi-white">
                      Infrastructure utilization
                    </h3>
                  </div>

                  <BarChart3
                    size={20}
                    className="text-[#9878ef]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { title: "GPU", value: "74%", Icon: Cpu },
                    { title: "CPU", value: "61%", Icon: Server },
                    { title: "Memory", value: "68%", Icon: Boxes },
                    { title: "Network", value: "57%", Icon: Network },
                  ].map(({ title, value, Icon }, index) => (
                    <motion.div
                      key={title}
                      whileHover={{ y: -5 }}
                      className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <Icon
                          size={14}
                          className="text-[#a98cf1]"
                        />

                        <span className="font-mono text-[6px] text-white/25">
                          LIVE
                        </span>
                      </div>

                      <p className="mt-4 hyi-p">{title}</p>

                      <p className="mt-2 text-3xl font-medium text-white/80">
                        {value}
                      </p>

                      <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: value }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.3,
                            delay: index * 0.1,
                          }}
                          className="h-full rounded-full bg-[#7046e6]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 rounded-[23px] border border-[#7046e6]/20 bg-[#7046e6]/[0.06] p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={15}
                      className="text-[#bca7f3]"
                    />

                    <div>
                      <p className="font-mono text-[6px] tracking-[0.17em] text-[#a98cf1]">
                        OPTIMIZATION ENGINE
                      </p>

                      <p className="mt-2 hyi-p">
                        Continuously evaluating capacity,
                        utilization and workload demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <PurpleGlow className="-right-[400px] top-1/2 h-[850px] w-[850px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
              <h2 className="hyi-h1 hyi-white">
                Optimize across the
                <span className="block hyi-blue">
                  entire AI platform.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              Performance and efficiency are system-level concerns.
              We look across infrastructure layers instead of
              optimizing individual resources in isolation.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {optimizationAreas.map(({ Icon, title, text }, index) => (
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

                <p className="mt-2 hyi-p">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OPTIMIZATION LOOP
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">
        <PurpleGlow className="left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Observe. Understand.
              <span className="block hyi-blue">
                Optimize. Repeat.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] hyi-p">
              Optimization becomes more useful when it operates as
              an engineering loop that responds to changing
              workloads rather than a one-time infrastructure
              exercise.
            </p>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-4">
            {flow.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative  rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
              >
                <motion.div
                  animate={
                    index === flow.length - 1
                      ? { rotate: 360 }
                      : undefined
                  }
                  transition={
                    index === flow.length - 1
                      ? {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : undefined
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10"
                >
                  <Icon
                    size={15}
                    className="text-[#bba4f6]"
                  />
                </motion.div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">{text}</p>

                {index < flow.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="absolute bottom-6 right-6 hidden text-[#9878ef]/50 lg:block"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKLOAD PLACEMENT
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Put workloads
                <span className="block hyi-blue">
                  where they belong.
                </span>
              </h2>

              <p className="mt-2 max-w-[520px] hyi-p">
                Different AI workloads have different requirements.
                Training, inference, retrieval and data processing
                should not automatically consume the same
                infrastructure profile.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#080609]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]">
                    PLACEMENT ENGINE
                  </p>

                  <p className="mt-2 text-[10px] text-white/35">
                    Workload → resource alignment
                  </p>
                </div>

                <Workflow
                  size={17}
                  className="text-[#9878ef]"
                />
              </div>

              <div className="p-4">
                {[
                  {
                    Icon: BrainCircuit,
                    workload: "LLM inference",
                    resource: "GPU POOL",
                    reason: "Latency optimized",
                  },
                  {
                    Icon: Database,
                    workload: "Vector retrieval",
                    resource: "MEMORY TIER",
                    reason: "Data proximity",
                  },
                  {
                    Icon: BarChart3,
                    workload: "Analytics",
                    resource: "CPU CLUSTER",
                    reason: "Elastic compute",
                  },
                  {
                    Icon: Sparkles,
                    workload: "Fine-tuning",
                    resource: "GPU BATCH",
                    reason: "Scheduled capacity",
                  },
                ].map(
                  ({ Icon, workload, resource, reason }, index) => (
                    <motion.div
                      key={workload}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-2 grid items-center gap-4 rounded-[19px] border border-white/[0.055] bg-white/[0.02] p-5 md:grid-cols-[1fr_auto_1fr]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                          <Icon
                            size={13}
                            className="text-[#bba4f6]"
                          />
                        </div>

                        <div>
                          <p className="font-mono text-[5px] tracking-[0.15em] text-white/25">
                            WORKLOAD
                          </p>

                          <p className="mt-1 hyi-p">
                            {workload}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <ArrowRight
                          size={13}
                          className="text-[#9878ef]/55"
                        />
                      </motion.div>

                      <div className="md:text-right">
                        <p className="font-mono text-[6px] tracking-[0.14em] text-[#a98cf1]">
                          {resource}
                        </p>

                        <p className="mt-1 text-[8px] text-white/25">
                          {reason}
                        </p>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
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
                Efficiency without
                <span className="block hyi-blue">
                  compromise.
                </span>
              </h2>

              <p className="mt-2 max-w-[470px] hyi-p">
                Cloud optimization should improve efficiency while
                preserving the reliability, security and performance
                requirements of the AI platform.
              </p>
            </div>

            <div>
              {principles.map(({ Icon, title, text }) => (
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

                  <p className="hyi-p">{text}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Built for demanding
              <span className="block hyi-blue">
                AI workloads.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ Icon, title, text }, index) => (
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

                <p className="mt-2 hyi-p">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}