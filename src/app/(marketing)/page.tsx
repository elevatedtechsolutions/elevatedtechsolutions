import Image from "next/image";

import { createPageMetadata } from "@/lib/metadata";
import { HomeHeroVisual } from "@/components/home/home-hero-visual";
import { HomeSignaturePanel } from "@/components/home/home-signature-panel";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = createPageMetadata({
  title: "Elevated Tech Solutions",
  description:
    "Affordable modern websites for small businesses, nonprofits, and restaurants with premium design, responsive structure across devices, and practical long-term support.",
  path: "/",
  keywords: [
    "affordable websites for small businesses",
    "restaurant websites",
    "nonprofit website design"
  ]
});

const trustStrip = [
  {
    label: "Affordable setup",
    detail: "Professional presentation without oversized agency pricing."
  },
  {
    label: "Modern design",
    detail: "Clean layouts, strong typography, and clear messaging."
  },
  {
    label: "Responsive",
    detail: "Built to feel strong across desktop, tablet, and mobile."
  },
  {
    label: "Low-maintenance hosting",
    detail: "Practical setup choices that stay manageable after launch."
  },
  {
    label: "Local & remote support",
    detail: "West Michigan roots with reliable remote collaboration."
  }
] as const;

const pillars = [
  {
    title: "Info Websites",
    description:
      "Polished brochure and service sites for small businesses, nonprofits, and local organizations that need credibility, clarity, and a modern online presence."
  },
  {
    title: "Restaurant Websites",
    description:
      "Focused restaurant sites with menus, hours, maps, and strong actions to call, order, reserve, or visit without making the experience feel cluttered."
  },
  {
    title: "Nonprofit Websites",
    description:
      "Mission-led websites for nonprofits and community organizations that need trust, structure, and clearer support paths."
  }
] as const;

const featuredServices = [
  {
    title: "Info Sites",
    summary:
      "Clean brochure-style websites for organizations that need clarity, credibility, and a stronger first impression.",
    support:
      "Supported by real example views that show how service pages, hierarchy, and inquiry paths can come together cleanly.",
    image: "/images/services/Infosite%20Example/infohomepage.png",
    imageAlt: "Sample informational website example view.",
    bullets: [
      "Home, about, services, and contact structure",
      "A modern look that feels established from day one"
    ]
  },
  {
    title: "Restaurant Sites",
    summary:
      "Focused restaurant websites that present the menu, hours, location, and next action without clutter.",
    support:
      "Example views help show the right balance of atmosphere, usability, and customer action before the project even starts.",
    image: "/images/services/Restaurant%20Example/restauranthomepage.png",
    imageAlt: "Sample restaurant website example view.",
    bullets: [
      "Menu, hours, location, and reservation/contact actions",
      "Designed to support real-world customer decisions"
    ]
  },
  {
    title: "Nonprofit Sites",
    summary:
      "Mission-led websites for nonprofits and community organizations that need trust, structure, and clearer support paths.",
    support:
      "Real example pages keep the focus on service fit while showing how mission, programs, and giving paths can be presented.",
    image: "/images/services/Nonprofit%20Example/nonprofithomepage.png",
    imageAlt: "Sample nonprofit website example view.",
    bullets: [
      "Mission, program, donation, and contact structure",
      "Built to feel warm, clear, and trustworthy"
    ]
  }
] as const;

const differentiators = [
  {
    title: "Better than a rushed template job",
    description:
      "A cheap website can look acceptable for a week and still create long-term trust problems. Elevated Tech Solutions focuses on cleaner structure, stronger messaging, and a more polished presentation."
  },
  {
    title: "More practical than a bloated agency process",
    description:
      "Many organizations do not need months of strategy workshops or oversized retainers. They need a site that looks strong, works well, and can actually be maintained."
  },
  {
    title: "Built for clarity, not confusion",
    description:
      "The work is intentionally focused on low-complexity website services that can be delivered cleanly: info sites, restaurant sites, and support plans."
  },
  {
    title: "Founder-led quality and communication",
    description:
      "Clients are not passed through layers of account management. Strategy, design direction, build quality, and support stay close to the source."
  }
] as const;

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Start with the real goals of the business, the audience, and the pages that matter most."
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "Create a site that feels modern, loads clearly, and communicates the offer without unnecessary complexity."
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Go live with a cleaner digital presence that is ready across desktop, tablet, and mobile."
  },
  {
    step: "04",
    title: "Support",
    description:
      "Keep the site current with practical updates, maintenance, and thoughtful long-term guidance."
  }
] as const;

const founderValues = [
  "Lean, founder-led delivery",
  "Focused on quality and practicality",
  "Built for long-term client trust"
] as const;

export default function HomePage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem] overflow-hidden sm:h-[64rem] lg:h-[72rem]"
        >
          <Image
            src="/images/general/istockphoto-498554434-612x612.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] opacity-[0.24] saturate-[1.08] blur-[1px] scale-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(2,6,23,0.56)_20%,rgba(2,6,23,0.78)_56%,rgba(2,6,23,0.96)_82%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_18%_32%,rgba(8,145,178,0.12),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(96,165,250,0.12),transparent_26%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>

        <SectionShell
          className="pb-14 pt-10 sm:pb-20 sm:pt-16"
          containerSize="wide"
          containerClassName="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center"
        >
          <Reveal className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82 backdrop-blur-sm">
              Affordable modern websites for growing organizations
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.9rem]">
                Websites that <span className="text-gradient-accent text-glow">look modern</span>, feel premium, and stay practical to run.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                Elevated Tech Solutions builds affordable modern websites for small
                businesses, nonprofits, and restaurants that need a stronger digital
                presence without the cost and complexity of a traditional agency.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                Explore Services
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Get a Quote
              </ButtonLink>
            </div>

            <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Built for
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Small businesses, nonprofits, and restaurants that need a credible
                  online presence now.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Approach
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Standardized where it should be, custom where it matters, and kept
                  lean from start to finish.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Support
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Launch quality plus dependable follow-through after the site goes live.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HomeHeroVisual />
          </Reveal>
        </SectionShell>

        <SectionShell className="py-0" containerSize="wide">
          <div className="grid gap-7 border-y border-white/8 py-9 sm:grid-cols-2 xl:grid-cols-5">
            {trustStrip.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 60}
                className={index === 0 ? "xl:pr-6" : "xl:border-l xl:border-white/8 xl:pl-6"}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  {item.label}
                </p>
                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-text-soft/82">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </div>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-center"
      >
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Focused website services for organizations that need quality without unnecessary complexity."
            description="The business is intentionally built around clean, practical offerings that can be delivered well: modern info websites, restaurant websites, and dependable support after launch."
          />

          <div className="mt-10 space-y-6">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="border-t border-white/8 pt-5">
                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-text-soft/84">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <HomeSignaturePanel />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Featured Services"
            title="Three core services, each supported by real example views."
            description="The services stay primary. The supporting example pages are there to show design quality, structure, and fit without turning the site into a separate portfolio system."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            Need ecommerce or more advanced functionality later? That can be scoped
            when it is actually necessary, instead of forcing extra cost and
            complexity into the first version of the site.
          </p>
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <CardShell tone="quiet" className="h-full p-5 sm:p-6">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-slate-950/40">
                  <div className="relative min-h-[14rem] sm:min-h-[15rem]">
                    <Image
                      fill
                      src={service.image}
                      alt={service.imageAlt}
                      sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.14)_34%,rgba(2,6,23,0.62)_100%)]" />
                  </div>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Service 0{index + 1}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-base leading-8 text-text-soft/86">{service.summary}</p>
                  </div>

                  <p className="border-t border-white/8 pt-4 text-sm leading-7 text-text-soft/82">
                    {service.support}
                  </p>

                  <ul className="grid list-none gap-y-3 border-t border-white/8 pt-4 p-0">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="list-none text-sm leading-6 text-slate-200"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start"
      >
        <Reveal>
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Why Choose Elevated Tech Solutions
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-[3.2rem]">
              Not bargain-bin work. Not oversized agency overhead.
            </h2>
            <p className="mt-6 text-base leading-8 text-text-soft/88">
              Many small organizations get stuck choosing between low-quality
              template work and expensive agency processes that are far beyond what
              they actually need. Elevated Tech Solutions is built for the middle:
              polished design, practical scope, and clear support that respects the
              budget without lowering the standard.
            </p>
          </CardShell>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="border-t border-white/8 pt-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A straightforward process that keeps projects moving without making clients do extra work."
            description="The workflow is designed to stay clear, efficient, and supportive, especially for owners and teams that do not have time for a complicated web project."
          />

          <ol className="mt-10 list-none space-y-5 p-0">
            {processSteps.map((item, index) => (
              <li key={item.step} className="list-none border-t border-white/8 pt-5">
                <Reveal delay={index * 80}>
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-text-soft/84">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Founder
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white">
              Founder-led, intentionally lean, and built around practical client value.
            </h2>
            <p className="mt-5 text-base leading-8 text-text-soft/88">
              Elevated Tech Solutions was shaped around a simple idea: smaller
              organizations should be able to get a modern, trustworthy website
              without paying for layers of process they do not need. The mission is
              to provide clearer digital presentation, dependable service, and
              long-term support that feels realistic for real businesses.
            </p>

            <div className="mt-8 grid gap-4 border-t border-white/8 pt-5">
              {founderValues.map((value) => (
                <div key={value} className="text-sm leading-6 text-slate-200">
                  {value}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/founder">Meet the Founder</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Learn More
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Ready to get started
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If your organization needs a website that looks current and stays easy to manage, let&apos;s build it well.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Elevated Tech Solutions is built for clients who want modern design,
              clear communication, and practical support without the usual web agency
              friction.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
