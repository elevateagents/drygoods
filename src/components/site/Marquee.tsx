type Props = {
  items: string[];
  className?: string;
  fast?: boolean;
  invert?: boolean;
};

export function Marquee({ items, className = "", fast, invert }: Props) {
  const dot = invert ? "bg-heat" : "bg-ice";
  const bg = invert ? "bg-paper text-ink border-y border-ink/15" : "bg-ink text-paper border-y border-ink";
  return (
    <div className={`${bg} py-5 overflow-hidden ${className}`}>
      <div className={`flex whitespace-nowrap ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-10 items-center px-5 shrink-0">
            {items.map((it, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  {it}
                </span>
                <span className={`size-3 ${dot} rounded-full shrink-0`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
