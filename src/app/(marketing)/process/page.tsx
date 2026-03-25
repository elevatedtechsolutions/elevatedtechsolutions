import { ProcessHeroVisual } from "@/components/process/process-hero-visual";
import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Process",
  description:
    "See how Elevated Tech Solutions guides clients through discovery, scope, build, launch, and ongoing support with a clear, low-friction website process.",
  path: "/process",
  keywords: ["website project process", "discovery and quote", "website launch support"]
});

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Start with the business goals, the audience, and the pages that actually matter. This is where the project gets pointed in the right direction before design or development begins."
  },
  {
    step: "02",
    title: "Scope & Quote",
    description:
      "After the goals are clearer, the next step is a defined project scope and a quote based on the actual need. That keeps the work organized and helps avoid vague expectations later."
  },
  {
    step: "03",
    title: "Build & Review",
    description:
      "Once the scope is approved, the site is designed and built with modern structure, responsive behavior, and clear user flow. Review happens as the work takes shape, not as an afterthought."
  },
  {
    step: "04",
    title: "Launch",
    description:
      "The site is prepared for deployment, checked for launch readiness, and pushed live with the key details in place so the business can start using it confidently."
  },
  {
    step: "05",
    title: "Ongoing Support",
    description:
      "After launch, support can continue through updates, light edits, guidance, and maintenance so the site stays current and useful."
  }
] as const;

const clientMaterials = [
  {
    title: "Brand basics",
    items: [
      "Logo or brand assets, if available",
      "Business photos or other images"
    ]
  },
  {
    title: "Website content",
    items: [
      "Text or written content for key pages",
      "Menu, hours, address, and contact details when relevant"
    ]
  },
  {
    title: "Review feedback",
    items: [
      "Feedback during the review process",
      "Approval on important updates so the build keeps moving"
    ]
  }
] as const;

const timelineCards = [
  {
    title: "Smaller brochure-style projects",
    description:
      "Often move faster when content and approvals are ready early."
  },
  {
    title: "Restaurant sites",
    description:
      "Typically depend on how quickly menus, photos, hours, and brand details are gathered."
  },
  {
    title: "Support and revision timing",
    description:
      "Post-launch updates are shaped by the scope of the request and the current support plan."
  }
] as const;

export default function ProcessPage() {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            How the process works
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              A process built to feel clear, organized, and easy to work through.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Elevated Tech Solutions is structured to reduce friction for clients.
              The process is meant to feel professional and calm, with clear next
              steps, realistic expectations, and support from the first conversation
              through launch and beyond.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/faq" variant="secondary" size="lg">
              Read FAQs
            </ButtonLink>
          </div>

          <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Structured from the start
              </p>
              <p className="text-sm leading-6 text-text-soft/82">
                Scope is defined before the build begins so expectations stay clear.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Built for busy teams
              </p>
              <p className="text-sm leading-6 text-text-soft/82">
                The workflow is designed to stay manageable for owners, staff, and
                organizations with limited bandwidth.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ProcessHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.76fr_1.24fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Step By Step"
            title="The project flow is straightforward from the first conversation to launch."
            description="Each step is there to create clarity, reduce surprises, and make the process easier for clients who may not have time for a complicated web project."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            The overall goal is simple: discovery first, scope before build,
            thoughtful review along the way, and support available after launch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="relative list-none p-0 before:absolute before:bottom-3 before:left-[0.8125rem] before:top-3 before:w-px before:bg-gradient-to-b before:from-cyan-300/50 before:via-white/12 before:to-transparent before:content-['']">
            {processSteps.map((item) => (
              <li key={item.step} className="relative list-none pl-12 pb-10 last:pb-0">
                <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-[0.62rem] font-semibold tracking-[0.18em] text-cyan-100">
                  {item.step}
                </div>
                <article className="border-t border-white/8 pt-5">
                  <div className="grid gap-4 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-[2rem]">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-text-soft/84">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-center"
      >
        <Reveal>
          <EditorialImage
            image="workspaceDesk"
            className="min-h-[22rem] rounded-[1.9rem] sm:min-h-[25rem] lg:min-h-[30rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.2)_36%,rgba(2,6,23,0.76)_100%)]"
          >
            <div className="flex h-full items-end p-6 sm:p-7">
              <div className="max-w-sm rounded-[1.4rem] border border-white/12 bg-slate-950/44 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  What clients provide
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Clients do not need everything perfect before starting, but a few
                  essentials help the project move faster and stay accurate.
                </p>
              </div>
            </div>
          </EditorialImage>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="What Clients Provide"
            title="A few essentials help the project move smoothly."
            description="The goal is not to create busywork. It is simply to make sure the important details are available so the site can represent the business clearly and accurately."
          />

          <div className="mt-10 grid gap-8 border-t border-white/8 pt-6 md:grid-cols-3">
            {clientMaterials.map((group) => (
              <article key={group.title} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="list-none space-y-3 p-0">
                  {group.items.map((item) => (
                    <li key={item} className="list-none text-sm leading-7 text-text-soft/84">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Timeline Expectations"
            title="Timelines depend on project size, content readiness, and feedback speed."
            description="Some websites move quickly, while others take longer because of approvals, content gathering, or added functionality. The key is that the timeline is tied to the actual scope instead of being guessed at loosely."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            Elevated Tech Solutions aims to keep projects moving with realistic
            planning, but launch timing works best when content and feedback arrive
            at a steady pace.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <CardShell tone="quiet" className="p-7 sm:p-8">
            <div className="space-y-6">
              {timelineCards.map((item, index) => (
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
              Ready to begin
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If you want a website project that feels structured and manageable, let&apos;s start with the right scope.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              The process is built to make things easier for smaller organizations,
              not harder.
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
