export type AISection = {
  title: string;
  description: string;
  points: readonly string[];
};

export type AIService = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  sections: readonly AISection[];
  sourceSections?: readonly string[];
};

export const aiServices = {
  "artificial-intelligence": {
    title: "Artificial Intelligence Solutions",
    eyebrow: "Enterprise AI Engineering",
    headline: "Turn intelligence into your next business advantage.",
    description: "Design, build and deploy practical AI solutions that connect your data, people and operations. Explore the full range of AI capabilities engineered around real business outcomes.",
    intro: "From intelligent automation to predictive systems, build an AI foundation that is secure, scalable and ready for production.",
    sections: [
      {
        title: "AI strategy and discovery",
        description: "Identify high-value opportunities, assess data readiness and define a practical roadmap from experimentation to measurable business value.",
        points: [
          "Use-case prioritisation",
          "Data and infrastructure assessment",
          "Responsible deployment roadmap",
        ],
      },
      {
        title: "Intelligent systems",
        description: "Connect models, business data and applications to create systems that can understand context and support better decisions.",
        points: [
          "Machine learning and predictive analytics",
          "Generative AI and enterprise knowledge",
          "AI agents and conversational experiences",
        ],
      },
      {
        title: "Production-ready engineering",
        description: "Move beyond prototypes with reliable deployment, monitoring, governance and continuous improvement.",
        points: [
          "Scalable architecture",
          "Model evaluation and monitoring",
          "Security, privacy and governance",
        ],
      },
    ],
  },
  "recommendation-systems": {
    title: "AI Recommendation Systems",
    eyebrow: "Personalisation Intelligence",
    headline: "Make every interaction more relevant.",
    description: "Build recommendation engines that understand behaviour, preferences and context to rank products, content, services and next-best actions for every user.",
    intro: "Turn customer signals into relevant experiences across digital commerce, media, marketplaces and enterprise platforms.",
    sections: [
      {
        title: "Personalisation data foundation",
        description: "Unify behavioural, transactional and contextual signals to create a reliable view of user intent.",
        points: [
          "Event and profile data",
          "Preference and context modelling",
          "Real-time signal processing",
        ],
      },
      {
        title: "Recommendation and ranking engines",
        description: "Select and rank the most relevant items using collaborative, content-based and hybrid approaches.",
        points: [
          "Candidate generation",
          "Relevance scoring and ranking",
          "Cold-start strategies",
        ],
      },
      {
        title: "Continuous optimisation",
        description: "Measure recommendation quality and improve relevance through experimentation and feedback.",
        points: [
          "A/B testing",
          "Conversion and engagement analytics",
          "Model monitoring and retraining",
        ],
      },
    ],
    sourceSections: [
      "RecommendationHero",
      "PersonalizationStream",
      "RecommendationEngine",
      "TasteIntelligence",
      "RecommendationCapabilities",
      "RankingArchitecture",
      "RecommendationCommandCenter",
      "RecommendationUseCases",
      "RecommendationImpact",
      "RecommendationCTA",
    ],
  },
  "deep-learning": {
    title: "Deep Learning Solutions",
    eyebrow: "Neural Network Engineering",
    headline: "Build intelligence that learns from complexity.",
    description: "Develop deep learning systems that turn complex data into intelligent products, predictive capabilities and production-ready applications.",
    intro: "Engineer neural architectures for high-value tasks where patterns, scale and accuracy matter.",
    sections: [
      {
        title: "Neural architecture design",
        description: "Choose and adapt neural network architectures to the data, task and operating constraints.",
        points: [
          "CNN and vision models",
          "Sequence and transformer models",
          "Representation learning",
        ],
      },
      {
        title: "Training and evaluation",
        description: "Build robust training workflows with careful validation, optimisation and performance analysis.",
        points: [
          "Data preparation and augmentation",
          "Training and hyperparameter tuning",
          "Evaluation and error analysis",
        ],
      },
      {
        title: "Deployment and lifecycle",
        description: "Operationalise models with efficient inference, monitoring and controlled updates.",
        points: [
          "Inference optimisation",
          "Model serving",
          "Drift monitoring and retraining",
        ],
      },
    ],
    sourceSections: [
      "DeepLearningHero",
      "LearningArchitecture",
      "NeuralCapabilities",
      "DeepLearningWorkflow",
      "IndustryApplications",
      "ModelPerformance",
      "NeuralCommandCenter",
      "DeepLearningImpact",
      "DeepLearningCTA",
    ],
  },
  "generative-ai": {
    title: "Generative AI Development",
    eyebrow: "Enterprise Generative Intelligence",
    headline: "Transform knowledge into useful AI experiences.",
    description: "Build secure generative AI systems, enterprise copilots, RAG platforms and multimodal applications engineered around your business.",
    intro: "Move generative AI from experimentation into production with trusted data, grounded responses and measurable workflows.",
    sections: [
      {
        title: "Enterprise knowledge and RAG",
        description: "Connect language models to approved business knowledge so responses can be grounded in relevant information.",
        points: [
          "Document ingestion and indexing",
          "Retrieval-augmented generation",
          "Source-aware responses",
        ],
      },
      {
        title: "LLM applications and copilots",
        description: "Create assistants that help teams search, summarise, draft and work with enterprise systems.",
        points: [
          "Custom copilots",
          "Prompt and context engineering",
          "Tool and API integrations",
        ],
      },
      {
        title: "Governance and evaluation",
        description: "Make generative experiences safer and more dependable through testing, controls and monitoring.",
        points: [
          "Quality and hallucination evaluation",
          "Access and data controls",
          "Usage and performance monitoring",
        ],
      },
    ],
    sourceSections: [
      "GenerativeAIHero",
      "AICommandCenter",
      "GenerativeCapabilities",
      "ModelEcosystem",
      "AIWorkflow",
      "EnterpriseKnowledge",
      "ResponsibleAI",
      "AIUseCases",
      "GenerativeAIImpact",
      "GenerativeAICTA",
    ],
  },
  "ai-agents": {
    title: "AI Agent Development",
    eyebrow: "Autonomous Agentic Systems",
    headline: "Build AI that can reason, coordinate and act.",
    description: "Develop autonomous AI agents that understand objectives, reason across enterprise context, collaborate with specialist agents and execute complex multi-step work.",
    intro: "Connect models, tools and business workflows with clear permissions, observability and human oversight.",
    sections: [
      {
        title: "Agent architecture",
        description: "Design agents with clear goals, bounded responsibilities, memory and tool access.",
        points: [
          "Task planning",
          "Context and memory",
          "Tool permissions",
        ],
      },
      {
        title: "Multi-agent orchestration",
        description: "Coordinate specialist agents to complete complex workflows with reliable hand-offs.",
        points: [
          "Role-based agents",
          "Workflow orchestration",
          "Shared state and collaboration",
        ],
      },
      {
        title: "Enterprise execution",
        description: "Integrate agents with business systems while keeping actions observable and controlled.",
        points: [
          "API and application integrations",
          "Human approval checkpoints",
          "Tracing and evaluation",
        ],
      },
    ],
    sourceSections: [
      "AIAgentsHero",
      "AgentRuntime",
      "MultiAgentNetwork",
      "AgentCapabilities",
      "AgentArchitecture",
      "AgentVisualExperience",
      "AgentCommandCenter",
      "EnterpriseAgents",
      "AgentImpact",
      "AIAgentsCTA",
    ],
  },
  "ai-chatbots": {
    title: "AI Chatbot Development",
    eyebrow: "Conversational AI",
    headline: "Create conversations that move work forward.",
    description: "Build intelligent chatbots that understand user intent, answer with relevant context and connect conversations to your business systems.",
    intro: "Deliver consistent support and self-service experiences across web, messaging and internal channels.",
    sections: [
      {
        title: "Conversation intelligence",
        description: "Understand intent, entities and conversation context to deliver useful responses.",
        points: [
          "Intent and entity recognition",
          "Context-aware dialogue",
          "Knowledge-grounded answers",
        ],
      },
      {
        title: "Omnichannel experiences",
        description: "Make support and assistance available across the channels your customers already use.",
        points: [
          "Website and app chat",
          "Messaging channel integrations",
          "Consistent conversation history",
        ],
      },
      {
        title: "Business system integrations",
        description: "Connect chat experiences to workflows, CRM, ticketing and approved business data.",
        points: [
          "CRM and helpdesk integration",
          "Escalation to human teams",
          "Conversation analytics",
        ],
      },
    ],
    sourceSections: [
      "AIChatbotHero",
      "ConversationEngine",
      "IntelligenceLayer",
      "ChatbotCapabilities",
      "OmnichannelExperience",
      "EnterpriseIntegrations",
      "ConversationCommandCenter",
      "ChatbotImpact",
      "AIChatbotCTA",
    ],
  },
  "ai-model-development": {
    title: "Custom AI Model Development",
    eyebrow: "Model Research and Engineering",
    headline: "Engineer models around your business data.",
    description: "Design, train and deploy custom AI models for specialised business problems, domain-specific data and production environments.",
    intro: "Build the right model lifecycle—from data preparation and architecture selection to deployment and ongoing evaluation.",
    sections: [
      {
        title: "Problem and data definition",
        description: "Translate business requirements into measurable model objectives and usable training datasets.",
        points: [
          "Success metrics",
          "Data quality assessment",
          "Training data preparation",
        ],
      },
      {
        title: "Model design and training",
        description: "Select, adapt and train models for your use case and operational constraints.",
        points: [
          "Architecture selection",
          "Fine-tuning and optimisation",
          "Validation and benchmarking",
        ],
      },
      {
        title: "MLOps and deployment",
        description: "Create repeatable model releases with monitoring, versioning and controlled rollbacks.",
        points: [
          "Model registry and versioning",
          "CI/CD for machine learning",
          "Production monitoring",
        ],
      },
    ],
    sourceSections: [
      "AIModelHero",
      "LiveTrainingConsole",
      "ModelDevelopmentPipeline",
      "ModelArchitectureLab",
      "ModelCapabilities",
      "TrainingIntelligence",
      "ModelCommandCenter",
      "MLOpsArchitecture",
      "ModelImpact",
      "AIModelCTA",
    ],
  },
  "computer-vision": {
    title: "Computer Vision Solutions",
    eyebrow: "Visual Intelligence",
    headline: "Help systems see, understand and respond.",
    description: "Build computer vision applications that interpret images and video for inspection, automation, safety and operational intelligence.",
    intro: "Turn visual data into structured insights with reliable pipelines designed for real-world conditions.",
    sections: [
      {
        title: "Visual data pipeline",
        description: "Prepare and manage image and video data for accurate model development.",
        points: [
          "Image annotation",
          "Dataset quality and balance",
          "Video and stream ingestion",
        ],
      },
      {
        title: "Perception and recognition",
        description: "Develop models to detect, classify, segment and track objects or visual events.",
        points: [
          "Object detection",
          "Image classification and segmentation",
          "Tracking and anomaly detection",
        ],
      },
      {
        title: "Operational deployment",
        description: "Integrate vision models into edge, cloud and enterprise workflows.",
        points: [
          "Edge inference",
          "Alert and workflow integration",
          "Performance monitoring",
        ],
      },
    ],
    sourceSections: [
      "ComputerVisionHero",
      "VisionPipeline",
      "VisionCapabilities",
      "PerceptionLab",
      "IndustryVision",
      "VisionCommandCenter",
      "VisionArchitecture",
      "VisionImpact",
      "ComputerVisionCTA",
    ],
  },
  "nlp": {
    title: "Natural Language Processing",
    eyebrow: "Language Intelligence",
    headline: "Make business information easier to understand.",
    description: "Build NLP systems that extract meaning from text, classify information, discover relationships and power intelligent language experiences.",
    intro: "Convert unstructured language into useful signals for search, automation, analytics and customer experiences.",
    sections: [
      {
        title: "Language understanding",
        description: "Interpret text with models that recognise intent, entities, sentiment and meaning.",
        points: [
          "Text classification",
          "Named entity recognition",
          "Sentiment and intent analysis",
        ],
      },
      {
        title: "Semantic search and extraction",
        description: "Find relevant information and structure knowledge from large document collections.",
        points: [
          "Semantic search",
          "Information extraction",
          "Document understanding",
        ],
      },
      {
        title: "Language workflow integration",
        description: "Connect language intelligence to applications, analytics and business processes.",
        points: [
          "Summarisation and routing",
          "Knowledge discovery",
          "API integration and monitoring",
        ],
      },
    ],
    sourceSections: [
      "NLPHero",
      "LanguagePipeline",
      "NLPCapabilities",
      "SemanticGraph",
      "NLPUseCases",
      "LanguageCommandCenter",
      "NLPImpact",
      "NLPCTA",
    ],
  },
  "ai-consulting": {
    title: "AI Consulting and Transformation",
    eyebrow: "AI Strategy and Advisory",
    headline: "Turn AI ambition into an executable roadmap.",
    description: "Align AI strategy, operating models, architecture and governance with business priorities through a practical transformation programme.",
    intro: "Build a clear path from opportunity discovery to responsible adoption and long-term operating capability.",
    sections: [
      {
        title: "AI opportunity assessment",
        description: "Evaluate business processes, data readiness and potential value to prioritise the right initiatives.",
        points: [
          "Use-case discovery",
          "Feasibility and value assessment",
          "Readiness review",
        ],
      },
      {
        title: "Transformation roadmap",
        description: "Define a phased plan covering people, platforms, data, delivery and measurable outcomes.",
        points: [
          "Prioritised initiatives",
          "Target architecture",
          "Delivery milestones",
        ],
      },
      {
        title: "Governance and operating model",
        description: "Establish the controls and teams needed to scale AI responsibly.",
        points: [
          "AI policies and risk controls",
          "Roles and accountability",
          "Adoption and measurement",
        ],
      },
    ],
    sourceSections: [
      "AIConsultingHero",
      "AIDiagnostic",
      "ConsultingPillars",
      "TransformationRoadmap",
      "AIMaturityMatrix",
      "AIGovernance",
      "AIOperatingModel",
      "ConsultingEngagement",
      "AIConsultingImpact",
      "AIConsultingCTA",
    ],
  },
  "responsible-ai": {
    title: "Responsible AI and Governance",
    eyebrow: "Trustworthy AI Systems",
    headline: "Build AI people can understand and trust.",
    description: "Establish responsible AI practices across model development and deployment with governance, explainability, risk management and human oversight.",
    intro: "Integrate trust and accountability into the AI lifecycle—not as an afterthought, but as part of system design.",
    sections: [
      {
        title: "AI risk and governance",
        description: "Identify and manage risks across data, models, users and operational environments.",
        points: [
          "Risk classification",
          "Policies and controls",
          "Audit-ready documentation",
        ],
      },
      {
        title: "Transparency and explainability",
        description: "Make model behaviour easier to evaluate and communicate to stakeholders.",
        points: [
          "Explainability methods",
          "Model and data documentation",
          "Performance reporting",
        ],
      },
      {
        title: "Human oversight and monitoring",
        description: "Keep consequential decisions reviewable and systems monitored after deployment.",
        points: [
          "Human-in-the-loop workflows",
          "Incident response",
          "Ongoing monitoring",
        ],
      },
    ],
    sourceSections: [
      "ResponsibleAIHero",
      "GovernanceBento",
      "LivePolicyTerminal",
      "ResponsiblePillars",
      "RiskIntelligence",
      "ExplainabilityLab",
      "HumanOversight",
      "GovernanceCommandCenter",
      "ResponsibleAIProcess",
      "ResponsibleAICTA",
    ],
  },
  "ai-automation": {
    title: "AI Automation Solutions",
    eyebrow: "Intelligent Workflow Automation",
    headline: "Connect decisions to action—automatically.",
    description: "Automate repetitive and knowledge-intensive business workflows by combining AI models, business rules, APIs and human approval.",
    intro: "Reduce manual hand-offs and improve operational consistency with automation designed around your existing processes.",
    sections: [
      {
        title: "Workflow discovery and design",
        description: "Map processes, exceptions and decision points before selecting the right automation approach.",
        points: [
          "Process mapping",
          "Automation opportunity analysis",
          "Exception handling",
        ],
      },
      {
        title: "AI-powered orchestration",
        description: "Connect models and tools to interpret inputs and move work across systems.",
        points: [
          "Document and data processing",
          "Agent and API orchestration",
          "Business rule integration",
        ],
      },
      {
        title: "Control and optimisation",
        description: "Make automated workflows measurable, secure and easier to improve.",
        points: [
          "Human approval steps",
          "Audit trails and alerts",
          "Workflow performance analytics",
        ],
      },
    ],
    sourceSections: [
      "AIAutomationHero",
      "LiveAutomationTerminal",
      "AutomationNetwork",
      "AutomationCapabilities",
      "WorkflowEngine",
      "AutomationCommandCenter",
      "EnterpriseAutomation",
      "AutomationImpact",
      "AIAutomationCTA",
    ],
  },
  "machine-learning": {
    title: "Machine Learning Development",
    eyebrow: "Applied Machine Learning",
    headline: "Turn your data into better decisions.",
    description: "Build machine learning solutions for prediction, classification, recommendation and intelligent automation—from data pipelines to production MLOps.",
    intro: "Create dependable machine learning systems that learn from data and improve measurable business outcomes.",
    sections: [
      {
        title: "Data intelligence pipeline",
        description: "Prepare reliable datasets and features for model development and repeatable training.",
        points: [
          "Data ingestion and validation",
          "Feature engineering",
          "Dataset versioning",
        ],
      },
      {
        title: "Model development and validation",
        description: "Train and compare suitable algorithms against clear business metrics.",
        points: [
          "Classification and regression",
          "Model selection and tuning",
          "Validation and explainability",
        ],
      },
      {
        title: "MLOps and continuous learning",
        description: "Deploy, monitor and maintain models as data and business conditions change.",
        points: [
          "Model serving",
          "Drift and quality monitoring",
          "Retraining lifecycle",
        ],
      },
    ],
    sourceSections: [
      "MachineLearningHero",
      "ModelTrainingLab",
      "MLCapabilities",
      "DataIntelligencePipeline",
      "ModelEcosystem",
      "MLOpsLifecycle",
      "MLUseCases",
      "MLPerformance",
      "MachineLearningCTA",
    ],
  },
  "predictive-ai": {
    title: "Predictive AI Solutions",
    eyebrow: "Forecasting and Decision Intelligence",
    headline: "See what may happen next—and prepare.",
    description: "Develop predictive AI systems that forecast demand, identify risk, anticipate customer behaviour and support proactive business decisions.",
    intro: "Combine historical data, contextual signals and model evaluation to turn uncertainty into actionable forecasts.",
    sections: [
      {
        title: "Forecasting foundations",
        description: "Prepare time-series and business data for robust forecasting and scenario analysis.",
        points: [
          "Historical data preparation",
          "Seasonality and trend analysis",
          "External signal integration",
        ],
      },
      {
        title: "Predictive modelling",
        description: "Build models that estimate outcomes, identify anomalies and quantify risk.",
        points: [
          "Demand and sales forecasting",
          "Churn and risk prediction",
          "Anomaly detection",
        ],
      },
      {
        title: "Decision intelligence",
        description: "Connect forecasts to dashboards, alerts and operational planning workflows.",
        points: [
          "Scenario analysis",
          "Forecast monitoring",
          "Decision support integration",
        ],
      },
    ],
    sourceSections: [
      "PredictiveAIHero",
      "FutureSignals",
      "ForecastEngine",
      "PredictiveCapabilities",
      "ScenarioSimulator",
      "PredictiveCommandCenter",
      "IndustryForecasts",
      "PredictiveImpact",
      "PredictiveAICTA",
    ],
  },
} as const satisfies Record<string, Omit<AIService, "slug">>;

export type AIServiceSlug = keyof typeof aiServices;

export function getAIService(slug: AIServiceSlug): AIService {
  return { slug, ...aiServices[slug] };
}

export const aiServiceLinks = [
  { slug: "recommendation-systems", title: "AI Recommendation Systems", description: "Build recommendation engines that understand behaviour, preferences and context to rank products, content, services and next-best actions for every user." },
  { slug: "deep-learning", title: "Deep Learning Solutions", description: "Develop deep learning systems that turn complex data into intelligent products, predictive capabilities and production-ready applications." },
  { slug: "generative-ai", title: "Generative AI Development", description: "Build secure generative AI systems, enterprise copilots, RAG platforms and multimodal applications engineered around your business." },
  { slug: "ai-agents", title: "AI Agent Development", description: "Develop autonomous AI agents that understand objectives, reason across enterprise context, collaborate with specialist agents and execute complex multi-step work." },
  { slug: "ai-chatbots", title: "AI Chatbot Development", description: "Build intelligent chatbots that understand user intent, answer with relevant context and connect conversations to your business systems." },
  { slug: "ai-model-development", title: "Custom AI Model Development", description: "Design, train and deploy custom AI models for specialised business problems, domain-specific data and production environments." },
  { slug: "computer-vision", title: "Computer Vision Solutions", description: "Build computer vision applications that interpret images and video for inspection, automation, safety and operational intelligence." },
  { slug: "nlp", title: "Natural Language Processing", description: "Build NLP systems that extract meaning from text, classify information, discover relationships and power intelligent language experiences." },
  { slug: "ai-consulting", title: "AI Consulting and Transformation", description: "Align AI strategy, operating models, architecture and governance with business priorities through a practical transformation programme." },
  { slug: "responsible-ai", title: "Responsible AI and Governance", description: "Establish responsible AI practices across model development and deployment with governance, explainability, risk management and human oversight." },
  { slug: "ai-automation", title: "AI Automation Solutions", description: "Automate repetitive and knowledge-intensive business workflows by combining AI models, business rules, APIs and human approval." },
  { slug: "machine-learning", title: "Machine Learning Development", description: "Build machine learning solutions for prediction, classification, recommendation and intelligent automation—from data pipelines to production MLOps." },
  { slug: "predictive-ai", title: "Predictive AI Solutions", description: "Develop predictive AI systems that forecast demand, identify risk, anticipate customer behaviour and support proactive business decisions." },
] as const;
