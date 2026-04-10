import type { Route } from "next";
import Image from "next/image";

import { createPageMetadata } from "@/lib/metadata";
import { HomeHeroVisual } from "@/components/home/home-hero-visual";
import { HomeSignaturePanel } from "@/components/home/home-signature-panel";
import { NewsletterSignupForm } from "@/components/newsletter/newsletter-signup-form";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { SocialLinks } from "@/components/shared/social-links";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Elevated Tech Solutions",
  description:
    "Website design and support for small businesses, nonprofits, and restaurants that need a credible online presence without agency overhead.",
  path: "/",
  keywords: [
    "affordable websites for small businesses",
    "restaurant websites",
    "nonprofit website design"
  ]
});

const pillars = [
  {
    title: "Info Websites",
    description:
      "Brochure and service sites for organizations that need to explain what they do and make it easy to reach out."
  },
  {
    title: "Restaurant Websites",
    description:
      "Restaurant sites centered on the details customers look for first: menu, hours, location, and the next action."
  },
  {
    title: "Nonprofit Websites",
    description:
      "Mission-led sites for nonprofits and community organizations that need trust, structure, and clear support paths."
  }
] as const;

const featuredServices = [
  {
    title: "Info Sites",
    summary:
      "Brochure-style websites for organizations that need a clear offer, better first impression, and an easy contact path.",
    support:
      "Example views show how the core pages can work together without overcomplicating the site.",
    image: "/images/services/Infosite%20Example/infohomepage.png",
    imageAlt: "Sample informational website example view.",
    bullets: [
      "Home, about, services, and contact structure",
      "Built to look established from day one"
    ]
  },
  {
    title: "Restaurant Sites",
    summary:
      "Focused restaurant websites that present the menu, hours, location, and next action without clutter.",
    support:
      "Example views show how atmosphere and usability can support the essentials customers need first.",
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
      "Example pages show how mission, programs, and giving paths can stay clear and easy to follow.",
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
    title: "Sharper than a rushed template build",
    description:
      "The goal is to launch a site that reads clearly, feels established, and supports trust."
  },
  {
    title: "Lean enough to stay efficient",
    description:
      "Most smaller teams need defined scope, solid execution, and a straightforward path to launch."
  },
  {
    title: "Focused service lanes",
    description:
      "The offer stays narrow on purpose: info sites, restaurant sites, nonprofit sites, and support after launch."
  },
  {
    title: "Direct communication throughout",
    description:
      "Projects stay close to the original conversation instead of being handed through layers of account management."
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
      "Shape the pages, messaging, and layout around what visitors need to understand and do."
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
      "Keep the site current with updates, maintenance, and support after launch."
  }
] as const;

const founderValues = [
  "Founder-led communication",
  "Lean project delivery",
  "Reliable follow-through"
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
          className="pb-16 pt-10 sm:pb-24 sm:pt-16"
          containerSize="wide"
          containerClassName="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center"
        >
          <Reveal className="space-y-8" preset="heading">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82 backdrop-blur-sm">
              Websites for organizations that need to look established online
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.9rem]">
                Websites that help smaller organizations look established online.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                Elevated Tech Solutions builds websites for small businesses,
                nonprofits, and restaurants that need a stronger first impression, a
                clearer message, and a straightforward path to launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                Explore Services
              </ButtonLink>
              <ButtonLink href="/contact#quote-form" variant="secondary" size="lg">
                Get a Quote
              </ButtonLink>
            </div>

            <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Built for
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Small businesses, nonprofits, and restaurants that need a more
                  credible online presence.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Approach
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Focused scope, direct communication, and custom decisions where
                  they matter most.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Support
                </p>
                <p className="text-sm leading-6 text-text-soft/84">
                  Launch support plus dependable follow-through after the site goes live.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} preset="panel">
            <HomeHeroVisual />
          </Reveal>
        </SectionShell>
      </div>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-center"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="What We Do"
            title="Focused website services for the organizations we serve best."
            description="The work stays centered on three service lanes: info sites, restaurant sites, and nonprofit sites, with support available after launch."
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

        <Reveal delay={120} preset="panel">
          <HomeSignaturePanel />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-center"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Comparison Guide"
            title="Not sure whether DIY, an agency, or a practical custom build makes more sense?"
            description="The comparison page breaks down cost, owner time, ongoing fees, and tradeoffs so the next step is easier to judge before you request a quote."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={"/compare" as Route} variant="secondary" size="lg">
              Compare Your Options
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120} preset="card">
          <CardShell tone="quiet" className="p-6 sm:p-7">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  label: "DIY",
                  text: "Often the lowest starting cost, but the highest owner burden."
                },
                {
                  label: "Agency",
                  text: "Often the strongest fit for larger, more complex, higher-budget work."
                },
                {
                  label: "ETS",
                  text: "Often the clearest fit when you want custom results without oversized process."
                }
              ].map((item, index) => (
                <article
                  key={item.label}
                  className={cn(
                    "border-t border-white/8 pt-5 md:border-l md:border-t-0 md:pl-5 md:pt-0",
                    index === 0 && "border-transparent pt-0 md:border-l-0 md:pl-0"
                  )}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-soft/84">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Featured Services"
            title="Three core services."
            description="Each includes example views so you can quickly see the kind of site that fits."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            The examples support the service categories. They are there to show
            page direction, not to turn the homepage into a separate portfolio.
          </p>
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} preset="service">
              <CardShell tone="quiet" className="h-full p-5 sm:p-6">
                <div className="overflow-hidden rounded-[1.45rem] border border-white/8 bg-slate-950/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="relative min-h-[14.5rem] sm:min-h-[15.5rem]">
                    <Image
                      fill
                      src={service.image}
                      alt={service.imageAlt}
                      sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
                      className="object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.03),rgba(2,6,23,0.12)_34%,rgba(2,6,23,0.58)_100%)]" />
                  </div>
                </div>

                <div className="mt-5 space-y-5">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Service 0{index + 1}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-base leading-8 text-text-soft/86">{service.summary}</p>
                  </div>

                  <p className="border-t border-white/8 pt-5 text-sm leading-7 text-text-soft/82">
                    {service.support}
                  </p>

                  <ul className="grid list-none gap-y-3 border-t border-white/8 pt-5 p-0">
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

        <Reveal delay={220} preset="cta">
          <div className="flex justify-center pt-2 sm:pt-4">
            <ButtonLink href="/services" size="lg">
              View Services
            </ButtonLink>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start"
      >
        <Reveal preset="cta">
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Why Elevated Tech Solutions
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-[3.2rem]">
              A better fit for teams that need clarity without excess process.
            </h2>
            <p className="mt-6 text-base leading-8 text-text-soft/88">
              The work is built to stay focused, direct, and high-quality from the
              first conversation through launch.
            </p>
          </CardShell>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} preset="card">
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
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Process"
            title="A straightforward process from first conversation to launch."
            description="Each step is there to keep decisions clear and the build moving."
          />

          <ol className="mt-10 list-none space-y-5 p-0">
            {processSteps.map((item, index) => (
              <li key={item.step} className="list-none border-t border-white/8 pt-5">
                <Reveal delay={index * 80} preset="list">
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

        <Reveal delay={120} preset="cta">
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Founder
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white">
              Founder-led work with direct accountability.
            </h2>
            <p className="mt-5 text-base leading-8 text-text-soft/88">
              Projects stay close to the original conversation, so decisions,
              quality, and follow-through stay aligned from the start.
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
              <ButtonLink href="/process" variant="secondary">
                View Process
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="quiet" className="mx-auto max-w-5xl px-7 py-7 sm:px-9 sm:py-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(50,200,255,0.08),transparent_36%)]" />
            <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.92fr)] xl:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/72">
                    Stay Connected
                  </p>
                  <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.15rem]">
                    Follow along for launches, updates, and practical website insights.
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-text-soft/84 sm:text-base">
                    Stay connected through LinkedIn, Facebook, Instagram, or the
                    newsletter for occasional updates from Elevated Tech Solutions.
                  </p>
                </div>

                <div className="rounded-[1.45rem] border border-white/8 bg-white/[0.025] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                    Follow Along
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-text-soft/82">
                    Social channels are the best place to catch recent launches,
                    business updates, and lightweight behind-the-scenes progress.
                  </p>
                  <SocialLinks
                    ariaLabel="Stay connected social links"
                    variant="pill"
                    className="mt-5"
                    itemClassName="w-full justify-center sm:w-auto"
                  />
                </div>
              </div>

              <div>
                <NewsletterSignupForm source="newsletter_form" />
              </div>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Ready to get started
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If the fit is right, the next step is a scoped quote.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Share the basics and the project can be scoped around what your site
              actually needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact#quote-form" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg">
                Review Services
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
