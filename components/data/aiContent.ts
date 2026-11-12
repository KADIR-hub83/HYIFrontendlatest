export type ServiceId = "lab" | "governance" | "responsible";

export type Service = {
  id: ServiceId;
  href: string;
  letter: string;
  nav: string;
  title: string;
  accent: string[];
  subtitle: string;
  layout: "stack" | "grid" | "accordion";
  intro: string[]; // last paragraph is shown as the highlighted scroll-text block
  offers: { t: string; d: string; icon: string }[];
  focus: string;
  outcomes: string[];
};

export const AI_META = {
  kicker: "AI and GenAI Mastery · AI Advisory",
};

export const services: Record<ServiceId, Service> = {
  lab: {
    id: "lab",
    href: "/ai/ai-lab",
    letter: "A",
    nav: "AI Labs",
    title: "AI Labs",
    accent: ["Labs"],
    subtitle: "Turning Ideas into Practical AI Solutions",
    layout: "stack",
    intro: [
      "AI Labs provide organizations with a dedicated environment to explore new ideas, experiment with emerging technologies, and develop solutions that address real business challenges.",
      "We work closely with business and technology teams to understand their requirements, identify suitable AI opportunities, and turn promising ideas into working solutions. Rather than focusing on technology alone, our approach starts with understanding the business problem and finding where AI can deliver meaningful results.",
    ],
    offers: [
      { icon: "🔍", t: "AI Opportunity Identification", d: "Identify business processes and challenges where AI and Generative AI can improve efficiency, reduce manual effort, or support better decision-making." },
      { icon: "🧪", t: "GenAI Experimentation", d: "Explore the practical use of Large Language Models (LLMs), AI assistants, chatbots, and other emerging GenAI capabilities." },
      { icon: "🚀", t: "Proof of Concept Development", d: "Build and test small-scale AI solutions to demonstrate their value before committing to larger investments." },
      { icon: "🤖", t: "AI Agent Development", d: "Explore intelligent agents that can perform tasks, interact with business systems, and support complex workflows." },
      { icon: "🏢", t: "Enterprise AI Solutions", d: "Develop solutions such as knowledge assistants, document intelligence, intelligent search, and workflow automation." },
      { icon: "✅", t: "AI Testing and Validation", d: "Test AI solutions for accuracy, reliability, security, and suitability for business use." },
      { icon: "🎓", t: "AI Capability Building", d: "Help employees and leadership teams understand AI through practical workshops, demonstrations, and hands-on learning sessions." },
    ],
    focus:
      "We help organizations move beyond AI discussions and demonstrations by developing solutions that can be tested, improved, and eventually adopted in real business environments.",
    outcomes: [
      "A clear pipeline of AI opportunities.",
      "Working AI prototypes and proof of concepts.",
      "Practical GenAI use cases.",
      "Faster evaluation of emerging AI technologies.",
      "Better understanding of AI capabilities across teams.",
      "A roadmap for moving successful experiments into production.",
    ],
  },

  governance: {
    id: "governance",
    href: "/ai/ai-governance",
    letter: "B",
    nav: "AI Governance",
    title: "AI Governance",
    accent: ["Governance"],
    subtitle: "Building Confidence and Control in AI Adoption",
    layout: "grid",
    intro: [
      "As organizations introduce AI into their operations, they also need to understand how these systems are being used, what risks they may introduce, and who is accountable for their outcomes.",
      "AI Governance helps establish the right policies, responsibilities, and controls to ensure that AI is used appropriately across the organization.",
      "We help businesses create a governance approach that supports innovation without losing sight of security, compliance, accountability, and business requirements.",
    ],
    offers: [
      { icon: "📜", t: "AI Governance Framework", d: "Develop practical governance policies, standards, and procedures that define how AI should be selected, developed, deployed, and managed." },
      { icon: "⚠️", t: "AI Risk Assessment", d: "Identify potential risks associated with AI systems, including inaccurate outputs, bias, data exposure, security vulnerabilities, and misuse." },
      { icon: "⚖️", t: "AI Compliance Management", d: "Help organizations understand and address applicable regulatory and industry requirements, including the EU AI Act, GDPR, and relevant AI standards." },
      { icon: "📝", t: "AI Policy Development", d: "Define clear guidelines for employee use of public and enterprise AI tools, including appropriate handling of business and confidential information." },
      { icon: "🗂️", t: "AI Model Management", d: "Establish processes for documenting, reviewing, approving, and monitoring AI models throughout their lifecycle." },
      { icon: "🔒", t: "AI Security and Privacy", d: "Introduce appropriate safeguards to protect organizational information and prevent unauthorized access or misuse." },
      { icon: "👤", t: "AI Accountability", d: "Define ownership, responsibilities, approval processes, and escalation mechanisms for AI-related decisions." },
      { icon: "📡", t: "AI Monitoring and Auditing", d: "Establish ongoing reviews to ensure that AI systems continue to perform as expected and remain within approved boundaries." },
    ],
    focus:
      "We help organizations establish governance that works in practice. The objective is not to create unnecessary restrictions, but to give business teams the confidence to use AI while ensuring that risks are properly understood and managed.",
    outcomes: [
      "A practical enterprise AI governance framework.",
      "Clear AI policies and usage guidelines.",
      "Better visibility of AI systems and use cases.",
      "Defined ownership and accountability.",
      "Improved regulatory and compliance readiness.",
      "A structured approach to identifying and managing AI risks.",
    ],
  },

  responsible: {
    id: "responsible",
    href: "/ai/ai-responsible",
    letter: "C",
    nav: "Responsible AI",
    title: "Responsible AI",
    accent: ["Responsible"],
    subtitle: "Making AI Fair, Safe and Trustworthy",
    layout: "accordion",
    intro: [
      "AI can deliver significant business value, but its success also depends on how responsibly it is designed and used.",
      "Responsible AI is about making sure that AI systems are fair, transparent, secure, reliable, and respectful of people. It requires organizations to consider not only what AI can do, but also the possible impact of its decisions and outputs on employees, customers, and society.",
      "We help organizations build responsible AI practices into every stage of the AI lifecycle, from initial design and development through deployment and ongoing monitoring.",
    ],
    offers: [
      { icon: "⚖️", t: "Fairness and Bias Assessment", d: "Identify potential bias in AI models and datasets and assess whether AI outputs could lead to unfair or discriminatory outcomes." },
      { icon: "🔦", t: "Transparency and Explainability", d: "Help organizations understand how AI systems work, document their limitations, and communicate AI-generated decisions clearly." },
      { icon: "👁️", t: "Human Oversight", d: "Establish appropriate levels of human review and intervention, particularly where AI influences important business or individual decisions." },
      { icon: "🛡️", t: "AI Safety and Reliability", d: "Evaluate AI systems for accuracy, consistency, robustness, and the risk of producing harmful or misleading outputs." },
      { icon: "💬", t: "Responsible GenAI Practices", d: "Develop guidelines for the safe use of generative AI, including content generation, information sharing, and the use of AI assistants." },
      { icon: "🔐", t: "Data Privacy and Protection", d: "Ensure that personal, confidential, and sensitive information is handled appropriately when developing and using AI solutions." },
      { icon: "🎯", t: "AI Red Teaming", d: "Test AI applications against potential misuse, manipulation, prompt injection, and other security threats." },
      { icon: "🕹️", t: "Responsible AI for Agents", d: "Introduce appropriate controls over AI agents, including permissions, access to systems, human approvals, and activity monitoring." },
    ],
    focus:
      "We help organizations make responsible AI part of everyday business and technology practices, rather than treating it as a separate compliance exercise. The aim is to build AI solutions that people can trust and organizations can confidently use.",
    outcomes: [
      "Responsible AI principles and guidelines.",
      "Fairness and bias assessment practices.",
      "Improved AI transparency and explainability.",
      "Clear human oversight requirements.",
      "Safer and more reliable AI applications.",
      "Responsible GenAI adoption guidelines.",
      "Increased confidence among customers, employees, and stakeholders.",
    ],
  },
};

export const AI_PAGES = [services.lab, services.governance, services.responsible];

export const together = {
  title: "How the Three Capabilities Work Together",
  intro: "These three service areas complement each other and provide a complete approach to AI adoption.",
  rows: [
    { id: "lab" as ServiceId, name: "AI Labs", objective: "Explore and build", value: "Turn business ideas into working AI solutions." },
    { id: "governance" as ServiceId, name: "AI Governance", objective: "Manage and control", value: "Ensure AI is adopted with the right policies, controls, and accountability." },
    { id: "responsible" as ServiceId, name: "Responsible AI", objective: "Build trust", value: "Make AI fair, transparent, safe, and reliable." },
  ],
  approachTitle: "Our overall approach",
  approach: [
    "We believe successful AI adoption requires more than technology implementation. Organizations need the freedom to experiment, the discipline to manage risks, and the commitment to use AI responsibly.",
    "Our AI Advisory services bring these elements together to help organizations adopt AI with confidence and turn innovation into measurable business value.",
  ],
  labels: { objective: "Primary objective", value: "Business value" },
};