"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Brand } from "@/components/shared/brand";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const desktopNavLinkClassName =
  "relative rounded-full px-3.5 py-2.5 text-sm font-medium tracking-[0.01em] text-slate-300 transition-all duration-300 hover:bg-white/[0.035] hover:text-white after:absolute after:inset-x-3.5 after:bottom-[0.45rem] after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-cyan-300/0 after:via-cyan-200/72 after:to-cyan-300/0 after:transition-transform after:duration-300 hover:after:scale-x-100";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-4 sm:pt-5">
      <Container size="wide">
        <div className="site-outline relative flex items-center gap-4 rounded-[1.8rem] bg-background/56 px-4 py-4 backdrop-blur-3xl sm:px-6">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/34 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-10 w-40 bg-[radial-gradient(circle_at_center,rgba(50,200,255,0.06),transparent_72%)]" />
          <Brand />

          <nav
            aria-label="Primary navigation"
            className="ml-6 hidden flex-1 items-center justify-center gap-1.5 xl:flex"
          >
            {siteConfig.primaryNavigation.map((item) => {
              const isActive = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    desktopNavLinkClassName,
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive &&
                      "bg-white/[0.045] text-white after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 xl:flex">
            <ButtonLink href={siteConfig.cta.href} size="sm">
              {siteConfig.cta.label}
            </ButtonLink>
          </div>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <ButtonLink
              href={siteConfig.cta.href}
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Contact
            </ButtonLink>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-white transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(50,200,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-5 bg-current transition-all duration-300",
                    isOpen && "top-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-px w-5 bg-current transition-all duration-300",
                    isOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] h-px w-5 bg-current transition-all duration-300",
                    isOpen && "top-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>

          <div
            className={cn(
              "fixed inset-0 z-40 xl:hidden",
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            )}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className={cn(
                "absolute inset-0 bg-slate-950/72 backdrop-blur-sm transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            />

            <div
              id="mobile-navigation"
              className={cn(
                "absolute inset-x-4 top-24 rounded-[2rem] border border-white/10 bg-surface-strong/96 p-5 shadow-[0_26px_70px_rgba(2,12,27,0.32)] transition-all duration-300 sm:inset-x-6",
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              )}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/36 to-transparent" />
              <div className="mb-4 flex items-center justify-between">
                <Brand compact />
                <span className="font-display text-xs uppercase tracking-[0.32em] text-cyan-200/68">
                  Navigation
                </span>
              </div>

              <nav aria-label="Mobile navigation" className="grid gap-2">
                {siteConfig.primaryNavigation.map((item) => {
                  const isActive = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-[1.2rem] border px-4 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "border-cyan-300/22 bg-cyan-400/10 text-white"
                          : "border-white/8 bg-white/[0.03] text-slate-200 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={siteConfig.cta.href} className="flex-1">
                  {siteConfig.cta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
