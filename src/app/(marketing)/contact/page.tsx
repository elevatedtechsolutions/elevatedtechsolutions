import { ContactHeroVisual } from "@/components/contact/contact-hero-visual";
import { QuoteForm } from "@/components/contact/quote-form";
import { CardShell } from "@/components/shared/card-shell";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Elevated Tech Solutions for a website quote or support inquiry.",
  path: "/contact",
  keywords: ["get a website quote", "contact Elevated Tech Solutions", "Grand Rapids web design contact"]
});

const contactMethods = [
  {
    label: "Email",
    value: "info@elevatedtechsolutionsllc.com",
    href: "mailto:info@elevatedtechsolutionsllc.com",
    description:
      "Use this for direct inquiries or quote requests if email is the easier place to start."
  },
  {
    label: "Service Area",
    value: "Grand Rapids / West Michigan + remote",
    href: null,
    description:
      "Local roots with remote-friendly support when the fit is right."
  },
  {
    label: "Response Expectation",
    value: "Usually within 1-2 business days",
    href: null,
    description:
      "Replies aim to be clear and timely without making unrealistic promises."
  }
] as const;

const reassuranceCards = [
  {
    title: "A rough outline is enough to start",
    description:
      "A useful first conversation only needs the basics: what the organization does, what the site needs to accomplish, and what feels most urgent."
  },
  {
    title: "The form stays focused",
    description:
      "The intake gathers the context that helps scope the next step, not extra friction."
  },
  {
    title: "The next reply should be useful",
    description:
      "The goal is a response that feels informed, direct, and easy to act on."
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <SectionShell
        className="pb-12 pt-10 sm:pb-14 sm:pt-16"
        containerSize="wide"
        containerClassName="grid gap-12 xl:grid-cols-[minmax(0,0.94fr)_1.06fr] xl:items-start"
      >
        <Reveal className="space-y-8 xl:pt-6" preset="heading">
          <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/8 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-cyan-100/82">
            Contact / Get a Quote
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Tell us what you need and get the quote conversation started.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-soft/90 sm:text-xl">
              Share the basics about your organization, site goals, timing, and
              budget context. Elevated Tech Solutions will follow up with the
              clearest next step.
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

        <Reveal delay={120} className="xl:pl-4" preset="panel">
          <ContactHeroVisual />
        </Reveal>
      </SectionShell>

      <SectionShell className="py-0" containerSize="wide">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-stretch">
          <Reveal preset="card" className="h-full">
            <CardShell tone="quiet" className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
              <SectionHeading
                eyebrow="Before You Reach Out"
                title="You can reach out before every detail is finalized."
                description="A useful conversation only needs the basics: what you do, what the site needs to accomplish, and any timing or budget context."
              />

              <div className="mt-8 grid gap-4 border-t border-white/8 pt-6">
                {reassuranceCards.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70} preset="list">
                    <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] px-5 py-5 sm:px-6">
                      <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                        <p className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-300/8 px-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-cyan-100/78">
                          0{index + 1}
                        </p>
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-text-soft/84">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </CardShell>
          </Reveal>

          <Reveal delay={120} preset="card" className="h-full">
            <CardShell tone="quiet" className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                  Contact Details
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-[2.3rem]">
                  The practical details, kept easy to find.
                </h3>
                <p className="mt-4 text-base leading-8 text-text-soft/84">
                  If email is easier, if you need to know the service area, or if you want a clearer reply expectation, it&apos;s all here.
                </p>
              </div>

              <ul className="mt-8 grid list-none gap-4 border-t border-white/8 pt-6 p-0 md:grid-cols-2">
                {contactMethods.map((item, index) => (
                  <li
                    key={item.label}
                    className={index === 0 ? "list-none md:col-span-2" : "list-none"}
                  >
                    <Reveal delay={index * 80} preset="list">
                      <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] px-5 py-5 sm:px-6">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-3 block font-display text-2xl font-semibold text-white underline-offset-4 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                            {item.value}
                          </h3>
                        )}
                        <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-7 text-text-soft/84">
                          {item.description}
                        </p>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </CardShell>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        id="quote-form"
        className="pb-0"
        containerSize="wide"
        containerClassName="grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-start"
      >
        <Reveal preset="cta">
          <CardShell tone="hero" className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
              Project Inquiry
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white">
              Share the essentials and we&apos;ll scope the next step.
            </h2>
            <p className="mt-5 text-base leading-8 text-text-soft/88">
              This form is here to capture the details that shape the quote:
              organization, site type, priorities, timing, and budget context.
            </p>
            <div className="mt-8 border-t border-white/8 pt-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
                Prefer email instead?
              </p>
              <p className="mt-3 text-sm leading-7 text-text-soft/84">
                Reach out directly at{" "}
                <a
                  href="mailto:info@elevatedtechsolutionsllc.com"
                  className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-cyan-200"
                >
                  info@elevatedtechsolutionsllc.com
                </a>{" "}
                if you would rather introduce the project over email.
              </p>
            </div>
          </CardShell>
        </Reveal>

        <Reveal delay={120} preset="panel">
          <QuoteForm />
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-24 sm:pb-28" containerSize="wide">
        <Reveal preset="cta">
          <CardShell tone="hero" className="px-8 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/72">
              Need a final review?
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The form is here when you&apos;re ready.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-soft/88 sm:text-lg">
              Use the form or send an email if that is the easier place to start.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="#quote-form" size="lg">
                Back To Form
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
