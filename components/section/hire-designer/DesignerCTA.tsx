"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DesignerCTA() {
  return (
    <section className="relative  overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-1/2 top-[35%] h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#6d3df5]/[0.11] blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom,transparent,black 30%,transparent)",
        }}
      />

      <div className="relative z-10 mx-auto flex   flex-col justify-between px-5 py-10 max-w-[1350px] sm:px-5  ">


        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-7 text-[10px] uppercase tracking-[0.3em] hyi-blue font-bold"
          >
            Your next great product starts here
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1250px] text-[clamp(60px,5vw,150px)] font-medium leading-[0.82] tracking-[-0.075em]"
          >
            Build something
            <br />
            <span className="hyi-blue">people love.</span>
          </motion.h2>

          <div className="mt-5 flex flex-col gap-7 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[400px] hyi-p">
              Tell us what you&apos;re building. We&apos;ll connect you with a designer
              who can help turn it into an exceptional product.
            </p>
<a
  href="https://hyi-nine.vercel.app/signup"
  className="group flex h-14 w-fit items-center gap-5 rounded-full bg-white pl-7 pr-3 text-[12px] font-semibold text-black transition hover:bg-[#a78bfa]"
>
  Find your designer

  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
    <ArrowUpRight
      size={14}
      className="transition duration-300 group-hover:rotate-45"
    />
  </span>
</a>
          </div>
        </div>


      </div>
    </section>
  );
}