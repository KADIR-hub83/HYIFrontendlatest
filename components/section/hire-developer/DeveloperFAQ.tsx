"use client";

import {
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Code2,
  MessageCircle,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  UsersRound,
  Zap,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type FAQ = {
  question: string;
  answer: string;
  tag?: string;
};

type FAQItemProps = {
  faq: FAQ;
  index: number;
  active: boolean;
  onToggle: () => void;
};

/* =============================================================================
   CONFIG
============================================================================= */

const easeOut: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

/* =============================================================================
   FAQ DATA
============================================================================= */

const faqs: FAQ[] = [
  {
    question:
      "What types of developers can I hire through HYI?",
    answer:
      "You can explore talent across frontend, backend, full-stack, mobile, AI and machine learning, data engineering, cloud, DevOps, security, QA, product design and several specialized technology roles.",
    tag: "Talent",
  },

  {
    question:
      "Can I hire only one developer?",
    answer:
      "Yes. The engagement can be structured around an individual developer, an extended engineering team or a defined project depending on your requirements.",
    tag: "Engagement",
  },

  {
    question:
      "Can HYI help me build a complete engineering team?",
    answer:
      "Yes. You can combine complementary roles such as frontend, backend, mobile, QA, DevOps, data and product specialists to support a broader product roadmap.",
    tag: "Teams",
  },

  {
    question:
      "How do I choose the right technology specialist?",
    answer:
      "Start with the outcome you need, your current technology stack and the responsibilities the person will own. HYI can then help narrow the relevant engineering discipline and role.",
    tag: "Matching",
  },

  {
    question:
      "Can developers work with our existing tools and team?",
    answer:
      "The engagement can be structured around collaboration with your existing engineering workflow, communication tools and development processes.",
    tag: "Workflow",
  },
];

/* =============================================================================
   REVEAL COMPONENT
============================================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: easeOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =============================================================================
   SECTION LABEL
============================================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#9B7BFF]">
        {number}
      </span>

      <span className="h-px w-7 bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6]/10" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/30">
        {children}
      </span>
    </div>
  );
}

/* =============================================================================
   BACKGROUND
============================================================================= */

function FAQBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LEFT PURPLE GLOW */}

      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[300px]
          top-[15%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#7C3AED]/20
          blur-[190px]
        "
      />

      {/* RIGHT GLOW */}

      <motion.div
        animate={{
          opacity: [0.04, 0.11, 0.04],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[350px]
          bottom-[-100px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#6D28D9]/15
          blur-[190px]
        "
      />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",

          backgroundSize: "70px 70px",

          maskImage:
            "radial-gradient(circle at 50% 50%, black, transparent 78%)",

          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black, transparent 78%)",
        }}
      />

      {/* TOP LINE */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-[85%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />

      {/* BOTTOM LINE */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[85%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#8B5CF6]/20
          to-transparent
        "
      />
    </div>
  );
}

/* =============================================================================
   STATUS CARD
============================================================================= */

function StatusCard() {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        relative
        mt-5
        max-w-[430px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.07]
        bg-white/[0.022]
        p-5
        backdrop-blur-xl
      "
    >
      {/* GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-14
          -top-14
          h-[150px]
          w-[150px]
          rounded-full
          bg-[#8B5CF6]/0
          blur-[55px]
          transition-all
          duration-500
          group-hover:bg-[#8B5CF6]/10
        "
      />

      {/* TOP */}

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-[#8B5CF6]/15
              bg-[#8B5CF6]/[0.07]
            "
          >
            <Terminal
              size={15}
              className="text-[#A78BFA]"
            />
          </div>

          <div>
            <p className="text-[13px] font-medium text-white/55">
              HYI Talent Network
            </p>

            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/17">
              Engineering availability
            </p>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-emerald-400/10
            bg-emerald-400/[0.04]
            px-2.5
            py-1.5
          "
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-30
              "
            />

            <span
              className="
                relative
                inline-flex
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
              "
            />
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.13em] text-emerald-400/70">
            Online
          </span>
        </div>
      </div>

      {/* DIVIDER */}

      <div className="my-5 h-px bg-white/[0.055]" />

      {/* ITEMS */}

      <div className="relative grid grid-cols-3 gap-2">
        {[
          {
            icon: UsersRound,
            value: "40+",
            label: "Roles",
          },
          {
            icon: Zap,
            value: "48h",
            label: "Matching",
          },
          {
            icon: ShieldCheck,
            value: "Vetted",
            label: "Talent",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-xl
                border
                border-white/[0.05]
                bg-black/10
                px-3
                py-3
              "
            >
              <Icon
                size={18}
                className="text-[#9B7BFF]/65"
              />

              <p className="mt-3 text-[15px] font-semibold text-white/65">
                {item.value}
              </p>

              <p className="mt-1 text-[13px] uppercase tracking-[0.12em] text-white/17">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* STATUS */}

      <div
        className="
          relative
          mt-4
          flex
          items-center
          gap-2
          font-mono
          text-[12px]
          text-white/20
        "
      >
        <CheckCircle2
          size={10}
          className="text-emerald-400/60"
        />

        Ready to match your requirement
      </div>
    </motion.div>
  );
}

/* =============================================================================
   FAQ ITEM
============================================================================= */

function FAQItem({
  faq,
  index,
  active,
  onToggle,
}: FAQItemProps) {
  const cardRef =
    useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
  });

  const handleMouseMove = (
    event: ReactMouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) {
      return;
    }

    const rect =
      cardRef.current.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left
    );

    mouseY.set(
      event.clientY - rect.top
    );
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      animate={{
        borderColor: active
          ? "rgba(139,92,246,.24)"
          : "rgba(255,255,255,.065)",

        backgroundColor: active
          ? "rgba(139,92,246,.035)"
          : "rgba(255,255,255,.012)",
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
      "
    >
      {/* =====================================================================
          CURSOR LIGHT
      ===================================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-0
          blur-[55px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          left: smoothX,
          top: smoothY,

          background:
            "radial-gradient(circle, rgba(139,92,246,.12), transparent 68%)",
        }}
      />

      {/* =====================================================================
          ACTIVE LEFT LINE
      ===================================================================== */}

      <motion.div
        animate={{
          height: active
            ? "55%"
            : "0%",
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          absolute
          left-0
          top-1/2
          w-[2px]
          -translate-y-1/2
          rounded-full
          bg-gradient-to-b
          from-transparent
          via-[#9B7BFF]
          to-transparent
        "
      />

      {/* =====================================================================
          BUTTON
      ===================================================================== */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={active}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          gap-4
          px-5
          py-5
          text-left
          sm:gap-5
          sm:px-6
          sm:py-6
          lg:px-7
        "
      >
        {/* NUMBER */}

        <motion.div
          animate={{
            color: active
              ? "#A78BFA"
              : "rgba(255,255,255,.18)",
          }}
          className="
            w-7
            shrink-0
            font-mono
            text-[9px]
          "
        >
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </motion.div>

        {/* QUESTION */}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <motion.span
              animate={{
                color: active
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,.57)",
              }}
              className="
                text-[13px]
                font-medium
                leading-6
                tracking-[-0.01em]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              {faq.question}
            </motion.span>

            {faq.tag && (
              <span
                className="
                  hidden
                  rounded-full
                  border
                  border-white/[0.055]
                  bg-white/[0.02]
                  px-2
                  py-1
                  font-mono
                  text-[6px]
                  uppercase
                  tracking-[0.15em]
                  text-white/16
                  sm:inline-flex
                "
              >
                {faq.tag}
              </span>
            )}
          </div>
        </div>

        {/* PLUS / ARROW */}

        <motion.div
          animate={{
            rotate: active ? 180 : 0,

            borderColor: active
              ? "rgba(139,92,246,.30)"
              : "rgba(255,255,255,.07)",

            backgroundColor: active
              ? "rgba(139,92,246,.09)"
              : "rgba(255,255,255,.015)",
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            text-white/30
            transition-colors
            group-hover:text-[#A78BFA]
          "
        >
          <ChevronDown size={13} />
        </motion.div>
      </button>

      {/* =====================================================================
          ANSWER
      ===================================================================== */}

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.42,
                ease: easeOut,
              },

              opacity: {
                duration: 0.25,
                delay: 0.08,
              },
            }}
            className="overflow-hidden"
          >
            <div
              className="
                relative
                z-10
                pb-6
                pl-16
                pr-6
                sm:pb-7
                sm:pl-[76px]
                sm:pr-16
                lg:pl-[80px]
              "
            >
              <div
                className="
                  mb-5
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#8B5CF6]/18
                  via-white/[0.04]
                  to-transparent
                "
              />

              <motion.p
                initial={{
                  y: 8,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.35,
                }}
                className="
                  max-w-[720px]
                  text-[12px]
                  leading-7
                  text-white/35
                  sm:text-[13px]
                "
              >
                {faq.answer}
              </motion.p>

              {/* ANSWER STATUS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.18,
                }}
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-white/14
                "
              >
                <CheckCircle2
                  size={9}
                  className="text-[#8B5CF6]/60"
                />

                HYI / Talent support
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          ACTIVE BOTTOM LIGHT
      ===================================================================== */}

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          width: active
            ? "60%"
            : "0%",
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#8B5CF6]/60
          to-transparent
        "
      />
    </motion.div>
  );
}

/* =============================================================================
   CONTACT CTA
============================================================================= */

function ContactCTA() {
  return (
    <motion.div
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
        duration: 0.7,
        ease: easeOut,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        relative
        mt-6
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.07]
        bg-gradient-to-r
        from-white/[0.018]
        via-[#8B5CF6]/[0.025]
        to-white/[0.018]
        p-5
        sm:p-6
      "
    >
      {/* GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-1/2
          h-[200px]
          w-[200px]
          -translate-y-1/2
          rounded-full
          bg-[#8B5CF6]/0
          blur-[60px]
          transition
          duration-500
          group-hover:bg-[#8B5CF6]/10
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#8B5CF6]/15
              bg-[#8B5CF6]/[0.06]
            "
          >
            <MessageCircle
              size={15}
              className="text-[#A78BFA]"
            />
          </div>

          <div>
            <p className="text-[12px] font-medium text-white/65">
              Still have a question?
            </p>

            <p className="mt-1.5 max-w-[450px] text-[10px] leading-5 text-white/25">
              Tell us what you&apos;re building and we can
              help you understand the talent you may need.
            </p>
          </div>
        </div>

        <Link
          href="/talk-to-our-expert"
          className="
            group/link
            inline-flex
            h-10
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white
            px-5
            text-[9px]
            font-semibold
            text-black
            transition-transform
            duration-300
            hover:scale-[1.025]
          "
        >
          Talk to an expert

          <ArrowUpRight
            size={11}
            className="
              transition-transform
              duration-300
              group-hover/link:-translate-y-0.5
              group-hover/link:translate-x-0.5
            "
          />
        </Link>
      </div>
    </motion.div>
  );
}

/* =============================================================================
   MAIN REUSABLE FAQ COMPONENT
============================================================================= */

export default function DeveloperFAQ() {
  const [openFAQ, setOpenFAQ] =
    useState<number | null>(0);

  const activeFAQNumber =
    openFAQ !== null
      ? openFAQ + 1
      : 0;

  const progress =
    openFAQ !== null
      ? ((openFAQ + 1) / faqs.length) *
        100
      : 0;

  return (
    <section
      id="faq"
      className="
        relative
        isolate
        overflow-hidden
        border-b
        border-white/[0.06]
        bg-[#070708]
        py-10
        text-white
      
      "
    >
      {/* =====================================================================
          BACKGROUND
      ===================================================================== */}

      <FAQBackground />

      {/* =====================================================================
          CONTAINER
      ===================================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.78fr_1.22fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =================================================================
              LEFT SIDE
          ================================================================= */}

          <div>
            <div className="lg:sticky lg:top-28">
              <Reveal>
               

                {/* HEADING */}

                <h2
                  className="
                    mt-3
                    max-w-[520px]
                    hyi-h1 hyi-white
                  "
                >
                  Everything before
                  <br />

                  <span
                    className="
                     
                    "
                  >
                    you start hiring.
                  </span>
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    max-w-[430px]
                    hyi-p hyi-gray
                   "
                >
                  Clear answers about finding, hiring and
                  working with technology talent through
                  HYI.
                </p>
              </Reveal>

              {/* =============================================================
                  STATUS CARD
              ============================================================= */}

              <Reveal delay={0.08}>
                <StatusCard />
              </Reveal>

              {/* =============================================================
                  FAQ PROGRESS
              ============================================================= */}

              <Reveal delay={0.13}>
                <div className="mt-8 max-w-[430px]">
                  <div className="flex items-center justify-between">
                   
                    <div className="font-mono text-[8px] text-white/18">
                      {String(
                        activeFAQNumber
                      ).padStart(2, "0")}
                      {" / "}
                      {String(
                        faqs.length
                      ).padStart(2, "0")}
                    </div>
                  </div>

                  <div
                    className="
                      relative
                      mt-3
                      h-px
                      overflow-hidden
                      bg-white/[0.055]
                    "
                  >
                    <motion.div
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: easeOut,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        bg-gradient-to-r
                        from-[#7C3AED]
                        to-[#A78BFA]
                      "
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* =================================================================
              RIGHT SIDE
          ================================================================= */}

          <div>
            <Reveal delay={0.08}>
              {/* TOP META */}

        

              {/* =============================================================
                  FAQ LIST
              ============================================================= */}

              <div className="space-y-2.5">
                {faqs.map(
                  (faq, index) => (
                    <FAQItem
                      key={faq.question}
                      faq={faq}
                      index={index}
                      active={
                        openFAQ === index
                      }
                      onToggle={() =>
                        setOpenFAQ(
                          openFAQ === index
                            ? null
                            : index
                        )
                      }
                    />
                  )
                )}
              </div>

              {/* =============================================================
                  CONTACT CTA
              ============================================================= */}

            
            </Reveal>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM INFORMATION STRIP
        =================================================================== */}

      </div>
    </section>
  );
}