import Image from "next/image";
import Link from "next/link";

import { FounderProfileVisual } from "@/components/about/founder-profile-visual";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn who Elevated Tech Solutions serves, how the business works, and the values behind the work.",
  path: "/about",
  keywords: ["about Elevated Tech Solutions", "web business mission", "small business website agency"]
});

const missionVisionGoal = [
  {
    title: "Why It Exists",
    description:
      "To help smaller organizations show up online with more clarity, credibility, and direction."
  },
  {
    title: "How It Works",
    description:
      "Keep website projects direct, focused, and close to the real goals of the client."
  },
  {
    title: "What Clients Get",
    description:
      "A founder-led partner, a cleaner website process, and support that stays available after launch."
  }
] as const;

const approach = [
  {
    title: "Start with the pages that matter",
    description:
      "Projects start by clarifying what the organization actually needs online instead of adding extras that do not improve the site."
  },
  {
    title: "Keep communication close to the work",
    description:
      "Founder-led delivery keeps decisions, feedback, and support closer to the original goals of the project."
  },
  {
    title: "Build for the long term",
    description:
      "The site should launch clearly, stay manageable after go-live, and still support the organization well later."
  }
] as const;

const audiences = [
  {
    title: "Small businesses and local organizations",
    description:
      "Teams that need a credible website to explain what they do clearly and make a stronger first impression."
  },
  {
    title: "Nonprofits",
    description:
      "Organizations that need trust, clarity, and stronger support paths for programs, outreach, and contact."
  },
  {
    title: "Restaurants",
    description:
      "Restaurants and cafes that need menus, hours, location details, and customer actions to be easy to find on mobile."
  }
] as const;

const values = [
  {
    title: "Direct communication",
    description:
      "Clients should know who they are working with, what is happening next, and where the project stands."
  },
  {
    title: "Practical scope",
    description:
      "Projects should be scoped around what the organization actually needs, not around unnecessary extras."
  },
  {
    title: "Dependable follow-through",
    description:
      "The standard is not just launching the site well. It is staying reliable before, during, and after launch."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[54rem] overflow-hidden sm:h-[60rem] lg:h-[66rem]"
        >
          <Image
            src="/images/general/istockphoto-2183576812-1024x1024.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-[0.2] saturate-[1.02] blur-[1px] scale-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(2,6,23,0.58)_18%,rgba(2,6,23,0.76)_52%,rgba(2,6,23,0.95)_82%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_18%_28%,rgba(8,145,178,0.1),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.1),transparent_26%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>

        <SectionShell
          className="pb-10 pt-10 sm:pb-14 sm:pt-16"
          containerSize="wide"
          containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
        >
          <Reveal className="space-y-8" preset="heading">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
              About Elevated Tech Solutions
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
                A founder-led web business built for smaller organizations.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                Elevated Tech Solutions exists to help small businesses, nonprofits,
                restaurants, and local organizations show up online with more clarity
                and credibility.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                View Services
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Start a Project
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120} preset="panel">
            <FounderProfileVisual
              badge="company foundation"
              title="A founder-led business built around direct communication and responsible delivery."
              subtitle="Clients work directly with the founder, which keeps communication clearer and the work closer to the goals discussed from the start."
              variant="trust"
            />
          </Reveal>
        </SectionShell>
      </div>

      <SectionShell
        className="py-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="What ETS Does"
            title="A focused studio for websites and ongoing support."
            description="The business is built to keep website projects direct, useful, and easier to work through for smaller teams."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The point is not to sell every digital service. It is to do the core
            website work well for organizations that need a dependable partner. You
            can review the{" "}
            <Link
              href="/services"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              service lineup
            </Link>{" "}
            or{" "}
            <Link
              href="/founder"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              meet the founder
            </Link>{" "}
            for more context.
          </p>
        </Reveal>

        <Reveal delay={120} preset="card">
          <div className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-3">
            {missionVisionGoal.map((item) => (
              <article key={item.title} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  {item.title}
                </p>
                <p className="text-sm leading-7 text-text-soft/84">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center"
      >
        <Reveal preset="panel">
          <EditorialImage
            image="collaboration"
            motion="drift"
            className="min-h-[24rem] rounded-[1.9rem] sm:min-h-[28rem] lg:min-h-[32rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.2)_26%,rgba(2,6,23,0.78)_100%)]"
          >
            <div className="flex h-full flex-col justify-end p-6 sm:p-7">
              <div className="max-w-md rounded-[1.45rem] border border-white/12 bg-slate-950/44 px-5 py-5 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  Closer collaboration
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Founder-led projects stay closer to the original conversation,
                  which helps the work feel more thoughtful, personal, and aligned to
                  the real goals of the organization.
                </p>
              </div>
            </div>
          </EditorialImage>
        </Reveal>

        <Reveal delay={120} preset="heading">
          <SectionHeading
            eyebrow="Our Approach"
            title="The approach stays close to the real need."
            description="Decisions are made around what helps the client communicate clearly, launch cleanly, and keep the site useful after go-live."
          />

          <div className="mt-10 space-y-6">
            {approach.map((item, index) => (
              <article key={item.title} className="border-t border-white/8 pt-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Best aligned with organizations that need a stronger web presence without extra process."
            description="The fit is strongest where clarity, trust, and direct communication matter more than a large agency structure."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The goal is to be a strong fit for teams that care how they show up online and want the project to stay focused and direct.
          </p>
        </Reveal>

        <Reveal delay={120} preset="card">
          <div className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-text-soft/84">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Standards"
            title="A few straightforward standards shape how the work is done."
            description="These are the habits clients should feel in the project, not just words on a page."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The goal is simple: keep the work clear, responsible, and useful for the people relying on it.
          </p>
        </Reveal>

        <Reveal delay={120} preset="card">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="border-t border-white/8 pt-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal preset="cta">
          <div className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
                Ready to work together
              </p>
              <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                If that approach matches what you need, let&apos;s talk.
              </h2>
            </div>

            <div className="xl:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-text-soft/88 sm:text-lg">
                The goal is simple: build a site that represents the organization
                well and support it responsibly after launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/founder" variant="secondary" size="lg">
                  Meet the Founder
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
