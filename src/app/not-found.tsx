import { SiteShell } from "@/components/layout/site-shell";
import { CardShell } from "@/components/shared/card-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <SiteShell>
      <SectionShell className="pb-24 pt-12 sm:pb-28 sm:pt-16" containerSize="narrow">
        <CardShell tone="hero" className="p-8 sm:p-10">
          <p className="font-display text-xs font-medium uppercase tracking-[0.34em] text-cyan-200/75">
            404
          </p>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            That page has not been built into the shell yet.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-soft/88">
            The route is outside the current starter structure. Head back to the
            main shell and keep building from the shared foundation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/">Return Home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Route
            </ButtonLink>
          </div>
        </CardShell>
      </SectionShell>
    </SiteShell>
  );
}
