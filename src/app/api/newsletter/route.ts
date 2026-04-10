import { NextResponse } from "next/server";

import {
  getNeonSql,
  NEWSLETTER_SUBSCRIBERS_TABLE
} from "@/lib/neon";
import {
  getRequestIpAddress,
  getUserAgent,
  parseNewsletterSignupSubmission,
  upsertNewsletterSubscriber
} from "@/lib/newsletter";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "The newsletter signup could not be processed. Please try again." },
      { status: 400 }
    );
  }

  const parsed = parseNewsletterSignupSubmission({
    email: formData.get("email"),
    newsletterConsent: formData.get("newsletterConsent"),
    source: formData.get("source")
  });

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.message }, { status: 400 });
  }

  const ipAddress = getRequestIpAddress(request);
  const userAgent = getUserAgent(request);

  try {
    const sql = getNeonSql();
    const result = await upsertNewsletterSubscriber({
      sql,
      data: parsed.data,
      ipAddress,
      userAgent
    });

    if (result.ok) {
      return NextResponse.json({ message: result.message }, { status: result.statusCode });
    }

    console.error("Newsletter signup failed", {
      route: "/api/newsletter",
      table: NEWSLETTER_SUBSCRIBERS_TABLE,
      diagnostics: result.diagnostics
    });

    return NextResponse.json(
      process.env.NODE_ENV === "production"
        ? {
            error:
              "The newsletter signup could not be completed right now. Please try again in a moment."
          }
        : {
            error: `Newsletter signup failed: ${result.diagnostics.message}`,
            details: result.diagnostics
          },
      { status: 500 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown server error";

    console.error("Newsletter signup failed", {
      route: "/api/newsletter",
      table: NEWSLETTER_SUBSCRIBERS_TABLE,
      error: message
    });

    return NextResponse.json(
      process.env.NODE_ENV === "production"
        ? {
            error:
              "The newsletter signup could not be completed right now. Please try again in a moment."
          }
        : {
            error: `Newsletter signup failed: ${message}`
          },
      { status: 500 }
    );
  }
}
