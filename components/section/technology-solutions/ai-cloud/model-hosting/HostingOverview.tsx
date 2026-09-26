"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  CloudCog,
  Network,
  Server,
  Workflow,
} from "lucide-react";

import ModelDeploymentNetwork from "./ModelDeploymentNetwork";

const layers = [
  {
    Icon: BrainCircuit,
    title: "Model artifacts",
    text: "Manage deployable model weights, configuration and runtime requirements as versioned production assets.",
  },
  {
    Icon: Server,
    title: "Serving runtime",
    text: "Run models inside controlled inference environments designed around their compute and memory characteristics.",
  },
  {
    Icon: Network,
    title: "Request routing",
    text: "Direct incoming inference requests toward healthy model endpoints and available serving capacity.",
  },
  {
    Icon: Boxes,
    title: "Replica orchestration",
    text: "Operate multiple model-serving replicas so capacity and availability can adapt to production requirements.",
  },
  {
    Icon: CloudCog,
    title: "Platform operations",
    text: "Coordinate deployment, scaling, health, configuration and infrastructure lifecycle through a common control plane.",
  },
  {
    Icon: Workflow,
    title: "Delivery lifecycle",
    text: "Move models from validated artifacts into production through repeatable deployment and rollout processes.",
  },
];

export default function HostingOverview() {
  return (
    <section
      id="hosting-overview"
      className="border-y border-white/[0.06] bg-[#070707] py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              01 / MODEL SERVING PLATFORM
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              A model file is not
              <span className="block text-[#7046e6]">
                a production service.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-[12px] leading-7 text-white/[0.45]">
            Production hosting surrounds a trained model with runtime
            infrastructure, endpoints, routing, scaling, version management,
            security controls and operational visibility.
          </p>
        </div>

        <div className="mt-16">
          <ModelDeploymentNetwork />
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="min-h-[245px] rounded-[24px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <Icon size={15} className="text-[#a98cf4]" />

              <h3 className="mt-9 text-xl">{title}</h3>

              <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}