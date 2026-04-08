import Image from "next/image";
import Link from "next/link";

import {
  ServiceOfferGallery,
  type ServiceOfferGallerySlide
} from "@/components/services/service-offer-gallery";
import { ServicesHeroVisual } from "@/components/services/services-hero-visual";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore website services from Elevated Tech Solutions, including info sites, restaurant sites, and nonprofit sites.",
  path: "/services",
  keywords: ["website services", "info websites", "nonprofit websites"]
});

const coreServices = [
  {
    title: "Info Sites",
    gallery: [
      {
        src: "/images/services/Infosite%20Example/infohomepage.png",
        title: "Homepage",
        caption:
          "A clean homepage direction with a stronger first impression and a clearer inquiry path.",
        alt: "Sample informational website homepage screenshot."
      },
      {
        src: "/images/services/Infosite%20Example/infoservisespage1.png",
        title: "Services",
        caption:
          "A simple services layout with clearer hierarchy and easier scanning.",
        alt: "Sample informational website services page screenshot."
      },
      {
        src: "/images/services/Infosite%20Example/infoservicespage2.png",
        title: "Detail",
        caption:
          "Supporting pages can add story, process, and proof without feeling heavy.",
        alt: "Sample informational website supporting page screenshot.",
        arrowIconTone: "dark"
      },
      {
        src: "/images/services/Infosite%20Example/infoservicespage3.png",
        title: "Structure",
        caption:
          "Additional sections can stay polished while giving the site more room for content and credibility.",
        alt: "Sample informational website interior page screenshot.",
        arrowIconTone: "dark"
      }
    ] as const satisfies readonly ServiceOfferGallerySlide[],
    intro:
      "Brochure-style websites for organizations that need to explain what they do and make it easy to reach out.",
    includes: [
      "Core pages for your offer and contact path",
      "Responsive design across devices",
      "Clean on-page structure and basic SEO",
      "Deployment and launch support"
    ],
    bestFor: ["Nonprofits", "Service businesses", "Local organizations"],
    closing:
      "Best for teams that need a clear offer, stronger first impression, and an easy contact path."
  },
  {
    title: "Restaurant Sites",
    gallery: [
      {
        src: "/images/services/Restaurant%20Example/restauranthomepage.png",
        title: "Atmosphere",
        caption:
          "A restaurant homepage should set the tone quickly and make the next step obvious.",
        alt: "Sample restaurant website homepage screenshot."
      },
      {
        src: "/images/services/Restaurant%20Example/Restaurantmenupage.png",
        title: "Menu",
        caption:
          "Menu layouts should keep categories, featured items, and browsing flow clear.",
        alt: "Sample restaurant website menu screenshot.",
        arrowIconTone: "dark"
      },
      {
        src: "/images/services/Restaurant%20Example/restaurantfinduspage.png",
        title: "Visit",
        caption:
          "Hours, location, and booking details should feel easy to find without clutter.",
        alt: "Sample restaurant website location screenshot.",
        arrowIconTone: "dark"
      }
    ] as const satisfies readonly ServiceOfferGallerySlide[],
    intro:
      "Restaurant websites built around the details customers look for first: menu, hours, location, and the next action.",
    includes: [
      "Menu, hours, location, and map details",
      "Strong visual presentation",
      "Clear links for calling, ordering, or reserving",
      "Mobile-first design for real customer behavior"
    ],
    bestFor: ["Restaurants", "Cafes", "Food trucks"],
    closing:
      "Best for restaurants where customers mainly need to view, decide, and act."
  },
  {
    title: "Nonprofit Sites",
    gallery: [
      {
        src: "/images/services/Nonprofit%20Example/nonprofithomepage.png",
        title: "Mission",
        caption:
          "A nonprofit homepage should make the mission clear and build trust quickly.",
        arrowIconTone: "dark"
      },
      {
        src: "/images/services/Nonprofit%20Example/nonprofitprogramspage.png",
        title: "Programs",
        caption:
          "Program pages should stay organized, easy to scan, and simple to understand.",
        arrowIconTone: "dark"
      },
      {
        src: "/images/services/Nonprofit%20Example/nonrprofitprogramspage2.png",
        title: "Story",
        caption:
          "Supporting sections should carry impact, story, and trust without overwhelming the page.",
        arrowIconTone: "dark"
      },
      {
        src: "/images/services/Nonprofit%20Example/nonrprofitprogramspage3.png",
        title: "Details",
        caption:
          "Longer program or about pages should still feel structured and easy to follow."
      },
      {
        src: "/images/services/Nonprofit%20Example/nonprofitdonatepage.png",
        title: "Support",
        caption:
          "Donation and contact paths should feel clear without adding clutter.",
        arrowIconTone: "dark"
      }
    ] as const satisfies readonly ServiceOfferGallerySlide[],
    intro:
      "Nonprofit websites for mission-driven teams that need to explain the mission clearly and guide visitors toward involvement or support.",
    includes: [
      "Mission, program, and contact pages",
      "Donation and supporter pathways",
      "Clear structure for visitors and stakeholders",
      "Responsive design and launch support"
    ],
    bestFor: [
      "Nonprofits",
      "Community organizations",
      "Mission-driven teams"
    ],
    closing:
      "Best for organizations that need trust, storytelling, and clear next steps."
  }
] as const;

const pricingPrinciples = [
  {
    title: "Clear deliverables",
    description:
      "Quotes are built around pages, features, and launch needs."
  },
  {
    title: "Right-sized quotes",
    description:
      "Pricing is tied to the actual scope instead of padded process."
  },
  {
    title: "Support available",
    description:
      "Ongoing help is available after launch when updates or oversight are needed."
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] overflow-hidden sm:h-[58rem] lg:h-[64rem]"
        >
          <Image
            src="/images/general/pexels-poopfishsocks-34081795.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%] opacity-[0.2] saturate-[1.02] blur-[1px] scale-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(2,6,23,0.6)_18%,rgba(2,6,23,0.78)_54%,rgba(2,6,23,0.95)_82%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_18%_30%,rgba(8,145,178,0.1),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.1),transparent_26%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>

        <SectionShell
          className="pb-12 pt-10 sm:pb-16 sm:pt-16"
          containerSize="wide"
          containerClassName="grid gap-14 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
        >
          <Reveal className="space-y-8" preset="heading">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
              Services
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                Website services built around clear needs, not bloated scope.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                Choose the service lane that fits your organization, then scope the
                site around the pages and actions that matter most.
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
                The offer stays focused so deliverables, examples, and launch
                expectations are easy to understand.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                    Focused scope
                  </p>
                  <p className="text-sm leading-6 text-text-soft/82">
                    Defined deliverables and clear launch expectations.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                    Built to last
                  </p>
                  <p className="text-sm leading-6 text-text-soft/82">
                    Support stays available after launch.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} preset="panel">
            <ServicesHeroVisual />
          </Reveal>
        </SectionShell>
      </div>

      <SectionShell id="core-services" className="scroll-mt-28 pb-0 sm:scroll-mt-32" containerSize="wide">
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Core Services"
            title="Three service lanes, each with example page direction."
            description="The examples are there to show page structure and content priorities, not to compete with the service itself."
          />
        </Reveal>

        <div className="mt-16 space-y-[4.5rem] sm:space-y-[5.5rem]">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-12 border-t border-white/8 pt-8 lg:gap-14 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] xl:items-start xl:pt-10"
            >
              <Reveal
                className={cn("min-w-0", index % 2 === 1 && "xl:order-2")}
                delay={index * 90}
                preset="panel"
              >
                <ServiceOfferGallery serviceTitle={service.title} slides={service.gallery} />
              </Reveal>

              <Reveal
                className={cn("min-w-0", index % 2 === 1 && "xl:order-1")}
                delay={index * 90 + 60}
                preset="service"
              >
                <div className="space-y-8">
                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Service 0{index + 1}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-[2.4rem]">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-text-soft/86">
                      {service.intro}
                    </p>
                  </div>

                  <div className="grid gap-8 border-t border-white/8 pt-6 lg:grid-cols-[1.02fr_0.98fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                        Includes
                      </p>
                      <ul className="mt-4 grid list-none gap-x-8 gap-y-3.5 p-0 sm:grid-cols-2">
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
        className="pb-0 pt-16 sm:pt-20"
        containerSize="wide"
        containerClassName="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Scope And Support"
            title="Practical scope, realistic pricing, and support after launch."
            description="The work is scoped around what your site actually needs, with support available when updates or oversight are still needed later."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            If you want more detail on timing and collaboration, you can review the{" "}
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

        <Reveal delay={120} preset="card">
          <CardShell tone="quiet" className="p-7 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {pricingPrinciples.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(
                    "border-t border-white/8 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0",
                    index === 0 && "border-transparent pt-0 md:border-l-0 md:pl-0"
                  )}
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

      <SectionShell className="pb-24 pt-16 sm:pb-28 sm:pt-20" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Request a quote
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If one of these services fits, request a quote and we&apos;ll scope it from there.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Share the basics, and the next step can be scoped around your pages,
              priorities, and launch needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary" size="lg">
                Review FAQs
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
