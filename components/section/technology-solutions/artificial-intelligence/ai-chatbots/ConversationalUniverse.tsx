"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit,
  Database,
  Globe2,
  MessageCircle,
  Mic2,
  Workflow,
} from "lucide-react";

const orbitItems = [
  { label: "CONTEXT", icon: BrainCircuit, position: "left-[4%] top-[30%]" },
  { label: "VOICE", icon: Mic2, position: "right-[5%] top-[27%]" },
  { label: "KNOWLEDGE", icon: Database, position: "left-[8%] bottom-[25%]" },
  { label: "ACTIONS", icon: Workflow, position: "right-[8%] bottom-[24%]" },
];

export default function ConversationalUniverse() {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const smoothX = useSpring(rx, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(ry, { stiffness: 70, damping: 18 });

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ry.set(x * 7);
    rx.set(y * -5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className="relative mx-auto h-[570px] w-full max-w-[1200px] md:h-[680px]"
      style={{ perspective: 1200 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.13] blur-[120px]" />

      {/* orbital rings */}
      {[520, 420, 320].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{
            duration: 35 + i * 13,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-purple-300/[0.1]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <div className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_18px_#c084fc]" />
        </motion.div>
      ))}

      <motion.div
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {/* main core */}
        <div className="absolute left-1/2 top-1/2 flex h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/20 bg-[#08060d]/90 shadow-[0_0_100px_rgba(139,92,246,.28)] backdrop-blur-3xl md:h-[290px] md:w-[290px]">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 35px rgba(168,85,247,.2)",
                "0 0 90px rgba(168,85,247,.5)",
                "0 0 35px rgba(168,85,247,.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex h-[74%] w-[74%] flex-col items-center justify-center rounded-full border border-white/[0.07] bg-[radial-gradient(circle_at_40%_30%,rgba(168,85,247,.2),rgba(5,4,8,.95)_60%)]"
          >
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/30">
              HYI.AI
            </span>

            <MessageCircle className="my-4 text-purple-300" size={34} />

            <div className="text-center text-2xl font-medium">
              Conversation
              <span className="block text-purple-300">Core</span>
            </div>

            <div className="mt-5 flex gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-purple-300"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {orbitItems.map(({ label, icon: Icon, position }, i) => (
          <motion.div
            key={label}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${position} hidden md:flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-2xl`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
              <Icon size={14} className="text-purple-300" />
            </div>
            <span className="text-[9px] tracking-[0.25em] text-white/50">
              {label}
            </span>
          </motion.div>
        ))}

        {/* messages */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[4%] top-[49%] max-w-[230px] rounded-[22px_22px_22px_5px] border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-2xl md:left-[13%]"
        >
          <p className="text-xs leading-6 text-white/65">
            Can you check my latest order?
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute right-[3%] top-[48%] max-w-[255px] rounded-[22px_22px_5px_22px] border border-purple-400/20 bg-purple-500/10 px-5 py-4 backdrop-blur-2xl md:right-[10%]"
        >
          <p className="text-xs leading-6 text-purple-100/75">
            Your order is in transit and arrives tomorrow.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-white/25">
        <Globe2 size={12} />
        Real-time conversational intelligence
      </div>
    </div>
  );
}