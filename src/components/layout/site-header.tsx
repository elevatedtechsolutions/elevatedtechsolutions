"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Brand } from "@/components/shared/brand";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const desktopNavLinkClassName =
  "relative rounded-full px-3.5 py-2.5 text-sm font-medium tracking-[0.01em] text-slate-300 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-400 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-white/[0.04] hover:text-white hover:before:opacity-100 after:absolute after:inset-x-3.5 after:bottom-[0.45rem] after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-cyan-300/0 after:via-cyan-200/72 after:to-cyan-300/0 after:transition-transform after:duration-400 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileDialogRef = useRef<HTMLDivElement | null>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const shouldRestoreFocusRef = useRef(false);

  const closeMobileMenu = () => {
    shouldRestoreFocusRef.current =
      !!mobileDialogRef.current &&
      document.activeElement instanceof Node &&
      mobileDialogRef.current.contains(document.activeElement);

    setIsOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    closeMobileMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = isOpen ? "hidden" : previousBodyOverflow;
    documentElement.style.overflow = isOpen ? "hidden" : previousHtmlOverflow;

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      if (shouldRestoreFocusRef.current) {
        menuTriggerRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }

      return;
    }

    mobileCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const mobileNavigationOverlay =
    isMounted &&
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[120] xl:hidden"
      >
        <div
          className="absolute inset-0 bg-[rgba(2,6,23,0.82)] transition-opacity duration-300 opacity-100"
        />
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),linear-gradient(180deg,rgba(3,8,20,0.1),rgba(3,8,20,0.52))] backdrop-blur-xl transition-opacity duration-300 opacity-100"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.18),transparent_56%)] transition-opacity duration-300 opacity-100"
        />

        <div className="pointer-events-none relative flex h-full items-start justify-center overflow-y-auto px-3 pb-5 pt-[calc(env(safe-area-inset-top,0px)+0.9rem)] sm:px-5 sm:pt-[calc(env(safe-area-inset-top,0px)+1.15rem)]">
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={mobileDialogRef}
            className="pointer-events-auto relative w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(11,19,35,0.995),rgba(7,12,24,0.995))] shadow-[0_40px_140px_rgba(2,12,27,0.78),0_0_0_1px_rgba(148,163,184,0.05)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-0 scale-100 opacity-100"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)_22%,rgba(255,255,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />

            <div className="relative flex max-h-[calc(100dvh-2rem)] flex-col overflow-y-auto overscroll-contain p-5 sm:max-h-[calc(100dvh-2.5rem)] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div className="flex items-center gap-3">
                  <Brand compact />
                  <span className="font-display text-xs uppercase tracking-[0.32em] text-cyan-200/68">
                    Navigation
                  </span>
                </div>

                <button
                  ref={mobileCloseButtonRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white transition-all duration-300 hover:border-cyan-300/28 hover:bg-white/[0.08] hover:shadow-[0_0_26px_rgba(50,200,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                  </span>
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="grid gap-2.5">
                {siteConfig.primaryNavigation.map((item) => {
                  const isActive = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href as Route}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMobileMenu}
                      className={cn(
                        "rounded-[1.2rem] border px-4 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "border-cyan-300/26 bg-cyan-400/12 text-white shadow-[0_16px_38px_rgba(8,145,178,0.18)]"
                          : "border-white/8 bg-[rgba(255,255,255,0.035)] text-slate-200 hover:border-cyan-300/20 hover:bg-white/[0.07]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/8 pb-[calc(env(safe-area-inset-bottom,0px)+0.25rem)] pt-5">
                <ButtonLink
                  href={siteConfig.cta.href}
                  onClick={closeMobileMenu}
                  className="flex-1"
                >
                  {siteConfig.cta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <header className="relative z-50 h-[6.35rem] sm:h-[6.9rem]">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4",
          isScrolled ? "pt-2.5 sm:pt-3.5" : "pt-4 sm:pt-5"
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-24 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(2,6,23,0.62),rgba(2,6,23,0))]" />
        </div>

        <Container size="wide">
          <div
            className={cn(
              "site-outline relative flex items-center gap-4 rounded-[1.8rem] px-4 backdrop-blur-3xl transition-[transform,border-color,background-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6",
              isScrolled
                ? "translate-y-0 py-3.5 border-white/12 bg-[rgba(4,8,20,0.82)] shadow-[0_26px_70px_rgba(2,12,27,0.34),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "py-4 bg-background/56"
            )}
          >
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
                    href={item.href as Route}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      desktopNavLinkClassName,
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive &&
                        "bg-white/[0.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(2,12,27,0.14)] after:scale-x-100 before:opacity-100"
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
                Quote
              </ButtonLink>

              <button
                ref={menuTriggerRef}
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => {
                  if (isOpen) {
                    closeMobileMenu();
                    return;
                  }

                  shouldRestoreFocusRef.current = false;
                  setIsOpen(true);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(50,200,255,0.1)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
          </div>
        </Container>
      </div>
      {mobileNavigationOverlay}
    </header>
  );
}
