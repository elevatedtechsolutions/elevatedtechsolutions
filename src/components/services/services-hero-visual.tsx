import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const coreOffers = [
  {
    title: "Info Sites",
    detail: "Brochure-style websites for services, nonprofits, and local organizations."
  },
  {
    title: "Restaurant Sites",
    detail: "Focused presentation for menus, hours, location, and customer actions."
  },
  {
    title: "Nonprofit Sites",
    detail: "Mission-led presentation for programs, trust, donations, and supporter actions."
  }
] as const;

const supportNotes = [
  "Structured to feel current, clear, and trustworthy.",
  "Designed to look premium without becoming harder to maintain."
] as const;

export function ServicesHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-x-10 top-10 h-44 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-20" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />

      <EditorialImage
        image="generalCollaboration"
        motion="drift"
        priority
        className="absolute inset-x-6 bottom-0 top-16 rounded-[2rem] lg:left-20 lg:right-0 lg:top-10"
        imageClassName="object-cover object-center"
        overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.22)_34%,rgba(2,6,23,0.72)_100%)]"
      />

      <CardShell
        tone="quiet"
        className="absolute inset-x-8 bottom-6 z-20 p-5 shadow-[0_28px_90px_rgba(2,12,27,0.34)] sm:inset-x-auto sm:right-6 sm:w-[22rem] sm:p-6 lg:bottom-7 lg:right-8"
      >
        <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/72">
          <span>Editorial direction</span>
          <span>Elevated Tech Solutions</span>
        </div>

        <div className="mt-5 self-start rounded-full border border-white/12 bg-slate-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
          Placeholder stock image
        </div>

        <div className="mt-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/78">
            Modern small-business support
          </p>
          <p className="text-sm leading-7 text-slate-100/88">
            A more collaborative, polished web experience for businesses and
            organizations that need stronger digital presentation.
          </p>
        </div>

        <div className="mt-5 grid gap-3 border-t border-white/8 pt-4">
          {supportNotes.map((note) => (
            <p key={note} className="text-sm leading-6 text-text-soft/84">
              {note}
            </p>
          ))}
        </div>
      </CardShell>

      <CardShell
        tone="hero"
        className="relative z-10 mx-auto max-w-[26rem] p-6 shadow-[0_30px_120px_rgba(2,12,27,0.56)] sm:p-7 lg:absolute lg:left-0 lg:top-0 lg:mx-0"
      >
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            core launch offers
          </div>
        </div>

        <h3 className="mt-6 max-w-sm font-display text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
          Focused offers that keep quality high and scope realistic.
        </h3>

        <div className="mt-6 space-y-4">
          {coreOffers.map((offer) => (
            <div key={offer.title} className="border-t border-white/8 pt-4">
              <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/72">
                {offer.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-text-soft/82">{offer.detail}</p>
            </div>
          ))}
        </div>
      </CardShell>
    </div>
  );
}
