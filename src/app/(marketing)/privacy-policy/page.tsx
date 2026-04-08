import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Elevated Tech Solutions LLC website and quote request process.",
  path: "/privacy-policy",
  keywords: ["privacy policy"]
});

const sections = [
  {
    title: "Who This Policy Applies To",
    paragraphs: [
      "This Privacy Policy explains how Elevated Tech Solutions LLC collects, uses, stores, and shares information through this website.",
      "It applies to people who browse the site, contact the business, request a quote, or otherwise submit information through the website or by email in response to the website."
    ]
  },
  {
    title: "Business Identity and Contact",
    paragraphs: [
      "Elevated Tech Solutions LLC is a Michigan-based web services business. Questions about this Privacy Policy or privacy-related requests can be sent to info@elevatedtechsolutionsllc.com.",
      "The effective date of the current version of this Privacy Policy is shown on this page. If the policy changes, the revised version will be posted here with an updated date."
    ]
  },
  {
    title: "Personal Information Collected",
    paragraphs: [
      "Elevated Tech Solutions LLC collects information you choose to provide directly, including your name, email address, phone number, business or organization name, project type, budget range, timeline, project message, and any other details you include in a quote request or email.",
      "Basic technical information may also be collected through normal website, hosting, and server operation. That may include browser type, device type, IP-related request data, referral information, requested pages, and similar usage or diagnostic information."
    ],
    bullets: [
      "Name, email address, and phone number",
      "Business or organization name",
      "Project details, timeline, budget range, and inquiry contents",
      "Technical, browser, device, and usage data associated with site operation"
    ]
  },
  {
    title: "Sources of Information",
    paragraphs: [
      "Most information covered by this policy comes directly from you when you fill out a quote request, send an email, or otherwise contact Elevated Tech Solutions LLC.",
      "Some information is collected automatically through your browser, device, or the normal operation of the website, hosting environment, and related infrastructure."
    ]
  },
  {
    title: "How Information Is Used",
    paragraphs: [
      "Information is used to respond to inquiries, prepare quotes, communicate about potential or active projects, deliver services, maintain business records, and support routine site administration.",
      "Information may also be used to improve site operation, troubleshoot technical issues, protect the website, and maintain the security and reliability of the quote and communication workflow.",
      "Elevated Tech Solutions LLC does not sell personal information collected through this website."
    ]
  },
  {
    title: "Sharing and Service Providers",
    paragraphs: [
      "Information may be disclosed to service providers that help operate the website, store quote requests, deliver email communications, or support business operations. This is done only to the extent reasonably necessary to run the site and communication process.",
      "Current providers and categories reflected in the website stack include hosting and deployment services used to run the site on Netlify, Neon for quote-request database storage, and Resend for quote-related email delivery.",
      "Elevated Tech Solutions LLC may also disclose information when reasonably necessary to protect the business, comply with legal obligations, or enforce its website and service terms."
    ]
  },
  {
    title: "Cookies, Analytics, and External Assets",
    paragraphs: [
      "This website is intended to remain lightweight and is not currently built around broad advertising tracking or a dedicated analytics platform. Limited cookies or similar technologies may still be used by core hosting, security, or framework-related processes when necessary for site operation.",
      "Some pages may load third-party image assets, including images served from Unsplash. When that happens, your browser may connect to that third-party asset host directly to load the image.",
      "If analytics tools, embedded media, maps, scheduling tools, or other third-party features are added later, this policy should be updated to reflect those practices."
    ]
  },
  {
    title: "Retention of Information",
    paragraphs: [
      "Information is retained for as long as it is reasonably needed to respond to inquiries, manage project discussions, maintain client or prospect records, comply with legal obligations, and support legitimate business operations.",
      "Retention periods may vary depending on the nature of the inquiry, whether a project moves forward, and whether the information is needed for recordkeeping, dispute resolution, or legal compliance."
    ]
  },
  {
    title: "Security",
    paragraphs: [
      "Elevated Tech Solutions LLC uses reasonable administrative and technical measures to help protect information submitted through the website and quote workflow.",
      "No website, email system, database, or internet transmission can guarantee absolute security. For that reason, you should avoid sending highly sensitive personal information through standard website forms unless a more secure process has been arranged."
    ]
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "This website is not directed to children under 13, and Elevated Tech Solutions LLC does not knowingly collect personal information from children under 13 through the site.",
      "If you believe a child under 13 has submitted personal information through this website, contact info@elevatedtechsolutionsllc.com so the information can be reviewed and addressed."
    ]
  },
  {
    title: "Privacy Requests and General Rights Information",
    paragraphs: [
      "Depending on where you live, you may have privacy rights under applicable law, such as the right to request access to certain personal information or request correction or deletion in appropriate circumstances.",
      "Elevated Tech Solutions LLC will review privacy-related requests in good faith and respond as appropriate based on the nature of the request, the relationship involved, and any legal or operational limits that apply. Privacy questions or requests can be sent to info@elevatedtechsolutionsllc.com."
    ]
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time to reflect changes to the website, the business, the service providers used to operate the site, or applicable legal requirements.",
      "When updates are made, the revised version will be posted on this page with an updated effective date."
    ]
  }
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Privacy Policy"
      title="How Elevated Tech Solutions LLC handles website and inquiry information."
      description="This page explains what information may be collected through the website, where it comes from, how it is used, when it may be shared with service providers, and how privacy-related questions can be directed to the business."
      lastUpdated="April 6, 2026"
      currentHref="/privacy-policy"
      noteTitle="Privacy Contact"
      noteText="For privacy questions or requests related to this website, email info@elevatedtechsolutionsllc.com. For website-use terms or general operating expectations, review the Terms of Service and Site Policy."
      sections={sections}
    />
  );
}
