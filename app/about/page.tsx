// import UserStatsCard from "@/components/about/userStats";
// import CountryStats from "@/components/about/countryStats";
// import Image from "next/image";
// import AboutUsBackground from "@/assets/about/aboutUsBackground.webp";
// import CompanyOverviewCard from "@/components/about/companyOverviewCard";
// import MiddleIcon from "@/assets/about/middle.png";
// import CoreValues from "@/components/about/coreValues";
// // import AboutUsLeaderShip from "@/components/about/leaderShip";
// import AboutUsStrategicMinds from "@/components/about/StrategicAndMedia";
// import Technologies from "@/components/section/general/technologies";
// import Footer from "@/components/section/general/footer";
// import Header from "@/components/section/general/header";
// import CustomFloatableIcons from "@/components/shared/customFloatableIcons";
// import Card4Background from "@/assets/about/backgroundCards/card4.png";
// import Amazon from "@/assets/common/FloatableIcons/amazon.png";
// import Airtable from "@/assets/common/FloatableIcons/airtable.png";
// import Calendly from "@/assets/common/FloatableIcons/calendly.png";
// import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
// import Feedback from "@/assets/common/FloatableIcons/feedback.png";
// import Google from "@/assets/common/FloatableIcons/google.png";
// import Slack from "@/assets/common/FloatableIcons/slack.png";
// import Useberry from "@/assets/common/FloatableIcons/useberry.png";
// import ActiveUsersCard from "@/components/about/ActiveUsersCard";
// import TalentsCard from "@/components/about/talentsCountCard";
// import RealTimeDataProvider from "@/components/about/RealTimeDataProvider";
// import MissionAndVision from "@/components/about/missionAndVission";

// const techIcons = [
//   { id: "amazon", src: Amazon, alt: "Amazon" },
//   { id: "airtable", src: Airtable, alt: "Airtable" },
//   { id: "calendly", src: Calendly, alt: "Calendly" },
//   { id: "clickUp", src: ClickUp, alt: "ClickUp" },
//   { id: "feedback", src: Feedback, alt: "Feedback" },
//   { id: "google", src: Google, alt: "Google" },
//   { id: "slack", src: Slack, alt: "Slack" },
//   { id: "useberry", src: Useberry, alt: "Useberry" },
// ];

// interface DailyData {
//   date: string;
//   count: number;
// }
// interface MonthData {
//   month: string;
//   monthName: string;
//   count: number;
// }
// interface CountryData {
//   country: string;
//   count: number;
// }

// interface AboutUsData {
//   data: {
//     last5MinCount: number;
//     dailyData: DailyData[];
//     countryData: CountryData[];
//     monthData: MonthData[];
//   };
//   totalCount: number;
// }

// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

// export const revalidate = 120;

// const newUsersData = [
//   { month: "Jan", users: 1850 },
//   { month: "Feb", users: 2640 },
//   { month: "Mar", users: 3510 },
//   { month: "Apr", users: 4680 },
//   { month: "May", users: 5940 },
//   { month: "Jun", users: 7380 },
//   { month: "Jul", users: 9120 },
//   { month: "Aug", users: 10850 },
//   { month: "Sep", users: 12847 },
// ];

// const EMPTY_ABOUT_DATA: AboutUsData = {
//   data: {
//     last5MinCount: 184,

//     dailyData: [
//       {
//         date: "2026-09-23",
//         count: 124,
//       },
//       {
//         date: "2026-09-24",
//         count: 168,
//       },
//       {
//         date: "2026-09-25",
//         count: 215,
//       },
//       {
//         date: "2026-09-26",
//         count: 192,
//       },
//       {
//         date: "2026-09-27",
//         count: 286,
//       },
//       {
//         date: "2026-09-28",
//         count: 342,
//       },
//       {
//         date: "2026-09-29",
//         count: 418,
//       },
//     ],

//     countryData: [
//       {
//         country: "India",
//         count: 6842,
//       },
//       {
//         country: "United States",
//         count: 3248,
//       },
//       {
//         country: "United Kingdom",
//         count: 1876,
//       },
//       {
//         country: "Canada",
//         count: 1425,
//       },
//       {
//         country: "Germany",
//         count: 986,
//       },
//       {
//         country: "Australia",
//         count: 754,
//       },
//     ],

//    monthData: [
//   {
//     month: "01",
//     monthName: "Jan",
//     count: 1850,
//   },
//   {
//     month: "02",
//     monthName: "Feb",
//     count: 2640,
//   },
//   {
//     month: "03",
//     monthName: "Mar",
//     count: 3510,
//   },
//   {
//     month: "04",
//     monthName: "Apr",
//     count: 4680,
//   },
//   {
//     month: "05",
//     monthName: "May",
//     count: 5940,
//   },
//   {
//     month: "06",
//     monthName: "Jun",
//     count: 7380,
//   },
//   {
//     month: "07",
//     monthName: "Jul",
//     count: 9120,
//   },
//   {
//     month: "08",
//     monthName: "Aug",
//     count: 10850,
//   },
//   {
//     month: "09",
//     monthName: "Sep",
//     count: 12847,
//   },
// ],
//   },

//   totalCount: 12847,
// };

// async function getAboutUsData(): Promise<AboutUsData> {
//   try {
//     const url = `${BASE_URL.replace(/\/$/, "")}/get-graph-counts`;

//     console.log("[About Page] Fetching:", url);

//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//       next: {
//         revalidate: 120,
//       },
//     });

//     if (!response.ok) {
//       console.warn(
//         `[About Page] API returned ${response.status} ${response.statusText}`,
//       );

//       return EMPTY_ABOUT_DATA;
//     }

//     const result = await response.json();

//     return {
//       data: {
//         last5MinCount: result?.data?.last5MinCount ?? 0,
//         dailyData: result?.data?.dailyData ?? [],
//         countryData: result?.data?.countryData ?? [],
//         monthData: result?.data?.monthData ?? [],
//       },
//       totalCount: result?.totalCount ?? 0,
//     };
//   } catch (error) {
//     console.warn("[About Page] API unavailable:", error);

//     return EMPTY_ABOUT_DATA;
//   }
// }

// export default async function AboutUsPage() {
//   const data = await getAboutUsData();

//   function formatCompactFloor(num: number): string {
//     if (num >= 1_000_000_000) {
//       return Math.floor(num / 1_000_000_000) + "B";
//     }

//     if (num >= 1_000_000) {
//       return Math.floor(num / 1_000_000) + "M";
//     }

//     if (num >= 1_000) {
//       return Math.floor(num / 1_000) + "K";
//     }

//     return num.toString();
  
//   }

//   return (
//     <section className="w-full min-h-screen flex flex-col items-center">
//       <div className="relative z-50 w-full">
//         <Header />
//       </div>
//       <div className="absolute top-0 left-0 w-full h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh] min-[1060px]:h-[70dvh] min-[1160px]:h-[70dvh] xl:h-[60vh] min-[1360px]:min-h-[70dvh] min-[1580px]:min-h-[60dvh]  z-0">
//         <Image
//           src={AboutUsBackground}
//           alt="Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <CustomFloatableIcons
//           icons={techIcons}
//           overlayMode={true}
//           showContent={false}
//         />
//       </div>
//       <div className="relative z-10 w-full max-w-7xl mx-auto space-y-4 sm:space-y-8 p-4 lg:p-2">
//         <div className="flex flex-col items-center justify-center gap-3 xs:gap-4 pt-0 pb-0 xs:pt-8 xs:pb-8 sm:pt-10 sm:pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 xl:pt-28 xl:pb-20">
//           <h1 className="text-white font-semibold text-lg md:text-xl lg:text-2xl text-center leading-tight">
//             Welcome to <span className="text-brand-600">HYI.AI</span>
//           </h1>
//           <div className="text-[#D2D0DD] text-sm xs:text-base md:text-lg lg:text-lg text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl px-2 xs:px-4 leading-relaxed">
//             Empowering businesses with smart solutions, expert talent, and
//             cutting-edge technology.
//           </div>
//           <p className="text-xs xs:text-sm sm:text-base bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent text-center flex justify-center items-center gap-1">
//             Instant Talent Access
//             <Image src={MiddleIcon} alt="Middle Icon" width={14} height={14} />
//             Smart Growth.
//           </p>
//         </div>
//         {/* Wrap dynamic data in RealTimeDataProvider for client-side updates */}
//         <RealTimeDataProvider initialData={data}>
//           {/* First Row Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-6">
//             <TalentsCard totalCount={data.totalCount} />
//             <ActiveUsersCard
//               last5MinCount={data.data.last5MinCount}
//               dailyData={data.data.dailyData}
//               countryData={data.data.countryData}
//             />
//           </div>
//           {/* Second Row Cards*/}
//           <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 xs:gap-4 md:gap-6">
//             <UserStatsCard
//               monthData={data.data.monthData}
//               totalCount={data.totalCount}
//             />
//             <div className="col-span-1 lg:col-span-4 relative rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 overflow-hidden min-h-[300px] xs:min-h-[320px] sm:min-h-[350px]">
//               <Image
//                 src={Card4Background}
//                 alt=""
//                 fill
//                 className="absolute inset-0 object-cover z-0"
//               />
//               <div className="relative z-10 space-y-3 xs:space-y-4 sm:space-y-6 h-full flex flex-col">
//                 <h3 className="text-white text-sm xs:text-base sm:text-lg lg:text-xl font-semibold leading-tight">
//                   Total Registered Talents Worldwide
//                 </h3>
//                 <div className="flex items-end gap-2">
//                   <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
//                     {formatCompactFloor(data?.totalCount)} +
//                   </span>
//                 </div>
//                 <div className="flex-1">
//                   <CountryStats countryData={data.data.countryData} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </RealTimeDataProvider>
//       </div>
//       <div className="relative z-10 w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 p-4 lg:p-2">
//         <div className="relative w-full mt-12 mb-12">
//           {/* Background image repeated exactly 4 times */}
//           <div className="absolute inset-0 flex flex-col">
//             {Array.from({ length: 4 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="flex-1 bg-[url('/bg-talent.svg')] bg-no-repeat bg-center bg-[length:125%_150%] sm:bg-none"
//               />
//             ))}
//           </div>
//           <div className="relative z-10">
//             <CompanyOverviewCard />
//           </div>
//         </div>
//       </div>
//       <div className="relative z-10 w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 p-4 lg:p-2">
//         <MissionAndVision />
//         <div className="mt-8 xs:mt-12 sm:mt-16">
//           <CoreValues />
//         </div>
//         {/* <div><AboutUsLeaderShip /></div> */}
//         <div>
//           <AboutUsStrategicMinds />
//         </div>
//         <Technologies />
//       </div>
//       <Footer />
//     </section>
//   );
// }








"use client";
// npm i framer-motion
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import {
  AnimatePresence, MotionConfig, animate, motion,
  useInView, useScroll, useTransform, type MotionValue,
} from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
 
const display = Fraunces({ subsets: ["latin"], weight: ["400", "600"] });
const grad = "bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent";
const ease = [0.22, 1, 0.36, 1] as const;
const card = "rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur";
 
/* ---------------- content (from client PDF) ---------------- */
const pillars = [
  { t: "Talent Solutions", d: "Pre-vetted remote professionals, hired hourly, weekly, monthly or full-time." },
  { t: "Technology Solutions", d: "Software, AI applications, automation and digital solutions." },
  { t: "Cybersecurity", d: "Protecting digital environments, systems and operations." },
  { t: "Global Capability Centres", d: "Dedicated global teams, built and managed for you." },
];
const story = [
  { y: "2017", t: "A problem worth solving", d: "Our founder, Yakub Sheikh, saw that finding the right people and technical expertise at the right time was slow, expensive and often stopped businesses from moving forward. He believed things could be different." },
  { y: "Early days", t: "Talent first", d: "We started by connecting businesses with skilled professionals who could make a real difference to their teams and projects." },
  { y: "Growth", t: "Beyond recruitment", d: "Businesses needed more than hiring. We expanded into technology, cybersecurity and Global Capability Centres, with a talent network across 150+ countries, regions and territories." },
  { y: "Today", t: "Ready to deploy", d: "Our strength is ready-to-deploy professionals who fill skill gaps and get projects moving without unnecessary delay, alongside software, AI, automation and digital solutions." },
  { y: "Next", t: "AI that is practical", d: "We believe AI should not be complicated or out of reach. We help businesses see where it makes a difference and put it to use." },
  { y: "Always", t: "Still writing it", d: "A startup building its first team needs something different from an established company entering a new market. We listen first, then work out how to help." },
];
const values = [
  { t: "People matter most", d: "Behind every successful business are people who make things happen. We treat everyone fairly and build relationships that matter." },
  { t: "Be honest and keep your word", d: "Trust comes from honesty, open communication and doing what we say we will do." },
  { t: "Do the work properly", d: "No shortcuts on quality. We deliver work we can stand behind." },
  { t: "Always look for a better way", d: "From AI to automation, we stay curious and open to better ways of solving problems." },
  { t: "Take responsibility", d: "We own our work and make an effort to put things right when plans go off track." },
  { t: "Work together, grow together", d: "Good results rarely come from working alone. We want relationships that grow beyond a single project." },
  { t: "Keep learning and moving forward", d: "We ask questions, learn from experience and treat every challenge as a chance to do better." },
  { t: "Think beyond boundaries", d: "Talent and opportunity exist everywhere. We connect businesses with expertise in 150+ countries, regions and territories." },
];
const future = [
  { t: "Making talent easier to find", d: "Better access to skilled, ready-to-deploy professionals across industries and markets, without the complication." },
  { t: "Growing with technology", d: "More software, digital and automation services, with AI that helps people save time and focus on what matters." },
  { t: "Helping businesses stay secure", d: "Stronger cybersecurity to protect systems, information and operations as work moves online." },
  { t: "Building global teams", d: "GCC services that help more organisations set up dedicated teams and access global expertise." },
  { t: "Reaching more businesses", d: "Stronger links across international markets, and more industries understood and served." },
];
const belief = "Technology makes progress possible, but it is people who make it happen.";
 
/* ---------------- helpers ---------------- */
function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (l) => setV(Math.round(l)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}
 
function Word({ w, p, r }: { w: string; p: MotionValue<number>; r: [number, number] }) {
  const o = useTransform(p, r, [0.15, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}
function BeliefText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = belief.split(" ");
  return (
    <p ref={ref} className={`${display.className} mx-auto max-w-4xl text-center text-3xl leading-tight text-white sm:text-5xl lg:text-6xl`}>
      {words.map((w, i) => <Word key={i} w={w} p={scrollYProgress} r={[i / words.length, (i + 1) / words.length]} />)}
    </p>
  );
}
 
/* ---------------- sections ---------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const o = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28">
      <motion.div style={{ y }} className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D57EEB]/30 blur-[110px] sm:h-[28rem] sm:w-[28rem]" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#FCCB90]/20 blur-[110px] sm:h-[28rem] sm:w-[28rem]" />
      <motion.div style={{ opacity: o, y: y2 }} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease }}
          className={`${display.className} text-[2.6rem] leading-[1.05] text-white sm:text-7xl lg:text-8xl`}
        >
          The world’s talent,<br /><span className={grad}>on demand.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-[#D2D0DD] sm:text-xl">
          HYI.AI is a global talent marketplace and technology partner for startups, enterprises and scaling companies.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className={`mt-4 text-sm sm:text-base ${grad}`}>
          Global Talent. Technology. Cybersecurity. Artificial Intelligence.
        </motion.p>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 h-10 w-6 rounded-full border border-white/30 p-1">
        <div className="mx-auto h-2 w-1 rounded-full bg-white/70" />
      </motion.div>
    </section>
  );
}
 
function WhoWeAre() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease }}>
          <h2 className={`${display.className} text-4xl text-white sm:text-5xl`}>Who we are</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#D2D0DD]">
            HYI.AI is one of the largest remote, verified talent marketplaces, serving startups, enterprises and professionals across 150+ countries, regions and territories.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#D2D0DD]">
            Companies source, hire and manage top-tier remote talent on demand, with no long-term commitments. Our approach is straightforward: understand the requirement, bring the right expertise and help deliver the outcome.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[[150, "+", "countries, regions and territories"], [4, "", "areas of business"], [2017, "", "year we started"]].map(([n, s, l]) => (
              <div key={String(l)}>
                <div className={`${display.className} text-3xl sm:text-5xl ${grad}`}>
                  {n === 2017 ? "2017" : <Count to={n as number} suffix={s as string} />}
                </div>
                <div className="mt-1 text-xs text-[#9C99B0] sm:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div key={p.t}
              initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              whileHover={{ y: -6 }} className={`${card} p-6`}>
              <h3 className="text-lg font-semibold text-white">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B9B6CC]">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
/* LEFT side stays pinned, story scrolls on the right */
function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.7"] });
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className={`${display.className} text-4xl leading-tight text-white sm:text-6xl`}>Our story</h2>
          <p className="mt-5 max-w-md text-lg text-[#D2D0DD]">
            This is our story. And we are still writing it.
          </p>
          <div className="mt-8 hidden h-48 w-1 overflow-hidden rounded-full bg-white/10 lg:block">
            <motion.div style={{ scaleY: scrollYProgress, originY: 0 }} className="h-full w-full bg-gradient-to-b from-[#FCCB90] to-[#D57EEB]" />
          </div>
        </div>
        <div className="space-y-6">
          {story.map((s) => (
            <motion.div key={s.t}
              initial={{ opacity: 0.2, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.6 }} transition={{ duration: 0.6, ease }}
              className={`${card} p-7 sm:p-9`}>
              <div className={`text-sm font-semibold ${grad}`}>{s.y}</div>
              <h3 className={`${display.className} mt-2 text-2xl text-white sm:text-3xl`}>{s.t}</h3>
              <p className="mt-3 leading-relaxed text-[#B9B6CC]">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function Belief() {
  return (
    <section className="px-5 py-28 sm:py-44">
      <BeliefText />
    </section>
  );
}
 
function VisionMission() {
  const steps = ["Understand the requirement", "Bring the right expertise", "Help deliver the outcome"];
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        {[
          { t: "Our vision", d: "To become a trusted partner for businesses around the world, helping them find the right people, make better use of technology and grow with confidence.", x: -70 },
          { t: "Our mission", d: "To help businesses get the right people, the right technology and the right support whenever they need it, with ready-to-deploy professionals, technology solutions, cybersecurity and dedicated global teams.", x: 70 },
        ].map((c) => (
          <motion.div key={c.t} initial={{ opacity: 0, x: c.x }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="rounded-[2rem] bg-gradient-to-br from-[#FCCB90]/50 via-white/10 to-[#D57EEB]/50 p-px">
            <div className="h-full rounded-[calc(2rem-1px)] bg-[#0D0B18] p-8 sm:p-12">
              <h3 className={`${display.className} text-3xl text-white sm:text-4xl`}>{c.t}</h3>
              <p className="mt-5 text-lg leading-relaxed text-[#D2D0DD]">{c.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className={`${display.className} mt-20 text-center text-3xl text-white sm:text-4xl`}>How we work</h3>
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease }} className={`${card} p-6 text-center text-white`}>
            <div className={`text-2xl font-semibold ${grad}`}>{i + 1}</div>
            <div className="mt-2">{s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
 
function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#FCCB90] to-[#D57EEB] opacity-40 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15">
            <motion.div style={{ y }} className="absolute -inset-10">
              {/* replace with the client's approved photo */}
              <Image src="/images/yakub-sheikh.jpg" alt="Yakub Sheikh" fill sizes="(max-width:1024px) 90vw, 400px" className="object-cover" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease }}>
          <h2 className={`${display.className} text-4xl text-white sm:text-5xl`}>The vision behind HYI.AI</h2>
          <p className="mt-2 text-[#9C99B0]">Yakub Sheikh · Entrepreneur since 2012</p>
          <p className="mt-6 text-lg leading-relaxed text-[#D2D0DD]">
            Yakub is an entrepreneur with an interest in technology, business development, strategic investments and building new opportunities. In 2017 he turned his vision into HYI, to help close the gap between ambitious plans and the people and expertise needed to deliver them.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#D2D0DD]">
            For him, entrepreneurship is about understanding problems, finding practical solutions, taking calculated risks and adapting when the market changes.
          </p>
          <blockquote className={`${display.className} mt-8 border-l-2 border-[#D57EEB] pl-5 text-xl leading-snug text-white sm:text-2xl`}>
            “I believe growth comes from understanding the right opportunities, bringing the right people together, and having the courage to keep moving forward.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
 
/* RIGHT side stays pinned, values scroll on the left */
function Values() {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <h2 className={`${display.className} mb-12 text-4xl text-white sm:text-6xl`}>What we value</h2>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-5">
          {values.map((v, i) => (
            <motion.div key={v.t} onViewportEnter={() => setActive(i)} viewport={{ amount: 0.6 }}
              initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className={`${card} p-7 sm:p-9 lg:min-h-[40vh]`}>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{v.t}</h3>
              <p className="mt-3 leading-relaxed text-[#B9B6CC]">{v.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-28 flex h-[60vh] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#D57EEB]/20 to-[#FCCB90]/10 p-10">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.45, ease }}>
                <div className={`${display.className} text-5xl leading-tight ${grad}`}>{values[active].t}</div>
              </motion.div>
            </AnimatePresence>
            <p className="text-[#D2D0DD]">Values are not something to write down and forget. They show in how we communicate, decide and keep our promises.</p>
            <div className="flex gap-2">
              {values.map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= active ? "bg-[#FCCB90]" : "bg-white/15"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
/* page stays pinned while cards travel sideways */
function Future() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const m = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    m(); window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  return (
    <section ref={ref} style={{ height: `calc(100svh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5">
          <h2 className={`${display.className} text-4xl text-white sm:text-6xl`}>Our future</h2>
          <p className="mt-3 max-w-xl text-[#D2D0DD]">We have come a long way, and there is still so much to do.</p>
        </div>
        <motion.div ref={track} style={{ x }} className="mt-10 flex w-max gap-5 px-5 sm:gap-6 lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
          {future.map((f) => (
            <div key={f.t} className={`${card} flex h-[45vh] min-h-[280px] w-[78vw] shrink-0 flex-col justify-end p-7 sm:w-[24rem] sm:p-9`}>
              <h3 className={`${display.className} text-2xl text-white sm:text-3xl`}>{f.t}</h3>
              <p className="mt-3 leading-relaxed text-[#B9B6CC]">{f.d}</p>
            </div>
          ))}
        </motion.div>
        <div className="mx-auto mt-10 h-1 w-[min(90%,40rem)] overflow-hidden rounded-full bg-white/10">
          <motion.div style={{ scaleX: scrollYProgress, originX: 0 }} className="h-full w-full bg-gradient-to-r from-[#FCCB90] to-[#D57EEB]" />
        </div>
      </div>
    </section>
  );
}
 
function Closing() {
  return (
    <section className="px-5 pb-28 pt-16 text-center sm:pb-40">
      <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }}>
        <h2 className={`${display.className} mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-7xl`}>
          Growing with change.<br /><span className={grad}>Moving forward together.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#D2D0DD]">
          We started HYI with a simple idea in 2017. Today we are building on it with a bigger vision, a global outlook and an open mind.
        </p>
      </motion.div>
    </section>
  );
}
 
export default function AboutUsPremium() {
  return (
    <MotionConfig reducedMotion="user">
      <Header/>
      {/* no overflow-hidden here: it would break the sticky sections */}
      <main className="w-full overflow-x-clip bg-[#07060F] text-white">

        <Hero />
        <WhoWeAre />
        <Story />
        <Belief />
        <VisionMission />
        <Founder />
        <Values />
        <Future />
        <Closing />
      </main>
      <Footer/>
    </MotionConfig>
  );
}
 