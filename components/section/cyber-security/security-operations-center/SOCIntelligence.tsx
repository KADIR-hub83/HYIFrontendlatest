"use client";

import { motion } from "framer-motion";
import type { SOCService } from "./socServices";

export default function SOCIntelligence({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section className="relative overflow-hidden  bg-black py-10">
      <div className="absolute right-[-100px] top-[15%] h-[300px] w-[300px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
        

          <h2 className=" hyi-h1 hyi-white">
            Security context comes from connecting signals.
          </h2>

          <p className="mx-auto mt-2 hyi-p hyi-blue font-bold">
            Individual events become more useful when they are interpreted
            alongside identities, assets, behaviors and surrounding activity.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {service.intelligence.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6"
            >
          

              <h3 className=" hyi-h3 hyi-white">
                {item.label}
              </h3>

              <p className="mt-2 hyi-p">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}