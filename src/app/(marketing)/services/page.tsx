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
    "Explore focused website services from Elevated Tech Solutions, including info sites, restaurant websites, and nonprofit websites.",
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
      "Clean brochure-style websites for organizations that need a strong, trustworthy online presence.",
    includes: [
      "Core pages for your offer and contact path",
      "Responsive design across devices",
      "Clean on-page structure and basic SEO",
      "Deployment and launch support"
    ],
    bestFor: ["Nonprofits", "Service businesses", "Local organizations"],
    closing:
      "Best for teams that need clarity, credibility, and a site that is easy to maintain."
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
      "Focused restaurant websites built to help customers find the menu, hours, location, and next action fast.",
    includes: [
      "Menu, hours, location, and map details",
      "Strong visual presentation",
      "Clear links for calling, ordering, or reserving",
      "Mobile-first design for real customer behavior"
    ],
    bestFor: ["Restaurants", "Cafes", "Food trucks"],
    closing:
      "Best for restaurants that need to look strong and communicate fast."
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
      "Focused nonprofit websites for mission-driven teams that need clarity, trust, and a stronger public presence.",
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
      "Best for organizations that need storytelling, credibility, and clear next steps without unnecessary complexity."
  }
] as const;

const pricingPrinciples = [
  {
    title: "Defined scope",
    description:
      "Projects are quoted around clear pages, deliverables, and launch needs."
  },
  {
    title: "Practical pricing",
    description:
      "The goal is to keep the work affordable without lowering the standard."
  },
  {
    title: "Support after launch",
    description:
      "Clients can keep support in place after launch when updates and oversight are needed."
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
          <Reveal className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
              Services
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                Clean website services for small organizations.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                Elevated Tech Solutions builds modern websites and practical support
                for small businesses, nonprofits, and restaurants.
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
                The offer stays focused so the process is easier to understand and the
                final website stays easier to maintain.
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

          <Reveal delay={120}>
            <ServicesHeroVisual />
          </Reveal>
        </SectionShell>
      </div>

      <SectionShell id="core-services" className="scroll-mt-28 pb-0 sm:scroll-mt-32" containerSize="wide">
        <SectionHeading
          eyebrow="Core Services"
          title="Three core services."
          description="Each one includes a few simple example pages for visual direction."
        />

        <div className="mt-16 space-y-16 sm:space-y-20">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-10 border-t border-white/8 pt-8 lg:gap-12 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] xl:items-start xl:pt-10"
            >
              <Reveal className={cn("min-w-0", index % 2 === 1 && "xl:order-2")} delay={index * 90}>
                <ServiceOfferGallery serviceTitle={service.title} slides={service.gallery} />
              </Reveal>

              <Reveal
                className={cn("min-w-0", index % 2 === 1 && "xl:order-1")}
                delay={index * 90 + 60}
              >
                <div className="space-y-7">
                  <div className="space-y-4">
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
        className="pb-0 pt-16 sm:pt-20"
        containerSize="wide"
        containerClassName="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Simple Process"
            title="Clear scope. Clean delivery. Support when it matters."
            description="The work is scoped around what the site actually needs, with a straightforward path from quote to launch."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            Clients should know what is included, how the work will move, and what
            support looks like after launch. You can also review the{" "}
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
        <Reveal>
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Next step
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If you need a modern website and a practical plan, let&apos;s talk through what fits.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Elevated Tech Solutions helps smaller organizations move forward with
              cleaner presentation and dependable support.
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
