"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  BrainCircuit,
  CloudCog,
  GitBranch,
  LockKeyhole,
  Network,
  Server,
} from "lucide-react";

const capabilities = [
  {
    Icon: BrainCircuit,
    title: "Model Serving",
    text: "Transform validated model artifacts into controlled production services that applications can consume through stable interfaces.",
  },
  {
    Icon: Server,
    title: "Dedicated Endpoints",
    text: "Expose models through independently operated endpoints with runtime and capacity aligned to the model workload.",
  },
  {
    Icon: Boxes,
    title: "Replica Management",
    text: "Operate multiple serving instances to support changing request demand and reduce dependency on a single runtime.",
  },
  {
    Icon: Network,
    title: "Request Routing",
    text: "Separate client applications from individual model replicas through a routing and service-discovery layer.",
  },
  {
    Icon: GitBranch,
    title: "Model Versioning",
    text: "Manage model releases as versioned production changes with controlled rollout and rollback paths.",
  },
  {
    Icon: CloudCog,
    title: "Elastic Runtime",
    text: "Adjust model-serving capacity around workload demand while respecting startup, memory and compute requirements.",
  },
  {
    Icon: LockKeyhole,
    title: "Private Hosting",
    text: "Place serving infrastructure within controlled cloud boundaries when model, data or network requirements demand stronger isolation.",
  },
  {
    Icon: Activity,
    title: "Serving Observability",
    text: "Connect model-service health, endpoint activity and runtime infrastructure into a unified operational view.",
  },
];

export default function HostingCapabilities() {
  return (
    <section className="bg-[#000000] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="max-w-[900px] text-center mx-auto">
         
          <h2 className="hyi-h1 hyi-white">
            Everything between
            <span className="block hyi-blue">
              the model and the user.
            </span>
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -7 }}
              className="group  rounded-[26px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="text-[#a98cf4]" />
                </div>
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

              <p className="mt-2 hyi-p">
                {text}
              </p>

              <div className="mt-4 h-px bg-gradient-to-r from-[#7046e6]/50 to-transparent opacity-40 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}