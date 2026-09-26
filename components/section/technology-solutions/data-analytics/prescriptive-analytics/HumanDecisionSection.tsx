import {
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const principles = [
  {
    icon: UserRoundCheck,
    title: "Human oversight",
    text: "Recommendations can support decision-makers while preserving approval for high-impact actions.",
  },
  {
    icon: ShieldCheck,
    title: "Policy constraints",
    text: "Business rules, permissions and operational boundaries can be encoded directly into decision models.",
  },
  {
    icon: BrainCircuit,
    title: "Explainable recommendations",
    text: "Surface objectives, assumptions, constraints and expected impact alongside a recommended action.",
  },
  {
    icon: CheckCircle2,
    title: "Outcome monitoring",
    text: "Compare recommended outcomes with observed results and continuously refine the decision system.",
  },
];

export default function HumanDecisionSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#e7dcf4]/40">
            RESPONSIBLE DECISION SYSTEMS
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            AI recommends.
            <span className="text-white/35">
              {" "}People stay in control.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[620px] text-[11px] leading-7 text-white/48">
            Prescriptive systems are strongest when optimization, governance,
            domain expertise and operational accountability are designed
            together.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-[270px] rounded-[26px] border border-white/[0.07] bg-[#070707] p-7"
              >
                <Icon
                  size={19}
                  strokeWidth={1}
                  className="text-[#e7dcf4]/55"
                />

                <h3 className="mt-12 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-5 text-[10px] leading-6 text-white/40">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}