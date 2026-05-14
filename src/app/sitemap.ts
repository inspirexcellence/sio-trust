import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://siotrust.org";
  
  const routes = ["", "/about", "/donate", "/volunteer", "/contact", "/programs", "/events", "/gallery"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return [...routes];
}
