import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandProps = {
  className?: string;
  compact?: boolean;
};

export function Brand({ className, compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 text-left transition-transform duration-300 hover:-translate-y-0.5",
        className
      )}
    >
      <div className="accent-ring relative h-11 w-11 overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_0_34px_rgba(50,200,255,0.18)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_55%)] before:opacity-80">
        <Image
          src="/images/branding/elevated-tech-solutions-mark.png"
          alt="Elevated Tech Solutions logo"
          fill
          sizes="(max-width: 640px) 40px, 44px"
          className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {!compact ? (
        <div className="min-w-0">
          <span className="block font-display text-[0.67rem] font-medium uppercase tracking-[0.34em] text-cyan-200/68">
            Elevated
          </span>
          <span className="block text-sm font-semibold tracking-[0.1em] text-white transition-colors duration-300 group-hover:text-cyan-50">
            Tech Solutions
          </span>
        </div>
      ) : null}
    </Link>
  );
}
