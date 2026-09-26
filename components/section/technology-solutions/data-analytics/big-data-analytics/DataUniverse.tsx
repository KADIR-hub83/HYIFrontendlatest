"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Network,
  Radio,
} from "lucide-react";
import DataUniverseModel from "./DataUniverseModel";

export default function DataUniverse() {
  return (
    <section
      id="data-universe"
      className="relative bg-[#030303] py-28 md:py-44"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Data Universe
          </span>

          <h2 className="mx-auto mt-7 max-w-[1150px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Your data never
            <span className="block text-white/50">stands still.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-8 text-white/60">
            Capture high-volume signals from applications, transactions,
            machines and customer interactions and turn them into continuously
            usable intelligence.
          </p>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <DataUniverseModel />
          </div>

          <div className="grid gap-4 lg:col-span-4">
            {[
              {
                Icon: Radio,
                value: "8.4B",
                title: "Daily events",
                text: "High-frequency streams continuously entering the analytics platform.",
              },
              {
                Icon: Database,
                value: "2.1PB",
                title: "Daily ingestion",
                text: "Structured and unstructured information processed at enterprise scale.",
              },
              {
                Icon: Network,
                value: "148",
                title: "Connected sources",
                text: "Applications, APIs, operational systems and external platforms unified.",
              },
            ].map(({ Icon, value, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[30px] border border-[#eee5ff]/[0.10] bg-[#0b0b0d] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={17} className="text-[#eee5ff]/65" />
                  <Activity size={11} className="text-emerald-300/50" />
                </div>

                <div className="mt-9 text-4xl font-light tracking-[-0.04em] text-[#f3edf8]">
                  {value}
                </div>

                <h3 className="mt-4 text-lg">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
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