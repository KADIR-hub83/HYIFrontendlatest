"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  LayoutDashboard,
  ServerCog,
} from "lucide-react";

const nodes = [
  {
    Icon: Database,
    label: "Enterprise Sources",
    sub: "ERP · CRM · APIs",
  },
  {
    Icon: ServerCog,
    label: "Data Platform",
    sub: "Transform · Govern",
  },
  {
    Icon: BrainCircuit,
    label: "Intelligence",
    sub: "Analyze · Predict",
  },
  {
    Icon: LayoutDashboard,
    label: "Business Action",
    sub: "Dashboards · Alerts",
  },
];

export default function DataFlowEngine() {
  return (
    <section className=" bg-[#090806] py-10 max-md:py-5">
      <div className="mx-auto max-w-[1350px] px-4 md:px-8">
        <div className="mx-auto max-w-[950px] text-center">
      

          <h2 className=" hyi-white hyi-h1 ">
            Raw data in.
            <span className="hyi-blue"> Decisions out.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[720px] hyi-p">
            A connected intelligence pipeline turns fragmented enterprise
            information into trusted analytics and actionable business signals.
          </p>
        </div>

        <div className="relative mt-6">
          <div className="absolute left-[10%] right-[10%] top-[56px] hidden h-px bg-white/[0.08] lg:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="absolute left-[10%] top-[56px] hidden h-px bg-gradient-to-r from-violet-600 via-violet-100 to-violet-600 lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {nodes.map(({ Icon, label, sub }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-violet-200/15 bg-[#090806] shadow-[0_0_50px_rgba(139,92,246,.08)]">
                  <Icon size={25} className="text-violet-100/70" />

                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-3 rounded-full border border-violet-200/15"
                  />
                </div>

                <div className="mt-2  rounded-[28px] border border-white/[0.08] bg-[#0c0b09] p-7 text-center">
                

                  <h3 className=" hyi-h3 hyi-white">{label}</h3>

                  <p className="mt-2 hyi-p">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}