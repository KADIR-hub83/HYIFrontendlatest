export type ManagedSecurityServiceKey =
  | "managed-security-services"
  | "managed-detection-response"
  | "managed-endpoint-security"
  | "managed-cloud-security"
  | "managed-vulnerability-management"
  | "security-monitoring-services"
  | "security-incident-management"
  | "managed-firewall-services"
  | "managed-network-security"
  | "managed-siem-services"
  | "managed-identity-security"
  | "24-7-security-monitoring";

export type SecurityIconName =
  | "shield"
  | "activity"
  | "eye"
  | "network"
  | "cloud"
  | "database"
  | "workflow"
  | "cpu"
  | "server"
  | "radio"
  | "settings"
  | "gauge";

export type ManagedSecurityService = {
  slug: ManagedSecurityServiceKey;

  eyebrow: string;
  title: string;
  accent: string;
  description: string;

  heroStatement: string;
  heroSupport: string;

  status: {
    label: string;
    value: string;
  }[];

  overview: {
    eyebrow: string;
    title: string;
    accent: string;
    paragraphs: string[];
  };

  capabilities: {
    icon: SecurityIconName;
    title: string;
    description: string;
  }[];

  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    layers: {
      title: string;
      description: string;
    }[];
  };

  intelligence: {
    eyebrow: string;
    title: string;
    description: string;
    signals: string[];
  };

  operations: {
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

  closing: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
  };
};

export const managedSecurityServices: Record<
  ManagedSecurityServiceKey,
  ManagedSecurityService
> = {
  "managed-security-services": {
    slug: "managed-security-services",

    eyebrow: "MANAGED SECURITY SERVICES",

    title: "Security operations",
    accent: "that never switch off.",

    description:
      "HYI.AI Managed Security Services help organizations continuously observe, analyze and respond to security activity across identities, endpoints, networks, applications and cloud environments.",

    heroStatement:
      "Transform fragmented security tools into a coordinated security operating model.",

    heroSupport:
      "We combine security monitoring, detection engineering, incident response, vulnerability intelligence and operational workflows to help security teams maintain visibility across complex digital environments.",

    status: [
      { label: "Security posture", value: "MONITORED" },
      { label: "Detection", value: "ACTIVE" },
      { label: "Response", value: "READY" },
    ],

    overview: {
      eyebrow: "SECURITY OPERATING MODEL",

      title: "Security is not a product.",
      accent: "It is a continuous operation.",

      paragraphs: [
        "Modern organizations operate across cloud platforms, distributed applications, remote endpoints, APIs, identities and third-party services. Security teams therefore need more than isolated security products.",

        "Managed security creates an operational layer that continuously connects telemetry, detection logic, investigation workflows and response actions.",

        "HYI.AI approaches managed security as an integrated system where security data becomes actionable intelligence and intelligence becomes coordinated response.",
      ],
    },

    capabilities: [
      {
        icon: "eye",
        title: "Continuous Security Visibility",
        description:
          "Aggregate security signals across endpoints, identities, applications, cloud platforms and network infrastructure to create a unified operational view.",
      },
      {
        icon: "activity",
        title: "Threat Detection",
        description:
          "Analyze security events, behavioral patterns and operational anomalies to surface activity that requires investigation.",
      },
      {
        icon: "workflow",
        title: "Incident Coordination",
        description:
          "Structure investigation, escalation, containment and remediation activities around repeatable response workflows.",
      },
      {
        icon: "shield",
        title: "Security Controls",
        description:
          "Maintain operational oversight of defensive controls across critical technology environments and business systems.",
      },
      {
        icon: "database",
        title: "Security Intelligence",
        description:
          "Transform raw telemetry into contextual security information that supports prioritization and informed decision-making.",
      },
      {
        icon: "network",
        title: "Connected Defense",
        description:
          "Connect security tools and operational teams so detection, investigation and response can function as one coordinated system.",
      },
    ],

    architecture: {
      eyebrow: "DEFENSE ARCHITECTURE",

      title: "One security layer across the digital estate.",

      description:
        "A managed security architecture connects telemetry sources, detection logic, security analytics and response workflows into a continuous operating loop.",

      layers: [
        {
          title: "Digital Environment",
          description:
            "Endpoints, cloud workloads, identities, applications, APIs and infrastructure.",
        },
        {
          title: "Security Telemetry",
          description:
            "Logs, events, authentication activity, network signals and workload telemetry.",
        },
        {
          title: "Detection Layer",
          description:
            "Rules, analytics, behavioral indicators and threat intelligence.",
        },
        {
          title: "Investigation",
          description:
            "Context enrichment, correlation and analyst investigation.",
        },
        {
          title: "Response",
          description:
            "Containment, remediation, escalation and recovery workflows.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Detection tuning, operational learning and security posture improvement.",
        },
      ],
    },

    intelligence: {
      eyebrow: "SECURITY INTELLIGENCE",

      title: "Turn security noise into decisions.",

      description:
        "Security operations generate large volumes of telemetry. The objective is not to collect more alerts—it is to identify meaningful signals, establish context and guide the right operational response.",

      signals: [
        "Endpoint activity",
        "Authentication events",
        "Network telemetry",
        "Cloud activity",
        "Application events",
        "Threat intelligence",
      ],
    },

    operations: [
      {
        title: "Observe",
        description:
          "Maintain continuous visibility across protected technology environments.",
      },
      {
        title: "Detect",
        description:
          "Identify suspicious behavior, policy violations and abnormal activity.",
      },
      {
        title: "Investigate",
        description:
          "Correlate signals and establish the context surrounding potential threats.",
      },
      {
        title: "Respond",
        description:
          "Coordinate containment, remediation and escalation actions.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Understand business systems, security controls, critical assets and operational risks.",
        output: "Security context",
      },
      {
        step: "02",
        title: "Connect",
        description:
          "Integrate security telemetry across endpoints, networks, identities and cloud platforms.",
        output: "Connected telemetry",
      },
      {
        step: "03",
        title: "Detect",
        description:
          "Establish detection logic around relevant attack patterns and operational risks.",
        output: "Detection coverage",
      },
      {
        step: "04",
        title: "Investigate",
        description:
          "Enrich and correlate security events to understand potential impact.",
        output: "Incident context",
      },
      {
        step: "05",
        title: "Respond",
        description:
          "Coordinate containment, escalation and remediation workflows.",
        output: "Response action",
      },
      {
        step: "06",
        title: "Improve",
        description:
          "Use operational learning to continuously strengthen detection and response.",
        output: "Security improvement",
      },
    ],

    principles: [
      {
        title: "Visibility before automation",
        description:
          "Reliable security automation begins with trustworthy telemetry and operational context.",
      },
      {
        title: "Context over alert volume",
        description:
          "Security teams need meaningful incidents rather than endless disconnected alerts.",
      },
      {
        title: "Human controlled response",
        description:
          "Automation should accelerate security operations while maintaining appropriate oversight.",
      },
      {
        title: "Continuous improvement",
        description:
          "Every investigation should improve future detection and response capabilities.",
      },
    ],

    useCases: [
      {
        title: "Distributed enterprise security",
        description:
          "Coordinate monitoring across offices, remote endpoints, cloud platforms and business applications.",
      },
      {
        title: "Cloud-first organizations",
        description:
          "Establish continuous visibility across dynamic cloud workloads and identities.",
      },
      {
        title: "Security operations modernization",
        description:
          "Replace fragmented security processes with connected operational workflows.",
      },
      {
        title: "Growing digital environments",
        description:
          "Scale security visibility as infrastructure, applications and user populations expand.",
      },
    ],

    closing: {
      eyebrow: "MANAGED DEFENSE",
      title: "Security that operates",
      accent: "with your business.",
      description:
        "Build a connected managed security capability designed around continuous visibility, structured detection and coordinated response.",
    },
  },

  // ==============================================================
  // MDR
  // ==============================================================

  "managed-detection-response": {
    slug: "managed-detection-response",

    eyebrow: "MANAGED DETECTION & RESPONSE",

    title: "Detect the signal.",
    accent: "Coordinate the response.",

    description:
      "Managed Detection & Response connects security telemetry, detection engineering, investigation and response into a continuous operational capability.",

    heroStatement:
      "Move from isolated security alerts to coordinated threat investigation.",

    heroSupport:
      "HYI.AI MDR is designed around the complete detection lifecycle: collecting signals, correlating activity, investigating suspicious behavior and coordinating appropriate response actions.",

    status: [
      { label: "Telemetry", value: "CONNECTED" },
      { label: "Detection", value: "ACTIVE" },
      { label: "Investigation", value: "READY" },
    ],

    overview: {
      eyebrow: "DETECTION ENGINEERING",
      title: "Alerts are not incidents.",
      accent: "Context makes the difference.",

      paragraphs: [
        "Security tools generate alerts independently, but attackers operate across systems. Effective detection therefore requires correlation across multiple sources.",

        "MDR creates a structured operational layer between raw security telemetry and incident response.",

        "Signals are enriched with identity, asset, behavioral and threat context before response decisions are made.",
      ],
    },

    capabilities: [
      {
        icon: "radio",
        title: "Signal Collection",
        description:
          "Connect endpoint, identity, network, application and cloud telemetry into the detection environment.",
      },
      {
        icon: "activity",
        title: "Detection Engineering",
        description:
          "Develop detection logic around relevant behaviors, attack techniques and organizational risks.",
      },
      {
        icon: "database",
        title: "Event Correlation",
        description:
          "Connect related activity across security systems to establish meaningful incident context.",
      },
      {
        icon: "eye",
        title: "Threat Investigation",
        description:
          "Analyze suspicious activity and determine affected assets, identities and potential impact.",
      },
      {
        icon: "workflow",
        title: "Response Coordination",
        description:
          "Connect investigation findings with containment, escalation and remediation workflows.",
      },
      {
        icon: "gauge",
        title: "Detection Optimization",
        description:
          "Continuously refine detection logic using operational learning and investigation outcomes.",
      },
    ],

    architecture: {
      eyebrow: "MDR ARCHITECTURE",
      title: "From telemetry to response.",
      description:
        "The MDR operating model connects distributed security signals through analytics and investigation into controlled response workflows.",

      layers: [
        {
          title: "Telemetry",
          description: "Endpoint, identity, network and cloud events.",
        },
        {
          title: "Normalization",
          description: "Structure and enrich incoming security data.",
        },
        {
          title: "Detection",
          description: "Identify suspicious behaviors and patterns.",
        },
        {
          title: "Correlation",
          description: "Connect related signals across systems.",
        },
        {
          title: "Investigation",
          description: "Establish scope, context and potential impact.",
        },
        {
          title: "Response",
          description: "Coordinate containment and remediation.",
        },
      ],
    },

    intelligence: {
      eyebrow: "THREAT SIGNALS",
      title: "See attacks as connected behavior.",
      description:
        "Threat activity rarely exists as a single event. MDR connects behaviors across systems to build a clearer picture of suspicious activity.",

      signals: [
        "Suspicious login",
        "Endpoint execution",
        "Privilege changes",
        "Network anomalies",
        "Cloud activity",
        "Threat indicators",
      ],
    },

    operations: [
      {
        title: "Collect",
        description: "Ingest security signals from protected environments.",
      },
      {
        title: "Correlate",
        description: "Connect related events across multiple systems.",
      },
      {
        title: "Investigate",
        description: "Determine whether activity represents a real threat.",
      },
      {
        title: "Respond",
        description: "Coordinate appropriate containment and remediation.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Integrate",
        description: "Connect relevant telemetry sources.",
        output: "Signal coverage",
      },
      {
        step: "02",
        title: "Baseline",
        description: "Understand normal operational behavior.",
        output: "Behavior context",
      },
      {
        step: "03",
        title: "Detect",
        description: "Identify suspicious activity.",
        output: "Security signal",
      },
      {
        step: "04",
        title: "Correlate",
        description: "Connect related events.",
        output: "Incident context",
      },
      {
        step: "05",
        title: "Investigate",
        description: "Determine scope and potential impact.",
        output: "Assessment",
      },
      {
        step: "06",
        title: "Respond",
        description: "Coordinate security action.",
        output: "Response",
      },
    ],

    principles: [
      {
        title: "Behavior over isolated events",
        description:
          "Connected activity provides stronger security context than individual alerts.",
      },
      {
        title: "Evidence-led investigation",
        description:
          "Response decisions should be supported by observable security evidence.",
      },
      {
        title: "Prioritized response",
        description:
          "Investigation and response should focus on meaningful business risk.",
      },
      {
        title: "Detection learning",
        description:
          "Investigation outcomes should continuously improve future detection.",
      },
    ],

    useCases: [
      {
        title: "Account compromise",
        description:
          "Correlate identity and endpoint activity surrounding suspicious authentication.",
      },
      {
        title: "Malware investigation",
        description:
          "Connect execution, network and endpoint signals during investigation.",
      },
      {
        title: "Cloud threat detection",
        description:
          "Identify suspicious activity across workloads, identities and cloud control planes.",
      },
      {
        title: "Lateral movement",
        description:
          "Correlate authentication and network behavior across enterprise systems.",
      },
    ],

    closing: {
      eyebrow: "DETECTION → RESPONSE",
      title: "See threats earlier.",
      accent: "Respond with context.",
      description:
        "Build a detection and response capability that connects security signals with structured investigation and coordinated action.",
    },
  },

  // ==============================================================
  // ENDPOINT
  // ==============================================================

  "managed-endpoint-security": {
    slug: "managed-endpoint-security",

    eyebrow: "MANAGED ENDPOINT SECURITY",
    title: "Every endpoint is",
    accent: "part of the security perimeter.",

    description:
      "Protect laptops, workstations, servers and distributed endpoint environments through continuous visibility, security policy and operational monitoring.",

    heroStatement:
      "Create continuous endpoint visibility across distributed digital workforces.",

    heroSupport:
      "HYI.AI Managed Endpoint Security connects endpoint telemetry, security controls, behavioral signals and response workflows into one operational layer.",

    status: [
      { label: "Endpoints", value: "VISIBLE" },
      { label: "Policy", value: "ENFORCED" },
      { label: "Telemetry", value: "STREAMING" },
    ],

    overview: {
      eyebrow: "ENDPOINT DEFENSE",
      title: "The workforce moved.",
      accent: "The security perimeter moved with it.",

      paragraphs: [
        "Enterprise endpoints now operate across offices, homes, client environments and public networks.",

        "Endpoint security therefore requires continuous visibility rather than relying exclusively on traditional network boundaries.",

        "Managed endpoint security combines device posture, telemetry, policy enforcement and investigation workflows.",
      ],
    },

    capabilities: [
      {
        icon: "cpu",
        title: "Endpoint Visibility",
        description:
          "Maintain operational visibility across managed laptops, workstations and servers.",
      },
      {
        icon: "shield",
        title: "Endpoint Protection",
        description:
          "Coordinate preventive security controls and endpoint protection policies.",
      },
      {
        icon: "activity",
        title: "Behavior Monitoring",
        description:
          "Observe endpoint activity for abnormal execution and suspicious behavioral patterns.",
      },
      {
        icon: "eye",
        title: "Endpoint Investigation",
        description:
          "Investigate device activity using endpoint telemetry and contextual security data.",
      },
      {
        icon: "workflow",
        title: "Response Workflows",
        description:
          "Coordinate isolation, investigation and remediation when endpoint risk is identified.",
      },
      {
        icon: "gauge",
        title: "Posture Management",
        description:
          "Continuously review endpoint security coverage and operational posture.",
      },
    ],

    architecture: {
      eyebrow: "ENDPOINT ARCHITECTURE",
      title: "Protect devices wherever work happens.",
      description:
        "Endpoint security connects devices with telemetry, policy, analytics and response capabilities.",

      layers: [
        {
          title: "Devices",
          description: "Laptops, desktops, servers and workloads.",
        },
        {
          title: "Agent Layer",
          description: "Endpoint telemetry and security control.",
        },
        {
          title: "Policy",
          description: "Protection and configuration policies.",
        },
        {
          title: "Analytics",
          description: "Behavior and endpoint activity analysis.",
        },
        {
          title: "Investigation",
          description: "Endpoint event context and analysis.",
        },
        {
          title: "Response",
          description: "Isolation and remediation workflows.",
        },
      ],
    },

    intelligence: {
      eyebrow: "ENDPOINT SIGNALS",
      title: "Understand what devices are doing.",
      description:
        "Endpoint telemetry provides visibility into processes, execution patterns and system behavior that can support threat investigation.",

      signals: [
        "Process activity",
        "File activity",
        "User sessions",
        "Network connections",
        "Configuration",
        "Security events",
      ],
    },

    operations: [
      {
        title: "Discover",
        description: "Maintain visibility of managed endpoints.",
      },
      {
        title: "Protect",
        description: "Apply endpoint security controls.",
      },
      {
        title: "Observe",
        description: "Monitor endpoint activity.",
      },
      {
        title: "Respond",
        description: "Coordinate remediation when required.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Understand endpoint scope.",
        output: "Asset view",
      },
      {
        step: "02",
        title: "Deploy",
        description: "Establish endpoint security coverage.",
        output: "Protection",
      },
      {
        step: "03",
        title: "Monitor",
        description: "Observe device activity.",
        output: "Telemetry",
      },
      {
        step: "04",
        title: "Detect",
        description: "Identify suspicious behavior.",
        output: "Signal",
      },
      {
        step: "05",
        title: "Investigate",
        description: "Analyze endpoint context.",
        output: "Assessment",
      },
      {
        step: "06",
        title: "Remediate",
        description: "Coordinate corrective action.",
        output: "Recovery",
      },
    ],

    principles: [
      {
        title: "Device visibility",
        description: "Security begins with understanding protected assets.",
      },
      {
        title: "Consistent policy",
        description: "Endpoint controls should operate consistently.",
      },
      {
        title: "Behavioral context",
        description: "Endpoint activity should be evaluated in context.",
      },
      {
        title: "Controlled remediation",
        description: "Response should follow defined operational processes.",
      },
    ],

    useCases: [
      {
        title: "Remote workforce",
        description: "Protect distributed employee endpoints.",
      },
      {
        title: "Server environments",
        description: "Maintain visibility across critical servers.",
      },
      {
        title: "Endpoint investigation",
        description: "Analyze suspicious device behavior.",
      },
      {
        title: "Security posture",
        description: "Maintain endpoint protection coverage.",
      },
    ],

    closing: {
      eyebrow: "ENDPOINT DEFENSE",
      title: "Protect every device.",
      accent: "Understand every signal.",
      description:
        "Build endpoint security around continuous visibility, controlled protection and structured response.",
    },
  },

  // ==============================================================
  // CLOUD
  // ==============================================================

  "managed-cloud-security": {
    slug: "managed-cloud-security",

    eyebrow: "MANAGED CLOUD SECURITY",
    title: "Secure cloud speed",
    accent: "without losing control.",

    description:
      "Continuous security visibility across cloud identities, workloads, configurations, data and control planes.",

    heroStatement:
      "Build security into dynamic cloud environments rather than adding it after deployment.",

    heroSupport:
      "HYI.AI Managed Cloud Security connects cloud posture, identity activity, workload telemetry and security operations across modern cloud environments.",

    status: [
      { label: "Cloud posture", value: "OBSERVED" },
      { label: "Workloads", value: "VISIBLE" },
      { label: "Identity", value: "MONITORED" },
    ],

    overview: {
      eyebrow: "CLOUD DEFENSE",
      title: "Cloud infrastructure changes constantly.",
      accent: "Security has to move at the same speed.",

      paragraphs: [
        "Cloud environments are dynamic systems where workloads, permissions and infrastructure can change continuously.",

        "Managed cloud security establishes visibility across configuration, identity, workload and control-plane activity.",

        "The objective is to connect cloud engineering velocity with continuous security governance.",
      ],
    },

    capabilities: [
      {
        icon: "cloud",
        title: "Cloud Posture Visibility",
        description:
          "Maintain visibility into cloud configurations and security posture.",
      },
      {
        icon: "shield",
        title: "Workload Protection",
        description:
          "Observe security activity around cloud workloads and services.",
      },
      {
        icon: "eye",
        title: "Cloud Monitoring",
        description:
          "Monitor cloud control-plane and workload security events.",
      },
      {
        icon: "network",
        title: "Cloud Network Security",
        description:
          "Review connectivity and network security across cloud environments.",
      },
      {
        icon: "database",
        title: "Data Security Context",
        description:
          "Connect security operations with sensitive data and storage context.",
      },
      {
        icon: "workflow",
        title: "Cloud Response",
        description:
          "Coordinate cloud remediation and security workflows.",
      },
    ],

    architecture: {
      eyebrow: "CLOUD SECURITY ARCHITECTURE",
      title: "Visibility from identity to workload.",
      description:
        "Cloud security operates across multiple interconnected control planes.",

      layers: [
        { title: "Identity", description: "Users, roles and service identities." },
        { title: "Control Plane", description: "Cloud administrative activity." },
        { title: "Workloads", description: "Compute and application workloads." },
        { title: "Network", description: "Cloud connectivity and segmentation." },
        { title: "Data", description: "Storage and information resources." },
        { title: "Operations", description: "Monitoring and response." },
      ],
    },

    intelligence: {
      eyebrow: "CLOUD SIGNALS",
      title: "Connect cloud activity into security context.",
      description:
        "Cloud security intelligence combines identity, configuration and workload activity.",

      signals: [
        "Cloud audit logs",
        "IAM activity",
        "Workload events",
        "Configuration changes",
        "Network activity",
        "Storage events",
      ],
    },

    operations: [
      {
        title: "Observe",
        description: "Maintain cloud security visibility.",
      },
      {
        title: "Assess",
        description: "Evaluate posture and suspicious activity.",
      },
      {
        title: "Investigate",
        description: "Establish cloud event context.",
      },
      {
        title: "Remediate",
        description: "Coordinate corrective actions.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Discover",
        description: "Understand cloud estate.",
        output: "Cloud inventory",
      },
      {
        step: "02",
        title: "Connect",
        description: "Integrate cloud telemetry.",
        output: "Visibility",
      },
      {
        step: "03",
        title: "Assess",
        description: "Review cloud posture.",
        output: "Risk context",
      },
      {
        step: "04",
        title: "Monitor",
        description: "Observe cloud activity.",
        output: "Signals",
      },
      {
        step: "05",
        title: "Respond",
        description: "Coordinate remediation.",
        output: "Action",
      },
      {
        step: "06",
        title: "Improve",
        description: "Strengthen cloud controls.",
        output: "Posture",
      },
    ],

    principles: [
      {
        title: "Security follows infrastructure",
        description: "Controls must adapt as cloud infrastructure changes.",
      },
      {
        title: "Identity is critical",
        description: "Cloud security depends heavily on access control.",
      },
      {
        title: "Configuration matters",
        description: "Cloud posture requires continuous attention.",
      },
      {
        title: "Engineering alignment",
        description: "Security should support cloud delivery workflows.",
      },
    ],

    useCases: [
      {
        title: "Multi-cloud operations",
        description: "Coordinate visibility across cloud platforms.",
      },
      {
        title: "Cloud migration",
        description: "Maintain security during infrastructure transition.",
      },
      {
        title: "Cloud-native applications",
        description: "Monitor dynamic application environments.",
      },
      {
        title: "Cloud governance",
        description: "Improve operational security oversight.",
      },
    ],

    closing: {
      eyebrow: "CLOUD DEFENSE",
      title: "Move fast in cloud.",
      accent: "Keep security connected.",
      description:
        "Create a cloud security operating model designed for dynamic infrastructure.",
    },
  },

  // ==============================================================
  // VULNERABILITY
  // ==============================================================

  "managed-vulnerability-management": {
    slug: "managed-vulnerability-management",

    eyebrow: "MANAGED VULNERABILITY MANAGEMENT",
    title: "Find exposure.",
    accent: "Prioritize what matters.",

    description:
      "Continuously discover, assess and prioritize security weaknesses across enterprise technology environments.",

    heroStatement:
      "Move vulnerability management from endless findings to risk-informed remediation.",

    heroSupport:
      "HYI.AI connects asset context, vulnerability data and remediation workflows to help teams focus on meaningful exposure.",

    status: [
      { label: "Assets", value: "DISCOVERED" },
      { label: "Exposure", value: "ASSESSED" },
      { label: "Remediation", value: "PRIORITIZED" },
    ],

    overview: {
      eyebrow: "EXPOSURE MANAGEMENT",
      title: "Not every vulnerability",
      accent: "has the same business impact.",

      paragraphs: [
        "Organizations can discover thousands of vulnerabilities across infrastructure and applications.",

        "Effective vulnerability management requires asset importance, exploitability and exposure context.",

        "Managed vulnerability operations connect discovery with prioritization and remediation tracking.",
      ],
    },

    capabilities: [
      {
        icon: "server",
        title: "Asset Discovery",
        description: "Identify assets within the vulnerability program.",
      },
      {
        icon: "eye",
        title: "Exposure Visibility",
        description: "Understand vulnerabilities affecting assets.",
      },
      {
        icon: "gauge",
        title: "Risk Prioritization",
        description: "Prioritize findings using contextual information.",
      },
      {
        icon: "database",
        title: "Vulnerability Intelligence",
        description: "Enrich findings with vulnerability context.",
      },
      {
        icon: "workflow",
        title: "Remediation Workflow",
        description: "Connect prioritized findings with remediation teams.",
      },
      {
        icon: "activity",
        title: "Continuous Tracking",
        description: "Monitor remediation progress and changing exposure.",
      },
    ],

    architecture: {
      eyebrow: "EXPOSURE ARCHITECTURE",
      title: "From discovery to remediation.",
      description:
        "Vulnerability management becomes operational when findings are connected to asset and remediation context.",

      layers: [
        { title: "Assets", description: "Infrastructure and applications." },
        { title: "Discovery", description: "Vulnerability identification." },
        { title: "Enrichment", description: "Asset and threat context." },
        { title: "Prioritization", description: "Risk-informed ranking." },
        { title: "Remediation", description: "Corrective action." },
        { title: "Validation", description: "Verify improvement." },
      ],
    },

    intelligence: {
      eyebrow: "EXPOSURE SIGNALS",
      title: "Prioritize exposure with context.",
      description:
        "Vulnerability severity alone does not provide complete remediation context.",

      signals: [
        "Asset criticality",
        "Vulnerability severity",
        "Exposure",
        "Exploit context",
        "Ownership",
        "Remediation state",
      ],
    },

    operations: [
      {
        title: "Discover",
        description: "Identify vulnerabilities.",
      },
      {
        title: "Enrich",
        description: "Add business and threat context.",
      },
      {
        title: "Prioritize",
        description: "Focus remediation.",
      },
      {
        title: "Validate",
        description: "Confirm corrective action.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Identify assets.",
        output: "Asset scope",
      },
      {
        step: "02",
        title: "Assess",
        description: "Discover weaknesses.",
        output: "Findings",
      },
      {
        step: "03",
        title: "Enrich",
        description: "Add context.",
        output: "Risk context",
      },
      {
        step: "04",
        title: "Prioritize",
        description: "Determine remediation order.",
        output: "Priority",
      },
      {
        step: "05",
        title: "Remediate",
        description: "Coordinate fixes.",
        output: "Action",
      },
      {
        step: "06",
        title: "Validate",
        description: "Confirm improvement.",
        output: "Closure",
      },
    ],

    principles: [
      {
        title: "Asset context first",
        description: "Risk depends on what a vulnerability affects.",
      },
      {
        title: "Prioritize intelligently",
        description: "Not all findings require equal urgency.",
      },
      {
        title: "Connect remediation",
        description: "Findings need accountable workflows.",
      },
      {
        title: "Measure improvement",
        description: "Track exposure reduction over time.",
      },
    ],

    useCases: [
      {
        title: "Enterprise infrastructure",
        description: "Manage vulnerability exposure across infrastructure.",
      },
      {
        title: "Cloud workloads",
        description: "Track weaknesses in dynamic cloud environments.",
      },
      {
        title: "Application environments",
        description: "Coordinate remediation with application teams.",
      },
      {
        title: "Exposure reduction",
        description: "Prioritize security improvement programs.",
      },
    ],

    closing: {
      eyebrow: "EXPOSURE MANAGEMENT",
      title: "Find the weakness.",
      accent: "Focus the remediation.",
      description:
        "Build vulnerability management around business context and measurable improvement.",
    },
  },

  // ==============================================================
  // SECURITY MONITORING
  // ==============================================================

  "security-monitoring-services": {
    slug: "security-monitoring-services",

    eyebrow: "SECURITY MONITORING SERVICES",
    title: "Observe the environment.",
    accent: "Understand the signal.",

    description:
      "Continuous security telemetry monitoring designed to improve operational visibility across enterprise systems.",

    heroStatement:
      "Create a continuous view of security activity across the digital environment.",

    heroSupport:
      "Security monitoring connects logs, events and behavioral telemetry into a structured operational view.",

    status: [
      { label: "Telemetry", value: "LIVE" },
      { label: "Events", value: "OBSERVED" },
      { label: "Signals", value: "CORRELATED" },
    ],

    overview: {
      eyebrow: "CONTINUOUS VISIBILITY",
      title: "You cannot protect",
      accent: "what you cannot observe.",

      paragraphs: [
        "Modern infrastructure generates security activity across many independent systems.",

        "Continuous monitoring creates a shared view of security-relevant activity.",

        "The objective is to convert telemetry into operational awareness.",
      ],
    },

    capabilities: [
      {
        icon: "radio",
        title: "Telemetry Collection",
        description: "Collect relevant security events.",
      },
      {
        icon: "activity",
        title: "Live Monitoring",
        description: "Continuously observe incoming activity.",
      },
      {
        icon: "database",
        title: "Event Context",
        description: "Structure and enrich security events.",
      },
      {
        icon: "eye",
        title: "Signal Review",
        description: "Identify activity requiring attention.",
      },
      {
        icon: "network",
        title: "Cross-System Visibility",
        description: "Connect events across systems.",
      },
      {
        icon: "workflow",
        title: "Escalation",
        description: "Route meaningful signals into investigation.",
      },
    ],

    architecture: {
      eyebrow: "MONITORING ARCHITECTURE",
      title: "One operational view.",
      description: "Monitoring connects distributed telemetry.",

      layers: [
        { title: "Sources", description: "Security event sources." },
        { title: "Collection", description: "Telemetry ingestion." },
        { title: "Normalization", description: "Structured events." },
        { title: "Correlation", description: "Connected activity." },
        { title: "Monitoring", description: "Operational review." },
        { title: "Escalation", description: "Investigation workflow." },
      ],
    },

    intelligence: {
      eyebrow: "LIVE SIGNALS",
      title: "Security activity in context.",
      description:
        "Monitoring becomes useful when telemetry can be interpreted as meaningful operational activity.",

      signals: [
        "Authentication",
        "Endpoints",
        "Networks",
        "Cloud",
        "Applications",
        "Security controls",
      ],
    },

    operations: [
      { title: "Collect", description: "Ingest events." },
      { title: "Observe", description: "Monitor activity." },
      { title: "Correlate", description: "Connect signals." },
      { title: "Escalate", description: "Route relevant activity." },
    ],

    process: [
      {
        step: "01",
        title: "Connect",
        description: "Integrate telemetry.",
        output: "Coverage",
      },
      {
        step: "02",
        title: "Normalize",
        description: "Structure events.",
        output: "Data",
      },
      {
        step: "03",
        title: "Observe",
        description: "Monitor activity.",
        output: "Visibility",
      },
      {
        step: "04",
        title: "Correlate",
        description: "Connect related events.",
        output: "Context",
      },
      {
        step: "05",
        title: "Review",
        description: "Evaluate signals.",
        output: "Assessment",
      },
      {
        step: "06",
        title: "Escalate",
        description: "Initiate investigation.",
        output: "Action",
      },
    ],

    principles: [
      {
        title: "Useful telemetry",
        description: "Collect security data with operational purpose.",
      },
      {
        title: "Connected visibility",
        description: "Observe activity across systems.",
      },
      {
        title: "Contextual monitoring",
        description: "Interpret events in context.",
      },
      {
        title: "Actionable escalation",
        description: "Route meaningful activity appropriately.",
      },
    ],

    useCases: [
      {
        title: "Enterprise monitoring",
        description: "Observe distributed systems.",
      },
      {
        title: "Cloud monitoring",
        description: "Monitor cloud security events.",
      },
      {
        title: "Identity monitoring",
        description: "Observe authentication activity.",
      },
      {
        title: "Operational visibility",
        description: "Create a unified security view.",
      },
    ],

    closing: {
      eyebrow: "SECURITY VISIBILITY",
      title: "Observe continuously.",
      accent: "Act with context.",
      description:
        "Create continuous security awareness across the enterprise.",
    },
  },

  // ==============================================================
  // INCIDENT
  // ==============================================================

  "security-incident-management": {
    slug: "security-incident-management",

    eyebrow: "SECURITY INCIDENT MANAGEMENT",
    title: "When security changes,",
    accent: "response becomes the system.",

    description:
      "Structured incident management for investigation, containment, remediation, recovery and operational learning.",

    heroStatement:
      "Turn security incidents into coordinated operational workflows.",

    heroSupport:
      "HYI.AI helps structure security incident handling across technical teams, business stakeholders and recovery activities.",

    status: [
      { label: "Triage", value: "READY" },
      { label: "Response", value: "COORDINATED" },
      { label: "Recovery", value: "STRUCTURED" },
    ],

    overview: {
      eyebrow: "INCIDENT RESPONSE",
      title: "During an incident,",
      accent: "clarity matters.",

      paragraphs: [
        "Security incidents create technical and operational uncertainty.",

        "A structured incident process establishes responsibilities, communication and response actions.",

        "Incident management connects investigation with containment, remediation and recovery.",
      ],
    },

    capabilities: [
      {
        icon: "activity",
        title: "Incident Triage",
        description: "Assess reported security activity.",
      },
      {
        icon: "eye",
        title: "Investigation",
        description: "Establish incident scope and context.",
      },
      {
        icon: "shield",
        title: "Containment",
        description: "Coordinate actions to limit impact.",
      },
      {
        icon: "workflow",
        title: "Response Coordination",
        description: "Structure technical and operational actions.",
      },
      {
        icon: "settings",
        title: "Recovery",
        description: "Coordinate restoration and remediation.",
      },
      {
        icon: "database",
        title: "Incident Learning",
        description: "Capture findings for future improvement.",
      },
    ],

    architecture: {
      eyebrow: "RESPONSE ARCHITECTURE",
      title: "A controlled path through uncertainty.",
      description: "Incident management structures response.",

      layers: [
        { title: "Detection", description: "Security event identified." },
        { title: "Triage", description: "Initial assessment." },
        { title: "Investigation", description: "Scope and context." },
        { title: "Containment", description: "Limit potential impact." },
        { title: "Recovery", description: "Restore operations." },
        { title: "Learning", description: "Improve future readiness." },
      ],
    },

    intelligence: {
      eyebrow: "INCIDENT CONTEXT",
      title: "Build the incident picture.",
      description:
        "Effective response depends on understanding affected systems, identities and business processes.",

      signals: [
        "Affected assets",
        "Identity activity",
        "Timeline",
        "Indicators",
        "Business impact",
        "Response actions",
      ],
    },

    operations: [
      { title: "Triage", description: "Assess incident severity." },
      { title: "Investigate", description: "Establish scope." },
      { title: "Contain", description: "Limit impact." },
      { title: "Recover", description: "Restore operations." },
    ],

    process: [
      {
        step: "01",
        title: "Identify",
        description: "Recognize potential incident.",
        output: "Case",
      },
      {
        step: "02",
        title: "Triage",
        description: "Assess urgency.",
        output: "Priority",
      },
      {
        step: "03",
        title: "Investigate",
        description: "Establish context.",
        output: "Scope",
      },
      {
        step: "04",
        title: "Contain",
        description: "Limit impact.",
        output: "Control",
      },
      {
        step: "05",
        title: "Recover",
        description: "Restore systems.",
        output: "Recovery",
      },
      {
        step: "06",
        title: "Learn",
        description: "Capture lessons.",
        output: "Improvement",
      },
    ],

    principles: [
      {
        title: "Clear ownership",
        description: "Response requires defined responsibilities.",
      },
      {
        title: "Evidence preservation",
        description: "Investigation should maintain useful evidence.",
      },
      {
        title: "Controlled response",
        description: "Actions should follow established procedures.",
      },
      {
        title: "Operational learning",
        description: "Incidents should strengthen future readiness.",
      },
    ],

    useCases: [
      {
        title: "Account compromise",
        description: "Coordinate identity incident response.",
      },
      {
        title: "Endpoint incident",
        description: "Structure endpoint containment.",
      },
      {
        title: "Cloud incident",
        description: "Coordinate cloud investigation.",
      },
      {
        title: "Business disruption",
        description: "Connect security and recovery teams.",
      },
    ],

    closing: {
      eyebrow: "INCIDENT RESPONSE",
      title: "Respond with structure.",
      accent: "Recover with confidence.",
      description:
        "Build incident management around clear operational coordination.",
    },
  },

  // ==============================================================
  // FIREWALL
  // ==============================================================

  "managed-firewall-services": {
    slug: "managed-firewall-services",

    eyebrow: "MANAGED FIREWALL SERVICES",
    title: "Control the paths",
    accent: "through your network.",

    description:
      "Operational firewall management designed around policy governance, visibility, controlled change and network security.",

    heroStatement:
      "Turn firewall infrastructure into a continuously governed security control.",

    heroSupport:
      "HYI.AI Managed Firewall Services support firewall policy, configuration, operational monitoring and controlled security changes.",

    status: [
      { label: "Policy", value: "GOVERNED" },
      { label: "Traffic", value: "OBSERVED" },
      { label: "Changes", value: "CONTROLLED" },
    ],

    overview: {
      eyebrow: "NETWORK CONTROL",
      title: "Firewall rules accumulate.",
      accent: "Security needs governance.",

      paragraphs: [
        "Firewall environments become complex as applications and networks evolve.",

        "Managed firewall operations create structure around policy, change and visibility.",

        "The objective is to maintain intentional network access rather than unmanaged rule growth.",
      ],
    },

    capabilities: [
      {
        icon: "shield",
        title: "Policy Management",
        description: "Maintain structured firewall policy.",
      },
      {
        icon: "network",
        title: "Traffic Control",
        description: "Manage permitted network communication.",
      },
      {
        icon: "eye",
        title: "Firewall Visibility",
        description: "Observe firewall events and activity.",
      },
      {
        icon: "workflow",
        title: "Change Management",
        description: "Coordinate controlled firewall changes.",
      },
      {
        icon: "settings",
        title: "Configuration Review",
        description: "Review operational firewall configuration.",
      },
      {
        icon: "activity",
        title: "Policy Optimization",
        description: "Identify opportunities for rule improvement.",
      },
    ],

    architecture: {
      eyebrow: "FIREWALL ARCHITECTURE",
      title: "Policy across network boundaries.",
      description: "Managed firewall services connect governance and control.",

      layers: [
        { title: "Applications", description: "Business communication needs." },
        { title: "Network Zones", description: "Security boundaries." },
        { title: "Policy", description: "Permitted communication." },
        { title: "Firewall", description: "Traffic enforcement." },
        { title: "Monitoring", description: "Firewall activity." },
        { title: "Governance", description: "Change and review." },
      ],
    },

    intelligence: {
      eyebrow: "FIREWALL SIGNALS",
      title: "Understand network control activity.",
      description:
        "Firewall events provide important context around network communication.",

      signals: [
        "Allowed traffic",
        "Blocked traffic",
        "Policy changes",
        "Network zones",
        "Rule usage",
        "Administrative activity",
      ],
    },

    operations: [
      { title: "Define", description: "Establish policy requirements." },
      { title: "Control", description: "Apply firewall rules." },
      { title: "Observe", description: "Monitor activity." },
      { title: "Optimize", description: "Improve policy." },
    ],

    process: [
      {
        step: "01",
        title: "Assess",
        description: "Review firewall environment.",
        output: "Context",
      },
      {
        step: "02",
        title: "Baseline",
        description: "Understand policy.",
        output: "Policy view",
      },
      {
        step: "03",
        title: "Govern",
        description: "Structure changes.",
        output: "Control",
      },
      {
        step: "04",
        title: "Monitor",
        description: "Observe firewall activity.",
        output: "Visibility",
      },
      {
        step: "05",
        title: "Review",
        description: "Evaluate rules.",
        output: "Findings",
      },
      {
        step: "06",
        title: "Optimize",
        description: "Improve configuration.",
        output: "Posture",
      },
    ],

    principles: [
      {
        title: "Least required access",
        description: "Network access should be intentional.",
      },
      {
        title: "Controlled changes",
        description: "Policy changes require governance.",
      },
      {
        title: "Rule visibility",
        description: "Firewall policies should remain understandable.",
      },
      {
        title: "Continuous review",
        description: "Rules should evolve with business requirements.",
      },
    ],

    useCases: [
      {
        title: "Enterprise firewalls",
        description: "Operate distributed firewall infrastructure.",
      },
      {
        title: "Cloud firewalls",
        description: "Manage cloud network controls.",
      },
      {
        title: "Segmentation",
        description: "Maintain controlled network boundaries.",
      },
      {
        title: "Policy governance",
        description: "Structure firewall changes.",
      },
    ],

    closing: {
      eyebrow: "NETWORK CONTROL",
      title: "Control connectivity.",
      accent: "Keep policy intentional.",
      description:
        "Operate firewall infrastructure through structured security governance.",
    },
  },

  // ==============================================================
  // NETWORK SECURITY
  // ==============================================================

  "managed-network-security": {
    slug: "managed-network-security",

    eyebrow: "MANAGED NETWORK SECURITY",
    title: "Secure every",
    accent: "connection path.",

    description:
      "Continuous network security visibility across distributed enterprise infrastructure and connectivity.",

    heroStatement:
      "Understand how systems communicate and where security boundaries exist.",

    heroSupport:
      "Managed Network Security connects network telemetry, segmentation, access controls and security monitoring.",

    status: [
      { label: "Network", value: "VISIBLE" },
      { label: "Traffic", value: "OBSERVED" },
      { label: "Boundaries", value: "CONTROLLED" },
    ],

    overview: {
      eyebrow: "NETWORK DEFENSE",
      title: "The network is distributed.",
      accent: "Security must stay connected.",

      paragraphs: [
        "Enterprise networks now span offices, cloud platforms and remote environments.",

        "Network security requires visibility across communication paths and boundaries.",

        "Managed operations provide continuous oversight of network security activity.",
      ],
    },

    capabilities: [
      {
        icon: "network",
        title: "Network Visibility",
        description: "Understand enterprise connectivity.",
      },
      {
        icon: "activity",
        title: "Traffic Monitoring",
        description: "Observe network security activity.",
      },
      {
        icon: "shield",
        title: "Segmentation",
        description: "Support controlled network boundaries.",
      },
      {
        icon: "eye",
        title: "Network Detection",
        description: "Identify unusual communication patterns.",
      },
      {
        icon: "settings",
        title: "Control Management",
        description: "Coordinate network security controls.",
      },
      {
        icon: "workflow",
        title: "Response Integration",
        description: "Connect network findings with response.",
      },
    ],

    architecture: {
      eyebrow: "NETWORK ARCHITECTURE",
      title: "Security across every connection.",
      description: "Connect network visibility and control.",

      layers: [
        { title: "Users", description: "People and devices." },
        { title: "Access", description: "Network entry points." },
        { title: "Network", description: "Enterprise connectivity." },
        { title: "Segmentation", description: "Security zones." },
        { title: "Monitoring", description: "Network telemetry." },
        { title: "Response", description: "Operational action." },
      ],
    },

    intelligence: {
      eyebrow: "NETWORK SIGNALS",
      title: "See communication patterns.",
      description:
        "Network telemetry can reveal unusual communication and security-relevant behavior.",

      signals: [
        "Connections",
        "Traffic patterns",
        "DNS activity",
        "Network flows",
        "Security controls",
        "Remote access",
      ],
    },

    operations: [
      { title: "Map", description: "Understand connectivity." },
      { title: "Control", description: "Maintain boundaries." },
      { title: "Observe", description: "Monitor traffic." },
      { title: "Respond", description: "Address anomalies." },
    ],

    process: [
      {
        step: "01",
        title: "Discover",
        description: "Map network environment.",
        output: "Topology",
      },
      {
        step: "02",
        title: "Segment",
        description: "Define boundaries.",
        output: "Zones",
      },
      {
        step: "03",
        title: "Monitor",
        description: "Observe network activity.",
        output: "Telemetry",
      },
      {
        step: "04",
        title: "Analyze",
        description: "Evaluate behavior.",
        output: "Context",
      },
      {
        step: "05",
        title: "Respond",
        description: "Coordinate action.",
        output: "Response",
      },
      {
        step: "06",
        title: "Improve",
        description: "Strengthen controls.",
        output: "Posture",
      },
    ],

    principles: [
      {
        title: "Know the network",
        description: "Visibility is foundational.",
      },
      {
        title: "Intentional access",
        description: "Connectivity should serve defined needs.",
      },
      {
        title: "Segmentation",
        description: "Boundaries reduce unnecessary exposure.",
      },
      {
        title: "Continuous observation",
        description: "Network behavior changes over time.",
      },
    ],

    useCases: [
      {
        title: "Hybrid networks",
        description: "Secure cloud and on-premises connectivity.",
      },
      {
        title: "Remote access",
        description: "Monitor distributed access paths.",
      },
      {
        title: "Network segmentation",
        description: "Maintain security zones.",
      },
      {
        title: "Network investigation",
        description: "Analyze suspicious communication.",
      },
    ],

    closing: {
      eyebrow: "NETWORK DEFENSE",
      title: "Understand the path.",
      accent: "Control the connection.",
      description:
        "Build network security around visibility and intentional connectivity.",
    },
  },

  // ==============================================================
  // SIEM
  // ==============================================================

  "managed-siem-services": {
    slug: "managed-siem-services",

    eyebrow: "MANAGED SIEM SERVICES",
    title: "Make security data",
    accent: "operational.",

    description:
      "Managed SIEM services connect security telemetry, correlation, detection logic and investigation workflows.",

    heroStatement:
      "Transform security event data into structured detection and investigation intelligence.",

    heroSupport:
      "HYI.AI helps operate SIEM environments as active security intelligence platforms rather than passive log repositories.",

    status: [
      { label: "Data", value: "INGESTED" },
      { label: "Rules", value: "ACTIVE" },
      { label: "Correlation", value: "RUNNING" },
    ],

    overview: {
      eyebrow: "SECURITY ANALYTICS",
      title: "Logs are data.",
      accent: "Correlation creates meaning.",

      paragraphs: [
        "SIEM platforms centralize security telemetry from many technology systems.",

        "Value comes from data quality, detection logic and operational workflows.",

        "Managed SIEM services maintain the connection between telemetry and security operations.",
      ],
    },

    capabilities: [
      {
        icon: "database",
        title: "Log Integration",
        description: "Connect relevant security data sources.",
      },
      {
        icon: "settings",
        title: "Data Normalization",
        description: "Structure telemetry for analytics.",
      },
      {
        icon: "activity",
        title: "Detection Rules",
        description: "Develop and maintain detection logic.",
      },
      {
        icon: "network",
        title: "Correlation",
        description: "Connect related events.",
      },
      {
        icon: "eye",
        title: "Investigation",
        description: "Support security analysis.",
      },
      {
        icon: "gauge",
        title: "SIEM Optimization",
        description: "Continuously improve operational value.",
      },
    ],

    architecture: {
      eyebrow: "SIEM ARCHITECTURE",
      title: "Security data → intelligence.",
      description: "SIEM connects telemetry with analytics.",

      layers: [
        { title: "Sources", description: "Security telemetry." },
        { title: "Ingestion", description: "Data collection." },
        { title: "Normalization", description: "Structured events." },
        { title: "Analytics", description: "Detection logic." },
        { title: "Correlation", description: "Connected activity." },
        { title: "Investigation", description: "Operational analysis." },
      ],
    },

    intelligence: {
      eyebrow: "SIEM SIGNALS",
      title: "Correlate activity across systems.",
      description:
        "SIEM provides value when distributed events become connected security context.",

      signals: [
        "Identity logs",
        "Endpoint logs",
        "Network logs",
        "Cloud logs",
        "Application logs",
        "Security alerts",
      ],
    },

    operations: [
      { title: "Ingest", description: "Collect telemetry." },
      { title: "Normalize", description: "Structure data." },
      { title: "Detect", description: "Apply analytics." },
      { title: "Investigate", description: "Analyze signals." },
    ],

    process: [
      {
        step: "01",
        title: "Scope",
        description: "Define telemetry requirements.",
        output: "Data plan",
      },
      {
        step: "02",
        title: "Integrate",
        description: "Connect sources.",
        output: "Ingestion",
      },
      {
        step: "03",
        title: "Normalize",
        description: "Structure events.",
        output: "Data quality",
      },
      {
        step: "04",
        title: "Detect",
        description: "Apply rules.",
        output: "Signals",
      },
      {
        step: "05",
        title: "Investigate",
        description: "Establish context.",
        output: "Findings",
      },
      {
        step: "06",
        title: "Tune",
        description: "Improve SIEM operations.",
        output: "Optimization",
      },
    ],

    principles: [
      {
        title: "Purposeful ingestion",
        description: "Collect telemetry with clear security value.",
      },
      {
        title: "Data quality",
        description: "Detection depends on trustworthy data.",
      },
      {
        title: "Detection relevance",
        description: "Rules should reflect organizational risk.",
      },
      {
        title: "Continuous tuning",
        description: "SIEM environments require ongoing improvement.",
      },
    ],

    useCases: [
      {
        title: "Centralized logging",
        description: "Create shared security visibility.",
      },
      {
        title: "Threat detection",
        description: "Correlate suspicious events.",
      },
      {
        title: "Investigation",
        description: "Search historical security activity.",
      },
      {
        title: "Security operations",
        description: "Support SOC workflows.",
      },
    ],

    closing: {
      eyebrow: "SECURITY ANALYTICS",
      title: "Connect the data.",
      accent: "Reveal the signal.",
      description:
        "Operate SIEM as an active security intelligence capability.",
    },
  },

  // ==============================================================
  // IDENTITY
  // ==============================================================

  "managed-identity-security": {
    slug: "managed-identity-security",

    eyebrow: "MANAGED IDENTITY SECURITY",
    title: "Identity is the",
    accent: "new control plane.",

    description:
      "Continuous visibility and security operations around users, privileged accounts, service identities and access activity.",

    heroStatement:
      "Understand who is accessing what—and whether that access still makes sense.",

    heroSupport:
      "Managed Identity Security connects authentication activity, privilege context and identity risk into security operations.",

    status: [
      { label: "Identity", value: "VISIBLE" },
      { label: "Access", value: "OBSERVED" },
      { label: "Privilege", value: "CONTROLLED" },
    ],

    overview: {
      eyebrow: "IDENTITY DEFENSE",
      title: "Attackers increasingly target",
      accent: "access rather than infrastructure.",

      paragraphs: [
        "Identity has become central to cloud and enterprise security.",

        "Compromised credentials can provide access without exploiting infrastructure vulnerabilities.",

        "Identity security therefore requires continuous authentication and privilege context.",
      ],
    },

    capabilities: [
      {
        icon: "eye",
        title: "Identity Visibility",
        description: "Observe identity and authentication activity.",
      },
      {
        icon: "shield",
        title: "Access Security",
        description: "Support controlled access practices.",
      },
      {
        icon: "activity",
        title: "Authentication Monitoring",
        description: "Identify unusual authentication behavior.",
      },
      {
        icon: "gauge",
        title: "Privilege Context",
        description: "Understand elevated access.",
      },
      {
        icon: "database",
        title: "Identity Intelligence",
        description: "Connect identity signals with security context.",
      },
      {
        icon: "workflow",
        title: "Identity Response",
        description: "Coordinate action around identity risk.",
      },
    ],

    architecture: {
      eyebrow: "IDENTITY ARCHITECTURE",
      title: "Security centered on access.",
      description: "Identity security connects users and resources.",

      layers: [
        { title: "Identities", description: "Users and services." },
        { title: "Authentication", description: "Identity verification." },
        { title: "Authorization", description: "Access decisions." },
        { title: "Privilege", description: "Elevated permissions." },
        { title: "Monitoring", description: "Identity activity." },
        { title: "Response", description: "Access remediation." },
      ],
    },

    intelligence: {
      eyebrow: "IDENTITY SIGNALS",
      title: "Understand access behavior.",
      description:
        "Identity activity provides important context around account compromise and privilege misuse.",

      signals: [
        "Login activity",
        "MFA events",
        "Privilege changes",
        "Role assignments",
        "Service identities",
        "Access patterns",
      ],
    },

    operations: [
      { title: "Discover", description: "Understand identities." },
      { title: "Observe", description: "Monitor access." },
      { title: "Analyze", description: "Evaluate behavior." },
      { title: "Respond", description: "Coordinate access actions." },
    ],

    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Understand identity landscape.",
        output: "Identity view",
      },
      {
        step: "02",
        title: "Connect",
        description: "Integrate identity telemetry.",
        output: "Visibility",
      },
      {
        step: "03",
        title: "Monitor",
        description: "Observe access.",
        output: "Signals",
      },
      {
        step: "04",
        title: "Analyze",
        description: "Evaluate behavior.",
        output: "Context",
      },
      {
        step: "05",
        title: "Respond",
        description: "Coordinate action.",
        output: "Control",
      },
      {
        step: "06",
        title: "Review",
        description: "Improve identity posture.",
        output: "Improvement",
      },
    ],

    principles: [
      {
        title: "Verify access",
        description: "Identity should be continuously contextualized.",
      },
      {
        title: "Limit privilege",
        description: "Elevated access requires strong governance.",
      },
      {
        title: "Monitor behavior",
        description: "Authentication patterns provide useful signals.",
      },
      {
        title: "Connect identity context",
        description: "Identity should inform broader security operations.",
      },
    ],

    useCases: [
      {
        title: "Account compromise",
        description: "Investigate suspicious identity activity.",
      },
      {
        title: "Privileged access",
        description: "Monitor elevated accounts.",
      },
      {
        title: "Cloud identities",
        description: "Observe cloud access activity.",
      },
      {
        title: "Remote workforce",
        description: "Monitor distributed authentication.",
      },
    ],

    closing: {
      eyebrow: "IDENTITY DEFENSE",
      title: "Know the identity.",
      accent: "Understand the access.",
      description:
        "Build security operations around continuous identity context.",
    },
  },

  // ==============================================================
  // 24/7 MONITORING
  // ==============================================================

  "24-7-security-monitoring": {
    slug: "24-7-security-monitoring",

    eyebrow: "24/7 SECURITY MONITORING",
    title: "Security events",
    accent: "do not follow office hours.",

    description:
      "Continuous security monitoring designed to maintain visibility across critical digital environments around the clock.",

    heroStatement:
      "Maintain security awareness beyond business hours.",

    heroSupport:
      "HYI.AI 24/7 Security Monitoring provides continuous telemetry observation, signal review and structured escalation workflows.",

    status: [
      { label: "Coverage", value: "CONTINUOUS" },
      { label: "Telemetry", value: "LIVE" },
      { label: "Escalation", value: "READY" },
    ],

    overview: {
      eyebrow: "ALWAYS-ON VISIBILITY",
      title: "The environment keeps running.",
      accent: "Monitoring should too.",

      paragraphs: [
        "Cloud workloads, remote users and internet-facing services remain active outside normal business hours.",

        "Continuous monitoring helps maintain awareness when internal teams may not be actively observing systems.",

        "The operating model connects telemetry observation with structured escalation.",
      ],
    },

    capabilities: [
      {
        icon: "radio",
        title: "Continuous Telemetry",
        description: "Maintain ongoing security signal visibility.",
      },
      {
        icon: "eye",
        title: "Event Observation",
        description: "Review security-relevant activity.",
      },
      {
        icon: "activity",
        title: "Signal Detection",
        description: "Identify activity requiring attention.",
      },
      {
        icon: "database",
        title: "Context Enrichment",
        description: "Add useful information to security signals.",
      },
      {
        icon: "workflow",
        title: "Escalation Workflow",
        description: "Route meaningful events appropriately.",
      },
      {
        icon: "shield",
        title: "Operational Continuity",
        description: "Maintain security awareness across time zones.",
      },
    ],

    architecture: {
      eyebrow: "MONITORING LOOP",
      title: "Continuous visibility.",
      description:
        "An always-on monitoring loop connects telemetry, analysis and escalation.",

      layers: [
        { title: "Environment", description: "Protected systems." },
        { title: "Telemetry", description: "Continuous security events." },
        { title: "Monitoring", description: "Operational observation." },
        { title: "Analysis", description: "Signal context." },
        { title: "Escalation", description: "Operational notification." },
        { title: "Response", description: "Follow-on action." },
      ],
    },

    intelligence: {
      eyebrow: "CONTINUOUS SIGNALS",
      title: "Always connected to the environment.",
      description:
        "Continuous monitoring provides ongoing visibility across critical security telemetry.",

      signals: [
        "Endpoint events",
        "Identity events",
        "Cloud events",
        "Network activity",
        "Application events",
        "Security alerts",
      ],
    },

    operations: [
      { title: "Observe", description: "Maintain continuous visibility." },
      { title: "Review", description: "Evaluate security signals." },
      { title: "Contextualize", description: "Understand activity." },
      { title: "Escalate", description: "Route meaningful events." },
    ],

    process: [
      {
        step: "01",
        title: "Connect",
        description: "Integrate telemetry.",
        output: "Coverage",
      },
      {
        step: "02",
        title: "Observe",
        description: "Continuously monitor.",
        output: "Visibility",
      },
      {
        step: "03",
        title: "Detect",
        description: "Identify signals.",
        output: "Alert",
      },
      {
        step: "04",
        title: "Review",
        description: "Establish context.",
        output: "Assessment",
      },
      {
        step: "05",
        title: "Escalate",
        description: "Notify relevant teams.",
        output: "Escalation",
      },
      {
        step: "06",
        title: "Improve",
        description: "Refine monitoring.",
        output: "Coverage",
      },
    ],

    principles: [
      {
        title: "Continuous awareness",
        description: "Monitoring should reflect always-on infrastructure.",
      },
      {
        title: "Relevant escalation",
        description: "Meaningful events require clear routing.",
      },
      {
        title: "Operational context",
        description: "Signals need enough context for action.",
      },
      {
        title: "Consistent process",
        description: "Monitoring should remain structured across shifts.",
      },
    ],

    useCases: [
      {
        title: "Global operations",
        description: "Maintain security visibility across time zones.",
      },
      {
        title: "Cloud services",
        description: "Monitor always-on workloads.",
      },
      {
        title: "Remote workforce",
        description: "Observe activity outside office hours.",
      },
      {
        title: "Critical systems",
        description: "Maintain continuous operational awareness.",
      },
    ],

    closing: {
      eyebrow: "ALWAYS ON",
      title: "Your systems keep running.",
      accent: "Your visibility should too.",
      description:
        "Create continuous security monitoring around critical digital environments.",
    },
  },
};