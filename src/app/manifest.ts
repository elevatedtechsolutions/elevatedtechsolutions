import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#040814",
    theme_color: "#040814",
    icons: [
      {
        src: "/images/branding/elevated-tech-solutions-mark.png",
        sizes: "768x768",
        type: "image/png"
      }
    ]
  };
}
