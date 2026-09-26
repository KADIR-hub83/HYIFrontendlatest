"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import DataTransformationHero from "./DataTransformationHero";
import DataManifesto from "./DataManifesto";
import DataRealitySection from "./DataRealitySection";
import TransformationIndex from "./TransformationIndex";
import DataFoundation from "./DataFoundation";
import DataLifecycle from "./DataLifecycle";
import AIReadyData from "./AIReadyData";
import DataGovernance from "./DataGovernance";
import DataArchitecture from "./DataArchitecture";
import DataOperatingModel from "./DataOperatingModel";
import TransformationRoadmap from "./TransformationRoadmap";
import DataPrinciples from "./DataPrinciples";
import DataOutcomes from "./DataOutcomes";
import DataTransformationCTA from "./DataTransformationCTA";

export default function DataTransformationExperience() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-hidden bg-[#000000] text-white">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      <DataTransformationHero />
      <TransformationIndex />
      <DataManifesto />
      <DataRealitySection />
      <DataFoundation />
      <DataLifecycle />
      <AIReadyData />
      <DataGovernance />
      <DataArchitecture />
      <DataOperatingModel />
      <TransformationRoadmap />
      <DataPrinciples />
      <DataOutcomes />
      <DataTransformationCTA />
    </div>
  );
}