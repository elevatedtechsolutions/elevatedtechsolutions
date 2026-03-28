import {
  budgetRangeOptions,
  projectTypeOptions,
  QuoteRequestOption,
  QuoteRequestSubmission,
  timelineOptions
} from "@/lib/quote-request";

export type QuoteEmailTemplatePayload = QuoteRequestSubmission & {
  requestId: number;
  submittedAt: string;
};

type QuoteEmailTemplate = {
  subject: string;
  text: string;
  html: string;
};

const companyName = "Elevated Tech Solutions LLC";
const companyEmail = "info@elevatedtechsolutionsllc.com";
const projectTypeLabelMap = createOptionLabelMap(projectTypeOptions);
const budgetRangeLabelMap = createOptionLabelMap(budgetRangeOptions);
const timelineLabelMap = createOptionLabelMap(timelineOptions);

function createOptionLabelMap(options: QuoteRequestOption[]) {
  return new Map(options.map((option) => [option.value, option.label]));
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatOption(value: string, labels: Map<string, string>) {
  return labels.get(value) ?? value;
}

function formatOptionalValue(value: string | null) {
  return value ?? "Not provided";
}

function formatSubmittedAt(submittedAt: string) {
  const parsedDate = new Date(submittedAt);

  if (Number.isNaN(parsedDate.getTime())) {
    return submittedAt;
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(parsedDate);
}

function renderEmailDocument({
  preview,
  eyebrow,
  title,
  intro,
  body,
  footer
}: {
  preview: string;
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  footer: string;
}) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#060b16;background-image:radial-gradient(circle at top, rgba(39, 84, 122, 0.45), transparent 42%),linear-gradient(180deg,#0a1220 0%,#060b16 100%);font-family:Arial,Helvetica,sans-serif;color:#e5f4ff;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escapeHtml(
          preview
        )}</div>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;background:transparent;">
          <tr>
            <td align="center" style="padding:28px 16px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;max-width:640px;">
                <tr>
                  <td style="padding:0 0 18px 8px;color:#87dfff;font-size:11px;letter-spacing:0.26em;text-transform:uppercase;">
                    ${escapeHtml(companyName)}
                  </td>
                </tr>
                <tr>
                  <td style="border:1px solid rgba(143,212,255,0.16);border-radius:24px;background-color:#0b1422;background-image:linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015));box-shadow:0 24px 80px rgba(0,0,0,0.35);overflow:hidden;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:30px 32px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                            <tr>
                              <td style="height:1px;background:linear-gradient(90deg,rgba(0,0,0,0),rgba(135,223,255,0.85),rgba(0,0,0,0));font-size:0;line-height:0;">&nbsp;</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:30px 32px 0;">
                          <div style="color:#8bdcff;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;">
                            ${escapeHtml(eyebrow)}
                          </div>
                          <h1 style="margin:16px 0 0;font-size:30px;line-height:1.18;font-weight:700;color:#f7fbff;">
                            ${escapeHtml(title)}
                          </h1>
                          <p style="margin:16px 0 0;font-size:15px;line-height:1.8;color:#b7c8d8;">
                            ${escapeHtml(intro)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:28px 32px 0;">
                          ${body}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:28px 32px 32px;">
                          <p style="margin:0;font-size:13px;line-height:1.8;color:#7e93a9;">
                            ${escapeHtml(footer)}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function renderMetricGrid(rows: Array<{ label: string; value: string }>) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 12px;">
      ${rows
        .map(
          (row) => `
            <tr>
              <td width="38%" valign="top" style="padding:16px 16px 16px 18px;border:1px solid rgba(143,212,255,0.12);border-right:none;border-radius:18px 0 0 18px;background:rgba(255,255,255,0.02);color:#8da4ba;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">
                ${escapeHtml(row.label)}
              </td>
              <td valign="top" style="padding:16px 18px;border:1px solid rgba(143,212,255,0.12);border-radius:0 18px 18px 0;background:rgba(255,255,255,0.03);color:#f4fbff;font-size:14px;line-height:1.7;">
                ${escapeHtml(row.value)}
              </td>
            </tr>
          `
        )
        .join("")}
    </table>
  `;
}

function renderMessageCard(message: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-top:18px;">
      <tr>
        <td style="padding:18px 20px;border:1px solid rgba(143,212,255,0.14);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02));">
          <div style="margin:0 0 10px;color:#8bdcff;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;">Project Message</div>
          <div style="font-size:14px;line-height:1.85;color:#d9e9f7;white-space:pre-wrap;">${escapeHtml(
            message
          )}</div>
        </td>
      </tr>
    </table>
  `;
}

function renderSummaryCard(title: string, rows: Array<{ label: string; value: string }>) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-top:18px;">
      <tr>
        <td style="padding:20px 22px;border:1px solid rgba(143,212,255,0.14);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02));">
          <div style="margin:0 0 14px;color:#8bdcff;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;">${escapeHtml(
            title
          )}</div>
          ${rows
            .map(
              (row) => `
                <p style="margin:0 0 8px;font-size:14px;line-height:1.75;color:#d9e9f7;">
                  <span style="color:#8da4ba;">${escapeHtml(row.label)}:</span> ${escapeHtml(
                    row.value
                  )}
                </p>
              `
            )
            .join("")}
        </td>
      </tr>
    </table>
  `;
}

function renderButton(label: string, href: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:22px;">
      <tr>
        <td align="center" style="border-radius:999px;background:linear-gradient(180deg,#95f1ff,#3fc9ff);">
          <a href="${escapeHtml(
            href
          )}" style="display:inline-block;padding:13px 22px;font-size:13px;font-weight:700;letter-spacing:0.02em;color:#04111d;text-decoration:none;">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
}

export function createInternalQuoteNotificationEmail(
  payload: QuoteEmailTemplatePayload
): QuoteEmailTemplate {
  const submittedAt = formatSubmittedAt(payload.submittedAt);
  const projectTypeLabel = formatOption(payload.projectType, projectTypeLabelMap);
  const budgetRangeLabel = formatOption(payload.budgetRange, budgetRangeLabelMap);
  const timelineLabel = formatOption(payload.timeline, timelineLabelMap);

  return {
    subject: `New quote request | ${payload.businessName} | ${payload.fullName}`,
    text: [
      `New quote request #${payload.requestId}`,
      "",
      "Reply directly to this email thread to follow up with the client.",
      "",
      `Submitted at: ${submittedAt}`,
      `Full name: ${payload.fullName}`,
      `Business name: ${payload.businessName}`,
      `Email: ${payload.email}`,
      `Phone: ${formatOptionalValue(payload.phone)}`,
      `Project type: ${projectTypeLabel}`,
      `Custom project type: ${formatOptionalValue(payload.customProjectType)}`,
      `Budget range: ${budgetRangeLabel}`,
      `Timeline: ${timelineLabel}`,
      `Consent status: ${payload.emailConsent ? "Consented" : "Not consented"}`,
      "",
      "Message:",
      payload.message
    ].join("\n"),
    html: renderEmailDocument({
      preview: `New quote request from ${payload.fullName}`,
      eyebrow: "New Quote Request",
      title: `New inquiry from ${payload.fullName}`,
      intro:
        "A new quote request has been submitted through the Elevated Tech Solutions website. Review the key details below and reply directly from this thread when ready.",
      body: [
        renderSummaryCard("At a Glance", [
          { label: "Business", value: payload.businessName },
          { label: "Project type", value: projectTypeLabel },
          { label: "Budget range", value: budgetRangeLabel },
          { label: "Timeline", value: timelineLabel }
        ]),
        renderMetricGrid([
          { label: "Submitted", value: submittedAt },
          { label: "Full Name", value: payload.fullName },
          { label: "Business Name", value: payload.businessName },
          { label: "Email", value: payload.email },
          { label: "Phone", value: formatOptionalValue(payload.phone) },
          { label: "Project Type", value: projectTypeLabel },
          {
            label: "Custom Type",
            value: formatOptionalValue(payload.customProjectType)
          },
          { label: "Budget Range", value: budgetRangeLabel },
          { label: "Timeline", value: timelineLabel },
          {
            label: "Consent Status",
            value: payload.emailConsent ? "Email follow-up approved" : "No consent recorded"
          }
        ]),
        renderMessageCard(payload.message),
        renderButton("Reply to Client", `mailto:${payload.email}`)
      ].join(""),
      footer: `Quote request #${payload.requestId}. Reply-to is configured for direct client follow-up through ${companyEmail}.`
    })
  };
}

export function createCustomerQuoteConfirmationEmail(
  payload: QuoteEmailTemplatePayload
): QuoteEmailTemplate {
  const submittedAt = formatSubmittedAt(payload.submittedAt);
  const projectTypeLabel = formatOption(payload.projectType, projectTypeLabelMap);
  const budgetRangeLabel = formatOption(payload.budgetRange, budgetRangeLabelMap);
  const timelineLabel = formatOption(payload.timeline, timelineLabelMap);

  return {
    subject: "Quote request received | Elevated Tech Solutions",
    text: [
      `Hi ${payload.fullName},`,
      "",
      `Thank you for contacting ${companyName}. Your quote request has been received successfully and is now in review.`,
      "",
      "What happens next:",
      "A direct follow-up email will be sent within 1-2 business days.",
      "If any clarification is needed, Elevated Tech Solutions will reach out using this same email thread.",
      "",
      "Request summary:",
      `Submitted at: ${submittedAt}`,
      `Project type: ${projectTypeLabel}`,
      `Budget range: ${budgetRangeLabel}`,
      `Timeline: ${timelineLabel}`,
      "",
      `If you want to add context before then, reply to this email or contact ${companyEmail}.`,
      "",
      "Elevated Tech Solutions LLC"
    ].join("\n"),
    html: renderEmailDocument({
      preview: "Your quote request has been received by Elevated Tech Solutions.",
      eyebrow: "Quote Request Received",
      title: "Your request is in review.",
      intro:
        "Thank you for reaching out to Elevated Tech Solutions LLC. Your inquiry was received successfully and will be reviewed personally with a direct follow-up by email.",
      body: [
        renderSummaryCard("What Happens Next", [
          { label: "Response time", value: "Within 1-2 business days" },
          {
            label: "Follow-up",
            value: "A direct email response with next steps, recommendations, or clarifying questions"
          },
          { label: "Contact", value: companyEmail }
        ]),
        renderSummaryCard("Your Request Summary", [
          { label: "Submitted", value: submittedAt },
          { label: "Project type", value: projectTypeLabel },
          { label: "Budget range", value: budgetRangeLabel },
          { label: "Timeline", value: timelineLabel }
        ]),
        renderSummaryCard("Before We Reply", [
          {
            label: "Need to add context?",
            value: `Reply to this email and it will go directly to ${companyEmail}`
          }
        ]),
        renderButton("Reply With Additional Details", `mailto:${companyEmail}`)
      ].join(""),
      footer:
        `This confirmation was sent because a quote request was submitted through the Elevated Tech Solutions website. Questions can be sent to ${companyEmail}.`
    })
  };
}
