"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Fingerprint,
  LockKeyhole,
  Radar,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Radar,
    title: "Threat Detection",
    description:
      "Continuously identify suspicious activity, anomalies and emerging threats across your digital environment.",
    background: "/Card-bg-05.webp",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Identity Security",
    description:
      "Protect identities, access and critical resources with modern authentication and zero-trust controls.",
    background: "/Card-bg-05.webp",
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "Cloud & Data Security",
    description:
      "Secure cloud workloads, applications and sensitive business data across modern infrastructure.",
    background: "/Card-bg-05.webp",
  },
  {
    number: "04",
    icon: Activity,
    title: "Incident Response",
    description:
      "Detect, investigate and respond to security incidents before they become business disruptions.",
    background: "/Card-bg-05.webp",
  },
];

const threats = [
  {
    title: "Suspicious login detected",
    source: "Identity layer",
    status: "Contained",
  },
  {
    title: "Endpoint anomaly",
    source: "Device • WS-028",
    status: "Investigating",
  },
  {
    title: "Network policy event",
    source: "Cloud perimeter",
    status: "Resolved",
  },
];

export default function CybersecurityLanding() {
  return (
    <section
      className="
        relative flex  w-full items-center
        overflow-hidden bg-black text-white 
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* main purple glow */}
{/* 
        <div
          className="
            absolute left-[58%] top-[48%]
            h-[620px] w-[620px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#6f32ff]/[0.10]
            blur-[150px]
          "
        /> */}

        {/* blue secondary glow */}

        {/* <div
          className="
            absolute -right-[180px] top-[15%]
            h-[500px] w-[500px]
            rounded-full
            bg-[#253bff]/[0.07]
            blur-[160px]
          "
        /> */}

        {/* subtle grid */}

        <div
          className="
            absolute inset-0 opacity-[0.16]
            [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:72px_72px]
            [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_80%,transparent)]
          "
        />

        {/* bottom glow */}

        <div
          className="
            absolute bottom-[-180px] left-1/2
            h-[320px] w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[#6718d8]/[0.10]
            blur-[130px]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1450px]
          px-5 
          py-10
          sm:px-10
          xl:px-20
        "
      >
        {/* =========================================================
            TOP AREA
        ========================================================= */}

        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[0.88fr_1.12fr]
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[620px]"
          >
            <h2
              className="
                max-w-[650px]
                hyi-h1 hyi-white
              "
            >
             Security Built for What Comes Next 
              <br />
              <span
                className="
                 
                "
              >
                Protection Engineered for an Evolving Digital World.
              </span>
            </h2>

            {/* paragraph */}

            <p
              className="
                mt-6 max-w-[570px]
               hyi-p hyi-gray
              "
            >
             Stay Ahead Of Evolving Cyber Threats With Intelligent, Resilient, And Future-Ready Security Solutions Designed For Today’s Complex Digital World. We help Organizations Protect Critical Systems, Sensitive Data,
             
           
            </p>
            <p className="mt-6 max-w-[570px]
               hyi-p hyi-gray">
               Cloud Environments, Applications, And Digital Infrastructure Through A Security-First Approach Built Around Prevention, Detection, Response, And Continuous Improvement.
            </p>

            {/* buttons */}



            {/* small metrics */}


          </motion.div>

          {/* =====================================================
              RIGHT SECURITY DASHBOARD
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              relative
              rounded-[28px]
              border border-white/[0.09]
              bg-[#08080b]/90
              p-2
              shadow-[0_30px_100px_rgba(75,34,180,0.14)]
            "
          >
            {/* dashboard outer glow */}

            <div
              className="
                pointer-events-none
                absolute -inset-[1px]
                -z-10 rounded-[29px]
                bg-gradient-to-br
                from-[#7653ff]/25
                via-transparent
                to-[#2921ff]/10
                blur-[1px]
              "
            />

            <div
              className="
                overflow-hidden
                rounded-[22px]
                border border-white/[0.06]
                bg-[#050507]
              "
            >
              {/* dashboard header */}

              <div
                className="
                  flex items-center justify-between
                  border-b border-white/[0.06]
                  px-5 py-3.5
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-lg border border-white/[0.08]
                      bg-white/[0.035]
                    "
                  >
                    <ShieldCheck size={15} className="text-[#9a78ff]" />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold hyi-white">
                      HYI Security Operations
                    </p>

                    <p className="mt-0.5 text-[8px] text-white/85">
                      Command Center
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-emerald-400/10
                    bg-emerald-400/[0.04]
                    px-3 py-1.5
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      animate-pulse rounded-full
                      bg-emerald-400
                    "
                  />

                  <span className="text-[8px] text-emerald-300/70">
                    Protection active
                  </span>
                </div>
              </div>

              {/* dashboard body */}

              <div
                className="
                  grid
                  md:grid-cols-[1.05fr_.95fr]
                "
              >
                {/* ===============================================
                    RADAR
                =============================================== */}

                <div
                  className="
                    relative min-h-[315px]
                    overflow-hidden
                    border-b border-white/[0.06]
                    p-5
                    md:border-b-0
                    md:border-r
                  "
                >
                  <div className="relative z-10">
                    <p
                      className="
                        text-[8px]
                        uppercase tracking-[0.18em]
                        text-white/70
                      "
                    >
                      Live Threat Map
                    </p>

                    <div className="mt-1.5 flex items-end gap-2">
                      <p className="text-[20px] font-bold hyi-white">98.7%</p>

                    
                    </div>
                  </div>

                  {/* radar */}

                  <div
                    className="
                      absolute bottom-[5px]
                      left-1/2
                      h-[280px] w-[280px]
                      -translate-x-1/2
                    "
                  >
                    {[100, 76, 52, 28].map((size) => (
                      <div
                        key={size}
                        style={{
                          width: `${size}%`,
                          height: `${size}%`,
                        }}
                        className="
                          absolute left-1/2 top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          border border-[#855fff]/[0.16]
                        "
                      />
                    ))}

                    <div
                      className="
                        absolute left-1/2 top-0
                        h-full w-px
                        bg-[#855fff]/10
                      "
                    />

                    <div
                      className="
                        absolute left-0 top-1/2
                        h-px w-full
                        bg-[#855fff]/10
                      "
                    />

                    {/* rotating scanner */}

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute left-1/2 top-1/2
                        h-[140px] w-[140px]
                        origin-top-left
                        border-l
                        border-[#a185ff]/50
                        bg-gradient-to-r
                        from-[#754aff]/[0.18]
                        to-transparent
                      "
                    />

                    {/* center */}

                    <div
                      className="
                        absolute left-1/2 top-1/2
                        flex h-11 w-11
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center justify-center
                        rounded-full
                        border border-[#9c7cff]/30
                        bg-[#0d0918]
                        shadow-[0_0_40px_rgba(119,75,255,.28)]
                      "
                    >
                      <ShieldCheck size={18} className="text-[#9b7aff]" />
                    </div>

                    {/* threat points */}

                    {[
                      ["24%", "37%"],
                      ["67%", "28%"],
                      ["73%", "62%"],
                      ["36%", "70%"],
                      ["55%", "42%"],
                    ].map(([left, top], index) => (
                      <motion.div
                        key={index}
                        style={{ left, top }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.3, 0.8],
                        }}
                        transition={{
                          duration: 1.8 + index * 0.3,
                          repeat: Infinity,
                        }}
                        className="
                          absolute h-[5px] w-[5px]
                          rounded-full
                          bg-[#a88aff]
                          shadow-[0_0_12px_#875eff]
                        "
                      />
                    ))}
                  </div>
                </div>

                {/* ===============================================
                    THREAT LIST
                =============================================== */}

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="
                          text-[8px]
                          uppercase tracking-[0.18em]
                          text-white/70
                        "
                      >
                        Security Events
                      </p>

                      <p className="mt-1.5 text-[14px] font-bold">
                        Recent activity
                      </p>
                    </div>

                    <Eye size={15} className="text-white/70" />
                  </div>

                  <div className="mt-5 space-y-2">
                    {threats.map((threat, index) => (
                      <motion.div
                        key={threat.title}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.35 + index * 0.12,
                        }}
                        className="
                          group flex items-center gap-3
                          rounded-xl
                          border border-white/[0.055]
                          bg-white/[0.025]
                          p-3
                          transition
                          hover:border-[#7958ff]/20
                          hover:bg-[#7652ff]/[0.04]
                        "
                      >
                        <div
                          className="
                            flex h-8 w-8
                            shrink-0 items-center justify-center
                            rounded-lg
                            border border-white/[0.06]
                            bg-black/40
                          "
                        >
                          {index === 0 ? (
                            <TriangleAlert
                              size={13}
                              className="text-[#aa8cff]"
                            />
                          ) : index === 1 ? (
                            <Radar size={13} className="text-[#aa8cff]" />
                          ) : (
                            <CheckCircle2
                              size={13}
                              className="text-emerald-400/70"
                            />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              truncate text-[12px]
                              font-bold hyi-white
                            "
                          >
                            {threat.title}
                          </p>

                          <p className="mt-1 text-[10px] text-white/55">
                            {threat.source}
                          </p>
                        </div>

                        <span
                          className="
                            text-[7px]
                            text-white/25
                          "
                        >
                          {threat.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* score */}

                  <div
                    className="
                      mt-4 rounded-xl
                      border border-[#7658ff]/10
                      bg-[#7658ff]/[0.035]
                      p-3
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-white/35">
                        Security posture
                      </span>

                      <span className="text-[8px] text-[#a88cff]">
                        Excellent
                      </span>
                    </div>

                    <div
                      className="
                        mt-2 h-[3px]
                        overflow-hidden
                        rounded-full bg-white/[0.06]
                      "
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.4,
                          delay: 0.4,
                        }}
                        className="
                          h-full rounded-full
                          bg-gradient-to-r
                          from-[#6339e8]
                          to-[#a27cff]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating shield */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -right-5 -top-5
                hidden h-12 w-12
                items-center justify-center
                rounded-2xl
                border border-white/10
                bg-[#0c0913]/90
                shadow-[0_15px_40px_rgba(87,48,200,.25)]
                backdrop-blur-xl
                lg:flex
              "
            >
              <ShieldCheck size={19} className="text-[#a486ff]" />
            </motion.div>
          </motion.div>
        </div>




{/* =========================================================
    BOTTOM CAPABILITY CARDS
========================================================= */}

<div
  className="
    mt-10 grid gap-3
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
  {capabilities.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -6,
        }}
        className="
          group relative
          min-h-[200px]
          overflow-hidden
          rounded-[18px]
          border border-white/[0.08]
          transition-all
          duration-500
          hover:border-[#8d70ff]/30
          hover:shadow-[0_20px_60px_rgba(80,50,180,0.12)]
        "
      >
        {/* ================================
            CARD BACKGROUND IMAGE
        ================================= */}

        <img
          src={item.background}
          alt=""
          className="
            pointer-events-none
            absolute inset-0
            h-full w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.04]
          "
        />

        {/* ================================
            DARK OVERLAY
        ================================= */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-black/30
          "
        />

        {/* Bottom dark gradient for text readability */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-black/5
            via-[#050509]/25
            to-[#050509]/90
          "
        />

        {/* Extra subtle purple hover glow */}

        <div
          className="
            pointer-events-none
            absolute -right-20 -top-20
            h-[180px] w-[180px]
            rounded-full
            bg-[#7958ff]/0
            blur-[55px]
            transition-all
            duration-500
            group-hover:bg-[#7958ff]/10
          "
        />

        {/* ================================
            CONTENT
        ================================= */}

        <div
          className="
            relative z-10
            flex min-h-[200px]
            flex-col
            p-4
          "
        >
          {/* Icon */}

          <div className="flex items-start justify-between">
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                border border-white/[0.09]
                bg-black/20
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:border-[#9c80ff]/25
                group-hover:bg-[#7658ff]/[0.08]
              "
            >
              <Icon
                size={15}
                className="
                  text-white/70
                  transition-colors
                  duration-300
                  group-hover:text-[#b39cff]
                "
              />
            </div>

         
          </div>

          {/* Push content toward bottom */}

          <div className="mt-auto pt-10">
            <h3
              className="
                text-[18px]
                font-bold
                tracking-[-0.02em]
                text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                max-w-[280px]
                text-[14px]
                leading-[1.55]
                text-white/55
                transition-colors
                duration-300
                group-hover:text-white/70
              "
            >
              {item.description}
            </p>
          </div>
        </div>

        {/* Bottom highlight */}

        <div
          className="
            pointer-events-none
            absolute bottom-0 left-1/2
            h-px w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#8b6aff]/0
            to-transparent
            transition-all
            duration-500
            group-hover:via-[#8b6aff]/50
          "
        />
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}
