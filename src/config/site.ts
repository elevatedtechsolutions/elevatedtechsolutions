const fallbackUrl = "http://localhost:3000";

const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
] as const;

const footerNavigation = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/site-policy", label: "Site Policy" }
] as const;

const legalNavigation = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/site-policy", label: "Site Policy" }
] as const;

export const siteConfig = {
  name: "Elevated Tech Solutions",
  shortName: "ETS",
  description:
    "Affordable, modern websites for small businesses, nonprofits, and restaurants with practical support and a premium presentation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || fallbackUrl,
  ogImage: "/opengraph-image",
  primaryNavigation,
  footerNavigation,
  legalNavigation,
  cta: {
    href: "/contact",
    label: "Start a Project"
  },
  keywords: [
    "web design agency",
    "small business websites",
    "restaurant website design",
    "nonprofit websites",
    "modern web development",
    "Grand Rapids web design",
    "West Michigan web design",
    "small business web developer",
    "Elevated Tech Solutions"
  ]
} as const;

export const allSiteRoutes = Array.from(
  new Map(
    [...siteConfig.primaryNavigation, ...siteConfig.footerNavigation].map((item) => [
      item.href,
      item
    ])
  ).values()
);
