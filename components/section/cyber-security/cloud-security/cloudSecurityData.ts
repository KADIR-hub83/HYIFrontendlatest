export type CloudModel =
  | "assessment" | "architecture" | "workload" | "infrastructure"
  | "casb" | "cspm" | "identity" | "container" | "kubernetes"
  | "compliance" | "multicloud";

export type CloudSecurityService = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  stats: { value: string; label: string }[];
  model: CloudModel;
  narrativeTitle: string;
  narrative: string;
  capabilityTitle: string;
  capabilities: { title: string; text: string }[];
  surfaceTitle: string;
  architectureTitle: string;
  telemetryTitle: string;
  workflowTitle: string;
  operationsTitle: string;
  principlesTitle: string;
  principles: string[];
  outcomesTitle: string;
  ctaTitle: string;
};

export const cloudSecurityPages: Record<string, CloudSecurityService> = {
  "cloud-security-assessment": {
    "slug": "cloud-security-assessment",
    "name": "Cloud Security Assessment",
    "eyebrow": "CLOUD SECURITY / CLOUD SECURITY ASSESSMENT",
    "title": "See the cloud the way an attacker would.",
    "accent": "Map cloud exposure before it becomes operational risk.",
    "description": "Build a structured view of assets, identities, public exposure, configuration weaknesses and control maturity before deciding what to remediate first.",
    "stats": [
      {
        "value": "360\u00b0",
        "label": "Exposure view"
      },
      {
        "value": "RISK",
        "label": "Prioritization"
      },
      {
        "value": "MAP",
        "label": "Operating motion"
      }
    ],
    "model": "assessment",
    "narrativeTitle": "Exposure is a relationship, not a checklist.",
    "narrative": "An exposed service may be acceptable in one context and critical in another. Assessment connects reachability, identity privilege, data sensitivity and control maturity to create a more useful remediation picture.",
    "capabilityTitle": "Assessment lenses that reveal material cloud exposure.",
    "capabilities": [
      {
        "title": "Cloud Security Assessment \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Security Assessment \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Security Assessment \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Security Assessment \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Security Assessment \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Security Assessment \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Trace the paths that turn configuration into exposure.",
    "architectureTitle": "A risk graph for cloud assessment.",
    "telemetryTitle": "Signals that explain why exposure matters.",
    "workflowTitle": "Discover \u2192 contextualize \u2192 prioritize \u2192 remediate \u2192 verify.",
    "operationsTitle": "Turn assessment findings into an owned risk program.",
    "principlesTitle": "Assessment principles for useful prioritization.",
    "principles": [
      "Treat cloud security assessment as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "A clearer cloud risk picture with fewer blind prioritization decisions.",
    "ctaTitle": "Start with a cloud exposure map you can act on."
  },
  "cloud-security-architecture": {
    "slug": "cloud-security-architecture",
    "name": "Cloud Security Architecture",
    "eyebrow": "CLOUD SECURITY / CLOUD SECURITY ARCHITECTURE",
    "title": "Design trust before workloads arrive.",
    "accent": "Engineer security boundaries directly into cloud design.",
    "description": "Create security architecture around trust boundaries, identity, segmentation, encryption, telemetry and resilient control paths instead of adding controls after deployment.",
    "stats": [
      {
        "value": "TRUST",
        "label": "Design model"
      },
      {
        "value": "ZERO",
        "label": "Trust assumption"
      },
      {
        "value": "BOUNDARY",
        "label": "Architecture"
      }
    ],
    "model": "architecture",
    "narrativeTitle": "Cloud architecture becomes security architecture when trust is explicit.",
    "narrative": "Strong cloud design separates trust zones, limits implicit access and gives every control a clear enforcement point. Architecture should explain how a request moves, where it is verified and what happens when a dependency fails.",
    "capabilityTitle": "Architecture decisions that make trust inspectable.",
    "capabilities": [
      {
        "title": "Cloud Security Architecture \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Security Architecture \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Security Architecture \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Security Architecture \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Security Architecture \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Security Architecture \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Inspect every boundary where trust changes.",
    "architectureTitle": "A layered trust architecture for cloud systems.",
    "telemetryTitle": "Telemetry that proves architectural boundaries are working.",
    "workflowTitle": "Model \u2192 bound \u2192 enforce \u2192 observe \u2192 evolve.",
    "operationsTitle": "Operate architecture as a maintained system of decisions.",
    "principlesTitle": "Architecture principles for durable cloud trust.",
    "principles": [
      "Treat cloud security architecture as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Cloud systems whose trust boundaries can be explained and tested.",
    "ctaTitle": "Build cloud trust into the architecture itself."
  },
  "cloud-workload-protection": {
    "slug": "cloud-workload-protection",
    "name": "Cloud Workload Protection",
    "eyebrow": "CLOUD SECURITY / CLOUD WORKLOAD PROTECTION",
    "title": "Keep every workload inside a living defense boundary.",
    "accent": "Protect workloads from build pipeline to runtime.",
    "description": "Connect build-time assurance with runtime context so virtual machines, functions and application workloads can be observed and protected through change.",
    "stats": [
      {
        "value": "LIVE",
        "label": "Workload context"
      },
      {
        "value": "BUILD\u2192RUN",
        "label": "Lifecycle"
      },
      {
        "value": "SIGNAL",
        "label": "Telemetry"
      }
    ],
    "model": "workload",
    "narrativeTitle": "Runtime protection starts long before runtime.",
    "narrative": "Code, artifacts, deployment configuration and runtime behavior are parts of one workload story. Security gains context when these stages can be connected rather than reviewed as unrelated tools.",
    "capabilityTitle": "Protection capabilities across the workload lifecycle.",
    "capabilities": [
      {
        "title": "Cloud Workload Protection \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Workload Protection \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Workload Protection \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Workload Protection \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Workload Protection \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Workload Protection \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Follow workload risk from source to execution.",
    "architectureTitle": "A workload protection fabric from pipeline to runtime.",
    "telemetryTitle": "Runtime signals tied back to workload provenance.",
    "workflowTitle": "Build \u2192 inspect \u2192 admit \u2192 observe \u2192 contain.",
    "operationsTitle": "Keep workload defense aligned with release velocity.",
    "principlesTitle": "Workload principles for lifecycle protection.",
    "principles": [
      "Treat cloud workload protection as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Workloads protected with context that survives deployment.",
    "ctaTitle": "Connect workload security from commit to runtime."
  },
  "cloud-infrastructure-security": {
    "slug": "cloud-infrastructure-security",
    "name": "Cloud Infrastructure Security",
    "eyebrow": "CLOUD SECURITY / CLOUD INFRASTRUCTURE SECURITY",
    "title": "Secure the foundations beneath every cloud service.",
    "accent": "Harden the infrastructure layer that cloud services depend on.",
    "description": "Reduce infrastructure risk across compute, storage, networking, management interfaces and privileged operational paths with explicit guardrails.",
    "stats": [
      {
        "value": "LAYERED",
        "label": "Foundation"
      },
      {
        "value": "CONTROL",
        "label": "Guardrails"
      },
      {
        "value": "HARDEN",
        "label": "Objective"
      }
    ],
    "model": "infrastructure",
    "narrativeTitle": "Infrastructure security is the discipline of protecting dependency.",
    "narrative": "Cloud infrastructure is highly programmable. That makes guardrails, ownership and telemetry as important as individual settings because a small change can propagate quickly across dependent services.",
    "capabilityTitle": "Guardrails for the infrastructure control surface.",
    "capabilities": [
      {
        "title": "Cloud Infrastructure Security \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Infrastructure Security \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Infrastructure Security \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Infrastructure Security \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Infrastructure Security \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Infrastructure Security \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Understand the infrastructure paths that carry privilege.",
    "architectureTitle": "A hardened infrastructure control architecture.",
    "telemetryTitle": "Infrastructure telemetry with control-plane context.",
    "workflowTitle": "Inventory \u2192 harden \u2192 guard \u2192 monitor \u2192 recover.",
    "operationsTitle": "Run infrastructure security through controlled change.",
    "principlesTitle": "Infrastructure principles for resilient guardrails.",
    "principles": [
      "Treat cloud infrastructure security as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Infrastructure changes governed by visible security intent.",
    "ctaTitle": "Harden the cloud foundation without slowing delivery."
  },
  "cloud-access-security-broker": {
    "slug": "cloud-access-security-broker",
    "name": "Cloud Access Security Broker (CASB)",
    "eyebrow": "CLOUD SECURITY / CLOUD ACCESS SECURITY BROKER (CASB)",
    "title": "Put policy between people, data and SaaS.",
    "accent": "Control how identities, data and SaaS applications interact.",
    "description": "Bring sanctioned and unsanctioned SaaS usage into a policy layer that can reason about identity, application risk, sensitive information and session context.",
    "stats": [
      {
        "value": "POLICY",
        "label": "Decision layer"
      },
      {
        "value": "SaaS",
        "label": "Coverage"
      },
      {
        "value": "SESSION",
        "label": "Action"
      }
    ],
    "model": "casb",
    "narrativeTitle": "SaaS control needs context at the moment of access.",
    "narrative": "CASB decisions become stronger when application identity, user context, data classification and session behavior can be evaluated together instead of through static allow-or-block lists.",
    "capabilityTitle": "Broker controls for modern SaaS access.",
    "capabilities": [
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Access Security Broker (CASB) \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Observe the SaaS session as a policy surface.",
    "architectureTitle": "A policy mediation architecture for SaaS.",
    "telemetryTitle": "Session telemetry for SaaS access decisions.",
    "workflowTitle": "Discover \u2192 classify \u2192 decide \u2192 enforce \u2192 review.",
    "operationsTitle": "Operate SaaS access with policy and exception discipline.",
    "principlesTitle": "CASB principles for contextual access.",
    "principles": [
      "Treat cloud access security broker (casb) as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "SaaS access decisions grounded in identity and data context.",
    "ctaTitle": "Bring SaaS access under contextual control."
  },
  "cloud-security-posture-management": {
    "slug": "cloud-security-posture-management",
    "name": "Cloud Security Posture Management (CSPM)",
    "eyebrow": "CLOUD SECURITY / CLOUD SECURITY POSTURE MANAGEMENT (CSPM)",
    "title": "Find cloud drift while it is still a configuration.",
    "accent": "Continuously expose configuration drift and cloud control gaps.",
    "description": "Continuously compare cloud resources with intended posture, surface material drift and route findings into accountable remediation workflows.",
    "stats": [
      {
        "value": "DRIFT",
        "label": "Posture state"
      },
      {
        "value": "CONFIG",
        "label": "Signal"
      },
      {
        "value": "FIX",
        "label": "Workflow"
      }
    ],
    "model": "cspm",
    "narrativeTitle": "Posture is the distance between intended and actual cloud state.",
    "narrative": "CSPM should distinguish cosmetic deviations from material exposure. Context such as internet reachability, privilege, resource sensitivity and compensating controls helps teams prioritize what deserves action.",
    "capabilityTitle": "Posture capabilities built around continuous cloud change.",
    "capabilities": [
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Security Posture Management (CSPM) \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Measure configuration drift against intended state.",
    "architectureTitle": "A posture engine built around desired state.",
    "telemetryTitle": "Posture telemetry that records state and drift.",
    "workflowTitle": "Baseline \u2192 detect \u2192 rank \u2192 route \u2192 validate.",
    "operationsTitle": "Make posture remediation part of cloud operations.",
    "principlesTitle": "CSPM principles for actionable posture.",
    "principles": [
      "Treat cloud security posture management (cspm) as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "A posture program focused on meaningful drift and accountable repair.",
    "ctaTitle": "Turn cloud posture into a continuous operating loop."
  },
  "cloud-identity-security": {
    "slug": "cloud-identity-security",
    "name": "Cloud Identity Security",
    "eyebrow": "CLOUD SECURITY / CLOUD IDENTITY SECURITY",
    "title": "Make every cloud permission prove its purpose.",
    "accent": "Make identity the enforceable boundary of cloud access.",
    "description": "Control human and machine identities through least privilege, entitlement visibility, privileged workflows and contextual access decisions.",
    "stats": [
      {
        "value": "IAM",
        "label": "Access boundary"
      },
      {
        "value": "LEAST",
        "label": "Privilege"
      },
      {
        "value": "VERIFY",
        "label": "Decision"
      }
    ],
    "model": "identity",
    "narrativeTitle": "Cloud identity is infrastructure with permissions attached.",
    "narrative": "Identity security focuses on who or what can act, what it can reach, how privilege is granted and whether access remains justified as environments and responsibilities change.",
    "capabilityTitle": "Identity controls for human and machine access.",
    "capabilities": [
      {
        "title": "Cloud Identity Security \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Identity Security \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Identity Security \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Identity Security \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Identity Security \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Identity Security \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Map entitlement paths before they become privilege chains.",
    "architectureTitle": "An identity control plane for cloud privilege.",
    "telemetryTitle": "Identity telemetry that follows privilege use.",
    "workflowTitle": "Inventory \u2192 right-size \u2192 approve \u2192 observe \u2192 recertify.",
    "operationsTitle": "Run identity security as continuous entitlement governance.",
    "principlesTitle": "Identity principles for controlled privilege.",
    "principles": [
      "Treat cloud identity security as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Cloud access that stays proportional to real operational need.",
    "ctaTitle": "Reduce cloud privilege without losing delivery speed."
  },
  "container-security": {
    "slug": "container-security",
    "name": "Container Security",
    "eyebrow": "CLOUD SECURITY / CONTAINER SECURITY",
    "title": "Protect the artifact before protecting the process.",
    "accent": "Secure images, registries and runtime behavior as one lifecycle.",
    "description": "Treat container security as a chain from source and image provenance through registry controls, deployment admission and runtime behavior.",
    "stats": [
      {
        "value": "IMAGE",
        "label": "Supply chain"
      },
      {
        "value": "RUNTIME",
        "label": "Protection"
      },
      {
        "value": "ADMIT",
        "label": "Gate"
      }
    ],
    "model": "container",
    "narrativeTitle": "Containers compress delivery speed\u2014and security decisions.",
    "narrative": "A trusted image can still run with unsafe privileges; a secure runtime can still receive a vulnerable artifact. Container defense connects assurance across the full delivery chain.",
    "capabilityTitle": "Security controls across the container delivery chain.",
    "capabilities": [
      {
        "title": "Container Security \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Container Security \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Container Security \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Container Security \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Container Security \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Container Security \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Inspect the container supply chain as one attack surface.",
    "architectureTitle": "A container assurance architecture.",
    "telemetryTitle": "Container telemetry from registry through runtime.",
    "workflowTitle": "Build \u2192 scan \u2192 sign \u2192 admit \u2192 watch.",
    "operationsTitle": "Keep container controls close to engineering workflows.",
    "principlesTitle": "Container principles for trustworthy delivery.",
    "principles": [
      "Treat container security as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Container delivery with stronger provenance and runtime confidence.",
    "ctaTitle": "Secure the container chain from image to execution."
  },
  "kubernetes-security": {
    "slug": "kubernetes-security",
    "name": "Kubernetes Security",
    "eyebrow": "CLOUD SECURITY / KUBERNETES SECURITY",
    "title": "Turn cluster complexity into enforceable control.",
    "accent": "Protect clusters, workloads and policy across orchestration layers.",
    "description": "Secure orchestration through cluster hardening, workload isolation, admission policy, secrets discipline and observable runtime boundaries.",
    "stats": [
      {
        "value": "CLUSTER",
        "label": "Control scope"
      },
      {
        "value": "POLICY",
        "label": "Enforcement"
      },
      {
        "value": "ISOLATE",
        "label": "Strategy"
      }
    ],
    "model": "kubernetes",
    "narrativeTitle": "Kubernetes security is policy operating at orchestration speed.",
    "narrative": "Cluster security spans the control plane and every workload scheduled beneath it. Namespaces, service accounts, network policy, admission and runtime behavior must reinforce one another.",
    "capabilityTitle": "Controls designed for Kubernetes-native operations.",
    "capabilities": [
      {
        "title": "Kubernetes Security \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Kubernetes Security \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Kubernetes Security \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Kubernetes Security \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Kubernetes Security \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Kubernetes Security \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "See the cluster as a graph of identities and workloads.",
    "architectureTitle": "A Kubernetes security control plane.",
    "telemetryTitle": "Cluster telemetry that preserves workload identity.",
    "workflowTitle": "Harden \u2192 isolate \u2192 admit \u2192 observe \u2192 respond.",
    "operationsTitle": "Operate cluster security without breaking platform velocity.",
    "principlesTitle": "Kubernetes principles for enforceable orchestration.",
    "principles": [
      "Treat kubernetes security as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Clusters with clearer isolation, admission and response boundaries.",
    "ctaTitle": "Make Kubernetes policy part of the platform."
  },
  "cloud-compliance": {
    "slug": "cloud-compliance",
    "name": "Cloud Compliance",
    "eyebrow": "CLOUD SECURITY / CLOUD COMPLIANCE",
    "title": "Make assurance continuous, not calendar-driven.",
    "accent": "Turn cloud controls into traceable evidence and continuous assurance.",
    "description": "Connect technical controls to evidence, ownership and review so cloud compliance reflects the environment that is actually running.",
    "stats": [
      {
        "value": "EVIDENCE",
        "label": "Assurance"
      },
      {
        "value": "TRACE",
        "label": "Evidence"
      },
      {
        "value": "PROVE",
        "label": "Outcome"
      }
    ],
    "model": "compliance",
    "narrativeTitle": "Compliance becomes useful when evidence follows change.",
    "narrative": "Evidence should be generated as close to the control as practical. That reduces manual collection and makes it easier to understand whether a requirement is continuously satisfied or only periodically sampled.",
    "capabilityTitle": "Compliance capabilities that connect controls to evidence.",
    "capabilities": [
      {
        "title": "Cloud Compliance \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Cloud Compliance \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Cloud Compliance \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Cloud Compliance \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Cloud Compliance \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Cloud Compliance \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Connect requirements to controls and live evidence.",
    "architectureTitle": "An evidence architecture for continuous assurance.",
    "telemetryTitle": "Evidence telemetry that records control state over time.",
    "workflowTitle": "Map \u2192 implement \u2192 collect \u2192 review \u2192 attest.",
    "operationsTitle": "Keep compliance evidence current as cloud state changes.",
    "principlesTitle": "Compliance principles for defensible assurance.",
    "principles": [
      "Treat cloud compliance as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Assurance that follows technical reality instead of static snapshots.",
    "ctaTitle": "Make cloud evidence continuous and explainable."
  },
  "multi-cloud-security": {
    "slug": "multi-cloud-security",
    "name": "Multi-Cloud Security",
    "eyebrow": "CLOUD SECURITY / MULTI-CLOUD SECURITY",
    "title": "Operate many clouds without multiplying blind spots.",
    "accent": "Unify security visibility without flattening cloud-specific context.",
    "description": "Create a shared security operating layer while preserving the native identity, network, logging and policy semantics of each cloud.",
    "stats": [
      {
        "value": "UNIFIED",
        "label": "Visibility"
      },
      {
        "value": "NATIVE",
        "label": "Context"
      },
      {
        "value": "CORRELATE",
        "label": "Operations"
      }
    ],
    "model": "multicloud",
    "narrativeTitle": "Multi-cloud security needs consistency without pretending every cloud is identical.",
    "narrative": "A shared operating model can normalize risk and workflow while cloud-native controls continue to enforce policy where they have the richest context.",
    "capabilityTitle": "Security capabilities for heterogeneous cloud estates.",
    "capabilities": [
      {
        "title": "Multi-Cloud Security \u2014 Discovery",
        "text": "Establish authoritative scope and surface the assets, identities and relationships that matter to this security domain."
      },
      {
        "title": "Multi-Cloud Security \u2014 Context",
        "text": "Enrich technical findings with ownership, sensitivity, reachability and operational purpose before prioritization."
      },
      {
        "title": "Multi-Cloud Security \u2014 Control",
        "text": "Define enforceable guardrails with clear decision points, exceptions and accountable owners."
      },
      {
        "title": "Multi-Cloud Security \u2014 Telemetry",
        "text": "Collect signals that explain state changes and make investigation possible without reconstructing the environment manually."
      },
      {
        "title": "Multi-Cloud Security \u2014 Response",
        "text": "Route meaningful findings into remediation paths that preserve evidence and operational context."
      },
      {
        "title": "Multi-Cloud Security \u2014 Assurance",
        "text": "Measure whether controls continue to operate as intended as cloud resources, identities and applications change."
      }
    ],
    "surfaceTitle": "Correlate exposure across cloud-specific control planes.",
    "architectureTitle": "A federated security architecture for multiple clouds.",
    "telemetryTitle": "Cross-cloud telemetry without losing native meaning.",
    "workflowTitle": "Normalize \u2192 correlate \u2192 govern \u2192 enforce \u2192 learn.",
    "operationsTitle": "Coordinate cloud security through one risk language.",
    "principlesTitle": "Multi-cloud principles for coherent security.",
    "principles": [
      "Treat multi-cloud security as an operating discipline, not a one-time project.",
      "Prefer explicit ownership over anonymous queues.",
      "Prioritize context-rich risk over raw finding volume.",
      "Automate repeatable controls while keeping exceptions visible.",
      "Preserve evidence for decisions that change security state.",
      "Design telemetry around questions responders must answer.",
      "Verify remediation instead of assuming closure.",
      "Keep policy understandable enough for engineering teams to act on it."
    ],
    "outcomesTitle": "Consistent risk operations across clouds without erasing native controls.",
    "ctaTitle": "Create one security operating model across many clouds."
  }
};
