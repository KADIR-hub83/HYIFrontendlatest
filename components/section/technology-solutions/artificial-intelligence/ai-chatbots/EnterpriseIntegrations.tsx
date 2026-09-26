"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  FileText,
  Network,
  ServerCog,
  ShoppingBag,
} from "lucide-react";

const integrations = [
  { name: "CRM", icon: Database },
  { name: "ERP", icon: ServerCog },
  { name: "Cloud", icon: Cloud },
  { name: "Commerce", icon: ShoppingBag },
  { name: "Knowledge", icon: FileText },
  { name: "APIs", icon: Network },
];

export default function EnterpriseIntegrations() {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-[#07070a] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
            05 / Enterprise Connectivity
          </span>

          <h2 className="mx-auto mt-7 max-w-[900px] text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            Intelligence connected to
            <span className="block text-white/30">
              the systems that run your business.
            </span>
          </h2>
        </div>

        <div className="relative mt-24 overflow-hidden py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-4"
          >
            {[...integrations, ...integrations].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.name}-${i}`}
                  className="flex h-[190px] w-[280px] flex-shrink-0 flex-col justify-between rounded-[26px] border border-white/[0.07] bg-[#0b0b0f] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/[0.06]">
                    <Icon size={18} className="text-purple-300" />
                  </div>

                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="mt-2 text-xs text-white/30">
                      Secure enterprise connection
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1000px] items-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-400/30" />
          <div className="mx-5 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-6 py-3 text-[9px] uppercase tracking-[0.3em] text-purple-200/60">
            Secure AI Integration Layer
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-400/30" />
        </div>
      </div>
    </section>
  );
}