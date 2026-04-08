import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Site Policy",
  description:
    "Website operations notice covering site operation, external tools, and visitor expectations.",
  path: "/site-policy",
  keywords: ["site policy", "cookie policy"]
});

const sections = [
  {
    title: "Role of This Page",
    paragraphs: [
      "This page is a limited website operations notice. Its purpose is to explain, at a high level, how the Elevated Tech Solutions LLC website is maintained and what visitors should expect when using it.",
      "It works alongside the Privacy Policy and Terms of Service. Privacy disclosures belong on the Privacy Policy page, and website-use terms belong on the Terms of Service page."
    ]
  },
  {
    title: "Site Operation and Availability",
    paragraphs: [
      "Elevated Tech Solutions LLC aims to keep this website available, usable, and reasonably up to date, but uninterrupted availability cannot be guaranteed at all times.",
      "Content, examples, page structure, and service descriptions may be updated as the business, website, or operating practices change."
    ]
  },
  {
    title: "Cookies, Technical Tools, and External Services",
    paragraphs: [
      "This website is intended to remain lightweight and is not built around broad advertising or behavior-based tracking. Basic technical tools, hosting services, security measures, and form-related services may still use limited cookies or similar technologies when necessary for site operation.",
      "The website may also link to third-party services or websites. Those services operate under their own terms and privacy practices, and Elevated Tech Solutions is not responsible for their content or policies."
    ]
  },
  {
    title: "Accessibility and Content Standards",
    paragraphs: [
      "Elevated Tech Solutions LLC aims to present a website that is clear, readable, and usable across common modern devices. Accessibility and usability improvements may be made over time as the site evolves.",
      "Examples, screenshots, and supporting visuals are provided to explain service direction and website quality. They should not be read as guarantees of identical results for every project."
    ]
  },
  {
    title: "Updates to This Policy",
    paragraphs: [
      "This Site Policy may be updated when the website changes, when new tools are added, or when operating practices are adjusted.",
      "The current version will be posted on this page with the latest revision date."
    ]
  }
] as const;

export default function SitePolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Site Policy"
      title="A narrow website operations notice for this site."
      description="This page covers general website operation, technical tools, external links, accessibility intent, and site updates. It is meant to complement the Privacy Policy and Terms of Service, not replace them."
      lastUpdated="April 6, 2026"
      currentHref="/site-policy"
      noteTitle="Limited Purpose"
      noteText="Use this page for high-level website operations and site-notice information. For privacy and data-handling details, read the Privacy Policy. For website-use terms, read the Terms of Service. Questions about this page or site operation can be directed to info@elevatedtechsolutionsllc.com."
      sections={sections}
    />
  );
}
