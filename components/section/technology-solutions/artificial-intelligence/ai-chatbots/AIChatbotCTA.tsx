"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Link, MessageCircle } from "lucide-react";

export default function AIChatbotCTA() {
  return (
    <section
      id="chatbot-cta"
      className="relative isolate overflow-hidden bg-[#030305] px-5 py-36 md:py-56"
    >
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.13] blur-[180px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/[0.08]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.08]"
      />

      <div className="relative mx-auto max-w-[1150px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/10 shadow-[0_0_60px_rgba(168,85,247,.25)]"
        >
          <MessageCircle size={23} className="text-purple-200" />
        </motion.div>

        <p className="text-[10px] uppercase tracking-[0.45em] text-purple-300/50">
          Your next interface is a conversation
        </p>

        <h2 className="mt-8 text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
          Turn conversation
          <span className="block bg-gradient-to-r from-[#e1c2ff] via-[#a75dff] to-[#754bff] bg-clip-text text-transparent">
            into intelligence.
          </span>
        </h2>

        <p className="mx-auto mt-9 max-w-[680px] text-base leading-8 text-white/50">
          Design and deploy enterprise conversational AI that understands your
          customers, connects your knowledge and securely acts across your
          business.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="group flex h-14 items-center gap-3 rounded-full bg-white px-8 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Build With HYI.AI
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/technology-solutions/artificial-intelligence"
            className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm text-white/60 backdrop-blur-xl transition hover:border-purple-400/30 hover:text-white"
          >
            Explore AI Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}