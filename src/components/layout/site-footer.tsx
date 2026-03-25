import Link from "next/link";

import { CardShell } from "@/components/shared/card-shell";
import { Brand } from "@/components/shared/brand";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

const legalRouteHrefs = new Set<string>(siteConfig.legalNavigation.map((item) => item.href));

export function SiteFooter() {
  return (
    <footer className="relative pt-10 sm:pt-12">
      <Container size="wide" className="pb-12 sm:pb-14">
        <CardShell className="mb-10 px-7 py-9 sm:px-10 sm:py-11">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,200,255,0.08),transparent_30%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
            <div className="space-y-5">
              <p className="font-display text-xs font-medium uppercase tracking-[0.34em] text-cyan-200/72">
                Elevated Tech Solutions
              </p>
              <h2 className="max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.05rem]">
                Modern websites with clearer structure, stronger presentation, and practical support.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-text-soft/86">
                Elevated Tech Solutions is built for small businesses, nonprofits,
                restaurants, and local organizations that want a more polished digital
                presence without unnecessary agency overhead.
              </p>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Founder-led, mobile-first, and built for practical long-term support.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/contact">{siteConfig.cta.label}</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>
        </CardShell>

        <div className="grid gap-10 border-t border-white/6 pt-9 sm:pt-10 lg:grid-cols-[minmax(0,1.3fr)_0.7fr_0.7fr]">
          <div className="space-y-4">
            <Brand />
            <p className="max-w-2xl text-sm leading-7 text-text-soft/76">
              Affordable, modern websites for small businesses, nonprofits, and
              restaurants. Built for a premium feel without unnecessary complexity.
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
              Explore
            </p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-2.5 text-sm text-slate-300">
              {siteConfig.footerNavigation
                .filter((item) => !legalRouteHrefs.has(item.href))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex rounded-full px-1 py-1.5 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="space-y-4 text-sm text-slate-400">
            <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
              Legal
            </p>
            <nav aria-label="Legal navigation" className="grid gap-2.5">
              {siteConfig.legalNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex rounded-full px-1 py-1.5 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="pt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
              Copyright {new Date().getFullYear()} Elevated Tech Solutions
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
