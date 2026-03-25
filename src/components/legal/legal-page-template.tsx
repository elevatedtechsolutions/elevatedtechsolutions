import type { Route } from "next";
import Link from "next/link";

import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type LegalPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  currentHref: string;
  noteTitle: string;
  noteText: string;
  sections: readonly LegalSection[];
  contactHref?: Route;
  contactLabel?: string;
};

export function LegalPageTemplate({
  eyebrow,
  title,
  description,
  lastUpdated,
  currentHref,
  noteTitle,
  noteText,
  sections,
  contactHref = "/contact",
  contactLabel = "Contact Elevated Tech Solutions"
}: LegalPageTemplateProps) {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-12 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-8 xl:grid-cols-[minmax(0,1.12fr)_22rem] xl:items-start"
      >
        <Reveal>
          <CardShell tone="hero" className="p-8 sm:p-10">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_38%)]" />
            <div className="relative">
              <p className="font-display text-xs font-medium uppercase tracking-[0.34em] text-cyan-200/75">
                {eyebrow}
              </p>
              <div className="mt-5 space-y-5">
                <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                  {title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-text-soft/92 sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="mt-8 inline-flex rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                Last updated {lastUpdated}
              </div>
            </div>
          </CardShell>
        </Reveal>

        <Reveal delay={120}>
          <CardShell className="p-8">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
            <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
              {noteTitle}
            </p>
            <p className="mt-4 text-sm leading-7 text-text-soft/88 sm:text-base">
              {noteText}
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-display text-[0.65rem] font-medium uppercase tracking-[0.3em] text-cyan-200/68">
                Related Pages
              </p>
              <nav className="grid gap-2">
                {siteConfig.legalNavigation.map((item) => {
                  const isActive = item.href === currentHref;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-[1rem] border px-4 py-3 text-sm transition-all duration-300",
                        isActive
                          ? "border-cyan-300/26 bg-cyan-400/10 text-white"
                          : "border-white/8 bg-white/[0.03] text-slate-300 hover:border-cyan-300/18 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contactHref} variant="secondary">
                {contactLabel}
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <CardShell className="p-8 sm:p-10">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 60}
                className={index > 0 ? "border-t border-white/8 pt-8" : undefined}
              >
                <div className="grid gap-4 xl:grid-cols-[0.34fr_1.66fr] xl:items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Section {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-text-soft/86 sm:text-base">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets?.length ? (
                      <div className="grid gap-3 pt-2 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-200"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </CardShell>
      </SectionShell>
    </>
  );
}
