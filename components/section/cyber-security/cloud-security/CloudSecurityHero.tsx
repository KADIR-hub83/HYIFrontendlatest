"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import type { CloudSecurityService } from "./cloudSecurityData";
import CloudSecurityModel from "./CloudSecurityModel";

export default function CloudSecurityHero({service}:{service:CloudSecurityService}) {
 return <section className="relative overflow-hidden bg-black pt-32">
  <div className="absolute inset-0 opacity-[.07]" style={{backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"38px 38px"}}/>
  <motion.div animate={{scale:[1,1.16,1],opacity:[.12,.28,.12]}} transition={{duration:7,repeat:Infinity}} className="absolute -left-20 top-52 h-52 w-52 rounded-full bg-[#7c3aed] blur-[2px]"/>
  <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
   <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} className="mx-auto max-w-[930px] text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><ShieldCheck className="h-3 w-3 text-white/50"/><span className="text-[9px] tracking-[.24em] text-white/40">{service.eyebrow}</span></div>
    <h1 className="mx-auto mt-7 max-w-[900px] text-[40px] font-medium leading-[1.04] tracking-[-.04em] text-white md:text-[62px]">{service.title}</h1>
    <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-white/50">{service.accent}</p>
    <p className="mx-auto mt-3 max-w-3xl text-[12px] leading-6 text-white/30">{service.description}</p>
    <div className="mt-8 flex justify-center gap-3"><a href="#capabilities" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] text-black">Explore controls <ArrowRight className="h-3 w-3"/></a><a href="#operations" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-[11px] text-white/50">Operating model <ArrowDown className="h-3 w-3"/></a></div>
   </motion.div>
   <div className="mt-16"><CloudSecurityModel model={service.model}/></div>
   <div className="mx-auto grid max-w-[900px] grid-cols-3 border-x border-b border-white/[0.07]">{service.stats.map(s=><div key={s.label} className="p-5 text-center"><p className="text-[13px] text-white">{s.value}</p><p className="mt-1 font-mono text-[8px] tracking-[.16em] text-white/25">{s.label}</p></div>)}</div>
  </div>
 </section>
}
