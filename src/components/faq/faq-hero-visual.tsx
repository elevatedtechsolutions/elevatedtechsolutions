import { CardShell } from "@/components/shared/card-shell";

const reassurancePoints = [
  "Fit, scope, and timing",
  "Hosting, updates, and ownership",
  "A calmer path to inquiry"
] as const;

export function FaqHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[37rem] p-4 shadow-[0_30px_120px_rgba(2,12,27,0.58)] sm:p-5 lg:absolute lg:left-0 lg:top-12 lg:mx-0"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            before you inquire
          </div>
        </div>

        <div className="grid gap-5 pt-5">
          <div className="rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-5">
            <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                  FAQ focus
                </p>
                <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold tracking-tight text-white">
                  Practical answers before the quote conversation starts.
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-slate-300">
                calm + clear
              </div>
            </div>

            <div className="grid gap-3 pt-5">
              <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-100/74">
                  Typical question
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  How long does a website take?
                </p>
                <p className="mt-3 text-sm leading-6 text-text-soft/82">
                  Timing depends on scope, content readiness, and how quickly reviews move.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-100/74">
                    Hosting
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-soft/82">
                    Guidance stays part of the process.
                  </p>
                </div>

                <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-100/74">
                    Ownership
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-soft/82">
                    Domains and core assets stay clear and client-facing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/8 pt-4 sm:grid-cols-3">
            {reassurancePoints.map((point) => (
              <div key={point} className="rounded-[1.05rem] border border-white/8 bg-white/[0.02] px-4 py-3">
                <p className="text-sm leading-6 text-text-soft/82">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </CardShell>
    </div>
  );
}
