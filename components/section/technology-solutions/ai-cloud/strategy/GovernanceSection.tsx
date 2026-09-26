"use client";

import GovernanceRadar from "./GovernanceRadar";

export default function GovernanceSection() {
  return (
    <section className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
            05 / GOVERNANCE
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-0.055em] md:text-7xl">
            Innovation
            <span className="block text-[#7046e6]">with boundaries.</span>
          </h2>

          <p className="mt-8 max-w-[520px] text-[14px] leading-8 text-white/[0.5]">
            AI cloud governance establishes ownership, policy, access,
            security, model controls, data boundaries, cost accountability and
            operational standards so teams can move quickly without losing
            control.
          </p>
        </div>

        <GovernanceRadar />
      </div>
    </section>
  );
}