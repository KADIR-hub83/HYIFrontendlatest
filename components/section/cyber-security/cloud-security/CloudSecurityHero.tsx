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
  
    <h1 className="mx-auto  max-w-[900px] hyi-h1 hyi-white">{service.title}</h1>
    <p className="mx-auto mt-2 max-w-2xl hyi-p hyi-blue font-bold">{service.accent}</p>
    <p className="mx-auto mt-2 max-w-3xl  hyi-p">{service.description}</p>
   
   </motion.div>
   <div className="mt-8"><CloudSecurityModel model={service.model}/></div>
   
  </div>
 </section>
}
