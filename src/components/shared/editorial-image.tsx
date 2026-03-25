import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

import { stockImages, type StockImageKey } from "@/config/stock-images";
import { cn } from "@/lib/utils";

type EditorialImageProps = Omit<ComponentProps<"div">, "children"> & {
  image: StockImageKey;
  alt?: string;
  children?: ReactNode;
  imageClassName?: string;
  overlayClassName?: string;
  motion?: "static" | "hover" | "drift";
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({
  image,
  alt,
  className,
  children,
  imageClassName,
  overlayClassName,
  motion = "hover",
  priority = false,
  sizes = "(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw",
  ...props
}: EditorialImageProps) {
  const asset = stockImages[image];

  return (
    <div
      className={cn(
        "group/editorial relative isolate overflow-hidden rounded-[1.85rem] border border-white/8 bg-slate-950/40",
        className
      )}
      {...props}
    >
      <Image
        fill
        priority={priority}
        src={asset.src}
        alt={alt ?? asset.alt}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          motion === "hover" && "group-hover/editorial:scale-[1.035]",
          motion === "drift" && "motion-safe-image-drift",
          imageClassName
        )}
      />
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/editorial:opacity-[0.92] bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.26)_44%,rgba(2,6,23,0.74)_100%)]",
          overlayClassName
        )}
      />
      {children ? (
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/editorial:-translate-y-1">
          {children}
        </div>
      ) : null}
    </div>
  );
}
