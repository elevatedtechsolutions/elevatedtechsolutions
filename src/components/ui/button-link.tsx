import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-cyan-200/24 bg-[linear-gradient(180deg,rgba(149,241,255,0.98),rgba(63,201,255,0.92))] text-slate-950 shadow-[0_16px_34px_rgba(50,200,255,0.14)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_22px_46px_rgba(50,200,255,0.2)] active:translate-y-0 active:scale-[0.988] active:shadow-[0_14px_28px_rgba(50,200,255,0.14)]",
  secondary:
    "border border-white/10 bg-white/[0.035] text-white backdrop-blur-md hover:-translate-y-1 hover:scale-[1.01] hover:border-white/16 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(2,12,27,0.22)] active:translate-y-0 active:scale-[0.988] active:shadow-[0_14px_28px_rgba(2,12,27,0.18)]",
  ghost:
    "border border-transparent bg-transparent text-slate-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04] hover:text-white active:translate-y-0 active:scale-[0.99]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-sm"
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  const showArrow = variant === "primary";
  const arrowClassName = "text-slate-950/72";

  return (
    <Link
      className={cn(
        "group/button relative isolate inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-[0.02em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "before:pointer-events-none before:absolute before:inset-[1px] before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "after:pointer-events-none after:absolute after:bottom-0 after:left-[-18%] after:top-0 after:w-[32%] after:-skew-x-12 after:opacity-0 after:blur-xl after:transition-all after:duration-700 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:left-[96%] hover:after:opacity-100",
        variant === "primary" &&
          "before:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] hover:before:opacity-100 after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.34),transparent)]",
        variant === "secondary" &&
          "before:bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_62%)] hover:before:opacity-100 after:bg-[linear-gradient(90deg,transparent,rgba(50,200,255,0.14),transparent)]",
        variant === "ghost" && "after:hidden before:hidden",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:opacity-100">
        <span
          className={cn(
            "absolute inset-0 rounded-full",
            variant === "primary" &&
              "shadow-[0_0_32px_rgba(149,241,255,0.14),inset_0_1px_0_rgba(255,255,255,0.24)]",
            variant === "secondary" &&
              "shadow-[0_0_24px_rgba(50,200,255,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]"
          )}
        />
      </span>

      <span className="relative z-10 flex items-center gap-2.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:-translate-y-[0.5px] group-active/button:translate-y-0">
        <span>{children}</span>
        {showArrow ? (
          <span
            aria-hidden="true"
            className={cn(
              "relative h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:translate-x-[0.28rem] group-active/button:translate-x-[0.12rem]",
              arrowClassName
            )}
          >
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-current" />
          </span>
        ) : null}
      </span>
    </Link>
  );
}
