// "use client";

// import CustomMultiTypingHeadings from "@/components/shared/customMultiTypingHeading";
// import React, { useEffect, useState } from "react";

// // const textSets = [
// //   [
// //     "Hire Top  Virtual Assistance",
// //     "for Your  Startup Success.",
// //     "Streamline Your Operations, Save Time, and Focus on What Matters Most",
// //   ],
// //   [
// //     "Hire Top Verified Talent",
// //     "Globally",
// //     "Trusted Experts. Instant Access, Smart, Secure and Precision Hiring Powered by AI",
// //   ],
// //   [
// //     "Build Your Remote Team,",
// //     "Just a Click Away",
// //     "Access a global workforce and elevate your business with world-class remote professionals.",
// //   ],
// //   [
// //     "Real-time Workflow Progress",
// //     "Monitoring And Tracking.",
// //     "24/7 dedicated support, easy communication, and productivity reports.",
// //   ],
// // ];

// const textSets = [
//   [
//     "Digital Transformation for Modern Businesses",
//     "Redefine What's Possible.",
//     "Transform your business with smart automation and next-gen digital solutions.",
//   ],
//   [
//     "Build Your Own Custom LLM Module",
//     "Turn Intelligence Into Innovation.",
//     "Build custom LLMs to automate workflows and unlock business intelligence.",
//   ],
//   [
//     "Deploy Your Code With Confidence",
//     "From Development to Deployment.",
//     "Deploy secure, scalable applications with seamless cloud integration.",
//   ],
//   [
//     "Build Your Own Intelligent AI Solutions",
//     "Innovate Today. Lead Tomorrow.",
//     "Create powerful AI agents and smart solutions to accelerate business growth.",
//   ],
// ];

// export default function TypingAnimation() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   return (
//     <div>
//       {mounted ? (
//         <CustomMultiTypingHeadings textSets={textSets} />
//       ) : (
//         <div className="flex flex-col gap-2">
//           <h2 className="flex flex-col text-2xl font-semibold capitalize cursor-default gap-2 lg:text-3xl">
//             <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
//               Hire Top Virtual Assistance
//             </span>
//             <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
//               for Your Startup Success.
//             </span>
//           </h2>
//           <p className="text-sm text-dark_mode-300 md:text-base">
//             Streamline Your Operations, Save Time, and Focus on What Matters
//             Most
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }














// "use client";

// import React, { useEffect, useState } from "react";
// import CustomMultiFlipHeadings from "@/components/shared/customMultiTypingHeading"; // apne file path ke hisaab se badlo

// const textSets = [
//   [
//     "Digital Transformation for Modern Businesses",
//     "Redefine What's Possible.",
//     "Transform your business with smart automation and next-gen digital solutions.",
//   ],
//   [
//     "Build Your Own Custom LLM Module",
//     "Turn Intelligence Into Innovation.",
//     "Build custom LLMs to automate workflows and unlock business intelligence.",
//   ],
//   [
//     "Deploy Your Code With Confidence",
//     "From Development to Deployment.",
//     "Deploy secure, scalable applications with seamless cloud integration.",
//   ],
//   [
//     "Build Your Own Intelligent AI Solutions",
//     "Innovate Today. Lead Tomorrow.",
//     "Create powerful AI agents and smart solutions to accelerate business growth.",
//   ],
// ];

// export default function TypingAnimation() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   return (
//     <div>
//       {mounted ? (
//         <CustomMultiFlipHeadings
//           textSets={textSets}
//           interval={4000}
//           stagger={0.15}
//         />
//       ) : (
//         <div className="flex flex-col gap-2">
//           <h2 className="flex flex-col text-2xl font-semibold capitalize cursor-default gap-2 lg:text-3xl">
//             <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
//               {textSets[0][0]}
//             </span>
//             <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
//               {textSets[0][1]}
//             </span>
//           </h2>
//           <p className="text-sm text-dark_mode-300 md:text-base">
//             {textSets[0][2]}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }





















// "use client";

// import React, { useEffect, useState } from "react";
// import CustomMultiFlipHeadings from "@/components/shared/customMultiTypingHeading";

// // [white line, brand-colour line, subtitle]
// // [white line, brand-colour line, subtitle]
// const textSets = [
// [
//   "Automate your",
//   "business.",
//   "Smart automation. Built to scale.",
// ],
//   [
//     "Build your own",
//     "custom LLM.",
//     "Automate workflows. Unlock business intelligence.",
//   ],
//   [
//     "Deploy your code",
//     "with confidence.",
//     "Secure, scalable apps. Seamless cloud integration.",
//   ],
//   [
//     "Create intelligent",
//     "AI solutions.",
//     "Powerful AI agents. Faster business growth.",
//   ],
// ];

// export default function TypingAnimation() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   return (
//     <div className="w-full">
//       {mounted ? (
//         <CustomMultiFlipHeadings
//           textSets={textSets}
//           interval={4000}
//           stagger={0.15}
//         />
//       ) : (
//         // SSR fallback: same styling as the flip component (no layout jump)
//         <div className="flex  flex-col
        
//          mx-auto gap-2 text-center lg:mx-0 lg:text-left">
         
//           <div className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
//             {textSets[0][0]}
//           </div>
//           <div className="pb-1 text-4xl font-semibold leading-[1.1] tracking-tight bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent sm:text-5xl lg:text-6xl xl:text-7xl">
//             {textSets[0][1]}
//           </div>
//           <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 sm:text-xs md:text-sm">
//             {textSets[0][2]}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }















































"use client";

import React, { useEffect, useState } from "react";
import CustomMultiFlipHeadings, {
  getLineStyle,
} from "@/components/shared/customMultiTypingHeading";

// [white line, brand-colour line, subtitle]
const textSets = [
  // Main Service — Virtual Assistant
   [
    "Transform Your AI",
    "Workflow With HYI.",
    "Bringing AI Intelligence Into Every Step Of Development.",
  ],

  // AI-Powered Cybersecurity
  [
  "Redefine Cyber Defense.",
"Intelligent AI Security.",
   "AI-Powered Cyber Defense & Real-Time Threat Response",
  ],

  // Virtual Assistance
  [
    "Hire Top",
    "Virtual Assistants.",
    "Skilled virtual assistance to streamline operations, manage tasks, and help your business grow.",
  ],

  // Digital Transformation
  [
    "Transform Your",
    "Business Digitally.",
    "Modern technology. Smarter workflows. Better results.",
  ],

  // Build Your LLM
  [
    "Build your Own",
    "Custom LLM.",
    "Powerful language models. Built around your business needs.",
  ],

  // Deploy Your Code
  [
    "Deploy Your Code",
    "with Confidence.",
    "Secure, scalable apps. Seamless cloud integration.",
  ],

  // Build Your AI
  
];

export default function TypingAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full">
      {mounted ? (
        <CustomMultiFlipHeadings
          textSets={textSets}
          interval={4000}
          stagger={0.15}
        />
      ) : (
        // SSR fallback: exact same styling as the flip component (no layout jump)
        <div className="flex flex-col">
          {textSets[0].map((line, i) => (
            <div key={i} className={getLineStyle(i)}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}