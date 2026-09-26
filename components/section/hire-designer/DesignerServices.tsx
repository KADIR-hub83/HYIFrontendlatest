"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Component,
  Layers3,
  PenTool,
  Smartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Product Design",
    text: "End-to-end product thinking from discovery and flows to polished interfaces.",
    icon: PenTool,
    bg: "/Card-bg-01.webp",
    className: "lg:row-span-2",
  },
  {
    number: "02",
    title: "UX / UI Design",
    text: "Intuitive interfaces grounded in user behaviour and business objectives.",
    icon: Smartphone,
    bg: "/Card-bg-02.webp",
    className: "",
  },
  {
    number: "03",
    title: "Design Systems",
    text: "Scalable foundations that keep your product consistent as teams grow.",
    icon: Component,
    bg: "/Card-bg-04.webp",
    className: "",
  },
  {
    number: "04",
    title: "Product Strategy",
    text: "Translate complex ideas into clear product directions and experiences.",
    icon: Layers3,
    bg: "/Card-bg-03.webp",
    className: "lg:col-span-2",
  },
];

export default function DesignerServices() {
  return (
    <section className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">
              Capabilities
            </span>

            <h2 className="mt-5 max-w-[700px] text-[clamp(42px,5.5vw,82px)] font-medium leading-[0.95] tracking-[-0.06em]">
              Design talent for every stage of your product.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] text-[13px] leading-6 text-white/40">
              Build a design function without months of recruiting. Access
              specialists across product strategy, UX, interface systems and
              visual design.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[310px] gap-4 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#09090b] ${service.className}`}
              >
                <img
                  src={service.bg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/70" />

                <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 backdrop-blur-md">
                      <Icon size={18} className="text-white/70" />
                    </div>

                    <span className="font-mono text-[9px] text-white/25">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[25px] font-medium tracking-[-0.03em]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[420px] text-[12px] leading-6 text-white/45">
                      {service.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] text-white/40 transition group-hover:text-white">
                      Explore capability
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}