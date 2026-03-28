import { Resend } from "resend";

import {
  createCustomerQuoteConfirmationEmail,
  createInternalQuoteNotificationEmail,
  QuoteEmailTemplatePayload
} from "@/emails/quote-request-emails";

type QuoteEmailConfig = {
  resendApiKey: string;
  fromEmail: string;
  replyTo: string;
  notificationTo: string;
};

type ResendEmailResponse = {
  data?: {
    id?: string | null;
  } | null;
  error?: {
    message?: string | null;
  } | null;
};

type QuoteEmailTarget = "notification" | "confirmation";

type QuoteEmailDeliverySuccess = {
  target: QuoteEmailTarget;
  success: true;
  emailId: string | null;
};

type QuoteEmailDeliveryFailure = {
  target: QuoteEmailTarget;
  success: false;
  diagnostics: ReturnType<typeof getEmailErrorDiagnostics>;
};

export type QuoteEmailDeliveryResult =
  | QuoteEmailDeliverySuccess
  | QuoteEmailDeliveryFailure;

export type QuoteEmailSendSummary = {
  notification: QuoteEmailDeliveryResult;
  confirmation: QuoteEmailDeliveryResult;
  allSucceeded: boolean;
};

function getQuoteEmailConfig(): QuoteEmailConfig {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
  const replyTo = process.env.RESEND_REPLY_TO?.trim();
  const notificationTo = process.env.QUOTE_NOTIFICATION_TO?.trim();

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!fromEmail) {
    throw new Error("RESEND_FROM_EMAIL is not configured.");
  }

  if (!replyTo) {
    throw new Error("RESEND_REPLY_TO is not configured.");
  }

  if (!notificationTo) {
    throw new Error("QUOTE_NOTIFICATION_TO is not configured.");
  }

  return {
    resendApiKey,
    fromEmail,
    replyTo,
    notificationTo
  };
}

function getEmailId(response: ResendEmailResponse, emailType: QuoteEmailTarget) {
  if (response.error?.message) {
    throw new Error(`Resend ${emailType} email failed: ${response.error.message}`);
  }

  return response.data?.id ?? null;
}

export function getEmailErrorDiagnostics(error: unknown) {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      stack: process.env.NODE_ENV === "production" ? null : error.stack ?? null
    };
  }

  return {
    message: "Unknown email error",
    name: null,
    stack: null
  };
}

async function sendEmail({
  resend,
  target,
  input
}: {
  resend: Resend;
  target: QuoteEmailTarget;
  input: Parameters<Resend["emails"]["send"]>[0];
}): Promise<QuoteEmailDeliveryResult> {
  try {
    const response = (await resend.emails.send(input)) as ResendEmailResponse;

    return {
      target,
      success: true,
      emailId: getEmailId(response, target)
    };
  } catch (error) {
    return {
      target,
      success: false,
      diagnostics: getEmailErrorDiagnostics(error)
    };
  }
}

export async function sendQuoteRequestEmails(
  payload: QuoteEmailTemplatePayload
): Promise<QuoteEmailSendSummary> {
  const config = getQuoteEmailConfig();
  const resend = new Resend(config.resendApiKey);
  const internalEmail = createInternalQuoteNotificationEmail(payload);
  const customerEmail = createCustomerQuoteConfirmationEmail(payload);

  const [notification, confirmation] = await Promise.all([
    sendEmail({
      resend,
      target: "notification",
      input: {
        from: config.fromEmail,
        to: config.notificationTo,
        replyTo: config.replyTo,
        subject: internalEmail.subject,
        text: internalEmail.text,
        html: internalEmail.html
      }
    }),
    sendEmail({
      resend,
      target: "confirmation",
      input: {
        from: config.fromEmail,
        to: payload.email,
        replyTo: config.replyTo,
        subject: customerEmail.subject,
        text: customerEmail.text,
        html: customerEmail.html
      }
    })
  ]);

  return {
    notification,
    confirmation,
    allSucceeded: notification.success && confirmation.success
  };
}
