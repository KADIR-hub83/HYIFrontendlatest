export type ServicePageKey =
  | "application-development"
  | "integrate-ai"
  | "gcc"
  | "artificial-intelligence"
  | "cloud-infrastructure"
  | "ai-cloud"
  | "digital-transformation"
  | "robotic-design-development"
  | "ab-testing"
  | "finance-risk-intelligence";

export type Item = { title: string; text: string };

export type ServicePageConfig = {
  eyebrow: string;
  hero: [string, string, string];
  intro: string;
  statementTitle: string;
  statementText: string;
  pillars: Item[];
  process: Item[];
  focus: Item[];
  outcomes: string[];
  ctaTitle: string;
  ctaAccent: string;
  ctaText: string;
};

export const servicePages: Record<ServicePageKey, ServicePageConfig> = {
  "application-development": {
    eyebrow: "APPLICATION DEVELOPMENT",
    hero: ["Build software", "that fits how", "your business works."],
    intro:
      "Design, build and maintain web, mobile and enterprise applications around real user needs, clean architecture and long-term maintainability.",
    statementTitle: "Good software starts with a clear problem.",
    statementText:
      "Strong applications connect user needs, business rules, architecture and delivery discipline. The goal is software that people actually use and teams can confidently evolve.",
    pillars: [
      { title: "Product thinking", text: "Define users, outcomes and priorities before writing code so the right thing gets built." },
      { title: "Modern architecture", text: "Use modular, API-first designs that scale and are easy to change over time." },
      { title: "Quality engineering", text: "Automated testing, code review and CI/CD keep releases predictable and safe." },
      { title: "Secure by design", text: "Build authentication, data protection and secure defaults into every layer." },
    ],
    process: [
      { title: "Discover", text: "Understand users, workflows and constraints." },
      { title: "Design", text: "Shape UX, architecture and delivery plan." },
      { title: "Build", text: "Develop iteratively with frequent working releases." },
      { title: "Test", text: "Validate functionality, performance and security." },
      { title: "Launch", text: "Release with monitoring and rollback readiness." },
      { title: "Evolve", text: "Improve continuously from usage and feedback." },
    ],
    focus: [
      { title: "Web applications", text: "Fast, accessible and responsive products for any browser." },
      { title: "Mobile apps", text: "Native and cross-platform experiences users enjoy." },
      { title: "Enterprise systems", text: "Internal platforms that streamline complex operations." },
      { title: "API & integrations", text: "Reliable connections between your systems and partners." },
    ],
    outcomes: ["Faster time to market", "Maintainable codebase", "Better user experience", "Reliable releases", "Lower technical debt", "Scalable foundation"],
    ctaTitle: "Build applications",
    ctaAccent: "that last.",
    ctaText: "Talk to HYI about your next application and how to deliver it well.",
  },

  "integrate-ai": {
    eyebrow: "INTEGRATE AI",
    hero: ["Bring AI into", "the systems you", "already run."],
    intro:
      "Embed AI capabilities into existing products, workflows and data platforms with clear use cases, governance and measurable value.",
    statementTitle: "AI creates value when it fits the workflow.",
    statementText:
      "Integration is more than adding a model. It means connecting data, interfaces, controls and people so AI supports real decisions and daily work.",
    pillars: [
      { title: "Use-case selection", text: "Prioritize opportunities by business value, feasibility and risk." },
      { title: "Data readiness", text: "Prepare, secure and connect the data AI needs to be useful." },
      { title: "System integration", text: "Connect models to applications through stable APIs and workflows." },
      { title: "Governance", text: "Apply oversight, evaluation and human review where it matters." },
    ],
    process: [
      { title: "Assess", text: "Identify where AI can help and where it cannot." },
      { title: "Prototype", text: "Test a focused use case quickly with real data." },
      { title: "Integrate", text: "Connect AI into applications and processes." },
      { title: "Evaluate", text: "Measure accuracy, safety and business impact." },
      { title: "Deploy", text: "Release with monitoring and fallback paths." },
      { title: "Improve", text: "Tune models and workflows from live feedback." },
    ],
    focus: [
      { title: "Copilots & assistants", text: "Help teams find, draft and decide faster." },
      { title: "Process automation", text: "Reduce repetitive manual work with intelligent steps." },
      { title: "Search & knowledge", text: "Make internal knowledge easy to retrieve and use." },
      { title: "Decision support", text: "Surface insights at the moment they are needed." },
    ],
    outcomes: ["Clear AI roadmap", "Faster workflows", "Reduced manual effort", "Measured business value", "Controlled risk", "Adoption-ready solutions"],
    ctaTitle: "Integrate AI",
    ctaAccent: "with confidence.",
    ctaText: "Let HYI help you add AI where it genuinely improves results.",
  },

  gcc: {
    eyebrow: "GLOBAL CAPABILITY CENTER",
    hero: ["Build a global", "capability center", "that delivers."],
    intro:
      "Set up and scale a Global Capability Center that brings engineering, analytics and operations talent closer to your business strategy.",
    statementTitle: "A GCC is a strategic capability, not just a cost center.",
    statementText:
      "Successful centers combine talent, governance, culture and clear ownership so they grow from delivery support into a source of innovation.",
    pillars: [
      { title: "Strategy & design", text: "Define scope, location, operating model and success measures." },
      { title: "Talent & hiring", text: "Build teams with the right skills, leadership and growth paths." },
      { title: "Setup & operations", text: "Handle entity, facilities, technology and compliance foundations." },
      { title: "Governance", text: "Align the center with global teams through clear accountability." },
    ],
    process: [
      { title: "Evaluate", text: "Assess business case, locations and readiness." },
      { title: "Plan", text: "Design the operating model and roadmap." },
      { title: "Establish", text: "Set up legal, facilities and core systems." },
      { title: "Staff", text: "Recruit and onboard foundational teams." },
      { title: "Ramp up", text: "Transfer work and stabilize delivery." },
      { title: "Scale", text: "Expand scope toward higher-value capabilities." },
    ],
    focus: [
      { title: "Engineering centers", text: "Product and platform teams close to global delivery." },
      { title: "Data & analytics", text: "Centralized insight and AI capability." },
      { title: "Shared services", text: "Efficient finance, HR and operations support." },
      { title: "Innovation hubs", text: "Teams focused on new products and experiments." },
    ],
    outcomes: ["Faster center launch", "Access to skilled talent", "Clear operating model", "Strong global alignment", "Scalable growth path", "Higher-value ownership"],
    ctaTitle: "Build your GCC",
    ctaAccent: "the right way.",
    ctaText: "Talk to HYI about planning and scaling a capability center.",
  },

  "artificial-intelligence": {
    eyebrow: "ARTIFICIAL INTELLIGENCE",
    hero: ["Turn data into", "intelligent", "business action."],
    intro:
      "Develop machine learning, generative AI and analytics solutions that solve defined business problems and can be trusted in production.",
    statementTitle: "Useful AI is built on data, evaluation and trust.",
    statementText:
      "Strong AI programs combine quality data, appropriate models, rigorous testing and responsible oversight, so results hold up beyond the demo.",
    pillars: [
      { title: "Machine learning", text: "Predictive models for forecasting, classification and optimization." },
      { title: "Generative AI", text: "Language and content systems grounded in your own knowledge." },
      { title: "MLOps", text: "Repeatable pipelines to deploy, monitor and retrain models." },
      { title: "Responsible AI", text: "Fairness, privacy and transparency built into delivery." },
    ],
    process: [
      { title: "Frame", text: "Define the problem and success metrics." },
      { title: "Prepare", text: "Collect, clean and structure data." },
      { title: "Model", text: "Train and compare suitable approaches." },
      { title: "Evaluate", text: "Test accuracy, bias and robustness." },
      { title: "Deploy", text: "Serve models reliably at scale." },
      { title: "Monitor", text: "Track drift and performance over time." },
    ],
    focus: [
      { title: "Predictive analytics", text: "Anticipate demand, risk and behavior." },
      { title: "Natural language", text: "Understand and generate text at scale." },
      { title: "Computer vision", text: "Extract meaning from images and video." },
      { title: "Recommendation", text: "Personalize experiences and offers." },
    ],
    outcomes: ["Better decisions", "Automated insight", "Production-ready models", "Measurable accuracy", "Responsible use", "Continuous improvement"],
    ctaTitle: "Put AI",
    ctaAccent: "to work.",
    ctaText: "Explore how HYI can build AI that delivers real outcomes.",
  },

  "cloud-infrastructure": {
    eyebrow: "CLOUD INFRASTRUCTURE",
    hero: ["Build cloud", "infrastructure", "designed to evolve."],
    intro:
      "Design, automate and operate secure, resilient and cost-aware cloud environments that match your workloads and growth.",
    statementTitle: "Principles come before products.",
    statementText:
      "Strong cloud architecture rests on durable engineering principles: security, reliability, automation and cost control, regardless of which services you choose.",
    pillars: [
      { title: "Architecture", text: "Landing zones and network designs built for scale and isolation." },
      { title: "Automation", text: "Infrastructure as code and CI/CD for consistent environments." },
      { title: "Security & compliance", text: "Identity, encryption and policy controls from day one." },
      { title: "Observability & cost", text: "Visibility into performance, reliability and spend." },
    ],
    process: [
      { title: "Assess", text: "Review workloads, dependencies and goals." },
      { title: "Design", text: "Define target architecture and standards." },
      { title: "Build", text: "Provision environments through code." },
      { title: "Migrate", text: "Move workloads with minimal disruption." },
      { title: "Operate", text: "Monitor, patch and respond reliably." },
      { title: "Optimize", text: "Improve performance and reduce waste." },
    ],
    focus: [
      { title: "Migration", text: "Move to the cloud with a clear, low-risk plan." },
      { title: "Containers & Kubernetes", text: "Portable platforms for modern workloads." },
      { title: "DevOps", text: "Faster, safer delivery pipelines." },
      { title: "FinOps", text: "Control and forecast cloud spending." },
    ],
    outcomes: ["Resilient platforms", "Faster provisioning", "Stronger security", "Lower cloud waste", "Operational visibility", "Room to scale"],
    ctaTitle: "Build infrastructure",
    ctaAccent: "that evolves.",
    ctaText: "Discuss your cloud architecture with HYI.",
  },

  "ai-cloud": {
    eyebrow: "AI CLOUD",
    hero: ["Run AI on a", "cloud built for", "intelligent workloads."],
    intro:
      "Create cloud platforms optimized for training, serving and governing AI, with the compute, data and security those workloads need.",
    statementTitle: "AI workloads need infrastructure built for them.",
    statementText:
      "Model training, inference and data pipelines place unique demands on compute, storage, networking and cost. The right platform makes AI faster and more affordable.",
    pillars: [
      { title: "Compute strategy", text: "Right-size GPU and accelerator capacity for training and inference." },
      { title: "Data platform", text: "Pipelines, feature stores and lakes that feed models reliably." },
      { title: "Model serving", text: "Low-latency, scalable endpoints with safe rollouts." },
      { title: "Security & governance", text: "Protect data, models and access across the AI lifecycle." },
    ],
    process: [
      { title: "Plan", text: "Define workloads, scale and budget." },
      { title: "Architect", text: "Design compute, data and network layers." },
      { title: "Provision", text: "Automate environments for teams." },
      { title: "Deploy", text: "Ship training and serving pipelines." },
      { title: "Monitor", text: "Track utilization, latency and drift." },
      { title: "Optimize", text: "Cut cost while keeping performance." },
    ],
    focus: [
      { title: "Training platforms", text: "Efficient environments for model development." },
      { title: "Inference at scale", text: "Serve predictions reliably under load." },
      { title: "Vector & data stores", text: "Foundations for retrieval and RAG." },
      { title: "Cost control", text: "Visibility into expensive AI compute." },
    ],
    outcomes: ["Faster model delivery", "Scalable inference", "Controlled AI spend", "Secure model access", "Reusable platform", "Team productivity"],
    ctaTitle: "Power AI",
    ctaAccent: "with the right cloud.",
    ctaText: "Talk to HYI about an AI-ready cloud platform.",
  },

  "digital-transformation": {
    eyebrow: "DIGITAL TRANSFORMATION",
    hero: ["Transform how", "your business", "creates value."],
    intro:
      "Modernize processes, technology and ways of working so your organization becomes faster, more connected and more responsive to change.",
    statementTitle: "Transformation is a change in how the business operates.",
    statementText:
      "Technology is only part of the story. Lasting transformation aligns strategy, people, processes and platforms around clear outcomes.",
    pillars: [
      { title: "Strategy & roadmap", text: "Link digital initiatives directly to business goals." },
      { title: "Process modernization", text: "Simplify and automate workflows that slow teams down." },
      { title: "Platform & data", text: "Build the foundations for speed, insight and integration." },
      { title: "People & change", text: "Support adoption with training, ownership and communication." },
    ],
    process: [
      { title: "Diagnose", text: "Understand current state and pain points." },
      { title: "Envision", text: "Define the target experience and outcomes." },
      { title: "Prioritize", text: "Sequence initiatives by value and effort." },
      { title: "Deliver", text: "Implement in focused, measurable increments." },
      { title: "Adopt", text: "Drive usage and new ways of working." },
      { title: "Sustain", text: "Measure results and keep improving." },
    ],
    focus: [
      { title: "Customer experience", text: "Smoother journeys across every channel." },
      { title: "Operations", text: "Efficient, automated back-office processes." },
      { title: "Legacy modernization", text: "Update systems without risking the business." },
      { title: "Data-driven culture", text: "Decisions backed by trusted insight." },
    ],
    outcomes: ["Clear transformation roadmap", "Faster operations", "Improved customer experience", "Modern technology base", "Higher adoption", "Measurable ROI"],
    ctaTitle: "Transform with",
    ctaAccent: "purpose.",
    ctaText: "Start your digital transformation journey with HYI.",
  },

  "robotic-design-development": {
    eyebrow: "ROBOTIC DESIGN & DEVELOPMENT",
    hero: ["Design robots", "that work in", "the real world."],
    intro:
      "Engineer robotic systems from concept to deployment, combining mechanical design, embedded control, perception and intelligent software.",
    statementTitle: "Robotics succeeds where hardware and software meet.",
    statementText:
      "Reliable robots need integrated mechanical, electrical and software design, validated through simulation and real-world testing before deployment.",
    pillars: [
      { title: "Mechanical design", text: "Structures, actuation and materials suited to the task." },
      { title: "Controls & embedded", text: "Real-time control and firmware for precise, safe motion." },
      { title: "Perception & AI", text: "Sensors, vision and learning for awareness and decisions." },
      { title: "Safety & validation", text: "Testing, standards and safeguards before field use." },
    ],
    process: [
      { title: "Define", text: "Capture requirements, environment and constraints." },
      { title: "Concept", text: "Explore designs and select an approach." },
      { title: "Simulate", text: "Validate behavior in virtual environments." },
      { title: "Prototype", text: "Build and iterate on working hardware." },
      { title: "Test", text: "Verify performance, reliability and safety." },
      { title: "Deploy", text: "Transition to production and support." },
    ],
    focus: [
      { title: "Industrial automation", text: "Robots for manufacturing and logistics." },
      { title: "Autonomous systems", text: "Navigation and decision-making in dynamic spaces." },
      { title: "Robot software", text: "Middleware, planning and fleet management." },
      { title: "Human-robot interaction", text: "Safe and intuitive collaboration." },
    ],
    outcomes: ["Validated designs", "Reliable motion control", "Safer operation", "Faster prototyping", "Integrated software stack", "Production readiness"],
    ctaTitle: "Build robotics",
    ctaAccent: "with confidence.",
    ctaText: "Discuss your robotics project with the HYI team.",
  },

  "ab-testing": {
    eyebrow: "A/B TESTING",
    hero: ["Make decisions", "backed by", "real evidence."],
    intro:
      "Design and run controlled experiments that show what actually improves conversion, engagement and product outcomes.",
    statementTitle: "Opinions are guesses. Experiments are evidence.",
    statementText:
      "A good experimentation program defines clear hypotheses, measures the right metrics and interprets results with statistical care, so teams learn faster.",
    pillars: [
      { title: "Hypothesis design", text: "Start with a clear question and expected impact." },
      { title: "Experiment setup", text: "Randomization, sample size and metrics defined upfront." },
      { title: "Statistical rigor", text: "Avoid false wins with sound analysis and guardrails." },
      { title: "Learning culture", text: "Share results so every test improves the next one." },
    ],
    process: [
      { title: "Hypothesize", text: "Define the change and the metric it should move." },
      { title: "Design", text: "Choose variants, audience and duration." },
      { title: "Implement", text: "Ship variants with reliable tracking." },
      { title: "Run", text: "Collect data without peeking early." },
      { title: "Analyze", text: "Evaluate significance and side effects." },
      { title: "Decide", text: "Roll out, iterate or stop with confidence." },
    ],
    focus: [
      { title: "Conversion optimization", text: "Improve funnels, pricing and calls to action." },
      { title: "Product experiments", text: "Test features before full rollout." },
      { title: "Personalization", text: "Compare experiences for different segments." },
      { title: "Experiment platform", text: "Tooling to run tests consistently at scale." },
    ],
    outcomes: ["Evidence-based decisions", "Lower rollout risk", "Higher conversion", "Faster learning", "Trusted metrics", "Repeatable process"],
    ctaTitle: "Test ideas",
    ctaAccent: "before you scale them.",
    ctaText: "Build an experimentation practice with HYI.",
  },

  "finance-risk-intelligence": {
    eyebrow: "FINANCE & RISK INTELLIGENCE",
    hero: ["See financial", "risk clearly", "before it grows."],
    intro:
      "Combine analytics, monitoring and AI to give finance and risk teams timely, trustworthy insight into exposure, compliance and performance.",
    statementTitle: "Better risk decisions need better visibility.",
    statementText:
      "Intelligence connects fragmented financial and risk data into a clear, current picture, so teams can act early instead of reacting late.",
    pillars: [
      { title: "Unified data", text: "Bring finance and risk data together into one trusted view." },
      { title: "Risk analytics", text: "Model exposure, scenarios and concentrations." },
      { title: "Monitoring & alerts", text: "Detect meaningful changes as they happen." },
      { title: "Compliance reporting", text: "Produce accurate, auditable reports with less effort." },
    ],
    process: [
      { title: "Integrate", text: "Connect source systems and data feeds." },
      { title: "Model", text: "Define metrics, thresholds and risk logic." },
      { title: "Analyze", text: "Explore trends, drivers and scenarios." },
      { title: "Monitor", text: "Track indicators continuously." },
      { title: "Report", text: "Deliver insight to the right stakeholders." },
      { title: "Refine", text: "Improve models as conditions change." },
    ],
    focus: [
      { title: "Credit & market risk", text: "Understand exposure across portfolios." },
      { title: "Fraud & anomaly detection", text: "Spot unusual activity early." },
      { title: "Financial forecasting", text: "Plan with data-driven projections." },
      { title: "Regulatory reporting", text: "Meet obligations with traceable data." },
    ],
    outcomes: ["Clearer risk visibility", "Earlier warnings", "Faster reporting", "Better forecasting", "Audit-ready data", "Confident decisions"],
    ctaTitle: "Turn risk data",
    ctaAccent: "into intelligence.",
    ctaText: "Talk to HYI about finance and risk intelligence.",
  },
};