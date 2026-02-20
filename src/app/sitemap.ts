import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/case-studies";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://craft-studio.com";

    // Static routes
    const routes = ["", "/about", "/services", "/work", "/contact"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic portfolio routes
    const slugs = getAllSlugs();
    const portfolioRoutes = slugs.map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...portfolioRoutes];
}
