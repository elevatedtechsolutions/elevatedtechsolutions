import type { Metadata } from "next";

import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for use of the Elevated Tech Solutions LLC website.",
  path: "/terms-of-service",
  keywords: ["terms of service"]
});

const sections = [
  {
    title: "Acceptance of These Terms",
    paragraphs: [
      "These Terms of Service govern use of the Elevated Tech Solutions LLC website. By accessing or using the site, you agree to these terms.",
      "If you do not agree to these terms, you should not use the website."
    ]
  },
  {
    title: "Permitted and Prohibited Use",
    paragraphs: [
      "You may use this website to review service information, learn about Elevated Tech Solutions LLC, and contact the business about possible work or support.",
      "You may not use the site in a way that is unlawful, fraudulent, abusive, disruptive, security-related, or intended to interfere with the website, the business, or other visitors. That includes attempts to gain unauthorized access, send malicious code, misuse forms, scrape or copy content for improper use, or misrepresent your identity or intentions."
    ]
  },
  {
    title: "Informational Nature of Website Content",
    paragraphs: [
      "Website content is provided for general informational purposes only. Service descriptions, examples, screenshots, timelines, and supporting materials are intended to explain the business and its service direction, not to create a binding offer by themselves.",
      "Elevated Tech Solutions LLC may update, revise, or remove website content at any time."
    ]
  },
  {
    title: "No Client Relationship From Website Use Alone",
    paragraphs: [
      "Browsing the website, sending an inquiry, or requesting a quote does not by itself create a client relationship, partnership, joint venture, employment relationship, or ongoing obligation to provide services.",
      "A client relationship begins only when both sides enter into a separate written agreement, approved proposal, or other written project scope that Elevated Tech Solutions LLC accepts."
    ]
  },
  {
    title: "Quotes, Proposals, and Separate Client Agreements",
    paragraphs: [
      "Quotes, proposals, estimates, and service discussions are informational until confirmed in a separate signed agreement, written approval, or accepted project scope.",
      "Project-specific rights and obligations, including pricing, scope, revisions, ownership, payment terms, deliverables, timelines, and post-launch support, are controlled by the separate agreement that applies to that project."
    ]
  },
  {
    title: "Responsibilities During Project Discussions",
    paragraphs: [
      "If you contact Elevated Tech Solutions LLC about a project, you are responsible for providing accurate information about your business, project needs, contact details, and decision-making process.",
      "If a project moves forward, you are generally expected to provide timely content, approvals, feedback, and payment in accordance with the separate agreement that governs the work. Delays in those items may affect scheduling, delivery, and final timing."
    ],
    bullets: [
      "Provide accurate project and contact information",
      "Supply content, images, menus, or business details as needed",
      "Review work and provide feedback within a reasonable time",
      "Honor the agreed scope, approval, and payment terms"
    ]
  },
  {
    title: "Intellectual Property and Ownership",
    paragraphs: [
      "The public website and its content, including branding, copy, layout, graphics, design elements, screenshots, and other materials on this site, belong to Elevated Tech Solutions LLC or its licensors unless otherwise stated.",
      "Project deliverable ownership is governed by separate signed client agreements. Client-provided materials remain the client's responsibility and are subject to whatever ownership, license, or permission rights the client has to provide them for project use.",
      "Nothing on this public website transfers rights in future project work, client deliverables, or client materials except as expressly stated in a separate written agreement."
    ]
  },
  {
    title: "Third-Party Services and External Links",
    paragraphs: [
      "This website may rely on or link to third-party platforms and services, including hosting providers, databases, email services, domain services, image hosts, and other external tools or infrastructure.",
      "Elevated Tech Solutions LLC is not responsible for the content, availability, terms, privacy practices, uptime, or security of third-party services outside its direct control. Use of those services may also be subject to the third party's own terms and policies."
    ]
  },
  {
    title: "Warranty Disclaimer",
    paragraphs: [
      "To the fullest extent permitted by law, this website and its content are provided on an as-is and as-available basis, without warranties of any kind, whether express or implied.",
      "Elevated Tech Solutions LLC does not guarantee that the website will always be available, error-free, secure, or uninterrupted, or that general website content will apply to every project or visitor circumstance."
    ]
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Elevated Tech Solutions LLC is not liable for indirect, incidental, special, consequential, or similar damages arising from use of the website, inability to use the website, reliance on general website content, or failures of third-party services outside its direct control.",
      "Any liability relating to actual client work is governed by the separate written agreement that applies to that project."
    ]
  },
  {
    title: "Indemnity and Misuse Protection",
    paragraphs: [
      "You agree not to use the website in a way that causes harm to Elevated Tech Solutions LLC or others.",
      "To the fullest extent permitted by law, you agree to indemnify and hold Elevated Tech Solutions LLC harmless from claims, losses, liabilities, and expenses arising out of your misuse of the website, your violation of these terms, or your infringement of the rights of another person or business."
    ]
  },
  {
    title: "Changes to the Website and These Terms",
    paragraphs: [
      "Elevated Tech Solutions LLC may revise the website, change website content, and update these Terms of Service from time to time.",
      "When these terms are updated, the revised version will be posted on this page with an updated effective date. Continued use of the website after that update means you accept the revised terms."
    ]
  },
  {
    title: "Governing Law and Venue",
    paragraphs: [
      "These Terms of Service are governed by the laws of the State of Michigan, without regard to conflict-of-law rules.",
      "If a dispute relating to these website terms must be brought in court, the dispute should be brought in a court of competent jurisdiction located in Michigan, unless applicable law requires otherwise."
    ]
  },
  {
    title: "Severability, Entire Terms, and Related Policies",
    paragraphs: [
      "If any part of these Terms of Service is found unenforceable, the remaining provisions will continue in effect to the fullest extent permitted by law.",
      "These Terms of Service govern public use of the website itself. They do not replace any separate signed client agreement, proposal, or written project scope that applies to actual client work.",
      "Privacy-related information is addressed in the Privacy Policy. If there is a conflict between these public website terms and a separate signed client agreement, the signed client agreement controls for the project it covers."
    ]
  }
] as const;

export default function TermsOfServicePage() {
  return (
    <LegalPageTemplate
      eyebrow="Terms of Service"
      title="Terms for using the Elevated Tech Solutions LLC website."
      description="These terms govern general website use, explain the informational nature of public website content, and clarify how website terms differ from separate client agreements for actual project work."
      lastUpdated="April 6, 2026"
      currentHref="/terms-of-service"
      noteTitle="Relationship To Client Agreements"
      noteText="This page governs use of the public website. Project-specific pricing, deliverables, ownership, revisions, timing, and payment terms are controlled by separate written client agreements when work is actually approved. Questions about these website terms can be directed to info@elevatedtechsolutionsllc.com."
      sections={sections}
    />
  );
}
