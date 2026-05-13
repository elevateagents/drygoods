export function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-display text-sm font-black">{n}/</span>
      <div className="h-px flex-1 bg-ink/15" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
        {label}
      </span>
    </div>
  );
}
