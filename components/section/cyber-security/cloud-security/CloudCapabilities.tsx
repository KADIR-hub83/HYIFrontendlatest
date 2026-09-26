"use client";
import { motion } from "framer-motion";
import { Activity, CheckCircle2, Eye, Network, ShieldCheck, Workflow } from "lucide-react";
import type { CloudSecurityService } from "./cloudSecurityData";
const icons=[Activity,ShieldCheck,Eye,Network,Workflow,CheckCircle2];
export default function CloudCapabilities({service}:{service:CloudSecurityService}){
 return <section id="capabilities" className="bg-[#030303] py-24"><div className="mx-auto max-w-[1250px] px-5 md:px-8">
  <p className="font-mono text-[9px] tracking-[.28em] text-white/25">CAPABILITY SYSTEM</p><h2 className="mt-5 max-w-3xl text-[30px] font-medium tracking-[-.03em] text-white md:text-[42px]">{service.capabilityTitle}</h2>
  <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{service.capabilities.map((c,i)=>{const Icon=icons[i];return <motion.div key={c.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6"><Icon className="h-4 w-4 text-white/45"/><h3 className="mt-6 text-[14px] text-white/85">{c.title}</h3><p className="mt-3 text-[12px] leading-6 text-white/35">{c.text}</p></motion.div>})}</div>
 </div></section>
}
