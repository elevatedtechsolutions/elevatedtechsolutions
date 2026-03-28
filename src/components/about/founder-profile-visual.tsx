import Image from "next/image";

import { CardShell } from "@/components/shared/card-shell";

const highlights = [
  "B.S. in Computer Science from Grand Valley State University",
  "Web development internship experience at Aztech in Grand Rapids",
  "Continuing IT Specialist work at STEM Greenhouse"
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
    <div className="relative min-h-[34rem] sm:min-h-[38rem] lg:min-h-[42rem]">
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
              Elevated Tech Solutions is intentionally founder-led so clients get
              direct communication, clearer accountability, and someone who stays
              close to the work from the first conversation through launch and
              follow-up support.
            </p>
          </div>
        </CardShell>

        <div className="group/editorial relative isolate min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/40 sm:min-h-[31rem] lg:min-h-[35rem]">
          <Image
            fill
            priority
            src="/images/branding/founder_headshot.jpg"
            alt="Founder of Elevated Tech Solutions"
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            className="object-cover object-[center_18%] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe-image-drift"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.12)_26%,rgba(2,6,23,0.78)_100%)]" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
            <div className="self-start rounded-full border border-white/12 bg-slate-950/44 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
              Founder
            </div>

            <div className="grid gap-3 sm:max-w-[22rem]">
              <div className="rounded-[1.35rem] border border-white/12 bg-slate-950/48 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  Web app focus
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Academic work, internship experience, and personal projects all
                  reinforced a long-term focus on websites and web applications.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-white/12 bg-slate-950/42 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  Built for smaller teams
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Nonprofit technology work made it clear how much value better
                  digital tools can create when they stay affordable, practical, and easier to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
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
