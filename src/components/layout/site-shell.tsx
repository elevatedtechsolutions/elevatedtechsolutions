import { BrandPrelude } from "@/components/layout/brand-prelude";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BackgroundGlow } from "@/components/shared/background-glow";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundGlow />
      <BrandPrelude />
      <div
        aria-hidden="true"
        className="motion-safe-vignette-breathe pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,rgba(1,4,12,0.16)_80%,rgba(1,4,12,0.62)_100%)]"
      />
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only"
      >
        Skip to content
      </a>

      <div className="motion-safe-shell-reveal relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
