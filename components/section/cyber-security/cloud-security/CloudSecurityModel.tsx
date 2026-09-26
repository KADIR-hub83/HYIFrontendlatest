"use client";

import { motion } from "framer-motion";
import type { CloudModel } from "./cloudSecurityData";

const modelConfig: Record<CloudModel, { label:string; nodes:string[]; mode:string }> = {
  assessment:{label:"EXPOSURE SCANNER",nodes:["ASSET","IAM","PUBLIC","DATA"],mode:"radar"},
  architecture:{label:"TRUST ARCHITECTURE",nodes:["IDENTITY","NETWORK","DATA","CONTROL"],mode:"layers"},
  workload:{label:"RUNTIME DEFENSE",nodes:["BUILD","REGISTRY","DEPLOY","RUNTIME"],mode:"pipeline"},
  infrastructure:{label:"INFRASTRUCTURE GRAPH",nodes:["COMPUTE","NETWORK","STORAGE","MGMT"],mode:"grid"},
  casb:{label:"ACCESS BROKER",nodes:["USER","POLICY","SAAS","DATA"],mode:"broker"},
  cspm:{label:"POSTURE CONSTELLATION",nodes:["INVENTORY","BASELINE","DRIFT","FIX"],mode:"orbit"},
  identity:{label:"IDENTITY ORBIT",nodes:["HUMAN","WORKLOAD","PRIVILEGE","SESSION"],mode:"identity"},
  container:{label:"CONTAINER LIFECYCLE",nodes:["IMAGE","REGISTRY","ADMISSION","RUNTIME"],mode:"containers"},
  kubernetes:{label:"CLUSTER TOPOLOGY",nodes:["CONTROL","NAMESPACE","POD","POLICY"],mode:"cluster"},
  compliance:{label:"EVIDENCE MATRIX",nodes:["CONTROL","EVIDENCE","OWNER","STATUS"],mode:"matrix"},
  multicloud:{label:"MULTI-CLOUD FABRIC",nodes:["CLOUD A","CLOUD B","CLOUD C","POLICY"],mode:"clouds"},
};

export default function CloudSecurityModel({ model }: { model: CloudModel }) {
  const c=modelConfig[model];
  return (
    <div className="relative mx-auto min-h-[480px] w-full max-w-[1120px] overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#050505]">
      <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-5">
        <div className="flex gap-2"><i className="h-2 w-2 rounded-full bg-white/15"/><i className="h-2 w-2 rounded-full bg-white/15"/><i className="h-2 w-2 rounded-full bg-[#7c3aed]"/></div>
        <span className="font-mono text-[8px] tracking-[.3em] text-white/25">{c.label}</span>
        <span className="font-mono text-[8px] text-white/20">● LIVE</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-11 opacity-[.16]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
      <motion.div animate={{rotate:model==="cspm"||model==="identity"?360:0}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="absolute left-1/2 top-[54%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c3aed]/25">
        <div className="absolute inset-10 rounded-full border border-white/[0.08]"/>
        <div className="absolute inset-[78px] rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/[0.04]"/>
      </motion.div>
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div animate={{scale:[1,1.07,1]}} transition={{duration:3,repeat:Infinity}} className="mx-auto h-3 w-3 rounded-full bg-[#7c3aed] shadow-[0_0_35px_rgba(124,58,237,.8)]"/>
        <p className="mt-4 font-mono text-[9px] tracking-[.22em] text-white/45">{c.mode.toUpperCase()}</p>
      </div>
      {c.nodes.map((n,i)=>{
        const pos=[["12%","24%"],["72%","22%"],["16%","72%"],["74%","70%"]][i];
        return <motion.div key={n} animate={{y:[0,-8,0]}} transition={{duration:3+i*.6,repeat:Infinity}} style={{left:pos[0],top:pos[1]}} className="absolute min-w-[140px] rounded-2xl border border-white/[0.08] bg-black/80 p-4 backdrop-blur">
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]"/><span className="font-mono text-[9px] tracking-[.18em] text-white/45">{n}</span></div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.06]"><motion.div animate={{width:["18%","82%","42%"]}} transition={{duration:4+i,repeat:Infinity}} className="h-full bg-white/40"/></div>
        </motion.div>
      })}
      {model==="compliance" && <div className="absolute bottom-7 left-7 right-7 grid grid-cols-5 gap-2">{Array.from({length:20}).map((_,i)=><motion.i key={i} animate={{opacity:[.1,.7,.1]}} transition={{delay:i*.08,duration:2,repeat:Infinity}} className="h-4 rounded border border-white/[0.08] bg-[#7c3aed]/10"/>)}</div>}
      {model==="container" && <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">{[1,2,3,4].map(x=><motion.div key={x} animate={{y:[0,-5,0]}} transition={{delay:x*.2,duration:2,repeat:Infinity}} className="h-10 w-16 rounded-lg border border-[#7c3aed]/25 bg-black"/>)}</div>}
      {model==="kubernetes" && <div className="absolute bottom-7 left-1/2 grid -translate-x-1/2 grid-cols-3 gap-3">{Array.from({length:6}).map((_,i)=><motion.span key={i} animate={{scale:[1,1.15,1]}} transition={{delay:i*.2,duration:2.4,repeat:Infinity}} className="h-4 w-4 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/15"/>)}</div>}
    </div>
  );
}
