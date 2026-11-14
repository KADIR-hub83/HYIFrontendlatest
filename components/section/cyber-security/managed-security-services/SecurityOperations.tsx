"use client";

import { motion } from "framer-motion";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityOperations({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-8 text-center">
  

          <h2 className="hyi-h1 hyi-white">
            Continuous operational loop
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {service.operations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              
              whileHover={{
                  backgroundColor: "white",
                  color:"black"
                }}
              className="relative min-h-[70px] bg-black  p-7 "

            >
           

              <h3 className=" text-[22px] font-bold max-md:text-[18px] ">
                {item.title}
              </h3>

              <p className="mt-2 text-[18px] max-md:text-[14px] ">
                {item.description}
              </p>

              <motion.div
                animate={{ width: ["0%", "75%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat:Infinity ,
                  delay: index * 0.8,
                }}
                className="absolute bottom-0 left-0 h-px bg-[#9878ef]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}