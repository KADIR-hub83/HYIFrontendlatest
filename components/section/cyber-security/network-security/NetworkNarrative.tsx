"use client";
 import {motion} from "framer-motion"; 
 import type {NetworkSecurityPage} from "./networkSecurityData"; 
 export default function NetworkNarrative({page}:{page:NetworkSecurityPage}){return <section className=" bg-black px-5 py-10 md:px-8">
    
    <div className="mx-auto grid max-w-[1350px] text-center">
        {/* <p className="font-mono text-[8px] tracking-[.28em] text-white/25">{page.narrative.kicker}</p> */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <h2 className="hyi-h1 hyi-white">
            {page.narrative.heading}
            </h2>
            <p className="mt-3 hyi-p">{page.narrative.body}</p>
            <p className="mt-5 border-l border-[#7c3aed]/60 pl-5 hyi-p hyi-blue font-bold">
            {page.narrative.quote}
            </p>
            </motion.div>
            </div>
            </section>}
