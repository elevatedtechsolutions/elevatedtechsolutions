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

export function ServicesHeroVisual() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-x-10 top-10 h-44 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent" />
      <div className="absolute left-2 top-8 z-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl sm:left-4 lg:left-6 lg:top-10" />

      <div className="absolute inset-x-6 bottom-0 top-14 z-10 lg:left-24 lg:right-0 lg:top-8">
        <EditorialImage
          image="generalCollaboration"
          motion="drift"
          priority
          className="h-full min-h-[22rem] rounded-[2rem] border border-white/10 bg-slate-950/32 shadow-[0_34px_120px_rgba(2,12,27,0.42)]"
          imageClassName="object-cover object-center"
          overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.16)_30%,rgba(2,6,23,0.58)_100%)]"
        />
      </div>

      <CardShell
        tone="quiet"
        className="relative z-20 mx-auto max-w-[25rem] border-white/12 bg-[linear-gradient(180deg,rgba(11,19,35,0.82),rgba(7,12,24,0.9))] p-6 shadow-[0_34px_120px_rgba(2,12,27,0.56),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-7 lg:absolute lg:left-0 lg:top-4 lg:mx-0"
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

        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200/78">
          Built for smaller organizations that need a clean launch, a defined scope, and a site that stays practical to manage after launch.
        </p>

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
