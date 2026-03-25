import { FaqHeroVisual } from "@/components/faq/faq-hero-visual";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Read common questions about timelines, hosting, maintenance, service fit, and getting started with Elevated Tech Solutions.",
  path: "/faq",
  keywords: ["website FAQ", "hosting questions", "small business website help"]
});

const faqs = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Elevated Tech Solutions is especially focused on small businesses, nonprofits, restaurants, and local organizations that need a modern website and practical digital support."
  },
  {
    question: "Do you only work in Grand Rapids?",
    answer:
      "No. The business has local roots in Grand Rapids and West Michigan, but remote work is absolutely possible. Local and remote clients can both be a good fit."
  },
  {
    question: "How long does a website take?",
    answer:
      "That depends on the project scope, how quickly content is provided, and how fast reviews move. Smaller brochure-style sites can move faster, while more involved projects take longer."
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Hosting guidance is part of the process, and ongoing support can include help with the live site environment. The goal is to recommend a setup that stays practical and low-maintenance."
  },
  {
    question: "Can you update my current website?",
    answer:
      "In some cases, yes. It depends on the condition of the current site, the platform it is built on, and whether updating it makes more sense than rebuilding it cleanly."
  },
  {
    question: "Do you offer ecommerce?",
    answer:
      "Ecommerce Lite is considered a future or secondary service and may be available on request depending on the project. The current focus is on clean, lower-complexity website work first."
  },
  {
    question: "What is included in maintenance?",
    answer:
      "Maintenance can include content updates, light edits, hosting guidance, bug fixes, and basic oversight to help keep the website current and running smoothly."
  },
  {
    question: "Do you write the website content?",
    answer:
      "Clients should expect to provide the core business information and messaging, but content can be organized, refined, and presented more clearly as part of the website process."
  },
  {
    question: "Do I own my domain and website assets?",
    answer:
      "The goal is to keep clients in control of the key assets tied to their business, including domains and core website materials, so ownership stays clear."
  },
  {
    question: "How do I get started?",
    answer:
      "The simplest way is to reach out through the contact path, share what kind of site you need, and start with a conversation about goals, scope, and fit."
  }
] as const;

export default function FaqPage() {
  return (
    <>
      <SectionShell
        className="pb-10 pt-10 sm:pb-12 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-10 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Frequently asked questions
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Clear answers to the questions clients usually ask before getting started.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              This page is here to reduce uncertainty, answer common objections, and
              make the next step feel more transparent for businesses and
              organizations considering a project.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Get Started
            </ButtonLink>
            <ButtonLink href="/process" variant="secondary" size="lg">
              See The Process
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <FaqHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <SectionHeading
          eyebrow="FAQ"
          title="These answers are meant to make the process clearer, not more complicated."
          description="The goal is to answer the practical questions clients usually have around fit, timing, hosting, maintenance, ownership, and next steps."
        />

        <div className="mt-12 grid gap-4">
          {faqs.map((item, index) => (
            <article key={item.question}>
              <Reveal delay={index * 40}>
                <CardShell className="p-6 sm:p-7">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
                  <div className="grid gap-4 xl:grid-cols-[0.55fr_1.45fr] xl:items-start">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                        Question
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                        {item.question}
                      </h3>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Answer
                      </p>
                      <p className="mt-4 text-base leading-8 text-text-soft/86">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardShell>
              </Reveal>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Ready when you are
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If your questions are answered, the next step is a conversation about fit and scope.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Elevated Tech Solutions is built to make the website process feel more
              approachable, more organized, and more realistic for smaller organizations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get Started
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
