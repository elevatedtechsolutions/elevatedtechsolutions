import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type CardTone = "default" | "hero" | "quiet";

type CardShellProps = ComponentProps<"div"> & {
  tone?: CardTone;
};

const toneClasses: Record<CardTone, string> = {
  default:
    "surface-panel hover:-translate-y-1 hover:border-white/12 hover:shadow-[0_26px_76px_rgba(2,12,27,0.36)]",
  hero:
    "surface-panel-strong shadow-[0_30px_100px_rgba(2,12,27,0.4)]",
  quiet:
    "rounded-[1.6rem] border border-white/7 bg-white/[0.025] backdrop-blur-lg hover:-translate-y-0.5 hover:border-white/12 hover:bg-white/[0.04] hover:shadow-[0_22px_60px_rgba(2,12,27,0.26)]"
};

export function CardShell({
  className,
  tone = "default",
  ...props
}: CardShellProps) {
  return (
    <div
      className={cn(
        "group/card relative isolate overflow-hidden [transform:translateZ(0)] transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
        tone === "hero" &&
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_24%,transparent_72%,rgba(50,200,255,0.05))]",
        tone !== "hero" && "hover:after:opacity-100",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
