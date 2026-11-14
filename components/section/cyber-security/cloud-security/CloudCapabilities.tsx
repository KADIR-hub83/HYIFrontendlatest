"use client";
import { motion } from "framer-motion";
import { Activity, CheckCircle2, Eye, Network, ShieldCheck, Workflow } from "lucide-react";
import type { CloudSecurityService } from "./cloudSecurityData";
const icons=[Activity,ShieldCheck,Eye,Network,Workflow,CheckCircle2];
export default function CloudCapabilities({service}:{service:CloudSecurityService}){
 return <section id="capabilities" className="bg-[#030303] ">
    <div className="mx-auto max-w-[1350px] px-5 md:px-8 ">
  <h2 className="mt-3  text-end hyi-h1 hyi-white">{service.capabilityTitle}</h2>
  <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{service.capabilities.map((c,i)=>{const Icon=icons[i];return <motion.div key={c.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6"><Icon className="h-4 w-4 text-white"/><h3 className="mt-2 hyi-h3 hyi-white">{c.title}</h3><p className="mt-2 hyi-p text-white/60">{c.text}</p></motion.div>})}</div>
 </div></section>
}
