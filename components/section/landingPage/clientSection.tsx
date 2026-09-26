"use client";

import { motion } from "framer-motion";

// const clients = [
//   {
//     name: "IBM",
//     logo: "/clients/ibm.svg",
//   },
//   {
//     name: "Google",
//     logo: "/clients/google.svg",
//   },
//   {
//     name: "AWS",
//     logo: "/clients/aws.svg",
//   },
//   {
//     name: "NITI Aayog",
//     logo: "/clients/niti-aayog.svg",
//   },
//   {
//     name: "Sky Solutions",
//     logo: "/clients/sky-solutions.svg",
//   },
//   {
//     name: "Temenos T24",
//     logo: "/clients/temenos.svg",
//   },
// ];

const clients = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "NITI Aayog",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/NITI_Aayog_logo.svg",
  },
  {
    name: "Sky Solutions",
    logo: "https://www.skysolutions.com/wp-content/uploads/2024/01/sky-solutions-logo.svg",
  },
  {
    name: "Temenos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Temenos_Logo_2022.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
  },
];

export default function ClientSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        
        bg-[#030304]
        py-10 text-white
        
      "
    >
      {/* ================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* <div
          className="
            absolute left-1/2 top-1/2
            h-[250px] w-[900px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#7046ff]/[0.055]
            blur-[120px]
          "
        /> */}

        {/* <div
          className="
            absolute inset-0 opacity-[0.1]
            [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
          "
        /> */}
      </div>

      {/* ================================================
          HEADING
      ================================================= */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1500px]
          px-5
          sm:px-10
          lg:px-20
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex flex-col items-center
            justify-center text-center
          "
        >
          {/* badge */}

          <div
            className="
              flex items-center gap-3
              rounded-full
              border border-white/[0.08]
              bg-white/[0.025]
              px-4 py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-[#9877ff]
                shadow-[0_0_10px_rgba(152,119,255,.8)]
              "
            />

            <span
              className="
                text-[9px] font-medium
                uppercase tracking-[0.22em]
                text-white/40
              "
            >
              Our Ecosystem
            </span>
          </div>

          {/* title */}

          <h2
            className="
              mt-5
              max-w-[760px]
              hyi-h1 hyi-white
            "
          >
            Working across a world of
            <span
              className="
               
              "
            >
              {" "}
              leading technology.
            </span>
          </h2>

          <p
            className="
              mt-4 max-w-[570px]
             hyi-p
            "
          >
            Building modern digital capabilities across leading
            platforms, cloud ecosystems and technology environments.
          </p>
        </motion.div>
      </div>

      {/* ================================================
          MARQUEE
      ================================================= */}

  {/* ========================================================
    CLIENT LOGO MARQUEE
======================================================== */}

<div className="relative z-10 mt-14 overflow-hidden sm:mt-16 lg:mt-20 px-20 ">
  {/* Left Fade */}
  {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[70px] bg-gradient-to-r from-[#030304] via-[#030304]/90 to-transparent sm:w-[140px] lg:w-[200px]" /> */}

  {/* Right Fade */}
  {/* <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[70px] bg-gradient-to-l from-[#030304] via-[#030304]/90 to-transparent sm:w-[140px] lg:w-[200px]" /> */}

  <div className="group flex w-max items-center">
    {/* First Track */}
    <div className="flex shrink-0 animate-client-marquee items-center gap-5 pr-5 group-hover:[animation-play-state:paused]">
      {clients.map((client) => (
        <ClientLogo
          key={`first-${client.name}`}
          name={client.name}
          logo={client.logo}
        />
      ))}
    </div>

    {/* Duplicate Track */}
    <div
      aria-hidden="true"
      className="flex shrink-0 animate-client-marquee items-center gap-5 pr-5 group-hover:[animation-play-state:paused]"
    >
      {clients.map((client) => (
        <ClientLogo
          key={`second-${client.name}`}
          name={client.name}
          logo={client.logo}
        />
      ))}
    </div>
  </div>
</div>

      {/* ================================================
          FOOTER LABEL
      ================================================= */}

    
    </section>
  );
}

/* ========================================================
   CLIENT LOGO
======================================================== */
/* ========================================================
   CLIENT LOGO
======================================================== */

function ClientLogo({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="flex h-[92px] w-[170px] shrink-0 items-center justify-center rounded-[18px]  bg-[#080b12] px-20 sm:h-[100px] sm:w-[185px] lg:h-[108px] lg:w-[200px]">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-[48px] max-w-[125px] object-contain sm:max-h-[52px] sm:max-w-[135px] lg:max-h-[56px] lg:max-w-[145px]"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback =
            event.currentTarget.nextElementSibling as HTMLElement;

          if (fallback) {
            fallback.style.display = "block";
          }
        }}
      />

      <span
        style={{ display: "none" }}
        className="whitespace-nowrap text-center text-[15px] font-semibold text-white/80"
      >
        {name}
      </span>
    </div>
  );
}