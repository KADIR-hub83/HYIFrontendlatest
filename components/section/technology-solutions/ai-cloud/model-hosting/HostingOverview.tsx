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
      className=" bg-[#000000]"
    >
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center mx-auto ">
          <div className="max-w-[850px] mx-auto ">
          

            <h2 className="hyi-h1 hyi-white">
              A model file is not
              <span className="block hyi-blue">
                a production service.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] hyi-p mx-auto">
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
              className=" rounded-[24px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <Icon size={15} className="text-[#a98cf4]" />

              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

              <p className="mt-2 hyi-p">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}