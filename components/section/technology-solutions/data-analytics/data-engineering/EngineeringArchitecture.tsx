"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CloudCog,
  Database,
  GitBranch,
  Network,
  RadioTower,
  type LucideIcon,
} from "lucide-react";

const architectureLayers: {
  title: string;
  icon: LucideIcon;
}[] = [
  {
    title: "RAW",
    icon: Database,
  },
  {
    title: "CURATED",
    icon: Boxes,
  },
  {
    title: "SERVING",
    icon: Network,
  },
];

const pipelineSteps = [
  {
    icon: "✓",
    command: "pipeline.validate()",
    status: "PASSED",
  },
  {
    icon: "✓",
    command: "quality.check()",
    status: "PASSED",
  },
  {
    icon: "→",
    command: "deploy.production()",
    status: "RUNNING",
  },
];

const integrations = [
  "Applications",
  "APIs",
  "Databases",
  "IoT",
  "SaaS",
  "Cloud",
  "Files",
  "Events",
  "Analytics",
  "AI",
];

export default function EngineeringArchitecture() {
  return (
    <section className="bg-[#050505] py-28 text-white md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-[1000px]">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Modern Data Architecture
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Infrastructure built
            <span className="block text-white/50">
              for what comes next.
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-5 lg:grid-cols-12">
          {/* Lakehouse */}
          <motion.article
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="relative min-h-[620px] overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#0b0a0c] p-8 md:p-10 lg:col-span-7"
          >
            <span className="font-mono text-[8px] tracking-[0.2em] text-violet-200/50">
              LAKEHOUSE ARCHITECTURE
            </span>

            <h3 className="mt-6 max-w-[550px] text-4xl tracking-[-0.04em]">
              One foundation for analytics and AI.
            </h3>

            <p className="mt-5 max-w-[570px] text-sm leading-7 text-white/60">
              Combine scalable object storage, warehouse performance and
              governed data models inside a unified enterprise architecture.
            </p>

            {/* Architecture Visual */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
              <div className="relative h-[290px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/30 p-6">
                {/* Grid Background */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(196,181,253,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,.1) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative z-10 grid h-full grid-cols-3 items-center gap-4">
                  {architectureLayers.map(
                    ({ title, icon: Icon }, index) => (
                      <motion.div
                        key={title}
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.4,
                          ease: "easeInOut",
                        }}
                        className="rounded-[20px] border border-violet-200/[0.12] bg-[#0c0a10] p-5 text-center"
                      >
                        <Icon
                          size={20}
                          className="mx-auto text-violet-100/70"
                        />

                        <div className="mt-4 font-mono text-[7px] text-white/45">
                          {title}
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Right Side */}
          <div className="grid gap-5 lg:col-span-5">
            {/* Streaming */}
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-[38px] border border-white/[0.08] bg-[#0b0a0c] p-8"
            >
              <RadioTower
                size={22}
                className="text-violet-100/70"
              />

              <h3 className="mt-8 text-3xl">
                Streaming first.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Process high-volume events continuously instead of waiting
                for yesterday&apos;s batch.
              </p>

              {/* Animated Streaming Bars */}
              <div className="mt-9 flex h-24 items-center gap-1">
                {Array.from({ length: 30 }).map((_, index) => {
                  const startHeight =
                    15 + ((index * 17) % 70);

                  const middleHeight =
                    35 + ((index * 11) % 60);

                  return (
                    <motion.span
                      key={index}
                      animate={{
                        height: [
                          `${startHeight}%`,
                          `${middleHeight}%`,
                          `${startHeight}%`,
                        ],
                      }}
                      transition={{
                        duration: 2 + (index % 4) * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex-1 rounded-full bg-violet-200/55"
                    />
                  );
                })}
              </div>
            </motion.article>

            {/* DataOps */}
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-[38px] border border-white/[0.08] bg-gradient-to-br from-[#17121c] to-[#090909] p-8"
            >
              <GitBranch
                size={22}
                className="text-violet-100/70"
              />

              <h3 className="mt-8 text-3xl">
                DataOps built in.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Versioned pipelines, automated testing and deployment
                workflows make data engineering reliable and repeatable.
              </p>

              <div className="mt-8 space-y-3 font-mono text-[8px]">
                {pipelineSteps.map(
                  ({ icon, command, status }) => (
                    <div
                      key={command}
                      className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 px-4 py-4"
                    >
                      <span className="text-white/50">
                        {icon} {command}
                      </span>

                      <span
                        className={
                          status === "RUNNING"
                            ? "text-violet-300/70"
                            : "text-emerald-300/55"
                        }
                      >
                        {status}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </motion.article>
          </div>

          {/* Cloud Native */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-[38px] border border-white/[0.08] bg-[#0b0a0c] p-8 lg:col-span-4"
          >
            <CloudCog
              size={22}
              className="text-violet-100/70"
            />

            <h3 className="mt-8 text-3xl">
              Cloud native.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Architect data platforms for scalable cloud and hybrid
              environments.
            </p>
          </motion.article>

          {/* Connections */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-[38px] border border-white/[0.08] bg-[#0b0a0c] p-8 lg:col-span-8"
          >
            <Network
              size={22}
              className="text-violet-100/70"
            />

            <h3 className="mt-8 text-3xl">
              Designed to connect everything.
            </h3>

            <div className="mt-9 flex flex-wrap gap-3">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 font-mono text-[8px] text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}