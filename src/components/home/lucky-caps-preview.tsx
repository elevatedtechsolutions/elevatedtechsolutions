import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const previewNotes = [
  "Brand-forward presentation",
  "Clear customer actions",
  "Mobile-friendly structure"
] as const;

export function LuckyCapsPreview() {
  return (
    <div aria-hidden="true" className="relative min-h-[32rem] sm:min-h-[36rem]">
      <div className="absolute right-10 top-8 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_48%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-16" />

      <CardShell tone="hero" className="relative z-10 min-h-[32rem] p-4 sm:min-h-[36rem] sm:p-5">
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            featured work teaser
          </div>
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="space-y-6 lg:pb-2">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                Lucky Caps
              </p>
              <h3 className="mt-4 max-w-sm font-display text-3xl font-semibold tracking-tight text-white">
                Brand-forward small-business presentation with a cleaner digital edge.
              </h3>
            </div>

            <div className="space-y-4 border-t border-white/8 pt-5">
              {previewNotes.map((note) => (
                <p key={note} className="text-sm leading-7 text-text-soft/84">
                  {note}
                </p>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="overflow-hidden rounded-[1.65rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.14),transparent_40%),linear-gradient(180deg,rgba(11,19,34,0.96),rgba(6,10,19,0.96))] p-4">
              <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                <span>Case-study style preview</span>
                <span>Lucky Caps</span>
              </div>

              <div className="relative overflow-hidden rounded-[1.2rem] border border-white/8">
                <EditorialImage
                  image="storefront"
                  motion="drift"
                  className="min-h-[16rem] rounded-none border-0 sm:min-h-[20rem]"
                  imageClassName="object-cover object-center"
                  overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.12)_28%,rgba(2,6,23,0.7)_100%)]"
                >
                  <div className="flex h-full items-end p-5">
                    <div className="max-w-[16rem] rounded-[1.15rem] border border-white/12 bg-slate-950/42 px-4 py-4 backdrop-blur-md">
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/76">
                        Premium first impression
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/88">
                        Clear structure, sharper hierarchy, and a more intentional
                        small-business web presence.
                      </p>
                    </div>
                  </div>
                </EditorialImage>
              </div>
            </div>

            <CardShell className="motion-safe-float-delayed absolute -bottom-5 right-4 hidden w-[11.25rem] p-3 lg:block">
              <div className="rounded-[1.25rem] border border-white/8 bg-slate-950/40 p-3">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-200/72">
                  Mobile mockup
                </p>
                <div className="mx-auto mt-3 w-[5.6rem] rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,31,52,0.98),rgba(7,12,23,0.96))] p-2">
                  <div className="relative overflow-hidden rounded-[1rem] border border-white/8">
                    <EditorialImage
                      image="storefront"
                      motion="drift"
                      className="min-h-[7.2rem] rounded-none border-0"
                      imageClassName="object-cover object-center"
                      overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.1)_30%,rgba(2,6,23,0.46)_100%)]"
                    />
                  </div>
                  <div className="mt-2 h-1.5 w-9 rounded-full bg-cyan-300/70" />
                  <div className="mt-1 h-1.5 w-12 rounded-full bg-white/10" />
                </div>
              </div>
            </CardShell>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
