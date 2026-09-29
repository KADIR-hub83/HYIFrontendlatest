// export const footerSections = {
//   ForTalents: {
//     heading: "For Talent's",
//     links: [
//       ["Resume Builder", "/resume-builder"],
//       ["Job Opportunity", "https://va.hyi.ai/talent-login"],
//       ["How To Get Hired", "/get-hired"],
//       ["Mock Test", "https://va.hyi.ai/talent-login"],
//       ["Mock Interview", "https://va.hyi.ai/talent-login"],
//       ["Talent Resources", "/talent/resource"],
//       ["Certified Developer", "/developer"],
//       ["How to Get Certified", "https://va.hyi.ai/talent-login"],
//       ["Talent Support", "/talent/support"],
//     ],
//   },
//   IntegrateAI: {
//     heading: "Integrate AI",
//     links: [
//       ["KPI & KRA", "/integrate-AI/KPI&KRA"],
//       ["Project Tracking", "/integrate-AI/project-tracking"],
//       ["Price Tracking", "/integrate-AI/price-tracking"],
//       ["Talent Matching", "/integrate-AI/talent-matching"],
//       ["Strategy & Planning", "/integrate-AI/strategy&planning"],
//     ],
//   },
//   ConsultingAndSolutions: {
//     heading: "Consulting &  Solutions",
//     links: [],
//   },
//   Resources: {
//     heading: "Resources",
//     links: [
//       ["About HYI", "/about"],
//       // ["Enterprise Plan", "/enterprise-plan"],
//       // ["Startup Plan", "/startup-plan"],
//       ["Case Study", "/case-studies"],
//       ["Career", "/career"],
//       ["Help", "/help"],
//       ["Blogs", "/blogs"],
//       ["Media", "/media"],
//       ["Investor", "/investor"],
//     ],
//   },
//   Compliance: {
//     heading: "Compliance",
//     links: [
//       ["Terms and Conditions", "/documents/terms&conditions"],
//       ["Privacy Policy", "/documents/privacy-policy"],
//       ["Brand Policy", "/documents/brand-policy"],
//       ["Cookies Policy", "/documents/cookies-policy"],
//       ["IPR Policy", "/documents/ipr-policy"],
//       ["Payout Settlement Policy", "/documents/payment-policy"],
//       ["Cancellation Policy", "/documents/cancellation-policy"],
//       ["Refund Policy", "/documents/refund-policy"],
//       ["Escalation Policy", "/documents/escalation-policy"],
//     ],
//   },
// };

// export const footer = {
//   dynamicLinks: Object.keys(footerSections),
// };





export const footerSections = {
  // ==================================================
  // FOR TALENTS
  // ==================================================

  ForTalents: {
    heading: "For Talent",
    links: [
      ["Resume Builder", "/resume-builder"],
      ["Job Opportunity", "https://va.hyi.ai/talent-login"],
      ["How To Get Hired", "/get-hired"],
      ["Mock Test", "https://va.hyi.ai/talent-login"],
      ["Mock Interview", "https://va.hyi.ai/talent-login"],
      ["Talent Resources", "/talent/resource"],
      ["Certified Developer", "/developer"],
      ["How to Get Certified", "https://va.hyi.ai/talent-login"],
      ["Talent Support", "/talent/support"],
    ],
  },

  HireTalent: {
  heading: "For Companies",
  links: [
    ["Hire Developers", "/hire-talent/developers"],
    ["Hire AI Engineers", "/hire-talent/ai-engineers"],
    ["Hire Software Engineers", "/hire-talent/software-engineers"],
    ["Hire Data Engineers", "/hire-talent/data-engineers"],
    ["Hire Cloud Engineers", "/hire-talent/cloud-engineers"],
    ["Hire DevOps Engineers", "/hire-talent/devops-engineers"],
    ["Hire Cybersecurity Experts", "/hire-talent/cybersecurity-experts"],
    ["Hire UI/UX Designers", "/hire-talent/ui-ux-designers"],
  ],
},

  // ==================================================
  // INTEGRATE AI
  // ==================================================

  IntegrateAI: {
    heading: "Integrate AI",
    links: [
      ["KPI & KRA", "/integrate-AI/KPI&KRA"],
      ["Project Tracking", "/integrate-AI/project-tracking"],
      ["Price Tracking", "/integrate-AI/price-tracking"],
      ["Talent Matching", "/integrate-AI/talent-matching"],
      ["Strategy & Planning", "/integrate-AI/strategy&planning"],
    ],
  },

  // ==================================================
  // CONSULTING & SOLUTIONS
  // Dynamic technology links Footer component se aayenge
  // ==================================================



  // ==================================================
  // AI TRAINING PROGRAM
  // ==================================================

  AITraining: {
    heading: "AI Training Program",
    links: [
      ["Corporate AI Training", "/ai-training/corporate"],

      [
        "College & University Programs",
        "/ai-training/college-university",
      ],

      ["School AI Programs", "/ai-training/school"],

      [
        "Rural & Urban AI Programs",
        "/ai-training/rural-urban",
      ],

      [
        "Government & Public Sector",
        "/ai-training/government",
      ],

      [
        "AI Certifications & Assessments",
        "/ai-training/certifications",
      ],

      [
        "AI Labs & Innovation",
        "/ai-training/labs-innovation",
      ],

      [
        "AI Trainer & Faculty Development",
        "/ai-training/trainer-faculty-development",
      ],
    ],
  },

  

  // ==================================================
  // RESOURCES
  // ==================================================

  Resources: {
    heading: "Resources",
    links: [
      ["About HYI", "/about"],
      ["Leadership", "/leadership"],
      ["Investor", "/investor"],
      ["Finance", "/finance"],
      ["Client", "/client"],
      ["Case Study", "/case-studies"],
      ["Career", "/career"],
      ["Help", "/help"],
      ["Blogs", "/blogs"],
      ["Media", "/media"],
      ["Contact Us", "/contact-us"],
    ],
  },

  // ==================================================
  // COMPLIANCE
  // ==================================================

  Compliance: {
    heading: "Compliance",
    links: [
      [
        "Terms and Conditions",
        "/documents/terms&conditions",
      ],

      [
        "Privacy Policy",
        "/documents/privacy-policy",
      ],

      [
        "Brand Policy",
        "/documents/brand-policy",
      ],

      [
        "Cookies Policy",
        "/documents/cookies-policy",
      ],

      [
        "IPR Policy",
        "/documents/ipr-policy",
      ],

      [
        "Payout Settlement Policy",
        "/documents/payment-policy",
      ],

      [
        "Cancellation Policy",
        "/documents/cancellation-policy",
      ],

      [
        "Refund Policy",
        "/documents/refund-policy",
      ],

      [
        "Escalation Policy",
        "/documents/escalation-policy",
      ],
    ],
  },
} as const;

// ==================================================
// FOOTER CONFIGURATION
// ==================================================

export const footer = {
  dynamicLinks: Object.keys(footerSections),
};