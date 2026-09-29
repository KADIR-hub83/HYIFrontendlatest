import dynamic from "next/dynamic";

import Header from "@/components/section/general/header";
import HeroSection from "@/components/section/landingPage/heroSection";
import HeroUserSlider from "@/components/section/general/heroUserSlider";
import ConnectWithDevelopers from "@/components/section/landingPage/connectWithDevelopers";
import Footer from "@/components/section/general/footer";

import FirstSection from "@/components/section/landingPage/firstSection";
import SecondSection from "@/components/section/landingPage/secondSection";
import ThirdSection from "@/components/section/landingPage/thirdSection";

import CybersecurityLanding from "@/components/section/landingPage/cybersecuritylanding";
import AITrainingLanding from "@/components/section/landingPage/Aitraninglanding";

import MotionReveal from "@/components/shared/motionReveal";

import { connectWithDeveloperData } from "@/components/data/landingPage";
import ClientSection from "@/components/section/landingPage/clientSection";
import TestimonialSection from "@/components/section/landingPage/TestimonialSection";

const Technologies = dynamic(
  () => import("@/components/section/general/technologies"),
);

export default function Home() {
  return (
    <section className="overflow-hidden">
      {/* ------------------------------------------------ */}
      {/* HEADER */}
      {/* ------------------------------------------------ */}

      <Header />

      {/* ------------------------------------------------ */}
      {/* HERO AREA */}
      {/* ------------------------------------------------ */}

      <section className=" flex w-full flex-col items-center justify-center overflow-hidden md:px-6">
        {/* MOBILE HERO */}

        <div className=" flex w-full items-center justify-center bg-[url('/Hero-map.png')] bg-cover bg-no-repeat lg:hidden " >
          <MotionReveal y={25} duration={0.8} className="w-full">
            <HeroSection />
          </MotionReveal>
        </div>

        {/* DESKTOP CONTENT */}

        <div
          className="
            relative
            isolate
            flex
            w-full
            max-w-[1280px]
            flex-col
            bg-background
            px-4
            py-6
            md:px-0
            lg:py-8
          "
        >
          <div className="flex flex-col gap-12 md:gap-16">
            {/* DESKTOP HERO */}

            <div className="hidden lg:block">
              <MotionReveal y={30} duration={0.9} className="w-full">
                <HeroSection />
              </MotionReveal>
            </div>

            {/* VERIFIED TALENTS */}

            <MotionReveal y={35} duration={0.75} delay={0.05}>
              <div className="relative">
                <HeroUserSlider />

                {/* PURPLE GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-1/2
                    -z-10
                    flex
                    -translate-x-1/2
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      h-[600px]
                      w-[600px]
                      rounded-full
                      bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)]
                      blur-3xl
                      md:h-[450px]
                      md:w-[950px]
                    "
                  />
                </div>
              </div>
            </MotionReveal>

            {/* CONNECT WITH DEVELOPERS */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center
                gap-8
              "
            >
              <MotionReveal y={25} duration={0.7} className="w-full">
                <div
                  className="
                    mx-auto
                    flex
                    w-full
                    flex-col
                    gap-1.5
                    text-center
                    lg:w-[55%]
                  "
                >
                  <h2 className="hyi-h2">{connectWithDeveloperData.heading}</h2>

                  <p className="hyi-p">{connectWithDeveloperData.paragraph}</p>
                </div>
              </MotionReveal>

              <MotionReveal
                y={45}
                delay={0.1}
                duration={0.8}
                className="w-full"
              >
                <ConnectWithDevelopers />
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* CYBERSECURITY */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={55} duration={0.85} className="w-full">
        <CybersecurityLanding />
        <AITrainingLanding />
      </MotionReveal>

      {/* ------------------------------------------------ */}
      {/* AI TRAINING */}
      {/* ------------------------------------------------ */}

      {/* <MotionReveal y={55} duration={0.85} className="w-full">
      
      </MotionReveal> */}

      {/* ------------------------------------------------ */}
      {/* FIRST SECTION */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={50} duration={0.85} className="w-full">
        <FirstSection />
      </MotionReveal>

      {/* ------------------------------------------------ */}
      {/* SECOND SECTION */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={50} duration={0.85} className="w-full">
        <SecondSection />
        <TestimonialSection />
      </MotionReveal>

      {/* ------------------------------------------------ */}
      {/* THIRD SECTION */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={50} duration={0.85} className="w-full">
        <ThirdSection />
      </MotionReveal>

      {/* ------------------------------------------------ */}
      {/* TECHNOLOGIES */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={45} duration={0.8} className="w-full">
        <ClientSection />
        <Technologies />
      </MotionReveal>

      {/* ------------------------------------------------ */}
      {/* FOOTER */}
      {/* ------------------------------------------------ */}

      <MotionReveal y={25} duration={0.7} className="w-full">
        <Footer />
      </MotionReveal>
    </section>
  );
}
