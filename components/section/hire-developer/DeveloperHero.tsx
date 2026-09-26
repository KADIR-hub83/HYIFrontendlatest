"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CustomLabel from "@/components/shared/customLabel";
import StarsIcon from "@/assets/integratedAIPage/icons/Union.svg";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Code2,
  Command,
  FileCode2,
  Folder,
  GitBranch,
  Globe2,
  Layers3,
  Play,
  Search,
  Sparkles,
  Terminal,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type Phase = "boot" | "coding" | "saving" | "success" | "reveal";

type CodeLine = {
  id: number;
  code: ReactNode;
  delay: number;
};

/* =============================================================================
   CONFIG
============================================================================= */

const PURPLE = "#8B5CF6";
const LIGHT_PURPLE = "#A78BFA";

const CODE_START_DELAY = 350;

/*
  Total animation roughly:

  Boot       : 0 - 0.35 sec
  Coding     : 0.35 - 3.10 sec
  Save       : 3.10 - 3.55 sec
  Success    : 3.55 - 4.05 sec
  Hero reveal: 4.05 sec +
*/

/* =============================================================================
   SMALL CODE HELPERS
============================================================================= */

function Keyword({ children }: { children: ReactNode }) {
  return <span className="text-[#C084FC]">{children}</span>;
}

function FunctionName({ children }: { children: ReactNode }) {
  return <span className="text-[#60A5FA]">{children}</span>;
}

function StringCode({ children }: { children: ReactNode }) {
  return <span className="text-[#86EFAC]">{children}</span>;
}

function Property({ children }: { children: ReactNode }) {
  return <span className="text-[#93C5FD]">{children}</span>;
}

function ComponentCode({ children }: { children: ReactNode }) {
  return <span className="text-[#F0ABFC]">{children}</span>;
}

function MutedCode({ children }: { children: ReactNode }) {
  return <span className="text-white/30">{children}</span>;
}

/* =============================================================================
   CODE CONTENT
============================================================================= */

const codeLines: CodeLine[] = [
  {
    id: 1,
    delay: 0,
    code: (
      <>
        <Keyword>import</Keyword> <span className="text-white/80">{"{"}</span>{" "}
        <FunctionName>Developer</FunctionName>,{" "}
        <FunctionName>Product</FunctionName>{" "}
        <span className="text-white/80">{"}"}</span> <Keyword>from</Keyword>{" "}
        <StringCode>&quot;@/hyi/talent&quot;</StringCode>;
      </>
    ),
  },

  {
    id: 2,
    delay: 0.16,
    code: <>&nbsp;</>,
  },

  {
    id: 3,
    delay: 0.26,
    code: (
      <>
        <Keyword>const</Keyword> <FunctionName>team</FunctionName>{" "}
        <span className="text-white/70">=</span> <Keyword>await</Keyword>{" "}
        <FunctionName>HYI</FunctionName>.<Property>buildTeam</Property>
        <span className="text-white/70">{"({"}</span>
      </>
    ),
  },

  {
    id: 4,
    delay: 0.42,
    code: (
      <>
        {"  "}
        <Property>role</Property>
        <span className="text-white/70">:</span>{" "}
        <StringCode>&quot;Senior Full-Stack Engineer&quot;</StringCode>,
      </>
    ),
  },

  {
    id: 5,
    delay: 0.58,
    code: (
      <>
        {"  "}
        <Property>stack</Property>
        <span className="text-white/70">:</span>{" "}
        <span className="text-white/70">[</span>
        <StringCode>&quot;Next.js&quot;</StringCode>,{" "}
        <StringCode>&quot;TypeScript&quot;</StringCode>,{" "}
        <StringCode>&quot;Node.js&quot;</StringCode>
        <span className="text-white/70">]</span>,
      </>
    ),
  },

  {
    id: 6,
    delay: 0.74,
    code: (
      <>
        {"  "}
        <Property>experience</Property>
        <span className="text-white/70">:</span>{" "}
        <StringCode>&quot;5+ years&quot;</StringCode>,
      </>
    ),
  },

  {
    id: 7,
    delay: 0.9,
    code: (
      <>
        {"  "}
        <Property>availability</Property>
        <span className="text-white/70">:</span>{" "}
        <StringCode>&quot;ready-to-start&quot;</StringCode>,
      </>
    ),
  },

  {
    id: 8,
    delay: 1.06,
    code: (
      <>
        {"  "}
        <Property>verified</Property>
        <span className="text-white/70">:</span> <Keyword>true</Keyword>,
      </>
    ),
  },

  {
    id: 9,
    delay: 1.22,
    code: (
      <>
        <span className="text-white/70">{"});"}</span>
      </>
    ),
  },

  {
    id: 10,
    delay: 1.38,
    code: <>&nbsp;</>,
  },

  {
    id: 11,
    delay: 1.48,
    code: (
      <>
        <Keyword>const</Keyword> <FunctionName>product</FunctionName>{" "}
        <span className="text-white/70">=</span> <Keyword>await</Keyword>{" "}
        <FunctionName>team</FunctionName>.<Property>ship</Property>
        <span className="text-white/70">(</span>
        <ComponentCode>&lt;YourVision /&gt;</ComponentCode>
        <span className="text-white/70">);</span>
      </>
    ),
  },

  {
    id: 12,
    delay: 1.68,
    code: <>&nbsp;</>,
  },

  {
    id: 13,
    delay: 1.78,
    code: (
      <>
        <Keyword>if</Keyword> <span className="text-white/70">(</span>
        <FunctionName>product</FunctionName>.<Property>ready</Property>
        <span className="text-white/70">)</span>{" "}
        <span className="text-white/70">{"{"}</span>
      </>
    ),
  },

  {
    id: 14,
    delay: 1.94,
    code: (
      <>
        {"  "}
        <FunctionName>launch</FunctionName>
        <span className="text-white/70">();</span>
      </>
    ),
  },

  {
    id: 15,
    delay: 2.1,
    code: (
      <>
        <span className="text-white/70">{"}"}</span>
      </>
    ),
  },
];

/* =============================================================================
   PARTICLES
============================================================================= */

const particles = [
  { left: "7%", top: "16%", size: 2, duration: 5.5, delay: 0.1 },
  { left: "14%", top: "68%", size: 2, duration: 7.2, delay: 0.8 },
  { left: "23%", top: "28%", size: 1, duration: 6.4, delay: 1.4 },
  { left: "32%", top: "81%", size: 2, duration: 8.2, delay: 0.4 },
  { left: "42%", top: "12%", size: 1, duration: 6.8, delay: 1.1 },
  { left: "53%", top: "74%", size: 2, duration: 7.7, delay: 1.8 },
  { left: "63%", top: "21%", size: 1, duration: 5.9, delay: 0.6 },
  { left: "72%", top: "84%", size: 2, duration: 7.1, delay: 1.5 },
  { left: "81%", top: "34%", size: 1, duration: 8.5, delay: 0.3 },
  { left: "91%", top: "62%", size: 2, duration: 6.1, delay: 1.2 },
];

/* =============================================================================
   BACKGROUND
============================================================================= */

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* main purple glow */}

      <motion.div
        animate={{
          opacity: [0.18, 0.32, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42%]
          h-[720px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7C3AED]/20
          blur-[190px]
        "
      />

      {/* left glow */}

      <div
        className="
          absolute
          -left-[300px]
          top-[20%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#4C1D95]/10
          blur-[170px]
        "
      />

      {/* right glow */}

      <div
        className="
          absolute
          -right-[300px]
          bottom-[0%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#6D28D9]/10
          blur-[180px]
        "
      />

      {/* grid */}

      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 0%, rgba(0,0,0,.7) 40%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, rgba(0,0,0,.7) 40%, transparent 78%)",
        }}
      />

      {/* radial lines */}

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, transparent 0, transparent 180px, rgba(139,92,246,.09) 181px, transparent 182px, transparent 300px, rgba(139,92,246,.06) 301px, transparent 302px)",
        }}
      />

      {/* particles */}

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#A78BFA]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.05, 0.55, 0.05],
            y: [0, -18, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* top fade */}

      <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#050506] to-transparent" />

      {/* bottom fade */}

      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-t from-[#050506] via-[#050506]/80 to-transparent" />
    </div>
  );
}

/* =============================================================================
   WINDOW DOTS
============================================================================= */

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-[7px] w-[7px] rounded-full bg-white/15" />
      <span className="h-[7px] w-[7px] rounded-full bg-white/15" />
      <span className="h-[7px] w-[7px] rounded-full bg-white/15" />
    </div>
  );
}

/* =============================================================================
   FILE EXPLORER
============================================================================= */

function FileExplorer({ phase }: { phase: Phase }) {
  return (
    <div
      className="
        hidden
        w-[180px]
        shrink-0
        border-r
        border-white/[0.055]
        bg-[#08080A]
        md:block
      "
    >
      <div
        className="
          flex
          h-10
          items-center
          px-4
          font-mono
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-white/20
        "
      >
        Explorer
      </div>

      <div className="px-2 pb-4">
        <div
          className="
            flex
            items-center
            gap-1.5
            px-2
            py-1.5
            text-[9px]
            font-medium
            text-white/35
          "
        >
          <ChevronRight size={10} className="rotate-90" />

          <span>HYI-PROJECT</span>
        </div>

        <div className="ml-3 mt-1 space-y-0.5">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1.5
              font-mono
              text-[9px]
              text-white/22
            "
          >
            <Folder size={11} className="text-[#A78BFA]/50" />
            app
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1.5
              font-mono
              text-[9px]
              text-white/22
            "
          >
            <Folder size={11} className="text-[#A78BFA]/50" />
            components
          </div>

          <motion.div
            animate={
              phase === "saving" || phase === "success"
                ? {
                    backgroundColor: "rgba(139,92,246,.09)",
                  }
                : {
                    backgroundColor: "rgba(255,255,255,.035)",
                  }
            }
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1.5
              font-mono
              text-[9px]
              text-white/60
            "
          >
            <FileCode2 size={11} className="text-[#A78BFA]" />
            hire-developer.tsx
            {phase === "saving" && (
              <motion.span
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                className="ml-auto h-1.5 w-1.5 rounded-full bg-[#A78BFA]"
              />
            )}
            {phase === "success" && (
              <Check size={10} className="ml-auto text-emerald-400" />
            )}
          </motion.div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1.5
              font-mono
              text-[9px]
              text-white/22
            "
          >
            <FileCode2 size={11} className="text-blue-400/50" />
            package.json
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   CODE EDITOR
============================================================================= */

function CodeEditor({ phase }: { phase: Phase }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (phase !== "coding") {
      if (phase === "saving" || phase === "success") {
        setVisibleLines(codeLines.length);
      }

      return;
    }

    setVisibleLines(0);

    const timers = codeLines.map((line, index) =>
      window.setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay * 1000),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [phase]);

  return (
    <div className="min-w-0 flex-1 bg-[#09090B]">
      {/* TAB */}

      <div
        className="
          flex
          h-10
          items-center
          border-b
          border-white/[0.055]
          bg-[#08080A]
        "
      >
        <div
          className="
            flex
            h-full
            items-center
            gap-2
            border-r
            border-white/[0.055]
            border-t
            border-t-[#8B5CF6]/70
            bg-[#0C0C0F]
            px-4
            font-mono
            text-[9px]
            text-white/55
          "
        >
          <FileCode2 size={11} className="text-[#A78BFA]" />
          hire-developer.tsx
          {phase === "coding" && (
            <Circle size={5} fill="currentColor" className="text-white/25" />
          )}
          {phase === "saving" && (
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Circle size={7} className="text-[#A78BFA]" />
            </motion.div>
          )}
          {phase === "success" && (
            <Check size={9} className="text-emerald-400" />
          )}
        </div>
      </div>

      {/* CODE */}

      <div
        className="
          relative
          h-[330px]
          overflow-hidden
          px-3
          py-5
          sm:h-[360px]
          sm:px-5
          lg:h-[390px]
        "
      >
        {/* active line glow */}

        {phase === "coding" && (
          <motion.div
            layout
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              h-[21px]
              border-l
              border-[#8B5CF6]/40
              bg-[#8B5CF6]/[0.025]
            "
            animate={{
              top: 20 + Math.max(visibleLines - 1, 0) * 21,
            }}
            transition={{
              duration: 0.14,
            }}
          />
        )}

        <div className="relative font-mono text-[9px] leading-[21px] sm:text-[10px] lg:text-[11px]">
          {codeLines.map((line, index) => {
            const visible = index < visibleLines;

            return (
              <div key={line.id} className="flex min-h-[21px]">
                <span
                  className="
                    mr-4
                    w-5
                    shrink-0
                    select-none
                    text-right
                    text-white/12
                  "
                >
                  {line.id}
                </span>

                <AnimatePresence>
                  {visible && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -3,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.12,
                      }}
                      className="
                        min-w-0
                        flex-1
                        whitespace-pre
                      "
                    >
                      {line.code}

                      {index === visibleLines - 1 && phase === "coding" && (
                        <motion.span
                          animate={{
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                          }}
                          className="
                              ml-[2px]
                              inline-block
                              h-[13px]
                              w-[1px]
                              translate-y-[2px]
                              bg-[#A78BFA]
                            "
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   TERMINAL PANEL
============================================================================= */

function TerminalPanel({ phase }: { phase: Phase }) {
  return (
    <div
      className="
        border-t
        border-white/[0.055]
        bg-[#070708]
      "
    >
      <div
        className="
          flex
          h-8
          items-center
          gap-5
          border-b
          border-white/[0.04]
          px-4
        "
      >
        <span
          className="
            border-b
            border-[#8B5CF6]
            pb-[8px]
            pt-[9px]
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-white/45
          "
        >
          Terminal
        </span>

        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-white/15
          "
        >
          Output
        </span>

        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-white/15
          "
        >
          Problems
        </span>
      </div>

      <div
        className="
          min-h-[82px]
          px-4
          py-3
          font-mono
          text-[9px]
          leading-5
        "
      >
        <div className="flex items-center gap-2 text-white/25">
          <span className="text-[#A78BFA]">~</span>

          <span>hyi</span>

          <span className="text-white/15">%</span>

          <span className="text-white/45">npm run build</span>
        </div>

        <AnimatePresence>
          {phase !== "boot" && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="mt-1"
            >
              {phase === "coding" && (
                <div className="flex items-center gap-2 text-white/22">
                  <motion.span
                    animate={{
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="text-[#A78BFA]"
                  >
                    ●
                  </motion.span>
                  Compiling developer experience...
                </div>
              )}

              {phase === "saving" && (
                <>
                  <div className="text-white/25">✓ Compiled successfully</div>

                  <div className="flex items-center gap-2 text-[#C4B5FD]">
                    <motion.span
                      animate={{
                        opacity: [0.25, 1, 0.25],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                      }}
                    >
                      ●
                    </motion.span>
                    Saving hire-developer.tsx...
                  </div>
                </>
              )}

              {phase === "success" && (
                <>
                  <div className="text-white/25">✓ Compiled successfully</div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -5,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="flex items-center gap-2 text-emerald-400/75"
                  >
                    <CheckCircle2 size={10} />
                    Ready in 0.4s
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =============================================================================
   SAVE OVERLAY
============================================================================= */

function SaveOverlay({ phase }: { phase: Phase }) {
  return (
    <AnimatePresence>
      {(phase === "saving" || phase === "success") && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.06,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            flex
            items-center
            justify-center
            bg-[#050506]/45
            backdrop-blur-[2px]
          "
        >
          <motion.div
            layout
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.09]
              bg-[#0B0B0E]/95
              px-6
              py-5
              shadow-[0_25px_100px_rgba(0,0,0,.55),0_0_80px_rgba(124,58,237,.12)]
            "
          >
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#A78BFA]/60
                to-transparent
              "
            />

            {phase === "saving" ? (
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#8B5CF6]/20
                    bg-[#8B5CF6]/10
                  "
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Code2 size={17} className="text-[#B8A2FF]" />
                  </motion.div>
                </div>

                <div>
                  <div
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      text-white/70
                    "
                  >
                    Saving experience
                  </div>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[8px]
                      text-white/25
                    "
                  >
                    <Command size={8} />S
                  </div>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{
                  width: 150,
                }}
                animate={{
                  width: 190,
                }}
                className="flex items-center gap-4"
              >
                <motion.div
                  initial={{
                    scale: 0.5,
                    rotate: -20,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/10
                  "
                >
                  <Check size={17} className="text-emerald-400" />
                </motion.div>

                <div>
                  <div
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      text-white/75
                    "
                  >
                    Build complete
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[8px]
                      text-emerald-400/55
                    "
                  >
                    Ready to hire.
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =============================================================================
   IDE / CODING INTRO
============================================================================= */

function CodingExperience({ phase }: { phase: Phase }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.88,
        y: -30,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[980px]
      "
    >
      {/* external glow */}

      <motion.div
        animate={{
          opacity: phase === "success" ? 0.45 : 0.2,
          scale: phase === "success" ? 1.06 : 1,
        }}
        className="
          pointer-events-none
          absolute
          -inset-12
          rounded-[60px]
          bg-[#7C3AED]/15
          blur-[90px]
        "
      />

      {/* editor window */}

      <motion.div
        animate={
          phase === "success"
            ? {
                borderColor: "rgba(52,211,153,.18)",
                boxShadow:
                  "0 35px 130px rgba(0,0,0,.6), 0 0 90px rgba(124,58,237,.10)",
              }
            : {
                borderColor: "rgba(255,255,255,.09)",
                boxShadow:
                  "0 35px 130px rgba(0,0,0,.6), 0 0 70px rgba(124,58,237,.07)",
              }
        }
        className="
          relative
          overflow-hidden
          rounded-[18px]
          border
          bg-[#08080A]
        "
      >
        {/* titlebar */}

        <div
          className="
            flex
            h-11
            items-center
            justify-between
            border-b
            border-white/[0.055]
            bg-[#0B0B0D]
            px-4
          "
        >
          <WindowDots />

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              font-mono
              text-[8px]
              text-white/20
            "
          >
            HYI — hire-developer.tsx
          </div>

          <div className="flex items-center gap-3">
            <GitBranch size={10} className="text-white/18" />

            <Play size={10} className="text-[#A78BFA]/45" />
          </div>
        </div>

        {/* workspace */}

        <div className="flex">
          <FileExplorer phase={phase} />

          <CodeEditor phase={phase} />
        </div>

        <TerminalPanel phase={phase} />

        <SaveOverlay phase={phase} />

        {/* status bar */}

        <div
          className="
            flex
            h-6
            items-center
            justify-between
            border-t
            border-white/[0.04]
            bg-[#0A0A0C]
            px-3
            font-mono
            text-[7px]
            text-white/15
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <GitBranch size={7} />
              main
            </span>

            <span>0 errors</span>
          </div>

          <div className="flex items-center gap-3">
            <span>TypeScript React</span>
            <span>UTF-8</span>
          </div>
        </div>
      </motion.div>

      {/* boot caption */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
        className="
          mt-5
          flex
          items-center
          justify-center
          gap-2
          font-mono
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-white/18
        "
      >
        <motion.span
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="
            h-1
            w-1
            rounded-full
            bg-[#A78BFA]
          "
        />
        Engineering your next team
      </motion.div>
    </motion.div>
  );
}

/* =============================================================================
   HERO BADGE
============================================================================= */



/* =============================================================================
   ACTUAL HERO CONTENT
============================================================================= */

function FinalHeroContent() {
  const stats = useMemo(
    () => [
      {
        value: "Top 1%",
        label: "Vetted talent",
      },
      {
        value: "48h",
        label: "Fast matching",
      },
      {
        value: "40+",
        label: "Engineering roles",
      },
    ],
    [],
  );

  return (
<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  transition={{
    duration: 0.5,
  }}
  className="
    relative
    mx-auto
    flex
    -translate-y-8
    flex-col
    items-center
    text-center
    lg:-translate-y-12
  "
>

     <motion.div
  initial={{
    opacity: 0,
    y: 15,
    scale: 0.95,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    delay: 0.1,
    duration: 0.6,
  }}
>
  <CustomLabel icon={StarsIcon}>
    Elite Engineering Talent
  </CustomLabel>
</motion.div>

      {/* heading */}

{/* ================================================================
    HERO HEADING
================================================================ */}

<div className="mt-3 overflow-hidden">
  <motion.h1
    initial={{
      y: 100,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      delay: 0.12,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      flex
      
      cursor-default
      flex-col
      gap-1
      text-2xl
      font-bold
      capitalize
      lg:text-3xl
    "
  >
    <span
      className="
        bg-gradient-to-t
        from-brand-600
        to-brand-500
        bg-clip-text
        text-transparent
        
      "
    >
      Build ambitious products
    </span>

    <span
      className="
        bg-gradient-to-b
        from-white
        to-white/70
        bg-clip-text
        text-transparent
      "
    >
      with exceptional developers.
    </span>
  </motion.h1>
</div>

{/* ================================================================
    DESCRIPTION
================================================================ */}

<motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.32,
    duration: 0.7,
  }}
  className="
    mt-3
    max-w-[660px]
    text-sm
    text-dark_mode-300
    md:text-base
  "
>
  Access pre-vetted engineers across web, mobile, AI, cloud, data and
  emerging technologies — ready to integrate with your team and start
  building.
</motion.p>

{/* ================================================================
    CTA
================================================================ */}
{/* 
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.46,
    duration: 0.7,
  }}
  className="
    mt-9
    flex
    flex-col
    items-center
    gap-3
    sm:flex-row
  "
>
  <Link
    href="/talk-to-our-expert"
    className="
      group
      relative
      inline-flex
      h-[52px]
      items-center
      justify-center
      gap-2
      overflow-hidden
      rounded-full
      bg-white
      px-6
      text-[11px]
      font-semibold
      text-black
      transition-transform
      duration-300
      hover:scale-[1.025]
    "
  >
    <motion.span
      className="
        absolute
        inset-y-0
        left-[-100%]
        w-[60%]
        skew-x-[-20deg]
        bg-gradient-to-r
        from-transparent
        via-white/70
        to-transparent
      "
      animate={{
        left: ["-100%", "180%"],
      }}
      transition={{
        duration: 2.2,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />

    <span className="relative">
      Hire developers
    </span>

    <ArrowUpRight
      size={14}
      className="
        relative
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
    />
  </Link>

  <a
    href="#developer-directory"
    className="
      group
      inline-flex
      h-[52px]
      items-center
      justify-center
      gap-2
      rounded-full
      border
      border-white/[0.09]
      bg-white/[0.025]
      px-6
      text-[11px]
      font-medium
      text-white/55
      backdrop-blur-xl
      transition
      duration-300
      hover:border-[#8B5CF6]/30
      hover:bg-[#8B5CF6]/[0.06]
      hover:text-white
    "
  >
    Explore talent

    <ArrowRight
      size={13}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </a>
</motion.div> */}

{/* ================================================================
    TRUST ROW
================================================================ */}

{/* <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.6,
    duration: 0.7,
  }}
  className="
    mt-12
    flex
    flex-wrap
    items-center
    justify-center
    gap-x-6
    gap-y-3
    text-[9px]
    uppercase
    tracking-[0.16em]
    text-white/20
  "
>
  <span className="flex items-center gap-2">
    <CheckCircle2
      size={11}
      className="text-[#8B5CF6]"
    />

    Technically vetted
  </span>

  <span className="hidden h-3 w-px bg-white/10 sm:block" />

  <span className="flex items-center gap-2">
    <Zap
      size={11}
      className="text-[#8B5CF6]"
    />

    Fast onboarding
  </span>

  <span className="hidden h-3 w-px bg-white/10 sm:block" />

  <span className="flex items-center gap-2">
    <Globe2
      size={11}
      className="text-[#8B5CF6]"
    />

    Global talent
  </span>
</motion.div> */}

{/* ================================================================
    STATS
================================================================ */}

{/* <motion.div
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.72,
    duration: 0.7,
  }}
  className="
    mt-14
    grid
    w-full
    max-w-[680px]
    grid-cols-3
    border-y
    border-white/[0.065]
  "
>
  {stats.map((stat, index) => (
    <div
      key={stat.label}
      className={`
        relative
        py-5
        ${
          index !== stats.length - 1
            ? "border-r border-white/[0.065]"
            : ""
        }
      `}
    >
      <div
        className="
          text-[16px]
          font-semibold
          tracking-[-0.03em]
          text-white/80
          sm:text-[19px]
        "
      >
        {stat.value}
      </div>

      <div
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.15em]
          text-white/20
        "
      >
        {stat.label}
      </div>
    </div>
  ))}
</motion.div> */}

      {/* scroll indicator */}

      {/* <motion.a
        href="#developer-directory"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
          mt-10
          flex
          flex-col
          items-center
          gap-2
          text-white/15
          transition
          hover:text-white/30
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.25em]
          "
        >
          Explore
        </span>

        <div
          className="
            relative
            h-8
            w-px
            overflow-hidden
            bg-white/[0.07]
          "
        >
          <motion.span
            animate={{
              y: [-15, 35],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-0
              h-3
              w-px
              bg-[#8B5CF6]
            "
          />
        </div>
      </motion.a> */}
    </motion.div>
  );
}

/* =============================================================================
   SKIP BUTTON
============================================================================= */

function SkipButton({ onSkip }: { onSkip: () => void }) {
  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.7,
      }}
      onClick={onSkip}
      className="
        absolute
        bottom-6
        right-6
        z-50
        hidden
        items-center
        gap-2
        rounded-full
        border
        border-white/[0.06]
        bg-black/20
        px-3
        py-2
        font-mono
        text-[8px]
        uppercase
        tracking-[0.14em]
        text-white/20
        backdrop-blur-xl
        transition
        hover:border-white/[0.1]
        hover:text-white/45
        md:flex
      "
    >
      Skip intro
      <ChevronRight size={10} />
    </motion.button>
  );
}

/* =============================================================================
   MAIN REUSABLE COMPONENT
============================================================================= */

export default function DeveloperHero() {
  const [phase, setPhase] = useState<Phase>("boot");

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    /*
      Accessibility:
      Users who request reduced motion do not need to sit through
      the animated coding intro.
    */

    if (shouldReduceMotion) {
      setPhase("reveal");
      return;
    }

    const timers: number[] = [];

    /*
      Start coding.
    */

    timers.push(
      window.setTimeout(() => {
        setPhase("coding");
      }, CODE_START_DELAY),
    );

    /*
      Code has finished.
      Trigger the save sequence.
    */

    timers.push(
      window.setTimeout(() => {
        setPhase("saving");
      }, 3100),
    );

    /*
      Save/build completed.
    */

    timers.push(
      window.setTimeout(() => {
        setPhase("success");
      }, 3550),
    );

    /*
      IDE transforms into actual website content.
    */

    timers.push(
      window.setTimeout(() => {
        setPhase("reveal");
      }, 4150),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [shouldReduceMotion]);

  const skipIntro = () => {
    setPhase("reveal");
  };

  const showingCode = phase !== "reveal";

  return (
    <section
      className="
        relative
        isolate
        flex
       
        w-full
        items-center
        overflow-hidden
        bg-[#050506]
        text-white
      "
    >
      {/* =====================================================================
          BACKGROUND
      ===================================================================== */}

      <HeroBackground />

      {/* =====================================================================
          MAIN CONTENT
      ===================================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
        
         
   
          px-4
          py-16
          sm:px-7
          md:py-20
          lg:px-12
        "
      >
        <AnimatePresence mode="wait">
          {showingCode ? (
            <CodingExperience key="coding-experience" phase={phase} />
          ) : (
            <FinalHeroContent key="final-hero" />
          )}
        </AnimatePresence>
      </div>

      {/* =====================================================================
          SKIP INTRO
      ===================================================================== */}

      {showingCode && <SkipButton onSkip={skipIntro} />}

    

      {/* =====================================================================
          EDGE LINES
      ===================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          hidden
          h-[80px]
          w-px
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-white/10
          to-transparent
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          hidden
          h-[80px]
          w-px
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-white/10
          to-transparent
          lg:block
        "
      />

      {/* =====================================================================
          VERY SUBTLE NOISE EFFECT
      ===================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}
