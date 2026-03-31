import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const focusPoints = [
  "Clear messaging that feels established from day one",
  "Responsive layouts that stay strong across desktop, tablet, and mobile",
  "Launch support that stays practical after the site goes live"
] as const;

export function HomeHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem]">
      <div className="absolute inset-x-10 top-10 h-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.3rem] border border-white/7 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_44%),linear-gradient(180deg,rgba(4,9,19,0.2),rgba(4,9,19,0.04))] backdrop-blur-[2px]" />
      <div className="absolute inset-6 rounded-[1.9rem] micro-grid opacity-[0.12]" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/36 to-transparent" />

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[40rem] p-4 sm:p-5 lg:absolute lg:inset-x-0 lg:top-12 lg:mx-0"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            elevatedtechsolutionsllc.com
          </div>
        </div>

        <div className="grid gap-6 pt-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                Modern presentation
              </p>
              <h3 className="mt-3 max-w-sm font-display text-[2rem] font-semibold tracking-tight text-white">
                A cleaner digital presence that looks established from day one.
              </h3>
            </div>

            <div className="space-y-4 border-t border-white/8 pt-5">
              {focusPoints.map((point) => (
                <p key={point} className="text-sm leading-7 text-text-soft/84">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_40%),linear-gradient(180deg,rgba(12,22,38,0.9),rgba(7,12,24,0.88))] px-6 py-7 sm:px-8 sm:py-8">
            <EditorialImage
              image="generalCodeScreen"
              motion="drift"
              priority
              className="min-h-[22rem] rounded-[1.45rem]"
              imageClassName="object-cover object-center"
              overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.18)_28%,rgba(2,6,23,0.76)_100%)]"
            />

            <div className="mt-5 space-y-4 border-t border-white/8 pt-5">
              <div className="max-w-md space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/78">
                  Built for small organizations
                </p>
                <p className="text-sm leading-7 text-text-soft/84">
                  Clean presentation, practical scope, and a responsive experience
                  that feels strong on desktop, tablet, and mobile.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/30 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-200">
                    Responsive across screens
                  </p>
                </div>
                <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/30 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-200">
                    Built to stay manageable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
