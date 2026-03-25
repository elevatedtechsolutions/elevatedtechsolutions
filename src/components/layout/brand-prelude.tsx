import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandPreludeProps = {
  mode?: "overlay" | "loading";
  className?: string;
};

export function BrandPrelude({
  mode = "overlay",
  className
}: BrandPreludeProps) {
  const isOverlay = mode === "overlay";

  return (
    <div
      aria-hidden={isOverlay}
      className={cn(
        isOverlay
          ? "motion-safe-prelude pointer-events-none fixed inset-0 z-[70] flex items-center justify-center px-6"
          : "relative flex min-h-[44vh] items-center justify-center px-6 py-16 sm:min-h-[50vh]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_30%),linear-gradient(180deg,rgba(3,8,19,0.18),rgba(3,8,19,0.72))]" />

      <div className="motion-safe-prelude-panel relative isolate flex w-full max-w-[22rem] flex-col items-center gap-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,22,38,0.9),rgba(6,10,20,0.92))] px-8 py-8 text-center shadow-[0_32px_120px_rgba(2,12,27,0.5)] backdrop-blur-2xl sm:px-9 sm:py-9">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/44 to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 top-[-5rem] h-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="accent-ring motion-safe-prelude-mark relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
          <Image
            src="/images/branding/elevated-tech-solutions-mark.png"
            alt=""
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-2">
          <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.34em] text-cyan-200/72">
            {siteConfig.shortName}
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            {siteConfig.name}
          </h2>
          <p className="mx-auto max-w-[16rem] text-sm leading-6 text-text-soft/82">
            Modern websites with a premium first impression.
          </p>
        </div>

        <div className="relative h-px w-36 overflow-hidden rounded-full bg-white/10">
          <span className="motion-safe-prelude-line absolute inset-y-0 left-[-30%] w-24 bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />
        </div>
      </div>
    </div>
  );
}
