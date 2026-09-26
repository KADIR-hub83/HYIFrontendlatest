"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import CloudTransformationHero from "./CloudTransformationHero";
import TransformationThesis from "./TransformationThesis";
import CloudOperatingModel from "./CloudOperatingModel";
import TransformationPaths from "./TransformationPaths";
import AICloudFoundation from "./AICloudFoundation";
import PlatformEngineering from "./PlatformEngineering";
import DataAIReadiness from "./DataAIReadiness";
import CloudGovernance from "./CloudGovernance";
import CloudSecurity from "./CloudSecurity";
import FinOpsSection from "./FinOpsSection";
import TransformationRoadmap from "./TransformationRoadmap";
import TransformationPrinciples from "./TransformationPrinciples";
import CloudOutcomes from "./CloudOutcomes";
import CloudTransformationCTA from "./CloudTransformationCTA";

export default function CloudTransformationClient() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-hidden bg-[#000000] text-white">
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      <CloudTransformationHero />
      <TransformationThesis />
      <CloudOperatingModel />
      <TransformationPaths />
      <AICloudFoundation />
      <PlatformEngineering />
      <DataAIReadiness />
      <CloudGovernance />
      <CloudSecurity />
      <FinOpsSection />
      <TransformationRoadmap />
      <TransformationPrinciples />
      <CloudOutcomes />
      <CloudTransformationCTA />
    </div>
  );
}