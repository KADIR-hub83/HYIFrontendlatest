"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Eye,
  ShieldCheck,
  Users,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type JourneyStage = {
  stage: string;
  title: string;
  description: string;
  signals: string[];
};

type CXCapability = {
  title: string;
  description: string;
  detail: string;
};

type AISystem = {
  label: string;
  title: string;
  description: string;
};

type Principle = {
  title: string;
  description: string;
};

type Channel = {
  title: string;
  description: string;
};

type Signal = {
  source: string;
  signal: string;
  interpretation: string;
};

type ExperienceLayer = {
  label: string;
  title: string;
  description: string;
  items: string[];
};

type Outcome = {
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const journeyStages: JourneyStage[] = [
  {
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
    title: "Customer journey intelligence",
    description:
      "Create a connected understanding of how customers move across channels, products and interactions.",
    detail:
      "Journey intelligence combines behavioral, transactional and service context so teams can understand sequences rather than isolated touchpoints.",
  },
  {
    title: "AI personalization",
    description:
      "Adapt experiences according to relevant customer context, intent and interaction history.",
    detail:
      "Personalization can influence content, recommendations, assistance and next actions while remaining governed by appropriate data and business rules.",
  },
  {
    title: "Conversational AI",
    description:
      "Create intelligent conversational experiences across support, discovery and service workflows.",
    detail:
      "AI assistants can combine natural-language interaction with enterprise knowledge and operational systems to help customers complete useful tasks.",
  },
  {
    title: "Customer data activation",
    description:
      "Make governed customer information usable across experience systems rather than leaving it fragmented between platforms.",
    detail:
      "Activation connects identity, behavioral context, transactions and service interactions with the systems responsible for customer experiences.",
  },
  {
    title: "Experience analytics",
    description:
      "Measure customer behavior across complete journeys instead of relying only on page-level or channel-level metrics.",
    detail:
      "Experience analytics helps teams investigate friction, abandonment, adoption and patterns that influence customer outcomes.",
  },
  {
    title: "Voice of customer",
    description:
      "Transform qualitative customer feedback into structured signals that teams can investigate and act upon.",
    detail:
      "Reviews, surveys, conversations and support interactions can provide insight into recurring needs, problems and experience themes.",
  },
  {
    title: "Digital experience design",
    description:
      "Design interfaces and journeys around customer intent rather than internal organizational boundaries.",
    detail:
      "Experience architecture connects UX, content, data and technology so customers encounter coherent journeys across channels.",
  },
  {
    title: "Service intelligence",
    description:
      "Give customer-facing teams the context and knowledge required to respond effectively.",
    detail:
      "AI-supported service environments can surface relevant information, summarize interactions and assist with resolution workflows.",
  },
  {
    title: "Experience orchestration",
    description:
      "Coordinate customer interactions across channels using context, rules, workflows and intelligent decisioning.",
    detail:
      "Orchestration helps prevent channels from operating as independent experiences with conflicting or duplicated interactions.",
  },
];

const aiSystems: AISystem[] = [
  {
    label: "UNDERSTAND",
    title: "Interpret customer intent.",
    description:
      "Use behavioral signals, natural-language interactions and historical context to understand what a customer may be trying to accomplish during the current interaction.",
  },
  {
    label: "RETRIEVE",
    title: "Find relevant knowledge.",
    description:
      "Connect AI systems with governed enterprise knowledge so responses and assistance can use information appropriate to the customer's context.",
  },
  {
    label: "PERSONALIZE",
    title: "Adapt the experience.",
    description:
      "Use customer context to determine which content, recommendation, explanation or next action is relevant to the current journey.",
  },
  {
    label: "ASSIST",
    title: "Help complete the task.",
    description:
      "Combine conversational interfaces with workflows and operational systems so AI can assist customers beyond simply answering informational questions.",
  },
  {
    label: "LEARN",
    title: "Observe experience signals.",
    description:
      "Analyze interactions, outcomes and feedback to identify recurring friction and opportunities for experience improvement.",
  },
];

const principles: Principle[] = [
  {
    title: "Context before personalization.",
    description:
      "Personalization should begin with useful customer context and clear purpose rather than personalization for its own sake.",
  },
  {
    title: "Journey before channel.",
    description:
      "Customers experience a relationship across channels even when the organization manages those channels independently.",
  },
  {
    title: "Assistance before automation.",
    description:
      "Automation should make the customer journey easier, not force customers through rigid workflows simply because automation is possible.",
  },
  {
    title: "Trust before intelligence.",
    description:
      "AI-enabled experiences require appropriate privacy, security, transparency and control over how customer information is used.",
  },
  {
    title: "Resolution before deflection.",
    description:
      "Customer service technology should optimize for meaningful resolution rather than simply minimizing human interaction.",
  },
  {
    title: "Learning before assumption.",
    description:
      "Experience design should continuously use behavioral evidence and customer feedback instead of relying entirely on internal assumptions.",
  },
];

const channels: Channel[] = [
  {
    title: "Web",
    description:
      "Connected digital experiences informed by customer intent and journey context.",
  },
  {
    title: "Mobile",
    description:
      "Context-aware experiences designed around frequent and immediate interactions.",
  },
  {
    title: "Conversation",
    description:
      "Natural-language assistance through intelligent chat and messaging experiences.",
  },
  {
    title: "Support",
    description:
      "Service experiences connected with customer history, knowledge and resolution workflows.",
  },
  {
    title: "Commerce",
    description:
      "Discovery, recommendation and purchasing experiences connected across the customer journey.",
  },
  {
    title: "Physical",
    description:
      "Customer context that can connect digital interactions with relevant offline experiences.",
  },
];

const customerSignals: Signal[] = [
  {
    source: "SEARCH",
    signal: "Repeated product comparison",
    interpretation: "Evaluation intent",
  },
  {
    source: "WEB",
    signal: "Pricing page revisited",
    interpretation: "High consideration",
  },
  {
    source: "SUPPORT",
    signal: "Repeated setup question",
    interpretation: "Onboarding friction",
  },
  {
    source: "PRODUCT",
    signal: "Feature not activated",
    interpretation: "Adoption opportunity",
  },
  {
    source: "FEEDBACK",
    signal: "Recurring usability theme",
    interpretation: "Experience issue",
  },
  {
    source: "ACCOUNT",
    signal: "Usage pattern changed",
    interpretation: "Lifecycle signal",
  },
];

const experienceLayers: ExperienceLayer[] = [
  {
    label: "SIGNALS",
    title: "Observe",
    description:
      "Capture relevant customer signals across digital behavior, transactions, conversations, products and service interactions.",
    items: ["Behavior", "Transactions", "Conversations", "Feedback"],
  },
  {
    label: "CONTEXT",
    title: "Understand",
    description:
      "Connect customer identity, journey stage, history and current intent into usable context for experience systems.",
    items: ["Identity", "History", "Intent", "Lifecycle"],
  },
  {
    label: "INTELLIGENCE",
    title: "Decide",
    description:
      "Apply analytics, AI and business rules to determine relevant recommendations, actions and assistance.",
    items: ["AI", "Rules", "Prediction", "Decisioning"],
  },
  {
    label: "ORCHESTRATION",
    title: "Coordinate",
    description:
      "Connect channels, workflows and operational systems so customer experiences remain coherent across organizational boundaries.",
    items: ["Channels", "Workflows", "APIs", "Operations"],
  },
  {
    label: "EXPERIENCE",
    title: "Engage",
    description:
      "Deliver relevant interactions across web, mobile, conversation, service, commerce and other customer touchpoints.",
    items: ["Web", "Mobile", "Service", "Commerce"],
  },
  {
    label: "LEARNING",
    title: "Improve",
    description:
      "Measure behavior and outcomes, investigate friction and feed new insight back into experience design.",
    items: ["Analytics", "Feedback", "Experiments", "Optimization"],
  },
];

const outcomes: Outcome[] = [
  {
    title: "Less fragmented journeys",
    description:
      "Connect customer context across systems and channels so interactions feel like parts of one relationship.",
  },
  {
    title: "More relevant experiences",
    description:
      "Use meaningful context to determine which information, assistance and actions matter during each interaction.",
  },
  {
    title: "Better service context",
    description:
      "Give service teams and AI assistants access to relevant history and knowledge before responding.",
  },
  {
    title: "Faster experience learning",
    description:
      "Use behavioral and qualitative signals to identify where journeys require improvement.",
  },
];

const conversationalPoints = [
  "Understand natural language",
  "Retrieve governed knowledge",
  "Maintain conversation context",
  "Connect with customer history",
  "Trigger operational workflows",
  "Escalate with useful context",
];

const feedbackSources = [
  "SURVEYS",
  "REVIEWS",
  "SUPPORT CONVERSATIONS",
  "CHAT TRANSCRIPTS",
  "SEARCH QUERIES",
  "PRODUCT BEHAVIOR",
  "SOCIAL FEEDBACK",
  "CUSTOMER INTERVIEWS",
];

const measurements = [
  {
    label: "JOURNEY",
    title: "Completion",
    text: "Can customers successfully accomplish the task the journey was designed to support?",
  },
  {
    label: "EFFORT",
    title: "Friction",
    text: "Where do customers encounter unnecessary steps, repetition, confusion or delay?",
  },
  {
    label: "SERVICE",
    title: "Resolution",
    text: "Are customer problems actually resolved through the interaction?",
  },
  {
    label: "PRODUCT",
    title: "Adoption",
    text: "Do customers discover and use the capabilities required to receive value from the product?",
  },
  {
    label: "RELATIONSHIP",
    title: "Retention",
    text: "Does the experience support continued customer engagement over time?",
  },
  {
    label: "FEEDBACK",
    title: "Sentiment",
    text: "What recurring themes emerge from direct and indirect customer feedback?",
  },
];

const trustItems = [
  {
    Icon: ShieldCheck,
    title: "Privacy",
    text: "Use customer information according to appropriate permissions, purpose and governance.",
  },
  {
    Icon: Users,
    title: "Identity",
    text: "Understand whose context is being used and how identity is resolved across systems.",
  },
  {
    Icon: BrainCircuit,
    title: "AI governance",
    text: "Define where AI can assist, recommend, decide or take action within customer-facing workflows.",
  },
  {
    Icon: Eye,
    title: "Transparency",
    text: "Design intelligent interactions so customers can understand when and how automated systems are involved.",
  },
];

const marqueeWords = [
  "UNDERSTAND",
  "CONNECT",
  "PERSONALIZE",
  "ASSIST",
  "RESOLVE",
  "LEARN",
  "IMPROVE",
];

const flowWords = [
  "SIGNAL",
  "CONTEXT",
  "INTELLIGENCE",
  "ACTION",
  "EXPERIENCE",
  "LEARNING",
];

/* ============================================================
   BACKGROUND COMPONENT
============================================================ */

function PurpleGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#390b44]/60 blur-[180px] ${className}`}
    />
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

  return (
    <main className="relative overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-[#7046e6]"
      />

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5  pt-30 pb-10 md:px-10 ">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
          }}
        />


        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <h1 className="hyi-h1 hyi-white">
              They feel
              <span className="block hyi-blue">
                the experience.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[730px] hyi-p">
              The customer does not see your systems. Design
              connected customer experiences where data, digital
              products, service operations and AI work together to
              understand context and help customers accomplish what
              they came to do.
            </p>
          </motion.div>
        </div>
      </section>

     

      {/* =====================================================
          EXPERIENCE MANIFESTO
      ===================================================== */}
      <section
        id="experience"
        className="relative overflow-hidden  "
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Customer experience is the sum of
                <span className="block hyi-blue">
                  every interaction the customer remembers.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Customers rarely think in terms of CRM systems,
                  commerce platforms, contact centers, data
                  warehouses, marketing systems or organizational
                  departments. They experience one relationship.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Customer experience transformation connects the
                  systems behind that relationship so context can
                  move with the customer instead of disappearing
                  whenever they change channel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ONE QUESTION
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              What is the customer trying
              <span className="block hyi-blue">
                to accomplish right now?
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              A useful customer experience begins with customer
              intent. Technology then determines how effectively the
              organization can recognize that intent, retrieve
              relevant context and respond through the right
              interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER JOURNEY
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508]">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                One customer.
                <span className="block hyi-blue">
                  Many moments.
                </span>
              </h2>

              <p className="mt-2 max-w-[400px] hyi-p">
                Journey design connects individual customer moments
                into a coherent lifecycle rather than optimizing
                each channel independently.
              </p>
            </div>

            <div>
              {journeyStages.map((stage) => (
                <motion.article
                  key={stage.stage}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {stage.stage}
                  </span>

                  <div className="mt-2 grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
                    <h3 className="hyi-h3 hyi-white">
                      {stage.title}
                    </h3>

                    <div>
                      <p className="hyi-p">{stage.description}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {stage.signals.map((signal) => (
                          <span
                            key={signal}
                            className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
                          >
                            {signal.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER SIGNALS
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Behavior
                <span className="block hyi-blue">
                  creates context.
                </span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#030303]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Eye size={14} className="text-[#9878ef]" />

                  <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                    EXPERIENCE SIGNAL STREAM
                  </span>
                </div>

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#a98cf1]"
                />
              </div>

              <div className="hidden grid-cols-[0.7fr_1fr_1fr] border-b border-white/[0.06] px-6 py-4 md:grid">
                {["SOURCE", "SIGNAL", "INTERPRETATION"].map(
                  (item) => (
                    <span
                      key={item}
                      className="font-mono text-[6px] tracking-[0.14em] text-white/[0.3]"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              {customerSignals.map((item, index) => (
                <motion.div
                  key={item.signal}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="grid gap-3 border-b border-white/[0.05] px-6 py-5 md:grid-cols-[0.7fr_1fr_1fr]"
                >
                  <span className="font-mono text-[6px] tracking-[0.13em] text-[#a98cf1]">
                    {item.source}
                  </span>

                  <span className="hyi-p">{item.signal}</span>

                  <span className="hyi-p">
                    {item.interpretation}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              AI should know enough context
              <span className="block hyi-blue">
                to make the next interaction useful.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          AI SYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          {aiSystems.map((item) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-5 border-t border-white/[0.07] py-8 lg:grid-cols-[0.65fr_1fr]"
            >
              <div>
                <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                  {item.label}
                </span>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {item.title}
                </h3>
              </div>

              <p className="hyi-p">{item.description}</p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </section>

      {/* =====================================================
          CONVERSATIONAL AI
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Conversation
                <span className="block hyi-blue">
                  becomes interface.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Conversational AI creates a new experience layer
                between customers and enterprise systems.
              </p>

              <p className="mt-2 max-w-[590px] hyi-p">
                Instead of forcing every customer intent through
                menus, forms and search interfaces, natural-language
                systems can interpret a request, retrieve relevant
                knowledge, collect required information and connect
                with workflows capable of completing the task.
              </p>
            </motion.div>

            <div className="space-y-3">
              {conversationalPoints.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4"
                >
                  <span className="hyi-p">{item}</span>

                  <ChevronRight
                    size={13}
                    className="text-[#9878ef]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Don&apos;t ask the customer to remember
              <span className="block hyi-blue">
                what your systems already know.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[750px] hyi-p">
              Connected experience architecture allows relevant
              context to follow the customer across channels while
              appropriate governance determines what information
              should be used.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE OPERATING SYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Experience
                <span className="block hyi-blue">
                  operating system.
                </span>
              </h2>
            </div>

            <div>
              {experienceLayers.map((layer) => (
                <motion.article
                  key={layer.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.6fr_1.4fr]"
                >
                  <div>
                    <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                      {layer.label}
                    </span>

                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {layer.title}
                    </h3>
                  </div>

                  <div>
                    <p className="hyi-p">{layer.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
                        >
                          {item.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
              <h2 className="hyi-h1 hyi-white">
                Experience
                <span className="block hyi-blue">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              Customer experience requires coordination across
              design, data, AI, platforms and operations.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(112,70,230,.45)",
                }}
                className="group rounded-[29px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.description}</p>

                <p className="mt-2 border-t border-white/[0.07] pt-3 hyi-p">
                  {item.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OMNICHANNEL
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Different channels.
              <span className="block hyi-blue">
                Same relationship.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] hyi-p">
              Omnichannel experience is not simply the presence of
              multiple channels. It is the ability for customer
              context and journey continuity to survive movement
              between them.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <motion.article
                key={channel.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.06 }}
                className="relative  rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
              >
                <h3 className="hyi-h3 hyi-white">
                  {channel.title}
                </h3>

                <p className="mt-2 hyi-p">{channel.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VOICE OF CUSTOMER
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Customers are
                <span className="block hyi-blue">
                  already telling you.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Feedback exists across more than surveys. Customer
                conversations, support tickets, reviews, search
                behavior, abandonment and product usage can all
                expose experience problems.
              </p>
            </motion.div>

            <div>
              {feedbackSources.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center justify-between border-t border-white/[0.07] py-5"
                >
                  <span className="font-mono hyi-p tracking-[0.16em]">
                    {item}
                  </span>

                  <ArrowRight
                    size={12}
                    className="text-[#9878ef]/50"
                  />
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              From system-centric
              <span className="block hyi-blue">
                to customer-centric.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                SYSTEM-CENTRIC
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Customer adapts to the system.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Repeat information",
                  "Navigate organizational boundaries",
                  "Search for the correct channel",
                  "Explain context again",
                  "Follow rigid workflows",
                  "Receive generic interactions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[28px] border border-[#7046e6]/25 bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                CUSTOMER-CENTRIC
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                System adapts to the journey.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Carry relevant context",
                  "Recognize customer intent",
                  "Connect channels",
                  "Retrieve useful knowledge",
                  "Assist with next actions",
                  "Learn from outcomes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#9878ef]"
                    />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEASUREMENT
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Measure
              <span className="block hyi-blue">
                the journey.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {measurements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                  {item.label}
                </span>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Intelligent
                <span className="block hyi-blue">
                  experiences require trust.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                The more context an experience uses, the more
                important it becomes to define appropriate controls
                around data, identity, AI behavior and customer
                choice.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trustItems.map(({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className=" rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={16}
                      className="text-[#bba4f6]"
                    />
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Experience
                <span className="block hyi-blue">
                  principles.
                </span>
              </h2>
            </div>

            <div>
              {principles.map((principle) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {principle.title}
                  </h3>

                  <p className="hyi-p">{principle.description}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Experience
              <span className="block hyi-blue">
                outcomes.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOW STRIP
      ===================================================== */}
    
      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden pt-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Technology disappears
              <span className="block hyi-blue">
                when the experience simply works.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              Customer experience transformation connects the
              intelligence of the enterprise with the moments where
              customers actually interact with it.
            </p>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              The goal is not to expose more technology to the
              customer. It is to use technology, data and AI behind
              the experience so each interaction becomes easier to
              understand, more relevant and more useful.
            </p>

          
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}