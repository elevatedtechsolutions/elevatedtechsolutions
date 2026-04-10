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
    "See how Elevated Tech Solutions guides clients from discovery and scope through build, launch, and ongoing support.",
  path: "/process",
  keywords: ["website project process", "discovery and quote", "website launch support"]
});

const processSteps = [
  {
    step: "1",
    title: "Discovery",
    description:
      "Start with the business goals, the audience, and the pages that matter most so the project is pointed in the right direction from the start."
  },
  {
    step: "2",
    title: "Scope & Quote",
    description:
      "Turn the project into a defined scope and quote based on the actual need, so expectations stay concrete before work begins."
  },
  {
    step: "3",
    title: "Build & Review",
    description:
      "Once the scope is approved, the site is designed and built around the agreed pages, with review built into the process as the work takes shape."
  },
  {
    step: "4",
    title: "Launch",
    description:
      "Prepare the site for deployment, check the important details, and push it live once it is ready."
  },
  {
    step: "5",
    title: "Ongoing Support",
    description:
      "After launch, support can continue through updates, light edits, guidance, and maintenance."
  }
] as const;

const clientMaterials = [
  {
    title: "Brand basics",
    description: "Use what is already available. Nothing needs to be polished perfectly before the project starts.",
    items: [
      "Logo or brand assets, if available",
      "Business photos or other images"
    ]
  },
  {
    title: "Core content",
    description: "The main page copy and essential business details help the site stay accurate from the first draft.",
    items: [
      "Text or written content for key pages",
      "Menu, hours, address, and contact details when relevant"
    ]
  },
  {
    title: "Review feedback",
    description: "Timely feedback matters more than long, overworked notes. Clear approvals keep the build moving.",
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
      "Usually move faster when content and approvals are ready early."
  },
  {
    title: "Restaurant sites",
    description:
      "Often depend on how quickly menus, photos, hours, and brand details are gathered."
  },
  {
    title: "Support and revision timing",
    description:
      "Post-launch updates are shaped by the scope of the request and the current support plan."
  }
] as const;

const timelineSignals = [
  "Project size and page count",
  "How quickly content is ready",
  "How steadily approvals come in"
] as const;

export default function ProcessPage() {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8" preset="heading">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            How the process works
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              A straightforward website process from quote to launch.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              This page is here to show how the work stays organized, what clients
              need to provide, and how the project moves forward without unnecessary friction.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact#quote-form" size="lg">
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
                Scope is defined early so the build starts with clear expectations.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Built for busy teams
              </p>
              <p className="text-sm leading-6 text-text-soft/82">
                The workflow is built to stay manageable for owners, staff, and
                organizations with limited bandwidth.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} preset="panel">
          <ProcessHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.76fr_1.24fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Step By Step"
            title="What to expect from first conversation to launch."
            description="This is the detailed breakdown of how the project moves from initial conversation to a live site."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-text-soft/86">
            Each step is there to keep the project moving with fewer surprises and clearer decisions.
          </p>
        </Reveal>

        <Reveal delay={120} preset="list">
          <ol className="relative list-none space-y-5 p-0">
            {processSteps.map((item, index) => (
              <li key={item.step} className="relative list-none pl-14">
                {index !== processSteps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-[1rem] top-[3.7rem] bottom-[-1.4rem] w-px bg-gradient-to-b from-cyan-300/44 via-white/12 to-transparent"
                  />
                ) : null}
                <div className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/24 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(34,211,238,0.08))] text-sm font-semibold text-cyan-100 shadow-[0_0_0_6px_rgb(var(--background))]">
                  {item.step}
                </div>
                <CardShell tone="quiet" className="p-5 sm:p-6">
                  <article className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
                    <div className="space-y-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-cyan-200/70">
                        Step {item.step}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-white sm:text-[2rem]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-text-soft/84">
                      {item.description}
                    </p>
                  </article>
                </CardShell>
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
        <Reveal preset="panel">
          <EditorialImage
            image="workspaceDesk"
            className="min-h-[22rem] rounded-[1.9rem] sm:min-h-[25rem] lg:min-h-[30rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.16)_36%,rgba(2,6,23,0.68)_100%)]"
          >
            <div className="flex h-full items-end p-6 sm:p-7">
              <div className="max-w-sm rounded-[1.4rem] border border-white/12 bg-slate-950/38 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  What clients provide
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  A few essentials help the project stay accurate and easier to move through.
                </p>
              </div>
            </div>
          </EditorialImage>
        </Reveal>

        <Reveal delay={120} preset="heading">
          <SectionHeading
            eyebrow="What Clients Provide"
            title="A few basics keep the project moving."
            description="Most projects only need brand basics, core content, and timely feedback. The goal is not extra homework, just the essentials."
          />

          <div className="mt-10 grid gap-6 border-t border-white/8 pt-6 md:grid-cols-3">
            {clientMaterials.map((group) => (
              <CardShell key={group.title} tone="quiet" className="p-5 sm:p-6">
                <article className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-7 text-text-soft/82">
                      {group.description}
                    </p>
                  </div>
                <ul className="list-none space-y-3 border-t border-white/8 pt-4 p-0">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-text-soft/84">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </article>
              </CardShell>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Timeline Expectations"
            title="Timeline depends mostly on scope, content, and approvals."
            description="Some projects move quickly, while others take longer because content or feedback arrives in stages. The timeline follows the real scope."
          />

          <div className="mt-8 grid gap-3 border-t border-white/8 pt-5">
            {timelineSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 text-sm leading-7 text-text-soft/84">
                <span className="h-2 w-2 rounded-full bg-cyan-200/72" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} preset="card">
          <CardShell tone="quiet" className="p-7 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {timelineCards.map((item, index) => (
                <article
                  key={item.title}
                  className={cn("border-t border-white/8 pt-5", index === 0 && "border-transparent pt-0")}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-cyan-200/72">
                    Timing note 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
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
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Ready to begin
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If the process sounds like a fit, the next step is a scoped quote.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              A strong project starts with clear goals, defined scope, and realistic expectations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact#quote-form" size="lg">
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
