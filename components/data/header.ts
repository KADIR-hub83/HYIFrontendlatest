// import { DynamicRoutes } from "@/lib/services/api";

// // Type/Interface declaration
// interface LinkItem {
//   label: string;
//   href: string;
//   text?: string;
// }

// interface headerDataProps {
//   nav: {
//     value: string;
//     title: string;
//     heading?: string;
//     paragraph?: string;
//     outerPadding?: string;
//     links?: LinkItem[];
//     linkTo?: string;
//   }[];
// }

// export const getTechnologiesSubMenuItems = (dynamicLinks: DynamicRoutes[]) => {
//   return {
//     heading: "Technologies",
//     paragraph:
//       "Quickly find the right professionals to grow your team anytime, anywhere.",
//     gridCol: "grid-cols-2",
//     links: dynamicLinks.map((item: { mainTitle: string; slug: string }) => ({
//       label: item.mainTitle,
//       href: `/technologies/${item.slug}`,
//       text: "",
//     })),
//   };
// };

// export const getIndustriesSubMenuItems = (
//   dynamicLinks: DynamicRoutes[]
// ) => {
//   const firstIndustry = dynamicLinks[0];

//   return {
//     heading: "Industries",
//     headingHref: firstIndustry
//       ? `/industries/${firstIndustry.slug}`
//       : undefined,
//     paragraph:
//       "Focusing on the global industries we serve to accelerate progress and unlock opportunities.",
//     gridCol: "grid-cols-2",
//     links: dynamicLinks.map((item) => ({
//       label: item.mainTitle,
//       href: `/industries/${item.slug}`,
//       text: "",
//     })),
//   };
// };

// export const headerData: headerDataProps = {
//   nav: [
//     {
//       value: "a",
//       title: "For Companies",
//       heading: "Hire Top Remote Talent",
//       paragraph:
//         "Access a global pool of highly skilled professionals tailored to your business needs. Leverage our streamlined hiring process to find, vet, and onboard talent quickly. Scale your team efficiently while reducing costs and maintaining top-quality output.",
//       outerPadding: "large",
//     },
//     {
//       value: "b",
//       title: "For Talents",
//       heading: "Work With Top Companies",
//       paragraph:
//         "Collaborate with leading global enterprises that value innovation and excellence. Gain exposure to industry best practices, cutting-edge technology, and high-impact projects. Build lasting professional relationships that open doors to limitless opportunities.",
//       outerPadding: "large",
//       links: [
//         {
//           label: "Job Opportunities",
//           text: "Explore a wide range of roles across top companies.",
//           href: "https://va.hyi.ai/talent-login",
//         },
//         {
//           label: "How to get hired",
//           text: "Learn strategies to land your next role with confidence.",
//           href: "/get-hired",
//         },
//         {
//           label: "Resume Builder",
//           text: "Craft a standout resume tailored to your dream job.",
//           href: "/resume-builder",
//         },
//         {
//           label: "Mock Interview",
//           text: "Simulate interviews and get feedback to improve.",
//           href: "https://va.hyi.ai/talent-login",
//         },
//         {
//           label: "Talent Support",
//           text: "Get help from experts whenever you're stuck.",
//           href: "/talent/support",
//         },
//         {
//           label: "Talent Resource",
//           text: "Access blogs, tools, and guides every developer needs.",
//           href: "/talent/resource",
//         },
//         // {
//         //   label: "Mock Test",
//         //   text: "Practice with industry tests to sharpen your skills.",
//         //   href: "https://va.hyi.ai/talent-login",
//         // },
//       ],
//     },
//     // {
//     //   value: "c",
//     //   title: "For Enterprises & Startups",
//     //   linkTo: "/plan/enterprise-and-startup",
//     // },
//     {
//       value: "d",
//       title: "Integrate AI",
//       heading: "AI Integration",
//       paragraph:
//         "Seamlessly embed artificial intelligence into your workflows to enhance efficiency, accuracy, and decision-making. Leverage data-driven insights and automation to transform business operations. Unlock new opportunities by aligning AI capabilities with your strategic goals.",
//       outerPadding: "large",
//       links: [
//         {
//           label: "KPI & KRA",
//           text: "Automate performance mapping using AI to ensuring accurate goal alignment.",
//           href: "/integrate-AI/KPI&KRA",
//         },
//         {
//           label: "Price Tracking",
//           text: "At HYI.AI, we leverage cutting-edge AI to simplify and optimize talent selection. ",
//           href: "/integrate-AI/price-tracking",
//         },
//         {
//           label: "Strategy & Planning",
//           text: "Drive measurable value through strategic AI adoption .",
//           href: "/integrate-AI/strategy&planning",
//         },
//         {
//           label: "Project Tracking",
//           text: "Tracking tool that delivers real-time updates across all stages of your project. ",
//           href: "/integrate-AI/project-tracking",
//         },
//         {
//           label: "Talent Matching",
//           text: "Leverage ML to deliver tailored recommendations based on your hiring patterns.",
//           href: "/integrate-AI/talent-matching",
//         },
//       ],
//     },
//     {
//       value: "e",
//       title: "Consulting &  Solutions",
//       heading: "Consulting &  Solutions",
//       paragraph:
//         "We provide expert guidance and end-to-end solutions to help businesses harness the power of technology and AI. Our approach combines strategic consulting with innovative tools to address complex challenges and unlock growth opportunities. From planning to execution, we deliver tailored strategies that drive measurable results and long-term success.",
//       outerPadding: "large",
//       links: [],
//     },
//     {
//       value: "f",
//       title: "AGI Training & Certification",
//       heading: "",
//       linkTo: "/agi",
//     },
//     {
//       value: "e",
//       title: "GCC",
//       heading: "Global Capability Center",
//       paragraph:
//         "Build and scale a fully managed offshore team without the complexity, cost, or delays.",
//       outerPadding: "medium",

//       links: [
//         {
//           label: "GCC End To End Solution",
//           text: "",
//           href: "/gcc",
//         },
//         {
//           label: "GCC Talent Pool",
//           text: "",
//           href: "/gcc/managed-talent-pool",
//         },
//         {
//           label: "GCC Service",
//           text: "",
//           href: "/gcc/service",
//         },
//         {
//           label: "BOT GCC Model",
//           text: "",
//           href: "/gcc/model",
//         },
//         {
//           label: "Enterprise Plan",
//           text: "",
//           href: "/enterprise-plan",
//         },
//         {
//           label: "Startup Plan",
//           text: "",
//           href: "/startup-plan",
//         },
//       ],
//     },
//   ],
// };








































import { DynamicRoutes } from "@/lib/services/api";

// ========================
// Types
// ========================

interface LinkItem {
  label: string;
  href: string;
  text?: string;
  children?: LinkItem[];
}

interface HeaderDataProps {
  nav: {
    value: string;
    title: string;
    heading?: string;
    paragraph?: string;
    outerPadding?: string;
    links?: LinkItem[];
    linkTo?: string;
  }[];
}

// ========================
// Technologies Dynamic Menu
// ========================

export const getTechnologiesSubMenuItems = (
  dynamicLinks: DynamicRoutes[]
) => {
  return {
    heading: "Technologies",
    paragraph:
      "Explore technologies and solutions designed to accelerate digital transformation.",
    gridCol: "grid-cols-2",

    links: dynamicLinks.map(
      (item: { mainTitle: string; slug: string }) => ({
        label: item.mainTitle,
        href: `/technologies/${item.slug}`,
        text: "",
      })
    ),
  };
};

// ========================
// Industries Dynamic Menu
// ========================

export const getIndustriesSubMenuItems = (
  dynamicLinks: DynamicRoutes[]
) => {
  const firstIndustry = dynamicLinks[0];

  return {
    heading: "Industries",

    headingHref: firstIndustry
      ? `/industries/${firstIndustry.slug}`
      : undefined,

    paragraph:
      "Explore industry-focused technology solutions designed to accelerate growth.",

    gridCol: "grid-cols-2",

    links: dynamicLinks.map((item) => ({
      label: item.mainTitle,
      href: `/industries/${item.slug}`,
      text: "",
    })),
  };
};

// ======================================================
// HEADER MENU
// ======================================================

export const headerData: HeaderDataProps = {
  nav: [

    // ==================================================
    // 1. HIRE TALENT
    // ==================================================

    {
      value: "hire-talent",
      title: "Hire Talent",
      heading: "Hire Talent",
      paragraph:
        "Build high-performing teams with skilled professionals tailored to your business requirements.",
      outerPadding: "large",

      links: [
        {
          label: "Hire Developer",
          href: "/hire-developer",
          text: "",
        },
        {
          label: "Hire Designer",
          href: "/hire-designer",
          text: "",
        },
        {
          label: "Project Manager",
          href: "/project-manager",
          text: "",
        },
        {
          label: "Product Designer",
          href: "/product-designer",
          text: "",
        },
        {
          label: "Hire Finance Consultant",
          href: "/hire-finance-consultant",
          text: "",
        },
        {
          label: "Hire CXO",
          href: "/hire-cxo",
          text: "",
        },
        {
          label: "Build Your Team",
          href: "/build-your-team",
          text: "",
        },
      ],
    },

    // ==================================================
    // 2. TECHNOLOGY SOLUTIONS
    // ==================================================

   {
  value: "technology-solutions",
  title: "Technology Solutions",
  heading: "Technology Solutions",
  paragraph:
    "Modern technology solutions designed to transform operations, improve efficiency and accelerate business growth.",
  outerPadding: "large",

  links: [
    {
      label: "Application Development",
      href: "/technology-solutions/application-development",
      text: "",
      children: [
        {
          label: "Web Application Development",
          href: "/technology-solutions/application-development/web-application-development",
        },
        {
          label: "Mobile App Development",
          href: "/technology-solutions/application-development/mobile-app-development",
        },
        {
          label: "Enterprise Application Development",
          href: "/technology-solutions/application-development/enterprise-application-development",
        },
        {
          label: "Custom Software Development",
          href: "/technology-solutions/application-development/custom-software-development",
        },
        {
          label: "SaaS Application Development",
          href: "/technology-solutions/application-development/saas-application-development",
        },
        {
          label: "API Development & Integration",
          href: "/technology-solutions/application-development/api-development-integration",
        },
        {
          label: "UI/UX Development",
          href: "/technology-solutions/application-development/ui-ux-development",
        },
        {
          label: "Application Modernization",
          href: "/technology-solutions/application-development/application-modernization",
        },
        {
          label: "Microservices Development",
          href: "/technology-solutions/application-development/microservices-development",
        },
        {
          label: "Quality Assurance & Testing",
          href: "/technology-solutions/application-development/quality-assurance-testing",
        },
        {
          label: "DevOps & CI/CD",
          href: "/technology-solutions/application-development/devops-ci-cd",
        },
        {
          label: "Application Maintenance & Support",
          href: "/technology-solutions/application-development/application-maintenance-support",
        },
      ],
    },
    {
  label: "Global Capability Center (GCC)",
  href: "/gcc",
  text: "",
  children: [
    {
      label: "Technology & Engineering Center",
      href: "/gcc/technology-engineering-center",
    },
    {
      label: "Business Process Services (BPS)",
      href: "/gcc/business-process-services",
    },
    {
      label: "GCC Strategy & Advisory",
      href: "/gcc/strategy-advisory",
    },
    {
      label: "Entity Setup & Expansion Support",
      href: "/gcc/entity-setup-expansion",
    },
    {
      label: "Agile Talent and Workforce Solutions",
      href: "/gcc/managed-talent-pool",
    },
    {
      label: "GCC BOT (Build, Operate, Transfer) Model",
      href: "/gcc/model",
    },
    {
      label: "GCC Operations & Managed Services",
      href: "/gcc/operations-managed-services",
    },
    {
      label: "AI & Data Analytics Centres",
      href: "/gcc/ai-data-analytics-centres",
    },
    {
      label: "Digital & Innovation Centres",
      href: "/gcc/service",
    },
  ],
},

    {
      label: "Artificial Intelligence",
      href: "/technology-solutions/artificial-intelligence",
      text: "",
      children: [
        {
          label: "Generative AI",
          href: "/technology-solutions/artificial-intelligence/generative-ai",
        },
        {
          label: "AI Consulting",
          href: "/technology-solutions/artificial-intelligence/ai-consulting",
        },
        {
          label: "Machine Learning",
          href: "/technology-solutions/artificial-intelligence/machine-learning",
        },
        {
          label: "Deep Learning",
          href: "/technology-solutions/artificial-intelligence/deep-learning",
        },
        {
          label: "Natural Language Processing",
          href: "/technology-solutions/artificial-intelligence/nlp",
        },
        {
          label: "Computer Vision",
          href: "/technology-solutions/artificial-intelligence/computer-vision",
        },
        {
          label: "AI Chatbots & Virtual Assistants",
          href: "/technology-solutions/artificial-intelligence/ai-chatbots",
        },
        {
          label: "Predictive AI",
          href: "/technology-solutions/artificial-intelligence/predictive-ai",
        },
        {
          label: "AI Automation",
          href: "/technology-solutions/artificial-intelligence/ai-automation",
        },
        {
          label: "AI Agents",
          href: "/technology-solutions/artificial-intelligence/ai-agents",
        },
        {
          label: "Recommendation Systems",
          href: "/technology-solutions/artificial-intelligence/recommendation-systems",
        },
        {
          label: "AI Model Development",
          href: "/technology-solutions/artificial-intelligence/ai-model-development",
        },
        {
          label: "Responsible AI",
          href: "/technology-solutions/artificial-intelligence/responsible-ai",
        },
      ],
    },

    {
      label: "Data Analytics",
      href: "/technology-solutions/data-analytics",
      text: "",
      children: [
        {
          label: "Business Intelligence",
          href: "/technology-solutions/data-analytics/business-intelligence",
        },
        {
          label: "Data Visualization",
          href: "/technology-solutions/data-analytics/data-visualization",
        },
        {
          label: "Data Engineering",
          href: "/technology-solutions/data-analytics/data-engineering",
        },
        {
          label: "Data Warehousing",
          href: "/technology-solutions/data-analytics/data-warehousing",
        },
        {
          label: "Big Data Analytics",
          href: "/technology-solutions/data-analytics/big-data-analytics",
        },
        {
          label: "Predictive Analytics",
          href: "/technology-solutions/data-analytics/predictive-analytics",
        },
        {
          label: "Prescriptive Analytics",
          href: "/technology-solutions/data-analytics/prescriptive-analytics",
        },
        {
          label: "Real-Time Analytics",
          href: "/technology-solutions/data-analytics/real-time-analytics",
        },
        {
          label: "Data Governance",
          href: "/technology-solutions/data-analytics/data-governance",
        },
        {
          label: "Data Quality Management",
          href: "/technology-solutions/data-analytics/data-quality-management",
        },
        {
          label: "Dashboard Development",
          href: "/technology-solutions/data-analytics/dashboard-development",
        },
        {
          label: "Reporting & Insights",
          href: "/technology-solutions/data-analytics/reporting-insights",
        },
      ],
    },

    {
      label: "Cloud Infrastructure",
      href: "/technology-solutions/cloud-infrastructure",
      text: "",
      children: [
        {
          label: "Cloud Consulting",
          href: "/technology-solutions/cloud-infrastructure/cloud-consulting",
        },
        {
          label: "Cloud Migration",
          href: "/technology-solutions/cloud-infrastructure/cloud-migration",
        },
        {
          label: "Cloud Architecture",
          href: "/technology-solutions/cloud-infrastructure/cloud-architecture",
        },
        {
          label: "Cloud Security",
          href: "/technology-solutions/cloud-infrastructure/cloud-security",
        },
        {
          label: "Cloud Networking",
          href: "/technology-solutions/cloud-infrastructure/cloud-networking",
        },
        {
          label: "Cloud Infrastructure Management",
          href: "/technology-solutions/cloud-infrastructure/management",
        },
        {
          label: "DevOps & Automation",
          href: "/technology-solutions/cloud-infrastructure/devops-automation",
        },
        {
          label: "Containerization",
          href: "/technology-solutions/cloud-infrastructure/containerization",
        },
        {
          label: "Kubernetes Services",
          href: "/technology-solutions/cloud-infrastructure/kubernetes",
        },
        {
          label: "Serverless Computing",
          href: "/technology-solutions/cloud-infrastructure/serverless-computing",
        },
        {
          label: "Disaster Recovery",
          href: "/technology-solutions/cloud-infrastructure/disaster-recovery",
        },
        {
          label: "Cloud Monitoring & Optimization",
          href: "/technology-solutions/cloud-infrastructure/cloud-monitoring-optimization",
        },
      ],
    },

    {
      label: "AI Cloud",
      href: "/technology-solutions/ai-cloud",
      text: "",
      children: [
        {
          label: "AI Cloud Strategy",
          href: "/technology-solutions/ai-cloud/strategy",
        },
        {
          label: "AI Infrastructure",
          href: "/technology-solutions/ai-cloud/ai-infrastructure",
        },
        {
          label: "GPU Cloud Solutions",
          href: "/technology-solutions/ai-cloud/gpu-cloud",
        },
        {
          label: "AI Model Hosting",
          href: "/technology-solutions/ai-cloud/model-hosting",
        },
        {
          label: "MLOps",
          href: "/technology-solutions/ai-cloud/mlops",
        },
        {
          label: "AI Data Platforms",
          href: "/technology-solutions/ai-cloud/data-platforms",
        },
        {
          label: "Cloud-Based Machine Learning",
          href: "/technology-solutions/ai-cloud/cloud-machine-learning",
        },
        {
          label: "Generative AI Infrastructure",
          href: "/technology-solutions/ai-cloud/generative-ai-infrastructure",
        },
        {
          label: "AI Security",
          href: "/technology-solutions/ai-cloud/ai-security",
        },
        {
          label: "AI Cloud Optimization",
          href: "/technology-solutions/ai-cloud/optimization",
        },
        {
          label: "AI Compute Solutions",
          href: "/technology-solutions/ai-cloud/compute-solutions",
        },
        {
          label: "AI Application Deployment",
          href: "/technology-solutions/ai-cloud/application-deployment",
        },
      ],
    },

    {
      label: "Digital Transformation",
      href: "/technology-solutions/digital-transformation",
      text: "",
      children: [
        {
          label: "Digital Strategy",
          href: "/technology-solutions/digital-transformation/digital-strategy",
        },
        {
          label: "Business Process Transformation",
          href: "/technology-solutions/digital-transformation/business-process",
        },
        {
          label: "Enterprise Transformation",
          href: "/technology-solutions/digital-transformation/enterprise-transformation",
        },
        {
          label: "Legacy Modernization",
          href: "/technology-solutions/digital-transformation/legacy-modernization",
        },
        {
          label: "Digital Customer Experience",
          href: "/technology-solutions/digital-transformation/customer-experience",
        },
        {
          label: "Workflow Automation",
          href: "/technology-solutions/digital-transformation/workflow-automation",
        },
        {
          label: "Intelligent Automation",
          href: "/technology-solutions/digital-transformation/intelligent-automation",
        },
        {
          label: "Cloud Transformation",
          href: "/technology-solutions/digital-transformation/cloud-transformation",
        },
        {
          label: "Data Transformation",
          href: "/technology-solutions/digital-transformation/data-transformation",
        },
        {
          label: "Digital Workplace",
          href: "/technology-solutions/digital-transformation/digital-workplace",
        },
        {
          label: "Change Management",
          href: "/technology-solutions/digital-transformation/change-management",
        },
        {
          label: "Technology Consulting",
          href: "/technology-solutions/digital-transformation/technology-consulting",
        },
      ],
    },

    {
      label: "Robotic Design & Development",
      href: "/technology-solutions/robotic-design-development",
      text: "",
      children: [
        {
          label: "Robotics Consulting",
          href: "/technology-solutions/robotic-design-development/robotics-consulting",
        },
        {
          label: "Industrial Robotics",
          href: "/technology-solutions/robotic-design-development/industrial-robotics",
        },
        {
          label: "Autonomous Robots",
          href: "/technology-solutions/robotic-design-development/autonomous-robots",
        },
        {
          label: "Robotic Process Automation",
          href: "/technology-solutions/robotic-design-development/rpa",
        },
        {
          label: "Robot Software Development",
          href: "/technology-solutions/robotic-design-development/software-development",
        },
        {
          label: "Computer Vision for Robotics",
          href: "/technology-solutions/robotic-design-development/computer-vision",
        },
        {
          label: "AI Robotics",
          href: "/technology-solutions/robotic-design-development/ai-robotics",
        },
        {
          label: "Robotic Simulation",
          href: "/technology-solutions/robotic-design-development/simulation",
        },
        {
          label: "Robot Integration",
          href: "/technology-solutions/robotic-design-development/integration",
        },
        {
          label: "Automation Systems",
          href: "/technology-solutions/robotic-design-development/automation-systems",
        },
        {
          label: "Robotics Maintenance",
          href: "/technology-solutions/robotic-design-development/maintenance",
        },
        {
          label: "Smart Manufacturing",
          href: "/technology-solutions/robotic-design-development/smart-manufacturing",
        },
      ],
    },

    {
      label: "A/B Testing",
      href: "/technology-solutions/ab-testing",
      text: "",
      children: [
        {
          label: "Website A/B Testing",
          href: "/technology-solutions/ab-testing/website",
        },
        {
          label: "Mobile App A/B Testing",
          href: "/technology-solutions/ab-testing/mobile-app",
        },
        {
          label: "Landing Page Testing",
          href: "/technology-solutions/ab-testing/landing-page",
        },
        {
          label: "Conversion Rate Optimization",
          href: "/technology-solutions/ab-testing/cro",
        },
        {
          label: "User Experience Testing",
          href: "/technology-solutions/ab-testing/user-experience",
        },
        {
          label: "Feature Testing",
          href: "/technology-solutions/ab-testing/feature-testing",
        },
        {
          label: "Personalization Testing",
          href: "/technology-solutions/ab-testing/personalization",
        },
        {
          label: "Multivariate Testing",
          href: "/technology-solutions/ab-testing/multivariate",
        },
        {
          label: "Experiment Design",
          href: "/technology-solutions/ab-testing/experiment-design",
        },
        {
          label: "Statistical Analysis",
          href: "/technology-solutions/ab-testing/statistical-analysis",
        },
        {
          label: "Experiment Automation",
          href: "/technology-solutions/ab-testing/experiment-automation",
        },
        {
          label: "Testing & Optimization",
          href: "/technology-solutions/ab-testing/testing-optimization",
        },
      ],
    },

    {
      label: "Finance & Risk Intelligence",
      href: "/technology-solutions/finance-risk-intelligence",
      text: "",
      children: [
        {
          label: "Financial Analytics",
          href: "/technology-solutions/finance-risk-intelligence/financial-analytics",
        },
        {
          label: "Risk Analytics",
          href: "/technology-solutions/finance-risk-intelligence/risk-analytics",
        },
        {
          label: "Fraud Detection",
          href: "/technology-solutions/finance-risk-intelligence/fraud-detection",
        },
        {
          label: "Credit Risk Intelligence",
          href: "/technology-solutions/finance-risk-intelligence/credit-risk",
        },
        {
          label: "Financial Forecasting",
          href: "/technology-solutions/finance-risk-intelligence/financial-forecasting",
        },
        {
          label: "Regulatory Compliance",
          href: "/technology-solutions/finance-risk-intelligence/regulatory-compliance",
        },
        {
          label: "AML & Transaction Monitoring",
          href: "/technology-solutions/finance-risk-intelligence/aml-transaction-monitoring",
        },
        {
          label: "Financial Data Analytics",
          href: "/technology-solutions/finance-risk-intelligence/financial-data-analytics",
        },
        {
          label: "Portfolio Risk Analytics",
          href: "/technology-solutions/finance-risk-intelligence/portfolio-risk",
        },
        {
          label: "Predictive Risk Modeling",
          href: "/technology-solutions/finance-risk-intelligence/predictive-risk-modeling",
        },
        {
          label: "Fraud & Anomaly Detection",
          href: "/technology-solutions/finance-risk-intelligence/fraud-anomaly-detection",
        },
        {
          label: "AI-Powered Finance",
          href: "/technology-solutions/finance-risk-intelligence/ai-powered-finance",
        },
      ],
    },

    {
  label: "AI-Powered Business Processes",
  href: "/integrate-AI",
  text: "",
  children: [
    {
      label: "KPI & KRA",
      href: "/integrate-AI/KPI&KRA",
      text: "Automate performance mapping using AI to ensure accurate goal alignment.",
    },
    {
      label: "Price Tracking",
      href: "/integrate-AI/price-tracking",
      text: "AI-powered price tracking and market intelligence.",
    },
    {
      label: "Strategy & Planning",
      href: "/integrate-AI/strategy&planning",
      text: "Drive measurable value through strategic AI adoption.",
    },
    {
      label: "Project Tracking",
      href: "/integrate-AI/project-tracking",
      text: "Track projects with real-time AI-powered updates.",
    },
    {
      label: "Talent Matching",
      href: "/integrate-AI/talent-matching",
      text: "AI-powered talent matching based on hiring requirements.",
    },
  ],
},
    
  ],
},

    // ==================================================
    // 3. CYBER SECURITY SOLUTIONS
    // ==================================================

    {
  value: "cyber-security",
  title: "Cyber Security Solutions",
  heading: "Cyber Security Solutions",
  paragraph:
    "Protect your digital infrastructure, applications and business data with comprehensive cybersecurity solutions.",
  outerPadding: "large",

  links: [
    {
      label: "Cybersecurity Assessment & Consulting",
      href: "/cyber-security/assessment-consulting",
      text: "",
      children: [
        {
          label: "Cybersecurity Risk Assessment",
          href: "/cyber-security/assessment-consulting/risk-assessment",
        },
        {
          label: "Security Maturity Assessment",
          href: "/cyber-security/assessment-consulting/security-maturity-assessment",
        },
        {
          label: "Cybersecurity Gap Analysis",
          href: "/cyber-security/assessment-consulting/gap-analysis",
        },
        {
          label: "Security Architecture Review",
          href: "/cyber-security/assessment-consulting/security-architecture-review",
        },
        {
          label: "IT Security Consulting",
          href: "/cyber-security/assessment-consulting/it-security-consulting",
        },
        {
          label: "Zero Trust Consulting",
          href: "/cyber-security/assessment-consulting/zero-trust-consulting",
        },
        {
          label: "Security Strategy & Roadmap",
          href: "/cyber-security/assessment-consulting/security-strategy-roadmap",
        },
        {
          label: "Cybersecurity Auditing",
          href: "/cyber-security/assessment-consulting/cybersecurity-auditing",
        },
        {
          label: "Third-Party Risk Assessment",
          href: "/cyber-security/assessment-consulting/third-party-risk-assessment",
        },
        {
          label: "Security Policy Development",
          href: "/cyber-security/assessment-consulting/security-policy-development",
        },
        {
          label: "Cyber Resilience Assessment",
          href: "/cyber-security/assessment-consulting/cyber-resilience-assessment",
        },
      ],
    },

    {
      label: "Managed Security Services",
      href: "/cyber-security/managed-security-services",
      text: "",
      children: [
        {
          label: "Managed Detection & Response (MDR)",
          href: "/cyber-security/managed-security-services/mdr",
        },
        {
          label: "Managed Firewall Services",
          href: "/cyber-security/managed-security-services/firewall-services",
        },
        {
          label: "Managed Endpoint Security",
          href: "/cyber-security/managed-security-services/endpoint-security",
        },
        {
          label: "Managed Network Security",
          href: "/cyber-security/managed-security-services/network-security",
        },
        {
          label: "Managed Cloud Security",
          href: "/cyber-security/managed-security-services/cloud-security",
        },
        {
          label: "Managed SIEM Services",
          href: "/cyber-security/managed-security-services/siem-services",
        },
        {
          label: "Managed Vulnerability Management",
          href: "/cyber-security/managed-security-services/vulnerability-management",
        },
        {
          label: "Managed Identity Security",
          href: "/cyber-security/managed-security-services/identity-security",
        },
        {
          label: "Security Monitoring Services",
          href: "/cyber-security/managed-security-services/security-monitoring",
        },
        {
          label: "24/7 Security Monitoring",
          href: "/cyber-security/managed-security-services/24-7-security-monitoring",
        },
        {
          label: "Security Incident Management",
          href: "/cyber-security/managed-security-services/incident-management",
        },
      ],
    },

    {
      label: "Security Operations Center (SOC)",
      href: "/cyber-security/security-operations-center",
      text: "",
      children: [
        {
          label: "24/7 SOC Monitoring",
          href: "/cyber-security/security-operations-center/24-7-monitoring",
        },
        {
          label: "SOC as a Service",
          href: "/cyber-security/security-operations-center/soc-as-a-service",
        },
        {
          label: "SIEM Management",
          href: "/cyber-security/security-operations-center/siem-management",
        },
        {
          label: "Security Log Management",
          href: "/cyber-security/security-operations-center/security-log-management",
        },
        {
          label: "Threat Monitoring",
          href: "/cyber-security/security-operations-center/threat-monitoring",
        },
        {
          label: "Security Alert Management",
          href: "/cyber-security/security-operations-center/alert-management",
        },
        {
          label: "Security Incident Investigation",
          href: "/cyber-security/security-operations-center/incident-investigation",
        },
        {
          label: "Threat Intelligence",
          href: "/cyber-security/security-operations-center/threat-intelligence",
        },
        {
          label: "Security Analytics",
          href: "/cyber-security/security-operations-center/security-analytics",
        },
        {
          label: "SOC Automation & Orchestration",
          href: "/cyber-security/security-operations-center/automation-orchestration",
        },
        {
          label: "Security Reporting",
          href: "/cyber-security/security-operations-center/security-reporting",
        },
      ],
    },

    {
      label: "Endpoint Security",
      href: "/cyber-security/endpoint-security",
      text: "",
      children: [
        {
          label: "Endpoint Detection & Response (EDR)",
          href: "/cyber-security/endpoint-security/edr",
        },
        {
          label: "Extended Detection & Response (XDR)",
          href: "/cyber-security/endpoint-security/xdr",
        },
        {
          label: "Antivirus & Anti-Malware",
          href: "/cyber-security/endpoint-security/antivirus-anti-malware",
        },
        {
          label: "Endpoint Monitoring",
          href: "/cyber-security/endpoint-security/monitoring",
        },
        {
          label: "Device Control",
          href: "/cyber-security/endpoint-security/device-control",
        },
        {
          label: "Mobile Device Security",
          href: "/cyber-security/endpoint-security/mobile-device-security",
        },
        {
          label: "Endpoint Encryption",
          href: "/cyber-security/endpoint-security/encryption",
        },
        {
          label: "Endpoint Vulnerability Management",
          href: "/cyber-security/endpoint-security/vulnerability-management",
        },
        {
          label: "Application Control",
          href: "/cyber-security/endpoint-security/application-control",
        },
        {
          label: "Endpoint Threat Prevention",
          href: "/cyber-security/endpoint-security/threat-prevention",
        },
      ],
    },

    {
      label: "Network Security",
      href: "/cyber-security/network-security",
      text: "",
      children: [
        {
          label: "Network Security Assessment",
          href: "/cyber-security/network-security/security-assessment",
        },
        {
          label: "Firewall Management",
          href: "/cyber-security/network-security/firewall-management",
        },
        {
          label: "Next-Generation Firewall",
          href: "/cyber-security/network-security/next-generation-firewall",
        },
        {
          label: "Intrusion Detection & Prevention",
          href: "/cyber-security/network-security/intrusion-detection-prevention",
        },
        {
          label: "Network Access Control",
          href: "/cyber-security/network-security/network-access-control",
        },
        {
          label: "Secure Network Architecture",
          href: "/cyber-security/network-security/secure-network-architecture",
        },
        {
          label: "VPN & Remote Access Security",
          href: "/cyber-security/network-security/vpn-remote-access-security",
        },
        {
          label: "Network Segmentation",
          href: "/cyber-security/network-security/network-segmentation",
        },
        {
          label: "DNS Security",
          href: "/cyber-security/network-security/dns-security",
        },
        {
          label: "Email & Web Security",
          href: "/cyber-security/network-security/email-web-security",
        },
        {
          label: "DDoS Protection",
          href: "/cyber-security/network-security/ddos-protection",
        },
      ],
    },

    {
      label: "Cloud Security",
      href: "/cyber-security/cloud-security",
      text: "",
      children: [
        {
          label: "Cloud Security Assessment",
          href: "/cyber-security/cloud-security/security-assessment",
        },
        {
          label: "Cloud Security Architecture",
          href: "/cyber-security/cloud-security/security-architecture",
        },
        {
          label: "Cloud Workload Protection",
          href: "/cyber-security/cloud-security/workload-protection",
        },
        {
          label: "Cloud Infrastructure Security",
          href: "/cyber-security/cloud-security/infrastructure-security",
        },
        {
          label: "Cloud Access Security Broker (CASB)",
          href: "/cyber-security/cloud-security/casb",
        },
        {
          label: "Cloud Security Posture Management (CSPM)",
          href: "/cyber-security/cloud-security/cspm",
        },
        {
          label: "Cloud Identity Security",
          href: "/cyber-security/cloud-security/identity-security",
        },
        {
          label: "Container Security",
          href: "/cyber-security/cloud-security/container-security",
        },
        {
          label: "Kubernetes Security",
          href: "/cyber-security/cloud-security/kubernetes-security",
        },
        {
          label: "Cloud Compliance",
          href: "/cyber-security/cloud-security/cloud-compliance",
        },
        {
          label: "Multi-Cloud Security",
          href: "/cyber-security/cloud-security/multi-cloud-security",
        },
      ],
    },

    {
      label: "Vulnerability Assessment & Penetration Testing",
      href: "/cyber-security/vulnerability-assessment",
      text: "",
      children: [
        {
          label: "Network Penetration Testing",
          href: "/cyber-security/vulnerability-assessment/network-penetration-testing",
        },
        {
          label: "Web Application Penetration Testing",
          href: "/cyber-security/vulnerability-assessment/web-application-penetration-testing",
        },
        {
          label: "Mobile Application Penetration Testing",
          href: "/cyber-security/vulnerability-assessment/mobile-application-penetration-testing",
        },
        {
          label: "API Security Testing",
          href: "/cyber-security/vulnerability-assessment/api-security-testing",
        },
        {
          label: "Cloud Penetration Testing",
          href: "/cyber-security/vulnerability-assessment/cloud-penetration-testing",
        },
        {
          label: "Wireless Security Testing",
          href: "/cyber-security/vulnerability-assessment/wireless-security-testing",
        },
        {
          label: "Infrastructure Vulnerability Assessment",
          href: "/cyber-security/vulnerability-assessment/infrastructure-assessment",
        },
        {
          label: "Source Code Security Review",
          href: "/cyber-security/vulnerability-assessment/source-code-security-review",
        },
        {
          label: "Red Team Assessment",
          href: "/cyber-security/vulnerability-assessment/red-team-assessment",
        },
        {
          label: "Social Engineering Testing",
          href: "/cyber-security/vulnerability-assessment/social-engineering-testing",
        },
        {
          label: "Security Configuration Review",
          href: "/cyber-security/vulnerability-assessment/security-configuration-review",
        },
      ],
    },

    {
      label: "Finance and Risk Management",
      href: "/cyber-security/finance-risk-management",
      text: "",
      children: [
        {
          label: "Cyber Risk Management",
          href: "/cyber-security/finance-risk-management/cyber-risk-management",
        },
        {
          label: "Financial Risk Assessment",
          href: "/cyber-security/finance-risk-management/financial-risk-assessment",
        },
        {
          label: "Enterprise Risk Management",
          href: "/cyber-security/finance-risk-management/enterprise-risk-management",
        },
        {
          label: "Operational Risk Management",
          href: "/cyber-security/finance-risk-management/operational-risk-management",
        },
        {
          label: "Third-Party Risk Management",
          href: "/cyber-security/finance-risk-management/third-party-risk-management",
        },
        {
          label: "Technology Risk Management",
          href: "/cyber-security/finance-risk-management/technology-risk-management",
        },
        {
          label: "Fraud Risk Management",
          href: "/cyber-security/finance-risk-management/fraud-risk-management",
        },
        {
          label: "Regulatory Risk Management",
          href: "/cyber-security/finance-risk-management/regulatory-risk-management",
        },
        {
          label: "Risk Analytics",
          href: "/cyber-security/finance-risk-management/risk-analytics",
        },
        {
          label: "Risk Monitoring & Reporting",
          href: "/cyber-security/finance-risk-management/risk-monitoring-reporting",
        },
        {
          label: "Business Continuity Management",
          href: "/cyber-security/finance-risk-management/business-continuity-management",
        },
      ],
    },

    {
      label: "Threat Detection & Response",
      href: "/cyber-security/threat-detection-response",
      text: "",
      children: [
        {
          label: "Threat Intelligence",
          href: "/cyber-security/threat-detection-response/threat-intelligence",
        },
        {
          label: "Advanced Threat Detection",
          href: "/cyber-security/threat-detection-response/advanced-threat-detection",
        },
        {
          label: "Behavioral Analytics",
          href: "/cyber-security/threat-detection-response/behavioral-analytics",
        },
        {
          label: "Threat Hunting",
          href: "/cyber-security/threat-detection-response/threat-hunting",
        },
        {
          label: "SIEM & SOAR",
          href: "/cyber-security/threat-detection-response/siem-soar",
        },
        {
          label: "Malware Analysis",
          href: "/cyber-security/threat-detection-response/malware-analysis",
        },
        {
          label: "Phishing Detection",
          href: "/cyber-security/threat-detection-response/phishing-detection",
        },
        {
          label: "Ransomware Detection",
          href: "/cyber-security/threat-detection-response/ransomware-detection",
        },
        {
          label: "Insider Threat Detection",
          href: "/cyber-security/threat-detection-response/insider-threat-detection",
        },
        {
          label: "Detection Engineering",
          href: "/cyber-security/threat-detection-response/detection-engineering",
        },
        {
          label: "Automated Threat Response",
          href: "/cyber-security/threat-detection-response/automated-threat-response",
        },
      ],
    },

    {
      label: "Security Compliance & Risk Management",
      href: "/cyber-security/compliance-risk-management",
      text: "",
      children: [
        {
          label: "ISO 27001 Compliance",
          href: "/cyber-security/compliance-risk-management/iso-27001",
        },
        {
          label: "SOC 2 Compliance",
          href: "/cyber-security/compliance-risk-management/soc-2",
        },
        {
          label: "GDPR Compliance",
          href: "/cyber-security/compliance-risk-management/gdpr",
        },
        {
          label: "PCI DSS Compliance",
          href: "/cyber-security/compliance-risk-management/pci-dss",
        },
        {
          label: "HIPAA Security",
          href: "/cyber-security/compliance-risk-management/hipaa-security",
        },
        {
          label: "NIST Cybersecurity Framework",
          href: "/cyber-security/compliance-risk-management/nist-framework",
        },
        {
          label: "CIS Controls",
          href: "/cyber-security/compliance-risk-management/cis-controls",
        },
        {
          label: "Security Governance",
          href: "/cyber-security/compliance-risk-management/security-governance",
        },
        {
          label: "Risk & Compliance Assessments",
          href: "/cyber-security/compliance-risk-management/risk-compliance-assessments",
        },
        {
          label: "Compliance Gap Analysis",
          href: "/cyber-security/compliance-risk-management/compliance-gap-analysis",
        },
        {
          label: "Audit Preparation",
          href: "/cyber-security/compliance-risk-management/audit-preparation",
        },
        {
          label: "Security Policy & Documentation",
          href: "/cyber-security/compliance-risk-management/security-policy-documentation",
        },
      ],
    },

    {
      label: "Incident Response & Digital Forensics",
      href: "/cyber-security/incident-response-forensics",
      text: "",
      children: [
        {
          label: "Cyber Incident Response",
          href: "/cyber-security/incident-response-forensics/cyber-incident-response",
        },
        {
          label: "Ransomware Response",
          href: "/cyber-security/incident-response-forensics/ransomware-response",
        },
        {
          label: "Data Breach Response",
          href: "/cyber-security/incident-response-forensics/data-breach-response",
        },
        {
          label: "Malware Investigation",
          href: "/cyber-security/incident-response-forensics/malware-investigation",
        },
        {
          label: "Digital Forensics",
          href: "/cyber-security/incident-response-forensics/digital-forensics",
        },
        {
          label: "Network Forensics",
          href: "/cyber-security/incident-response-forensics/network-forensics",
        },
        {
          label: "Endpoint Forensics",
          href: "/cyber-security/incident-response-forensics/endpoint-forensics",
        },
        {
          label: "Email Forensics",
          href: "/cyber-security/incident-response-forensics/email-forensics",
        },
        {
          label: "Threat Investigation",
          href: "/cyber-security/incident-response-forensics/threat-investigation",
        },
        {
          label: "Evidence Collection",
          href: "/cyber-security/incident-response-forensics/evidence-collection",
        },
        {
          label: "Incident Recovery",
          href: "/cyber-security/incident-response-forensics/incident-recovery",
        },
        {
          label: "Cyber Crisis Management",
          href: "/cyber-security/incident-response-forensics/cyber-crisis-management",
        },
      ],
    },

    {
      label: "Security Awareness & Training",
      href: "/cyber-security/security-awareness-training",
      text: "",
      children: [
        {
          label: "Cybersecurity Awareness Training",
          href: "/cyber-security/security-awareness-training/cybersecurity-awareness",
        },
        {
          label: "Phishing Simulation",
          href: "/cyber-security/security-awareness-training/phishing-simulation",
        },
        {
          label: "Security Awareness Programs",
          href: "/cyber-security/security-awareness-training/security-awareness-programs",
        },
        {
          label: "Employee Security Training",
          href: "/cyber-security/security-awareness-training/employee-security-training",
        },
        {
          label: "Executive Cybersecurity Training",
          href: "/cyber-security/security-awareness-training/executive-cybersecurity-training",
        },
        {
          label: "Secure Remote Working Training",
          href: "/cyber-security/security-awareness-training/secure-remote-working-training",
        },
        {
          label: "Social Engineering Awareness",
          href: "/cyber-security/security-awareness-training/social-engineering-awareness",
        },
        {
          label: "Incident Reporting Training",
          href: "/cyber-security/security-awareness-training/incident-reporting-training",
        },
        {
          label: "Security Policy Training",
          href: "/cyber-security/security-awareness-training/security-policy-training",
        },
        {
          label: "Security Culture Programs",
          href: "/cyber-security/security-awareness-training/security-culture-programs",
        },
        {
          label: "Cybersecurity Workshops",
          href: "/cyber-security/security-awareness-training/cybersecurity-workshops",
        },
      ],
    },
  ],
},

    // ==================================================
    // 4. GCC
    // ==================================================

    {
      value: "gcc",
      title: "GCC",
      heading: "Global Capability Center",
      paragraph:
        "Build and scale a fully managed global capability center with technology, talent and operational expertise.",
      outerPadding: "large",

      links: [
        {
          label: "Technology & Engineering Center",
          href: "/gcc/technology-engineering-center",
          text: "",
        },
        {
          label: "Business Process Services (BPS)",
          href: "/gcc/business-process-services",
          text: "",
        },
        {
          label: "GCC Strategy & Advisory",
          href: "/gcc/strategy-advisory",
          text: "",
        },
        {
          label: "Entity Setup & Expansion Support",
          href: "/gcc/entity-setup-expansion",
          text: "",
        },
        {
          label: "Agile Talent and Workforce Solutions",
          href: "/gcc/agile-talent-workforce",
          text: "",
        },
        {
          label: "GCC BOT (Build, Operate, Transfer) Model",
          href: "/gcc/bot-model",
          text: "",
        },
        {
          label: "GCC Operations & Managed Services",
          href: "/gcc/operations-managed-services",
          text: "",
        },
        {
          label: "AI & Data Analytics Centres",
          href: "/gcc/ai-data-analytics-centres",
          text: "",
        },
        {
          label: "Digital & Innovation Centres",
          href: "/gcc/digital-innovation-centres",
          text: "",
        },
      ],
    },

    // ==================================================
    // 5. AI TRAINING PROGRAM
    // ==================================================

  {
  value: "ai-training",
  title: "AI Mastery",
  heading: "AI Mastery",
  paragraph:
    "AI training, certification and workforce development programs for organizations, institutions and individuals.",
  outerPadding: "large",

  links: [
    {
      label: "Corporate AI Training",
      href: "/ai-training/corporate",
      text: "",
      children: [
        {
          label: "Executive AI Programs",
          href: "/ai-training/corporate/executive-ai-programs",
        },
        {
          label: "AI Leadership & Strategy",
          href: "/ai-training/corporate/ai-leadership-strategy",
        },
        {
          label: "Workforce AI Upskilling",
          href: "/ai-training/corporate/workforce-ai-upskilling",
        },
        {
          label: "Generative AI for Business",
          href: "/ai-training/corporate/generative-ai-for-business",
        },
        {
          label: "AI Agents & Automation",
          href: "/ai-training/corporate/ai-agents-automation",
        },
        {
          label: "Industry-Specific AI Training",
          href: "/ai-training/corporate/industry-specific-ai-training",
        },
        {
          label: "Enterprise AI Transformation",
          href: "/ai-training/corporate/enterprise-ai-transformation",
        },
      ],
    },

    {
      label: "College & University Programs",
      href: "/ai-training/college-university",
      text: "",
      children: [
        {
          label: "AI Certification Programs",
          href: "/ai-training/college-university/ai-certification-programs",
        },
        {
          label: "Industry-Ready AI Skills",
          href: "/ai-training/college-university/industry-ready-ai-skills",
        },
        {
          label: "Generative AI & LLM Training",
          href: "/ai-training/college-university/generative-ai-llm-training",
        },
        {
          label: "AI Agents & Automation",
          href: "/ai-training/college-university/ai-agents-automation",
        },
        {
          label: "AI Research & Innovation",
          href: "/ai-training/college-university/ai-research-innovation",
        },
        {
          label: "Internship & Placement Programs",
          href: "/ai-training/college-university/internship-placement-programs",
        },
        {
          label: "Faculty AI Development",
          href: "/ai-training/college-university/faculty-ai-development",
        },
      ],
    },

    {
      label: "School AI Programs",
      href: "/ai-training/school",
      text: "",
      children: [
        {
          label: "AI Foundations for Students",
          href: "/ai-training/school/ai-foundations-for-students",
        },
        {
          label: "Generative AI for Students",
          href: "/ai-training/school/generative-ai-for-students",
        },
        {
          label: "AI & Robotics",
          href: "/ai-training/school/ai-robotics",
        },
        {
          label: "Coding & AI Programs",
          href: "/ai-training/school/coding-ai-programs",
        },
        {
          label: "AI Creativity & Innovation",
          href: "/ai-training/school/ai-creativity-innovation",
        },
        {
          label: "AI Ethics & Digital Safety",
          href: "/ai-training/school/ai-ethics-digital-safety",
        },
        {
          label: "Future Skills Programs",
          href: "/ai-training/school/future-skills-programs",
        },
      ],
    },

    {
      label: "Rural & Urban AI Programs",
      href: "/ai-training/rural-urban",
      text: "",
      children: [
        {
          label: "Rural AI Skill Development",
          href: "/ai-training/rural-urban/rural-ai-skill-development",
        },
        {
          label: "Urban AI Workforce Programs",
          href: "/ai-training/rural-urban/urban-ai-workforce-programs",
        },
        {
          label: "Digital Literacy & AI Awareness",
          href: "/ai-training/rural-urban/digital-literacy-ai-awareness",
        },
        {
          label: "AI Entrepreneurship Programs",
          href: "/ai-training/rural-urban/ai-entrepreneurship-programs",
        },
        {
          label: "Community AI Training",
          href: "/ai-training/rural-urban/community-ai-training",
        },
        {
          label: "Women & Youth AI Programs",
          href: "/ai-training/rural-urban/women-youth-ai-programs",
        },
        {
          label: "Government & Community Skill Initiatives",
          href: "/ai-training/rural-urban/government-community-skill-initiatives",
        },
      ],
    },

    {
      label: "Government & Public Sector",
      href: "/ai-training/government",
      text: "",
      children: [
        {
          label: "AI Workforce Development",
          href: "/ai-training/government/ai-workforce-development",
        },
        {
          label: "Government Employee AI Training",
          href: "/ai-training/government/government-employee-ai-training",
        },
        {
          label: "AI Policy & Governance",
          href: "/ai-training/government/ai-policy-governance",
        },
        {
          label: "Digital Transformation Programs",
          href: "/ai-training/government/digital-transformation-programs",
        },
        {
          label: "AI for Public Services",
          href: "/ai-training/government/ai-for-public-services",
        },
        {
          label: "Responsible AI & Cybersecurity",
          href: "/ai-training/government/responsible-ai-cybersecurity",
        },
      ],
    },

    {
      label: "AI Certifications & Assessments",
      href: "/ai-training/certifications",
      text: "",
      children: [
        {
          label: "AGI Foundation Certification",
          href: "/ai-training/certifications/agi-foundation-certification",
        },
        {
          label: "Generative AI Certification",
          href: "/ai-training/certifications/generative-ai-certification",
        },
        {
          label: "AI Agent Certification",
          href: "/ai-training/certifications/ai-agent-certification",
        },
        {
          label: "AI Practitioner Programs",
          href: "/ai-training/certifications/ai-practitioner-programs",
        },
        {
          label: "Skill Assessments",
          href: "/ai-training/certifications/skill-assessments",
        },
        {
          label: "Professional Certification",
          href: "/ai-training/certifications/professional-certification",
        },
      ],
    },

    {
      label: "AI Labs & Innovation",
      href: "/ai-training/labs-innovation",
      text: "",
      children: [
        {
          label: "AGI Innovation Labs",
          href: "/ai-training/labs-innovation/agi-innovation-labs",
        },
        {
          label: "Student AI Labs",
          href: "/ai-training/labs-innovation/student-ai-labs",
        },
        {
          label: "Corporate AI Labs",
          href: "/ai-training/labs-innovation/corporate-ai-labs",
        },
        {
          label: "AI Hackathons",
          href: "/ai-training/labs-innovation/ai-hackathons",
        },
        {
          label: "AI Projects & Capstones",
          href: "/ai-training/labs-innovation/ai-projects-capstones",
        },
        {
          label: "Research & Development Programs",
          href: "/ai-training/labs-innovation/research-development-programs",
        },
      ],
    },

    {
      label: "AI Trainer & Faculty Development",
      href: "/ai-training/trainer-faculty-development",
      text: "",
      children: [
        {
          label: "Train-the-Trainer Programs",
          href: "/ai-training/trainer-faculty-development/train-the-trainer-programs",
        },
        {
          label: "Faculty Certification",
          href: "/ai-training/trainer-faculty-development/faculty-certification",
        },
        {
          label: "Corporate AI Trainer Programs",
          href: "/ai-training/trainer-faculty-development/corporate-ai-trainer-programs",
        },
        {
          label: "AI Curriculum Development",
          href: "/ai-training/trainer-faculty-development/ai-curriculum-development",
        },
        {
          label: "AI Teaching Resources",
          href: "/ai-training/trainer-faculty-development/ai-teaching-resources",
        },
      ],
    },
  ],
},

    // ==================================================
    // 6. RESOURCES
    // ==================================================

    {
      value: "resources",
      title: "Resources",
      heading: "Resources",
      paragraph:
        "Explore company information, leadership, careers, media and other resources.",
      outerPadding: "large",

      links: [
        {
          label: "About Us",
          href: "/about",
          text: "",
        },
        {
          label: "Leadership",
          href: "/leadership",
          text: "",
        },
        {
          label: "Investor",
          href: "/investor",
          text: "",
        },
        {
          label: "Finance",
          href: "/finance",
          text: "",
        },
        {
          label: "Client",
          href: "/client",
          text: "",
        },
        {
          label: "Career",
          href: "/career",
          text: "",
        },
        {
          label: "Media",
          href: "/media",
          text: "",
        },
        {
          label: "Grievance and Compliances",
          href: "/documents/privacy-policy",
          text: "",
        },
        {
          label: "Contact Us",
          href: "/talk-to-our-expert",
          text: "",
        },
      ],
    },
  ],
};