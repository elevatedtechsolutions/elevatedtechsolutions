import { FounderProfileVisual } from "@/components/about/founder-profile-visual";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Founder",
  description:
    "Meet the founder of Elevated Tech Solutions and learn how a GVSU Computer Science background, web development experience, and IT support work shape the business.",
  path: "/founder",
  keywords: ["meet the founder", "GVSU computer science", "Aztech US web development"]
});

const founderStory = [
  {
    title: "Computer science foundation",
    description:
      "The founder is a Grand Valley State University Computer Science graduate with a technical background shaped by practical problem solving and real-world implementation."
  },
  {
    title: "Professional web experience",
    description:
      "Experience in web development at Aztech US added production perspective around building, maintaining, and delivering digital experiences professionally."
  },
  {
    title: "Broader technology support",
    description:
      "IT work at STEM Greenhouse adds another layer of hands-on experience supporting people, systems, and day-to-day technology needs."
  }
] as const;

const whyItMatters = [
  {
    title: "Smaller organizations deserve better options",
    description:
      "Many businesses and nonprofits need quality websites but are stuck between low-quality quick solutions and agency pricing that feels built for a different market."
  },
  {
    title: "Solo can be a strength",
    description:
      "A founder-led model creates more direct communication, clearer accountability, and a closer connection between the conversation, the build decisions, and the final result."
  },
  {
    title: "The mission is practical",
    description:
      "This business was started to help smaller organizations access better digital solutions in a way that feels modern, affordable, and sustainable."
  }
] as const;

const strengthGroups = [
  {
    title: "Technical foundation",
    items: [
      "Frontend and web development execution",
      "Technical problem solving and implementation",
      "A structured approach to building and maintaining sites"
    ]
  },
  {
    title: "Client-facing strengths",
    items: [
      "Clear communication with non-technical clients",
      "Balancing polish with practical scope",
      "Founder-level ownership from start to finish"
    ]
  }
] as const;

const workingStyle = [
  {
    title: "Direct",
    description:
      "Clients work with the person shaping the project, not a chain of handoffs."
  },
  {
    title: "Thoughtful",
    description:
      "Decisions are made with long-term usability, clarity, and maintainability in mind."
  },
  {
    title: "Practical",
    description:
      "The goal is not to oversell complexity. It is to build the right solution for the real need."
  },
  {
    title: "Reliable",
    description:
      "Communication, follow-through, and support matter just as much as the launch itself."
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
              A founder-led business with technical depth, personal ownership, and a practical service mindset.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Elevated Tech Solutions was started to help smaller organizations
              access better digital solutions without traditional agency pricing, and
              to do that with a more direct, thoughtful, and accountable way of
              working.
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
            title="Technical background, hands-on experience, and a clear reason for building this business."
            subtitle="The founder model is presented here as a strength: more ownership, closer communication, and a higher level of care in how projects are scoped, built, and supported."
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
            title="The business comes from a mix of computer science, web development, and practical technology support."
            description="That combination matters because it shapes both the technical work and the way client relationships are handled."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft/86">
            The founder background is not just about technical knowledge. It also
            shapes how projects are explained, how support is approached, and how the
            business stays grounded in real-world needs instead of abstract process.
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
          <EditorialImage
            image="collaboration"
            motion="drift"
            className="min-h-[24rem] rounded-[1.9rem] sm:min-h-[28rem] lg:min-h-[32rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.2)_28%,rgba(2,6,23,0.78)_100%)]"
          >
            <div className="flex h-full flex-col justify-end p-6 sm:p-7">
              <div className="max-w-md rounded-[1.45rem] border border-white/12 bg-slate-950/44 px-5 py-5 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/76">
                  Why this business exists
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100/88">
                  Smaller organizations should be able to work with someone who cares
                  about both the quality of the build and the day-to-day reality of
                  maintaining it.
                </p>
              </div>
            </div>
          </EditorialImage>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Why This Business Matters"
            title="The point is to make better digital solutions more accessible to smaller organizations."
            description="Elevated Tech Solutions was created because too many smaller teams are forced to choose between underwhelming low-cost options and agency pricing that is built for a different market."
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
