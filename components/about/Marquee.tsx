export default function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="hyi-marquee py-4">
      <div className={`hyi-marquee-track ${reverse ? "rev" : ""}`}>
        {row.map((t, i) => (
          <span key={i} className="hyi-chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}