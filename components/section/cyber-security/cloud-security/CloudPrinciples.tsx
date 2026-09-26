"use client";
import { motion } from "framer-motion";
import type { CloudSecurityService } from "./cloudSecurityData";
export default function CloudPrinciples({service}:{service:CloudSecurityService}){
 return <section className="bg-black py-24"><div className="mx-auto max-w-[1180px] px-5 md:px-8"><h2 className="max-w-3xl text-[30px] font-medium tracking-[-.03em] text-white md:text-[42px]">{service.principlesTitle}</h2><div className="mt-10 border-t border-white/[0.08]">{service.principles.map((p,i)=><motion.div initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} key={p} className="grid grid-cols-[60px_1fr] border-b border-white/[0.07] py-5"><span className="font-mono text-[9px] text-[#7c3aed]">{String(i+1).padStart(2,"0")}</span><p className="text-[12px] leading-6 text-white/45">{p}</p></motion.div>)}</div></div></section>
}
