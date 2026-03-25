import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false
}: CreatePageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();
  const metaTitle = title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: path === "/" ? { absolute: siteConfig.name } : title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path
    },
    robots: {
      index: !noIndex,
      follow: !noIndex
    },
    openGraph: {
      title: metaTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
