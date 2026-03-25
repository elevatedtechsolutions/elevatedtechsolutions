import type { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
  variant?: "up" | "fade" | "scale";
};

export function Reveal({
  className,
  delay = 0,
  variant = "up",
  style,
  ...props
}: RevealProps) {
  return (
    <div
      className={cn(
        variant === "up"
          ? "motion-safe-fade-up"
          : variant === "scale"
            ? "motion-safe-scale-in"
            : "motion-safe-fade",
        className
      )}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`
        } as CSSProperties
      }
      {...props}
    />
  );
}
