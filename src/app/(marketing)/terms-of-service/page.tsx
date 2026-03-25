import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Starter terms for use of the Elevated Tech Solutions website.",
  path: "/terms-of-service",
  keywords: ["terms of service"]
});

const sections = [
  {
    title: "Website Use",
    paragraphs: [
      "These Terms of Service govern general use of the Elevated Tech Solutions website. By accessing or using the site, you agree to use it only for lawful purposes and in a way that does not interfere with the website, its functionality, or other visitors.",
      "Website content is provided for general informational purposes and may be updated, revised, or removed at any time without notice."
    ]
  },
  {
    title: "Quotes, Proposals, and Service Discussions",
    paragraphs: [
      "Submitting an inquiry or requesting a quote does not create a client relationship by itself. Any project work, support arrangement, or recurring service should be governed by a separate agreement, proposal, or written approval that defines the actual scope of work.",
      "Descriptions on this website are meant to explain service direction, but final pricing, timelines, deliverables, and responsibilities should be confirmed in project-specific documentation."
    ]
  },
  {
    title: "Client Responsibilities",
    paragraphs: [
      "Clients are generally responsible for providing accurate information, necessary content, brand materials, review feedback, and timely approvals needed to complete a project well.",
      "Delays in content, approvals, payments, or required information may affect timelines and delivery expectations."
    ],
    bullets: [
      "Provide accurate project information",
      "Supply content, images, menus, or business details as needed",
      "Review work and provide feedback within a reasonable time",
      "Honor the agreed project scope and payment expectations"
    ]
  },
  {
    title: "Intellectual Property and Ownership",
    paragraphs: [
      "Unless otherwise stated in a separate agreement, website content, concepts, code, designs, and supporting assets created during a project may remain subject to the terms defined in the final proposal or service agreement.",
      "The goal should be to keep ownership expectations clear, especially around domains, client-provided materials, final deliverables, and any third-party licensed assets used in the build."
    ]
  },
  {
    title: "Third-Party Services and Limitations",
    paragraphs: [
      "Projects may rely on third-party tools or services such as hosting platforms, domains, analytics tools, integrations, payment processors, or software vendors. Elevated Tech Solutions cannot guarantee the uptime, security, or long-term availability of third-party services outside its direct control.",
      "To the fullest extent permitted by law, the website and its content are provided without warranties of any kind. Elevated Tech Solutions is not responsible for indirect, incidental, or consequential damages arising from website use, third-party service failures, or reliance on general website information."
    ]
  },
  {
    title: "Changes and Contact",
    paragraphs: [
      "These Terms of Service may be updated from time to time as the website and business operations change. The most current version should be posted on this page with an updated effective date.",
      "Questions about these terms or about prospective services can be directed to Elevated Tech Solutions through the contact methods listed on this website."
    ]
  }
] as const;

export default function TermsOfServicePage() {
  return (
    <LegalPageTemplate
      eyebrow="Terms of Service"
      title="Starter terms for use of the Elevated Tech Solutions website."
      description="These terms describe general website use and set expectations around inquiries, project discussions, service scope, and related website content."
      lastUpdated="March 24, 2026"
      currentHref="/terms-of-service"
      noteTitle="Important Note"
      noteText="These are starter website terms, not a substitute for project-specific agreements or legal review. Final client work should still be governed by separate written scope, pricing, and ownership terms."
      sections={sections}
    />
  );
}
