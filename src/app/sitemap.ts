import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arkiwooduae.com";

  const services = [
    "MEP Drawings",
    "Interior Design",
    "Architectural Design",
    "Carpentry & Woodworks",
    "Approvals and Authorities",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ourservices`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/ourservices/${encodeURIComponent(service)}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}