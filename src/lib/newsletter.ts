import { isIP } from "node:net";

import { getDatabaseErrorDiagnostics } from "@/lib/neon";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedNewsletterSources = new Set(["newsletter_form", "quote_form"]);

export type NewsletterSubscriptionSource = "newsletter_form" | "quote_form";

type NewsletterSubmissionInput = {
  email: FormDataEntryValue | null;
  newsletterConsent: FormDataEntryValue | null;
  source: FormDataEntryValue | null;
};

type NewsletterSubmissionSuccess = {
  success: true;
  data: {
    email: string;
    normalizedEmail: string;
    consentGiven: true;
    source: NewsletterSubscriptionSource;
  };
};

type NewsletterSubmissionFailure = {
  success: false;
  message: string;
};

export type NewsletterSubmissionResult =
  | NewsletterSubmissionSuccess
  | NewsletterSubmissionFailure;

type NewsletterSignupData = NewsletterSubmissionSuccess["data"];

type ExistingSubscriberRow = {
  id: string | number;
  status: string;
};

type NewsletterUpsertSuccess =
  | {
      ok: true;
      kind: "created";
      message: string;
      statusCode: 201;
    }
  | {
      ok: true;
      kind: "already_subscribed" | "resubscribed";
      message: string;
      statusCode: 200;
    };

type NewsletterUpsertFailure = {
  ok: false;
  diagnostics: ReturnType<typeof getDatabaseErrorDiagnostics>;
};

export type NewsletterUpsertResult = NewsletterUpsertSuccess | NewsletterUpsertFailure;

function getTrimmedString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function normalizeEmailAddress(email: string) {
  return email.trim().toLowerCase();
}

export function getRequestIpAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedCandidate = forwardedFor?.split(",")[0]?.trim() ?? null;
  const directCandidate =
    request.headers.get("x-nf-client-connection-ip")?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    null;
  const candidate = forwardedCandidate || directCandidate;

  return candidate && isIP(candidate) ? candidate : null;
}

export function getUserAgent(request: Request) {
  const userAgent = request.headers.get("user-agent")?.trim() ?? "";
  return userAgent ? userAgent.slice(0, 500) : null;
}

export function parseNewsletterSignupSubmission(
  input: NewsletterSubmissionInput
): NewsletterSubmissionResult {
  const email = getTrimmedString(input.email);
  const consent = getTrimmedString(input.newsletterConsent);
  const source = getTrimmedString(input.source) || "newsletter_form";

  if (!email) {
    return {
      success: false,
      message: "Please enter an email address."
    };
  }

  if (!emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address."
    };
  }

  if (consent !== "agreed") {
    return {
      success: false,
      message:
        "Please confirm that you want to receive newsletters and updates from Elevated Tech Solutions."
    };
  }

  if (!allowedNewsletterSources.has(source)) {
    return {
      success: false,
      message: "Newsletter source information is invalid."
    };
  }

  return {
    success: true,
    data: {
      email,
      normalizedEmail: normalizeEmailAddress(email),
      consentGiven: true,
      source: source as NewsletterSubscriptionSource
    }
  };
}

export async function upsertNewsletterSubscriber(params: {
  sql: ReturnType<typeof import("@/lib/neon").getNeonSql>;
  data: NewsletterSignupData;
  ipAddress: string | null;
  userAgent: string | null;
}): Promise<NewsletterUpsertResult> {
  const { sql, data, ipAddress, userAgent } = params;

  try {
    const existingRows = (await sql`
      select id, status
      from ets.newsletter_subscribers
      where normalized_email = ${data.normalizedEmail}
      limit 1
    `) as ExistingSubscriberRow[];

    const existingSubscriber = existingRows[0];

    if (!existingSubscriber) {
      await sql`
        insert into ets.newsletter_subscribers (
          email,
          normalized_email,
          consent_given,
          source,
          status,
          subscribed_at,
          ip_address,
          user_agent
        )
        values (
          ${data.email},
          ${data.normalizedEmail},
          ${data.consentGiven},
          ${data.source},
          ${"subscribed"},
          now(),
          ${ipAddress},
          ${userAgent}
        )
      `;

      return {
        ok: true,
        kind: "created",
        message:
          "You're subscribed. Elevated Tech Solutions will send occasional updates, launches, and practical website insights.",
        statusCode: 201
      };
    }

    if (existingSubscriber.status === "subscribed") {
      await sql`
        update ets.newsletter_subscribers
        set
          email = ${data.email},
          consent_given = ${data.consentGiven},
          source = ${data.source},
          ip_address = coalesce(${ipAddress}, ip_address),
          user_agent = coalesce(${userAgent}, user_agent),
          updated_at = now()
        where id = ${existingSubscriber.id}
      `;

      return {
        ok: true,
        kind: "already_subscribed",
        message:
          "You're already on the list. Elevated Tech Solutions will keep sending updates to that email address.",
        statusCode: 200
      };
    }

    await sql`
      update ets.newsletter_subscribers
      set
        email = ${data.email},
        consent_given = ${data.consentGiven},
        source = ${data.source},
        status = ${"subscribed"},
        subscribed_at = now(),
        ip_address = coalesce(${ipAddress}, ip_address),
        user_agent = coalesce(${userAgent}, user_agent),
        updated_at = now()
      where id = ${existingSubscriber.id}
    `;

    return {
      ok: true,
      kind: "resubscribed",
      message:
        "You're subscribed again. Elevated Tech Solutions will send occasional updates, launches, and practical website insights.",
      statusCode: 200
    };
  } catch (error) {
    const diagnostics = getDatabaseErrorDiagnostics(error);

    if (diagnostics.code === "23505") {
      return {
        ok: true,
        kind: "already_subscribed",
        message:
          "You're already on the list. Elevated Tech Solutions will keep sending updates to that email address.",
        statusCode: 200
      };
    }

    return {
      ok: false,
      diagnostics
    };
  }
}
