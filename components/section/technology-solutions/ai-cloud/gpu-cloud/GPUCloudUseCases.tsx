"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  FlaskConical,
  ImageIcon,
  Layers3,
  MessageSquareText,
} from "lucide-react";

const useCases = [
  {
    Icon: BrainCircuit,
    title: "Large-model training",
    text: "Create distributed accelerator environments for compute-intensive training jobs that require coordinated workers, high-volume data access and specialized infrastructure.",
  },
  {
    Icon: FlaskConical,
    title: "Model fine-tuning",
    text: "Provide flexible GPU capacity for adapting foundation models to domain-specific datasets, tasks and enterprise AI requirements.",
  },
  {
    Icon: MessageSquareText,
    title: "Generative AI inference",
    text: "Operate GPU-backed serving environments for language and generative AI applications that require responsive model execution.",
  },
  {
    Icon: ImageIcon,
    title: "Computer vision",
    text: "Support accelerated image and video workloads across model training, batch processing and production inference pipelines.",
  },
  {
    Icon: Layers3,
    title: "Embedding workloads",
    text: "Run high-volume embedding generation and other parallel AI processing tasks through managed accelerator pools.",
  },
  {
    Icon: Cpu,
    title: "AI research environments",
    text: "Give engineering and research teams access to controlled GPU environments for experimentation, evaluation and new model development.",
  },
];

export default function GPUCloudUseCases() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
         

          <h2 className="hyi-h1 hyi-white ">
            Workloads that need
            <span className="text-[#7653df]"> accelerated compute.</span>
          </h2>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -7 }}
              className="group  rounded-[28px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={16} className="text-[#a98cf4]" />
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-white/[0.2] transition group-hover:text-[#a98cf4]"
                />
              </div>


              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

              <p className="mt-2 hyi-p">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}