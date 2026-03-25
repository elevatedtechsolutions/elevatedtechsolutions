import type { MetadataRoute } from "next";

import { allSiteRoutes, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allSiteRoutes.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7
  }));
}
