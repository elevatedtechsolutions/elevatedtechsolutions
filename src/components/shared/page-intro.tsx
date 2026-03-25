import type { Route } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionShell } from "@/components/shared/section-shell";

type Action = {
  href: Route;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  asideLabel: string;
  asideText: string;
  actions?: Action[];
};

export function PageIntro({
  eyebrow,
  title,
  description,
  bullets,
  asideLabel,
  asideText,
  actions
}: PageIntroProps) {
  return (
    <SectionShell
      className="pb-24 pt-10 sm:pb-28 sm:pt-14"
      containerSize="wide"
      containerClassName="grid gap-8 xl:grid-cols-[minmax(0,1.22fr)_22rem] xl:items-start"
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
              <p className="max-w-2xl text-base leading-7 text-text-soft/92 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <CardShell key={bullet} tone="quiet" className="px-4 py-4">
                  <p className="text-sm leading-6 text-slate-200">{bullet}</p>
                </CardShell>
              ))}
            </div>

            {actions?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <ButtonLink
                    key={action.href}
                    href={action.href}
                    variant={action.variant ?? "secondary"}
                    size="md"
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </CardShell>
      </Reveal>

      <Reveal delay={120}>
        <CardShell className="p-8">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
          <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
            {asideLabel}
          </p>
          <p className="mt-4 text-sm leading-7 text-text-soft/88 sm:text-base">
            {asideText}
          </p>

          <div className="mt-8 rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-4 text-xs uppercase tracking-[0.3em] text-slate-400">
            Structured for clarity
          </div>
        </CardShell>
      </Reveal>
    </SectionShell>
  );
}
