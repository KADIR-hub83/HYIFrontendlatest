"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CloudService } from "./cloudServices";

export default function CloudProcess({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9675ed]">
            03 / ENGINEERING PROCESS
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            How {service.title}
            <span className="block text-[#7046e6]"> is engineered.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-[1050px]">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-[#7046e6] via-[#7046e6]/20 to-transparent" />

          <div className="space-y-5">
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className="relative grid grid-cols-[56px_1fr] gap-5"
              >
                <motion.div
                  whileInView={{
                    boxShadow: [
                      "0 0 0 rgba(112,70,230,0)",
                      "0 0 35px rgba(112,70,230,.3)",
                      "0 0 0 rgba(112,70,230,0)",
                    ],
                  }}
                  transition={{ duration: 2 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#7046e6]/35 bg-[#08060e]"
                >
                 <span className="font-mono text-[11px] text-[#a083ef]">
        {item.step}
      </span>
                </motion.div>

<div className="rounded-[24px] border border-white/[0.07] bg-[#050505] p-7">
  <div className="grid items-center gap-6 md:grid-cols-[1fr_220px]">
    
    {/* LEFT */}
    <div>
      <h3 className="text-xl font-medium md:text-2xl">
        {item.title}
      </h3>

      <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-white/45">
        {item.description}
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 rounded-full border border-[#7046e6]/15 bg-[#7046e6]/[0.05] px-4 py-2">
        <CheckCircle2
          size={13}
          className="text-[#9878ef]"
        />

        <span className="font-mono text-[10px] text-white/30">
          {item.output}
        </span>
      </div>
    </div>

  </div>
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}