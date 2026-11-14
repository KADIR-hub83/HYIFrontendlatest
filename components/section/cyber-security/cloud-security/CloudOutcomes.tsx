"use client";
import { motion } from "framer-motion";
import type { CloudSecurityService } from "./cloudSecurityData";
export default function Section({service}:{service:CloudSecurityService}){
 return <section className="border-t border-white/[0.06] bg-black py-10">
  <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} className="mx-auto max-w-[1350px] px-5 md:px-8">
   <div className=" grid gap-8 md:grid-cols-[.9fr_1.1fr]"><h2 className="hyi-h1 hyi-white">{service.outcomesTitle}</h2><p className="max-w-2xl hyi-p">{service.narrative}</p></div>
  </motion.div>
 </section>
}
