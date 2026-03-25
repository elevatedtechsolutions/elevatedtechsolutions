import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "default" | "wide" | "narrow" | "full";

type ContainerProps = ComponentProps<"div"> & {
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  narrow: "max-w-5xl",
  full: "max-w-none"
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
