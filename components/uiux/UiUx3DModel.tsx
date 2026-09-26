"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        loading?: "auto" | "lazy" | "eager";
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "auto-rotate-delay"?: string;
        "rotation-per-second"?: string;
        "interaction-prompt"?: "auto" | "none";
        "shadow-intensity"?: string;
        "shadow-softness"?: string;
        exposure?: string;
        "environment-image"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
      };
    }
  }
}

export default function UiUx3DModel() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <div className="relative min-h-[620px] w-full overflow-hidden sm:min-h-[700px] lg:min-h-[780px]">
      {/* background */}
      <div className="absolute inset-0 bg-[#07070A]" />

      <div className="absolute left-1/2 top-[48%] h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="absolute left-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="absolute right-[8%] bottom-[8%] h-[280px] w-[280px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ======================================================
          3D LAPTOP
      ====================================================== */}
      <div className="absolute inset-0 z-10">
        <model-viewer
          src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/Laptop/glTF-Binary/Laptop.glb"
          alt="Interactive 3D laptop for UI UX and coding"
          camera-controls
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="8deg"
          interaction-prompt="none"
          shadow-intensity="1.5"
          shadow-softness="1"
          exposure="1"
          environment-image="neutral"
          camera-orbit="-20deg 72deg 105%"
          field-of-view="27deg"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        />
      </div>

      {/* ======================================================
          FAKE SCREEN CONTENT - CODING + UI/UX
          Positioned over laptop display
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-[42%] z-20
          hidden
          h-[250px] w-[410px]
          -translate-x-1/2 -translate-y-1/2
          overflow-hidden rounded-[14px]
          border border-white/10
          bg-[#090A10]/95
          shadow-[0_0_80px_rgba(124,58,237,.25)]
          lg:block
        "
        style={{
          transform:
            "translate(-50%, -50%) perspective(900px) rotateX(1deg)",
        }}
      >
        {/* editor top bar */}
        <div className="flex h-9 items-center border-b border-white/[0.07] bg-[#11121A] px-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </div>

          <div className="ml-5 flex gap-1">
            <div className="rounded-md bg-white/[0.05] px-3 py-1 text-[7px] text-white/45">
              App.tsx
            </div>

            <div className="rounded-md px-3 py-1 text-[7px] text-white/20">
              dashboard.tsx
            </div>
          </div>
        </div>

        <div className="grid h-[calc(100%-36px)] grid-cols-[42%_58%]">
          {/* code editor */}
          <div className="border-r border-white/[0.06] bg-[#090A0F] p-3 font-mono text-[7px] leading-[1.7]">
            <p className="text-purple-300">
              const <span className="text-blue-300">Dashboard</span> = () =&gt;{" "}
              {"{"}
            </p>

            <p className="pl-3 text-white/50">return (</p>

            <p className="pl-6 text-pink-300">
              &lt;<span className="text-purple-300">section</span>
            </p>

            <p className="pl-9 text-blue-300">
              className=
              <span className="text-green-300">
                &quot;premium-ui&quot;
              </span>
            </p>

            <p className="pl-6 text-pink-300">&gt;</p>

            <p className="pl-9 text-white/50">
              &lt;Analytics /&gt;
            </p>

            <p className="pl-9 text-white/50">
              &lt;UserExperience /&gt;
            </p>

            <p className="pl-6 text-pink-300">
              &lt;/<span className="text-purple-300">section</span>&gt;
            </p>

            <p className="pl-3 text-white/50">);</p>

            <p className="text-purple-300">{"};"}</p>

            <div className="mt-4 space-y-1.5">
              {[82, 62, 75, 48].map((w) => (
                <div
                  key={w}
                  className="h-[3px] rounded-full bg-white/[0.05]"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>

          {/* UI UX preview */}
          <div className="bg-gradient-to-br from-[#171022] to-[#08080B] p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[7px] text-purple-300">
                  Product Dashboard
                </p>

                <p className="mt-1 text-[12px] font-semibold">
                  Design + Develop
                </p>
              </div>

              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            </div>

            <div className="mt-4 rounded-xl border border-purple-400/15 bg-purple-500/10 p-3">
              <p className="text-[6px] text-white/35">Engagement</p>

              <div className="mt-1 flex items-end justify-between">
                <span className="text-xl font-semibold">87%</span>
                <span className="text-[6px] text-green-300">
                  +12.8%
                </span>
              </div>

              <div className="mt-3 flex h-10 items-end gap-1">
                {[30, 48, 39, 60, 53, 77, 66, 91].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-700 to-purple-300"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white/[0.04] p-2">
                <p className="text-[6px] text-white/25">Users</p>
                <p className="mt-1 text-[10px] font-semibold">12.8K</p>
              </div>

              <div className="rounded-lg bg-white/[0.04] p-2">
                <p className="text-[6px] text-white/25">Rating</p>
                <p className="mt-1 text-[10px] font-semibold">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* top-left glass card */}
      <div className="pointer-events-none absolute left-5 top-10 z-30 hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl md:block lg:left-10">
        <p className="text-[9px] uppercase tracking-[0.25em] text-purple-300">
          UI / UX Workspace
        </p>

        <p className="mt-2 text-sm font-medium">
          Design + Engineering
        </p>

        <div className="mt-4 flex gap-2">
          <span className="h-7 w-7 rounded-lg bg-[#7C3AED]" />
          <span className="h-7 w-7 rounded-lg bg-[#A855F7]" />
          <span className="h-7 w-7 rounded-lg bg-[#D946EF]" />
        </div>
      </div>

      {/* right glass card */}
      <div className="pointer-events-none absolute right-5 top-16 z-30 hidden rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl md:block lg:right-10">
        <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
          Development
        </p>

        <div className="mt-3 space-y-2">
          {["React", "Next.js", "Figma"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs text-white/55"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* bottom-left */}
      <div className="pointer-events-none absolute bottom-14 left-5 z-30 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl md:block lg:left-10">
        <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
          Live workflow
        </p>

        <p className="mt-2 text-sm font-medium">
          Design → Code → Deploy
        </p>
      </div>

      {/* bottom-right */}
      <div className="pointer-events-none absolute bottom-14 right-5 z-30 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl md:block lg:right-10">
        <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
          Interactive model
        </p>

        <p className="mt-2 text-sm font-medium">
          Drag to explore
        </p>

        <div className="mt-3 h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[160px] bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}