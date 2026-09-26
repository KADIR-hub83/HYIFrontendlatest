"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Factory,
  ShoppingBag,
  Workflow,
} from "lucide-react";

const cases = [
  {
    Icon: ChartNoAxesCombined,
    title: "Enterprise Analytics",
    text: "Create shared analytical foundations for reporting, dashboards and decision-support workflows.",
  },
  {
    Icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Provide governed data foundations for predictive models and generative AI applications.",
  },
  {
    Icon: Building2,
    title: "Enterprise Data Hub",
    text: "Connect information distributed across business systems into a reusable organizational platform.",
  },
  {
    Icon: Factory,
    title: "Operational Intelligence",
    text: "Bring data from operational systems into analytical and monitoring workflows.",
  },
  {
    Icon: ShoppingBag,
    title: "Customer Intelligence",
    text: "Connect customer, product and interaction data for deeper analytical experiences.",
  },
  {
    Icon: Workflow,
    title: "Data Products",
    text: "Build reusable domain-oriented datasets that serve multiple applications and teams.",
  },
];

export default function DataPlatformUseCases() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28">
      <div className="absolute -left-[300px] top-[30%] h-[700px] w-[700px] rounded-full bg-[#7046e6]/15 blur-[190px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              10 / USE CASES
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              One platform.
              <span className="block text-[#7046e6]">
                Many consumers.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[13px] leading-7 text-white/[0.5]">
              A modern platform becomes reusable infrastructure for multiple
              business and technology initiatives instead of being designed
              around only one report or application.
            </p>

            <div className="relative mt-10 min-h-[450px] overflow-hidden rounded-[30px] border border-white/[0.08]">
              <Image
                src="/images/data-platforms/analytics.webp"
                alt="Enterprise data platform use cases"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {cases.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="min-h-[280px] rounded-[25px] border border-white/[0.07] bg-[#070707] p-6"
              >
                <Icon size={16} className="text-[#9875ec]" />

                <p className="mt-10 font-mono text-[6px] text-[#7046e6]">
                  USE CASE 0{index + 1}
                </p>

                <h3 className="mt-4 text-xl">{title}</h3>

                <p className="mt-5 text-[11px] leading-6 text-white/[0.45]">
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