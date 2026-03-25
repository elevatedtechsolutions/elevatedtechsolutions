import { ContactHeroVisual } from "@/components/contact/contact-hero-visual";
import { QuoteFormPreview } from "@/components/contact/quote-form-preview";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Elevated Tech Solutions to discuss a new website, restaurant site, or ongoing support plan for your small business, nonprofit, or local organization.",
  path: "/contact",
  keywords: ["get a website quote", "contact Elevated Tech Solutions", "Grand Rapids web design contact"]
});

const contactMethods = [
  {
    label: "Email",
    value: "hello@elevatedtechsolutions.com",
    href: "mailto:hello@elevatedtechsolutions.com",
    description:
      "Use this as the primary contact slot for inquiries and quote requests until the form backend is connected."
  },
  {
    label: "Service Area",
    value: "Grand Rapids / West Michigan + remote",
    href: null,
    description:
      "Local roots with remote-friendly support for organizations that are a strong fit."
  },
  {
    label: "Response Expectation",
    value: "Usually within 1-2 business days",
    href: null,
    description:
      "The goal is to respond clearly and quickly enough to keep projects moving without making promises that feel unrealistic."
  }
] as const;

const reassuranceCards = [
  {
    title: "You do not need everything figured out yet",
    description:
      "A first conversation can start with the basics: what kind of website you need, what the business does, and what feels most urgent."
  },
  {
    title: "Clear scope matters more than overcomplicated intake",
    description:
      "The quote process is meant to gather useful information, not overwhelm clients with a heavy form experience."
  },
  {
    title: "The site can still feel premium before the backend is live",
    description:
      "This page is designed to feel polished, trustworthy, and usable now, even before final submission wiring is added."
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <SectionShell
        className="pb-12 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-10 xl:grid-cols-[minmax(0,0.98fr)_1.02fr] xl:items-center"
      >
        <Reveal className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Contact / Get a Quote
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Start the conversation with a quote experience that already feels polished.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Whether you need a new site, a restaurant website, or ongoing support,
              this page is designed to make the next step feel clear and trustworthy.
              The quote form is visually ready now and can be wired up later without
              changing the experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#quote-form" size="lg">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Review Services
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell className="py-0" containerSize="wide">
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Before You Reach Out"
              title="The goal is to make getting started feel straightforward, not intimidating."
              description="Even if the details are still taking shape, you can still begin the conversation. Elevated Tech Solutions is designed to work with smaller organizations in a way that feels organized and approachable."
            />

            <div className="mt-8 space-y-5">
              {reassuranceCards.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="border-t border-white/8 pt-4">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-text-soft/84">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <ul className="grid list-none gap-4 p-0">
            {contactMethods.map((item, index) => (
              <li key={item.label} className="list-none">
                <Reveal delay={index * 80}>
                  <CardShell className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-4 block font-display text-2xl font-semibold text-white underline-offset-4 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                        {item.value}
                      </h3>
                    )}
                    <p className="mt-4 text-sm leading-7 text-text-soft/84">
                      {item.description}
                    </p>
                  </CardShell>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell
        id="quote-form"
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start"
      >
        <Reveal>
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Quote Form UI
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white">
              A premium intake experience, even before the backend is connected.
            </h2>
            <p className="mt-5 text-base leading-8 text-text-soft/88">
              This form is intentionally styled and structured now so the contact
              experience already feels thoughtful and trustworthy. When backend wiring
              is added later, the UI is already in place.
            </p>
            <div className="mt-8 border-t border-white/8 pt-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                Placeholder behavior
              </p>
              <p className="mt-3 text-sm leading-7 text-text-soft/84">
                The submission action is intentionally disabled for now. Until the
                form is connected, use the email contact slot on this page to start
                the quote conversation.
              </p>
            </div>
          </CardShell>
        </Reveal>

        <Reveal delay={120}>
          <QuoteFormPreview />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal>
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Ready to talk through the project
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              If you need a modern website with a clearer, more professional process, this is the right place to start.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Elevated Tech Solutions is built to make the first step feel more
              confident, more polished, and easier to navigate for smaller organizations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="#quote-form" size="lg">
                Go To Quote Form
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
