"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectManagerCTA() {
  return (
    <section className="relative  overflow-hidden ">
      <div className="absolute inset-0 bg-[#050505]" />

      {/* <div className="absolute left-1/2 top-[65%] h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#6d3df5]/[0.1] blur-[140px]" /> */}

      {/* <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to_bottom,transparent,black_30%,transparent)",
        }}
      /> */}

      <div className="relative z-10 mx-auto flex  max-w-[1450px] flex-col justify-between px-5 py-10 sm:px-10 lg:px-20">
   

        <div>
     

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-[1300px] text-[clamp(60px,6vw,150px)] font-medium leading-[0.82] tracking-[-0.075em]"
          >
            Make progress
            <br />

            <span className="text-white/20">predictable.</span>
          </motion.h2>

          <div className="mt-12 flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[420px] hyi-p hyi-gray leading-6 text-white/35">
              Tell us what you're delivering and where the complexity is.
              We'll connect you with project leadership built for the challenge.
            </p>

            <button className="group flex h-14 w-fit items-center gap-5 rounded-full bg-white pl-7 pr-3 text-[11px] font-semibold text-black transition hover:bg-[#a78bfa]">
              Find a project manager

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight
                  size={14}
                  className="transition duration-300 group-hover:rotate-45"
                />
              </span>
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
}