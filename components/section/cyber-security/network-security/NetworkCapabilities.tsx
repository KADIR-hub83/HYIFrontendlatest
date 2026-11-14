"use client";

import { motion } from "framer-motion";

import type { NetworkSecurityPage } from "./networkSecurityData";

interface NetworkCapabilitiesProps {
  page: NetworkSecurityPage;
}

export default function NetworkCapabilities({
  page,
}: NetworkCapabilitiesProps) {
  const items = page.capabilities;

  return (
    <section
      id="capabilities"
      className=" bg-black px-5  md:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        

        <div className=" grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.04,
              }}
              className="bg-[#050505] p-7"
            >
             

              <h3 className="hyi-h3 hyi-white">
                {item.title}
              </h3>

              <p className="mt-2 hyi-p">
                {item.description}
              </p>

              <p className="mt-2 hyi-p hyi-blue font-extralight">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}