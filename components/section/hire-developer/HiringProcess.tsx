"use client";

import {
  useRef,
  type ReactNode,
} from "react";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  Check,
  CheckCircle2,
  MessageSquareText,
  Rocket,
  Search,
  Sparkles,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type ProcessStep = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
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
   DATA
============================================================================= */

const processSteps: ProcessStep[] = [
  {
    id: "01",
    icon: MessageSquareText,
    title: "Tell us what you're building.",
    short: "Requirement",
    description:
      "Share your product goals, required technologies, engineering roles, timeline and preferred working model.",
  },

  {
    id: "02",
    icon: Search,
    title: "Explore relevant talent.",
    short: "Matching",
    description:
      "Review developers and specialists whose technical expertise aligns with your project requirements.",
  },

  {
    id: "03",
    icon: UsersRound,
    title: "Interview your shortlist.",
    short: "Interview",
    description:
      "Meet potential team members directly and evaluate technical, communication and collaboration fit.",
  },

  {
    id: "04",
    icon: Rocket,
    title: "Start building together.",
    short: "Onboarding",
    description:
      "Bring your selected talent into your workflow and begin execution with your existing tools and processes.",
  },
];

/* =============================================================================
   REVEAL
============================================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
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
        amount: 0.2,
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



/* =============================================================================
   BACKGROUND
============================================================================= */

function ProcessBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#6D28D9]/20
          blur-[190px]
        "
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.2) 0.7px, transparent 0.7px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </div>
  );
}

/* =============================================================================
   PROCESS CARD
============================================================================= */

function ProcessCard({
  step,
  index,
  inView,
}: {
  step: ProcessStep;
  index: number;
  inView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: 0.25 + index * 0.16,
        ease: easeOut,
      }}
      className="group relative"
    >
      {/* ===============================================================
          NODE
      =============================================================== */}

      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        animate={
          inView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          delay: index * 0.2,
          duration: 0.55,
          ease: easeOut,
        }}
        className="
          relative
          z-20
          mb-7
          flex
          h-[60px]
          w-[60px]
          items-center
          justify-center
          rounded-full
          border
          border-[#8B5CF6]/30
          bg-[#09080D]
          shadow-[0_0_0_8px_#070708]
        "
      >
        {/* PULSE */}

        {inView && (
          <motion.span
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: [0.8, 1.5, 1.8],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 0.4 + index * 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#8B5CF6]/50
            "
          />
        )}

        <Icon
          size={18}
          className="
            relative
            z-10
            text-[#A78BFA]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

        {/* COMPLETED DOT */}

        <motion.span
          initial={{
            scale: 0,
          }}
          animate={
            inView
              ? {
                  scale: 1,
                }
              : {}
          }
          transition={{
            delay: 0.7 + index * 0.18,
            type: "spring",
          }}
          className="
            absolute
            -right-0.5
            -top-0.5
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border-2
            border-[#070708]
            bg-[#8B5CF6]
          "
        >
          <Check
            size={8}
            strokeWidth={3}
            className="text-white"
          />
        </motion.span>
      </motion.div>

      {/* ===============================================================
          CARD
      =============================================================== */}

      <motion.div
        whileHover={{
          y: -7,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="
          relative
          min-h-[80px]
          overflow-hidden
          rounded-[25px]
          border
          border-white/[0.07]
          bg-[#09090B]/95
          p-6
          backdrop-blur-xl
          transition-colors
          duration-500
          hover:border-[#8B5CF6]/25
          hover:bg-[#0D0B12]
        "
      >
        {/* HOVER GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#8B5CF6]/0
            blur-[65px]
            transition-all
            duration-700
            group-hover:bg-[#8B5CF6]/15
          "
        />

        {/* TOP LINE */}

        <div
          className="
            absolute
            left-[20%]
            right-[20%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#8B5CF6]/0
            to-transparent
            transition-all
            duration-500
            group-hover:via-[#A78BFA]/50
          "
        />

        {/* CARD HEADER */}

        <div className="relative flex items-center justify-between">
        

          <span
            className="
              rounded-full
              border
              border-white/[0.055]
              bg-white/[0.02]
              px-2.5
              py-1.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            {step.short}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            relative
            mt-5
            max-w-[250px]
            hyi-h3
            font-semibold
            leading-[1.35]
            tracking-[-0.025em]
            text-white/85
            transition-colors
            group-hover:text-white
          "
        >
          {step.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            relative
            mt-4
            max-w-[280px]
            hyi-small
             hyi-gray
            hyi-p
          "
        >
          {step.description}
        </p>

        {/* FOOTER */}

        <div
          className="
            absolute
            bottom-5
            left-6
            right-6
            flex
            items-center
            gap-2
            border-t
            border-white/[0.05]
            pt-
          "
        >
         

         
        </div>

        {/* BOTTOM ACTIVE LINE */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#8B5CF6]
            to-transparent
            transition-all
            duration-700
            group-hover:w-[65%]
          "
        />
      </motion.div>
    </motion.div>
  );
}

/* =============================================================================
   MAIN COMPONENT
============================================================================= */

export default function HiringProcess() {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const inView = useInView(
    containerRef,
    {
      once: true,
      amount: 0.18,
    }
  );

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[#070708]
        py-10
        text-white
       
      "
    >
      <ProcessBackground />

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
        {/* ===================================================================
            HEADER
        =================================================================== */}

        <Reveal>
          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
              lg:items-end
            "
          >
            <div>
             

              <h2
                className=" hyi-white hyi-h1
                  mt-3
                 
                "
              >
                From requirement
                <br />

                <span
                  className="
                   
                  "
                >
                  to collaboration.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[520px] hyi-p">
                A straightforward process for identifying
                relevant technical expertise and bringing
                the right people into your engineering
                workflow.
              </p>

            
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            PROCESS
        =================================================================== */}

        <div
          ref={containerRef}
          className="relative mt-10 "
        >
          {/* ===============================================================
              DESKTOP TRACK
          =============================================================== */}

          <div
            className="
              absolute
              left-[30px]
              right-[calc(25%-30px)]
              top-[29px]
              hidden
              h-px
              overflow-visible
              bg-white/[0.07]
              lg:block
            "
          >
            {/* ANIMATED PURPLE LINE */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={
                inView
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.8,
                ease: easeOut,
              }}
              className="
                absolute
                inset-0
                origin-left
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#8B5CF6]/55
                to-[#8B5CF6]/15
              "
            />

            {/* TRAVELLING LIGHT */}

            {inView && (
              <motion.div
                initial={{
                  left: "0%",
                  opacity: 0,
                }}
                animate={{
                  left: "100%",
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-1/2
                  h-2
                  w-2
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#C4B5FD]
                  shadow-[0_0_8px_#A78BFA,0_0_20px_rgba(139,92,246,.7)]
                "
              />
            )}
          </div>

          {/* ===============================================================
              CARDS
          =============================================================== */}

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-4
              lg:gap-3
            "
          >
            {processSteps.map(
              (step, index) => (
                <ProcessCard
                  key={step.id}
                  step={step}
                  index={index}
                  inView={inView}
                />
              )
            )}
          </div>
        </div>

        {/* ===================================================================
            COMPLETION STRIP
        =================================================================== */}


      </div>
    </section>
  );
}