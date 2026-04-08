import type { ComponentProps, ReactNode } from "react";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

type SectionShellProps = Omit<ComponentProps<"section">, "children"> & {
  children: ReactNode;
  containerClassName?: string;
  containerSize?: "default" | "wide" | "narrow" | "full";
};

export function SectionShell({
  className,
  containerClassName,
  containerSize = "default",
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      className={cn(
        "section-shell relative py-24 sm:py-32",
        "last:pb-28 sm:last:pb-32",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="section-shell-divider motion-safe-section-divider pointer-events-none absolute inset-x-12 top-0 h-px -z-10 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />
      <div
        aria-hidden="true"
        className="section-shell-atmosphere motion-safe-section-atmosphere pointer-events-none absolute left-1/2 top-0 h-36 w-[min(70rem,88vw)] -z-10 -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.055),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="section-shell-handoff motion-safe-section-handoff pointer-events-none absolute inset-x-0 bottom-0 h-24 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.014)_28%,rgba(4,8,20,0.065)_100%)]"
      />
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
