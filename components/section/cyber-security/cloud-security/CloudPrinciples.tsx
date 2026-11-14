"use client";
import { motion } from "framer-motion";
import type { CloudSecurityService } from "./cloudSecurityData";
export default function CloudPrinciples({service}:{service:CloudSecurityService}){
 return <section className="bg-black "><div className="mx-auto max-w-[1350px] px-5 md:px-8"><h2 className="text-center hyi-h1 hyi-white">{service.principlesTitle}</h2>
 <div className="mt-8 border-t border-white/[0.08]">{service.principles.map((p,i)=><motion.div initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} key={p} className="grid grid-cols-[60px_1fr] border-b border-white/[0.07] py-5"><span className="font-mono text-[9px] text-[#7c3aed]">{String(i+1).padStart(2,"0")}</span><p className="hyi-p">{p}</p></motion.div>)}</div></div></section>
}
