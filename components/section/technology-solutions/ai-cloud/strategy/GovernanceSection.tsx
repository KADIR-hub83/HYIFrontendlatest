"use client";

import GovernanceRadar from "./GovernanceRadar";

export default function GovernanceSection() {
  return (
    <section className="bg-[#030303] py-10">
      <div className="mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-[.65fr_1.35fr]">
        <div>
       

          <h2 className="hyi-h1 hyi-white">
            Innovation
            <span className="block hyi-blue">with boundaries.</span>
          </h2>

          <p className="mt-2 max-w-[520px] hyi-p">
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