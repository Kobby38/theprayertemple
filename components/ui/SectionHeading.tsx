import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Words to render in the gold gradient. */
  highlight?: string[];
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <ScrollReveal y={16}>
          <p
            className={cn(
              "eyebrow",
              align === "center" && "justify-center",
              light && "!text-gold-light"
            )}
          >
            {eyebrow}
          </p>
        </ScrollReveal>
      )}
      <h2 className={cn("mt-5 text-h2", light ? "text-white" : "text-ink")}>
        <SplitText text={title} highlight={highlight} />
      </h2>
      {description && (
        <ScrollReveal delay={0.15}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-body-lg",
              align === "center" && "mx-auto",
              light ? "text-white/70" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
