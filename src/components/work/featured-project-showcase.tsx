import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const projectDetails = [
  {
    label: "Project type",
    value: "Featured real project"
  },
  {
    label: "Focus",
    value: "Brand-forward small-business presentation"
  },
  {
    label: "What it demonstrates",
    value: "Design polish, usability, and clear structure"
  }
] as const;

const proofPoints = [
  "Stronger visual hierarchy",
  "Clear calls to action",
  "Responsive, mobile-friendly structure"
] as const;

export function FeaturedProjectShowcase() {
  return (
    <div aria-hidden="true" className="relative min-h-[38rem] sm:min-h-[42rem] lg:min-h-[46rem]">
      <div className="absolute right-10 top-6 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.1rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_48%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-20" />

      <EditorialImage
        image="storefront"
        motion="drift"
        className="absolute inset-0 rounded-[2.1rem]"
        imageClassName="object-cover object-center"
        overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.3)_34%,rgba(2,6,23,0.86)_100%)]"
      >
        <div className="absolute left-5 top-5 max-w-[17rem] rounded-[1.45rem] border border-white/12 bg-slate-950/42 px-4 py-4 backdrop-blur-md sm:left-7 sm:top-7 sm:max-w-[18rem] sm:px-5">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
            Lucky Caps
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-100/88">
            An early case-study teaser presented with the kind of polish, hierarchy,
            and care the business wants clients to expect.
          </p>
        </div>
      </EditorialImage>

      <CardShell
        tone="hero"
        className="absolute inset-x-4 bottom-4 z-10 p-3 shadow-[0_32px_120px_rgba(2,12,27,0.62)] sm:inset-x-6 sm:bottom-6 sm:p-4 lg:left-6 lg:right-[12rem] lg:p-5"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            featured case study
          </div>
        </div>

        <div className="mt-4 grid gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                Browser presentation
              </p>
              <h3 className="mt-4 max-w-md font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.2rem]">
                A stronger, more editorial way to frame small-business work.
              </h3>
            </div>

            <div className="overflow-hidden rounded-[1.45rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.12),transparent_38%),linear-gradient(180deg,rgba(14,24,40,0.98),rgba(8,14,26,0.94))]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                <span>Desktop mockup</span>
                <span>Lucky Caps</span>
              </div>

              <div className="p-4">
                <div className="relative overflow-hidden rounded-[1.1rem] border border-white/8">
                  <EditorialImage
                    image="storefront"
                    motion="drift"
                    className="min-h-[14rem] rounded-none border-0 sm:min-h-[18rem]"
                    imageClassName="object-cover object-center"
                    overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.12)_28%,rgba(2,6,23,0.62)_100%)]"
                  >
                    <div className="flex h-full items-end p-4 sm:p-5">
                      <div className="max-w-[16rem] rounded-[1.15rem] border border-white/12 bg-slate-950/42 px-4 py-4 backdrop-blur-md">
                        <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-100/76">
                          Featured real project
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-100/88">
                          Brand-forward layout with cleaner navigation, clearer next
                          actions, and a stronger first impression.
                        </p>
                      </div>
                    </div>
                  </EditorialImage>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 border-t border-white/8 pt-5">
              {projectDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-text-soft/82">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 border-t border-white/8 pt-5">
              {proofPoints.map((point) => (
                <p key={point} className="text-sm leading-6 text-slate-200">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardShell>

      <CardShell className="motion-safe-float-delayed absolute bottom-14 right-3 hidden w-[11rem] p-3 lg:block">
        <div className="rounded-[1.3rem] border border-white/8 bg-slate-950/42 p-3">
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-200/72">
            Mobile preview
          </p>
          <div className="mx-auto mt-3 w-[5.8rem] rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,31,52,0.98),rgba(7,12,23,0.96))] p-2">
            <div className="relative overflow-hidden rounded-[1rem] border border-white/8">
              <EditorialImage
                image="storefront"
                motion="drift"
                className="min-h-[8rem] rounded-none border-0"
                imageClassName="object-cover object-center"
                overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.12)_30%,rgba(2,6,23,0.46)_100%)]"
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
