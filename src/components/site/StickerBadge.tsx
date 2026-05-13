import { cn } from "@/lib/utils";

type Variant = "patent" | "made" | "nomess" | "since";

const styles: Record<Variant, string> = {
  patent: "bg-ink text-paper rotate-[-4deg]",
  made: "bg-heat text-paper rotate-[6deg]",
  nomess: "bg-ice text-ink rotate-[-2deg]",
  since: "bg-cool text-paper rotate-[4deg]",
};

const labels: Record<Variant, string> = {
  patent: "PATENTED",
  made: "MADE IN USA",
  nomess: "NO MESS",
  since: "SINCE 2009",
};

export function StickerBadge({
  variant,
  children,
  className,
}: {
  variant: Variant;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-black tracking-widest uppercase shadow-md",
        styles[variant],
        className
      )}
    >
      {children ?? labels[variant]}
    </span>
  );
}
