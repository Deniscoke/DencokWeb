import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/ai"],
    },
    sitemap: `${clinic.url}/sitemap.xml`,
  };
}
