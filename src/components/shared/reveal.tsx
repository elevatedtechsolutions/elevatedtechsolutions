"use client";

import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState
} from "react";

import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "scale";
type RevealPreset =
  | "default"
  | "heading"
  | "card"
  | "panel"
  | "cta"
  | "service"
  | "list";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
  variant?: RevealVariant;
  preset?: RevealPreset;
  once?: boolean;
  amount?: number;
};

const variantClasses: Record<RevealVariant, string> = {
  up: "motion-safe-fade-up",
  fade: "motion-safe-fade",
  scale: "motion-safe-scale-in"
};

const presetClasses: Record<RevealPreset, string> = {
  default: "",
  heading: "motion-preset-heading",
  card: "motion-preset-card",
  panel: "motion-preset-panel",
  cta: "motion-preset-cta",
  service: "motion-preset-service",
  list: "motion-preset-list"
};

export function Reveal({
  className,
  delay = 0,
  variant = "up",
  preset = "default",
  once = true,
  amount = 0.18,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: amount,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [amount, once]);

  return (
    <div
      ref={ref}
      data-reveal-visible={isVisible ? "true" : "false"}
      className={cn(
        "motion-reveal-base",
        variantClasses[variant],
        presetClasses[preset],
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
