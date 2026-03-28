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
      <div
        aria-hidden="true"
        className="motion-safe-entrance-glow pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.16),transparent_30%),radial-gradient(circle_at_50%_18%,rgba(59,130,246,0.12),transparent_38%)]"
      />
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

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="motion-safe-shell-chrome">
          <SiteHeader />
        </div>
        <main
          id="main-content"
          tabIndex={-1}
          className="motion-safe-page-entrance flex-1 focus:outline-none"
        >
          {children}
        </main>
        <div className="motion-safe-shell-footer">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
