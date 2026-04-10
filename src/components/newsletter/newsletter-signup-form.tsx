"use client";

import { useRef, useState } from "react";

import type { NewsletterSubscriptionSource } from "@/lib/newsletter";

import { ConsentCheckbox } from "@/components/ui/consent-checkbox";

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

type NewsletterSignupFormProps = {
  source: NewsletterSubscriptionSource;
};

export function NewsletterSignupForm({
  source
}: NewsletterSignupFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    message: null
  });
  const isSubmitting = submissionState.status === "submitting";
  const consentInvalid = hasAttemptedSubmit && !newsletterConsent;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setHasAttemptedSubmit(true);
    setSubmissionState({ status: "submitting", message: null });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: new FormData(event.currentTarget),
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
            "The newsletter signup could not be completed right now. Please try again."
        );
      }

      formRef.current?.reset();
      setNewsletterConsent(false);
      setHasAttemptedSubmit(false);
      setSubmissionState({
        status: "success",
        message:
          result?.message ??
          "You're subscribed. Elevated Tech Solutions will send occasional updates and insights."
      });
    } catch (error) {
      setSubmissionState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The newsletter signup could not be completed right now. Please try again."
      });
    }
  }

  return (
    <div className="rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_60px_rgba(2,12,27,0.18)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/72">
            Newsletter Signup
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            Get occasional updates.
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-text-soft/82">
            Join the list for launches, practical website insights, and business
            updates from Elevated Tech Solutions.
          </p>
        </div>
        <span className="rounded-full border border-cyan-300/18 bg-cyan-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/80">
          Consent Required
        </span>
      </div>

      <form
        ref={formRef}
        name="newsletter-signup"
        method="post"
        className="mt-5 grid gap-4"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="source" value={source} />

        <div>
          <label htmlFor="newsletter-email" className={labelClassName}>
            Email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            className={inputClassName}
            placeholder="you@example.com"
          />
        </div>

        <ConsentCheckbox
          id="newsletter-consent"
          name="newsletterConsent"
          checked={newsletterConsent}
          onChange={setNewsletterConsent}
          disabled={isSubmitting}
          invalid={consentInvalid}
          required
          label="Marketing email consent (required)"
          description="I agree to receive newsletters, updates, announcements, and occasional marketing emails from Elevated Tech Solutions."
        />

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

        <div className="flex flex-col gap-4 border-t border-white/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-text-soft/80">
            No spam blasts. Just occasional updates from Elevated Tech Solutions.
          </p>

          <button type="submit" disabled={isSubmitting} className={submitButtonClassName}>
            {isSubmitting ? "Subscribing..." : "Join the Newsletter"}
          </button>
        </div>
      </form>
    </div>
  );
}
