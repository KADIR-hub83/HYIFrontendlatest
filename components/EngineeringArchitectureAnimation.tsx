"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

// Lottie JSON ka minimum structure jo hum validate karte hain
type LottieAnimationData = {
  layers: unknown[];
  fr: number;
  op: number;
  [key: string]: unknown;
};

const ANIMATION_URL = "/lotties/engineering-architecture.json";

function isValidLottie(data: unknown): data is LottieAnimationData {
  if (typeof data !== "object" || data === null) return false;

  const d = data as Record<string, unknown>;

  return Array.isArray(d.layers) && !!d.fr && !!d.op;
}

export default function EngineeringArchitectureAnimation() {
  const [animationData, setAnimationData] =
    useState<LottieAnimationData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadAnimation() {
      try {
        const response = await fetch(ANIMATION_URL, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`JSON loading failed: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!isValidLottie(data)) {
          throw new Error("Invalid Lottie JSON structure");
        }

        if (mounted) setAnimationData(data);
      } catch (err) {
        console.error("Lottie Error:", err);

        if (mounted) {
          setError(err instanceof Error ? err.message : "Animation failed");
        }
      }
    }

    loadAnimation();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-red-400">
        Animation Error: {error}
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-white/50">
        Loading architecture...
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="h-full w-full"
    />
  );
}