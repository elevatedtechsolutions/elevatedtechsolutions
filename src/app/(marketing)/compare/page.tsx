import { ComparisonMatrix } from "@/components/compare/comparison-matrix";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

type ComparisonOptionKey = "diy" | "agency" | "ets";

type ComparisonOption = {
  key: ComparisonOptionKey;
  label: string;
  eyebrow: string;
  summary: string;
  emphasis?: boolean;
};

type ScenarioCard = {
  eyebrow: string;
  title: string;
  setupCost: string;
  monthlyOverhead: string;
  yearOneTotal: string;
  yearThreeTotal: string;
  ownerUpkeep: string;
  emphasis?: boolean;
};

type BaselineCard = {
  title: string;
  eyebrow: string;
  setupRange: string;
  monthlyRange: string;
  totalPicture: string;
  note?: string;
};

export const metadata = createPageMetadata({
  title: "Compare Your Options",
  description:
    "Compare DIY builders, traditional agencies, and Elevated Tech Solutions across cost, effort, and ongoing overhead.",
  path: "/compare",
  keywords: [
    "website cost comparison",
    "DIY website vs agency",
    "website tradeoff comparison"
  ]
});

const comparisonOptions: readonly ComparisonOption[] = [
  {
    key: "diy",
    label: "DIY Builder",
    eyebrow: "Lowest entry cost",
    summary: "$5-$40/month can turn into more once tools stack."
  },
  {
    key: "agency",
    label: "Traditional Agency",
    eyebrow: "Highest scope ceiling",
    summary: "Five-figure builds and heavier monthly carry are common."
  },
  {
    key: "ets",
    label: "Elevated Tech Solutions",
    eyebrow: "Practical middle path",
    summary: "Custom scope up front, usually with lighter long-term drag.",
    emphasis: true
  }
] as const;

const comparisonRows = [
  {
    label: "Typical setup cost",
    values: {
      diy: {
        primary: "Usually a low-cash start",
        secondary: "Usually plan, domain, and template spending instead of a formal build budget."
      },
      agency: {
        primary: "Often five figures",
        secondary: "Current Clutch web design pricing shows an average project cost around $38,105."
      },
      ets: {
        primary: "Scoped custom quote",
        secondary: "Usually more than DIY, but lighter than a larger agency engagement."
      }
    }
  },
  {
    label: "Typical monthly cost",
    values: {
      diy: {
        primary: "$5-$40/month can be the start",
        secondary: "Apps, domains, email, and commerce tools can push the real monthly cost up."
      },
      agency: {
        primary: "Often $5k+/month in market data",
        secondary: "Current Clutch guidance shows an average monthly project cost around $5,279.79."
      },
      ets: {
        primary: "Usually lighter overhead",
        secondary: "Often hosting plus support only when the site actually needs it."
      }
    }
  },
  {
    label: "1-year / 3-year ownership picture",
    values: {
      diy: {
        primary: "Cheap headline, rising total",
        secondary: "A low monthly plan can still turn into thousands over 1-3 years once extras stack."
      },
      agency: {
        primary: "Highest total ownership cost",
        secondary: "Build fees plus retainers can keep year-1 and year-3 cost high."
      },
      ets: {
        primary: "Cleaner long-term picture",
        secondary: "Custom cost up front, but usually less drag from recurring tools and heavier process."
      }
    }
  },
  {
    label: "Time you spend",
    values: {
      diy: {
        primary: "Highest owner time",
        secondary: "You handle setup, edits, and fixes."
      },
      agency: {
        primary: "Lower build burden, more process",
        secondary: "Less hands-on building, more meetings and approvals."
      },
      ets: {
        primary: "Focused involvement",
        secondary: "Input matters, but the process stays tighter."
      }
    }
  },
  {
    label: "Best for",
    values: {
      diy: {
        primary: "Tight budgets and simple needs",
        secondary: "Best when owner time is available and polish is not the top priority."
      },
      agency: {
        primary: "Larger scope and heavier complexity",
        secondary: "Best for broader teams, integrations, or layered review."
      },
      ets: {
        primary: "Smaller teams wanting custom work",
        secondary: "Best for practical scope and a stronger custom result."
      }
    }
  },
  {
    label: "Biggest tradeoff",
    values: {
      diy: {
        primary: "Lower cash, higher carry",
        secondary: "The owner usually pays with time, upkeep, and add-ons."
      },
      agency: {
        primary: "Highest capability, highest overhead",
        secondary: "The process and total spend can exceed what smaller teams need."
      },
      ets: {
        primary: "Not the cheapest, not the biggest",
        secondary: "It tends to fit the middle better than the extremes."
      }
    }
  }
] as const;

const framingPoints = [
  "Starting cost is not the full story.",
  "Monthly overhead matters.",
  "Owner time matters too."
] as const;

const baselineCards: readonly BaselineCard[] = [
  {
    title: "Builder-based brochure site",
    eyebrow: "Directional example",
    setupRange: "Often about $100-$800 to get going.",
    monthlyRange:
      "Often about $20-$90/month once plan, domain, email, and a few tools are included.",
    totalPicture:
      "Roughly $400-$1,900 in year one, or about $1,000-$4,000 over three years, before putting a dollar value on owner time.",
    note:
      "This is where low monthly pricing can still turn into a few thousand dollars over time."
  },
  {
    title: "Builder-based restaurant site",
    eyebrow: "Directional example",
    setupRange: "Often about $150-$1,000 up front.",
    monthlyRange:
      "Often about $40-$180/month once menu tools, ordering or reservation tools, domain, email, and upkeep are in the picture.",
    totalPicture:
      "Roughly $700-$3,000 in year one, or about $2,000-$7,000 over three years, before owner or staff time.",
    note:
      "Restaurant sites often feel cheap at the start, then grow once operational tools are layered in."
  },
  {
    title: "Builder-based ecommerce store",
    eyebrow: "Directional example",
    setupRange: "Often about $300-$2,000+ up front.",
    monthlyRange:
      "Often about $60-$300+/month before counting payment fees tied to actual sales volume.",
    totalPicture:
      "Roughly $1,200-$5,500+ in year one, or about $3,500-$16,000+ over three years once apps, templates, subscriptions, and transaction costs stack up.",
    note:
      "This is usually where plan pricing stops being the useful number and ownership cost becomes the real issue."
  },
  {
    title: "Traditional agency brochure site",
    eyebrow: "Broad market example",
    setupRange: "Often five figures up front.",
    monthlyRange:
      "Ongoing support can add meaningful monthly cost when a retainer or maintenance agreement is involved.",
    totalPicture:
      "Current Clutch web design pricing shows an average project cost around $38,105 and an average monthly project cost around $5,279.79. In practice, year-one cost is often firmly five figures.",
    note:
      "These are broad review-platform market averages, not universal quotes for every agency or project."
  }
] as const;

const pricingDisclosure = {
  eyebrow: "Pricing note",
  title: "Baseline numbers help, but they are still snapshots.",
  description:
    "Public platform pricing, fees, taxes, and service pricing change over time. These examples use current public pricing checked in April 2026 plus common add-ons to show directional ownership cost, not permanent or universal totals."
} as const;

const costScaleCards = [
  {
    title: "DIY Builder",
    eyebrow: "3-year directional cost",
    range: "Often about $1k-$7k+",
    width: "w-[28%]",
    note: "Lower cash entry, but tools and owner time keep adding up."
  },
  {
    title: "Elevated Tech Solutions",
    eyebrow: "3-year directional cost",
    range: "Usually middle-range",
    width: "w-[52%]",
    note: "Scoped custom cost up front with lighter long-term drag."
  },
  {
    title: "Traditional Agency",
    eyebrow: "3-year directional cost",
    range: "Often highest total carry",
    width: "w-[84%]",
    note: "Higher build cost plus support overhead can keep the total elevated."
  }
] as const;

const hiddenCostCards = [
  {
    title: "DIY Builder",
    eyebrow: "Higher owner carry",
    emphasis: false,
    summary: "Cheap entry points often shift the real burden into tools and owner time.",
    level: "High",
    bandWidth: "w-[88%]",
    metrics: [
      { label: "Owner time", value: "High" },
      { label: "Monthly overhead", value: "Medium" },
      { label: "Process drag", value: "Low" }
    ],
    points: [
      "Apps, templates, domains, and email",
      "Payment or transaction fees where relevant",
      "Setup, updates, and troubleshooting stay on you"
    ]
  },
  {
    title: "Traditional Agency",
    eyebrow: "Higher process carry",
    emphasis: false,
    summary: "The hidden cost is often broader process, slower revisions, and ongoing agreements.",
    level: "High",
    bandWidth: "w-[82%]",
    metrics: [
      { label: "Owner time", value: "Medium" },
      { label: "Monthly overhead", value: "High" },
      { label: "Process drag", value: "High" }
    ],
    points: [
      "Retainers or support agreements",
      "Slower revision and approval cycles",
      "Broader process overhead around the build"
    ]
  },
  {
    title: "Elevated Tech Solutions",
    eyebrow: "Lighter ongoing carry",
    emphasis: true,
    summary: "The goal is a clearer custom result with less recurring drag on the owner.",
    level: "Moderate",
    bandWidth: "w-[56%]",
    metrics: [
      { label: "Owner time", value: "Lower" },
      { label: "Monthly overhead", value: "Lower" },
      { label: "Process drag", value: "Lower" }
    ],
    points: [
      "Scoped custom cost up front",
      "Support when needed instead of heavier retainers",
      "Less owner time than DIY, less process than agency"
    ]
  }
] as const;

const scenarioCards: readonly ScenarioCard[] = [
  {
    eyebrow: "DIY example",
    title: "DIY brochure-style site",
    setupCost: "Often about $100-$800",
    monthlyOverhead: "Often about $20-$90/month",
    yearOneTotal: "Often about $400-$1,900",
    yearThreeTotal: "Often about $1,000-$4,000",
    ownerUpkeep: "Moderate to high"
  },
  {
    eyebrow: "DIY example",
    title: "DIY restaurant site",
    setupCost: "Often about $150-$1,000",
    monthlyOverhead: "Often about $40-$180/month",
    yearOneTotal: "Often about $700-$3,000",
    yearThreeTotal: "Often about $2,000-$7,000",
    ownerUpkeep: "High"
  },
  {
    eyebrow: "Agency example",
    title: "Traditional agency brochure-style site",
    setupCost: "Often five figures up front",
    monthlyOverhead: "Often meaningful ongoing support cost",
    yearOneTotal: "Often firmly five figures",
    yearThreeTotal: "Can continue rising fast with retainers",
    ownerUpkeep: "Moderate"
  },
  {
    eyebrow: "ETS example",
    title: "ETS brochure-style site",
    setupCost: "Scoped custom quote up front",
    monthlyOverhead: "Usually lighter ongoing overhead",
    yearOneTotal: "Often mid-range between DIY and agency",
    yearThreeTotal: "Usually steadier without heavy recurring drag",
    ownerUpkeep: "Lower",
    emphasis: true
  }
] as const;

const fitCards = [
  {
    title: "DIY can be reasonable",
    eyebrow: "Choose this when",
    description:
      "The budget is tight, the site is simple, and you are comfortable owning the setup and upkeep yourself.",
    signals: [
      "Budget: lowest possible upfront spend",
      "Complexity: simple pages and lower stakes",
      "Owner time: available for ongoing upkeep",
      "Process tolerance: self-managed is acceptable"
    ]
  },
  {
    title: "An agency may make sense",
    eyebrow: "Choose this when",
    description:
      "The project has more complexity, more stakeholders, or a broader scope that justifies a heavier process.",
    signals: [
      "Budget: room for a larger engagement",
      "Complexity: broader scope or heavier integrations",
      "Owner time: less direct building, more reviews",
      "Process tolerance: higher"
    ]
  },
  {
    title: "ETS is often the strongest fit",
    eyebrow: "Choose this when",
    description:
      "You want a cleaner custom result than DIY usually delivers, without taking on the heavier cost and process a larger agency often brings.",
    signals: [
      "Budget: realistic, but not agency-scale",
      "Complexity: meaningful, but still practical",
      "Owner time: limited, but not zero",
      "Process tolerance: wants clarity without drag"
    ]
  }
] as const;

const heroSignals = [
  {
    label: "Compares",
    value: "Cost, owner time, and ongoing overhead."
  },
  {
    label: "Use it for",
    value: "Deciding which tradeoffs are actually acceptable."
  },
  {
    label: "Not this",
    value: "Not a pricing gimmick or one-size-fits-all answer."
  }
] as const;

export default function ComparePage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] overflow-hidden sm:h-[54rem] lg:h-[58rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_18%_22%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.12),transparent_22%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28),rgba(2,6,23,0.72)_38%,rgba(2,6,23,0.95)_82%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-x-0 top-20 h-72 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_66%)] blur-3xl" />
        </div>

        <SectionShell
          className="pb-10 pt-10 sm:pb-14 sm:pt-16"
          containerSize="wide"
          containerClassName="grid gap-12 xl:grid-cols-[minmax(0,1fr)_23rem] xl:items-start"
        >
          <Reveal className="space-y-8" preset="heading">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
              Compare Your Options
            </div>

            <div className="space-y-6">
              <h1 className="max-w-5xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
                Compare the real cost of DIY, agency, and a practical custom build.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
                See the fuller cost picture before you commit to the wrong website path.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/process" variant="secondary" size="lg">
                Review Process
              </ButtonLink>
            </div>

            <div className="grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div key={signal.label} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                    {signal.label}
                  </p>
                  <p className="text-sm leading-6 text-text-soft/84">{signal.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} preset="panel">
            <CardShell tone="hero" className="p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                    Decision lens
                  </p>
                  <h2 className="font-display text-3xl font-semibold text-white">
                    The cheapest option is not always the lowest-cost one.
                  </h2>
                  <p className="text-sm leading-7 text-text-soft/84">
                    What matters is what you still pay for later, and how much work stays on you after launch.
                  </p>
                </div>

                <div className="grid gap-3">
                  {[
                    "DIY can save cash up front but cost more in owner time.",
                    "Agency cost can make sense when complexity is genuinely higher.",
                    "ETS fits teams that want custom clarity without oversized overhead."
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardShell>
          </Reveal>
        </SectionShell>
      </div>

      <SectionShell
        className="pb-0 pt-16 sm:pt-20"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.86fr_1.14fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Why Compare"
            title="Starting cost is only the first number."
            description="Monthly overhead and owner time usually decide the real total."
          />
        </Reveal>

        <Reveal delay={120} preset="card">
          <CardShell tone="quiet" className="p-6 sm:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              {framingPoints.map((point, index) => (
                <article
                  key={point}
                  className={cn(
                    "border-t border-white/8 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0",
                    index === 0 && "border-transparent pt-0 md:border-l-0 md:pl-0"
                  )}
                >
                  <p className="text-sm leading-7 text-text-soft/84">{point}</p>
                </article>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Main Comparison"
            title="A quick look at real cost and ownership."
            description="Setup cost, monthly carry, long-term ownership, and fit."
          />
        </Reveal>

        <Reveal delay={100} preset="panel" className="mt-12">
          <ComparisonMatrix options={comparisonOptions} rows={comparisonRows} />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="card">
          <CardShell tone="hero" className="overflow-hidden p-6 sm:p-7">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
            <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
              <div className="space-y-4 border-b border-white/8 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                  Cost Scale
                </p>
                <h3 className="font-display text-3xl font-semibold text-white sm:text-[2.25rem]">
                  One fast view of total-cost scale over time.
                </h3>
                <p className="text-sm leading-7 text-text-soft/84">
                  Directional, but useful for seeing how the total picture usually widens over three years.
                </p>
              </div>

              <div className="space-y-4">
                {costScaleCards.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70} preset="card">
                    <article className="rounded-[1.45rem] border border-white/8 bg-white/[0.025] p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-cyan-200/72">
                            {item.eyebrow}
                          </p>
                          <h4 className="mt-2 font-display text-xl font-semibold text-white">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm font-medium leading-6 text-slate-100">
                          {item.range}
                        </p>
                      </div>

                      <div className="mt-4 h-3 rounded-full bg-white/[0.06]">
                        <div
                          className={`h-3 rounded-full bg-[linear-gradient(90deg,rgba(96,165,250,0.34),rgba(34,211,238,0.82))] ${item.width}`}
                        />
                      </div>

                      <p className="mt-4 text-sm leading-6 text-text-soft/82">
                        {item.note}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Real Cost Examples"
            title="What lower-cost options can become over time."
            description="Simplified ownership examples based on current public pricing and common add-ons."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {baselineCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80} preset="card">
              <CardShell tone="quiet" className="p-6 sm:p-7">
                <article className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-[2rem]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="grid gap-3 border-t border-white/8 pt-5">
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                        Setup range
                      </p>
                      <p className="mt-2 text-sm leading-7 text-text-soft/84">
                        {card.setupRange}
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                        Monthly overhead
                      </p>
                      <p className="mt-2 text-sm leading-7 text-text-soft/84">
                        {card.monthlyRange}
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                        1-year / 3-year total
                      </p>
                      <p className="mt-2 text-sm leading-7 text-text-soft/84">
                        {card.totalPicture}
                      </p>
                    </div>
                  </div>

                  {card.note ? (
                    <p className="border-t border-white/8 pt-5 text-sm leading-7 text-slate-400">
                      {card.note}
                    </p>
                  ) : null}
                </article>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="card">
          <CardShell tone="quiet" className="p-6 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.38fr_1.62fr] lg:items-start">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                  {pricingDisclosure.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {pricingDisclosure.title}
                </h3>
              </div>
              <p className="text-sm leading-7 text-text-soft/84">
                {pricingDisclosure.description}
              </p>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="What Adds Up"
            title="The hidden cost is often time and overhead."
            description="What adds up is usually recurring tools, support overhead, and owner carry after launch."
          />
        </Reveal>

        <div className="mt-12">
          <CardShell tone="hero" className="overflow-hidden p-5 sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_70%)]" />

            <div className="grid gap-4 lg:grid-cols-[0.36fr_1.64fr] lg:items-start">
              <div className="space-y-4 border-b border-white/8 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                  Carry cost
                </p>
                <h3 className="font-display text-3xl font-semibold text-white sm:text-[2.2rem]">
                  What you keep carrying later matters.
                </h3>
                <p className="text-sm leading-7 text-text-soft/84">
                  This compares the cost pressure that often builds after the initial decision.
                </p>
              </div>

              <div className="space-y-4">
                {hiddenCostCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 70} preset="card">
                    <article
                      className={cn(
                        "rounded-[1.55rem] border p-5 sm:p-6",
                        card.emphasis
                          ? "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(19,35,58,0.78),rgba(8,14,28,0.92))]"
                          : "border-white/8 bg-white/[0.025]"
                      )}
                    >
                      <div className="grid gap-5 xl:grid-cols-[0.44fr_1.56fr] xl:items-center">
                        <div className="space-y-3">
                          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                            {card.eyebrow}
                          </p>
                          <h4 className="font-display text-2xl font-semibold text-white">
                            {card.title}
                          </h4>
                          <p className="text-sm leading-6 text-text-soft/82">
                            {card.summary}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="rounded-[1.15rem] border border-white/8 bg-slate-950/32 p-4">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                                Overall carry cost
                              </p>
                              <p
                                className={cn(
                                  "text-[0.68rem] uppercase tracking-[0.26em]",
                                  card.emphasis ? "text-cyan-100/78" : "text-slate-300"
                                )}
                              >
                                {card.level}
                              </p>
                            </div>
                            <div className="mt-3 h-2.5 rounded-full bg-white/[0.06]">
                              <div
                                className={cn(
                                  "h-2.5 rounded-full bg-[linear-gradient(90deg,rgba(96,165,250,0.36),rgba(34,211,238,0.75))]",
                                  card.bandWidth
                                )}
                              />
                            </div>
                          </div>

                          <div className="grid gap-3 md:grid-cols-3">
                            {card.metrics.map((metric) => (
                              <div
                                key={`${card.title}-${metric.label}`}
                                className="rounded-[1.05rem] border border-white/8 bg-white/[0.025] px-4 py-3"
                              >
                                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                                  {metric.label}
                                </p>
                                <p className="mt-2 text-sm font-medium leading-6 text-slate-100">
                                  {metric.value}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="grid gap-3 md:grid-cols-3">
                            {card.points.map((point) => (
                              <div
                                key={point}
                                className={cn(
                                  "rounded-[1.05rem] border px-4 py-3 text-sm leading-6",
                                  card.emphasis
                                    ? "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))] text-slate-100"
                                    : "border-white/8 bg-white/[0.02] text-slate-200"
                                )}
                              >
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </CardShell>
        </div>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
      >
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Example Scenarios"
            title="What the real cost can become."
            description="Directional ranges make the ownership picture faster to scan."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {scenarioCards.map((scenario, index) => (
            <Reveal key={scenario.title} delay={index * 90} preset="card">
              <CardShell
                tone={scenario.emphasis ? "default" : "quiet"}
                className={cn(
                  "h-full p-6 sm:p-7",
                  scenario.emphasis &&
                    "border-cyan-300/12 bg-[linear-gradient(180deg,rgba(19,35,58,0.68),rgba(8,14,28,0.88))]"
                )}
              >
                <article className="flex h-full flex-col space-y-5">
                  <div className="space-y-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                      {scenario.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-[2.1rem]">
                      {scenario.title}
                    </h3>
                  </div>

                  <div className="grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-2">
                    {[
                      <div
                        key={`${scenario.title}-setup`}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4",
                          scenario.emphasis
                            ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))]"
                            : "border-white/8 bg-white/[0.025]"
                        )}
                      >
                        <p
                          className={cn(
                            "text-[0.68rem] uppercase tracking-[0.26em]",
                            scenario.emphasis ? "text-cyan-100/76" : "text-slate-400"
                          )}
                        >
                          Setup / build cost
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-soft/86">
                          {scenario.setupCost}
                        </p>
                      </div>,
                      <div
                        key={`${scenario.title}-monthly`}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4",
                          scenario.emphasis
                            ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))]"
                            : "border-white/8 bg-white/[0.025]"
                        )}
                      >
                        <p
                          className={cn(
                            "text-[0.68rem] uppercase tracking-[0.26em]",
                            scenario.emphasis ? "text-cyan-100/76" : "text-slate-400"
                          )}
                        >
                          Typical monthly overhead
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-soft/86">
                          {scenario.monthlyOverhead}
                        </p>
                      </div>,
                      <div
                        key={`${scenario.title}-year-one`}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4",
                          scenario.emphasis
                            ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))]"
                            : "border-white/8 bg-white/[0.025]"
                        )}
                      >
                        <p
                          className={cn(
                            "text-[0.68rem] uppercase tracking-[0.26em]",
                            scenario.emphasis ? "text-cyan-100/76" : "text-slate-400"
                          )}
                        >
                          Likely 1-year total
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-soft/86">
                          {scenario.yearOneTotal}
                        </p>
                      </div>,
                      <div
                        key={`${scenario.title}-year-three`}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4",
                          scenario.emphasis
                            ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))]"
                            : "border-white/8 bg-white/[0.025]"
                        )}
                      >
                        <p
                          className={cn(
                            "text-[0.68rem] uppercase tracking-[0.26em]",
                            scenario.emphasis ? "text-cyan-100/76" : "text-slate-400"
                          )}
                        >
                          Likely 3-year total
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-soft/86">
                          {scenario.yearThreeTotal}
                        </p>
                      </div>
                    ]}
                  </div>

                  <div className="mt-auto border-t border-white/8 pt-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-cyan-200/72">
                      Owner time / upkeep
                    </p>
                    <p className="mt-2 text-sm leading-7 text-text-soft/86">
                      {scenario.ownerUpkeep}
                    </p>
                  </div>
                </article>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Final Filter"
            title="The better fit usually comes down to budget, complexity, and how much you want to carry."
            description="Choose the path that matches your scope, process tolerance, and ongoing carry."
            align="center"
          />
        </Reveal>

        <Reveal delay={80} preset="card" className="mt-10">
          <CardShell tone="quiet" className="px-6 py-5 sm:px-7">
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                "Choose DIY when lower cash cost matters more than saving your own time.",
                "Choose agency when the project is broad enough to justify more process.",
                "Choose ETS when you want custom work with a cleaner path."
              ].map((item, index) => (
                <p
                  key={item}
                  className={cn(
                    "text-sm leading-7 text-text-soft/84 lg:border-l lg:pl-5",
                    index === 0 && "lg:border-l-0 lg:pl-0"
                  )}
                >
                  {item}
                </p>
              ))}
            </div>
          </CardShell>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fitCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80} preset="card">
              <CardShell
                tone={index === 2 ? "default" : "quiet"}
                className={cn(
                  "h-full p-6 sm:p-7",
                  index === 2 &&
                    "border-cyan-300/12 bg-[linear-gradient(180deg,rgba(19,35,58,0.68),rgba(8,14,28,0.88))]"
                )}
              >
                <article className="space-y-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                    {card.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-7 text-text-soft/84">
                    {card.description}
                  </p>
                  <div className="border-t border-white/8 pt-4">
                    <div className="grid gap-3">
                      {card.signals.map((signal) => (
                        <div
                          key={signal}
                          className="rounded-[1.1rem] border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-200"
                        >
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              If the fit is clear
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If you want custom without oversized overhead, request a scoped quote.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              If the practical middle path looks right, the next step is a quote conversation shaped around your actual scope, priorities, and launch needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Scoped Quote
              </ButtonLink>
              <ButtonLink href="/process" variant="secondary" size="lg">
                See How It Works
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
