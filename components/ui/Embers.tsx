import type { CSSProperties } from "react";

type Ember = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  tone: "lime" | "leaf" | "gold";
};

/** Fixed pseudo-random values, so the server and browser render the same embers. */
function buildEmbers(count: number): Ember[] {
  let seed = 7;
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    left: Math.round(next() * 100),
    size: 4 + Math.round(next() * 8),
    duration: 5 + next() * 7,
    delay: -next() * 12,
    drift: Math.round((next() - 0.5) * 90),
    tone: i % 7 === 0 ? "gold" : i % 3 === 0 ? "leaf" : "lime",
  }));
}

const EMBERS = buildEmbers(48);

const glow = {
  lime: "bg-lime shadow-[0_0_10px_3px_rgba(185,240,106,0.85)]",
  leaf: "bg-leaf-light shadow-[0_0_10px_3px_rgba(111,227,154,0.85)]",
  gold: "bg-gold-light shadow-[0_0_10px_3px_rgba(230,200,102,0.8)]",
};

/** Glowing green embers drifting upward. Place inside a relatively positioned, overflow-hidden box. */
export function Embers() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [container-type:size]"
      aria-hidden="true"
    >
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className={`absolute bottom-[-12px] rounded-full opacity-0 ${glow[e.tone]}`}
          style={
            {
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              "--drift": `${e.drift}px`,
              animation: `ember-rise ${e.duration.toFixed(2)}s ease-out ${e.delay.toFixed(2)}s infinite`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
