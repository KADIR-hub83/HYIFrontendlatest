"use client";

import { motion } from "framer-motion";
import {
  Expand,
  Eye,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  Users,
} from "lucide-react";

const principles = [
  {
    Icon: Layers3,
    title: "Platform over projects",
    text: "Design reusable foundations that can support multiple teams, products and analytical workloads instead of rebuilding infrastructure for every initiative.",
  },
  {
    Icon: Users,
    title: "Consumer focused",
    text: "Organize data around the needs of people, applications and intelligent systems that ultimately consume the information.",
  },
  {
    Icon: LockKeyhole,
    title: "Governance by design",
    text: "Build security, ownership and governance into platform architecture rather than adding controls after data has already spread.",
  },
  {
    Icon: Expand,
    title: "Designed to scale",
    text: "Use architecture patterns capable of evolving as data volume, workload diversity and organizational adoption increase.",
  },
  {
    Icon: Eye,
    title: "Observable",
    text: "Make important platform workflows visible enough for teams to understand failures, dependencies and operational health.",
  },
  {
    Icon: RefreshCcw,
    title: "Continuously evolving",
    text: "Treat the data platform as a long-lived product that changes alongside business requirements, technology and AI capabilities.",
  },
];

export default function DataPlatformPrinciples() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="absolute -right-[250px] top-[10%] h-[650px] w-[650px] rounded-full bg-[#390b44]/40 blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              11 / DESIGN PRINCIPLES
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Build for what
              <span className="block text-[#7046e6]">
                comes next.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[13px] leading-7 text-white/[0.5]">
              Data technologies will continue changing. Strong platform
              principles create a more durable foundation than architecture
              built around one temporary tool or isolated workload.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className="min-h-[270px] rounded-[24px] border border-white/[0.07] bg-[#030303] p-6"
              >
                <div className="flex items-center justify-between">
                  <Icon size={15} className="text-[#9875ec]" />

                  <span className="font-mono text-[6px] text-[#7046e6]">
                    PRINCIPLE 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-xl">{title}</h3>

                <p className="mt-5 text-[11px] leading-6 text-white/[0.47]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}