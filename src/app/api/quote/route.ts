import { NextResponse } from "next/server";

import {
  getDatabaseErrorDiagnostics,
  getNeonSql,
  QUOTE_REQUESTS_TABLE
} from "@/lib/neon";
import {
  sendQuoteRequestEmails
} from "@/lib/quote-email";
import { parseQuoteRequestSubmission } from "@/lib/quote-request";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "The quote request could not be processed. Please try again." },
      { status: 400 }
    );
  }

  const parsed = parseQuoteRequestSubmission({
    name: formData.get("name"),
    businessName: formData.get("businessName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    projectTypeOther: formData.get("projectTypeOther"),
    budgetRange: formData.get("budgetRange"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
    contactConsent: formData.get("contactConsent")
  });

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.message }, { status: 400 });
  }

  try {
    const sql = getNeonSql();

    const insertedRows = (await sql`
      insert into ets.quote_requests (
        full_name,
        business_name,
        email,
        phone,
        project_type,
        custom_project_type,
        budget_range,
        timeline,
        message,
        email_consent,
        lead_status
      )
      values (
        ${parsed.data.fullName},
        ${parsed.data.businessName},
        ${parsed.data.email},
        ${parsed.data.phone},
        ${parsed.data.projectType},
        ${parsed.data.customProjectType},
        ${parsed.data.budgetRange},
        ${parsed.data.timeline},
        ${parsed.data.message},
        ${parsed.data.emailConsent},
        ${"new"}
      )
      returning id, created_at
    `) as Array<{ id: number; created_at: string | Date }>;

    const requestId = insertedRows[0]?.id;
    const submittedAt = insertedRows[0]?.created_at;

    if (typeof requestId !== "number" || !submittedAt) {
      throw new Error("Quote request insert did not return the expected metadata.");
    }

    const emailResult = await sendQuoteRequestEmails({
      ...parsed.data,
      requestId,
      submittedAt:
        submittedAt instanceof Date ? submittedAt.toISOString() : String(submittedAt)
    });

    if (!emailResult.allSucceeded) {
      console.error("Quote request email delivery failed", {
        route: "/api/quote",
        requestId,
        provider: "resend",
        notification: emailResult.notification,
        confirmation: emailResult.confirmation
      });

      return NextResponse.json(
        {
          message:
            "Your quote request was received successfully. Follow-up email delivery is still being finalized, but Elevated Tech Solutions has your inquiry on file. If needed, email info@elevatedtechsolutionsllc.com."
        },
        { status: 202 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Your quote request was sent successfully. Elevated Tech Solutions will follow up by email within 1-2 business days."
      },
      { status: 201 }
    );
  } catch (error) {
    const diagnostics = getDatabaseErrorDiagnostics(error);

    console.error("Quote request submission failed", {
      route: "/api/quote",
      table: QUOTE_REQUESTS_TABLE,
      diagnostics
    });

    return NextResponse.json(
      process.env.NODE_ENV === "production"
        ? {
            error:
              "The quote request could not be submitted right now. Please try again in a moment or email info@elevatedtechsolutionsllc.com."
          }
        : {
            error: `Quote submission failed: ${diagnostics.message}`,
            details: diagnostics
          },
      { status: 500 }
    );
  }
}
