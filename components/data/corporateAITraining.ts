export interface TrainingFeature {
  title: string;
  description: string;
}

export interface TrainingStep {
  step: string;
  title: string;
  description: string;
}

export interface TrainingOutcome {
  value: string;
  label: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface DeliveryModel {
  label: string;
  title: string;
  description: string;
  meta: string;
}

export interface CorporateTrainingPageData {
  slug: string;

  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    stats: {
      value: string;
      label: string;
    }[];
  };

  overview: {
    eyebrow: string;
    title: string;
    description: string;
    features: TrainingFeature[];
  };

  programs: {
    eyebrow: string;
    title: string;
    description: string;
    items: TrainingFeature[];
  };

  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: TrainingStep[];
  };

  outcomes: {
    eyebrow: string;
    title: string;
    description: string;
    items: TrainingOutcome[];
  };

  audience: {
    eyebrow: string;
    title: string;
    description: string;
    items: AudienceItem[];
  };

  delivery: {
    eyebrow: string;
    title: string;
    description: string;
    items: DeliveryModel[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export const corporateAITrainingPages: CorporateTrainingPageData[] = [
  // =========================================================
  // CORPORATE AI TRAINING
  // =========================================================

{
  slug: "executive-ai-programs",

    hero: {
      eyebrow: "Corporate AI Training",
      title: "Build an AI-ready",
      highlight: "workforce.",
      description:
        "Transform AI from an emerging technology into a practical business capability. Our corporate training programs help teams understand, adopt and apply artificial intelligence across real organizational workflows.",
      primaryButton: "Build Your Training Plan",
      secondaryButton: "Explore Programs",
      stats: [
        {
          value: "Role-Based",
          label: "Learning paths",
        },
        {
          value: "Practical",
          label: "Business use cases",
        },
        {
          value: "Flexible",
          label: "Delivery formats",
        },
      ],
    },

    overview: {
      eyebrow: "Why Corporate AI Training",
      title: "AI capability must extend beyond technical teams.",
      description:
        "Successful AI adoption requires employees across departments to understand where artificial intelligence creates value, how to work with AI responsibly and how to integrate intelligent tools into everyday operations.",
      features: [
        {
          title: "Organization-Wide AI Literacy",
          description:
            "Create a shared understanding of artificial intelligence across business, operational and technical functions.",
        },
        {
          title: "Workflow Transformation",
          description:
            "Help employees identify repetitive processes, information bottlenecks and decisions that can be improved with AI.",
        },
        {
          title: "Responsible Adoption",
          description:
            "Introduce practical frameworks for privacy, governance, human oversight and responsible use of AI systems.",
        },
        {
          title: "Applied Learning",
          description:
            "Move beyond theory through exercises built around realistic business scenarios and organizational challenges.",
        },
      ],
    },

    programs: {
      eyebrow: "Training Architecture",
      title: "One AI learning ecosystem for the entire organization.",
      description:
        "Training can be structured around departments, seniority levels, business objectives and existing AI maturity.",
      items: [
        {
          title: "AI Foundations for Employees",
          description:
            "Build practical understanding of AI concepts, capabilities, limitations and modern workplace applications.",
        },
        {
          title: "Department-Specific AI",
          description:
            "Explore AI applications for operations, finance, marketing, sales, HR, support and other business functions.",
        },
        {
          title: "Manager Enablement",
          description:
            "Prepare managers to identify AI opportunities, guide adoption and redesign team workflows.",
        },
        {
          title: "AI Innovation Workshops",
          description:
            "Turn internal business challenges into structured AI use cases and implementation opportunities.",
        },
        {
          title: "Responsible AI Practices",
          description:
            "Develop awareness around governance, security, data handling, bias and human accountability.",
        },
        {
          title: "Applied AI Projects",
          description:
            "Convert learning into practical prototypes, workflow improvements and measurable business experiments.",
        },
      ],
    },

    journey: {
      eyebrow: "Learning Journey",
      title: "From AI awareness to organizational capability.",
      description:
        "A structured learning journey helps employees move progressively from understanding AI to applying it confidently in real work.",
      steps: [
        {
          step: "01",
          title: "Discover",
          description:
            "Understand your workforce, business priorities and current level of AI readiness.",
        },
        {
          step: "02",
          title: "Design",
          description:
            "Create learning tracks aligned with departments, roles and organizational objectives.",
        },
        {
          step: "03",
          title: "Learn",
          description:
            "Develop practical AI knowledge through instructor-led sessions, workshops and guided exercises.",
        },
        {
          step: "04",
          title: "Apply",
          description:
            "Use AI techniques on realistic workflows, challenges and internal business scenarios.",
        },
        {
          step: "05",
          title: "Scale",
          description:
            "Expand successful learning practices across teams while continuously developing internal AI capability.",
        },
      ],
    },

    outcomes: {
      eyebrow: "Business Outcomes",
      title: "Training designed to create measurable organizational value.",
      description:
        "The objective is not simply to teach AI terminology. It is to help organizations build confidence, capability and repeatable adoption practices.",
      items: [
        {
          value: "01",
          label: "Higher AI Confidence",
          description:
            "Employees understand how to evaluate and use AI tools more effectively.",
        },
        {
          value: "02",
          label: "Stronger Productivity",
          description:
            "Teams discover opportunities to simplify repetitive and information-heavy work.",
        },
        {
          value: "03",
          label: "Better AI Decisions",
          description:
            "Managers gain stronger frameworks for evaluating AI opportunities and limitations.",
        },
        {
          value: "04",
          label: "Responsible Adoption",
          description:
            "Organizations develop more consistent practices around secure and accountable AI usage.",
        },
      ],
    },

    audience: {
      eyebrow: "Who It's For",
      title: "Built for organizations developing AI capability at scale.",
      description:
        "Programs can be adapted for different responsibilities, experience levels and transformation priorities.",
      items: [
        {
          title: "Enterprise Teams",
          description:
            "Cross-functional employees adopting AI across large and complex organizations.",
        },
        {
          title: "Business Leaders",
          description:
            "Decision-makers responsible for transformation, productivity and organizational strategy.",
        },
        {
          title: "Functional Departments",
          description:
            "Teams in marketing, operations, finance, HR, sales and customer experience.",
        },
        {
          title: "Innovation Groups",
          description:
            "Internal teams exploring new AI-enabled products, services and operating models.",
        },
      ],
    },

    delivery: {
      eyebrow: "Delivery Models",
      title: "Training that fits the way your organization works.",
      description:
        "Choose a delivery structure based on workforce distribution, learning objectives and operational requirements.",
      items: [
        {
          label: "01",
          title: "On-Site Training",
          description:
            "Instructor-led learning delivered directly within your organization.",
          meta: "Teams · Departments · Leadership",
        },
        {
          label: "02",
          title: "Live Virtual Training",
          description:
            "Interactive instructor-led programs for distributed and remote teams.",
          meta: "Remote · Hybrid · Global",
        },
        {
          label: "03",
          title: "Custom AI Workshops",
          description:
            "Focused sessions designed around specific workflows and business challenges.",
          meta: "Use Cases · Strategy · Innovation",
        },
      ],
    },

    cta: {
      eyebrow: "Build AI Capability",
      title: "Prepare your workforce for an AI-enabled future.",
      description:
        "Create a corporate AI training program aligned with your teams, workflows and transformation goals.",
      primaryButton: "Start a Conversation",
      secondaryButton: "View Training Options",
    },
  },

  // =========================================================
  // AI FOR BUSINESS TEAMS
  // =========================================================

  {
    slug: "workforce-ai-upskilling",

    hero: {
      eyebrow: "AI for Business Teams",
      title: "Turn everyday work into",
      highlight: "AI-powered workflows.",
      description:
        "Give non-technical teams the practical skills to use artificial intelligence for research, communication, analysis, planning and faster execution across daily business operations.",
      primaryButton: "Train Your Team",
      secondaryButton: "View Curriculum",
      stats: [
        {
          value: "Hands-On",
          label: "Workflow exercises",
        },
        {
          value: "No-Code",
          label: "Technical barrier",
        },
        {
          value: "Business",
          label: "Focused learning",
        },
      ],
    },

    overview: {
      eyebrow: "AI in Everyday Work",
      title: "Help teams work smarter without turning them into AI engineers.",
      description:
        "Business professionals need practical methods for using AI, not deep machine-learning theory. This program focuses on useful techniques employees can immediately integrate into their existing responsibilities.",
      features: [
        {
          title: "Research Acceleration",
          description:
            "Use AI to structure research, compare information and rapidly explore unfamiliar business topics.",
        },
        {
          title: "Communication Support",
          description:
            "Improve drafting, summarization, documentation and internal knowledge communication.",
        },
        {
          title: "Decision Preparation",
          description:
            "Organize information, examine alternatives and prepare clearer inputs for human decision-making.",
        },
        {
          title: "Routine Task Improvement",
          description:
            "Identify repetitive knowledge work that can be simplified through AI-assisted processes.",
        },
      ],
    },

    programs: {
      eyebrow: "Core Skills",
      title: "Practical AI skills for modern business professionals.",
      description:
        "Each module focuses on workplace applications employees can understand, practice and adapt to their own responsibilities.",
      items: [
        {
          title: "Effective AI Prompting",
          description:
            "Learn structured methods for communicating goals, context, constraints and expected outputs to AI systems.",
        },
        {
          title: "AI-Assisted Research",
          description:
            "Explore faster approaches to information discovery, synthesis and competitive analysis.",
        },
        {
          title: "Documents & Communication",
          description:
            "Apply AI to reports, proposals, meeting summaries, presentations and internal documentation.",
        },
        {
          title: "Data Interpretation",
          description:
            "Use AI assistance to explore datasets, identify patterns and communicate business insights.",
        },
        {
          title: "Workflow Optimization",
          description:
            "Map recurring tasks and determine where AI can reduce manual effort or improve consistency.",
        },
        {
          title: "Verification & Quality",
          description:
            "Develop habits for reviewing AI output, checking assumptions and maintaining human accountability.",
        },
      ],
    },

    journey: {
      eyebrow: "Skill Development",
      title: "Learn AI through the work teams already perform.",
      description:
        "Participants progress from basic interaction techniques to practical workflow redesign using realistic business activities.",
      steps: [
        {
          step: "01",
          title: "Understand",
          description:
            "Learn what modern AI tools can do and where their limitations matter in professional work.",
        },
        {
          step: "02",
          title: "Prompt",
          description:
            "Practice methods for generating more relevant, structured and useful AI responses.",
        },
        {
          step: "03",
          title: "Practice",
          description:
            "Apply AI to common tasks such as research, writing, planning and information organization.",
        },
        {
          step: "04",
          title: "Redesign",
          description:
            "Combine multiple AI-assisted tasks into more efficient end-to-end workflows.",
        },
        {
          step: "05",
          title: "Integrate",
          description:
            "Create practical routines employees can continue using after training.",
        },
      ],
    },

    outcomes: {
      eyebrow: "Team Impact",
      title: "Make AI useful in the work happening today.",
      description:
        "Participants leave with repeatable techniques they can apply to real tasks rather than isolated demonstrations.",
      items: [
        {
          value: "01",
          label: "Faster Research",
          description:
            "Reduce the time required to explore, organize and summarize large amounts of information.",
        },
        {
          value: "02",
          label: "Clearer Communication",
          description:
            "Improve first drafts, documentation and knowledge-sharing workflows.",
        },
        {
          value: "03",
          label: "Efficient Processes",
          description:
            "Identify manual knowledge tasks that can benefit from AI assistance.",
        },
        {
          value: "04",
          label: "Better Verification",
          description:
            "Build stronger habits for checking AI-generated information before business use.",
        },
      ],
    },

    audience: {
      eyebrow: "Designed for Business Functions",
      title: "AI skills for the teams that keep organizations moving.",
      description:
        "Training can be contextualized around specific departments so examples remain directly connected to participants' work.",
      items: [
        {
          title: "Marketing & Content",
          description:
            "Support ideation, research, campaign planning and content development workflows.",
        },
        {
          title: "Sales & Customer Teams",
          description:
            "Improve account research, preparation, communication and customer knowledge workflows.",
        },
        {
          title: "Operations Teams",
          description:
            "Identify process inefficiencies and improve documentation, planning and coordination.",
        },
        {
          title: "Finance & HR",
          description:
            "Apply AI carefully to information-heavy administrative and analytical activities.",
        },
      ],
    },

    delivery: {
      eyebrow: "Learning Formats",
      title: "Bring practical AI training directly into team workflows.",
      description:
        "Choose focused sessions or extended programs depending on the depth of capability your teams need.",
      items: [
        {
          label: "01",
          title: "Team Workshops",
          description:
            "Focused sessions built around practical department-specific activities.",
          meta: "Interactive · Applied · Collaborative",
        },
        {
          label: "02",
          title: "Multi-Session Programs",
          description:
            "Progressive learning designed to build stronger habits over multiple sessions.",
          meta: "Structured · Progressive · Practical",
        },
        {
          label: "03",
          title: "Workflow Labs",
          description:
            "Hands-on sessions where participants redesign actual work processes using AI.",
          meta: "Processes · Experiments · Outcomes",
        },
      ],
    },

    cta: {
      eyebrow: "Upgrade Everyday Work",
      title: "Give your business teams practical AI skills they can actually use.",
      description:
        "Build a learning experience around the tools, responsibilities and workflows your employees work with every day.",
      primaryButton: "Create Team Training",
      secondaryButton: "Discuss Your Needs",
    },
  },

  // =========================================================
  // GENERATIVE AI TRAINING
  // =========================================================

  {
    slug: "generative-ai-for-business",

    hero: {
      eyebrow: "Generative AI Training",
      title: "Move from prompting to",
      highlight: "production-ready thinking.",
      description:
        "Understand how generative AI systems create content, where they deliver business value and how teams can design reliable workflows using language, image and multimodal AI capabilities.",
      primaryButton: "Explore GenAI Training",
      secondaryButton: "See Learning Modules",
      stats: [
        {
          value: "LLMs",
          label: "Core concepts",
        },
        {
          value: "Multimodal",
          label: "AI workflows",
        },
        {
          value: "Applied",
          label: "GenAI projects",
        },
      ],
    },

    overview: {
      eyebrow: "Beyond Basic Prompting",
      title: "Understand the systems behind the generative AI interface.",
      description:
        "Effective generative AI adoption requires more than learning a collection of prompts. Participants explore model behavior, context, grounding, evaluation and workflow design.",
      features: [
        {
          title: "Model Understanding",
          description:
            "Develop an intuitive understanding of language models, tokens, context and probabilistic generation.",
        },
        {
          title: "Structured Prompt Design",
          description:
            "Design reusable instructions using context, examples, constraints and output structures.",
        },
        {
          title: "Grounded Generation",
          description:
            "Explore techniques for connecting generative systems with trusted organizational knowledge.",
        },
        {
          title: "Output Evaluation",
          description:
            "Learn methods for assessing relevance, consistency, factuality and usefulness of generated outputs.",
        },
      ],
    },

    programs: {
      eyebrow: "Generative AI Curriculum",
      title: "Build deeper capability across the GenAI stack.",
      description:
        "The curriculum connects foundational concepts with practical implementation patterns used in modern generative AI applications.",
      items: [
        {
          title: "Large Language Models",
          description:
            "Understand how LLMs process context, generate responses and behave across different types of tasks.",
        },
        {
          title: "Advanced Prompt Architecture",
          description:
            "Develop structured prompting patterns for complex reasoning, transformation and generation tasks.",
        },
        {
          title: "Retrieval-Augmented Generation",
          description:
            "Explore how external knowledge can be retrieved and supplied to models for grounded responses.",
        },
        {
          title: "Multimodal AI",
          description:
            "Work with systems capable of understanding and generating across text, images and other modalities.",
        },
        {
          title: "GenAI Evaluation",
          description:
            "Learn systematic approaches for measuring output quality and detecting common failure modes.",
        },
        {
          title: "Application Design",
          description:
            "Translate generative AI capabilities into usable internal tools, experiences and business workflows.",
        },
      ],
    },

    journey: {
      eyebrow: "Capability Path",
      title: "Progress from model fundamentals to complete GenAI solutions.",
      description:
        "Learning progresses through increasingly sophisticated concepts so participants understand both how generative systems work and how to apply them.",
      steps: [
        {
          step: "01",
          title: "Explore Models",
          description:
            "Understand generative models, context windows, model behavior and common limitations.",
        },
        {
          step: "02",
          title: "Engineer Inputs",
          description:
            "Develop structured prompting techniques for predictable and reusable interactions.",
        },
        {
          step: "03",
          title: "Ground Knowledge",
          description:
            "Connect models with external information and organizational context.",
        },
        {
          step: "04",
          title: "Evaluate Systems",
          description:
            "Test outputs using quality criteria aligned with the intended application.",
        },
        {
          step: "05",
          title: "Build Experiences",
          description:
            "Combine model capabilities into practical generative AI applications and workflows.",
        },
      ],
    },

    outcomes: {
      eyebrow: "GenAI Capability",
      title: "Develop skills that go beyond experimenting with chat interfaces.",
      description:
        "Participants build a stronger mental model of generative AI and learn how to create more dependable applications around it.",
      items: [
        {
          value: "LLM",
          label: "Model Literacy",
          description:
            "Understand the core mechanics and behavioral characteristics of modern language models.",
        },
        {
          value: "RAG",
          label: "Knowledge Grounding",
          description:
            "Learn how retrieval can connect AI responses with relevant external information.",
        },
        {
          value: "EVAL",
          label: "Quality Measurement",
          description:
            "Develop frameworks for evaluating outputs rather than relying on subjective impressions.",
        },
        {
          value: "BUILD",
          label: "Application Thinking",
          description:
            "Translate model capabilities into structured products and operational workflows.",
        },
      ],
    },

    audience: {
      eyebrow: "Who Should Attend",
      title: "For teams moving from GenAI curiosity to implementation.",
      description:
        "The program can be adapted for technical and non-technical participants depending on the required implementation depth.",
      items: [
        {
          title: "Product Teams",
          description:
            "Explore how generative AI capabilities can become meaningful product experiences.",
        },
        {
          title: "Developers",
          description:
            "Build stronger foundations for integrating language models into applications.",
        },
        {
          title: "Innovation Teams",
          description:
            "Prototype new AI-enabled services, processes and internal tools.",
        },
        {
          title: "Digital Transformation Teams",
          description:
            "Evaluate where generative AI can create sustainable organizational value.",
        },
      ],
    },

    delivery: {
      eyebrow: "Program Formats",
      title: "Learn generative AI through experimentation and implementation.",
      description:
        "Training formats can emphasize conceptual understanding, hands-on building or a combination of both.",
      items: [
        {
          label: "01",
          title: "GenAI Foundations",
          description:
            "Structured learning covering models, prompting, limitations and responsible usage.",
          meta: "Concepts · Demonstrations · Practice",
        },
        {
          label: "02",
          title: "Technical Bootcamp",
          description:
            "Implementation-focused sessions for teams building AI-enabled applications.",
          meta: "LLMs · RAG · Evaluation",
        },
        {
          label: "03",
          title: "Prototype Sprint",
          description:
            "Collaborative program focused on turning a defined problem into a working concept.",
          meta: "Ideation · Build · Validate",
        },
      ],
    },

    cta: {
      eyebrow: "Build with Generative AI",
      title: "Turn GenAI knowledge into practical implementation capability.",
      description:
        "Create a training path that helps your teams understand, evaluate and build with modern generative AI technologies.",
      primaryButton: "Design Your GenAI Program",
      secondaryButton: "Talk to Our Team",
    },
  },

  // =========================================================
  // AI AGENTS & AUTOMATION
  // =========================================================

  {
    slug: "ai-agents-automation",

    hero: {
      eyebrow: "AI Agents & Automation",
      title: "Build intelligent systems that",
      highlight: "take action.",
      description:
        "Learn how AI agents combine reasoning, tools, memory and workflow logic to execute multi-step tasks and automate complex digital processes.",
      primaryButton: "Start Agent Training",
      secondaryButton: "Explore Automation",
      stats: [
        {
          value: "Agents",
          label: "Autonomous workflows",
        },
        {
          value: "Tools",
          label: "System integration",
        },
        {
          value: "Human",
          label: "Oversight patterns",
        },
      ],
    },

    overview: {
      eyebrow: "Agentic Systems",
      title: "Move beyond AI responses into AI-driven execution.",
      description:
        "AI agents introduce a new application model where systems can interpret objectives, select tools, perform actions and coordinate multi-step processes under defined controls.",
      features: [
        {
          title: "Agent Architecture",
          description:
            "Understand the components that enable agents to reason, use tools and maintain task context.",
        },
        {
          title: "Tool Integration",
          description:
            "Connect AI systems with APIs, databases and business software to perform useful actions.",
        },
        {
          title: "Workflow Orchestration",
          description:
            "Design controlled sequences that combine deterministic automation with model-driven decisions.",
        },
        {
          title: "Human Oversight",
          description:
            "Introduce checkpoints and approval patterns for actions requiring additional review.",
        },
      ],
    },

    programs: {
      eyebrow: "Automation Curriculum",
      title: "Design the systems behind intelligent automation.",
      description:
        "Participants explore the architecture, patterns and safeguards required to build reliable agent-driven workflows.",
      items: [
        {
          title: "Agent Fundamentals",
          description:
            "Understand goals, reasoning loops, tool calls, memory and execution cycles.",
        },
        {
          title: "Tool-Calling Systems",
          description:
            "Learn how models interact with external functions, services and structured interfaces.",
        },
        {
          title: "Multi-Step Automation",
          description:
            "Design workflows where AI coordinates multiple actions toward a defined objective.",
        },
        {
          title: "Agent Memory",
          description:
            "Explore short-term context and persistent information strategies for agent workflows.",
        },
        {
          title: "Multi-Agent Patterns",
          description:
            "Examine architectures where specialized agents collaborate on complex tasks.",
        },
        {
          title: "Reliability & Guardrails",
          description:
            "Build controls for permissions, validation, failure handling and human intervention.",
        },
      ],
    },

    journey: {
      eyebrow: "Build Path",
      title: "From simple automation to controlled agentic workflows.",
      description:
        "Participants progressively combine AI reasoning with tools and operational controls.",
      steps: [
        {
          step: "01",
          title: "Map the Process",
          description:
            "Break an operational workflow into decisions, actions, dependencies and exceptions.",
        },
        {
          step: "02",
          title: "Define Tools",
          description:
            "Identify the systems, APIs and functions an AI agent needs to complete its work.",
        },
        {
          step: "03",
          title: "Create the Agent",
          description:
            "Combine instructions, reasoning logic and tool access into an executable workflow.",
        },
        {
          step: "04",
          title: "Add Controls",
          description:
            "Introduce validation, permissions, escalation paths and human approval.",
        },
        {
          step: "05",
          title: "Evaluate Reliability",
          description:
            "Test behavior across normal conditions, edge cases and potential failure scenarios.",
        },
      ],
    },

    outcomes: {
      eyebrow: "Automation Outcomes",
      title: "Develop systems that can coordinate work, not just generate content.",
      description:
        "The program focuses on creating controlled automation patterns that connect AI reasoning with real business actions.",
      items: [
        {
          value: "01",
          label: "Process Mapping",
          description:
            "Identify which workflow components should remain deterministic and which can use AI.",
        },
        {
          value: "02",
          label: "Agent Design",
          description:
            "Structure agents around explicit objectives, tools and execution boundaries.",
        },
        {
          value: "03",
          label: "System Integration",
          description:
            "Connect AI capabilities with external software and operational data.",
        },
        {
          value: "04",
          label: "Controlled Execution",
          description:
            "Implement validation and oversight mechanisms around autonomous actions.",
        },
      ],
    },

    audience: {
      eyebrow: "Built for Automation Teams",
      title: "For professionals creating the next generation of digital workflows.",
      description:
        "Different tracks can focus on architecture, implementation or business process design.",
      items: [
        {
          title: "Software Engineers",
          description:
            "Build agentic applications connected to APIs, services and internal systems.",
        },
        {
          title: "Automation Engineers",
          description:
            "Extend traditional workflow automation with model-driven reasoning.",
        },
        {
          title: "Operations Leaders",
          description:
            "Identify complex processes where intelligent automation can improve execution.",
        },
        {
          title: "AI Product Teams",
          description:
            "Design agent-based experiences with clear controls and measurable objectives.",
        },
      ],
    },

    delivery: {
      eyebrow: "Hands-On Formats",
      title: "Learn agentic AI by designing and testing working systems.",
      description:
        "Programs combine architectural concepts with practical workflow development and controlled experimentation.",
      items: [
        {
          label: "01",
          title: "Agent Architecture Workshop",
          description:
            "Learn core patterns for tools, reasoning, memory and orchestration.",
          meta: "Architecture · Patterns · Design",
        },
        {
          label: "02",
          title: "Automation Build Lab",
          description:
            "Create working agent workflows around realistic operational scenarios.",
          meta: "Build · Integrate · Test",
        },
        {
          label: "03",
          title: "Enterprise Agent Sprint",
          description:
            "Evaluate and prototype an agentic workflow based on an organizational use case.",
          meta: "Discover · Prototype · Review",
        },
      ],
    },

    cta: {
      eyebrow: "Create Intelligent Automation",
      title: "Build AI systems capable of moving work forward.",
      description:
        "Develop the architectural and practical skills required to create controlled agentic workflows for real organizational processes.",
      primaryButton: "Build an Agent Program",
      secondaryButton: "Discuss Automation",
    },
  },

  // =========================================================
  // AI FOR LEADERSHIP
  // =========================================================

  {
    slug: "ai-leadership-strategy",

    hero: {
      eyebrow: "AI for Leadership",
      title: "Lead transformation with",
      highlight: "AI clarity.",
      description:
        "Equip executives and senior decision-makers with the frameworks needed to evaluate AI opportunities, prioritize investments and guide responsible organizational transformation.",
      primaryButton: "Plan Leadership Training",
      secondaryButton: "Explore Executive Topics",
      stats: [
        {
          value: "Strategic",
          label: "AI perspective",
        },
        {
          value: "Executive",
          label: "Decision frameworks",
        },
        {
          value: "Responsible",
          label: "Transformation",
        },
      ],
    },

    overview: {
      eyebrow: "Executive AI Perspective",
      title: "Leadership does not need to build the model — it needs to understand the decision.",
      description:
        "Senior leaders need enough AI fluency to separate meaningful opportunities from hype, ask stronger questions and connect technology decisions with business strategy.",
      features: [
        {
          title: "AI Opportunity Assessment",
          description:
            "Evaluate potential initiatives based on strategic value, feasibility, risk and organizational readiness.",
        },
        {
          title: "Investment Prioritization",
          description:
            "Compare AI opportunities using clear business objectives rather than technology novelty.",
        },
        {
          title: "Transformation Leadership",
          description:
            "Understand the organizational changes required when AI alters workflows, responsibilities and operating models.",
        },
        {
          title: "Governance Awareness",
          description:
            "Develop executive understanding of accountability, privacy, security and responsible AI oversight.",
        },
      ],
    },

    programs: {
      eyebrow: "Executive Curriculum",
      title: "The AI questions leaders should be prepared to answer.",
      description:
        "Sessions focus on strategic decisions, organizational implications and leadership responsibilities rather than technical implementation details.",
      items: [
        {
          title: "AI Landscape & Economics",
          description:
            "Understand major AI capabilities, technology shifts and the economics influencing adoption.",
        },
        {
          title: "Strategic Use-Case Selection",
          description:
            "Identify where AI can create meaningful differentiation, efficiency or new capabilities.",
        },
        {
          title: "Build, Buy or Partner",
          description:
            "Evaluate different approaches to acquiring and developing organizational AI capability.",
        },
        {
          title: "AI Operating Models",
          description:
            "Explore how teams, responsibilities and decision structures evolve during AI transformation.",
        },
        {
          title: "Governance & Risk",
          description:
            "Understand leadership responsibilities around oversight, security, compliance and accountability.",
        },
        {
          title: "Transformation Roadmaps",
          description:
            "Translate AI ambition into staged initiatives, capability development and measurable outcomes.",
        },
      ],
    },

    journey: {
      eyebrow: "Leadership Journey",
      title: "Move from AI awareness to confident strategic direction.",
      description:
        "The leadership journey builds the context and frameworks required to guide AI initiatives across an organization.",
      steps: [
        {
          step: "01",
          title: "Orient",
          description:
            "Understand the current AI landscape without unnecessary technical complexity.",
        },
        {
          step: "02",
          title: "Assess",
          description:
            "Examine organizational opportunities, constraints and readiness for AI adoption.",
        },
        {
          step: "03",
          title: "Prioritize",
          description:
            "Compare potential initiatives using business impact and implementation considerations.",
        },
        {
          step: "04",
          title: "Govern",
          description:
            "Establish leadership expectations for accountability, oversight and responsible use.",
        },
        {
          step: "05",
          title: "Mobilize",
          description:
            "Align teams, investment and transformation priorities around a practical AI direction.",
        },
      ],
    },

    outcomes: {
      eyebrow: "Leadership Outcomes",
      title: "Make more informed decisions about where AI belongs in the business.",
      description:
        "Executives leave with practical frameworks for discussing, evaluating and governing AI initiatives.",
      items: [
        {
          value: "01",
          label: "Strategic Fluency",
          description:
            "Discuss AI opportunities and constraints with greater clarity across technical and business teams.",
        },
        {
          value: "02",
          label: "Investment Discipline",
          description:
            "Evaluate AI initiatives against measurable organizational objectives.",
        },
        {
          value: "03",
          label: "Governance Awareness",
          description:
            "Understand where leadership oversight is necessary throughout the AI lifecycle.",
        },
        {
          value: "04",
          label: "Transformation Direction",
          description:
            "Connect AI capability development with broader organizational priorities.",
        },
      ],
    },

    audience: {
      eyebrow: "Executive Audience",
      title: "Designed for the people responsible for organizational direction.",
      description:
        "Sessions can be tailored to leadership responsibilities and the strategic decisions participants currently face.",
      items: [
        {
          title: "C-Suite Executives",
          description:
            "Develop a shared perspective on AI strategy, investment and organizational implications.",
        },
        {
          title: "Business Unit Leaders",
          description:
            "Evaluate AI opportunities within specific functions, markets and operating environments.",
        },
        {
          title: "Transformation Leaders",
          description:
            "Connect technology initiatives with workforce, process and operating-model change.",
        },
        {
          title: "Board & Governance Teams",
          description:
            "Build awareness of oversight questions associated with organizational AI adoption.",
        },
      ],
    },

    delivery: {
      eyebrow: "Executive Formats",
      title: "Focused learning designed around leadership time and decisions.",
      description:
        "Programs prioritize discussion, strategic frameworks and organization-specific scenarios.",
      items: [
        {
          label: "01",
          title: "Executive Briefing",
          description:
            "A focused introduction to AI capabilities, strategic implications and leadership questions.",
          meta: "Concise · Strategic · Executive",
        },
        {
          label: "02",
          title: "Leadership Workshop",
          description:
            "Interactive sessions centered on organizational priorities and potential AI initiatives.",
          meta: "Discuss · Evaluate · Align",
        },
        {
          label: "03",
          title: "Strategy Intensive",
          description:
            "A deeper program for developing AI priorities, governance considerations and transformation direction.",
          meta: "Strategy · Governance · Roadmap",
        },
      ],
    },

    cta: {
      eyebrow: "Lead with AI Confidence",
      title: "Give leadership the clarity to guide AI transformation responsibly.",
      description:
        "Design an executive learning experience around the strategic questions and organizational priorities that matter to your leadership team.",
      primaryButton: "Create Executive Program",
      secondaryButton: "Speak With Us",
    },
  },

  // =========================================================
// INDUSTRY-SPECIFIC AI TRAINING
// =========================================================

{
  slug: "industry-specific-ai-training",

  hero: {
    eyebrow: "Industry-Specific AI Training",
    title: "Build AI capability around",
    highlight: "your industry.",
    description:
      "Develop practical AI skills around the workflows, challenges, regulations and opportunities that matter within your industry. Training is contextualized around real business scenarios instead of generic AI examples.",
    primaryButton: "Build Your Industry Program",
    secondaryButton: "Explore Industry Training",
    stats: [
      {
        value: "Industry",
        label: "Focused learning",
      },
      {
        value: "Applied",
        label: "Real-world use cases",
      },
      {
        value: "Custom",
        label: "Training pathways",
      },
    ],
  },

  overview: {
    eyebrow: "AI in Your Industry",
    title:
      "Generic AI knowledge becomes more valuable when connected to real industry workflows.",
    description:
      "Different industries operate with different data, processes, regulations and customer expectations. Industry-specific AI training helps teams understand how artificial intelligence can be applied within the environment they already work in.",
    features: [
      {
        title: "Relevant Use Cases",
        description:
          "Explore AI applications connected directly to common workflows and challenges within your industry.",
      },
      {
        title: "Industry Context",
        description:
          "Understand how AI capabilities interact with sector-specific processes, operating models and business priorities.",
      },
      {
        title: "Responsible Adoption",
        description:
          "Examine privacy, security, governance and oversight considerations relevant to industry AI adoption.",
      },
      {
        title: "Practical Application",
        description:
          "Apply AI techniques to realistic scenarios instead of learning through disconnected demonstrations.",
      },
    ],
  },

  programs: {
    eyebrow: "Industry Learning Tracks",
    title:
      "AI training designed around the environments where your teams actually work.",
    description:
      "Programs can be customized around industry requirements, workforce roles, operational challenges and organizational AI maturity.",
    items: [
      {
        title: "Healthcare & Life Sciences",
        description:
          "Explore AI-assisted research, knowledge workflows, operational efficiency and responsible use of AI in healthcare environments.",
      },
      {
        title: "Banking & Financial Services",
        description:
          "Understand AI applications across analysis, operations, customer workflows, risk processes and financial decision support.",
      },
      {
        title: "Retail & E-Commerce",
        description:
          "Apply AI across customer experience, merchandising, marketing, demand analysis and commerce operations.",
      },
      {
        title: "Manufacturing",
        description:
          "Explore intelligent automation, operational analysis, quality workflows, maintenance and production optimization.",
      },
      {
        title: "Technology & Software",
        description:
          "Build practical capability around AI-assisted development, product innovation, automation and intelligent digital experiences.",
      },
      {
        title: "Professional Services",
        description:
          "Use AI to improve research, documentation, analysis, knowledge management and client-service workflows.",
      },
    ],
  },

  journey: {
    eyebrow: "Industry AI Journey",
    title:
      "Move from industry awareness to practical AI implementation.",
    description:
      "A structured learning journey connects AI capabilities with industry-specific opportunities and helps teams identify where intelligent systems can create meaningful value.",
    steps: [
      {
        step: "01",
        title: "Understand",
        description:
          "Build a practical understanding of modern AI capabilities, limitations and emerging industry applications.",
      },
      {
        step: "02",
        title: "Discover",
        description:
          "Identify processes, decisions and workflows where AI could create measurable value.",
      },
      {
        step: "03",
        title: "Evaluate",
        description:
          "Assess potential use cases against business impact, feasibility, data requirements and operational risk.",
      },
      {
        step: "04",
        title: "Apply",
        description:
          "Work through realistic industry scenarios using practical AI techniques and structured workflows.",
      },
      {
        step: "05",
        title: "Scale",
        description:
          "Develop repeatable practices for expanding successful AI adoption across teams and business functions.",
      },
    ],
  },

  outcomes: {
    eyebrow: "Industry Outcomes",
    title:
      "Turn AI knowledge into capability that supports real industry work.",
    description:
      "Participants develop a clearer understanding of where AI can support their sector and how to approach adoption responsibly and practically.",
    items: [
      {
        value: "01",
        label: "Industry AI Fluency",
        description:
          "Understand AI capabilities through terminology, examples and scenarios relevant to your sector.",
      },
      {
        value: "02",
        label: "Use-Case Discovery",
        description:
          "Identify meaningful opportunities for applying AI across existing industry workflows.",
      },
      {
        value: "03",
        label: "Workflow Improvement",
        description:
          "Recognize processes where AI assistance and automation can improve execution.",
      },
      {
        value: "04",
        label: "Responsible Adoption",
        description:
          "Develop stronger awareness of governance, privacy, security and human oversight requirements.",
      },
    ],
  },

  audience: {
    eyebrow: "Who It's For",
    title:
      "Built for organizations applying AI within specialized operating environments.",
    description:
      "Training can be adapted for leadership, business teams, technical professionals and operational groups across different industries.",
    items: [
      {
        title: "Industry Leaders",
        description:
          "Understand AI opportunities, transformation priorities and strategic implications within the sector.",
      },
      {
        title: "Business Teams",
        description:
          "Learn practical ways to integrate AI into everyday industry-specific responsibilities and workflows.",
      },
      {
        title: "Technical Teams",
        description:
          "Connect AI technologies with industry systems, data environments and operational requirements.",
      },
      {
        title: "Innovation Teams",
        description:
          "Explore new AI-enabled products, services, experiences and operating models for the industry.",
      },
    ],
  },

  delivery: {
    eyebrow: "Training Formats",
    title:
      "Industry-focused learning designed around your organization.",
    description:
      "Programs can combine foundational learning, practical workshops and organization-specific use-case development.",
    items: [
      {
        label: "01",
        title: "Industry AI Workshop",
        description:
          "Focused training covering relevant AI capabilities, trends, opportunities and industry scenarios.",
        meta: "Industry · Use Cases · Strategy",
      },
      {
        label: "02",
        title: "Role-Based Training",
        description:
          "Customized learning paths designed around specific teams, responsibilities and operational workflows.",
        meta: "Teams · Roles · Workflows",
      },
      {
        label: "03",
        title: "AI Use-Case Lab",
        description:
          "Collaborative sessions where teams identify, evaluate and structure real AI opportunities from their organization.",
        meta: "Discover · Evaluate · Prototype",
      },
    ],
  },

  cta: {
    eyebrow: "Build Industry AI Capability",
    title:
      "Turn AI into practical capability for your industry.",
    description:
      "Create a customized training program around your sector, workforce, business processes and AI transformation priorities.",
    primaryButton: "Create Your Training Program",
    secondaryButton: "Talk to Our Team",
  },
},
  // =========================================================
  // ENTERPRISE AI ADOPTION
  // =========================================================

  {
    slug: "enterprise-ai-transformation",

    hero: {
      eyebrow: "Enterprise AI Transformation",
      title: "Turn isolated AI experiments into",
      highlight: "enterprise capability.",
      description:
        "Build the skills, governance structures and operating practices required to move artificial intelligence from individual experimentation into scalable organizational adoption.",
      primaryButton: "Plan Enterprise Adoption",
      secondaryButton: "Explore Framework",
      stats: [
        {
          value: "Scale",
          label: "Across functions",
        },
        {
          value: "Govern",
          label: "AI responsibly",
        },
        {
          value: "Measure",
          label: "Business value",
        },
      ],
    },

    overview: {
      eyebrow: "Scaling AI",
      title: "The hardest part of enterprise AI is often not the model.",
      description:
        "Large-scale adoption depends on people, processes, governance, technology and measurement working together. This program helps organizations develop the capabilities needed to operationalize AI beyond isolated pilots.",
      features: [
        {
          title: "AI Readiness",
          description:
            "Assess workforce capability, process maturity, data foundations and organizational constraints.",
        },
        {
          title: "Adoption Operating Model",
          description:
            "Define responsibilities and collaboration patterns across business, technology and governance teams.",
        },
        {
          title: "Use-Case Portfolio",
          description:
            "Create a structured pipeline for identifying, evaluating and prioritizing AI initiatives.",
        },
        {
          title: "Capability Scaling",
          description:
            "Develop repeatable practices that allow successful AI patterns to expand across the enterprise.",
        },
      ],
    },

    programs: {
      eyebrow: "Enterprise Adoption Framework",
      title: "Connect strategy, capability, governance and execution.",
      description:
        "Training is organized around the organizational systems required to move from experimentation to repeatable AI adoption.",
      items: [
        {
          title: "AI Maturity Assessment",
          description:
            "Evaluate current capability across workforce, technology, governance, data and operational processes.",
        },
        {
          title: "Use-Case Portfolio Design",
          description:
            "Create a structured approach for collecting, comparing and prioritizing AI opportunities.",
        },
        {
          title: "AI Governance Foundations",
          description:
            "Establish principles for ownership, review, acceptable usage and lifecycle oversight.",
        },
        {
          title: "Workforce Enablement",
          description:
            "Develop role-specific learning paths that support adoption across different employee groups.",
        },
        {
          title: "Operating Model Design",
          description:
            "Clarify how business teams, technology groups and governance functions collaborate on AI initiatives.",
        },
        {
          title: "Value Measurement",
          description:
            "Define indicators that connect AI initiatives with operational and strategic outcomes.",
        },
      ],
    },

    journey: {
      eyebrow: "Adoption Roadmap",
      title: "Scale AI through a deliberate organizational progression.",
      description:
        "Enterprise adoption develops through coordinated stages rather than disconnected technology deployments.",
      steps: [
        {
          step: "01",
          title: "Baseline",
          description:
            "Establish a clear picture of current AI usage, capabilities, risks and organizational readiness.",
        },
        {
          step: "02",
          title: "Prioritize",
          description:
            "Identify high-value opportunities and determine which initiatives deserve deeper investment.",
        },
        {
          step: "03",
          title: "Enable",
          description:
            "Prepare employees, leaders and technical teams with the capabilities needed for execution.",
        },
        {
          step: "04",
          title: "Operationalize",
          description:
            "Introduce repeatable processes for development, review, deployment and oversight.",
        },
        {
          step: "05",
          title: "Expand",
          description:
            "Scale successful patterns while measuring outcomes and refining organizational practices.",
        },
      ],
    },

    outcomes: {
      eyebrow: "Enterprise Outcomes",
      title: "Create repeatable AI adoption instead of disconnected experimentation.",
      description:
        "The program helps organizations establish a stronger foundation for coordinated and measurable AI transformation.",
      items: [
        {
          value: "01",
          label: "Clearer Priorities",
          description:
            "Build a structured portfolio of AI opportunities aligned with organizational objectives.",
        },
        {
          value: "02",
          label: "Stronger Governance",
          description:
            "Clarify responsibilities and oversight expectations across the AI lifecycle.",
        },
        {
          value: "03",
          label: "Workforce Readiness",
          description:
            "Develop role-specific capability instead of relying on a small group of AI specialists.",
        },
        {
          value: "04",
          label: "Repeatable Scaling",
          description:
            "Create common practices for expanding successful AI initiatives across functions.",
        },
      ],
    },

    audience: {
      eyebrow: "Enterprise Stakeholders",
      title: "Bring the groups responsible for AI transformation into one operating model.",
      description:
        "The program supports cross-functional alignment between the teams required for sustainable enterprise adoption.",
      items: [
        {
          title: "Transformation Offices",
          description:
            "Coordinate AI initiatives with broader organizational change programs.",
        },
        {
          title: "Technology Leadership",
          description:
            "Align platforms, architecture and implementation practices with enterprise priorities.",
        },
        {
          title: "Business Functions",
          description:
            "Identify operational opportunities and participate directly in AI adoption.",
        },
        {
          title: "Risk & Governance Teams",
          description:
            "Establish appropriate controls and oversight without disconnecting governance from execution.",
        },
      ],
    },

    delivery: {
      eyebrow: "Enterprise Engagement",
      title: "Structured programs for complex organizational environments.",
      description:
        "Engagements can combine leadership alignment, workforce development and applied adoption workshops.",
      items: [
        {
          label: "01",
          title: "AI Readiness Program",
          description:
            "Establish a common understanding of current capability, opportunities and adoption gaps.",
          meta: "Assess · Align · Prioritize",
        },
        {
          label: "02",
          title: "Enterprise Enablement",
          description:
            "Develop coordinated learning paths across leadership, business and technical teams.",
          meta: "Leaders · Teams · Builders",
        },
        {
          label: "03",
          title: "Adoption Accelerator",
          description:
            "Move selected AI opportunities through structured discovery, validation and operating-model design.",
          meta: "Portfolio · Governance · Scale",
        },
      ],
    },

    cta: {
      eyebrow: "Scale AI Across the Enterprise",
      title: "Build the organizational systems required for sustainable AI adoption.",
      description:
        "Create an enterprise program connecting workforce capability, governance, operating models and measurable AI initiatives.",
      primaryButton: "Build Your Adoption Roadmap",
      secondaryButton: "Discuss Enterprise AI",
    },
  },
];

export const getCorporateTrainingPage = (
  slug: string
): CorporateTrainingPageData | undefined => {
  return corporateAITrainingPages.find((page) => page.slug === slug);
};