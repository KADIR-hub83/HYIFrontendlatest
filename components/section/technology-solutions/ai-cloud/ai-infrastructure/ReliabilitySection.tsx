"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDollarSign,
  Gauge,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    Icon: Activity,
    title: "Resilient by design",
    text: "Identify infrastructure dependencies and failure domains before they become production bottlenecks or single points of failure.",
  },
  {
    Icon: RefreshCcw,
    title: "Elastic where useful",
    text: "Scale infrastructure according to workload behavior while recognizing that specialized AI capacity may require deliberate planning.",
  },
  {
    Icon: ShieldCheck,
    title: "Controlled access",
    text: "Protect infrastructure, model assets and workload boundaries through identity-driven access and appropriate isolation.",
  },
  {
    Icon: Gauge,
    title: "Performance aware",
    text: "Evaluate compute, storage and network behavior together because AI workload performance depends on the complete system.",
  },
  {
    Icon: CircleDollarSign,
    title: "Economically intentional",
    text: "Match expensive specialized infrastructure to business value and workload requirements rather than maximizing capacity without context.",
  },
];

export default function ReliabilitySection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              08 / ENGINEERING PRINCIPLES
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Performance without
              <span className="block text-[#7653df]">fragility.</span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.44]">
              AI infrastructure has to balance performance, availability,
              security, operational complexity and economics. The strongest
              design is not simply the architecture with the most hardware.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[25px] border border-white/[0.07] bg-[#080808] p-7 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                <Icon size={15} className="text-[#9878ef]" />
                <h3 className="mt-8 text-xl">{title}</h3>
                <p className="mt-4 max-w-[650px] text-[11px] leading-6 text-white/[0.4]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}