import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arkiwooduae.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/ourservices`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ourservices/MEP%20Drawings`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ourservices/Interior%20Design`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ourservices/Architectural%20Design`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ourservices/Carpentry%20&%20Woodworks`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ourservices/Approvals%20and%20Authorities`, lastModified: new Date(), priority: 0.8 },
  ];
}
