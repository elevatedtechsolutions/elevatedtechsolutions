import { CardShell } from "@/components/shared/card-shell";

const quickQuestions = [
  "How long does a website take?",
  "Do you provide hosting?",
  "Can you update my current website?"
] as const;

export function FaqHeroVisual() {
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
            common questions
          </div>
        </div>

        <div className="grid gap-5 pt-5">
          <div className="rounded-[1.55rem] border border-white/8 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Clear answers
            </p>
            <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold tracking-tight text-white">
              Questions answered with clarity instead of pressure.
            </h3>
            <div className="mt-6 grid gap-3 border-t border-white/8 pt-5">
              {quickQuestions.map((question) => (
                <div key={question} className="border-t border-white/8 pt-4 first:border-transparent first:pt-0">
                  <p className="text-sm leading-6 text-text-soft/84">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/8 pt-4 sm:grid-cols-3">
            <p className="text-sm leading-6 text-text-soft/82">Better trust before inquiry</p>
            <p className="text-sm leading-6 text-text-soft/82">Less uncertainty around process</p>
            <p className="text-sm leading-6 text-text-soft/82">A calmer path to getting started</p>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
