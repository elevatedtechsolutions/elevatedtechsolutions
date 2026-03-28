import { CardShell } from "@/components/shared/card-shell";

export function ContactHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem] xl:min-h-[42rem]"
    >
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute right-6 top-10 hidden h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl lg:block" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-4 rounded-[1.95rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-20" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[37rem] p-4 shadow-[0_30px_120px_rgba(2,12,27,0.58)] sm:p-5 lg:absolute lg:left-0 lg:top-14 lg:mx-0 lg:max-w-[31.5rem] xl:max-w-[35rem]"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            get a quote
          </div>
        </div>

        <div className="grid gap-5 pt-5">
          <div className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.025] p-5 sm:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                Inquiry experience
              </p>
              <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold tracking-tight text-white">
                A calmer way to start the conversation.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-text-soft/82">
                The quote experience is designed to feel composed, trustworthy, and
                easy to navigate from the first inquiry.
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/26 p-4">
              <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                What the form helps clarify
              </p>
              <div className="mt-4 space-y-3">
                {["Project type and fit", "Budget and timing context", "Clear response expectations"].map(
                  (item) => (
                    <div
                      key={item}
                      className="border-t border-white/8 pt-3 text-sm leading-6 text-text-soft/82 first:border-transparent first:pt-0"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </CardShell>

      <CardShell
        tone="quiet"
        className="motion-safe-float absolute right-2 top-5 z-20 hidden w-[15.5rem] p-4 lg:block xl:right-0"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
          Local + remote
        </p>
        <p className="mt-3 text-sm leading-6 text-text-soft/82">
          Based in the Grand Rapids and West Michigan area, with remote-friendly project support when the fit is right.
        </p>
      </CardShell>

      <CardShell
        tone="quiet"
        className="motion-safe-float-delayed absolute bottom-6 right-4 z-20 hidden w-[17rem] p-4 lg:block"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
          What happens next
        </p>
        <div className="mt-3 space-y-3">
          {[
            "Review the inquiry details carefully",
            "Reply with the clearest next step",
            "Clarify scope, timing, and fit if needed"
          ].map((item) => (
            <div
              key={item}
              className="border-t border-white/8 pt-3 text-sm leading-6 text-text-soft/82 first:border-transparent first:pt-0"
            >
              {item}
            </div>
          ))}
        </div>
      </CardShell>
    </div>
  );
}
