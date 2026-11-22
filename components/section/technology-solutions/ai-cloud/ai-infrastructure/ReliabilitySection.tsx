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
    <section className="bg-[#030303] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
      

            <h2 className="hyi-h1 hyi-white">
              Performance without
              <span className="block hyi-blue">fragility.</span>
            </h2>

            <p className="mt-2 max-w-[500px] hyi-p">
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
                <Icon size={15} className="hyi-blue-icon" />
                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
                <p className="mt-2 max-w-[650px] hyi-p">
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