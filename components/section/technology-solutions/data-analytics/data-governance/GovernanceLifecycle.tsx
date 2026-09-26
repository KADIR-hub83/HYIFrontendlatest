const lifecycle = [
  {
    step: "01",
    title: "Create / Acquire",
    text: "Understand why data is collected, where it originates and which requirements apply.",
  },
  {
    step: "02",
    title: "Classify",
    text: "Identify business importance, sensitivity and governance requirements.",
  },
  {
    step: "03",
    title: "Store",
    text: "Apply appropriate technical, security and metadata standards.",
  },
  {
    step: "04",
    title: "Transform",
    text: "Maintain traceability and quality while data is cleaned, joined and enriched.",
  },
  {
    step: "05",
    title: "Use & Share",
    text: "Enable approved analytics, operational and AI use while respecting policy.",
  },
  {
    step: "06",
    title: "Retain / Dispose",
    text: "Manage information according to applicable lifecycle and retention requirements.",
  },
];

export default function GovernanceLifecycle() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
            DATA LIFECYCLE
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Governance follows data
            <span className="text-white/30"> everywhere.</span>
          </h2>
        </div>

        <div className="mt-20 border-t border-white/[0.08]">
          {lifecycle.map((item) => (
            <div
              key={item.step}
              className="grid gap-4 border-b border-white/[0.07] py-7 md:grid-cols-[100px_1fr_1.5fr]"
            >
              <span className="font-mono text-[6px] text-[#ddd2e9]/30">
                {item.step}
              </span>

              <h3 className="text-[13px] font-medium text-white/70">
                {item.title}
              </h3>

              <p className="max-w-[650px] text-[9px] leading-6 text-white/38">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}