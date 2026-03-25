import { CardShell } from "@/components/shared/card-shell";

const inputClassName =
  "premium-input";

const labelClassName =
  "premium-label";

export function QuoteFormPreview() {
  return (
    <CardShell className="p-6 sm:p-8">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
            Quote form preview
          </p>
          <h2 id="quote-form-heading" className="mt-3 font-display text-3xl font-semibold text-white">
            Tell us about the project.
          </h2>
        </div>
        <span className="rounded-full border border-amber-300/18 bg-amber-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-amber-100/80">
          Backend not connected yet
        </span>
      </div>

      <p id="quote-form-description" className="mt-5 max-w-3xl text-sm leading-7 text-text-soft/82">
        This form is styled and ready for the final submission wiring. For now, it
        acts as a polished preview of the future quote experience. Direct email can
        be used until the backend is connected.
      </p>

      <div className="mt-6 grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-3">
        {["Info site", "Restaurant site", "Support plan"].map((item) => (
          <p key={item} className="text-sm leading-6 text-slate-300">
            {item}
          </p>
        ))}
      </div>

      <form
        noValidate
        aria-labelledby="quote-form-heading"
        aria-describedby="quote-form-description quote-form-note"
        className="mt-8 grid gap-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Name
            </label>
            <input id="name" name="name" className={inputClassName} placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="business-name" className={labelClassName}>
              Business Name
            </label>
            <input
              id="business-name"
              name="businessName"
              className={inputClassName}
              placeholder="Business or organization"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClassName}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClassName}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClassName}>
              Phone (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              className={inputClassName}
              placeholder="Optional phone number"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label htmlFor="project-type" className={labelClassName}>
              Project Type
            </label>
            <select id="project-type" name="projectType" className={inputClassName} defaultValue="">
              <option value="" disabled>
                Select project type
              </option>
              <option>Info Site</option>
              <option>Restaurant Site</option>
              <option>Website Support</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget-range" className={labelClassName}>
              Budget Range
            </label>
            <select id="budget-range" name="budgetRange" className={inputClassName} defaultValue="">
              <option value="" disabled>
                Select budget range
              </option>
              <option>Under $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className={labelClassName}>
              Timeline
            </label>
            <select id="timeline" name="timeline" className={inputClassName} defaultValue="">
              <option value="" disabled>
                Select timeline
              </option>
              <option>As soon as possible</option>
              <option>Within 1 month</option>
              <option>Within 2-3 months</option>
              <option>Flexible / still planning</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={`${inputClassName} min-h-[10rem] resize-y`}
            placeholder="Tell us about your business, what kind of website you need, and anything else that would help shape the quote."
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p id="quote-form-note" role="status" className="max-w-2xl text-sm leading-7 text-text-soft/82">
            Submission is not wired up yet. For now, this form is a styled preview.
            Use the email contact method on this page if you want to start the quote
            conversation right away.
          </p>

          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(64,192,255,0.24),rgba(64,192,255,0.14))] px-6 py-3 text-sm font-semibold text-cyan-50/90 opacity-85 shadow-[0_16px_34px_rgba(50,200,255,0.08)]"
          >
            Quote Form Coming Soon
          </button>
        </div>
      </form>
    </CardShell>
  );
}
