"use client";
import { useState } from "react";
import Scramble from "./Scramble";

export default function EngageTabs({ items }: { items: { t: string; d: string }[] }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="hyi-neu-in flex flex-wrap gap-3 p-3" role="tablist">
        {items.map((m, k) => (
          <button
            key={m.t}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`hyi-skeu px-5 py-2.5 text-sm font-semibold ${k === i ? "is-active" : ""}`}
          >
            {m.t}
          </button>
        ))}
      </div>
      <div key={i} className="hyi-clay-soft hyi-pop mt-6 p-8">
        <p className="hyi-eyebrow">Engagement model</p>
        <h3 className="hyi-h2 hyi-white mt-3">
          <Scramble text={items[i].t} />
        </h3>
        <p className="hyi-p mt-4">{items[i].d}</p>
      </div>
    </div>
  );
}