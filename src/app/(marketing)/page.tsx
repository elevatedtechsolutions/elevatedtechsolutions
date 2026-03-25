import { createPageMetadata } from "@/lib/metadata";
import { HomeHeroVisual } from "@/components/home/home-hero-visual";
import { HomeSignaturePanel } from "@/components/home/home-signature-panel";
import { LuckyCapsPreview } from "@/components/home/lucky-caps-preview";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = createPageMetadata({
  title: "Elevated Tech Solutions",
  description:
    "Affordable modern websites for small businesses, nonprofits, and restaurants with premium design, mobile-first structure, and practical long-term support.",
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
    label: "Mobile-first",
    detail: "Built to feel sharp and easy to use on every screen."
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
    title: "Ongoing Support",
    description:
      "Post-launch help for updates, hosting guidance, small content changes, and practical improvements so the site keeps working for the business."
  }
] as const;

const featuredServices = [
  {
    title: "Info Sites",
    summary:
      "For service businesses, nonprofits, and organizations that need a clean, trustworthy web presence.",
    bullets: [
      "Home, about, services, and contact structure",
      "Clear calls to action and mobile-first layouts",
      "A modern look that feels established from day one"
    ]
  },
  {
    title: "Restaurant Sites",
    summary:
      "For restaurants, cafes, and food concepts that need their menu, hours, location, and atmosphere presented clearly.",
    bullets: [
      "Menu, hours, location, and reservation/contact actions",
      "Built to look good fast on mobile devices",
      "Designed to support real-world customer decisions"
    ]
  },
  {
    title: "Website Maintenance",
    summary:
      "For owners who want the site to stay current without handling every edit or update themselves.",
    bullets: [
      "Practical content updates and site upkeep",
      "Dependable support after launch",
      "Clear boundaries so support stays useful and sustainable"
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
      "Go live with a cleaner digital presence that is ready for customers on desktop and mobile."
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
      <SectionShell
        className="pb-14 pt-10 sm:pb-20 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
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
              View Services
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
        containerClassName="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Featured Services"
            title="Three focused offers. Built to launch well and stay manageable."
            description="These offers are designed to feel premium in execution while still respecting real-world budgets, practical scope, and the long-term reality of maintaining a website."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            Need ecommerce or more advanced functionality later? That can be scoped
            when it is actually necessary, instead of forcing extra cost and
            complexity into the first version of the site.
          </p>
        </Reveal>

        <div className="space-y-10">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="border-t border-white/8 pt-6">
                <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      Service 0{index + 1}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-base leading-8 text-text-soft/86">{service.summary}</p>
                    <ul className="mt-5 grid list-none gap-x-8 gap-y-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
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
                </div>
              </article>
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
        containerClassName="grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-center"
      >
        <Reveal>
          <LuckyCapsPreview />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Featured Work"
            title="Lucky Caps is introduced as an early case-study teaser."
            description="As the portfolio grows, Lucky Caps can serve as a polished showcase of how a smaller brand can look sharper, more intentional, and more trustworthy than a generic off-the-shelf site."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The goal is not to overstate the work. It is to present it well:
            cleaner structure, stronger visual hierarchy, and a more premium online
            impression than budget website solutions usually deliver.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/work">View Work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Discuss Your Project
            </ButtonLink>
          </div>
        </Reveal>
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
                View Services
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
