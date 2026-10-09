type MarqueeProps = {
  text: string;
  className?: string;
};

export function Marquee({ text, className }: MarqueeProps) {
  const items = Array.from({ length: 8 });
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee">
        {items.map((_, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em]"
          >
            {text}
            <span aria-hidden className="text-brown-300">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
