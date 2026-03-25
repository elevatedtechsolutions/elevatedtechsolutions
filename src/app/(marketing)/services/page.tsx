import Link from "next/link";

import { ServicesHeroVisual } from "@/components/services/services-hero-visual";
import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import type { StockImageKey } from "@/config/stock-images";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore focused website services from Elevated Tech Solutions, including info sites, restaurant websites, and ongoing website support for small organizations.",
  path: "/services",
  keywords: ["website services", "info websites", "website maintenance"]
});

const coreServices = [
  {
    title: "Info Sites",
    image: "storefront" as StockImageKey,
    intro:
      "Professional brochure-style websites for organizations that need a clean, trustworthy online presence without unnecessary complexity.",
    includes: [
      "Home, about, services or programs, and contact pages",
      "Responsive design across desktop, tablet, and mobile",
      "Basic SEO setup and clean on-page structure",
      "Deployment and launch support"
    ],
    bestFor: ["Nonprofits", "Service businesses", "Local organizations"],
    closing:
      "Best when the goal is clarity, credibility, and a modern first impression that is easy to maintain."
  },
  {
    title: "Restaurant Sites",
    image: "restaurantAtmosphere" as StockImageKey,
    intro:
      "Focused restaurant websites designed to help customers quickly find the menu, hours, location, and the next action to take.",
    includes: [
      "Menu presentation, hours, location, and map details",
      "Gallery and branded visual presentation",
      "CTA links for calling, ordering, reserving, or visiting",
      "Mobile-first design for real customer behavior"
    ],
    bestFor: ["Restaurants", "Cafes", "Food trucks"],
    closing:
      "Best when the site needs to look strong, communicate fast, and support customers on the go."
  },
  {
    title: "Ongoing Website Support",
    image: "workspaceDesk" as StockImageKey,
    intro:
      "Practical post-launch support for clients who want the website to stay current without handling every update on their own.",
    includes: [
      "Content updates and light page edits",
      "Hosting guidance and launch-environment support",
      "Bug fixes and practical issue resolution",
      "Uptime and dependency oversight"
    ],
    bestFor: [
      "Businesses that need consistency",
      "Teams with limited internal bandwidth",
      "Owners who want dependable follow-through"
    ],
    closing:
      "Best when the website should stay active and polished without turning into another task on the business owner's list."
  }
] as const;

const focusedBenefits = [
  {
    title: "Cleaner scope creates better outcomes",
    description:
      "Starting with focused service offers helps projects stay on budget, launch more cleanly, and avoid the bloat that often slows small organizations down."
  },
  {
    title: "The work stays polished and repeatable",
    description:
      "A narrow early service ladder makes it easier to maintain quality, refine the process, and deliver websites that feel premium without becoming unpredictable."
  },
  {
    title: "Support is easier after launch",
    description:
      "When the core stack and service types are intentional, updates and maintenance stay more manageable for both the client and the business."
  }
] as const;

const futureCapabilities = [
  {
    title: "Ecommerce Lite",
    description:
      "Simple product catalog and checkout experiences for businesses that need a lighter commerce layer without jumping into a large custom build."
  },
  {
    title: "Advanced Integrations",
    description:
      "Connections to external tools and business systems when the project scope genuinely calls for them."
  },
  {
    title: "Custom Features",
    description:
      "More tailored functionality can be explored later once the core website goals are established and the needs are clearly defined."
  }
] as const;

const pricingPrinciples = [
  {
    title: "Affordable setup",
    description:
      "Projects are shaped around real-world needs so clients can get a strong website without paying for unnecessary complexity."
  },
  {
    title: "Clear project scopes",
    description:
      "Every quote should be tied to defined pages, deliverables, and launch expectations rather than vague, open-ended retainers."
  },
  {
    title: "Support plans",
    description:
      "Ongoing support can be structured as a practical monthly relationship for clients who want updates and oversight after launch."
  },
  {
    title: "Custom quotes by need",
    description:
      "If a project needs more than the core launch offers, the next step is a tailored quote based on the actual requirements."
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <SectionShell
        className="pb-12 pt-10 sm:pb-16 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Launch services
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
              Services built for real-world budgets.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Elevated Tech Solutions builds websites and digital support for small
              businesses, nonprofits, and restaurants that need something modern,
              trustworthy, and practical to maintain after launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/process" variant="secondary" size="lg">
              How We Work
            </ButtonLink>
          </div>

          <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-[0.9fr_1.1fr]">
            <p className="max-w-[26rem] text-sm leading-7 text-text-soft/84">
              The goal is not to overwhelm clients with too many offers. It is to
              lead with the services most smaller organizations actually need first.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Focused scope
                </p>
                <p className="text-sm leading-6 text-text-soft/82">
                  Defined deliverables and realistic launch expectations.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                  Built to last
                </p>
                <p className="text-sm leading-6 text-text-soft/82">
                  Support stays available after launch instead of ending at handoff.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ServicesHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <SectionHeading
          eyebrow="Core Services"
          title="The launch service lineup is intentionally focused."
          description="These are the services Elevated Tech Solutions is leading with first because they solve common client needs well and create a stronger, more maintainable website foundation."
        />

        <div className="mt-16 space-y-16">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.5fr_0.5fr] xl:items-start"
            >
              <Reveal className={cn("min-w-0", index % 2 === 1 && "xl:order-2")} delay={index * 90}>
                <EditorialImage
                  image={service.image}
                  className="min-h-[20rem] rounded-[1.8rem] sm:min-h-[24rem] lg:min-h-[27rem]"
                  imageClassName="object-cover object-center"
                  overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.22)_30%,rgba(2,6,23,0.7)_100%)]"
                >
                  <div className="flex h-full items-end p-5 sm:p-6">
                    <div className="rounded-full border border-white/12 bg-slate-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/78 backdrop-blur-sm">
                      Placeholder image for {service.title}
                    </div>
                  </div>
                </EditorialImage>
              </Reveal>

              <Reveal
                className={cn("min-w-0", index % 2 === 1 && "xl:order-1")}
                delay={index * 90 + 60}
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Core Offer 0{index + 1}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-[2.4rem]">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-text-soft/86">
                      {service.intro}
                    </p>
                  </div>

                  <div className="grid gap-8 border-t border-white/8 pt-6 lg:grid-cols-[1.04fr_0.96fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                        Includes
                      </p>
                      <ul className="mt-4 grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="list-none border-t border-white/8 pt-3 text-sm leading-6 text-slate-200"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                          Best for
                        </p>
                        <p className="mt-3 text-sm leading-7 text-text-soft/84">
                          {service.bestFor.join(", ")}.
                        </p>
                      </div>

                      <p className="border-t border-white/8 pt-5 text-sm leading-7 text-text-soft/84">
                        {service.closing}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:items-center"
      >
        <Reveal>
          <EditorialImage
            image="workspaceDesk"
            className="min-h-[22rem] rounded-[1.9rem] sm:min-h-[25rem] lg:min-h-[30rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.24)_34%,rgba(2,6,23,0.76)_100%)]"
          >
            <div className="flex h-full items-end p-6 sm:p-7">
              <div className="max-w-sm rounded-[1.4rem] border border-white/12 bg-slate-950/44 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  Intentional scope
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Fewer moving parts up front usually means better delivery, easier
                  launch decisions, and stronger long-term support.
                </p>
              </div>
            </div>
          </EditorialImage>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Why These Services Work"
            title="A focused offer is better for clients than pretending to do everything at once."
            description="This approach keeps delivery cleaner, makes project expectations easier to understand, and helps clients pay for the work they actually need."
          />

          <div className="mt-10 space-y-6">
            {focusedBenefits.map((benefit, index) => (
              <article key={benefit.title} className="border-t border-white/8 pt-5">
                <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/72">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <SectionHeading
          eyebrow="Coming Later"
          title="Additional capabilities can be scoped when the project truly calls for them."
          description="These are intentionally separate from the core launch offers so the starting service lineup stays clean, affordable, and easy to understand."
        />

        <div className="mt-12 grid gap-8 border-t border-white/8 pt-6 lg:grid-cols-3">
          {futureCapabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  Available on request
                </p>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-text-soft/82">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[0.82fr_1.18fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Pricing Philosophy"
            title="Clear pricing starts with clear scope."
            description="Instead of forcing every project into a rigid package, the pricing approach is built around realistic setup costs, defined deliverables, and support options that match the actual need."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The goal is to keep websites affordable in a practical sense, not cheap
            in a way that lowers the standard. Clients should know what is included,
            what support looks like, and when a custom quote makes more sense. You
            can also review the{" "}
            <Link
              href="/process"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              project process
            </Link>{" "}
            or read the{" "}
            <Link
              href="/faq"
              className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              FAQ
            </Link>{" "}
            before requesting a quote.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <CardShell tone="quiet" className="p-7 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {pricingPrinciples.map((item, index) => (
                <article
                  key={item.title}
                  className={cn("border-t border-white/8 pt-5", index === 0 && "border-transparent pt-0")}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-text-soft/84">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Start with the right scope
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If you need a modern website and a practical plan for support, let&apos;s talk through what fits.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Elevated Tech Solutions is designed to help smaller organizations move
              forward with more confidence, better presentation, and clearer digital
              support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary" size="lg">
                Read FAQs
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
