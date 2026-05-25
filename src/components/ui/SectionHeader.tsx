import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto flex flex-col gap-4",
        align === "center" ? "items-center text-center max-w-3xl" : "items-start text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <span className="eyebrow flex items-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent via-pink-neon to-transparent" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-title text-gradient-neon">{title}</h2>
      {description ? (
        <p className="text-base text-chrome/80 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
