import { CardShell } from "@/components/shared/card-shell";

export function ContactHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-20" />
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
                The contact experience is meant to feel clear and trustworthy, even
                before the form backend is connected.
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/26 p-4">
              <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                Inquiry status
              </p>
              <div className="mt-4 space-y-3">
                {["Project type selected", "Clear scope questions", "Response expectations set"].map(
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

      <CardShell className="motion-safe-float absolute right-0 top-0 hidden w-[16rem] p-4 sm:block">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
          Local + remote
        </p>
        <p className="mt-3 text-sm leading-6 text-text-soft/82">
          Based around Grand Rapids and West Michigan, with remote-friendly project
          support when the fit is right.
        </p>
      </CardShell>
    </div>
  );
}
