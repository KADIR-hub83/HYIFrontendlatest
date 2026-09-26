const regions = [
  {
    name: "North America",
    label: "Product & Strategy",
    position: "left-[12%] top-[34%]",
  },
  {
    name: "Europe",
    label: "Platform Engineering",
    position: "left-[43%] top-[27%]",
  },
  {
    name: "India",
    label: "Engineering Hub",
    position: "left-[61%] top-[52%]",
  },
  {
    name: "APAC",
    label: "Cloud & Data",
    position: "right-[8%] top-[39%]",
  },
];

export default function GlobalDeliveryNetwork() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-purple-800/[0.08] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Global Engineering Network
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
            Distributed globally.
            <span className="block bg-gradient-to-r from-[#ddaaff] to-[#7758ff] bg-clip-text text-transparent">
              Engineered as one team.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 text-white/35">
            Create a connected delivery network combining global business
            proximity with scalable engineering capability.
          </p>
        </div>

        <div className="relative mt-16 h-[520px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#060609] md:h-[620px]">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.15) 1px,transparent 1px)",
              backgroundSize: "55px 55px",
              maskImage:
                "radial-gradient(circle at center,black,transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center,black,transparent 80%)",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.09] md:h-[460px] md:w-[460px]" />

          <div className="network-ring absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/[0.12] md:h-[370px] md:w-[370px]" />

          <div className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.06] shadow-[0_0_80px_rgba(126,55,220,.28)]">
            <div className="text-center">
              <div className="text-xl font-semibold text-purple-100/75">HYI</div>
              <div className="mt-1 text-[6px] uppercase tracking-[1.3px] text-white/20">
                Network
              </div>
            </div>
          </div>

          {/* desktop regions */}
          {regions.map((region, index) => (
            <div
              key={region.name}
              className={`absolute ${region.position} hidden md:block`}
            >
              <div className="network-location group rounded-2xl border border-white/[0.07] bg-[#09080d]/80 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                  <span className="text-[9px] text-white/60">
                    {region.name}
                  </span>
                </div>
                <div className="mt-2 text-[7px] uppercase tracking-[1.2px] text-purple-300/35">
                  {region.label}
                </div>
              </div>

              <span
                className="network-ping absolute -right-1 -top-1 h-[7px] w-[7px] rounded-full bg-purple-300"
                style={{ animationDelay: `${index * 0.7}s` }}
              />
            </div>
          ))}

          {/* mobile */}
          <div className="absolute inset-x-5 bottom-7 grid grid-cols-2 gap-3 md:hidden">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-xl border border-white/[0.06] bg-black/40 p-3 backdrop-blur-xl"
              >
                <div className="text-[9px] text-white/55">{region.name}</div>
                <div className="mt-1 text-[6px] uppercase tracking-[1px] text-purple-300/30">
                  {region.label}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/[0.06] bg-black/30 px-4 py-2">
            <span className="whitespace-nowrap text-[7px] uppercase tracking-[2px] text-white/25">
              Always Connected • Always Engineering
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes networkRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .network-ring {
          animation: networkRotate 30s linear infinite;
        }

        @keyframes networkPulse {
          0%,100% {
            transform: scale(.8);
            opacity:.2;
            box-shadow:0 0 0 rgba(192,132,252,0);
          }
          50% {
            transform:scale(1.3);
            opacity:1;
            box-shadow:0 0 18px rgba(192,132,252,.6);
          }
        }

        .network-ping {
          animation: networkPulse 3s ease-in-out infinite;
        }

        .network-location {
          transition: transform .35s ease, border-color .35s ease;
        }

        .network-location:hover {
          transform: translateY(-5px);
          border-color: rgba(192,132,252,.25);
        }
      `}</style>
    </section>
  );
}