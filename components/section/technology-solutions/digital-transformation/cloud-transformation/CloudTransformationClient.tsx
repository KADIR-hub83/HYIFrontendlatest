"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

/* ============================================================================
 * CLOUD TRANSFORMATION PAGE — everything in ONE file
 * ----------------------------------------------------------------------------
 * Use it in your route:
 *
 *   // app/.../cloud-transformation/page.tsx
 *   import CloudTransformationClient from "./CloudTransformationClient";
 *   export default function Page() { return <CloudTransformationClient />; }
 *
 * Order: Hero > Thesis > Operating model > Paths > AI foundation > Platform >
 *        Data+AI > Governance > Security > FinOps > Roadmap > Principles >
 *        Outcomes > CTA
 * ==========================================================================*/

const CONTACT_HREF = "/home-page/contact"; // change if your contact route differs

/* ========================================================================== */
/* 00 — HERO                                                                  */
/* ========================================================================== */

const words = [
  "MODERNIZE",
  "MIGRATE",
  "REBUILD",
  "PLATFORM",
  "DATA",
  "AI",
  "SECURE",
  "OPERATE",
];

function CloudTransformationHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.15]);

  return (
    <>
      <section className="relative min-h-[115vh] bg-[#000000] px-5 pb-16 md:px-20">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            style={{ y, opacity }}
            className="relative flex min-h-[780px] flex-col justify-between py-16 md:py-24"
          >
            <div className="grid gap-10 lg:grid-cols-[.3fr_1.7fr]">
              <div>
                <p className="max-w-[240px] font-mono text-[12px] leading-6 tracking-[0.18em] text-white/[0.24]">
                  FROM INFRASTRUCTURE
                  <br />
                  TO AN OPERATING
                  <br />
                  FOUNDATION FOR
                  <br />
                  SOFTWARE, DATA
                  <br />
                  AND AI.
                </p>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28]"
                >
                  TRANSFORMATION / NOT JUST MIGRATION
                </motion.p>

                <div className="mt-12">
                  <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.76] tracking-[-0.09em]"
                  >
                    Cloud
                  </motion.h1>

                  <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.96] tracking-[-0.09em] text-white/[0.22]"
                  >
                    Transformation.
                  </motion.h1>
                </div>
              </div>
            </div>

            <div className="grid gap-10 border-t border-white/[0.08] pt-9 lg:grid-cols-[.3fr_1fr_.7fr]">
              <span className="font-mono text-[7px] text-white/[0.18]">
                00 / INTRODUCTION
              </span>

              <p className="max-w-[700px] text-[22px] leading-8 text-white/[0.47] md:leading-9">
                Cloud transformation is the redesign of technology foundations,
                delivery practices, operating models and governance so an
                enterprise can build and operate modern digital products, data
                platforms and AI capabilities with greater adaptability.
              </p>

              <div className="lg:text-right">
                <motion.a
                  href="#thesis"
                  whileHover={{ y: 5 }}
                  className="inline-flex items-center gap-4 font-mono text-[12px] tracking-[0.18em] text-white/90"
                >
                  EXPLORE TRANSFORMATION
                  <ArrowDown size={10} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* marquee: two identical halves, so the -50% loop is seamless */}
      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex w-max whitespace-nowrap"
        >
          {[...words, ...words, ...words, ...words].map((word, index) => (
            <div key={`${word}-${index}`} className="flex items-center">
              <span className="px-10 text-3xl font-medium tracking-[-0.045em] text-white/[0.12] md:text-5xl">
                {word}
              </span>
              <span className="text-white/[0.15]">/</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

/* ========================================================================== */
/* 01 — THESIS                                                                */
/* ========================================================================== */

const statements = [
  {
    number: "01",
    title: "Cloud is not a destination.",
    text: "Moving infrastructure from one environment to another does not automatically create a modern technology organization. Transformation begins when architecture, software delivery, security, data and operations evolve together.",
  },
  {
    number: "02",
    title: "Migration is only one movement.",
    text: "Some workloads should migrate with limited change. Others benefit from re-platforming, refactoring, replacement or retirement. The transformation strategy should reflect business value, technical constraints and operational requirements.",
  },
  {
    number: "03",
    title: "Platforms change how teams build.",
    text: "Reusable cloud foundations can reduce repeated infrastructure decisions and give engineering teams consistent ways to provision environments, deploy software, observe workloads and apply security controls.",
  },
  {
    number: "04",
    title: "AI changes the cloud requirement.",
    text: "Modern AI workloads introduce requirements around accelerated compute, data access, model services, inference, observability, security and cost management that should be considered as part of the cloud foundation.",
  },
];

function TransformationThesis() {
  return (
    <section id="thesis" className="bg-[#000000] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.32fr_1.68fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.3]">
                01 / THESIS
              </p>
              <p className="mt-8 max-w-[300px] text-[22px] leading-7 text-white/[0.3]">
                Transformation starts with a different question: not where
                should infrastructure run, but how should technology operate?
              </p>
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="max-w-[1150px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[94px]"
            >
              The cloud becomes valuable
              <span className="block text-white/[0.23]">
                when the operating model changes with it.
              </span>
            </motion.h2>

            <div className="mt-24">
              {statements.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.04 }}
                  className="grid gap-7 border-t border-white/[0.08] py-10 md:grid-cols-[90px_.8fr_1fr]"
                >
                  <span className="font-mono text-[12px] text-white/[0.17]">
                    {item.number}
                  </span>
                  <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="text-[22px] leading-8 text-white/[0.4]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 02 — CLOUD OPERATING MODEL                                                 */
/* ========================================================================== */

const layers = [
  {
    number: "01",
    label: "BUSINESS",
    title: "Product direction",
    text: "Technology investment connects to business capabilities, customer experiences and measurable operational needs.",
  },
  {
    number: "02",
    label: "PLATFORM",
    title: "Cloud foundation",
    text: "Shared infrastructure patterns provide networking, identity, environments, policies and deployment foundations.",
  },
  {
    number: "03",
    label: "ENGINEERING",
    title: "Software delivery",
    text: "Development teams use repeatable paths for building, testing, deploying and operating applications.",
  },
  {
    number: "04",
    label: "DATA",
    title: "Information foundation",
    text: "Data platforms make governed information available to analytics, applications and artificial intelligence.",
  },
  {
    number: "05",
    label: "AI",
    title: "Intelligence layer",
    text: "Model services, retrieval, inference and AI applications operate on top of controlled cloud and data foundations.",
  },
  {
    number: "06",
    label: "SECURITY",
    title: "Continuous control",
    text: "Identity, policy, secrets, workload protection and monitoring are integrated throughout the operating environment.",
  },
  {
    number: "07",
    label: "OPERATIONS",
    title: "Reliability",
    text: "Observability, incident response, resilience and capacity management support workloads after deployment.",
  },
  {
    number: "08",
    label: "ECONOMICS",
    title: "Financial accountability",
    text: "Cloud consumption becomes visible enough for teams to understand cost, ownership and architectural trade-offs.",
  },
];

function CloudOperatingModel() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
            02 / CLOUD OPERATING MODEL
          </p>
          <p className="max-w-[520px] text-[22px] leading-7 text-white/[0.32]">
            Cloud transformation spans more than infrastructure. The operating
            model connects business priorities, platforms, engineering, data,
            AI, security and operations.
          </p>
        </div>

        <div className="mt-20">
          {layers.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              whileHover={{ x: 8 }}
              className="group grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.35fr_.65fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {item.number}
              </span>
              <span className="font-mono text-[15px] tracking-[0.18em] text-white/[0.26]">
                {item.label}
              </span>
              <h3 className="text-3xl font-extrabold tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1">
                {item.title}
              </h3>
              <p className="max-w-[650px] text-[22px] leading-7 text-white/[0.37]">
                {item.text}
              </p>
            </motion.article>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 03 — TRANSFORMATION PATHS                                                  */
/* ========================================================================== */

const paths = [
  ["01", "Retain", "Keep a workload where it is when migration would create little meaningful value."],
  ["02", "Rehost", "Move a workload with limited architectural change when speed or infrastructure transition is the primary objective."],
  ["03", "Replatform", "Change selected infrastructure or platform components while preserving much of the application architecture."],
  ["04", "Refactor", "Redesign application components to use cloud-native architecture, managed services or modern engineering patterns."],
  ["05", "Replace", "Move from a custom or legacy application toward a different product or platform where appropriate."],
  ["06", "Retire", "Remove workloads that no longer provide sufficient operational or business value."],
];

function TransformationPaths() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          03 / TRANSFORMATION PATHS
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1250px] text-[clamp(4rem,8vw,8.3rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
        >
          Not every workload
          <span className="text-white/[0.22]"> should take the same path.</span>
        </motion.h2>

        <div className="mt-24">
          {paths.map(([number, title, description]) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid min-h-[190px] gap-8 border-t border-white/[0.08] py-9 md:grid-cols-[90px_.7fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {number}
              </span>
              <h3 className="text-4xl font-extrabold tracking-[-0.055em] md:text-3xl">
                {title}
              </h3>
              <p className="max-w-[650px] text-[22px] leading-8 text-white/[0.38]">
                {description}
              </p>
            </motion.article>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 04 — AI CLOUD FOUNDATION                                                   */
/* ========================================================================== */

const aiItems = [
  {
    number: "A01",
    title: "Accelerated compute",
    text: "AI workloads may require GPU or other accelerated compute capacity with different scheduling, availability and cost characteristics than conventional applications.",
  },
  {
    number: "A02",
    title: "Model services",
    text: "Cloud platforms can expose managed model APIs, model hosting, inference services and supporting AI infrastructure.",
  },
  {
    number: "A03",
    title: "Enterprise knowledge",
    text: "AI applications often require secure access to organizational information through retrieval and governed data services.",
  },
  {
    number: "A04",
    title: "AI application runtime",
    text: "Agents, retrieval services, APIs and application components require reliable environments for production execution.",
  },
  {
    number: "A05",
    title: "AI observability",
    text: "Operational visibility should extend beyond infrastructure into model requests, latency, failures, retrieval and application behavior.",
  },
];

function AICloudFoundation() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.45fr_1.55fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
                04 / AI CLOUD FOUNDATION
              </p>
              <p className="mt-9 max-w-[330px] text-[22px] leading-7 text-white/[0.32]">
                Cloud transformation increasingly needs to anticipate the
                infrastructure and governance requirements of enterprise AI.
              </p>
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
            >
              Build a cloud foundation
              <span className="block text-white/[0.23]">ready for AI.</span>
            </motion.h2>

            <p className="mt-12 max-w-[780px] text-[22px] leading-9 text-white/[0.42]">
              Generative AI introduces new infrastructure patterns without
              removing traditional cloud engineering requirements. Reliable
              networking, identity, security, data governance and operations
              remain fundamental while compute and model services become more
              specialized.
            </p>

            <div className="mt-20">
              {aiItems.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.6fr_1fr]"
                >
                  <span className="font-mono text-[12px] text-white/[0.16]">
                    {item.number}
                  </span>
                  <h3 className="text-3xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="text-[22px] leading-7 text-white/[0.36]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 05 — PLATFORM ENGINEERING                                                  */
/* ========================================================================== */

const platformItems = [
  "Account and subscription structure",
  "Identity and access patterns",
  "Network foundations",
  "Infrastructure as code",
  "Application environments",
  "CI/CD integration",
  "Secrets management",
  "Observability defaults",
  "Security controls",
  "Service catalogues",
  "Developer documentation",
  "Operational ownership",
];

function PlatformEngineering() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              05 / PLATFORM ENGINEERING
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
            >
              Turn cloud complexity
              <span className="block text-white/[0.23]">into paved roads.</span>
            </motion.h2>

            <p className="mt-10 max-w-[620px] text-[22px] leading-8 text-white/[0.39]">
              Platform engineering can package recurring cloud decisions into
              reusable services and engineering paths. The objective is not to
              hide everything from developers; it is to remove unnecessary
              repetition while preserving appropriate flexibility.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {platformItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.025 }}
                whileHover={{ x: 6 }}
                className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] py-6"
              >
                <span className="font-mono text-[12px] text-white/[0.16]">
                  P-{String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[22px] text-white/[0.42]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 06 — DATA + AI READINESS                                                   */
/* ========================================================================== */

const readiness = [
  {
    number: "01",
    title: "Accessible",
    text: "Required information can be reached through controlled interfaces and appropriate permissions.",
  },
  {
    number: "02",
    title: "Understandable",
    text: "Teams can determine what data means, where it originates and how it should be used.",
  },
  {
    number: "03",
    title: "Governed",
    text: "Access, classification, retention and use are constrained according to organizational requirements.",
  },
  {
    number: "04",
    title: "Observable",
    text: "Quality, freshness, failures and operational behavior can be monitored after data enters production systems.",
  },
];

function DataAIReadiness() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          06 / DATA + AI READINESS
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-[1350px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
        >
          AI cannot become operational
          <span className="text-white/[0.23]"> without usable data.</span>
        </motion.h2>

        <div className="mt-24 grid gap-12 lg:grid-cols-4">
          {readiness.map((item) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/[0.08] pt-7"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {item.number}
              </span>
              <h3 className="mt-12 text-3xl font-extrabold tracking-[-0.05em]">
                {item.title}
              </h3>
              <p className="mt-6 text-[22px] leading-7 text-white/[0.35]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 07 — GOVERNANCE                                                            */
/* ========================================================================== */

const questions = [
  "Who can create cloud resources?",
  "Which regions may workloads use?",
  "How are identities assigned?",
  "Which services are approved?",
  "How are environments separated?",
  "Where can sensitive data exist?",
  "How are policy violations detected?",
  "Who owns each workload?",
  "How are exceptions approved?",
  "How is cloud consumption attributed?",
];

function CloudGovernance() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.6fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              07 / GOVERNANCE
            </p>
            <h2 className="mt-10 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Freedom
              <span className="block text-white/[0.23]">needs boundaries.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-[750px] text-[22px] leading-9 text-white/[0.42]">
              Cloud platforms make infrastructure programmable and rapidly
              accessible. Governance defines the organizational boundaries that
              allow teams to use that flexibility responsibly.
            </p>

            <div className="mt-14 border-t border-white/[0.08]">
              {questions.map((question, index) => (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] py-6"
                >
                  <span className="font-mono text-[12px] text-white/[0.16]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[22px] text-white/[0.42]">
                    {question}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 08 — CLOUD SECURITY                                                        */
/* ========================================================================== */

const security = [
  ["Identity", "Authenticate people, services and workloads before granting access."],
  ["Least privilege", "Limit permissions to what a role or workload actually requires."],
  ["Network control", "Design connectivity according to workload exposure and trust boundaries."],
  ["Secrets", "Manage credentials and sensitive configuration through controlled services."],
  ["Data protection", "Apply appropriate controls to data in storage, transit and application use."],
  ["Workload security", "Protect compute, containers, functions and application runtimes."],
  ["Detection", "Collect signals that help identify suspicious or unexpected behavior."],
  ["Response", "Prepare operational processes for investigating and containing security events."],
];

function CloudSecurity() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          08 / CLOUD SECURITY
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
        >
          Security becomes part
          <span className="text-white/[0.23]"> of the platform.</span>
        </motion.h2>

        <div className="mt-20">
          {security.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-7 border-t border-white/[0.08] py-8 md:grid-cols-[90px_.6fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                S-{String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-medium">{title}</h3>
              <p className="text-[22px] leading-7 text-white/[0.36]">{text}</p>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 09 — CLOUD ECONOMICS (FinOps)                                              */
/* ========================================================================== */

const finops = [
  "Allocation",
  "Visibility",
  "Ownership",
  "Forecasting",
  "Optimization",
  "Architecture",
];

function FinOpsSection() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.45fr_1.55fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              09 / CLOUD ECONOMICS
            </p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[90px]"
            >
              Cloud cost is
              <span className="block text-white/[0.23]">
                an architecture signal.
              </span>
            </motion.h2>

            <p className="mt-12 max-w-[780px] text-[22px] leading-9 text-white/[0.42]">
              Consumption-based infrastructure changes the relationship between
              architecture and financial management. Teams need visibility into
              where cloud resources are consumed, who owns them and what
              operational value they support.
            </p>

            <div className="mt-20 grid md:grid-cols-2">
              {finops.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="min-h-[180px] border border-white/[0.08] p-7"
                >
                  <span className="font-mono text-[6px] text-white/[0.16]">
                    F-{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-14 text-3xl font-extrabold tracking-[-0.04em]">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 10 — ROADMAP                                                               */
/* ========================================================================== */

const roadmap = [
  ["01", "Assess", "Understand workloads, dependencies, architecture, operations, security, data and organizational constraints."],
  ["02", "Prioritize", "Group transformation opportunities according to business value, technical feasibility, risk and dependencies."],
  ["03", "Foundation", "Establish identity, networking, governance, environments, observability and reusable cloud patterns."],
  ["04", "Mobilize", "Create teams, delivery practices and migration or modernization waves."],
  ["05", "Transform", "Execute workload-specific migration, modernization and platform changes."],
  ["06", "Operate", "Run transformed workloads with reliability, security, observability and cost accountability."],
  ["07", "Expand", "Use the cloud foundation to accelerate data platforms, digital products and AI adoption."],
];

function TransformationRoadmap() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              10 / ROADMAP
            </p>
            <h2 className="mt-10 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
              Transformation
              <span className="block text-white/[0.23]">
                in controlled waves.
              </span>
            </h2>
          </div>

          <div>
            {roadmap.map(([number, title, description]) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="min-h-[300px] border-t border-white/[0.08] py-10"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-[7px] text-white/[0.16]">
                    {number}
                  </span>
                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                    PHASE {number}
                  </span>
                </div>

                <div className="mt-16 grid gap-9 md:grid-cols-[.65fr_1fr]">
                  <h3 className="text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                    {title}
                  </h3>
                  <p className="max-w-[600px] text-[22px] leading-8 text-white/[0.38]">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 11 — PRINCIPLES                                                            */
/* ========================================================================== */

const principles = [
  ["P01", "Modernize with purpose.", "Choose architectural change because it creates operational or business value, not simply because newer technology exists."],
  ["P02", "Build foundations before scale.", "Identity, networking, governance and operational standards should support expansion rather than being reconstructed for every workload."],
  ["P03", "Prefer reusable paths.", "Repeated engineering decisions can become platform capabilities that improve consistency across teams."],
  ["P04", "Treat security as architecture.", "Security controls should exist throughout the platform and software lifecycle rather than appearing only at final review."],
  ["P05", "Make ownership visible.", "Applications, infrastructure, data and cloud consumption should have clear operational ownership."],
  ["P06", "Design for operations.", "A workload is not transformed when it deploys successfully; it must also be observable, supportable and recoverable."],
  ["P07", "Prepare for AI intentionally.", "AI infrastructure should extend a strong cloud and data foundation rather than become a disconnected parallel environment."],
];

function TransformationPrinciples() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          11 / PRINCIPLES
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
        >
          Principles survive
          <span className="text-white/[0.23]"> technology cycles.</span>
        </motion.h2>

        <div className="mt-20">
          {principles.map(([number, title, description]) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-7 border-t border-white/[0.08] py-9 md:grid-cols-[90px_.8fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {number}
              </span>
              <h3 className="text-3xl font-medium tracking-[-0.04em]">
                {title}
              </h3>
              <p className="text-[18px] leading-8 text-white/[0.37]">
                {description}
              </p>
            </motion.article>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 12 — OUTCOMES                                                              */
/* ========================================================================== */

const outcomes = [
  "Modern technology foundations",
  "Faster infrastructure provisioning",
  "More repeatable software delivery",
  "Stronger operational visibility",
  "Governed cloud consumption",
  "Improved workload portability",
  "Better data accessibility",
  "AI-ready infrastructure",
];

function CloudOutcomes() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          12 / TRANSFORMATION OUTCOMES
        </p>

        <div className="mt-20 grid md:grid-cols-2">
          {outcomes.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 7 }}
              className="min-h-[250px] border border-white/[0.08] p-8"
            >
              <span className="font-mono text-[6px] text-white/[0.16]">
                O-{String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-24 max-w-[550px] text-3xl font-medium leading-[1.02] tracking-[-0.05em] md:text-4xl">
                {item}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* 13 — CTA                                                                   */
/* ========================================================================== */

function CloudTransformationCTA() {
  return (
    <section className="bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          13 / NEXT STEP
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-14 max-w-[1350px] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
        >
          Ready to change how
          <span className="text-white/[0.23]"> technology operates?</span>
        </motion.h2>

        <div className="mt-20 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-[650px] text-[22px] leading-8 text-white/[0.4]">
            Tell us about your workloads, platforms and goals. We will help you
            decide where to start and which path fits each system.
          </p>

          <motion.a
            href={CONTACT_HREF}
            whileHover={{ x: 8 }}
            className="group inline-flex items-center gap-4 self-start rounded-full bg-white px-8 py-5 text-[16px] font-medium text-black lg:self-auto"
          >
            Start a conversation
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* PAGE                                                                       */
/* ========================================================================== */

export default function CloudTransformationClient() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    // overflow-x-clip (not overflow-hidden) so the sticky side columns keep working
    <div className="relative overflow-x-clip bg-[#000000] text-white">
      <motion.div
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      <CloudTransformationHero />
      <TransformationThesis />
      <CloudOperatingModel />
      <TransformationPaths />
      <AICloudFoundation />
      <PlatformEngineering />
      <DataAIReadiness />
      <CloudGovernance />
      <CloudSecurity />
      <FinOpsSection />
      <TransformationRoadmap />
      <TransformationPrinciples />
      <CloudOutcomes />
      <CloudTransformationCTA />
    </div>
  );
}