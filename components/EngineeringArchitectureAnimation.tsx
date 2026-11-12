
"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function EngineeringArchitectureAnimation() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadAnimation() {
      try {
      const response = await fetch(
  "/lotties/engineering-architecture.json",
  { cache: "no-store" }
);

        if (!response.ok) {
          throw new Error(`JSON loading failed: ${response.status}`);
        }

        const data = await response.json();

        if (!data.layers || !data.fr || !data.op) {
          throw new Error("Invalid Lottie JSON structure");
        }

        if (mounted) setAnimationData(data);
      } catch (err) {
        console.error("Lottie Error:", err);

        if (mounted) {
          setError(
            err instanceof Error ? err.message : "Animation failed"
          );
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
      <div className="h-full flex items-center justify-center text-red-400 text-sm">
        Animation Error: {error}
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="h-full flex items-center justify-center text-white/50 text-sm">
        Loading architecture...
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="w-full h-full"
    />
  );
}
