"use client"; import {motion} from "framer-motion"; import {ArrowDown,ArrowRight,ShieldCheck} from "lucide-react"; import type {NetworkSecurityPage} from "./networkSecurityData"; import NetworkWorldMap from "./NetworkWorldMap";
export default function NetworkHero({page}:{page:NetworkSecurityPage}){return <section className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 pt-30 max-md:pt-20 md:px-8">
    
    <div className="absolute inset-0 opacity-[.08]" style={{backgroundImage:"radial-gradient(circle,rgba(255,255,255,.5) 1px,transparent 1px)",backgroundSize:"38px 38px"}}/>
    
    <motion.i animate={{scale:[1,1.2,1]}} transition={{duration:6,repeat:Infinity}} className="absolute left-[7%] top-48 h-28 w-28 rounded-full bg-[#7c3aed]/20"/>
    <div className="relative mx-auto max-w-[1350px]">
        <div className="mx-auto max-w-[900px] text-center">
           
            
            <h1 className=" hyi-h1 hyi-white">{page.title}

            </h1>
            
            <p className="mx-auto mt-2 hyi-p hyi-blue font-bold">{page.accent}</p>
            <p className="mx-auto mt-2 hyi-p max-w-3xl ">{page.description}</p>
            <div className="mt-7 flex justify-center gap-3">
               
                
        </div>
        </div>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9}} className="">
        <NetworkWorldMap variant={page.model}/>
        </motion.div>
        {/* <div className="mx-auto  grid max-w-[900px] grid-cols-3 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06]">{page.stats.map(x=>
        
        <div key={x.label} className="p-4 text-center">
            <p className="text-[13px] text-white/70">{x.value}</p>
        <p className="mt-1 font-mono text-[7px] tracking-[.2em] text-white/20">{x.label}</p>
        </div>
    
    )}</div> */}
        </div>
        </section>}
