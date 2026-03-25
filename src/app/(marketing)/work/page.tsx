import Link from "next/link";

import { FeaturedProjectShowcase } from "@/components/work/featured-project-showcase";
import { WorkHeroVisual } from "@/components/work/work-hero-visual";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import type { StockImageKey } from "@/config/stock-images";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "See featured work and concept builds from Elevated Tech Solutions, including Lucky Caps and polished sample website directions for growing organizations.",
  path: "/work",
  keywords: ["web design portfolio", "Lucky Caps", "website case study"]
});

const conceptProjects = [
  {
    label: "Concept Build",
    title: "Restaurant Concept",
    image: "restaurantAtmosphere" as StockImageKey,
    description:
      "A sample restaurant site direction showing how menu content, hours, location, and booking or ordering actions can be organized into a cleaner mobile-first experience.",
    highlights: [
      "Menu-forward structure",
      "Fast mobile decision paths",
      "Atmospheric brand presentation"
    ]
  },
  {
    label: "Sample Demo",
    title: "Nonprofit Concept",
    image: "collaboration" as StockImageKey,
    description:
      "A concept layout for nonprofits and community organizations focused on trust, mission clarity, programs, and donation or contact pathways.",
    highlights: [
      "Mission-led storytelling",
      "Programs and services clarity",
      "Credibility-focused layout"
    ]
  },
  {
    label: "Concept Build",
    title: "Brochure-Site Concept",
    image: "storefront" as StockImageKey,
    description:
      "A polished brochure-style website demo for local service businesses that need a credible, modern presence without a complex app-style build.",
    highlights: [
      "Clean service positioning",
      "Simple lead-generation flow",
      "Modern small-business presentation"
    ]
  }
] as const;

export default function WorkPage() {
  return (
    <>
      <SectionShell
        className="pb-12 pt-10 sm:pb-16 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Work & portfolio
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              A growing portfolio, presented with the same care as the work itself.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              This page is built to establish trust through honest presentation:
              Lucky Caps is featured as the main real project, concept work is marked
              clearly, and the overall focus stays on design quality, usability, and
              thoughtful execution.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              View Services
            </ButtonLink>
          </div>

          <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-[0.92fr_1.08fr]">
            <p className="max-w-[26rem] text-sm leading-7 text-text-soft/84">
              The goal is not to make the portfolio look larger than it is. The goal
              is to show the standard of design, structure, and presentation clearly.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Real work stays honest
                </p>
                <p className="text-sm leading-6 text-text-soft/82">
                  Featured client work is labeled plainly instead of being inflated.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Concepts show range
                </p>
                <p className="text-sm leading-6 text-text-soft/82">
                  Sample directions help show creative thinking without pretending to
                  be client launches.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <WorkHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[0.74fr_1.26fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Featured Project"
            title="Lucky Caps is presented as an early case-study teaser, not just another info panel."
            description="The emphasis is on what the project demonstrates: a stronger brand impression, clearer user flow, modern frontend structure, and a more polished first touchpoint for a small business."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            The page treats Lucky Caps as a legitimate featured project while keeping
            the framing honest. It is there to show how Elevated Tech Solutions
            approaches layout, hierarchy, responsiveness, and brand presence when the
            goal is to make a business look sharper online.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Want Something Like This?</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              See Service Fit
            </ButtonLink>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-text-soft/78">
            If you&apos;re comparing options, you can also review the{" "}
            <Link
              href="/services"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              services page
            </Link>{" "}
            or see how projects move from discovery to launch on the{" "}
            <Link
              href="/process"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              process page
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={140}>
          <FeaturedProjectShowcase />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <SectionHeading
          eyebrow="Concept & Sample Work"
          title="Concept builds are included to show creative range, and they stay labeled clearly."
          description="These supporting pieces help show how Elevated Tech Solutions thinks across industries without pretending they are real client launches."
        />

        <div className="mt-16 space-y-16">
          {conceptProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.52fr_0.48fr] xl:items-center"
            >
              <Reveal className={cn(index % 2 === 1 && "xl:order-2")} delay={index * 90}>
                <EditorialImage
                  image={project.image}
                  className="min-h-[19rem] rounded-[1.8rem] sm:min-h-[23rem] lg:min-h-[26rem]"
                  imageClassName="object-cover object-center"
                  overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.18)_28%,rgba(2,6,23,0.72)_100%)]"
                >
                  <div className="flex h-full items-start justify-between p-5 sm:p-6">
                    <span className="rounded-full border border-white/12 bg-slate-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
                      {project.label}
                    </span>
                    <span className="rounded-full border border-white/10 bg-slate-950/34 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-slate-200 backdrop-blur-sm">
                      Placeholder image
                    </span>
                  </div>
                </EditorialImage>
              </Reveal>

              <Reveal className={cn(index % 2 === 1 && "xl:order-1")} delay={index * 90 + 60}>
                <div className="space-y-5">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      {project.label}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-[2.35rem]">
                      {project.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-text-soft/86">
                      {project.description}
                    </p>
                  </div>

                  <ul className="grid list-none gap-x-8 gap-y-3 border-t border-white/8 p-0 pt-5 sm:grid-cols-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="list-none text-sm leading-6 text-slate-300">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <div className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
                Next project
              </p>
              <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Want something like this for your business or organization?
              </h2>
            </div>

            <div className="xl:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-text-soft/88 sm:text-lg">
                Elevated Tech Solutions is built for clients who want a cleaner,
                stronger digital presence with modern execution and practical support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Want Something Like This?
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" size="lg">
                  Review Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
