"use client";

import { useMemo, useRef, useState } from "react";

import { CardShell } from "@/components/shared/card-shell";
import { ConsentCheckbox } from "@/components/ui/consent-checkbox";
import { CustomSelect } from "@/components/ui/custom-select";
import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions
} from "@/lib/quote-request";

const inputClassName = "premium-input";
const labelClassName = "premium-label";
const submitButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-cyan-200/24 bg-[linear-gradient(180deg,rgba(149,241,255,0.98),rgba(63,201,255,0.92))] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-slate-950 shadow-[0_16px_34px_rgba(50,200,255,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_48px_rgba(50,200,255,0.22)] active:translate-y-0 active:scale-[0.988] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:translate-y-0 disabled:scale-100 disabled:opacity-70 disabled:shadow-[0_12px_24px_rgba(50,200,255,0.08)]";
const successMessageClassName =
  "rounded-[1.35rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(34,211,238,0.08))] px-4 py-4 text-sm leading-7 text-cyan-50/92 shadow-[0_18px_40px_rgba(12,74,110,0.12)]";
const errorMessageClassName =
  "rounded-[1.35rem] border border-rose-300/18 bg-[linear-gradient(180deg,rgba(244,63,94,0.14),rgba(244,63,94,0.08))] px-4 py-4 text-sm leading-7 text-rose-50/92 shadow-[0_18px_40px_rgba(76,5,25,0.16)]";

type SubmissionState =
  | { status: "idle"; message: null }
  | { status: "submitting"; message: null }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [projectType, setProjectType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contactConsent, setContactConsent] = useState(true);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    message: null
  });
  const isOtherProjectType = projectType === "other";
  const isSubmitting = submissionState.status === "submitting";
  const projectTypeInvalid = hasAttemptedSubmit && !projectType;
  const budgetRangeInvalid = hasAttemptedSubmit && !budgetRange;
  const timelineInvalid = hasAttemptedSubmit && !timeline;
  const contactConsentInvalid = hasAttemptedSubmit && !contactConsent;
  const formStatusMessage = useMemo(() => {
    if (isSubmitting) {
      return "Submitting your inquiry securely now.";
    }

    return (
      <>
        Prefer to introduce the project directly instead? Email{" "}
        <a
          href="mailto:info@elevatedtechsolutionsllc.com"
          className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-cyan-200"
        >
          info@elevatedtechsolutionsllc.com
        </a>
        .
      </>
    );
  }, [isSubmitting]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setHasAttemptedSubmit(true);

    setSubmissionState({ status: "submitting", message: null });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.error ??
            "The quote request could not be submitted right now. Please try again."
        );
      }

      formRef.current?.reset();
      setProjectType("");
      setBudgetRange("");
      setTimeline("");
      setContactConsent(true);
      setNewsletterConsent(false);
      setHasAttemptedSubmit(false);
      setSubmissionState({
        status: "success",
        message:
          result?.message ??
          "Your quote request was sent successfully. Elevated Tech Solutions will follow up by email soon."
      });
    } catch (error) {
      setSubmissionState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The quote request could not be submitted right now. Please try again."
      });
    }
  }

  return (
    <CardShell className="p-6 sm:p-8">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
            Quote Request Form
          </p>
          <h2 id="quote-form-heading" className="mt-3 font-display text-3xl font-semibold text-white">
            Tell us about the project.
          </h2>
          <p id="quote-form-description" className="mt-4 max-w-2xl text-sm leading-7 text-text-soft/82">
            Share the goals, scope, and practical details below. The form is designed to
            gather the information needed for a clear first response and a more useful
            quote conversation.
          </p>
        </div>
        <span className="rounded-full border border-cyan-300/18 bg-cyan-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/80 sm:self-start">
          Response in 1-2 business days
        </span>
      </div>

      <form
        ref={formRef}
        name="quote-request"
        method="post"
        aria-labelledby="quote-form-heading"
        aria-describedby="quote-form-description quote-form-note"
        className="mt-6 grid gap-6 sm:gap-7"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 rounded-[1.55rem] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
              Contact Details
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-text-soft/52">
              Required to reply clearly
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                disabled={isSubmitting}
                className={inputClassName}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="business-name" className={labelClassName}>
                Business Name
              </label>
              <input
                id="business-name"
                name="businessName"
                autoComplete="organization"
                required
                disabled={isSubmitting}
                className={inputClassName}
                placeholder="Business or organization name"
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
                autoComplete="email"
                required
                disabled={isSubmitting}
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
                type="tel"
                autoComplete="tel"
                disabled={isSubmitting}
                className={inputClassName}
                placeholder="Optional phone number"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 rounded-[1.55rem] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
              Project Scope
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-text-soft/52">
              Helps shape the first reply
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <CustomSelect
                id="project-type"
                name="projectType"
                label="Project Type"
                placeholder="Select project type"
                options={projectTypeOptions}
                value={projectType}
                onChange={setProjectType}
                showSelectedDescription
                required
                disabled={isSubmitting}
                invalid={projectTypeInvalid}
              />
            </div>

            <div>
              <CustomSelect
                id="budget-range"
                name="budgetRange"
                label="Budget Range"
                placeholder="Select budget range"
                options={budgetRangeOptions}
                value={budgetRange}
                onChange={setBudgetRange}
                required
                disabled={isSubmitting}
                invalid={budgetRangeInvalid}
              />
            </div>

            <div className="md:col-span-2 xl:col-span-1">
              <CustomSelect
                id="timeline"
                name="timeline"
                label="Timeline"
                placeholder="Select timeline"
                options={timelineOptions}
                value={timeline}
                onChange={setTimeline}
                required
                disabled={isSubmitting}
                invalid={timelineInvalid}
              />
            </div>
          </div>
        </div>

        {isOtherProjectType ? (
          <div className="motion-safe-fade rounded-[1.4rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-4 sm:p-5">
            <label htmlFor="project-type-other" className={labelClassName}>
              Custom Project Type
            </label>
            <input
              id="project-type-other"
              name="projectTypeOther"
              required={isOtherProjectType}
              disabled={isSubmitting}
              className={inputClassName}
              placeholder="Describe the type of project you have in mind"
            />
            <p className="mt-3 text-sm leading-6 text-text-soft/74">
              A short description is enough. This just helps the inquiry start in the right direction.
            </p>
          </div>
        ) : null}

        <div className="grid gap-5 rounded-[1.55rem] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
              Project Details
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-text-soft/52">
              A few specifics go a long way
            </p>
          </div>

          <div>
            <label htmlFor="message" className={labelClassName}>
              What should we know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={20}
              disabled={isSubmitting}
              className={`${inputClassName} min-h-[11rem] resize-y py-3.5 leading-7`}
              placeholder="Tell us about your business, what you need the site to do, any existing website situation, and anything else that would help shape the quote."
            />
          </div>
        </div>

        <div className="grid gap-5 border-t border-white/8 pt-6">
          {submissionState.status === "success" ? (
            <p role="status" aria-live="polite" className={successMessageClassName}>
              {submissionState.message}
            </p>
          ) : null}

          {submissionState.status === "error" ? (
            <p role="alert" aria-live="assertive" className={errorMessageClassName}>
              {submissionState.message}
            </p>
          ) : null}

          <ConsentCheckbox
            id="contact-consent"
            name="contactConsent"
            checked={contactConsent}
            onChange={setContactConsent}
            disabled={isSubmitting}
            invalid={contactConsentInvalid}
            required
            label={
              <>
                Email follow-up consent{" "}
                <span aria-hidden="true" className="text-rose-300">
                  *
                </span>
                <span className="sr-only">(required)</span>
              </>
            }
            description="I agree that Elevated Tech Solutions may contact me by email about this inquiry and any relevant next steps related to the requested project."
          />

          <ConsentCheckbox
            id="newsletter-consent"
            name="newsletterConsent"
            checked={newsletterConsent}
            onChange={setNewsletterConsent}
            disabled={isSubmitting}
            label="Newsletter / updates consent (optional)"
            description="I would also like to receive occasional newsletters, updates, announcements, and marketing emails from Elevated Tech Solutions."
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p id="quote-form-note" className="max-w-2xl text-sm leading-7 text-text-soft/82">
              {formStatusMessage}
            </p>

            <button type="submit" disabled={isSubmitting} className={submitButtonClassName}>
              {isSubmitting ? "Sending Request..." : "Send Quote Request"}
            </button>
          </div>
        </div>
      </form>
    </CardShell>
  );
}
