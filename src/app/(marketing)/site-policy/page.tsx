import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Site Policy",
  description:
    "Supporting site policy covering cookies, third-party tools, and general website operation.",
  path: "/site-policy",
  keywords: ["site policy", "cookie policy"]
});

const sections = [
  {
    title: "Purpose of This Page",
    paragraphs: [
      "This Site Policy provides a simpler supporting reference for visitors who want a quick overview of how the Elevated Tech Solutions website is intended to operate.",
      "It works alongside the Privacy Policy and Terms of Service and is meant to summarize basic expectations around cookies, third-party tools, and general site use."
    ]
  },
  {
    title: "Cookies and Similar Technologies",
    paragraphs: [
      "This website is intended to remain lightweight and may use minimal cookies by default. If essential tools, analytics, embedded media, form providers, scheduling tools, or performance services are added later, those tools may rely on cookies or similar technologies to function properly.",
      "Visitors who prefer stricter control over cookies can generally manage those settings through their browser or device preferences."
    ]
  },
  {
    title: "Third-Party Tools and Links",
    paragraphs: [
      "The website may include or later add links to third-party platforms, external services, or embedded tools. Those services operate under their own policies and terms, and Elevated Tech Solutions is not responsible for the content or policies of third-party websites.",
      "If outside tools are added to support contact, hosting, analytics, maps, scheduling, or similar features, this page and related legal pages should be updated to reflect those changes."
    ]
  },
  {
    title: "Accessibility, Performance, and Content",
    paragraphs: [
      "Elevated Tech Solutions aims to build and maintain a website that feels clear, usable, and performant across common modern devices. Reasonable efforts may be made over time to improve accessibility, readability, and overall user experience.",
      "Website content is for general informational purposes and may change as services, policies, project examples, and business details evolve."
    ]
  },
  {
    title: "Policy Updates",
    paragraphs: [
      "This Site Policy may be revised as the website matures and new tools or features are introduced. When updates are made, the revised version should be posted on this page with an updated effective date.",
      "For fuller details about privacy or terms, visitors should review the Privacy Policy and Terms of Service pages."
    ]
  }
] as const;

export default function SitePolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Site Policy"
      title="A simple supporting policy for how this website is intended to operate."
      description="This page provides a clean, high-level summary of cookie use, third-party tools, site expectations, and general website administration."
      lastUpdated="March 24, 2026"
      currentHref="/site-policy"
      noteTitle="Supporting Policy"
      noteText="This page is meant to complement the Privacy Policy and Terms of Service with a simpler overview. It is starter legal/supporting copy and should be reviewed if the website adds new tools, analytics, or embedded services."
      sections={sections}
    />
  );
}
