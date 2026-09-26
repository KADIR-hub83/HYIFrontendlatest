"use client";

import { motion } from "framer-motion";

const aiRequirements = [
  {
    id: "AI-01",
    title: "Enterprise knowledge",
    description:
      "AI applications require controlled access to the information that represents products, customers, operations, policies and organizational knowledge.",
  },
  {
    id: "AI-02",
    title: "Retrieval context",
    description:
      "Retrieval systems need well-structured sources, meaningful chunks, metadata and permissions so relevant context can be supplied to models.",
  },
  {
    id: "AI-03",
    title: "Semantic meaning",
    description:
      "Business concepts, entities and relationships help AI systems operate with organizational context rather than isolated technical fields.",
  },
  {
    id: "AI-04",
    title: "Access control",
    description:
      "AI should not become a mechanism for bypassing existing information boundaries. Permissions need to remain enforceable through retrieval and application layers.",
  },
  {
    id: "AI-05",
    title: "Freshness",
    description:
      "Time-sensitive use cases require pipelines and retrieval systems capable of making sufficiently current information available.",
  },
  {
    id: "AI-06",
    title: "Traceability",
    description:
      "Teams benefit from understanding where retrieved information originated and how it moved through the data and AI architecture.",
  },
];

export default function AIReadyData() {
  return (
    <section className="bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="border-b border-white/[0.08] pb-16">
          <div className="flex justify-between">
            <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
              05 / AI-READY DATA
            </p>

            <span className="font-mono text-[12px] tracking-[0.2em] mt-10 text-white/[0.6]">
              DATA → CONTEXT → AI
            </span>
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
            }}
            className="mt-16 max-w-[1300px] text-[clamp(4rem,8vw,8.6rem)] font-semibold leading-[0.85] tracking-[-0.08em]"
          >
            AI is only as useful
            <span className="text-white/[0.22]">
              {" "}
              as the context it can reach.
            </span>
          </motion.h2>
        </div>

        <div className=" grid lg:grid-cols-3">
          {aiRequirements.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="min-h-[160px] border border-white/[0.08] p-4"
            >
              <span className="font-mono text-[12px] tracking-[0.22em] text-white/[0.6]">
                {item.id}
              </span>

              <h3 className="mt-10 text-3xl font-extrabold tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-7 text-[22px] leading-7 text-white/[0.37]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}