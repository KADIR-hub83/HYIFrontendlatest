"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Reduce isolated data silos",
  "Create reusable platform datasets",
  "Standardize data access patterns",
  "Support cross-functional consumption",
];

export default function UnifiedDataSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28">
      <div className="absolute -left-[300px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#7046e6]/15 blur-[180px]" />

      <div className="mx-auto grid max-w-[1350px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[650px] overflow-hidden rounded-[38px] border border-white/[0.08]"
        >
          <Image
            src="/images/data-platforms/data-center.webp"
            alt="Unified enterprise data platform"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#390b44]/20" />

          <div className="absolute bottom-7 left-7 right-7 rounded-[22px] border border-white/[0.09] bg-black/60 p-6 backdrop-blur-xl">
            <p className="font-mono text-[6px] tracking-[0.25em] text-[#b49af4]">
              CONNECTED FOUNDATION
            </p>

            <p className="mt-2 max-w-[500px] hyi-h3">
              A shared platform provides a consistent place for data to become
              discoverable, reusable and available to downstream systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
      

          <h2 className="hyi-h1 hyi-white">
            From fragmented
            <span className="block hyi-blue">
              to connected.
            </span>
          </h2>

          <p className="mt-2 max-w-[580px] hyi-p">
            Enterprise information often lives across operational databases,
            SaaS applications, cloud services and departmental systems. A
            unified platform creates intentional connections between these
            sources.
          </p>

          <div className="mt-4 space-y-3 mx-auto">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[16px] border border-white/[0.07] bg-white/[0.025] px-5 py-4"
              >
                <CheckCircle2
                  size={13}
                  className="shrink-0 text-[#8f6ce8]"
                />

                <span className="hyi-h3">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}