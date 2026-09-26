const models = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "Llama",
  "Mistral",
  "Embedding Models",
  "Vision Models",
  "Speech AI",
  "Vector Search",
  "Knowledge Graphs",
  "AI Agents",
  "RAG",
  "Fine-Tuning",
  "Evaluation",
  "Guardrails",
  "Observability",
];

function Row({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...models, ...models];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "model-row-reverse" : "model-row"
        }`}
      >
        {items.map((model, index) => (
          <div
            key={`${model}-${index}`}
            className="flex min-w-[175px] items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-5 py-4"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-purple-300/60" />
            <span className="whitespace-nowrap text-[10px] text-white/40">
              {model}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ModelEcosystem() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="mx-auto max-w-[850px] px-5 text-center">
        <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
          Model Ecosystem
        </p>

        <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
          Model-agnostic by design.
          <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
            Enterprise-ready by architecture.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[690px] text-[14px] leading-7 text-white/34">
          Choose the right combination of foundation models, enterprise data,
          retrieval, agents and safety infrastructure for each workload.
        </p>
      </div>

      <div className="relative mt-16 space-y-4">
        <div className="absolute inset-y-0 left-0 z-10 w-[15%] bg-gradient-to-r from-[#020203] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-[15%] bg-gradient-to-l from-[#020203] to-transparent" />

        <Row />
        <Row reverse />
        <Row />
      </div>

      <style>{`
        @keyframes models {
          to { transform:translateX(-50%); }
        }

        @keyframes modelsReverse {
          from { transform:translateX(-50%); }
          to { transform:translateX(0); }
        }

        .model-row {
          animation:models 42s linear infinite;
        }

        .model-row-reverse {
          animation:modelsReverse 48s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .model-row,
          .model-row-reverse {
            animation:none;
          }
        }
      `}</style>
    </section>
  );
}