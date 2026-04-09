import type { Route } from "next";

import { FaqAccordion } from "@/components/faq/faq-accordion";
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
      "The best fit is usually small businesses, nonprofits, restaurants, and local organizations that need a clearer website and direct support."
  },
  {
    question: "How long does a website take?",
    answer:
      "Timing depends on scope, content readiness, and how steadily reviews move. Smaller brochure-style sites usually move faster than more involved projects."
  },
  {
    question: "Do you only work in Grand Rapids?",
    answer:
      "No. Elevated Tech Solutions has local roots in Grand Rapids and West Michigan, but remote projects are also possible when the fit is right."
  },
  {
    question: "Can you update my current website?",
    answer:
      "In some cases, yes. It depends on the current site, the platform it uses, and whether updating it makes more sense than rebuilding it cleanly."
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Hosting guidance is part of the process, and support can include help with the live site setup. The goal is a practical, low-maintenance environment."
  },
  {
    question: "Do you offer ecommerce?",
    answer:
      "Possibly, depending on the project. The main focus stays on lower-complexity website work, so ecommerce is handled more selectively."
  },
  {
    question: "What is included in maintenance?",
    answer:
      "Maintenance can include content updates, light edits, hosting guidance, bug fixes, and basic oversight to help keep the site current."
  },
  {
    question: "Do you write the website content?",
    answer:
      "Clients should expect to provide the core business information and messaging, but that content can still be organized, refined, and presented more clearly during the build."
  },
  {
    question: "Do I own my domain and website assets?",
    answer:
      "Yes. The goal is to keep clients in control of the key assets tied to their business, including domains and core website materials."
  },
  {
    question: "How do I get started?",
    answer:
      "Start through the contact form, share the kind of site you need, and the next step can be discussed around fit, scope, and timing."
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
        <Reveal className="space-y-8" preset="heading">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Frequently asked questions
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Practical answers before you reach out.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              This page is here to reduce uncertainty around fit, timing, hosting,
              maintenance, and the next step so the inquiry feels more straightforward.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/process" variant="secondary" size="lg">
              Review Process
            </ButtonLink>
            <ButtonLink href={"/compare" as Route} variant="ghost" size="lg">
              Compare Options
            </ButtonLink>
          </div>

          <div className="grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-3">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Reassurance
              </p>
              <p className="text-sm leading-6 text-text-soft/84">
                Clear answers before you commit to a project conversation.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Practical focus
              </p>
              <p className="text-sm leading-6 text-text-soft/84">
                The questions stay centered on scope, timing, and support.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/72">
                Next step
              </p>
              <p className="text-sm leading-6 text-text-soft/84">
                If the fit looks right, the page should make inquiry feel simpler.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} preset="panel">
          <FaqHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-0" containerSize="wide">
        <Reveal preset="heading">
          <SectionHeading
            eyebrow="Questions Answered"
            title="The most common questions, kept clear and easy to scan."
            description="Open what you need, get the practical answer, and move on without digging through a generic help center."
          />
        </Reveal>

        <FaqAccordion items={faqs} />
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Questions answered
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If the fit looks right, the next step is to start the quote conversation.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Share the basics and the project can be scoped around what you actually need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Get a Quote
              </ButtonLink>
              <ButtonLink href={"/compare" as Route} variant="secondary" size="lg">
                Compare Your Options
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </SectionShell>
    </>
  );
}
