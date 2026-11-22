const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Java",
  ".NET",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Terraform",
  "GitHub Actions",
  "Machine Learning",
  "Generative AI",
  "Data Engineering",
];

const reverseTechnologies = [...technologies].reverse();

function TechRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "tech-marquee-reverse" : "tech-marquee"
        }`}
      >
        {duplicated.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="group flex min-w-[155px] items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 backdrop-blur-xl transition hover:border-purple-400/20 hover:bg-purple-500/[0.04]"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-purple-300/60 shadow-[0_0_8px_rgba(192,132,252,.4)]" />
            <span className="whitespace-nowrap text-[11px] text-white/45 transition group-hover:text-white/75">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechnologyEcosystem() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800/[0.07] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[800px] text-center">
     

          <h2 className="hyi-h1 hyi-white">
            Built around the
            <span className="block hyi-blue">
              technologies that matter.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-[680px] hyi-p">
            Modern frameworks, cloud platforms, data systems and AI
            technologies combined into one engineering ecosystem.
          </p>
        </div>
      </div>

      <div className="relative mt-6 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[15%] bg-gradient-to-r from-[#020203] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[15%] bg-gradient-to-l from-[#020203] to-transparent" />

        <TechRow items={technologies} />
        <TechRow items={reverseTechnologies} reverse />
        <TechRow items={technologies.slice(4).concat(technologies.slice(0, 4))} />
      </div>

      <div className="mx-auto mt-6 max-w-[1050px] px-5">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[25px] border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
          {[
            ["Frontend", "Digital Experience"],
            ["Backend", "Distributed Systems"],
            ["Cloud", "Modern Infrastructure"],
            ["AI & Data", "Intelligence"],
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#050507] px-5 py-6 text-center">
              <div className="hyi-h3 hyi-white">
                {title}
              </div>
              <div className="mt-2 hyi-p">
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes techMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes techMarqueeReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .tech-marquee {
          animation: techMarquee 42s linear infinite;
        }

        .tech-marquee-reverse {
          animation: techMarqueeReverse 46s linear infinite;
        }

        .tech-marquee:hover,
        .tech-marquee-reverse:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-marquee,
          .tech-marquee-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}