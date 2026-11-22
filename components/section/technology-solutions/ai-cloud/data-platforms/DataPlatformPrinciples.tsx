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
    <section className="relative overflow-hidden  bg-[#070707] ">
      <div className="absolute -right-[250px] top-[10%] h-[650px] w-[650px] rounded-full bg-[#390b44]/40 blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
        
            <h2 className="hyi-h1 hyi-white">
              Build for what
              <span className="block hyi-blue">
                comes next.
              </span>
            </h2>

            <p className="mt-2 max-w-[670px] hyi-p">
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
                className=" rounded-[24px] border border-white/[0.07] bg-[#030303] p-6"
              >
                <div className="flex items-center justify-between">
                  <Icon size={15} className="text-[#9875ec]" />

          
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

                <p className="mt-1 hyi-p">
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