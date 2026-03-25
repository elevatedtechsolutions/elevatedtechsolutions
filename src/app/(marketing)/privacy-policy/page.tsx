import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Starter privacy policy for the Elevated Tech Solutions website.",
  path: "/privacy-policy",
  keywords: ["privacy policy"]
});

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "This Privacy Policy describes how Elevated Tech Solutions may collect, use, and protect information submitted through this website. It is written as a starter policy for a small web services business and is intended to present reasonable expectations for website visitors and prospective clients.",
      "By using this website or submitting information through a contact or quote request path, you acknowledge that your information may be handled as described below."
    ]
  },
  {
    title: "Information Collected",
    paragraphs: [
      "Elevated Tech Solutions may collect information you provide directly, such as your name, business name, email address, phone number, project details, and any other information you choose to submit through inquiry methods.",
      "Basic technical information may also be collected automatically through normal website operation, such as browser type, device type, pages visited, or approximate usage data, especially if hosting, analytics, or security services are added later."
    ],
    bullets: [
      "Contact and quote request details",
      "Business and project information you submit",
      "Basic technical or usage information tied to site operation",
      "Client materials shared during project discussions"
    ]
  },
  {
    title: "How Information May Be Used",
    paragraphs: [
      "Information may be used to respond to inquiries, prepare quotes, communicate about potential or active projects, improve the website experience, and support normal business operations.",
      "Elevated Tech Solutions does not intend to sell personal information. Information is collected to support communication, service delivery, and reasonable business administration."
    ]
  },
  {
    title: "Cookies, Analytics, and Third-Party Services",
    paragraphs: [
      "This website is designed to work with minimal friction and may operate with little or no advanced tracking by default. If analytics, embedded tools, scheduling software, forms, or other third-party services are added later, those services may use cookies or collect limited technical information as part of their normal operation.",
      "If the website begins using additional tracking or embedded third-party tools, this policy should be updated to reflect those changes more specifically."
    ]
  },
  {
    title: "Sharing, Storage, and Security",
    paragraphs: [
      "Information may be shared only when reasonably necessary to operate the website, deliver services, or use standard third-party business tools such as hosting providers, form tools, email systems, or related project software.",
      "Elevated Tech Solutions aims to use reasonable measures to protect submitted information, but no website or internet transmission can be guaranteed completely secure. Visitors should avoid sending highly sensitive information through normal web forms unless a more secure process has been arranged."
    ]
  },
  {
    title: "Your Choices and Policy Updates",
    paragraphs: [
      "If you would like to ask about information previously submitted, request updates to your information, or raise a privacy-related concern, you may contact Elevated Tech Solutions using the contact methods listed on this site.",
      "This Privacy Policy may be updated from time to time as the business, website features, or legal needs change. Updated versions should be posted on this page with a revised effective date."
    ]
  }
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Privacy Policy"
      title="A starter privacy policy for the Elevated Tech Solutions website."
      description="This page outlines how information may be collected and used when visitors browse the site, submit inquiries, or begin a quote conversation."
      lastUpdated="March 24, 2026"
      currentHref="/privacy-policy"
      noteTitle="Starter Legal Copy"
      noteText="This is reasonable starter legal copy for a small web services business website. It should be reviewed and adjusted for the exact tools, workflows, and jurisdictional requirements that apply to the live business."
      sections={sections}
    />
  );
}
