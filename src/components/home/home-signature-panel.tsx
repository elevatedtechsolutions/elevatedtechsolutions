import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const proofPoints = [
  "Small businesses",
  "Restaurants",
  "Nonprofits"
] as const;

const supportNotes = [
  {
    label: "What the section proves",
    detail: "The work stays focused on real service websites with clear scope and cleaner presentation."
  },
  {
    label: "How it is delivered",
    detail: "Founder-led communication, practical launch decisions, and support that stays available after go-live."
  }
] as const;

export function HomeSignaturePanel() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem]">
      <div className="absolute left-1/2 top-10 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />

      <CardShell tone="hero" className="relative z-10 min-h-[30rem] p-8 sm:min-h-[34rem] sm:p-10">
        <div className="flex h-full flex-col gap-8">
          <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            <span>Focused website services</span>
            <span>Elevated Tech Solutions</span>
          </div>

          <EditorialImage
            image="serviceConsultation"
            motion="drift"
            className="min-h-[20rem] flex-1 rounded-[1.9rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.12)_28%,rgba(2,6,23,0.56)_100%)]"
          >
            <div className="flex h-full items-end p-6 sm:p-7">
              <div className="max-w-md rounded-[1.5rem] border border-white/10 bg-slate-950/42 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-cyan-100/78">
                  A better-fit web partner
                </p>
                <p className="mt-3 text-base leading-7 text-white/90">
                  Built for organizations that need a site that reads clearly,
                  looks established, and gives people an easy next step.
                </p>
              </div>
            </div>
          </EditorialImage>

          <div className="grid gap-5 border-t border-white/8 pt-5">
            <div className="flex flex-wrap gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportNotes.map((note) => (
                <div key={note.label} className="rounded-[1.35rem] border border-white/8 bg-white/[0.025] px-5 py-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-100/74">
                    {note.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-soft/84">
                    {note.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
