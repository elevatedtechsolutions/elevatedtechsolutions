import { FounderProfileVisual } from "@/components/about/founder-profile-visual";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Founder",
  description:
    "Meet the founder of Elevated Tech Solutions and learn how a GVSU Computer Science degree, web development experience, and nonprofit technology work shape the business.",
  path: "/founder",
  keywords: ["meet the founder", "GVSU computer science", "Aztech web development", "STEM Greenhouse IT specialist"]
});

const founderStory = [
  {
    title: "Grand Valley State University",
    description:
      "Elevated Tech Solutions is built on a Bachelor's degree in Computer Science from Grand Valley State University, where the work was heavily focused on web application development and the kind of technical problem solving that translates directly into real client projects."
  },
  {
    title: "Aztech internship in Grand Rapids",
    description:
      "An internship at Aztech in Grand Rapids added hands-on web development experience in a professional environment, reinforcing how modern websites need to balance implementation quality, usability, and the real needs of the people using them."
  },
  {
    title: "STEM Greenhouse and ongoing technology work",
    description:
      "Continuing work as an IT Specialist at STEM Greenhouse deepened an interest in improving technology for real organizations. That nonprofit experience sharpened both the technical side of the work and the motivation to help others access better digital tools."
  }
] as const;

const whyItMatters = [
  {
    title: "Affordable does not have to feel generic",
    description:
      "Many smaller businesses and nonprofits still need a strong first impression online, but too often their choices are either rushed low-cost work or pricing built for much larger organizations."
  },
  {
    title: "Founder-led is a practical advantage",
    description:
      "A solo founder model keeps communication direct, decision-making clearer, and accountability closer to the work itself. Clients are not passed from conversation to conversation just to get simple progress or honest guidance."
  },
  {
    title: "The inspiration came from real service work",
    description:
      "Working in nonprofit technology made it clear how valuable better systems can be, and how many organizations need affordable digital solutions that still feel modern, thoughtful, and credible."
  }
] as const;

const strengthGroups = [
  {
    title: "Technical background",
    items: [
      "Bachelor's-level computer science foundation with a focus on web app development",
      "Hands-on website and web application work through internship experience and personal projects",
      "A structured approach to building sites that are clean, maintainable, and practical"
    ]
  },
  {
    title: "Service mindset",
    items: [
      "Clear communication with smaller teams and non-technical clients",
      "Technology recommendations shaped by real-world constraints, not unnecessary upselling",
      "Founder-level ownership from discovery through launch and ongoing support"
    ]
  }
] as const;

const workingStyle = [
  {
    title: "Founder-led",
    description:
      "Clients work directly with the person shaping the strategy, design direction, build decisions, and follow-through."
  },
  {
    title: "Human",
    description:
      "The goal is to make the process approachable, clear, and genuinely helpful instead of overly formal or agency-heavy."
  },
  {
    title: "Practical",
    description:
      "Projects are scoped around what the business or organization actually needs, not what sounds impressive on paper."
  },
  {
    title: "Committed",
    description:
      "The work is driven by a real interest in websites, web apps, and helping organizations improve the technology they rely on."
  }
] as const;

export default function FounderPage() {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Meet the Founder
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Web development experience, nonprofit technology work, and a personal commitment to helping smaller organizations show up better online.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Elevated Tech Solutions grew from a Computer Science background at
              Grand Valley State University, web development work at Aztech in Grand
              Rapids, ongoing IT work at STEM Greenhouse, and a long-running passion
              for building websites and web apps through both professional and
              personal projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" size="lg">
              Learn About The Business
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <FounderProfileVisual
            badge="founder profile"
            title="A founder story shaped by education, hands-on experience, and a practical reason for building this business."
            subtitle="The solo founder model is intentional: it keeps the work personal, accountable, and closely connected to the clients and organizations this business was built to serve."
          />
        </Reveal>
      </SectionShell>

      <SectionShell
        className="py-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Founder Story"
            title="The path to Elevated Tech Solutions started with computer science, web app development, and real technology support work."
            description="That mix matters because it shapes both the quality of the technical work and the way projects are communicated, scoped, and supported."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            Along the way, personal projects kept reinforcing the same interest:
            building websites and web applications that look strong, work clearly,
            and solve real problems for the people using them. That interest never
            stayed academic for long. It kept turning into real hands-on work and eventually into a business built to serve others well.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6 border-t border-white/8 pt-6">
            {founderStory.map((item, index) => (
              <article key={item.title} className={index === 0 ? "space-y-4" : "space-y-4 border-t border-white/8 pt-6"}>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-text-soft/84">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center"
      >
        <Reveal>
          <CardShell tone="hero" className="p-8 sm:p-10 lg:p-12">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
              Why this business exists
            </p>
            <p className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.35rem]">
              Nonprofit technology work turned a passion for websites into a mission
              to offer affordable digital solutions that still feel premium.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-text-soft/86">
              Working at STEM Greenhouse strengthened a passion for upgrading
              technology and made the gap easier to see: many organizations need
              better websites and better digital tools, but they need them in a way
              that respects budget, clarity, and long-term usability instead of adding unnecessary complexity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Web app development was the academic and personal through-line.",
                "Aztech added real-world web development perspective.",
                "STEM Greenhouse reinforced the value of practical technology upgrades.",
                "The business was built to help others access that same kind of progress."
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-6 text-text-soft/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardShell>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Why This Business Matters"
            title="The point is to make better websites and digital solutions more accessible to smaller organizations."
            description="Elevated Tech Solutions was created to give businesses, nonprofits, and local organizations an option that feels more personal, more modern, and more realistic for their actual needs."
          />

          <div className="mt-10 space-y-6">
            {whyItMatters.map((item, index) => (
              <article key={item.title} className="border-t border-white/8 pt-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Strengths"
            title="The founder skill set blends technical ability with a practical service mindset."
            description="That mix helps Elevated Tech Solutions build websites that feel premium while still staying usable, maintainable, and realistic for smaller organizations."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-8 border-t border-white/8 pt-6 md:grid-cols-2">
            {strengthGroups.map((group) => (
              <article key={group.title} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="list-none space-y-3 p-0">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-7 text-text-soft/84">
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
        containerClassName="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-start"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Values & Working Style"
            title="The founder model is meant to feel more personal, more accountable, and more grounded."
            description="This is not about being smaller for the sake of being smaller. It is about staying close to the work and building trust through how the work gets done."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6 md:grid-cols-2">
            {workingStyle.map((item) => (
              <article key={item.title} className="border-t border-white/8 pt-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-text-soft/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <div className="grid gap-8 border-t border-white/8 pt-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
                Work directly with the founder
              </p>
              <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                If you want a modern website with clearer communication and founder-level ownership, let&apos;s talk.
              </h2>
            </div>

            <div className="xl:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-text-soft/88 sm:text-lg">
                Elevated Tech Solutions is built to give smaller organizations a more
                thoughtful, practical, and reliable way to improve their digital
                presence with more direct communication throughout the project.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" size="lg">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
