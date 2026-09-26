"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Circle,
  Eye,
  Gauge,
  Headphones,
  Heart,
  MessageCircle,
  MessagesSquare,
  MousePointer2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type JourneyStage = {
  number: string;
  stage: string;
  title: string;
  description: string;
  signals: string[];
};

type CXCapability = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

type AISystem = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type Principle = {
  number: string;
  title: string;
  description: string;
};

type Channel = {
  number: string;
  title: string;
  description: string;
};

type Signal = {
  id: string;
  source: string;
  signal: string;
  interpretation: string;
};

type ExperienceLayer = {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
};

type Outcome = {
  number: string;
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const journeyStages: JourneyStage[] = [
  {
    number: "01",
    stage: "DISCOVER",
    title: "The customer becomes aware.",
    description:
      "Understand how people first encounter the brand, product or service across search, content, social channels, recommendations and digital touchpoints.",
    signals: [
      "Search intent",
      "Content interaction",
      "Campaign response",
      "Channel origin",
    ],
  },
  {
    number: "02",
    stage: "EXPLORE",
    title: "Interest becomes consideration.",
    description:
      "Connect behavioral signals across pages, products, content and sessions to understand what customers are trying to learn before they make a decision.",
    signals: [
      "Browsing behavior",
      "Product interest",
      "Session depth",
      "Content preference",
    ],
  },
  {
    number: "03",
    stage: "DECIDE",
    title: "Consideration becomes intent.",
    description:
      "Identify the information, reassurance and personalized assistance customers need when evaluating whether a product or service is right for them.",
    signals: [
      "Comparison",
      "High-intent actions",
      "Pricing interaction",
      "Assistance requests",
    ],
  },
  {
    number: "04",
    stage: "CONVERT",
    title: "Intent becomes action.",
    description:
      "Reduce friction across registration, checkout, onboarding and other conversion moments where unnecessary complexity can interrupt an otherwise successful journey.",
    signals: [
      "Form completion",
      "Checkout behavior",
      "Drop-off",
      "Transaction context",
    ],
  },
  {
    number: "05",
    stage: "USE",
    title: "The promise becomes experience.",
    description:
      "Connect product usage, service interactions and customer context so the post-purchase experience reflects what the organization already knows about the customer.",
    signals: [
      "Product usage",
      "Feature adoption",
      "Service activity",
      "Account behavior",
    ],
  },
  {
    number: "06",
    stage: "SUPPORT",
    title: "A problem becomes a moment of trust.",
    description:
      "Use customer history, knowledge systems and AI assistance to help support teams understand context before asking customers to explain the same problem repeatedly.",
    signals: [
      "Support history",
      "Issue category",
      "Conversation context",
      "Resolution path",
    ],
  },
  {
    number: "07",
    stage: "GROW",
    title: "Experience becomes relationship.",
    description:
      "Use relevant customer context to identify useful next actions, education, services and recommendations without reducing the relationship to indiscriminate promotion.",
    signals: [
      "Lifecycle stage",
      "Product affinity",
      "Engagement",
      "Next-best action",
    ],
  },
  {
    number: "08",
    stage: "ADVOCATE",
    title: "Relationship becomes advocacy.",
    description:
      "Understand the experiences that create repeat engagement, recommendations and long-term customer relationships across the complete lifecycle.",
    signals: [
      "Retention",
      "Feedback",
      "Referrals",
      "Relationship depth",
    ],
  },
];

const capabilities: CXCapability[] = [
  {
    number: "01",
    title: "Customer journey intelligence",
    description:
      "Create a connected understanding of how customers move across channels, products and interactions.",
    detail:
      "Journey intelligence combines behavioral, transactional and service context so teams can understand sequences rather than isolated touchpoints.",
  },
  {
    number: "02",
    title: "AI personalization",
    description:
      "Adapt experiences according to relevant customer context, intent and interaction history.",
    detail:
      "Personalization can influence content, recommendations, assistance and next actions while remaining governed by appropriate data and business rules.",
  },
  {
    number: "03",
    title: "Conversational AI",
    description:
      "Create intelligent conversational experiences across support, discovery and service workflows.",
    detail:
      "AI assistants can combine natural-language interaction with enterprise knowledge and operational systems to help customers complete useful tasks.",
  },
  {
    number: "04",
    title: "Customer data activation",
    description:
      "Make governed customer information usable across experience systems rather than leaving it fragmented between platforms.",
    detail:
      "Activation connects identity, behavioral context, transactions and service interactions with the systems responsible for customer experiences.",
  },
  {
    number: "05",
    title: "Experience analytics",
    description:
      "Measure customer behavior across complete journeys instead of relying only on page-level or channel-level metrics.",
    detail:
      "Experience analytics helps teams investigate friction, abandonment, adoption and patterns that influence customer outcomes.",
  },
  {
    number: "06",
    title: "Voice of customer",
    description:
      "Transform qualitative customer feedback into structured signals that teams can investigate and act upon.",
    detail:
      "Reviews, surveys, conversations and support interactions can provide insight into recurring needs, problems and experience themes.",
  },
  {
    number: "07",
    title: "Digital experience design",
    description:
      "Design interfaces and journeys around customer intent rather than internal organizational boundaries.",
    detail:
      "Experience architecture connects UX, content, data and technology so customers encounter coherent journeys across channels.",
  },
  {
    number: "08",
    title: "Service intelligence",
    description:
      "Give customer-facing teams the context and knowledge required to respond effectively.",
    detail:
      "AI-supported service environments can surface relevant information, summarize interactions and assist with resolution workflows.",
  },
  {
    number: "09",
    title: "Experience orchestration",
    description:
      "Coordinate customer interactions across channels using context, rules, workflows and intelligent decisioning.",
    detail:
      "Orchestration helps prevent channels from operating as independent experiences with conflicting or duplicated interactions.",
  },
];

const aiSystems: AISystem[] = [
  {
    number: "AI / 01",
    label: "UNDERSTAND",
    title: "Interpret customer intent.",
    description:
      "Use behavioral signals, natural-language interactions and historical context to understand what a customer may be trying to accomplish during the current interaction.",
  },
  {
    number: "AI / 02",
    label: "RETRIEVE",
    title: "Find relevant knowledge.",
    description:
      "Connect AI systems with governed enterprise knowledge so responses and assistance can use information appropriate to the customer's context.",
  },
  {
    number: "AI / 03",
    label: "PERSONALIZE",
    title: "Adapt the experience.",
    description:
      "Use customer context to determine which content, recommendation, explanation or next action is relevant to the current journey.",
  },
  {
    number: "AI / 04",
    label: "ASSIST",
    title: "Help complete the task.",
    description:
      "Combine conversational interfaces with workflows and operational systems so AI can assist customers beyond simply answering informational questions.",
  },
  {
    number: "AI / 05",
    label: "LEARN",
    title: "Observe experience signals.",
    description:
      "Analyze interactions, outcomes and feedback to identify recurring friction and opportunities for experience improvement.",
  },
];

const principles: Principle[] = [
  {
    number: "P01",
    title: "Context before personalization.",
    description:
      "Personalization should begin with useful customer context and clear purpose rather than personalization for its own sake.",
  },
  {
    number: "P02",
    title: "Journey before channel.",
    description:
      "Customers experience a relationship across channels even when the organization manages those channels independently.",
  },
  {
    number: "P03",
    title: "Assistance before automation.",
    description:
      "Automation should make the customer journey easier, not force customers through rigid workflows simply because automation is possible.",
  },
  {
    number: "P04",
    title: "Trust before intelligence.",
    description:
      "AI-enabled experiences require appropriate privacy, security, transparency and control over how customer information is used.",
  },
  {
    number: "P05",
    title: "Resolution before deflection.",
    description:
      "Customer service technology should optimize for meaningful resolution rather than simply minimizing human interaction.",
  },
  {
    number: "P06",
    title: "Learning before assumption.",
    description:
      "Experience design should continuously use behavioral evidence and customer feedback instead of relying entirely on internal assumptions.",
  },
];

const channels: Channel[] = [
  {
    number: "01",
    title: "Web",
    description:
      "Connected digital experiences informed by customer intent and journey context.",
  },
  {
    number: "02",
    title: "Mobile",
    description:
      "Context-aware experiences designed around frequent and immediate interactions.",
  },
  {
    number: "03",
    title: "Conversation",
    description:
      "Natural-language assistance through intelligent chat and messaging experiences.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Service experiences connected with customer history, knowledge and resolution workflows.",
  },
  {
    number: "05",
    title: "Commerce",
    description:
      "Discovery, recommendation and purchasing experiences connected across the customer journey.",
  },
  {
    number: "06",
    title: "Physical",
    description:
      "Customer context that can connect digital interactions with relevant offline experiences.",
  },
];

const customerSignals: Signal[] = [
  {
    id: "SIG-001",
    source: "SEARCH",
    signal: "Repeated product comparison",
    interpretation: "Evaluation intent",
  },
  {
    id: "SIG-002",
    source: "WEB",
    signal: "Pricing page revisited",
    interpretation: "High consideration",
  },
  {
    id: "SIG-003",
    source: "SUPPORT",
    signal: "Repeated setup question",
    interpretation: "Onboarding friction",
  },
  {
    id: "SIG-004",
    source: "PRODUCT",
    signal: "Feature not activated",
    interpretation: "Adoption opportunity",
  },
  {
    id: "SIG-005",
    source: "FEEDBACK",
    signal: "Recurring usability theme",
    interpretation: "Experience issue",
  },
  {
    id: "SIG-006",
    source: "ACCOUNT",
    signal: "Usage pattern changed",
    interpretation: "Lifecycle signal",
  },
];

const experienceLayers: ExperienceLayer[] = [
  {
    number: "01",
    label: "SIGNALS",
    title: "Observe",
    description:
      "Capture relevant customer signals across digital behavior, transactions, conversations, products and service interactions.",
    items: [
      "Behavior",
      "Transactions",
      "Conversations",
      "Feedback",
    ],
  },
  {
    number: "02",
    label: "CONTEXT",
    title: "Understand",
    description:
      "Connect customer identity, journey stage, history and current intent into usable context for experience systems.",
    items: [
      "Identity",
      "History",
      "Intent",
      "Lifecycle",
    ],
  },
  {
    number: "03",
    label: "INTELLIGENCE",
    title: "Decide",
    description:
      "Apply analytics, AI and business rules to determine relevant recommendations, actions and assistance.",
    items: [
      "AI",
      "Rules",
      "Prediction",
      "Decisioning",
    ],
  },
  {
    number: "04",
    label: "ORCHESTRATION",
    title: "Coordinate",
    description:
      "Connect channels, workflows and operational systems so customer experiences remain coherent across organizational boundaries.",
    items: [
      "Channels",
      "Workflows",
      "APIs",
      "Operations",
    ],
  },
  {
    number: "05",
    label: "EXPERIENCE",
    title: "Engage",
    description:
      "Deliver relevant interactions across web, mobile, conversation, service, commerce and other customer touchpoints.",
    items: [
      "Web",
      "Mobile",
      "Service",
      "Commerce",
    ],
  },
  {
    number: "06",
    label: "LEARNING",
    title: "Improve",
    description:
      "Measure behavior and outcomes, investigate friction and feed new insight back into experience design.",
    items: [
      "Analytics",
      "Feedback",
      "Experiments",
      "Optimization",
    ],
  },
];

const outcomes: Outcome[] = [
  {
    number: "01",
    title: "Less fragmented journeys",
    description:
      "Connect customer context across systems and channels so interactions feel like parts of one relationship.",
  },
  {
    number: "02",
    title: "More relevant experiences",
    description:
      "Use meaningful context to determine which information, assistance and actions matter during each interaction.",
  },
  {
    number: "03",
    title: "Better service context",
    description:
      "Give service teams and AI assistants access to relevant history and knowledge before responding.",
  },
  {
    number: "04",
    title: "Faster experience learning",
    description:
      "Use behavioral and qualitative signals to identify where journeys require improvement.",
  },
];

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* ============================================================
   SHARED UI
============================================================ */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-[7px] text-white/[0.18]">
        {number}
      </span>

      <div className="h-px w-9 bg-white/[0.15]" />

      <span className="font-mono text-[7px] tracking-[0.23em] text-white/[0.38]">
        {children}
      </span>
    </motion.div>
  );
}

function AnimatedRule() {
  return (
    <div className="relative h-px overflow-hidden bg-white/[0.08]">
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: "350%",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease,
        }}
        className="absolute inset-y-0 w-[30%] bg-white/[0.4]"
      />
    </div>
  );
}

function WordReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.65,
                ease,
              },
            },
          }}
          className="mr-[0.22em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function CustomerExperiencePage() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 120],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.15],
  );

  const marqueeX = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    ["0%", "-35%"],
  );

  return (
    <main className="relative overflow-hidden bg-[#000000] text-white selection:bg-white selection:text-black">
      {/* ====================================================
          SCROLL PROGRESS
      ==================================================== */}

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-white"
      />

      <Header />

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative min-h-screen bg-black px-5 pb-10 pt-36 md:px-10 md:pt-44">
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1500px] flex-col justify-between"
        >
          {/* top information */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex items-start justify-between border-t border-white/[0.09] pt-5"
          >
            <div>
              <p className="font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.25]">
                DIGITAL TRANSFORMATION
                <br />
                CUSTOMER EXPERIENCE
              </p>
            </div>

            <div className="hidden text-right md:block">
              <p className="font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.2]">
                CUSTOMER / DATA / AI
                <br />
                EXPERIENCE / INTELLIGENCE
              </p>
            </div>
          </motion.div>

          {/* giant hero */}

          <div className="py-20">
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
                delay: 0.2,
                duration: 0.7,
                ease,
              }}
              className="font-mono text-[7px] tracking-[0.25em] text-white/[0.32]"
            >
              THE CUSTOMER DOES NOT SEE YOUR SYSTEMS.
            </motion.p>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-[1450px] text-[clamp(4.6rem,11.5vw,11.5rem)] font-semibold leading-[0.76] tracking-[-0.095em]"
            >
              <motion.span
                variants={reveal}
                className="block"
              >
                They feel
              </motion.span>

              <motion.span
                variants={reveal}
                className="block text-white/[0.26]"
              >
                the experience.
              </motion.span>
            </motion.h1>
          </div>

          {/* hero bottom */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease,
            }}
            className="grid gap-10 border-t border-white/[0.09] py-8 lg:grid-cols-[.3fr_.35fr_1fr]"
          >
            <div>
              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.18]">
                CX / 2026
              </span>
            </div>

            <div>
              <p className="font-mono text-[6px] leading-5 tracking-[0.18em] text-white/[0.25]">
                DISCOVER
                <br />
                UNDERSTAND
                <br />
                PERSONALIZE
                <br />
                ASSIST
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-8 text-white/[0.52] md:text-[17px] md:leading-9">
                Design connected customer experiences where data,
                digital products, service operations and AI work
                together to understand context and help customers
                accomplish what they came to do.
              </p>

              <motion.a
                href="#experience"
                whileHover={{
                  x: 7,
                }}
                className="mt-7 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.32]"
              >
                ENTER THE JOURNEY

                <ArrowDown size={11} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          EXPERIENCE MARQUEE
      ==================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-7">
        <motion.div
          style={{
            x: marqueeX,
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[
            "UNDERSTAND",
            "CONNECT",
            "PERSONALIZE",
            "ASSIST",
            "RESOLVE",
            "LEARN",
            "IMPROVE",
            "UNDERSTAND",
            "CONNECT",
            "PERSONALIZE",
            "ASSIST",
            "RESOLVE",
            "LEARN",
            "IMPROVE",
          ].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center"
            >
              <span className="px-8 text-2xl font-medium tracking-[-0.04em] text-white/[0.22] md:text-4xl">
                {item}
              </span>

              <Circle
                size={5}
                fill="currentColor"
                className="text-white/[0.18]"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====================================================
          EXPERIENCE MANIFESTO
      ==================================================== */}

      <section
        id="experience"
        className="bg-black px-5 py-36 md:px-10 md:py-56"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.3fr_1.7fr]">
            <div>
              <SectionLabel number="01">
                EXPERIENCE
              </SectionLabel>
            </div>

            <div>
              <WordReveal className="max-w-[1250px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[92px]">
                Customer experience is the sum of every interaction the customer remembers.
              </WordReveal>

              <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-2">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Customers rarely think in terms of CRM systems,
                  commerce platforms, contact centers, data warehouses,
                  marketing systems or organizational departments.
                  They experience one relationship.
                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Customer experience transformation connects the
                  systems behind that relationship so context can move
                  with the customer instead of disappearing whenever
                  they change channel.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedRule />

      {/* ====================================================
          GIANT QUESTION
      ==================================================== */}

      <section className="bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 1,
              ease,
            }}
          >
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.22]">
              ONE QUESTION
            </p>

            <h2 className="mt-10 max-w-[1400px] text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.085em]">
              What is the
              <span className="text-white/[0.27]">
                {" "}
                customer trying
              </span>

              <span className="block">
                to accomplish
                <span className="text-white/[0.27]">
                  {" "}
                  right now?
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="mt-24 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_.7fr_1fr]">
            <div>
              <Target
                size={18}
                className="text-white/[0.3]"
              />
            </div>

            <div>
              <p className="font-mono text-[6px] leading-6 tracking-[0.2em] text-white/[0.22]">
                INTENT
                <br />
                CONTEXT
                <br />
                MOMENT
                <br />
                ACTION
              </p>
            </div>

            <p className="max-w-[720px] text-[15px] leading-9 text-white/[0.48]">
              A useful customer experience begins with customer intent.
              Technology then determines how effectively the
              organization can recognize that intent, retrieve relevant
              context and respond through the right interaction.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          CUSTOMER JOURNEY
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.37fr_1.63fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionLabel number="02">
                JOURNEY
              </SectionLabel>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.97] tracking-[-0.06em] md:text-6xl">
                One customer.
                <span className="block text-white/[0.28]">
                  Many moments.
                </span>
              </h2>

              <p className="mt-8 max-w-[400px] text-[13px] leading-8 text-white/[0.38]">
                Journey design connects individual customer moments
                into a coherent lifecycle rather than optimizing each
                channel independently.
              </p>
            </div>

            <div>
              {journeyStages.map((stage, index) => (
                <motion.article
                  key={stage.stage}
                  initial={{
                    opacity: 0,
                    y: 55,
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
                    ease,
                  }}
                  className="min-h-[440px] border-t border-white/[0.08] py-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-white/[0.2]">
                      {stage.number}
                    </span>

                    <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.4]">
                      {stage.stage}
                    </span>
                  </div>

                  <div className="mt-24 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
                    <div>
                      <h3 className="max-w-[440px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                        {stage.title}
                      </h3>
                    </div>

                    <div>
                      <p className="max-w-[580px] text-[13px] leading-8 text-white/[0.42]">
                        {stage.description}
                      </p>

                      <div className="mt-10 grid grid-cols-2 gap-x-7 gap-y-4">
                        {stage.signals.map((signal) => (
                          <motion.div
                            key={signal}
                            whileHover={{
                              x: 4,
                            }}
                            className="border-t border-white/[0.07] pt-4"
                          >
                            <span className="font-mono text-[6px] tracking-[0.13em] text-white/[0.28]">
                              {signal.toUpperCase()}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SIGNALS TABLE
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
            <div>
              <SectionLabel number="03">
                CUSTOMER SIGNALS
              </SectionLabel>

              <h2 className="mt-8 text-4xl font-semibold leading-[.98] tracking-[-0.055em] md:text-6xl">
                Behavior
                <span className="block text-white/[0.28]">
                  creates context.
                </span>
              </h2>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="border border-white/[0.09]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Eye
                    size={12}
                    className="text-white/[0.35]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.35]">
                    EXPERIENCE_SIGNAL_STREAM
                  </span>
                </div>

                <motion.span
                  animate={{
                    opacity: [0.15, 1, 0.15],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-[5px] w-[5px] rounded-full bg-white"
                />
              </div>

              <div className="hidden grid-cols-[90px_.7fr_1fr_1fr] border-b border-white/[0.08] px-6 py-4 md:grid">
                {[
                  "ID",
                  "SOURCE",
                  "SIGNAL",
                  "INTERPRETATION",
                ].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[6px] tracking-[0.14em] text-white/[0.18]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {customerSignals.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    backgroundColor:
                      "rgba(255,255,255,0.018)",
                  }}
                  className="grid gap-5 border-b border-white/[0.07] px-6 py-7 md:grid-cols-[90px_.7fr_1fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.2]">
                    {item.id}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.13em] text-white/[0.32]">
                    {item.source}
                  </span>

                  <span className="text-[12px] text-white/[0.58]">
                    {item.signal}
                  </span>

                  <span className="text-[12px] text-white/[0.35]">
                    {item.interpretation}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedRule />

      {/* ====================================================
          AI STATEMENT
      ==================================================== */}

      <section className="bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="04">
            AI + CUSTOMER EXPERIENCE
          </SectionLabel>

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
              ease,
            }}
            className="mt-14 max-w-[1450px] text-[clamp(4.2rem,8.6vw,9.2rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
          >
            AI should know
            <span className="text-white/[0.27]">
              {" "}
              enough context
            </span>

            <span className="mt-4 block">
              to make the next
              <span className="text-white/[0.27]">
                {" "}
                interaction useful.
              </span>
            </span>
          </motion.h2>
        </div>
      </section>

      {/* ====================================================
          AI SYSTEM
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          {aiSystems.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="group min-h-[370px] border-b border-white/[0.08] py-12"
            >
              <div className="grid gap-10 lg:grid-cols-[110px_.65fr_1fr]">
                <div>
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    {item.number}
                  </span>
                </div>

                <div>
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    className="font-mono text-[7px] tracking-[0.22em] text-white/[0.3]"
                  >
                    {item.label}
                  </motion.span>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.05,
                    }}
                    className="mt-8 max-w-[450px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                <div className="flex items-end">
                  <p className="max-w-[600px] text-[13px] leading-8 text-white/[0.4]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====================================================
          CONVERSATIONAL AI
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-20 lg:grid-cols-[.75fr_1.25fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >
              <SectionLabel number="05">
                CONVERSATIONAL AI
              </SectionLabel>

              <h2 className="mt-10 max-w-[650px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
                Conversation
                <span className="block text-white/[0.27]">
                  becomes interface.
                </span>
              </h2>
            </motion.div>

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="max-w-[750px] text-[18px] leading-10 text-white/[0.52]"
              >
                Conversational AI creates a new experience layer between
                customers and enterprise systems.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                }}
                className="mt-8 max-w-[750px] text-[13px] leading-8 text-white/[0.38]"
              >
                Instead of forcing every customer intent through menus,
                forms and search interfaces, natural-language systems
                can interpret a request, retrieve relevant knowledge,
                collect required information and connect with workflows
                capable of completing the task.
              </motion.p>

              <div className="mt-14 border-t border-white/[0.08]">
                {[
                  "Understand natural language",
                  "Retrieve governed knowledge",
                  "Maintain conversation context",
                  "Connect with customer history",
                  "Trigger operational workflows",
                  "Escalate with useful context",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="flex items-center justify-between border-b border-white/[0.08] py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[6px] text-white/[0.18]">
                        0{index + 1}
                      </span>

                      <span className="text-[13px] text-white/[0.48]">
                        {item}
                      </span>
                    </div>

                    <ChevronRight
                      size={12}
                      className="text-white/[0.2]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CUSTOMER QUOTE STYLE STATEMENT
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="block text-[90px] font-light leading-none text-white/[0.12] md:text-[170px]"
          >
            “
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="-mt-10 max-w-[1300px] text-5xl font-medium leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-[88px]"
          >
            Don&apos;t ask the customer to remember
            <span className="text-white/[0.28]">
              {" "}
              what your systems already know.
            </span>
          </motion.h2>

          <div className="mt-16 flex justify-end">
            <p className="max-w-[550px] text-[13px] leading-8 text-white/[0.35]">
              Connected experience architecture allows relevant context
              to follow the customer across channels while appropriate
              governance determines what information should be used.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          EXPERIENCE OPERATING SYSTEM
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="06">
            EXPERIENCE OPERATING SYSTEM
          </SectionLabel>

          <div className="mt-16">
            {experienceLayers.map((layer, index) => (
              <motion.article
                key={layer.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  ease,
                }}
                className="border-t border-white/[0.08] py-12"
              >
                <div className="grid gap-10 lg:grid-cols-[100px_.45fr_.8fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    {layer.number}
                  </span>

                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
                    {layer.label}
                  </span>

                  <h3 className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                    {layer.title}
                  </h3>

                  <div>
                    <p className="text-[13px] leading-8 text-white/[0.4]">
                      {layer.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="border border-white/[0.08] px-3 py-2 font-mono text-[6px] tracking-[0.13em] text-white/[0.27]"
                        >
                          {item.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          CAPABILITIES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.3fr_1.7fr]">
            <div>
              <SectionLabel number="07">
                CAPABILITIES
              </SectionLabel>

              <p className="mt-8 max-w-[330px] text-[12px] leading-7 text-white/[0.34]">
                Customer experience requires coordination across design,
                data, AI, platforms and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3">
              {capabilities.map((item, index) => (
                <motion.article
                  key={item.title}
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
                    delay: (index % 3) * 0.06,
                  }}
                  whileHover={{
                    backgroundColor:
                      "rgba(255,255,255,0.018)",
                  }}
                  className="group min-h-[420px] border-b border-r border-t border-white/[0.08] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[6px] text-white/[0.18]">
                      CX / {item.number}
                    </span>

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      className="h-[5px] w-[5px] rounded-full bg-white/[0.3]"
                    />
                  </div>

                  <h3 className="mt-20 text-2xl font-medium leading-[1.05] tracking-[-0.045em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[12px] leading-7 text-white/[0.45]">
                    {item.description}
                  </p>

                  <p className="mt-6 border-t border-white/[0.07] pt-6 text-[11px] leading-7 text-white/[0.28]">
                    {item.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          OMNICHANNEL
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel number="08">
                OMNICHANNEL
              </SectionLabel>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="mt-9 max-w-[650px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
              >
                Different channels.
                <span className="block text-white/[0.27]">
                  Same relationship.
                </span>
              </motion.h2>

              <p className="mt-10 max-w-[560px] text-[13px] leading-8 text-white/[0.38]">
                Omnichannel experience is not simply the presence of
                multiple channels. It is the ability for customer
                context and journey continuity to survive movement
                between them.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              {channels.map((channel, index) => (
                <motion.article
                  key={channel.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (index % 2) * 0.07,
                  }}
                  className="min-h-[280px] border-b border-l border-white/[0.08] p-7"
                >
                  <span className="font-mono text-[6px] text-white/[0.2]">
                    CHANNEL / {channel.number}
                  </span>

                  <h3 className="mt-20 text-3xl font-medium tracking-[-0.05em]">
                    {channel.title}
                  </h3>

                  <p className="mt-5 max-w-[350px] text-[12px] leading-7 text-white/[0.36]">
                    {channel.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          VOICE OF CUSTOMER
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="09">
            VOICE OF CUSTOMER
          </SectionLabel>

          <div className="mt-16 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >
              <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                Customers are
                <span className="block text-white/[0.28]">
                  already telling you.
                </span>
              </h2>
            </motion.div>

            <div>
              <p className="max-w-[700px] text-[15px] leading-9 text-white/[0.47]">
                Feedback exists across more than surveys. Customer
                conversations, support tickets, reviews, search
                behavior, abandonment and product usage can all expose
                experience problems.
              </p>

              <div className="mt-12">
                {[
                  "SURVEYS",
                  "REVIEWS",
                  "SUPPORT CONVERSATIONS",
                  "CHAT TRANSCRIPTS",
                  "SEARCH QUERIES",
                  "PRODUCT BEHAVIOR",
                  "SOCIAL FEEDBACK",
                  "CUSTOMER INTERVIEWS",
                ].map((item, index) => (
                  <motion.div
                    key={item}
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
                      delay: index * 0.04,
                    }}
                    className="flex items-center justify-between border-t border-white/[0.08] py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[6px] text-white/[0.18]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-mono text-[7px] tracking-[0.16em] text-white/[0.38]">
                        {item}
                      </span>
                    </div>

                    <ArrowRight
                      size={11}
                      className="text-white/[0.18]"
                    />
                  </motion.div>
                ))}

                <div className="border-t border-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          EXPERIENCE VS SYSTEM
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="10">
            EXPERIENCE SHIFT
          </SectionLabel>

          <div className="mt-16 grid lg:grid-cols-2">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="border border-white/[0.08] p-8 md:p-12"
            >
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.22]">
                SYSTEM-CENTRIC
              </span>

              <h3 className="mt-12 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
                Customer adapts
                <span className="block text-white/[0.27]">
                  to the system.
                </span>
              </h3>

              <div className="mt-16">
                {[
                  "Repeat information",
                  "Navigate organizational boundaries",
                  "Search for the correct channel",
                  "Explain context again",
                  "Follow rigid workflows",
                  "Receive generic interactions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 border-t border-white/[0.07] py-5"
                  >
                    <span className="font-mono text-[6px] text-white/[0.16]">
                      0{index + 1}
                    </span>

                    <span className="text-[12px] text-white/[0.34]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="border border-l-0 border-white/[0.12] p-8 md:p-12"
            >
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
                CUSTOMER-CENTRIC
              </span>

              <h3 className="mt-12 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
                System adapts
                <span className="block text-white/[0.27]">
                  to the journey.
                </span>
              </h3>

              <div className="mt-16">
                {[
                  "Carry relevant context",
                  "Recognize customer intent",
                  "Connect channels",
                  "Retrieve useful knowledge",
                  "Assist with next actions",
                  "Learn from outcomes",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 border-t border-white/[0.09] py-5"
                  >
                    <Check
                      size={10}
                      className="mt-1 text-white/[0.45]"
                    />

                    <span className="text-[12px] text-white/[0.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================
          EXPERIENCE MEASUREMENT
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.4fr_1.6fr]">
            <div>
              <SectionLabel number="11">
                MEASUREMENT
              </SectionLabel>

              <h2 className="mt-8 text-4xl font-semibold leading-[.98] tracking-[-0.055em] md:text-6xl">
                Measure
                <span className="block text-white/[0.28]">
                  the journey.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2">
              {[
                {
                  label: "JOURNEY",
                  title: "Completion",
                  text:
                    "Can customers successfully accomplish the task the journey was designed to support?",
                },
                {
                  label: "EFFORT",
                  title: "Friction",
                  text:
                    "Where do customers encounter unnecessary steps, repetition, confusion or delay?",
                },
                {
                  label: "SERVICE",
                  title: "Resolution",
                  text:
                    "Are customer problems actually resolved through the interaction?",
                },
                {
                  label: "PRODUCT",
                  title: "Adoption",
                  text:
                    "Do customers discover and use the capabilities required to receive value from the product?",
                },
                {
                  label: "RELATIONSHIP",
                  title: "Retention",
                  text:
                    "Does the experience support continued customer engagement over time?",
                },
                {
                  label: "FEEDBACK",
                  title: "Sentiment",
                  text:
                    "What recurring themes emerge from direct and indirect customer feedback?",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (index % 2) * 0.06,
                  }}
                  className="min-h-[300px] border-b border-l border-white/[0.08] p-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.22]">
                    {item.label}
                  </span>

                  <h3 className="mt-20 text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-[430px] text-[12px] leading-7 text-white/[0.36]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          GOVERNANCE
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <SectionLabel number="12">
                TRUST
              </SectionLabel>

              <h2 className="mt-9 max-w-[700px] text-5xl font-semibold leading-[.95] tracking-[-0.065em] md:text-7xl">
                Intelligent
                <span className="block text-white/[0.27]">
                  experiences require trust.
                </span>
              </h2>
            </motion.div>

            <div>
              <p className="max-w-[700px] text-[15px] leading-9 text-white/[0.46]">
                The more context an experience uses, the more important
                it becomes to define appropriate controls around data,
                identity, AI behavior and customer choice.
              </p>

              <div className="mt-12">
                {[
                  {
                    Icon: ShieldCheck,
                    title: "Privacy",
                    text:
                      "Use customer information according to appropriate permissions, purpose and governance.",
                  },
                  {
                    Icon: Users,
                    title: "Identity",
                    text:
                      "Understand whose context is being used and how identity is resolved across systems.",
                  },
                  {
                    Icon: BrainCircuit,
                    title: "AI governance",
                    text:
                      "Define where AI can assist, recommend, decide or take action within customer-facing workflows.",
                  },
                  {
                    Icon: Eye,
                    title: "Transparency",
                    text:
                      "Design intelligent interactions so customers can understand when and how automated systems are involved.",
                  },
                ].map(({ Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="grid gap-6 border-t border-white/[0.08] py-7 md:grid-cols-[50px_.4fr_1fr]"
                  >
                    <Icon
                      size={14}
                      className="text-white/[0.3]"
                    />

                    <h3 className="text-[14px] font-medium">
                      {title}
                    </h3>

                    <p className="text-[12px] leading-7 text-white/[0.35]">
                      {text}
                    </p>
                  </motion.div>
                ))}

                <div className="border-t border-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRINCIPLES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="13">
            EXPERIENCE PRINCIPLES
          </SectionLabel>

          <div className="mt-16">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease,
                }}
                className="border-t border-white/[0.08] py-11"
              >
                <div className="grid gap-7 md:grid-cols-[100px_1fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    {principle.number}
                  </span>

                  <h3 className="max-w-[470px] text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-[570px] text-[13px] leading-8 text-white/[0.38]">
                    {principle.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          OUTCOMES
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="14">
            EXPERIENCE OUTCOMES
          </SectionLabel>

          <div className="mt-16 grid gap-px bg-white/[0.08] md:grid-cols-2">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="min-h-[390px] bg-black p-8 md:p-12"
              >
                <span className="font-mono text-[7px] text-white/[0.2]">
                  OUTCOME / {item.number}
                </span>

                <h3 className="mt-28 max-w-[500px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.38]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          EXPERIENCE FLOW TEXT
      ==================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-16">
        <motion.div
          initial={{
            x: "8%",
          }}
          whileInView={{
            x: "-18%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease,
          }}
          className="w-max whitespace-nowrap"
        >
          <span className="text-[clamp(4rem,10vw,10rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.08]">
            SIGNAL → CONTEXT → INTELLIGENCE → ACTION → EXPERIENCE → LEARNING
          </span>
        </motion.div>
      </section>

      {/* ====================================================
          FINAL MANIFESTO
      ==================================================== */}

      <section className="bg-black px-5 py-40 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel number="15">
            CUSTOMER EXPERIENCE
          </SectionLabel>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 1,
              ease,
            }}
            className="mt-14 max-w-[1450px] text-[clamp(4.4rem,9.3vw,10rem)] font-semibold leading-[0.82] tracking-[-0.09em]"
          >
            Technology
            <span className="text-white/[0.27]">
              {" "}
              disappears
            </span>

            <span className="mt-5 block">
              when the experience
            </span>

            <span className="block text-white/[0.27]">
              simply works.
            </span>
          </motion.h2>

          <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_.4fr_1fr]">
            <div>
              <Heart
                size={18}
                className="text-white/[0.28]"
              />
            </div>

            <div>
              <p className="font-mono text-[6px] leading-6 tracking-[0.2em] text-white/[0.22]">
                CUSTOMER
                <br />
                CONTEXT
                <br />
                DATA
                <br />
                AI
                <br />
                EXPERIENCE
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-9 text-white/[0.48]">
                Customer experience transformation connects the
                intelligence of the enterprise with the moments where
                customers actually interact with it.
              </p>

              <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.34]">
                The goal is not to expose more technology to the
                customer. It is to use technology, data and AI behind
                the experience so each interaction becomes easier to
                understand, more relevant and more useful.
              </p>

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease,
                }}
                className="mt-12 h-px bg-white/[0.12]"
              />

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
                {[
                  "LISTEN",
                  "UNDERSTAND",
                  "CONNECT",
                  "PERSONALIZE",
                  "ASSIST",
                  "RESOLVE",
                  "LEARN",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="font-mono text-[6px] tracking-[0.2em] text-white/[0.28]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}