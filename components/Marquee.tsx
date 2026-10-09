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

/** Infinite gold ticker. The track is duplicated so the loop is seamless. */
export function Marquee({ items, className, duration = 50 }: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span
            className={cn(
              "px-8 text-h3",
              item.tone === "solid" && "font-extrabold text-night",
              item.tone === "outline" && "font-extrabold text-transparent [-webkit-text-stroke:1.5px_#05462a]",
              item.tone === "gold" && "font-bold text-white",
              item.tone === "muted" &&
                "text-h4 font-semibold uppercase tracking-[0.2em] text-night/70"
            )}
          >
            {item.text}
          </span>
          <span className="text-2xl text-night" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden bg-gold-gradient py-7 shadow-[0_-1px_0_0_rgba(255,255,255,0.4)]",
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
    </div>
  );
}
