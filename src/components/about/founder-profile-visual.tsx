import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const highlights = [
  "GVSU Computer Science graduate",
  "Web development experience at Aztech US",
  "IT support work at STEM Greenhouse"
] as const;

type FounderProfileVisualProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export function FounderProfileVisual({
  badge,
  title,
  subtitle
}: FounderProfileVisualProps) {
  return (
    <div aria-hidden="true" className="relative min-h-[34rem] sm:min-h-[38rem] lg:min-h-[42rem]">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-16" />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
        <CardShell
          tone="hero"
          className="p-7 shadow-[0_30px_120px_rgba(2,12,27,0.56)] sm:p-8 lg:relative lg:top-10"
        >
          <div className="flex items-center gap-2 border-b border-white/8 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
              {badge}
            </div>
          </div>

          <div className="space-y-5 pt-6">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Founder-led by design
            </p>
            <h3 className="max-w-md font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.35rem]">
              {title}
            </h3>
            <p className="max-w-lg text-base leading-8 text-text-soft/86">{subtitle}</p>
            <p className="border-t border-white/8 pt-5 text-sm leading-7 text-text-soft/82">
              The founder model is intentional. It keeps the work closer to the
              conversation, makes accountability clearer, and gives clients a more
              direct, personal experience from discovery through launch.
            </p>
          </div>
        </CardShell>

        <EditorialImage
          image="founderPortrait"
          motion="drift"
          className="min-h-[26rem] rounded-[2rem] sm:min-h-[31rem] lg:min-h-[35rem]"
          imageClassName="object-cover object-center"
          overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.14)_28%,rgba(2,6,23,0.76)_100%)]"
        >
          <div className="flex h-full flex-col justify-between p-6 sm:p-7">
            <div className="self-start rounded-full border border-white/12 bg-slate-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
              Portrait placeholder
            </div>

            <div className="max-w-sm rounded-[1.4rem] border border-white/12 bg-slate-950/44 px-5 py-5 backdrop-blur-md">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                Personal, not corporate
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-100/88">
                Replace this with a real founder portrait later. The layout is meant
                to give the business a more human and trustworthy face from the start.
              </p>
            </div>
          </div>
        </EditorialImage>
      </div>

      <div className="relative z-10 mt-6 grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-3">
        {highlights.map((item) => (
          <p key={item} className="text-sm leading-6 text-text-soft/82">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
