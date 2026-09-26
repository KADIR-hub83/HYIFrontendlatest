"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Building2,
  CircleDollarSign,
  ShoppingBag,
  Users,
} from "lucide-react";

const useCases = [
  {
    Icon: BarChart3,
    title: "Enterprise BI",
    text: "Create a trusted analytical foundation for dashboards, KPIs and executive reporting.",
  },
  {
    Icon: Users,
    title: "Customer 360",
    text: "Unify customer information across sales, service, marketing and digital channels.",
  },
  {
    Icon: CircleDollarSign,
    title: "Financial Analytics",
    text: "Centralize finance and operational information for controlled analytical reporting.",
  },
  {
    Icon: ShoppingBag,
    title: "Commerce Analytics",
    text: "Connect transactions, inventory, customers and product behavior into one analytical model.",
  },
  {
    Icon: BrainCircuit,
    title: "AI & ML",
    text: "Deliver clean, structured historical information for models, agents and intelligent applications.",
  },
  {
    Icon: Building2,
    title: "Enterprise Operations",
    text: "Create cross-functional visibility across complex business systems and operational processes.",
  },
];

export default function WarehouseUseCases() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Enterprise Applications
          </span>

          <h2 className="mx-auto mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            One warehouse.
            <span className="block text-white/50">
              Many decisions.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              transition={{ delay: (index % 3) * 0.08 }}
              className="group min-h-[370px] rounded-[34px] border border-[#eee5ff]/[0.10] bg-[#0b0b0d] p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                  <Icon size={21} className="text-[#eee5ff]/70" />
                </div>

                <span className="font-mono text-[7px] text-white/20">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-20 text-2xl tracking-[-0.03em]">
                {title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {text}
              </p>

              <div className="mt-8 h-px w-10 bg-[#eee5ff]/25 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}