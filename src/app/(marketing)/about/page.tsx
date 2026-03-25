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
    "Learn about Elevated Tech Solutions, the mission behind the business, who it serves, and the practical values shaping every website project.",
  path: "/about",
  keywords: ["about Elevated Tech Solutions", "web business mission", "small business website agency"]
});

const missionVisionGoal = [
  {
    title: "Mission",
    description:
      "Provide affordable, modern websites and digital support that help small businesses, nonprofits, restaurants, and local organizations build a stronger online presence."
  },
  {
    title: "Vision",
    description:
      "Become a trusted technology partner for organizations that need digital solutions to feel more accessible, practical, and sustainable."
  },
  {
    title: "Goal",
    description:
      "Build a lean, high-quality business that delivers modern websites and dependable support without the cost and complexity of a traditional agency."
  }
] as const;

const approach = [
  {
    title: "Lead with the real need",
    description:
      "Projects start by clarifying what the organization actually needs online instead of adding process, features, or scope for appearance alone."
  },
  {
    title: "Design for clarity after launch",
    description:
      "A premium site should still be easy to understand, easy to update, and grounded in what helps the business communicate more clearly."
  },
  {
    title: "Keep support close to the project",
    description:
      "Because the business is founder-led and intentionally focused, the support experience stays more direct, practical, and personal."
  }
] as const;

const audiences = [
  {
    title: "Small businesses",
    description:
      "Businesses that need a credible, current website to present services clearly and create better first impressions."
  },
  {
    title: "Nonprofits",
    description:
      "Organizations that need trust, clarity, and a stronger digital foundation for programs, outreach, and contact."
  },
  {
    title: "Restaurants",
    description:
      "Restaurants, cafes, and food concepts that need menus, hours, location details, and customer actions to be easy to find on mobile."
  },
  {
    title: "Local organizations",
    description:
      "Community-focused teams that need modern presentation and practical support without an enterprise-sized process or budget."
  }
] as const;

const values = [
  {
    title: "Affordability",
    description:
      "Pricing should make sense for smaller organizations without lowering the quality standard."
  },
  {
    title: "Reliability",
    description:
      "Clients should be able to trust the communication, the launch quality, and the follow-through."
  },
  {
    title: "Simplicity",
    description:
      "Solutions should solve the real problem instead of adding layers of avoidable complexity."
  },
  {
    title: "Growth",
    description:
      "A good website should help a business or organization present itself more clearly and move forward with confidence."
  },
  {
    title: "Community impact",
    description:
      "Better digital tools should be more accessible to the local organizations and businesses doing real work in their communities."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            About Elevated Tech Solutions
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              A modern web business built to help smaller organizations show up with more clarity and confidence.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Elevated Tech Solutions was founded to provide affordable, modern
              websites for small businesses, nonprofits, restaurants, and local
              organizations that need stronger digital solutions without traditional
              agency pricing or unnecessary complexity.
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

        <Reveal delay={120}>
          <FounderProfileVisual
            badge="company foundation"
            title="A founder-led business built around trust, direct communication, and practical value."
            subtitle="Elevated Tech Solutions exists to make better websites more accessible to organizations that often get stuck between low-quality quick fixes and agency pricing that feels out of reach."
          />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="py-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="What It Is"
            title="Elevated Tech Solutions is a focused web and digital-support business."
            description="The business is intentionally shaped around clean website delivery, practical technology decisions, and dependable support for organizations that need a stronger online presence without unnecessary overhead."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            Instead of trying to be everything at once, Elevated Tech Solutions stays
            focused on what many smaller organizations actually need most: a modern
            website, direct communication, and support that still feels accessible
            after launch. You can review the{" "}
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

        <Reveal delay={120}>
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
        <Reveal>
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

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Our Approach"
            title="The approach is premium in execution, but grounded in real client needs."
            description="The goal is to deliver websites that feel polished and trustworthy while staying realistic about scope, budget, and long-term support."
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
        <Reveal>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for the organizations that often need modern web help the most."
            description="Elevated Tech Solutions is especially aligned with smaller teams and growing organizations that want a better online presence but do not need an oversized, enterprise-style process to get there."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The business is designed to feel approachable, not watered down. It is
            for organizations that care how they show up online and want a partner
            who can bring design polish, practical structure, and direct support to
            the project.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6 border-t border-white/8 pt-6 sm:grid-cols-2">
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
        <Reveal>
          <SectionHeading
            eyebrow="Core Values"
            title="The values behind the business are practical, not performative."
            description="These values shape how projects are scoped, communicated, delivered, and supported."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            Better service businesses do not just talk about quality. They make it
            visible in how they scope work, communicate with clients, and support the
            site after it goes live.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        <Reveal>
          <div className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
                Ready to work together
              </p>
              <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                If you need a modern website built with more care and less overhead, let&apos;s talk.
              </h2>
            </div>

            <div className="xl:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-text-soft/88 sm:text-lg">
                Elevated Tech Solutions is built to help smaller organizations move
                forward with clearer presentation, stronger digital credibility, and
                practical support after launch.
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
