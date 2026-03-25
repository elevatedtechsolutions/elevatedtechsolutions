import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

export function WorkHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-20" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />

      <EditorialImage
        image="workspaceDesk"
        motion="drift"
        priority
        className="absolute inset-x-8 bottom-0 top-16 rounded-[2rem] lg:left-10 lg:right-4 lg:top-12"
        imageClassName="object-cover object-center"
        overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.18)_34%,rgba(2,6,23,0.7)_100%)]"
      >
        <div className="flex h-full items-start justify-end p-5 sm:p-6">
          <div className="rounded-full border border-white/12 bg-slate-950/42 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
            Selected work
          </div>
        </div>
      </EditorialImage>

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[29rem] p-3 shadow-[0_32px_120px_rgba(2,12,27,0.58)] sm:p-4 lg:absolute lg:left-0 lg:top-0 lg:mx-0 lg:w-[32rem]"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            portfolio frame
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.55rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_36%),linear-gradient(180deg,rgba(12,20,34,0.98),rgba(6,10,18,0.96))]">
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
            <span>Lucky Caps</span>
            <span>Featured project</span>
          </div>

          <div className="p-4">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/8">
              <EditorialImage
                image="storefront"
                motion="drift"
                className="min-h-[15rem] rounded-none border-0 sm:min-h-[18rem]"
                imageClassName="object-cover object-center"
                overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.1)_26%,rgba(2,6,23,0.62)_100%)]"
              >
                <div className="flex h-full items-end p-4 sm:p-5">
                  <div className="max-w-[16rem] rounded-[1.2rem] border border-white/12 bg-slate-950/44 px-4 py-4 backdrop-blur-md">
                    <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-100/76">
                      Real featured work
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-100/88">
                      Cleaner hierarchy, stronger brand presence, and a more polished
                      first impression.
                    </p>
                  </div>
                </div>
              </EditorialImage>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Case-study style framing",
                "Clear visual hierarchy",
                "Responsive presentation"
              ].map((item) => (
                <p key={item} className="text-sm leading-6 text-text-soft/82">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardShell>

      <CardShell className="motion-safe-float-delayed absolute bottom-6 right-0 hidden w-[10.5rem] p-3 sm:block lg:w-[11.5rem]">
        <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/42 p-3">
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-200/72">
            Mobile view
          </p>
          <div className="mx-auto mt-3 w-[5.8rem] rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,31,52,0.98),rgba(7,12,23,0.96))] p-2">
            <div className="relative overflow-hidden rounded-[1rem] border border-white/8">
              <EditorialImage
                image="storefront"
                motion="drift"
                className="min-h-[7.4rem] rounded-none border-0"
                imageClassName="object-cover object-center"
                overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.14)_38%,rgba(2,6,23,0.54)_100%)]"
              />
            </div>
            <div className="mt-2 h-1.5 w-10 rounded-full bg-cyan-300/70" />
            <div className="mt-1 h-1.5 w-12 rounded-full bg-white/10" />
          </div>
        </div>
      </CardShell>
    </div>
  );
}
