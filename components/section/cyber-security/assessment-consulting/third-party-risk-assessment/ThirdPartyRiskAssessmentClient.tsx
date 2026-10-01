"use client";



import {

  motion,

  useScroll,

  useSpring,

  useTransform,

} from "framer-motion";



import {

  Activity,

  ArrowRight,

  CheckCircle2,

  ChevronRight,

  CircleDot,

  Cloud,

  Database,

  Eye,

  FileSearch,

  Gauge,

  GitBranch,

  Layers3,

  Network,

  RefreshCcw,

  Server,

  ShieldCheck,

  Workflow,

  Zap,

} from "lucide-react";



import type { ElementType, ReactNode } from "react";



/* =========================================================

   TYPES

========================================================= */



type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "REVIEW";



type VendorRow = {

  vendor: string;

  service: string;

  exposure: string;

  score: number;

  risk: RiskLevel;

};



type Capability = {

  number: string;

  title: string;

  description: string;

  Icon: ElementType;

};



/* =========================================================

   DATA

========================================================= */



const vendors: VendorRow[] = [

  {

    vendor: "Cloud Platform",

    service: "Infrastructure",

    exposure: "Critical",

    score: 87,

    risk: "LOW",

  },

  {

    vendor: "Payment Provider",

    service: "Financial Data",

    exposure: "High",

    score: 68,

    risk: "MEDIUM",

  },

  {

    vendor: "CRM Platform",

    service: "Customer Data",

    exposure: "High",

    score: 54,

    risk: "REVIEW",

  },

  {

    vendor: "Analytics Partner",

    service: "Data Processing",

    exposure: "Medium",

    score: 39,

    risk: "HIGH",

  },

];



const riskTrend = [

  36, 42, 39, 48, 45, 56, 52, 63, 59, 72, 68, 78, 74, 84,

];



const capabilities: Capability[] = [

  {

    number: "01",

    title: "Vendor Discovery",

    description:

      "Build visibility into third parties, service providers, technology partners and external dependencies that interact with business systems, sensitive information or critical operational processes.",

    Icon: Network,

  },

  {

    number: "02",

    title: "Security Assessment",

    description:

      "Evaluate relevant vendor security practices, technical safeguards, policies, governance processes and supporting evidence using assessment criteria aligned with the relationship.",

    Icon: ShieldCheck,

  },

  {

    number: "03",

    title: "Risk Classification",

    description:

      "Segment third parties using business criticality, data access, connectivity, service dependency and security observations so assessment depth can match potential exposure.",

    Icon: Gauge,

  },

  {

    number: "04",

    title: "Evidence Validation",

    description:

      "Review relevant documentation and evidence to distinguish supported security practices from incomplete responses, unresolved questions and controls requiring additional validation.",

    Icon: FileSearch,

  },

  {

    number: "05",

    title: "Dependency Analysis",

    description:

      "Understand how external providers connect with applications, infrastructure, data flows and operational processes to identify concentrations and important dependency relationships.",

    Icon: GitBranch,

  },

  {

    number: "06",

    title: "Continuous Oversight",

    description:

      "Create a structured approach for reassessment, issue tracking, remediation follow-up and ongoing third-party security oversight as relationships and environments change.",

    Icon: Activity,

  },

];



const assessmentLayers = [

  {

    number: "01",

    title: "Business Criticality",

    description:

      "Understand how important the third party is to products, operations, customers and essential business services.",

    Icon: Layers3,

  },

  {

    number: "02",

    title: "Data Exposure",

    description:

      "Identify the categories and sensitivity of information the provider can store, process, transmit or access.",

    Icon: Database,

  },

  {

    number: "03",

    title: "Technical Access",

    description:

      "Review relevant integrations, network connectivity, identities, APIs and privileged access relationships.",

    Icon: Network,

  },

  {

    number: "04",

    title: "Security Controls",

    description:

      "Assess relevant security safeguards, operational practices, governance processes and supporting evidence.",

    Icon: ShieldCheck,

  },

  {

    number: "05",

    title: "Residual Risk",

    description:

      "Interpret remaining exposure after considering implemented controls, observations and relationship context.",

    Icon: Gauge,

  },

];



const lifecycle = [

  {

    number: "01",

    title: "Discover",

    description:

      "Identify the provider, service, business owner and relationship context.",

    Icon: Eye,

  },

  {

    number: "02",

    title: "Tier",

    description:

      "Classify the relationship using criticality, access and exposure.",

    Icon: Layers3,

  },

  {

    number: "03",

    title: "Assess",

    description:

      "Evaluate relevant security controls and collect supporting evidence.",

    Icon: FileSearch,

  },

  {

    number: "04",

    title: "Analyze",

    description:

      "Connect observations with business and technical dependency context.",

    Icon: Activity,

  },

  {

    number: "05",

    title: "Remediate",

    description:

      "Define actions for material findings and unresolved security concerns.",

    Icon: Workflow,

  },

  {

    number: "06",

    title: "Monitor",

    description:

      "Reassess and track changes throughout the third-party relationship.",

    Icon: RefreshCcw,

  },

];



const principles = [

  "Assessment depth should reflect the actual risk and criticality of the relationship.",

  "Vendor questionnaire responses should be supported by appropriate evidence where required.",

  "Data access and technical connectivity should be understood before assigning risk context.",

  "Critical providers require stronger visibility into dependencies and security responsibilities.",

  "Findings should be separated from assumptions and unresolved assessment questions.",

  "Remediation ownership should be clear across internal teams and relevant external providers.",

  "Third-party security should be reviewed throughout the relationship, not only during onboarding.",

  "Risk decisions should preserve business context while maintaining appropriate security governance.",

];



/* =========================================================

   SHARED

========================================================= */



function Container({

  children,

  className = "",

}: {

  children: ReactNode;

  className?: string;

}) {

  return (

    <div className={`mx-auto w-full max-w-[1380px] ${className}`}>

      {children}

    </div>

  );

}



function TinyLabel({

  children,

  purple = false,

}: {

  children: ReactNode;

  purple?: boolean;

}) {

  return (

    <span

      className={`font-mono text-[8px] uppercase tracking-[0.18em] ${

        purple ? "text-[#c4b5fd]" : "text-white/30"

      }`}

    >

      {children}

    </span>

  );

}



function SectionLabel({

  number,

  children,

}: {

  number: string;

  children: ReactNode;

}) {

  return (

    <div className="flex items-center gap-3">

      <span className="font-mono text-[8px] text-[#a78bfa]">

        {number}

      </span>



      <span className="h-px w-10 bg-white/15" />



      <TinyLabel>{children}</TinyLabel>

    </div>

  );

}



function StatusDot() {

  return (

    <motion.span

      animate={{

        opacity: [0.3, 1, 0.3],

        scale: [0.9, 1.15, 0.9],

      }}

      transition={{

        duration: 1.8,

        repeat: Infinity,

      }}

      className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,.8)]"

    />

  );

}



/* =========================================================

   HERO

========================================================= */



function Hero() {

  const { scrollY } = useScroll();



  const titleY = useTransform(scrollY, [0, 700], [0, 70]);

  const opacity = useTransform(scrollY, [0, 550], [1, 0.25]);

  const dashboardY = useTransform(scrollY, [0, 900], [0, 100]);



  return (

    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-16 md:px-10 md:pt-24">

      <div

        className="pointer-events-none absolute inset-0 opacity-40"

        style={{

          backgroundImage:

            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",

          backgroundSize: "72px 72px",

          maskImage:

            "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",

          WebkitMaskImage:

            "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",

        }}

      />



      <motion.div

        animate={{

          scale: [1, 1.18, 1],

          opacity: [0.06, 0.14, 0.06],

        }}

        transition={{

          duration: 8,

          repeat: Infinity,

          ease: "easeInOut",

        }}

        className="pointer-events-none absolute left-1/2 top-[400px] h-[620px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[230px]"

      />



      <Container className="relative">

        <motion.div

          style={{

            y: titleY,

            opacity,

          }}

          className="mx-auto max-w-[1100px] text-center"

        >

          <motion.div

            initial={{

              opacity: 0,

              y: -15,

            }}

            animate={{

              opacity: 1,

              y: 0,

            }}

            transition={{

              duration: 0.6,

            }}

            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.025] px-5 py-2.5"

          >

            <StatusDot />



            <span className="text-[11px] text-white/[0.55]">

              Third-Party Risk Assessment

            </span>

          </motion.div>



          <motion.h1

            initial={{

              opacity: 0,

              y: 35,

            }}

            animate={{

              opacity: 1,

              y: 0,

            }}

            transition={{

              duration: 0.9,

              delay: 0.1,

            }}

            className="mx-auto mt-8 max-w-[1150px] text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]"

          >

            Know The Risk



            <span className="block text-white/[0.62]">

              Beyond Your Walls.

            </span>

          </motion.h1>



          <motion.p

            initial={{

              opacity: 0,

            }}

            animate={{

              opacity: 1,

            }}

            transition={{

              delay: 0.35,

              duration: 0.7,

            }}

            className="mx-auto mt-8 max-w-[820px] text-[17px] leading-8 text-white/[0.52]"

          >

            Understand security exposure across vendors, technology providers,

            cloud services and critical external dependencies with structured

            third-party risk assessment and continuous oversight.

          </motion.p>



          <motion.a

            href="#risk-intelligence"

            initial={{

              opacity: 0,

              scale: 0.94,

            }}

            animate={{

              opacity: 1,

              scale: 1,

            }}

            transition={{

              delay: 0.5,

            }}

            whileHover={{

              scale: 1.04,

            }}

            whileTap={{

              scale: 0.98,

            }}

            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.30)]"

          >

            Explore Vendor Risk



            <ArrowRight size={13} />

          </motion.a>

        </motion.div>



        <motion.div

          style={{

            y: dashboardY,

          }}

          className="relative mt-20"

        >

          <VendorRiskCommandCenter />

        </motion.div>

      </Container>

    </section>

  );

}



/* =========================================================

   COMMAND CENTER

========================================================= */



function VendorRiskCommandCenter() {

  return (

    <motion.div

      initial={{

        opacity: 0,

        y: 65,

        scale: 0.96,

      }}

      animate={{

        opacity: 1,

        y: 0,

        scale: 1,

      }}

      transition={{

        duration: 1,

        delay: 0.3,

      }}

      className="relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#030303] shadow-[0_50px_160px_rgba(0,0,0,.9)]"

    >

      <motion.div

        animate={{

          x: ["-120%", "250%"],

        }}

        transition={{

          duration: 7,

          repeat: Infinity,

          ease: "linear",

        }}

        className="pointer-events-none absolute top-0 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"

      />



      <div className="flex items-center justify-between border-b border-white/[0.10] px-5 py-4 md:px-7">

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />

          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />

          <span className="h-3 w-3 rounded-full bg-[#61c454]" />



          <span className="ml-5 hidden text-white/20 md:block">

            ◧

          </span>

        </div>



        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2">

          <ShieldCheck size={10} className="text-[#a78bfa]" />



          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">

            HYI.AI / THIRD-PARTY RISK

          </span>

        </div>



        <div className="hidden items-center gap-4 text-white/25 sm:flex">

          <RefreshCcw size={12} />

          <Eye size={12} />

          <CircleDot size={12} />

        </div>

      </div>



      <div className="grid min-h-[730px] lg:grid-cols-[82px_1fr]">

        <RiskSidebar />



        <div className="p-5 md:p-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>

              <TinyLabel>Third-Party Security Intelligence</TinyLabel>



              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">

                Vendor Risk Observatory

              </h2>

            </div>



            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">

                <StatusDot />



                <span className="font-mono text-[7px] text-white/35">

                  ASSESSMENT ACTIVE

                </span>

              </div>



              <button className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">

                Risk Portfolio

              </button>

            </div>

          </div>



          <div className="mt-7 grid gap-4 xl:grid-cols-[1.2fr_.7fr_.7fr]">

            <VendorExposureGraph />



            <MetricCard

              label="Vendors In Scope"

              value="128"

              progress={82}

              subtext="Illustrative portfolio"

            />



            <MetricCard

              label="Evidence Coverage"

              value="86%"

              progress={86}

              subtext="Illustrative assessment"

            />

          </div>



          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.75fr]">

            <VendorTable />

            <VendorRiskRadar />

          </div>

        </div>

      </div>

    </motion.div>

  );

}



/* =========================================================

   SIDEBAR

========================================================= */



function RiskSidebar() {

  const icons = [

    ShieldCheck,

    Network,

    FileSearch,

    Activity,

    Database,

    Workflow,

  ];



  return (

    <div className="hidden border-r border-white/[0.09] lg:block">

      <div className="flex h-full flex-col items-center py-7">

        <motion.div

          animate={{

            boxShadow: [

              "0 0 0 rgba(124,58,237,0)",

              "0 0 28px rgba(124,58,237,.4)",

              "0 0 0 rgba(124,58,237,0)",

            ],

          }}

          transition={{

            duration: 3,

            repeat: Infinity,

          }}

          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white"

        >

          <Network size={16} className="text-[#7046e6]" />

        </motion.div>



        <div className="mt-16 space-y-8">

          {icons.map((Icon, index) => (

            <motion.div

              key={index}

              whileHover={{

                scale: 1.2,

              }}

              className={

                index === 0 ? "text-[#c4b5fd]" : "text-white/25"

              }

            >

              <Icon size={16} strokeWidth={1.5} />

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );

}



/* =========================================================

   EXPOSURE GRAPH

========================================================= */



function VendorExposureGraph() {

  return (

    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">

      <div className="flex items-start justify-between">

        <div>

          <span className="block text-[15px] font-medium text-white/75">

            Vendor Exposure

          </span>



          <span className="mt-2 block text-[8px] text-white/25">

            Third-party assessment activity

          </span>

        </div>



        <TinyLabel purple>Risk Signal</TinyLabel>

      </div>



      <div className="relative mt-8 h-[210px] overflow-hidden border-b border-white/[0.08]">

        {[25, 50, 75].map((top) => (

          <div

            key={top}

            style={{

              top: `${top}%`,

            }}

            className="absolute left-0 right-0 border-t border-dashed border-white/[0.05]"

          />

        ))}



        <div className="absolute inset-0 flex items-end gap-2">

          {riskTrend.map((height, index) => (

            <div

              key={index}

              className="flex h-full flex-1 items-end"

            >

              <motion.div

                initial={{

                  height: 0,

                }}

                whileInView={{

                  height: `${height}%`,

                }}

                viewport={{

                  once: true,

                }}

                transition={{

                  duration: 0.8,

                  delay: index * 0.04,

                }}

                className={`relative w-full rounded-t-full ${

                  index === riskTrend.length - 3

                    ? "bg-[#7546ef]"

                    : "bg-white/[0.15]"

                }`}

              >

                {index === riskTrend.length - 3 && (

                  <motion.span

                    animate={{

                      scale: [1, 1.7, 1],

                      opacity: [0.4, 1, 0.4],

                    }}

                    transition={{

                      duration: 1.7,

                      repeat: Infinity,

                    }}

                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd]"

                  />

                )}

              </motion.div>

            </div>

          ))}

        </div>

      </div>



      <div className="mt-4 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">

        <span>Vendor Intake</span>

        <span>Assessment</span>

        <span>Monitoring</span>

      </div>

    </div>

  );

}



/* =========================================================

   METRIC

========================================================= */



function MetricCard({

  label,

  value,

  progress,

  subtext,

}: {

  label: string;

  value: string;

  progress: number;

  subtext: string;

}) {

  return (

    <motion.div

      whileHover={{

        y: -4,

      }}

      className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"

    >

      <TinyLabel>{label}</TinyLabel>



      <span className="mt-8 block text-5xl font-medium tracking-[-0.06em]">

        {value}

      </span>



      <span className="mt-3 block text-[8px] text-white/25">

        {subtext}

      </span>



      <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/[0.08]">

        <motion.div

          initial={{

            width: 0,

          }}

          whileInView={{

            width: `${progress}%`,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: 1.2,

          }}

          className="h-full rounded-full bg-[#8b5cf6]"

        />

      </div>



      <div className="mt-8 flex items-end gap-1">

        {Array.from({

          length: 15,

        }).map((_, index) => (

          <motion.span

            key={index}

            animate={{

              height: [5, 17, 8, 22, 5],

            }}

            transition={{

              duration: 2.2,

              repeat: Infinity,

              delay: index * 0.06,

            }}

            className="w-[3px] bg-[#8b5cf6]/55"

          />

        ))}

      </div>

    </motion.div>

  );

}



/* =========================================================

   VENDOR TABLE

========================================================= */



function VendorTable() {

  return (

    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">

      <div className="flex items-center justify-between">

        <div>

          <span className="block text-[15px] font-medium text-white/75">

            Vendor Assessment Queue

          </span>



          <span className="mt-1 block text-[8px] text-white/20">

            Third-party risk portfolio

          </span>

        </div>



        <Network size={15} className="text-[#a78bfa]" />

      </div>



      <div className="mt-6 grid grid-cols-[1.1fr_.9fr_.55fr_.45fr] border-b border-white/[0.07] pb-3">

        <TinyLabel>Provider</TinyLabel>

        <TinyLabel>Service</TinyLabel>

        <TinyLabel>Score</TinyLabel>

        <TinyLabel>Risk</TinyLabel>

      </div>



      <div className="mt-2">

        {vendors.map((vendor, index) => (

          <motion.div

            key={vendor.vendor}

            initial={{

              opacity: 0,

              x: -15,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

            }}

            transition={{

              delay: index * 0.08,

            }}

            className="grid grid-cols-[1.1fr_.9fr_.55fr_.45fr] items-center border-b border-white/[0.05] py-4"

          >

            <div>

              <span className="block text-[9px] text-white/60">

                {vendor.vendor}

              </span>



              <span className="mt-1 block text-[6px] text-white/20">

                {vendor.exposure} exposure

              </span>

            </div>



            <span className="text-[8px] text-white/30">

              {vendor.service}

            </span>



            <span className="font-mono text-[8px] text-white/40">

              {vendor.score}

            </span>



            <span

              className={`font-mono text-[7px] ${

                vendor.risk === "LOW"

                  ? "text-[#c4b5fd]"

                  : vendor.risk === "HIGH"

                    ? "text-[#a78bfa]"

                    : "text-white/45"

              }`}

            >

              {vendor.risk}

            </span>

          </motion.div>

        ))}

      </div>

    </div>

  );

}



/* =========================================================

   RADAR

========================================================= */



function VendorRiskRadar() {

  const nodes = [

    {

      left: "50%",

      top: "8%",

    },

    {

      left: "82%",

      top: "27%",

    },

    {

      left: "85%",

      top: "68%",

    },

    {

      left: "50%",

      top: "89%",

    },

    {

      left: "15%",

      top: "69%",

    },

    {

      left: "13%",

      top: "29%",

    },

  ];



  return (

    <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">

      <TinyLabel>Vendor Risk Radar</TinyLabel>



      <div className="relative mx-auto mt-6 h-[250px] w-[250px]">

        {[0, 1, 2].map((ring) => (

          <div

            key={ring}

            style={{

              inset: `${ring * 35}px`,

            }}

            className="absolute rounded-full border border-white/[0.08]"

          />

        ))}



        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />



        <motion.div

          animate={{

            rotate: 360,

          }}

          transition={{

            duration: 5,

            repeat: Infinity,

            ease: "linear",

          }}

          className="absolute inset-0"

        >

          <div

            className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left"

            style={{

              background:

                "linear-gradient(135deg, rgba(139,92,246,.24), transparent 60%)",

              clipPath: "polygon(0 0, 100% 0, 0 100%)",

            }}

          />

        </motion.div>



        {nodes.map((node, index) => (

          <motion.span

            key={index}

            animate={{

              scale: [1, 1.6, 1],

              opacity: [0.4, 1, 0.4],

            }}

            transition={{

              duration: 2,

              repeat: Infinity,

              delay: index * 0.22,

            }}

            style={{

              left: node.left,

              top: node.top,

            }}

            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.7)]"

          />

        ))}



        <div className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black">

          <Network size={21} className="text-[#c4b5fd]" />

        </div>

      </div>

    </div>

  );

}



/* =========================================================

   INTRO / NETWORK MODEL

========================================================= */



function RiskIntelligence() {

  return (

    <section

      id="risk-intelligence"

      className="relative overflow-hidden bg-black px-5 py-28 md:px-10"

    >

      <motion.div

        animate={{

          x: ["-8%", "8%", "-8%"],

          opacity: [0.07, 0.14, 0.07],

        }}

        transition={{

          duration: 11,

          repeat: Infinity,

        }}

        className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[210px]"

      />



      <Container className="relative">

        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

          <motion.div

            initial={{

              opacity: 0,

              x: -30,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

            }}

          >

            <SectionLabel number="01">

              Extended Enterprise Risk

            </SectionLabel>



            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

              Your security



              <span className="block text-white/25">

                extends outward.

              </span>

            </h2>



            <p className="mt-7 max-w-[560px] text-[13px] leading-8 text-white/[0.55]">

              Modern organizations depend on external providers for cloud

              infrastructure, software, payment processing, customer

              operations, analytics and many other critical capabilities.

              Those relationships can create security dependencies beyond the

              organization&apos;s direct control.

            </p>



            <p className="mt-5 max-w-[560px] text-[13px] leading-8 text-white/[0.45]">

              Third-party risk assessment creates structured visibility into

              these relationships by connecting business criticality, data

              access, technical integration, security evidence and ongoing

              oversight.

            </p>

          </motion.div>



          <ThirdPartyNetwork />

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   NETWORK MODEL

========================================================= */



function ThirdPartyNetwork() {

  const nodes = [

    {

      title: "Cloud",

      Icon: Cloud,

      position: "left-[7%] top-[13%]",

    },

    {

      title: "Payments",

      Icon: Database,

      position: "right-[7%] top-[13%]",

    },

    {

      title: "SaaS",

      Icon: Server,

      position: "left-[4%] bottom-[14%]",

    },

    {

      title: "Partner",

      Icon: Network,

      position: "right-[4%] bottom-[14%]",

    },

  ];



  return (

    <motion.div

      initial={{

        opacity: 0,

        scale: 0.92,

      }}

      whileInView={{

        opacity: 1,

        scale: 1,

      }}

      viewport={{

        once: true,

      }}

      className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#060606]"

    >

      <div

        className="absolute inset-0 opacity-40"

        style={{

          backgroundImage:

            "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",

          backgroundSize: "24px 24px",

        }}

      />



      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[90px]" />



      <svg className="absolute inset-0 h-full w-full">

        {[

          ["19%", "23%", "50%", "50%"],

          ["81%", "23%", "50%", "50%"],

          ["18%", "76%", "50%", "50%"],

          ["82%", "76%", "50%", "50%"],

        ].map((line, index) => (

          <motion.line

            key={index}

            x1={line[0]}

            y1={line[1]}

            x2={line[2]}

            y2={line[3]}

            stroke="rgba(139,92,246,.35)"

            strokeWidth="1"

            strokeDasharray="6 8"

            initial={{

              pathLength: 0,

            }}

            whileInView={{

              pathLength: 1,

            }}

            viewport={{

              once: true,

            }}

            transition={{

              duration: 1.5,

              delay: index * 0.1,

            }}

          />

        ))}

      </svg>



      {nodes.map(({ title, Icon, position }, index) => (

        <motion.div

          key={title}

          animate={{

            y: [-5, 5, -5],

          }}

          transition={{

            duration: 3 + index * 0.35,

            repeat: Infinity,

          }}

          className={`absolute ${position} z-20 w-[128px] rounded-[16px] border border-white/[0.10] bg-black/90 p-4`}

        >

          <Icon size={15} className="text-[#c4b5fd]" />



          <span className="mt-3 block text-[10px] text-white/55">

            {title}

          </span>



          <span className="mt-1 block font-mono text-[6px] text-white/20">

            THIRD PARTY

          </span>

        </motion.div>

      ))}



      <div className="absolute left-1/2 top-1/2 z-20 flex h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

        <motion.div

          animate={{

            rotate: 360,

          }}

          transition={{

            duration: 15,

            repeat: Infinity,

            ease: "linear",

          }}

          className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/35"

        />



        <motion.div

          animate={{

            rotate: -360,

          }}

          transition={{

            duration: 10,

            repeat: Infinity,

            ease: "linear",

          }}

          className="absolute inset-[20px] rounded-full border border-white/[0.10]"

        />



        <motion.div

          animate={{

            scale: [1, 1.08, 1],

          }}

          transition={{

            duration: 2.5,

            repeat: Infinity,

          }}

          className="flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 shadow-[0_0_65px_rgba(124,58,237,.25)]"

        >

          <ShieldCheck size={26} className="text-[#c4b5fd]" />



          <span className="mt-2 font-mono text-[6px] text-white/40">

            ENTERPRISE

          </span>

        </motion.div>

      </div>



      <motion.div

        animate={{

          rotate: 360,

        }}

        transition={{

          duration: 12,

          repeat: Infinity,

          ease: "linear",

        }}

        className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"

      >

        <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_#8b5cf6]" />

      </motion.div>

    </motion.div>

  );

}



/* =========================================================

   CAPABILITIES

========================================================= */



function Capabilities() {

  return (

    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">

      <Container>

        <div className="text-center">

          <div className="flex justify-center">

            <SectionLabel number="02">

              Assessment Capabilities

            </SectionLabel>

          </div>



          <h2 className="mx-auto mt-8 max-w-[920px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">

            Understand The Security Behind Every Dependency

          </h2>



          <p className="mx-auto mt-5 max-w-[880px] text-[13px] leading-7 text-white/[0.52]">

            Third-party assessment combines business context, technical

            exposure and security evidence to create a more useful view of

            external risk.

          </p>

        </div>



        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item, index) => {

            const Icon = item.Icon;



            return (

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

                viewport={{

                  once: true,

                }}

                transition={{

                  delay: index * 0.07,

                }}

                whileHover={{

                  y: -8,

                }}

                className="group relative min-h-[325px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-7"

              >

                <div className="absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#7046e6]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#7046e6]/15" />



                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.04]">

                      <Icon size={17} className="text-[#c4b5fd]" />

                    </div>



                    <span className="font-mono text-[7px] text-[#8b5cf6]">

                      {item.number}

                    </span>

                  </div>



                  <h3 className="mt-10 text-xl font-medium">

                    {item.title}

                  </h3>



                  <p className="mt-5 text-[12px] leading-7 text-white/[0.50]">

                    {item.description}

                  </p>



                  <div className="mt-7 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#a78bfa]">

                    Risk Capability



                    <ChevronRight size={10} />

                  </div>

                </div>

              </motion.article>

            );

          })}

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   ASSESSMENT STACK

========================================================= */



function AssessmentStack() {

  return (

    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">

      <div className="absolute right-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#5b21b6]/10 blur-[190px]" />



      <Container className="relative">

        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

          <div>

            <SectionLabel number="03">

              Assessment Model

            </SectionLabel>



            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

              Context before



              <span className="block text-white/25">

                risk rating.

              </span>

            </h2>



            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.50]">

              A useful third-party risk rating requires more than a security

              questionnaire. Business dependency, sensitive data, technical

              access and security evidence all contribute to the assessment

              context.

            </p>

          </div>



          <div className="space-y-3">

            {assessmentLayers.map(

              ({ number, title, description, Icon }, index) => (

                <motion.div

                  key={title}

                  initial={{

                    opacity: 0,

                    x: 30,

                  }}

                  whileInView={{

                    opacity: 1,

                    x: 0,

                  }}

                  viewport={{

                    once: true,

                  }}

                  transition={{

                    delay: index * 0.07,

                  }}

                  whileHover={{

                    x: 6,

                  }}

                  className="grid gap-5 rounded-[18px] border border-white/[0.08] bg-[#060606] p-6 md:grid-cols-[50px_1fr_80px] md:items-center"

                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/25">

                    <Icon size={15} className="text-[#c4b5fd]" />

                  </div>



                  <div>

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[7px] text-[#8b5cf6]">

                        {number}

                      </span>



                      <h3 className="text-[16px] font-medium">

                        {title}

                      </h3>

                    </div>



                    <p className="mt-3 max-w-[620px] text-[11px] leading-6 text-white/[0.45]">

                      {description}

                    </p>

                  </div>



                  <div className="hidden justify-end md:flex">

                    <motion.div

                      animate={{

                        scaleX: [0.4, 1, 0.4],

                      }}

                      transition={{

                        duration: 2.5,

                        repeat: Infinity,

                        delay: index * 0.2,

                      }}

                      className="h-px w-12 origin-left bg-[#8b5cf6]/60"

                    />

                  </div>

                </motion.div>

              ),

            )}

          </div>

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   RISK MATRIX

========================================================= */



function RiskMatrix() {

  const matrix = [

    [0, 0, 1, 1, 2],

    [0, 1, 1, 2, 2],

    [1, 1, 2, 2, 3],

    [1, 2, 2, 3, 3],

    [2, 2, 3, 3, 4],

  ];



  return (

    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">

      <Container>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          <motion.div

            initial={{

              opacity: 0,

              scale: 0.95,

            }}

            whileInView={{

              opacity: 1,

              scale: 1,

            }}

            viewport={{

              once: true,

            }}

            className="rounded-[26px] border border-white/[0.09] bg-black p-7"

          >

            <div className="flex items-center justify-between">

              <div>

                <TinyLabel>Vendor Risk Matrix</TinyLabel>



                <h3 className="mt-3 text-xl font-medium">

                  Exposure × Criticality

                </h3>

              </div>



              <Gauge size={17} className="text-[#a78bfa]" />

            </div>



            <div className="mt-10 grid grid-cols-5 gap-2">

              {matrix.flatMap((row, rowIndex) =>

                row.map((value, colIndex) => (

                  <motion.div

                    key={`${rowIndex}-${colIndex}`}

                    initial={{

                      opacity: 0,

                      scale: 0.75,

                    }}

                    whileInView={{

                      opacity: 1,

                      scale: 1,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      delay: (rowIndex * 5 + colIndex) * 0.025,

                    }}

                    whileHover={{

                      scale: 1.06,

                    }}

                    className={`relative aspect-square rounded-[12px] border ${

                      value === 4

                        ? "border-[#a78bfa]/50 bg-[#8b5cf6]/40"

                        : value === 3

                          ? "border-[#8b5cf6]/35 bg-[#8b5cf6]/25"

                          : value === 2

                            ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/12"

                            : value === 1

                              ? "border-white/[0.08] bg-white/[0.05]"

                              : "border-white/[0.05] bg-white/[0.02]"

                    }`}

                  >

                    {rowIndex === 3 && colIndex === 3 && (

                      <motion.span

                        animate={{

                          scale: [1, 1.8, 1],

                        }}

                        transition={{

                          duration: 1.8,

                          repeat: Infinity,

                        }}

                        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff] shadow-[0_0_18px_#8b5cf6]"

                      />

                    )}

                  </motion.div>

                )),

              )}

            </div>



            <div className="mt-7 flex justify-between font-mono text-[7px] uppercase tracking-[0.12em] text-white/25">

              <span>Lower Exposure</span>

              <span>Higher Exposure</span>

            </div>

          </motion.div>



          <div>

            <SectionLabel number="04">

              Risk Interpretation

            </SectionLabel>



            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

              Not every vendor



              <span className="block text-white/25">

                carries equal risk.

              </span>

            </h2>



            <p className="mt-7 max-w-[570px] text-[13px] leading-8 text-white/[0.52]">

              A provider processing sensitive information or supporting a

              critical business service may require substantially more

              assessment depth than a low-impact supplier with no technical

              connectivity.

            </p>



            <div className="mt-8 space-y-3">

              {[

                "Business service criticality",

                "Sensitive information access",

                "Technical integration depth",

                "Operational dependency",

                "Security control evidence",

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

                  viewport={{

                    once: true,

                  }}

                  transition={{

                    delay: index * 0.07,

                  }}

                  className="flex items-center gap-3"

                >

                  <CheckCircle2

                    size={13}

                    className="text-[#a78bfa]"

                  />



                  <span className="text-[11px] text-white/45">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   LIFECYCLE

========================================================= */



function AssessmentLifecycle() {

  return (

    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">

      <div

        className="absolute inset-0 opacity-30"

        style={{

          backgroundImage:

            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",

          backgroundSize: "25px 25px",

        }}

      />



      <Container className="relative">

        <SectionLabel number="05">

          Third-Party Risk Lifecycle

        </SectionLabel>



        <h2 className="mt-9 max-w-[920px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

          Assess the relationship.



          <span className="block text-white/25">

            Then keep watching.

          </span>

        </h2>



        <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.48]">

          Third-party risk changes as services, integrations, business

          dependencies and security environments evolve. Assessment therefore

          works best as a lifecycle rather than a one-time onboarding event.

        </p>



        <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">

          <div className="absolute left-[7%] right-[7%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/60 to-transparent lg:block" />



          <motion.span

            animate={{

              left: ["7%", "92%"],

              opacity: [0, 1, 1, 0],

            }}

            transition={{

              duration: 6,

              repeat: Infinity,

              ease: "linear",

            }}

            className="absolute top-[31px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"

          />



          {lifecycle.map(

            ({ number, title, description, Icon }, index) => (

              <motion.article

                key={title}

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

                  delay: index * 0.07,

                }}

                className="relative z-20 min-h-[240px] rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"

              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">

                  <Icon size={13} className="text-[#c4b5fd]" />

                </div>



                <span className="mt-8 block font-mono text-[7px] text-[#a78bfa]">

                  {number}

                </span>



                <h3 className="mt-3 text-[15px] font-medium">

                  {title}

                </h3>



                <p className="mt-4 text-[10px] leading-6 text-white/[0.44]">

                  {description}

                </p>

              </motion.article>

            ),

          )}

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   EVIDENCE INTELLIGENCE

========================================================= */



function EvidenceIntelligence() {

  const evidence = [

    {

      title: "Security Policies",

      value: "Validated",

      progress: 92,

    },

    {

      title: "Access Controls",

      value: "Review",

      progress: 74,

    },

    {

      title: "Cloud Security",

      value: "Validated",

      progress: 88,

    },

    {

      title: "Incident Response",

      value: "Follow-up",

      progress: 63,

    },

    {

      title: "Data Protection",

      value: "Validated",

      progress: 84,

    },

  ];



  return (

    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">

      <div className="absolute left-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[190px]" />



      <Container className="relative">

        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

          <div>

            <SectionLabel number="06">

              Evidence Intelligence

            </SectionLabel>



            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

              Responses need



              <span className="block text-white/25">

                supporting evidence.

              </span>

            </h2>



            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.50]">

              Assessment evidence can help determine whether stated security

              practices are supported, whether additional clarification is

              required and where unresolved security concerns remain.

            </p>

          </div>



          <motion.div

            initial={{

              opacity: 0,

              x: 30,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

            }}

            className="rounded-[26px] border border-white/[0.09] bg-black p-6"

          >

            <div className="flex items-center justify-between">

              <div>

                <TinyLabel>Evidence Workspace</TinyLabel>



                <h3 className="mt-3 text-xl font-medium">

                  Control Evidence Review

                </h3>

              </div>



              <FileSearch size={17} className="text-[#a78bfa]" />

            </div>



            <div className="mt-8 space-y-3">

              {evidence.map((item, index) => (

                <div

                  key={item.title}

                  className="rounded-[14px] border border-white/[0.06] bg-[#060606] p-4"

                >

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-white/55">

                      {item.title}

                    </span>



                    <span className="font-mono text-[7px] text-[#a78bfa]">

                      {item.value}

                    </span>

                  </div>



                  <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">

                    <motion.div

                      initial={{

                        width: 0,

                      }}

                      whileInView={{

                        width: `${item.progress}%`,

                      }}

                      viewport={{

                        once: true,

                      }}

                      transition={{

                        duration: 1,

                        delay: index * 0.08,

                      }}

                      className="h-full bg-[#8b5cf6]"

                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   CONTINUOUS MONITORING

========================================================= */



function ContinuousOversight() {

  return (

    <section className="bg-black px-5 py-28 md:px-10">

      <Container>

        <div className="text-center">

          <div className="flex justify-center">

            <SectionLabel number="07">

              Continuous Oversight

            </SectionLabel>

          </div>



          <h2 className="mx-auto mt-8 max-w-[920px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">

            Third-Party Risk Does Not Stop At Approval

          </h2>



          <p className="mx-auto mt-5 max-w-[850px] text-[13px] leading-7 text-white/[0.50]">

            Services change, integrations expand and security conditions

            evolve. Ongoing oversight helps maintain visibility throughout the

            relationship.

          </p>

        </div>



        <div className="mt-16 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">

          <MonitoringTimeline />

          <MonitoringPulse />

        </div>

      </Container>

    </section>

  );

}



function MonitoringTimeline() {

  const events = [

    {

      time: "09:12",

      title: "Evidence package updated",

      text: "Security documentation received for review.",

    },

    {

      time: "10:48",

      title: "Assessment observation",

      text: "Additional access-control validation requested.",

    },

    {

      time: "13:24",

      title: "Risk context updated",

      text: "Business criticality classification reviewed.",

    },

    {

      time: "16:05",

      title: "Remediation accepted",

      text: "Corrective action moved into follow-up validation.",

    },

  ];



  return (

    <div className="rounded-[24px] border border-white/[0.08] bg-[#060606] p-6">

      <div className="flex items-center justify-between">

        <div>

          <TinyLabel>Relationship Timeline</TinyLabel>



          <h3 className="mt-3 text-xl font-medium">

            Vendor Security Activity

          </h3>

        </div>



        <Activity size={17} className="text-[#a78bfa]" />

      </div>



      <div className="relative mt-9">

        <div className="absolute bottom-3 left-[6px] top-3 w-px bg-white/[0.08]" />



        <div className="space-y-7">

          {events.map((event, index) => (

            <motion.div

              key={event.title}

              initial={{

                opacity: 0,

                x: -15,

              }}

              whileInView={{

                opacity: 1,

                x: 0,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                delay: index * 0.08,

              }}

              className="relative grid grid-cols-[20px_55px_1fr] gap-3"

            >

              <motion.span

                animate={{

                  scale: [1, 1.5, 1],

                }}

                transition={{

                  duration: 2,

                  repeat: Infinity,

                  delay: index * 0.3,

                }}

                className="mt-1 h-3 w-3 rounded-full border border-[#a78bfa]/50 bg-[#7046e6]"

              />



              <span className="font-mono text-[7px] text-white/25">

                {event.time}

              </span>



              <div>

                <span className="block text-[11px] text-white/60">

                  {event.title}

                </span>



                <p className="mt-2 text-[9px] leading-5 text-white/30">

                  {event.text}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );

}



function MonitoringPulse() {

  return (

    <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#060606]">

      <div

        className="absolute inset-0 opacity-30"

        style={{

          backgroundImage:

            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",

          backgroundSize: "22px 22px",

        }}

      />



      {[260, 200, 140].map((size, index) => (

        <motion.div

          key={size}

          animate={{

            scale: [0.92, 1.08, 0.92],

            opacity: [0.25, 0.7, 0.25],

          }}

          transition={{

            duration: 3 + index,

            repeat: Infinity,

          }}

          style={{

            width: size,

            height: size,

          }}

          className="absolute rounded-full border border-[#8b5cf6]/20"

        />

      ))}



      <motion.div

        animate={{

          rotate: 360,

        }}

        transition={{

          duration: 8,

          repeat: Infinity,

          ease: "linear",

        }}

        className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-[#a78bfa]/25"

      >

        <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6]" />

      </motion.div>



      <div className="relative z-10 flex h-[105px] w-[105px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black shadow-[0_0_70px_rgba(124,58,237,.2)]">

        <Activity size={25} className="text-[#c4b5fd]" />



        <span className="mt-3 font-mono text-[6px] uppercase tracking-[0.12em] text-white/35">

          Monitoring

        </span>

      </div>

    </div>

  );

}



/* =========================================================

   PRINCIPLES

========================================================= */



function RiskPrinciples() {

  return (

    <section className="border-y border-white/[0.06] bg-[#070707] px-5 py-28 md:px-10">

      <Container>

        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <SectionLabel number="08">

              Risk Principles

            </SectionLabel>



            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">

              Govern the



              <span className="block text-white/25">

                extended enterprise.

              </span>

            </h2>



            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.48]">

              Third-party security becomes more useful when assessments are

              risk-based, evidence-driven and integrated into the lifecycle of

              the business relationship.

            </p>

          </div>



          <div className="grid gap-3 sm:grid-cols-2">

            {principles.map((item, index) => (

              <motion.div

                key={item}

                initial={{

                  opacity: 0,

                  y: 15,

                }}

                whileInView={{

                  opacity: 1,

                  y: 0,

                }}

                viewport={{

                  once: true,

                }}

                transition={{

                  delay: index * 0.05,

                }}

                whileHover={{

                  x: 4,

                }}

                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-black p-5"

              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">

                  <CheckCircle2

                    size={12}

                    className="text-[#c4b5fd]"

                  />

                </div>



                <div>

                  <span className="font-mono text-[6px] text-[#8b5cf6]">

                    TPRM / {String(index + 1).padStart(2, "0")}

                  </span>



                  <p className="mt-2 text-[10px] leading-6 text-white/[0.45]">

                    {item}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Container>

    </section>

  );

}



/* =========================================================

   FINAL CTA

========================================================= */



function FinalCTA() {

  return (

    <section className="bg-black px-5 py-24 md:px-10">

      <Container>

        <motion.div

          initial={{

            opacity: 0,

            y: 35,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

          }}

          className="relative overflow-hidden rounded-[26px] border border-[#6366f1]/30 bg-[#080a16] px-6 py-20 text-center"

        >

          <motion.div

            animate={{

              x: ["-20%", "20%", "-20%"],

              opacity: [0.2, 0.5, 0.2],

            }}

            transition={{

              duration: 7,

              repeat: Infinity,

            }}

            className="absolute bottom-[-180px] left-1/2 h-[330px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[120px]"

          />



          <motion.div

            animate={{

              rotate: 360,

            }}

            transition={{

              duration: 20,

              repeat: Infinity,

              ease: "linear",

            }}

            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"

          />



          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]">

              <Network size={24} className="text-[#c4b5fd]" />

            </div>



            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">

              Know Who Your Business Depends On.

            </h2>



            <p className="mx-auto mt-5 max-w-[760px] text-[12px] leading-7 text-white/[0.50]">

              Build stronger visibility into vendor security, external

              dependencies and third-party exposure with a structured,

              evidence-driven risk assessment approach.

            </p>



            <motion.a

              href="#risk-intelligence"

              whileHover={{

                scale: 1.05,

              }}

              whileTap={{

                scale: 0.97,

              }}

              className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_40px_rgba(124,58,237,.3)]"

            >

              Talk To Our Expert



              <ArrowRight size={12} />

            </motion.a>

          </div>

        </motion.div>



        <p className="mx-auto mt-7 max-w-[900px] text-center font-mono text-[7px] uppercase leading-5 tracking-[0.12em] text-white/15">

          Vendor names, assessment scores, portfolio counts, evidence

          percentages, risk classifications and monitoring events displayed

          in this interface are illustrative design data. They do not

          represent actual HYI.AI customer assessments, certifications,

          guarantees or measured third-party security outcomes.

        </p>

      </Container>

    </section>

  );

}



/* =========================================================

   MAIN

========================================================= */



export default function ThirdPartyRiskAssessmentClient() {

  const { scrollYProgress } = useScroll();



  const scaleX = useSpring(scrollYProgress, {

    stiffness: 120,

    damping: 30,

    restDelta: 0.001,

  });



  return (

    <div className="overflow-x-hidden bg-black text-white">

      <motion.div

        style={{

          scaleX,

          transformOrigin: "left",

        }}

        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#7c3aed]"

      />



      <Hero />



      <RiskIntelligence />



      <Capabilities />



      <AssessmentStack />



      <RiskMatrix />



      <AssessmentLifecycle />



      <EvidenceIntelligence />



      <ContinuousOversight />



      <RiskPrinciples />



      <FinalCTA />

    </div>

  );

}
