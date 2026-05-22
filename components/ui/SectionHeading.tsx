import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Encabezado de sección consistente: eyebrow + título + subtítulo.
 * Mantiene el ritmo tipográfico premium en toda la página.
 */
type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
