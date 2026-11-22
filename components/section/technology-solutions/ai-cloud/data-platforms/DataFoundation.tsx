"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    Icon: Database,
    title: "Connected",
    text: "Bring important enterprise data sources into an intentional platform architecture.",
  },
  {
    Icon: Layers3,
    title: "Structured",
    text: "Organize platform layers around ingestion, storage, transformation and consumption.",
  },
  {
    Icon: Network,
    title: "Accessible",
    text: "Create reusable data foundations for applications, analytics and AI workloads.",
  },
  {
    Icon: ShieldCheck,
    title: "Governed",
    text: "Apply security, ownership and governance across the data lifecycle.",
  },
];

export default function DataFoundation() {
  return (
    <section
      id="data-foundation"
      className="relative overflow-hidden  bg-[#070707] py-10"
    >
      <div className="absolute -left-[300px] top-[100px] h-[700px] w-[700px] rounded-full bg-[#390b44]/35 blur-[180px]" />

      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
           <h2 className="hyi-h1 hyi-white">
              Your intelligence is
              <span className="block hyi-blue">
                only as strong as its data.
              </span>
            </h2>

            <p className="mt-2 max-w-[560px] hyi-p">
              A modern data platform creates the shared foundation that allows
              information to move reliably from operational systems into
              analytics, applications and AI.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {items.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <Icon size={14} className="text-[#8f6be9]" />

                  <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

                  <p className="mt-1 hyi-p">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[700px] overflow-hidden rounded-[38px] border border-white/[0.08]"
          >
            <Image
              src="/images/data-platforms/data-center.webp"
              alt="Modern enterprise data infrastructure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/25 to-transparent" />
            <div className="absolute inset-0 bg-[#7046e6]/10 mix-blend-color" />

            <div className="absolute bottom-0 left-0 max-w-[600px] p-8 md:p-10">
              <p className="font-mono text-[6px] tracking-[0.25em] text-[#c3affb]">
                ENTERPRISE DATA INFRASTRUCTURE
              </p>

              <h3 className="mt-1 hyi-h1 hyi-white">
                One foundation.
                <span className="block ">
                  Multiple intelligence systems.
                </span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}