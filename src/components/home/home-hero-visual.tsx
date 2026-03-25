import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const focusPoints = [
  "Clear messaging that feels established from day one",
  "Mobile-first layouts that keep customer actions obvious",
  "Launch support that stays practical after the site goes live"
] as const;

export function HomeHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.3rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-6 rounded-[1.9rem] micro-grid opacity-18" />
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
            elevatedtechsolutions.com
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

          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.14),transparent_42%),linear-gradient(180deg,rgba(12,22,38,0.98),rgba(7,12,24,0.96))] px-6 py-10 sm:px-8">
            <EditorialImage
              image="workspaceDesk"
              motion="drift"
              priority
              className="min-h-[22rem] rounded-[1.45rem]"
              imageClassName="object-cover object-center"
              overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.18)_28%,rgba(2,6,23,0.76)_100%)]"
            >
              <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="self-start rounded-full border border-white/12 bg-slate-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-sm">
                  Premium web presence
                </div>

                <div className="space-y-5">
                  <div className="max-w-sm space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/78">
                      Built for small organizations
                    </p>
                    <p className="text-base leading-7 text-white/90 sm:text-lg">
                      Modern layout, practical launch scope, and a calmer path from
                      first impression to first inquiry.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/38 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-200">
                        Mobile-first by default
                      </p>
                    </div>
                    <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/38 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-200">
                        Built to stay manageable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialImage>
          </div>
        </div>
      </CardShell>

      <CardShell className="motion-safe-float absolute bottom-3 right-4 hidden w-[14.5rem] p-4 lg:block">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
          West Michigan + remote
        </p>
        <p className="mt-3 text-sm leading-6 text-text-soft/82">
          Founder-led delivery with local roots and remote-friendly support for the
          right-fit project.
        </p>
      </CardShell>
    </div>
  );
}
