"use client";
import { motion } from "framer-motion";
import type { CloudSecurityService } from "./cloudSecurityData";
export default function Section({service}:{service:CloudSecurityService}){
 return <section className="border-t border-white/[0.06] bg-black py-24">
  <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} className="mx-auto max-w-[1180px] px-5 md:px-8">
   <p className="font-mono text-[9px] tracking-[.28em] text-white/25">THESIS</p>
   <div className="mt-6 grid gap-8 md:grid-cols-[.9fr_1.1fr]"><h2 className="text-[28px] font-medium leading-tight tracking-[-.025em] text-white md:text-[40px]">{service.narrativeTitle}</h2><p className="max-w-2xl text-[13px] leading-7 text-white/40">{service.narrative}</p></div>
  </motion.div>
 </section>
}
