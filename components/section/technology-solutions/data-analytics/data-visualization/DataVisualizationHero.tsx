"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import DataOrb from "./DataOrb";

export default function DataVisualizationHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]  pt-10 lg:pt-20 px-15">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[60%] top-[25%] h-[700px] w-[800px] rounded-full bg-violet-600/[0.10] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <div>
       
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className=" max-w-[850px] hyi-h1 hyi-white"
            >
              Make data
              <span className="block hyi-blue">
                impossible to ignore.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 max-w-[680px] hyi-p"
            >
              Transform complex enterprise data into immersive dashboards,
              interactive visual systems and clear stories that reveal what is
              happening, why it matters and where your business should move
              next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 flex flex-wrap gap-3"
            >
              {[
                "Interactive Dashboards",
                "Real-Time Analytics",
                "Visual Storytelling",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-2.5 text-p"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            <DataOrb />
          </motion.div>
        </div>

       <a
  href="#canvas"
  className="
    mx-auto mt-5
    flex w-fit
    items-center justify-center
    gap-3
    rounded-full
    bg-gray-600
    px-5 py-3
    text-center
    text-[16px]
    uppercase
    tracking-[0.25em]
    text-white
  "
>
  <span>Explore the data</span>
  <ArrowDown size={12} />
</a>
      </div>
    </section>
  );
}