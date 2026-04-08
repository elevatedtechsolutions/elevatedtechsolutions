import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const processPrinciples = [
  "Clear next steps",
  "Defined review points",
  "Support after launch"
] as const;

export function ProcessHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />

      <EditorialImage
        image="collaboration"
        motion="drift"
        priority
        className="absolute inset-x-6 bottom-0 top-16 rounded-[2rem] lg:left-20 lg:right-0 lg:top-10"
        imageClassName="object-cover object-center"
        overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.18)_34%,rgba(2,6,23,0.66)_100%)]"
      >
        <div className="flex h-full items-end justify-end p-5 sm:p-6">
          <div className="max-w-[16rem] rounded-[1.4rem] border border-white/12 bg-slate-950/46 px-4 py-4 backdrop-blur-md">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
              Made for busy clients
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-100/88">
              Clear checkpoints, realistic review timing, and support that stays
              available after launch.
            </p>
          </div>
        </div>
      </EditorialImage>

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[25.5rem] p-6 shadow-[0_30px_120px_rgba(2,12,27,0.58)] sm:p-7 lg:absolute lg:left-0 lg:top-0 lg:mx-0"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            client process
          </div>
        </div>

        <h3 className="mt-6 max-w-sm font-display text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
          A process designed to stay calm, clear, and easy to follow.
        </h3>

        <div className="mt-6 space-y-4">
          {processPrinciples.map((item) => (
            <div key={item} className="border-t border-white/8 pt-4">
              <p className="text-sm leading-6 text-text-soft/82">{item}</p>
            </div>
          ))}
        </div>
      </CardShell>
    </div>
  );
}
