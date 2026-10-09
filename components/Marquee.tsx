import { cn } from "@/lib/utils";

export type MarqueeItem = {
  text: string;
  tone: "solid" | "outline" | "gold" | "muted";
};

type MarqueeProps = {
  items: MarqueeItem[];
  className?: string;
  duration?: number;
};

/** Infinite ticker. The track is duplicated so the loop is seamless. */
export function Marquee({ items, className, duration = 50 }: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span
            className={cn(
              "px-8 text-h3",
              item.tone === "solid" && "font-extrabold text-ink",
              item.tone === "outline" && "text-outline-gold font-extrabold",
              item.tone === "gold" && "gold-text font-bold",
              item.tone === "muted" &&
                "text-h4 font-semibold uppercase tracking-[0.2em] text-gold-deep"
            )}
          >
            {item.text}
          </span>
          <span className="text-2xl text-gold" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden border-y border-gold/30 bg-white py-8",
        className
      )}
    >
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {track(false)}
        {track(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white" />
    </div>
  );
}
