"use client";

import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Sparkles } from "lucide-react";
import IntelligenceDashboard from "./IntelligenceDashboard";

export default function BusinessIntelligenceHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]  pt-30  max-w-[1350px] mx-auto">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[850px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 18%,black 75%,transparent)",
          }}
        />

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[48%] h-px w-[50%] bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto  px-5 md:px-8">
        <div className="mx-auto max-w-[1250px] text-center">
       

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hyi-h1 hyi-white "
          >
            See the business
            <span className="block hyi-blue">
              before it happens.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-2 max-w-[750px] hyi-p"
          >
            HYI.AI transforms fragmented enterprise data into live dashboards,
            measurable intelligence and decision-ready insights—giving teams a
            clear view of performance, opportunities and what needs attention
            next.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-10 max-md:mt-5"
        >
          <IntelligenceDashboard />
        </motion.div>
      </div>
    </section>
  );
}