import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://jadzholdings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/ventures",
    "/ventures/spaavs",
    "/ventures/floqmedia",
    "/approach",
    "/partnerships",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
  }));
}
