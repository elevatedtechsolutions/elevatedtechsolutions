import Image from "next/image";

import { CardShell } from "@/components/shared/card-shell";

const highlights = [
  {
    label: "Education",
    summary: "B.S. in Computer Science from Grand Valley State University.",
    text: "B.S. in Computer Science from Grand Valley State University with a long-term focus on websites and web applications."
  },
  {
    label: "Professional Experience",
    summary: "Web development internship experience at Aztech in Grand Rapids.",
    text: "Web development internship experience at Aztech in Grand Rapids, grounded in practical implementation and usability."
  },
  {
    label: "Service Perspective",
    summary: "Continuing IT Specialist work at STEM Greenhouse.",
    text: "Continuing IT Specialist work at STEM Greenhouse, shaped by helping smaller teams adopt practical digital solutions."
  }
] as const;

type FounderProfileVisualProps = {
  badge: string;
  title: string;
  subtitle: string;
  variant?: "story" | "trust";
};

export function FounderProfileVisual({
  badge,
  title,
  subtitle,
  variant = "story"
}: FounderProfileVisualProps) {
  const isTrustVariant = variant === "trust";

  return (
    <div className="relative overflow-hidden rounded-[2.2rem] px-4 py-4 sm:px-5 sm:py-5">
      <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />
      {!isTrustVariant ? (
        <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-16" />
      ) : null}

      <div
        className={isTrustVariant
          ? "relative z-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-6"
          : "relative z-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-6"}
      >
        <div
          className={isTrustVariant ? "order-1" : "order-2 lg:order-2"}
        >
          <div
            className={isTrustVariant
              ? "group/editorial relative isolate min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/40 shadow-[0_34px_110px_rgba(2,12,27,0.34)] sm:min-h-[30rem] lg:min-h-[34rem]"
              : "group/editorial relative isolate min-h-[23rem] overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/40 shadow-[0_30px_100px_rgba(2,12,27,0.32)] sm:min-h-[26rem] lg:min-h-[28rem]"}
          >
            <Image
              fill
              priority
              src="/images/branding/founder_headshot.jpg"
              alt="Founder of Elevated Tech Solutions"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
              className={isTrustVariant
                ? "object-cover object-[center_16%] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe-image-drift"
                : "object-cover object-[center_16%] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe-image-drift"}
            />
            <div className="pointer-events-none absolute inset-[0.65rem] rounded-[1.45rem] border border-white/10" />
          </div>
        </div>

        <CardShell
          tone={isTrustVariant ? "quiet" : "hero"}
          className={isTrustVariant
            ? "order-2 p-5 shadow-[0_24px_88px_rgba(2,12,27,0.44)] sm:p-6"
            : "order-1 p-5 shadow-[0_30px_120px_rgba(2,12,27,0.56)] sm:p-6"}
        >
          <div className="flex items-center gap-2 border-b border-white/8 pb-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
              {badge}
            </div>
          </div>

          <div className={isTrustVariant ? "space-y-4 pt-5" : "space-y-4 pt-5"}>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              {isTrustVariant ? "Meet the founder" : "Founder-led by design"}
            </p>
            <h3 className="max-w-md font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.05rem]">
              {title}
            </h3>
            <p className="max-w-xl text-[0.96rem] leading-7 text-text-soft/86">
              {subtitle}
            </p>

            {isTrustVariant ? (
              <div className="grid gap-3 border-t border-white/8 pt-4">
                <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/72">
                    What clients can expect
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-soft/82">
                    Direct communication, accountable delivery, and decisions that stay close to the real goals of the project.
                  </p>
                </div>
              </div>
            ) : (
              <div className="border-t border-white/8 pt-4">
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-200/72">
                  Why it matters
                </p>
                <p className="mt-2 text-sm leading-6 text-text-soft/82">
                  Clients work directly with the founder from the first conversation
                  through launch and follow-up support, which keeps communication
                  clearer and accountability closer to the work.
                </p>
              </div>
            )}
          </div>
        </CardShell>
      </div>

      <div className="relative z-10 mt-5 border-t border-white/8 pt-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
            Founder background
          </p>
          <p className="hidden text-xs uppercase tracking-[0.24em] text-text-soft/50 sm:block">
            {isTrustVariant ? "Quick credentials" : "Education, experience, perspective"}
          </p>
        </div>

        <div className={isTrustVariant ? "grid gap-3 sm:grid-cols-3" : "grid gap-4 sm:grid-cols-3"}>
          {highlights.map((item) => (
            <article
              key={item.label}
              className={isTrustVariant
                ? "rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.012))] px-4 py-4 shadow-[0_14px_32px_rgba(2,12,27,0.1)]"
                : "rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.018))] px-5 py-4 shadow-[0_18px_40px_rgba(2,12,27,0.12)] sm:px-6 sm:py-5"}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.26em] text-cyan-200/72">
                {item.label}
              </p>
              <p className={isTrustVariant ? "mt-3 text-sm leading-6 text-text-soft/84" : "mt-3 text-sm leading-7 text-text-soft/84"}>
                {isTrustVariant ? item.summary : item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
