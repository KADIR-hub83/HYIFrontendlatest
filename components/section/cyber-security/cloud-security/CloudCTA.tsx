"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CloudSecurityService } from "./cloudSecurityData";
export default function CloudCTA({service}:{service:CloudSecurityService}){
 return <section className="relative overflow-hidden border-t border-white/[0.07] bg-black py-28"><motion.div animate={{scale:[1,1.3,1]}} transition={{duration:8,repeat:Infinity}} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[80px]"/><div className="relative mx-auto max-w-[900px] px-5 text-center"><p className="font-mono text-[9px] tracking-[.3em] text-white/25">HYI.AI / CLOUD SECURITY</p><h2 className="mt-7 text-[34px] font-medium tracking-[-.035em] text-white md:text-[52px]">{service.ctaTitle}</h2><a href="#capabilities" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] text-black">Explore the system <ArrowRight className="h-3 w-3"/></a></div></section>
}
