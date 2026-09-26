export type CloudIconName =
  | "cloud"
  | "cloud-cog"
  | "boxes"
  | "shield-check"
  | "network"
  | "server"
  | "git-branch"
  | "container"
  | "workflow"
  | "refresh-ccw"
  | "activity";

export type CloudService = {
  slug: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  definition: string;
  question: string;
  icon: CloudIconName;

  knowledge: {
    eyebrow: string;
    heading: string;
    accent: string;
    intro: string;
    context: string;
    pillars: {
      icon: "activity" | "shield-check" | "circle-dollar-sign" | "workflow" | "gauge";
      title: string;
      description: string;
    }[];
  };

  architecture: string[];

  capabilities: {
    title: string;
    description: string;
  }[];

  process: {
    step: string;
    title: string;
    description: string;
    output: string;
  }[];

  principles: {
    title: string;
    description: string;
  }[];

  useCases: {
    title: string;
    description: string;
  }[];
};

export const cloudServices: Record<string, CloudService> = {
  "cloud-consulting": {
    slug: "cloud-consulting",
    eyebrow: "Cloud Strategy",
    title: "Cloud Consulting",
    accent: "Strategy before infrastructure.",
    description:
      "Cloud consulting connects business objectives with architecture, governance, security, operations and financial decisions before technology is deployed.",
    definition:
      "A cloud strategy should define why workloads move to cloud, what operating model supports them, how risk is governed and how value will be measured.",
    question:
      "What cloud operating model best supports the organization?",
    icon: "cloud-cog",

    knowledge: {
      eyebrow: "02 / CLOUD STRATEGY INTELLIGENCE",
      heading: "Cloud decisions begin with",
      accent: "business context.",
      intro:
        "Cloud consulting is not a product-selection exercise. It connects business priorities, application constraints, operating responsibilities, security requirements and financial expectations before teams commit to a target platform or transformation sequence.",
      context:
        "For Cloud Consulting, HYI.AI evaluates the organization as a complete operating system: what should move, what should remain, which capabilities must be built first, how governance should work and how cloud investment can remain aligned with measurable outcomes.",
      pillars: [
      {
        icon: "activity",
        title: "Transformation Readiness",
        description:
          "Assess application portfolios, infrastructure dependencies, engineering maturity and organizational constraints together. The objective is to identify what the organization can change safely now, what requires preparation and where transformation risk needs active management.",
      },
      {
        icon: "shield-check",
        title: "Governance & Risk",
        description:
          "Define identity, security, compliance, networking and policy guardrails before cloud adoption expands. Governance becomes an architectural capability that helps teams move faster without creating uncontrolled environments or inconsistent operational practices.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Cloud Economics",
        description:
          "Connect architecture decisions with forecasting, allocation, unit economics and ongoing optimization. Teams gain a clearer view of where cloud spending creates business value, where consumption is inefficient and how financial accountability should be distributed.",
      },
      {
        icon: "workflow",
        title: "Operating Model",
        description:
          "Clarify ownership across platform engineering, application teams, security, operations and finance. A practical operating model defines who builds shared foundations, who owns workloads, how exceptions are handled and how decisions move through the organization.",
      },
      {
        icon: "gauge",
        title: "Roadmap & Outcomes",
        description:
          "Sequence cloud initiatives according to value, dependency, complexity and risk rather than migrating everything at once. The roadmap creates measurable stages for platform foundations, workload adoption, modernization and continuous improvement.",
      },
      ],
    },

    architecture: [
      "Business Goals",
      "Workload Discovery",
      "Cloud Strategy",
      "Architecture",
      "Governance",
      "Execution",
    ],

    capabilities: [
      {
        title: "Cloud readiness assessment",
        description:
          "Evaluate applications, infrastructure, data, security requirements and organizational readiness before transformation begins.",
      },
      {
        title: "Target architecture",
        description:
          "Define the intended cloud environment, workload boundaries, network topology, identity architecture and shared platform services.",
      },
      {
        title: "Operating model",
        description: "Establish responsibilities across platform engineering, application teams, security, operations and finance. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Governance strategy",
        description:
          "Define policies for identity, networking, security, resource provisioning, tagging, compliance and cost management.",
      },
      {
        title: "FinOps alignment",
        description: "Connect cloud consumption with financial accountability, forecasting, allocation and continuous optimization. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Transformation roadmap",
        description: "Sequence initiatives according to business priority, technical dependency, risk and organizational capacity. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Discover",
        description: "Understand business objectives, workloads, infrastructure dependencies and constraints. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Current-state assessment",
      },
      {
        step: "02",
        title: "Assess",
        description: "Evaluate readiness, risk, application suitability, security and organizational maturity. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Readiness model",
      },
      {
        step: "03",
        title: "Design",
        description: "Create the target architecture, governance model and operating principles. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Target cloud architecture",
      },
      {
        step: "04",
        title: "Prioritize",
        description: "Organize workloads according to value, complexity, dependency and migration risk. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Transformation backlog",
      },
      {
        step: "05",
        title: "Execute",
        description: "Build platform foundations and progressively onboard workloads. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cloud adoption",
      },
      {
        step: "06",
        title: "Optimize",
        description: "Continuously improve reliability, cost, security, operations and performance. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cloud maturity",
      },
    ],

    principles: [
      {
        title: "Business aligned",
        description: "Architecture decisions should support measurable business requirements. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Governed by design",
        description: "Policies and guardrails should be part of the platform rather than added later. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Automation first",
        description: "Repeatable infrastructure and operations reduce configuration drift. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Continuous optimization",
        description: "Cloud architecture evolves as workloads, demand and business priorities change. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Cloud adoption",
        description: "Organizations beginning or restructuring their cloud transformation. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Platform modernization",
        description: "Teams replacing fragmented infrastructure with governed cloud platforms. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cost transformation",
        description: "Organizations needing better visibility and control over cloud economics. This capability is evaluated in the context of Cloud Consulting requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "cloud-migration": {
    slug: "cloud-migration",
    eyebrow: "Cloud Transformation",
    title: "Cloud Migration",
    accent: "Move workloads without moving risk.",
    description:
      "Cloud migration moves applications, infrastructure and data from existing environments into a cloud operating model while managing dependencies, downtime and business continuity.",
    definition:
      "Migration is not simply server relocation. Each workload requires a migration strategy based on architecture, dependencies, business criticality and modernization opportunity.",
    question:
      "How should each workload move to the cloud?",
    icon: "refresh-ccw",

    knowledge: {
      eyebrow: "02 / MIGRATION KNOWLEDGE",
      heading: "Migration is a",
      accent: "dependency problem.",
      intro:
        "Successful cloud migration requires more than copying servers into a new environment. Applications, databases, integrations, identity flows, network paths and operational procedures must move in a sequence that preserves service continuity and data integrity.",
      context:
        "For Cloud Migration, HYI.AI can evaluate workload dependencies, migration strategies, landing-zone readiness and cutover requirements so each migration wave has a defined technical approach, validation plan and recovery path.",
      pillars: [
      {
        icon: "activity",
        title: "Workload Discovery",
        description:
          "Build an accurate inventory of applications, infrastructure, databases, interfaces and business owners. Discovery establishes the evidence required to decide migration scope and prevents hidden systems from appearing late in a cutover.",
      },
      {
        icon: "shield-check",
        title: "Migration Risk",
        description:
          "Evaluate security controls, data sensitivity, business criticality, downtime tolerance and rollback requirements before movement begins. Higher-risk workloads receive stronger validation, sequencing and recovery controls.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Modernization Value",
        description:
          "Compare the cost and benefit of rehosting, replatforming, refactoring, replacing, retaining or retiring each workload. Migration becomes an opportunity to remove technical debt instead of reproducing every legacy decision in cloud.",
      },
      {
        icon: "workflow",
        title: "Wave Planning",
        description:
          "Group workloads into controlled migration waves based on dependencies and organizational capacity. Each wave can include preparation, synchronization, cutover, testing, acceptance and rollback criteria.",
      },
      {
        icon: "gauge",
        title: "Production Validation",
        description:
          "Verify functionality, performance, data integrity, observability and operational ownership after cutover. Migration is complete only when the workload can be supported reliably in its new operating environment.",
      },
      ],
    },

    architecture: [
      "Discover",
      "Dependency Map",
      "Migration Strategy",
      "Landing Zone",
      "Migrate",
      "Validate",
    ],

    capabilities: [
      {
        title: "Application discovery",
        description: "Inventory workloads, infrastructure, databases, interfaces and technical dependencies. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Dependency mapping",
        description: "Understand communication between applications, data stores and external systems. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Migration strategy",
        description: "Choose appropriate approaches such as rehost, replatform, refactor, replace, retain or retire. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Landing zone preparation",
        description: "Establish networking, identity, security, governance and operational foundations. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Data migration",
        description: "Plan data movement, synchronization, integrity validation and cutover. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Post-migration optimization",
        description: "Rightsize resources and improve architecture after workloads become cloud-native. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Build a reliable inventory of applications, infrastructure and data. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Workload inventory",
      },
      {
        step: "02",
        title: "Map dependencies",
        description: "Identify technical relationships that influence migration sequence. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Dependency map",
      },
      {
        step: "03",
        title: "Classify",
        description: "Determine migration strategy and modernization opportunity. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Migration portfolio",
      },
      {
        step: "04",
        title: "Prepare",
        description: "Build landing zones, connectivity, security and observability. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cloud foundation",
      },
      {
        step: "05",
        title: "Migrate",
        description: "Move workloads through controlled migration waves. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cloud workloads",
      },
      {
        step: "06",
        title: "Validate",
        description: "Test functionality, data integrity, performance and resilience. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Production acceptance",
      },
    ],

    principles: [
      {
        title: "Dependency aware",
        description: "Migration sequencing must account for application and data dependencies. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Reversible cutover",
        description: "Critical migrations require rollback and recovery planning. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security continuity",
        description: "Controls must remain effective throughout transition. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Modernize intentionally",
        description: "Not every workload requires immediate refactoring. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Data center exit",
        description: "Move workloads from physical data centers into cloud environments. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Legacy modernization",
        description: "Progressively modernize aging application platforms. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cloud consolidation",
        description: "Standardize fragmented cloud environments. This capability is evaluated in the context of Cloud Migration requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "cloud-architecture": {
    slug: "cloud-architecture",
    eyebrow: "Architecture Engineering",
    title: "Cloud Architecture",
    accent: "Design infrastructure as a system.",
    description:
      "Cloud architecture defines how compute, networking, storage, identity, security, data and operations work together to support a workload.",
    definition:
      "A strong architecture balances reliability, security, performance, operational complexity and cost instead of optimizing one dimension in isolation.",
    question:
      "How should the workload be structured to satisfy its requirements?",
    icon: "boxes",

    knowledge: {
      eyebrow: "02 / ARCHITECTURE KNOWLEDGE",
      heading: "Architecture is",
      accent: "a system of tradeoffs.",
      intro:
        "Cloud architecture balances reliability, security, performance, scalability, operational complexity and cost. Optimizing one dimension in isolation can create weaknesses elsewhere, so design decisions must be evaluated against complete workload requirements.",
      context:
        "For Cloud Architecture, HYI.AI can examine system boundaries, communication patterns, failure modes, data requirements and operational constraints to create architectures that remain understandable, supportable and adaptable as demand changes.",
      pillars: [
      {
        icon: "activity",
        title: "Reliability Engineering",
        description:
          "Design components to tolerate expected failures through redundancy, fault isolation, health checks and recovery mechanisms. Reliability decisions should reflect the actual availability and continuity requirements of the workload.",
      },
      {
        icon: "shield-check",
        title: "Security Architecture",
        description:
          "Integrate identity, network segmentation, encryption, secrets management and policy controls into the system design. Security becomes part of normal architecture rather than a layer added immediately before production.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Cost Architecture",
        description:
          "Evaluate architectural value against resource consumption, redundancy and managed-service choices. Cost-efficient design removes waste without weakening the reliability, security or performance requirements the workload genuinely needs.",
      },
      {
        icon: "workflow",
        title: "Operational Design",
        description:
          "Consider deployment, observability, incident response, configuration and lifecycle management while architecture is being created. Systems that are easy to diagram but difficult to operate create long-term engineering friction.",
      },
      {
        icon: "gauge",
        title: "Performance & Scale",
        description:
          "Match compute, storage, networking and data patterns to workload behavior. Capacity strategies should accommodate changing demand while protecting latency, throughput and user-experience objectives.",
      },
      ],
    },

    architecture: [
      "Users",
      "Edge",
      "Network",
      "Compute",
      "Data",
      "Observability",
    ],

    capabilities: [
      {
        title: "Reference architecture",
        description: "Define workload components, boundaries, communication patterns and dependencies. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "High availability",
        description: "Reduce single points of failure using redundancy and fault isolation. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Scalability",
        description: "Design components to adapt as demand changes. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security architecture",
        description: "Integrate identity, segmentation, encryption and policy controls. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Data architecture",
        description: "Choose storage and database patterns according to access, durability and consistency requirements. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Architecture review",
        description: "Evaluate tradeoffs across reliability, security, performance, cost and operations. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Capture functional and non-functional requirements. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Architecture requirements",
      },
      {
        step: "02",
        title: "Decompose",
        description: "Identify components, responsibilities and boundaries. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "System model",
      },
      {
        step: "03",
        title: "Select patterns",
        description: "Choose architecture patterns according to workload characteristics. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Architecture pattern",
      },
      {
        step: "04",
        title: "Design",
        description: "Define compute, network, storage, identity and data topology. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Target architecture",
      },
      {
        step: "05",
        title: "Validate",
        description: "Evaluate failure, security, scale and operational scenarios. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Architecture review",
      },
      {
        step: "06",
        title: "Evolve",
        description: "Review architecture as demand and constraints change. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Architecture maturity",
      },
    ],

    principles: [
      {
        title: "Reliability",
        description: "Design systems to tolerate failures and recover predictably. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security",
        description: "Protect identities, workloads, networks and data. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Performance",
        description: "Match resource architecture to workload demand. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cost",
        description: "Evaluate architectural value against resource consumption. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "New cloud workloads",
        description: "Design new applications directly for cloud environments. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Architecture modernization",
        description: "Redesign workloads that no longer meet reliability or scale needs. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Enterprise platforms",
        description: "Build shared cloud foundations for multiple teams. This capability is evaluated in the context of Cloud Architecture requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "cloud-security": {
    slug: "cloud-security",
    eyebrow: "Cloud Protection",
    title: "Cloud Security",
    accent: "Protect every trust boundary.",
    description:
      "Cloud security combines identity, network controls, workload protection, encryption, policy, logging and incident response across the cloud environment.",
    definition:
      "Security should be integrated into architecture and operations rather than treated as a final deployment step.",
    question:
      "Who or what should access each resource, under which conditions?",
    icon: "shield-check",

    knowledge: {
      eyebrow: "02 / SECURITY KNOWLEDGE",
      heading: "Security starts with",
      accent: "trust boundaries.",
      intro:
        "Cloud security depends on understanding identities, resources, network paths, sensitive data and the conditions under which access should be permitted. Strong protection combines preventive controls with continuous visibility, detection and response.",
      context:
        "For Cloud Security, HYI.AI can evaluate how trust is established and verified across users, services, workloads and data, then align technical controls with the sensitivity and operational requirements of each environment.",
      pillars: [
      {
        icon: "activity",
        title: "Security Visibility",
        description:
          "Collect meaningful identity, workload, network and data signals so teams can understand normal behavior and identify abnormal conditions. Visibility supports investigation, posture management and evidence-based security improvement.",
      },
      {
        icon: "shield-check",
        title: "Identity & Access",
        description:
          "Apply strong authentication, least privilege, privileged-access controls and workload identities. Permissions should be explicit, reviewable and limited to what a person or service requires to perform its function.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Risk Prioritization",
        description:
          "Focus security investment on controls that reduce meaningful business and technical risk. Prioritization prevents teams from treating every finding as equally important and helps remediation effort follow exposure and impact.",
      },
      {
        icon: "workflow",
        title: "Detection & Response",
        description:
          "Connect telemetry, alerting, investigation, containment and recovery into repeatable security operations. Response procedures should be prepared before incidents so teams can act quickly without improvising critical decisions.",
      },
      {
        icon: "gauge",
        title: "Continuous Verification",
        description:
          "Reassess configuration, access and security posture as environments change. Cloud resources are dynamic, so protection must continuously evaluate whether deployed state still satisfies intended policy.",
      },
      ],
    },

    architecture: [
      "Identity",
      "Policy",
      "Network",
      "Workload",
      "Data",
      "Detection",
    ],

    capabilities: [
      {
        title: "Identity security",
        description: "Control authentication, authorization, privileged access and service identities. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Network segmentation",
        description: "Separate trust zones and control traffic between workloads. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Data protection",
        description: "Apply encryption, key management and appropriate access controls. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security posture",
        description: "Continuously evaluate cloud configuration against security requirements. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Threat detection",
        description: "Collect and correlate security signals to identify suspicious activity. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Incident readiness",
        description: "Establish processes for investigation, containment and recovery. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Identify",
        description: "Inventory assets, identities and trust boundaries. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Security scope",
      },
      {
        step: "02",
        title: "Model threats",
        description: "Understand likely attack paths and business impact. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Threat model",
      },
      {
        step: "03",
        title: "Protect",
        description: "Implement preventive controls. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Security controls",
      },
      {
        step: "04",
        title: "Observe",
        description: "Collect security telemetry. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Security visibility",
      },
      {
        step: "05",
        title: "Detect",
        description: "Identify abnormal or malicious behavior. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Security alerts",
      },
      {
        step: "06",
        title: "Respond",
        description: "Contain and recover from incidents. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Incident response",
      },
    ],

    principles: [
      {
        title: "Least privilege",
        description: "Grant only the permissions required to perform a task. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Defense in depth",
        description: "Use complementary controls across multiple layers. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Assume breach",
        description: "Architect for detection and containment of compromise. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Continuous verification",
        description: "Access decisions should consider identity and context. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Cloud security modernization",
        description: "Standardize security across growing cloud estates. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Regulated workloads",
        description: "Implement controls around sensitive environments. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security operations",
        description: "Improve visibility and response capability. This capability is evaluated in the context of Cloud Security requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "cloud-networking": {
    slug: "cloud-networking",
    eyebrow: "Cloud Connectivity",
    title: "Cloud Networking",
    accent: "Connect workloads without flattening trust.",
    description: "Cloud networking controls how users, services, applications, data centers and cloud resources communicate. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
    definition:
      "Network architecture should provide connectivity while preserving segmentation, security, observability, resilience and predictable traffic flow.",
    question:
      "How should traffic enter, move through and leave the cloud environment?",
    icon: "network",

    knowledge: {
      eyebrow: "02 / NETWORK KNOWLEDGE",
      heading: "Connectivity without",
      accent: "flattening trust.",
      intro:
        "Cloud networking determines how users, applications, services, data centers and managed platforms communicate. Good network design creates predictable traffic paths while preserving segmentation, resilience, security and operational visibility.",
      context:
        "For Cloud Networking, HYI.AI can evaluate address planning, routing, private connectivity, hybrid integration, load balancing and traffic controls as one connected architecture rather than independent networking products.",
      pillars: [
      {
        icon: "activity",
        title: "Traffic Observability",
        description:
          "Measure flow, latency, errors and connectivity behavior across important paths. Network telemetry helps teams distinguish application failures from routing, capacity or policy problems and supports faster incident investigation.",
      },
      {
        icon: "shield-check",
        title: "Segmentation",
        description:
          "Separate workloads according to trust, environment and sensitivity. Segmentation reduces unnecessary lateral movement and allows network policy to express which systems should communicate instead of assuming universal connectivity.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Efficient Connectivity",
        description:
          "Choose connectivity patterns that balance performance, resilience and transfer cost. Architecture should avoid unnecessary traffic movement while preserving the private and redundant paths required by critical workloads.",
      },
      {
        icon: "workflow",
        title: "Hybrid Integration",
        description:
          "Coordinate cloud networks with enterprise locations, shared services and external dependencies. Routing, DNS, identity and security controls must work consistently across boundaries for hybrid applications to remain supportable.",
      },
      {
        icon: "gauge",
        title: "Resilient Traffic",
        description:
          "Design redundant network paths, load distribution and failure handling around real service requirements. Connectivity should degrade predictably and recover without depending on a single critical route or appliance.",
      },
      ],
    },

    architecture: [
      "Internet",
      "Edge",
      "Firewall",
      "Load Balancer",
      "Private Network",
      "Workloads",
    ],

    capabilities: [
      {
        title: "Virtual networks",
        description: "Create isolated address spaces and workload boundaries. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Routing",
        description: "Control traffic movement between networks and services. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Load balancing",
        description: "Distribute requests across healthy workload instances. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Private connectivity",
        description: "Connect services without unnecessary public exposure. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Hybrid networking",
        description: "Connect cloud environments with enterprise locations. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Network observability",
        description: "Monitor traffic, flow, latency and connectivity behavior. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Address",
        description: "Plan IP address spaces and future growth. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Address plan",
      },
      {
        step: "02",
        title: "Segment",
        description: "Define trust and workload boundaries. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Network topology",
      },
      {
        step: "03",
        title: "Route",
        description: "Design traffic paths. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Routing architecture",
      },
      {
        step: "04",
        title: "Secure",
        description: "Apply traffic controls. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Network policy",
      },
      {
        step: "05",
        title: "Connect",
        description: "Establish hybrid and service connectivity. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Connected environment",
      },
      {
        step: "06",
        title: "Observe",
        description: "Monitor flow and performance. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Network visibility",
      },
    ],

    principles: [
      {
        title: "Segment",
        description: "Separate workloads according to trust. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Minimize exposure",
        description: "Prefer private connectivity where appropriate. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Design for failure",
        description: "Avoid critical single network paths. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Observe traffic",
        description: "Network behavior must be measurable. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Hybrid cloud",
        description: "Connect enterprise networks and cloud environments. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Multi-tier applications",
        description: "Separate edge, application and data tiers. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Private services",
        description: "Reduce unnecessary public exposure. This capability is evaluated in the context of Cloud Networking requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "infrastructure-management": {
    slug: "infrastructure-management",
    eyebrow: "Cloud Operations",
    title: "Cloud Infrastructure Management",
    accent: "Operate cloud as a continuously evolving system.",
    description:
      "Infrastructure management covers provisioning, configuration, patching, capacity, governance, operations and lifecycle management.",
    definition:
      "Cloud resources are dynamic. Effective management requires automation, policy, inventory, observability and clearly defined operational ownership.",
    question:
      "How do we keep the cloud estate secure, consistent and supportable?",
    icon: "server",

    knowledge: {
      eyebrow: "02 / OPERATIONS KNOWLEDGE",
      heading: "Cloud estates need",
      accent: "continuous control.",
      intro:
        "Cloud infrastructure changes constantly as resources are provisioned, resized, patched, reconfigured and retired. Effective management requires a reliable view of deployed state plus automation that keeps environments aligned with engineering and governance standards.",
      context:
        "For Cloud Infrastructure Management, HYI.AI can connect inventory, configuration, policy, capacity and lifecycle operations so teams manage cloud as a continuously evolving system instead of a collection of manually maintained resources.",
      pillars: [
      {
        icon: "activity",
        title: "Operational Visibility",
        description:
          "Maintain current inventory and telemetry for infrastructure health, configuration and ownership. Teams need to know what exists, why it exists and whether deployed resources are behaving as expected.",
      },
      {
        icon: "shield-check",
        title: "Policy & Compliance",
        description:
          "Apply guardrails for identity, configuration, networking, tagging and resource usage consistently. Automated policy reduces configuration drift and makes cloud standards enforceable across a growing estate.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Capacity & Cost",
        description:
          "Align provisioned resources with real workload demand and remove idle or oversized capacity. Infrastructure management should continuously connect operational requirements with financial efficiency.",
      },
      {
        icon: "workflow",
        title: "Lifecycle Automation",
        description:
          "Standardize provisioning, modification, patching and retirement through repeatable workflows. Automation reduces manual variation and provides traceable changes that are easier to review and recover.",
      },
      {
        icon: "gauge",
        title: "Configuration Health",
        description:
          "Compare actual infrastructure state with intended standards and remediate drift before it becomes operational risk. Desired-state management keeps environments predictable even as many teams make changes.",
      },
      ],
    },

    architecture: [
      "Inventory",
      "Provision",
      "Configure",
      "Observe",
      "Remediate",
      "Optimize",
    ],

    capabilities: [
      {
        title: "Resource management",
        description: "Maintain structured resource organization. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Configuration management",
        description: "Control desired infrastructure state. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Patch management",
        description: "Manage operating system and platform updates. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Capacity management",
        description: "Align resources with demand. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Policy enforcement",
        description: "Apply cloud standards consistently. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Lifecycle management",
        description: "Create, modify and retire resources safely. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Understand deployed resources. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cloud inventory",
      },
      {
        step: "02",
        title: "Standardize",
        description: "Define supported configurations. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Platform standards",
      },
      {
        step: "03",
        title: "Automate",
        description: "Provision through repeatable workflows. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Automated infrastructure",
      },
      {
        step: "04",
        title: "Observe",
        description: "Measure health and configuration. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Operational telemetry",
      },
      {
        step: "05",
        title: "Remediate",
        description: "Correct failures and drift. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Stable environment",
      },
      {
        step: "06",
        title: "Optimize",
        description: "Improve cost and performance. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Efficient infrastructure",
      },
    ],

    principles: [
      {
        title: "Infrastructure as code",
        description: "Prefer repeatable definitions over manual provisioning. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Standardization",
        description: "Reduce unnecessary configuration variation. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Policy driven",
        description: "Automate governance wherever possible. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Observable",
        description: "Infrastructure state must be measurable. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Large cloud estates",
        description: "Manage growing numbers of resources consistently. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Platform operations",
        description: "Provide managed foundations to application teams. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cloud governance",
        description: "Improve policy and resource control. This capability is evaluated in the context of Infrastructure Management requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "devops-automation": {
    slug: "devops-automation",
    eyebrow: "Engineering Automation",
    title: "DevOps & Automation",
    accent: "Turn infrastructure delivery into software.",
    description:
      "DevOps integrates software delivery, infrastructure automation, testing, deployment and operations into repeatable engineering workflows.",
    definition:
      "Automation reduces manual variation while pipelines create controlled paths from code changes to production environments.",
    question:
      "How can teams ship infrastructure and software safely and repeatedly?",
    icon: "git-branch",

    knowledge: {
      eyebrow: "02 / DELIVERY KNOWLEDGE",
      heading: "Delivery becomes",
      accent: "an engineering system.",
      intro:
        "DevOps and automation connect code, infrastructure, testing, security and operations through repeatable delivery workflows. The goal is not automation for its own sake, but faster feedback and safer, more predictable change.",
      context:
        "For DevOps & Automation, HYI.AI can structure the path from source control to production so changes are versioned, validated, policy-checked, deployed consistently and measured after release.",
      pillars: [
      {
        icon: "activity",
        title: "Fast Feedback",
        description:
          "Run automated validation early enough that developers learn about quality, security and integration problems while changes are still small. Short feedback loops reduce expensive late-stage rework.",
      },
      {
        icon: "shield-check",
        title: "DevSecOps Controls",
        description:
          "Embed security scanning, policy checks and approval requirements into delivery workflows. Controls become repeatable parts of engineering instead of manual gates that appear only near production.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Engineering Efficiency",
        description:
          "Reduce repetitive manual work and environment inconsistency so engineering effort can focus on product and platform improvements. Standard pipelines also reduce the operational cost of supporting unique delivery processes.",
      },
      {
        icon: "workflow",
        title: "Pipeline Automation",
        description:
          "Create controlled paths for build, test, release and deployment across environments. Pipelines provide traceability and make the same validated process reusable across teams and services.",
      },
      {
        icon: "gauge",
        title: "Release Reliability",
        description:
          "Use smaller changes, progressive delivery, observability and rollback mechanisms to reduce release risk. Deployment success is measured by production behavior, not only by whether a pipeline completed.",
      },
      ],
    },

    architecture: [
      "Code",
      "Build",
      "Test",
      "Security",
      "Deploy",
      "Observe",
    ],

    capabilities: [
      {
        title: "CI/CD",
        description: "Automate integration, validation and deployment. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Infrastructure as code",
        description: "Manage infrastructure through versioned definitions. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Automated testing",
        description: "Validate changes before production. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Release engineering",
        description: "Control how software progresses between environments. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Policy automation",
        description: "Apply engineering standards in delivery workflows. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Operational automation",
        description: "Automate repetitive operational actions. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Commit",
        description: "Capture changes in version control. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Versioned change",
      },
      {
        step: "02",
        title: "Build",
        description: "Produce deployable artifacts. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Build artifact",
      },
      {
        step: "03",
        title: "Test",
        description: "Validate quality and behavior. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Validated artifact",
      },
      {
        step: "04",
        title: "Scan",
        description: "Apply security and policy checks. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Approved release",
      },
      {
        step: "05",
        title: "Deploy",
        description: "Release through controlled automation. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Production change",
      },
      {
        step: "06",
        title: "Observe",
        description: "Measure the result of the change. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Operational feedback",
      },
    ],

    principles: [
      {
        title: "Everything versioned",
        description: "Code and infrastructure changes should be traceable. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Automate repetition",
        description: "Reduce error-prone manual processes. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Fast feedback",
        description: "Detect problems early in the delivery lifecycle. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Small changes",
        description: "Smaller releases reduce change complexity. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Software delivery",
        description: "Standardize application release pipelines. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Platform engineering",
        description: "Automate infrastructure delivery. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Compliance automation",
        description: "Embed controls into pipelines. This capability is evaluated in the context of Devops Automation requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  containerization: {
    slug: "containerization",
    eyebrow: "Application Packaging",
    title: "Containerization",
    accent: "Package applications with their runtime.",
    description:
      "Containers package application code and runtime dependencies into portable units that can be deployed consistently across environments.",
    definition:
      "Containerization separates application packaging from the underlying host while enabling repeatable deployment and efficient workload isolation.",
    question:
      "How can an application run consistently across environments?",
    icon: "container",

    knowledge: {
      eyebrow: "02 / CONTAINER KNOWLEDGE",
      heading: "Package once.",
      accent: "Run consistently.",
      intro:
        "Containerization packages application code with runtime dependencies into reproducible units. The value comes from predictable builds, portable deployment and clear runtime boundaries, not simply placing existing software inside an image.",
      context:
        "For Containerization, HYI.AI can evaluate image design, registries, runtime security, networking, persistent state and observability so container adoption improves consistency without creating a new layer of unmanaged complexity.",
      pillars: [
      {
        icon: "activity",
        title: "Runtime Observability",
        description:
          "Collect application and container telemetry to understand health, resource consumption and failures. Container platforms are dynamic, making centralized logs, metrics and traces essential for production support.",
      },
      {
        icon: "shield-check",
        title: "Runtime Security",
        description:
          "Minimize privileges, control image provenance, scan dependencies and restrict unnecessary access. Containers improve packaging consistency but still require strong security controls across build and runtime stages.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Resource Efficiency",
        description:
          "Use container resource boundaries and scheduling characteristics to improve infrastructure utilization while protecting workload requirements. Efficiency should not come at the cost of unstable performance.",
      },
      {
        icon: "workflow",
        title: "Image Lifecycle",
        description:
          "Build, scan, version, publish and promote immutable images through controlled workflows. A reliable image lifecycle ensures that production artifacts are traceable back to reviewed source and build inputs.",
      },
      {
        icon: "gauge",
        title: "Portability & Scale",
        description:
          "Separate application packaging from host-specific configuration so services can move consistently between environments. Standard runtime contracts make scaling and platform migration easier to manage.",
      },
      ],
    },

    architecture: [
      "Source",
      "Image Build",
      "Registry",
      "Runtime",
      "Service",
      "Observe",
    ],

    capabilities: [
      {
        title: "Container strategy",
        description: "Identify workloads suitable for containers. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Image engineering",
        description: "Build minimal and reproducible images. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Registry architecture",
        description: "Securely store and distribute images. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Runtime security",
        description: "Control container privileges and behavior. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Networking",
        description: "Design service connectivity. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Observability",
        description: "Collect container and application telemetry. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Package",
        description: "Define application runtime. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Container definition",
      },
      {
        step: "02",
        title: "Build",
        description: "Create immutable image. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Container image",
      },
      {
        step: "03",
        title: "Scan",
        description: "Evaluate image security. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Validated image",
      },
      {
        step: "04",
        title: "Publish",
        description: "Store image in registry. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Versioned image",
      },
      {
        step: "05",
        title: "Deploy",
        description: "Run containerized workload. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Running service",
      },
      {
        step: "06",
        title: "Observe",
        description: "Measure runtime health. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Runtime visibility",
      },
    ],

    principles: [
      {
        title: "Immutable artifacts",
        description: "Rebuild images instead of modifying running instances. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Minimal images",
        description: "Reduce unnecessary dependencies. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Externalized state",
        description: "Keep persistent state outside ephemeral containers. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Runtime isolation",
        description: "Limit privileges and resource access. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Application modernization",
        description: "Package existing services for modern deployment. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Microservices",
        description: "Deploy independently managed application components. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Portable workloads",
        description: "Improve consistency across environments. This capability is evaluated in the context of Containerization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "kubernetes-services": {
    slug: "kubernetes-services",
    eyebrow: "Container Orchestration",
    title: "Kubernetes Services",
    accent: "Orchestrate distributed container workloads.",
    description:
      "Kubernetes coordinates container scheduling, service discovery, scaling, configuration and workload lifecycle across clusters.",
    definition:
      "Kubernetes provides an orchestration control plane, but production platforms also require networking, security, observability, policy and operational engineering.",
    question:
      "How should containerized workloads be operated at scale?",
    icon: "boxes",

    knowledge: {
      eyebrow: "02 / KUBERNETES KNOWLEDGE",
      heading: "Orchestration needs",
      accent: "platform engineering.",
      intro:
        "Kubernetes provides scheduling and workload orchestration, but production platforms also require networking, identity, policy, observability, deployment standards and operational ownership. The control plane is only one part of the platform.",
      context:
        "For Kubernetes Services, HYI.AI can design cluster boundaries, workload patterns, service networking, autoscaling, security and platform operations as a coherent environment for application teams.",
      pillars: [
      {
        icon: "activity",
        title: "Platform Observability",
        description:
          "Monitor cluster components, workloads, service dependencies and resource pressure together. Teams need visibility from infrastructure through application behavior to diagnose distributed failures efficiently.",
      },
      {
        icon: "shield-check",
        title: "Workload Security",
        description:
          "Control service accounts, secrets, network policy, admission rules and workload privileges. Kubernetes flexibility requires clear guardrails so application teams can deploy safely without unrestricted platform access.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Cluster Efficiency",
        description:
          "Balance requested resources, autoscaling and workload placement to improve utilization. Capacity management should reduce waste while preserving headroom for failure, scaling events and critical services.",
      },
      {
        icon: "workflow",
        title: "Declarative Delivery",
        description:
          "Represent desired application and platform state through version-controlled configuration. Declarative workflows make changes reviewable, repeatable and easier to reconcile when actual cluster state drifts.",
      },
      {
        icon: "gauge",
        title: "Elastic Operations",
        description:
          "Coordinate horizontal and vertical scaling, scheduling and health management around workload demand. Elasticity works best when application behavior and resource requirements are measurable and well defined.",
      },
      ],
    },

    architecture: [
      "Ingress",
      "Service",
      "Pods",
      "Config",
      "Storage",
      "Observability",
    ],

    capabilities: [
      {
        title: "Cluster architecture",
        description: "Design workload and cluster boundaries. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Workload deployment",
        description: "Manage declarative application releases. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Autoscaling",
        description: "Adjust workload capacity according to demand. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Service networking",
        description: "Manage service discovery and traffic. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Policy & security",
        description: "Control workload privileges and cluster behavior. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cluster observability",
        description: "Monitor workloads and platform health. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Design",
        description: "Define cluster requirements. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Cluster architecture",
      },
      {
        step: "02",
        title: "Provision",
        description: "Create platform foundation. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Kubernetes cluster",
      },
      {
        step: "03",
        title: "Secure",
        description: "Configure access and policy. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Governed cluster",
      },
      {
        step: "04",
        title: "Deploy",
        description: "Release workloads declaratively. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Running workloads",
      },
      {
        step: "05",
        title: "Scale",
        description: "Respond to workload demand. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Elastic platform",
      },
      {
        step: "06",
        title: "Operate",
        description: "Observe and maintain cluster health. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Production platform",
      },
    ],

    principles: [
      {
        title: "Declarative",
        description: "Represent desired workload state as configuration. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Self-healing",
        description: "Replace failed workload instances automatically. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Policy controlled",
        description: "Govern what workloads can do. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Observable",
        description: "Monitor platform and application behavior. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Microservice platforms",
        description: "Operate many containerized services. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Platform engineering",
        description: "Create reusable application platforms. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Elastic applications",
        description: "Scale workloads dynamically. This capability is evaluated in the context of Kubernetes Services requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "serverless-computing": {
    slug: "serverless-computing",
    eyebrow: "Event-driven Cloud",
    title: "Serverless Computing",
    accent: "Execute logic without managing servers.",
    description:
      "Serverless platforms execute application logic through managed compute services while the cloud provider manages underlying infrastructure capacity.",
    definition:
      "Serverless is particularly useful for event-driven and variable workloads, but architecture must still account for state, latency, limits, security and observability.",
    question:
      "Which workload components benefit from event-driven managed execution?",
    icon: "workflow",

    knowledge: {
      eyebrow: "02 / SERVERLESS KNOWLEDGE",
      heading: "Events become",
      accent: "execution.",
      intro:
        "Serverless computing shifts infrastructure capacity management to managed services and lets applications respond directly to events. Architecture still needs deliberate decisions about state, permissions, latency, concurrency, failure handling and observability.",
      context:
        "For Serverless Computing, HYI.AI can model triggers, functions, workflows, managed integrations and persistent state so event-driven systems remain secure, traceable and resilient as execution scales dynamically.",
      pillars: [
      {
        icon: "activity",
        title: "Distributed Observability",
        description:
          "Trace events across functions, queues, APIs and managed services. Serverless execution is highly distributed, so correlation identifiers, structured logs and metrics are important for understanding complete request behavior.",
      },
      {
        icon: "shield-check",
        title: "Function Security",
        description:
          "Give each function only the permissions and network access required for its responsibility. Fine-grained identities reduce blast radius and make authorization easier to reason about across event-driven workflows.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Execution Economics",
        description:
          "Understand invocation, duration, data transfer and downstream managed-service costs. Serverless can be efficient for variable demand, but architecture should evaluate complete workflow economics rather than function price alone.",
      },
      {
        icon: "workflow",
        title: "Event Orchestration",
        description:
          "Define event contracts, retries, idempotency, dead-letter handling and multi-step coordination. Reliable event architecture assumes that failures, duplicate delivery and delayed processing can occur.",
      },
      {
        icon: "gauge",
        title: "Elastic Execution",
        description:
          "Allow managed compute to respond to changing event volume while protecting downstream dependencies from uncontrolled concurrency. Scaling policies should consider the capacity of databases, APIs and external systems.",
      },
      ],
    },

    architecture: [
      "Event",
      "Trigger",
      "Function",
      "Service",
      "Data",
      "Telemetry",
    ],

    capabilities: [
      {
        title: "Event architecture",
        description: "Model asynchronous events and triggers. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Function engineering",
        description: "Build focused stateless execution units. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "API integration",
        description: "Expose serverless logic through managed interfaces. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Workflow orchestration",
        description: "Coordinate multi-step serverless processes. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Security",
        description: "Control function identities and permissions. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Observability",
        description: "Trace distributed serverless execution. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Event",
        description: "Identify workload trigger. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Event contract",
      },
      {
        step: "02",
        title: "Invoke",
        description: "Trigger managed compute. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Execution",
      },
      {
        step: "03",
        title: "Process",
        description: "Execute business logic. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Processed event",
      },
      {
        step: "04",
        title: "Integrate",
        description: "Call downstream services. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Workflow result",
      },
      {
        step: "05",
        title: "Persist",
        description: "Store required state. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Durable data",
      },
      {
        step: "06",
        title: "Observe",
        description: "Measure distributed execution. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Execution telemetry",
      },
    ],

    principles: [
      {
        title: "Event driven",
        description: "Design around meaningful triggers. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Stateless compute",
        description: "Keep execution units independent where practical. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Managed services",
        description: "Reduce infrastructure management. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cost awareness",
        description: "Understand execution and downstream service pricing. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Event processing",
        description: "Respond to files, queues and application events. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "APIs",
        description: "Build variable-demand backend services. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Automation",
        description: "Run operational workflows on demand. This capability is evaluated in the context of Serverless Computing requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "disaster-recovery": {
    slug: "disaster-recovery",
    eyebrow: "Cloud Resilience",
    title: "Disaster Recovery",
    accent: "Design recovery before failure happens.",
    description:
      "Disaster recovery prepares workloads to restore service and data after major failures, regional outages or destructive incidents.",
    definition:
      "Recovery architecture begins with business recovery objectives and then determines replication, backup, failover and operational procedures.",
    question:
      "How quickly and to what point must the workload recover?",
    icon: "refresh-ccw",

    knowledge: {
      eyebrow: "02 / RESILIENCE KNOWLEDGE",
      heading: "Recovery is",
      accent: "designed before failure.",
      intro:
        "Disaster recovery prepares applications, infrastructure and data to restore service after major failures, regional outages or destructive incidents. Recovery capability begins with business requirements and is proven through repeatable testing.",
      context:
        "For Disaster Recovery, HYI.AI can translate workload criticality into recovery objectives, protection architecture, failover procedures and validation exercises so teams understand not only what is backed up, but how complete service will actually be restored.",
      pillars: [
      {
        icon: "activity",
        title: "Recovery Readiness",
        description:
          "Evaluate whether applications, data, dependencies and operational teams can meet defined recovery objectives. Readiness includes technology, documentation, access, communication and the ability to execute under incident conditions.",
      },
      {
        icon: "shield-check",
        title: "Protected Recovery",
        description:
          "Keep recovery copies appropriately isolated, encrypted and access-controlled so the same destructive event does not compromise both production and backup environments. Protection must include the recovery path itself.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Resilience Investment",
        description:
          "Align recovery architecture with business impact and criticality. Not every workload needs identical standby capacity, so investment should follow required recovery speed, acceptable data loss and service importance.",
      },
      {
        icon: "workflow",
        title: "Failover Operations",
        description:
          "Coordinate restoration, replication, infrastructure activation, application startup, networking and validation in a documented sequence. Automation reduces manual dependencies and improves consistency during high-pressure recovery.",
      },
      {
        icon: "gauge",
        title: "Recovery Objectives",
        description:
          "Use RTO and RPO to define measurable expectations for service restoration and data recovery. Regular exercises determine whether the implemented architecture can actually achieve those targets.",
      },
      ],
    },

    architecture: [
      "Primary",
      "Replication",
      "Backup",
      "Standby",
      "Failover",
      "Recovery",
    ],

    capabilities: [
      {
        title: "Business impact analysis",
        description: "Understand critical services and outage impact. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "RTO/RPO design",
        description: "Define recovery time and recovery point requirements. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Backup architecture",
        description: "Protect recoverable copies of important data. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Replication",
        description: "Maintain recoverable workload state. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Failover engineering",
        description: "Design controlled transition to recovery environments. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Recovery testing",
        description: "Regularly validate procedures and assumptions. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Classify",
        description: "Determine workload criticality. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Criticality tier",
      },
      {
        step: "02",
        title: "Define objectives",
        description: "Establish RTO and RPO. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Recovery targets",
      },
      {
        step: "03",
        title: "Protect",
        description: "Implement backup and replication. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Protected workload",
      },
      {
        step: "04",
        title: "Prepare",
        description: "Create recovery procedures. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Recovery runbook",
      },
      {
        step: "05",
        title: "Test",
        description: "Exercise recovery scenarios. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Validated recovery",
      },
      {
        step: "06",
        title: "Improve",
        description: "Update plans from test findings. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Recovery maturity",
      },
    ],

    principles: [
      {
        title: "Business driven",
        description: "Recovery objectives originate from business requirements. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Automated where possible",
        description: "Reduce manual recovery dependencies. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Regularly tested",
        description: "Untested recovery plans cannot be assumed to work. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Isolated protection",
        description: "Protect backups from workload failures and destructive events. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Mission-critical workloads",
        description: "Prepare important services for major failure. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Data protection",
        description: "Recover data after corruption or destructive incidents. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Regional resilience",
        description: "Recover workloads after regional disruption. This capability is evaluated in the context of Disaster Recovery requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },

  "cloud-monitoring-optimization": {
    slug: "cloud-monitoring-optimization",
    eyebrow: "Cloud Observability",
    title: "Cloud Monitoring & Optimization",
    accent: "Observe everything. Improve continuously.",
    description:
      "Cloud monitoring collects telemetry about infrastructure and applications, while optimization converts that visibility into improvements in reliability, performance and cost.",
    definition:
      "Metrics, logs, traces and events create operational visibility. Optimization uses that evidence to improve workload behavior.",
    question:
      "What is happening inside the cloud environment and what should improve?",
    icon: "activity",

    knowledge: {
      eyebrow: "02 / OBSERVABILITY KNOWLEDGE",
      heading: "Measure reality.",
      accent: "Improve continuously.",
      intro:
        "Cloud monitoring turns infrastructure and application behavior into measurable signals. Optimization uses those signals to improve reliability, performance and cost based on evidence instead of assumptions.",
      context:
        "For Cloud Monitoring & Optimization, HYI.AI can connect metrics, logs, traces and events with service objectives, anomaly detection and improvement workflows so teams understand both what is happening and what should change next.",
      pillars: [
      {
        icon: "activity",
        title: "Service Health",
        description:
          "Measure application behavior, infrastructure health and user-impacting indicators together. Monitoring becomes more useful when teams can connect technical signals to the services and experiences the business actually depends on.",
      },
      {
        icon: "shield-check",
        title: "Operational Risk",
        description:
          "Detect abnormal behavior, configuration problems and reliability conditions before they become larger incidents. Observability provides the evidence required to prioritize investigation and remediation.",
      },
      {
        icon: "circle-dollar-sign",
        title: "Cost Optimization",
        description:
          "Correlate resource consumption with utilization, demand and business ownership. Evidence-based optimization helps identify idle capacity, oversized resources and architectural patterns that create unnecessary recurring cost.",
      },
      {
        icon: "workflow",
        title: "Incident Intelligence",
        description:
          "Correlate metrics, logs, traces and events across distributed services to shorten investigation time. Shared context helps teams move from an alert to likely cause and remediation without searching disconnected tools.",
      },
      {
        icon: "gauge",
        title: "Performance Optimization",
        description:
          "Use latency, throughput, saturation and capacity evidence to identify bottlenecks and scaling needs. Continuous measurement allows architecture and resource allocation to evolve with real workload behavior.",
      },
      ],
    },

    architecture: [
      "Metrics",
      "Logs",
      "Traces",
      "Correlation",
      "Alert",
      "Optimize",
    ],

    capabilities: [
      {
        title: "Metrics",
        description: "Measure resource and application behavior. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Logging",
        description: "Collect structured operational events. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Tracing",
        description: "Follow requests across distributed services. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Alerting",
        description: "Detect conditions requiring attention. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Capacity optimization",
        description: "Align resource allocation with demand. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Cost optimization",
        description: "Identify inefficient resource consumption. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Instrument",
        description: "Expose workload telemetry. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Telemetry sources",
      },
      {
        step: "02",
        title: "Collect",
        description: "Centralize metrics, logs and traces. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Observability data",
      },
      {
        step: "03",
        title: "Correlate",
        description: "Connect signals across services. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Operational context",
      },
      {
        step: "04",
        title: "Detect",
        description: "Identify abnormal behavior. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Actionable signal",
      },
      {
        step: "05",
        title: "Respond",
        description: "Investigate and remediate. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Resolved condition",
      },
      {
        step: "06",
        title: "Optimize",
        description: "Improve architecture using evidence. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
        output: "Continuous improvement",
      },
    ],

    principles: [
      {
        title: "Measure user impact",
        description: "Infrastructure health alone is insufficient. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Correlate signals",
        description: "Metrics, logs and traces provide different context. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Actionable alerts",
        description: "Alerts should correspond to meaningful conditions. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Continuous improvement",
        description: "Operational evidence should inform architecture changes. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],

    useCases: [
      {
        title: "Production operations",
        description: "Understand application and infrastructure health. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "Performance optimization",
        description: "Identify bottlenecks and capacity issues. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
      {
        title: "FinOps",
        description: "Connect consumption evidence with cost optimization. This capability is evaluated in the context of Cloud Monitoring Optimization requirements, operational dependencies, security expectations and long-term supportability so the design remains practical in production.",
      },
    ],
  },
};