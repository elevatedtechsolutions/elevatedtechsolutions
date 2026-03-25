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
        "relative py-24 sm:py-32",
        "before:pointer-events-none before:absolute before:inset-x-12 before:top-0 before:h-px before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent",
        "after:pointer-events-none after:absolute after:left-1/2 after:top-0 after:h-36 after:w-[min(70rem,88vw)] after:-z-10 after:-translate-x-1/2 after:bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.055),transparent_72%)]",
        "last:pb-28 sm:last:pb-32",
        "first:before:opacity-0 first:after:opacity-0",
        className
      )}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
